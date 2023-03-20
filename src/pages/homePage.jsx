import { createRef, useState, useEffect, useMemo } from 'react'

import importFile, { ACCEPT_CSV_ONLY } from '../helpers/importFile'
import downloadCSV from 'helpers/downloadCSV'
import ResultSuccessTable from '../components/ResultTable/index'
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { InfoPageStyles } from './styles'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'

const Home = () => {
  const [values, setValues] = useState([])
  const [fileName, setfileName] = useState(null)
  const [info, setInfo] = useState('')
  const tableRef = createRef(null)

  const classes = InfoPageStyles()

  const csvData = [
    {
      EmpID: 'EmpID',
      ProjectID: 'ProjectID',
      DateFrom: 'DateFrom',
      DateTo: 'DateTo'
    }
  ]

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  const uploadFile = ({ payload, info }) => {
    setInfo(info)
    setValues(payload)
  }

  const handleImportFile = e => {
    setfileName(e.target.files[0].name)
    importFile(e, uploadFile)
  }

  const handleRemoveFile = () => {
    setValues([])
    setfileName('')
    setInfo('')
  }

  const downloadCSVFunc = () => {
    downloadCSV(csvData, 'Employee.csv')
  }

  const loading = false

  return (
    <>
      <h2 style={classes.mainTitle}>
        {'Pair of employees who have worked together'}
      </h2>
      <div style={classes.imageWrapper}>
        <div style={classes.infoWrapperContainer}></div>
        <div style={classes.actionButtonsWrapper}>
          <div style={classes.uploadWrapper}>
            {fileName?.length ? (
              <div style={classes.uploadedContainer}>
                <span style={classes.csvText}>{'Upload .csv file'}</span>
                <span style={classes.fileName}>{fileName}</span>
                <CloseOutlinedIcon
                  style={classes.CloseIcon}
                  onClick={handleRemoveFile}
                />
              </div>
            ) : (
              <div style={classes.labelContainer}>
                <label
                  style={classes.labelWrap}
                  htmlFor="contained-button-file"
                >
                  <span style={classes.downloadIconText}>
                    {'Upload .csv file'}
                  </span>
                  <input
                    style={classes.uploadInput}
                    id="contained-button-file"
                    type="file"
                    accept={ACCEPT_CSV_ONLY}
                    onChange={handleImportFile}
                  />
                  <UploadOutlinedIcon
                    sx={{ fontSize: 40 }}
                    style={classes.uploadIcon}
                  />
                </label>
              </div>
            )}
          </div>
          {values?.length ? (
            <ResultSuccessTable tableRef={tableRef} values={values} />
          ) : (
            <div style={classes.infoWrapperContainer}>
              {info.length > 2 && (
                <div style={classes.infoErrorContainer}>{info}</div>
              )}
              <div style={classes.csvText} onClick={downloadCSVFunc}>
                <DownloadOutlinedIcon
                  style={classes.uploadIcon}
                  sx={{ fontSize: 30 }}
                />
                {'Download Template CSV'}
              </div>
              <p style={classes.csvText}>
                Fill the .csv with employees you would like to add. Don’t change
                the format of the file, please use only .csv format
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default Home
