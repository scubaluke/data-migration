import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Report from './components/Report'
import Loader from './components/Loader'

function App() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const getReport = async () => {
  const report = await axios.get('/report')
  console.log(report);
  setData(report.data)
  setLoading(false)
  }
  getReport()
}, [])

  return (
    <div className="App">
   <h1>Data Migration Report</h1>
  { loading ? <Loader /> : <Report data={data} /> }
 
    </div>
  );
}


export default App;
