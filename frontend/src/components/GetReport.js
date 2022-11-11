import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Report from './Report'
import Loader from './Loader'

function Reports({ method }) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getReport = async () => {
      const report = await axios.get(`/report/:${method}`)
      setData(report.data)
      setLoading(false)
    }
    getReport()
  }, [])

  return (
    <>
      {loading ? <Loader /> : <Report data={data} />}
    </>
  );
}


export default Reports;