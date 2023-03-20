const EmpID = 'EmpID'
const ProjectID = 'ProjectID'
const DateFrom = 'DateFrom'
const DateTo = 'DateTo'

const downloadCSVFile = (data, fileName = 'contacts.csv') => {
  const BOM = '\uFEFF'
  const templateArray = [`${EmpID};${ProjectID};${DateFrom};${DateTo}`]
  const emloyeeArray = data.map(
    item => `${item.EmpID};${item.ProjectID};${item.DateFrom};${item.DateTo}`
  )
  const stringsArray = templateArray.concat(emloyeeArray)
  const csvContent = BOM + stringsArray.join(',').replace(/,/g, '\n')
  const pom = document.createElement('a')
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  pom.href = url
  pom.setAttribute('download', fileName)
  pom.click()
}

export default downloadCSVFile
