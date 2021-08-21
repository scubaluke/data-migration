import React, { useState, useEffect} from 'react'
import axios from 'axios'

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
console.log(data);
console.log("corrupted",data.corruptedRecords);
console.log('missed', data.missedRecords);
console.log('new', data.newRecords);
  return (
    <div className="App">
   <h1>App</h1>
  { loading ? <h3>Loading...</h3>  : ( <> <p>{data.corruptedRecords.length} corrupted records</p> <p>{data.missedRecords.length} missed records</p><p>{data.newRecords.length} new records</p> </>)}
    </div>
  );
}


export default App;
