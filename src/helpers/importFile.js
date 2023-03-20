import { parse } from 'papaparse'
import { differenceInCalendarDays, dateFns, format, min } from 'date-fns'

// To accept CSV (.csv), Excel Files 97-2003 (.xls), Excel Files 2007+ (.xlsx) files
export const ACCEPT_CSV =
  '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
export const ACCEPT_CSV_ONLY = '.csv'

export const excelOnly =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'

export const readFile = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

function updateProjectMaxDifference(project, dateFrom, dateTo, emp1, emp2) {
  let dif = differenceInCalendarDays(dateTo, dateFrom)

  if (!project.MaxDifference || project.MaxDifference < dif) {
    project.MaxDifference = dif
    project.Emp1 = emp1
    project.Emp2 = emp2
  }
}

const getProjectInfo = arr => {
  const result = {
    ProjectID: arr[0].ProjectID
  }

  for (let i = 0; i < arr.length; i++) {
    if (
      differenceInCalendarDays(arr[i].DateTo, arr[i].DateFrom) <
      result.MaxDifference
    ) {
      continue
    }

    for (let j = i + 1; j < arr.length; j++) {
      if (
        differenceInCalendarDays(arr[j].DateTo, arr[j].DateFrom) <
        result.MaxDifference
      ) {
        arr.splice(j, 1)
        continue
      }

      if (arr[i].DateFrom >= arr[j].DateFrom) {
        if (arr[i].DateFrom <= arr[j].DateTo) {
          updateProjectMaxDifference(
            result,
            arr[i].DateFrom,
            min([arr[i].DateTo, arr[j].DateTo]),
            arr[i].EmpID,
            arr[j].EmpID
          )
        }
      } else {
        if (arr[j].DateFrom <= arr[i].DateTo) {
          updateProjectMaxDifference(
            result,
            arr[j].DateFrom,
            min([arr[i].DateTo, arr[j].DateTo]),
            arr[i].EmpID,
            arr[j].EmpID
          )
        }
      }
    }
  }

  return result
}

const importFile = ({ target }, callback) => {
  readFile(target.files[0]).then(res => {
    let tableData = []
    let info = ''
    try {
      let result = parse(res, { header: true, skipEmptyLines: true })
      const result1 = result.data.reduce((acc, item) => {
        var proj = item.ProjectID
        const dateTo =
          item.DateTo === 'NULL' ? new Date() : new Date(item.DateTo)

        const dateFrom = new Date(item.dateFrom)

        if (acc[proj]) {
          acc[proj].push({ ...item, DateFrom: dateFrom, DateTo: dateTo })
        } else {
          acc[proj] = [{ ...item, DateFrom: dateFrom, DateTo: dateTo }]
        }
        return acc
      }, {})

      let projectList = []
      Object.values(result1).forEach(projectScope =>
        projectList.push(getProjectInfo(projectScope))
      )

      if (projectList.length < 2) {
        throw new Error('Error in CSV file')
      } else {
        tableData = projectList
      }
    } catch (error) {
      info =
        'Something went wrong. Please choose another file or use a template csv.'
      return callback({
        payload: tableData,
        info: info
      })
    }
    callback({
      payload: tableData,
      info: info
    })
  })
}

export default importFile
