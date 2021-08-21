import React, { useState, useEffect} from 'react'
import axios from 'axios'
import TableComponent from './components/TableComponent'
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
console.log(data);
console.log("corrupted",data.corruptedRecords);
console.log('missed', data.missedRecords);
console.log('new', data.newRecords);
  return (
    <div className="App">
   <h1>Data Migration Report</h1>
  { loading ? <Loader /> : ( <> <p>{data.corruptedRecords.length} corrupted records</p> <p>{data.missedRecords.length} missed records</p><p>{data.newRecords.length} new records</p>
   <TableComponent tableTitle={'Corrupted Records'} data={data.corruptedRecords} />
   </>)}
 
    </div>
  );
}


export default App;
