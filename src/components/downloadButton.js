import { Button } from "./index.js"

const DownloadButton = ({ headers = [],data = [],fileName = ``,fileType = `text/csv` }) => {
  const downloadFile = ({ data,fileName,fileType }) => {
    const blob = new Blob([data],{ type: fileType })
  
    const a = document.createElement(`a`)
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent(`click`,{
      view: window,
      bubbles: true,
      cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
  }

  const exportToCsv = e => {
    if(!headers || !data || !fileName) {
      alert(`Insufficient information`)
      return
    }
    e.preventDefault()
    headers.join(`,`)
    headers = [headers]

    let csv = data.reduce((acc,d) => {
      const values = Object.values(d)
      acc.push(values.join(`,`))
      return acc
    },[])
  
    downloadFile({
      data: [...headers,...csv].join(`\n`),
      fileName,
      fileType,
    })
  }
  return (
    <Button text="Download" onClick={e => exportToCsv(e)}></Button>
  )
}

export default DownloadButton