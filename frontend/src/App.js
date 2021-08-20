import React, { useState, useEffect} from 'react'
import axios from 'axios'

function App() {
useEffect(() => {
  const getReport = async () => {
  const report = await axios.get('/old')
  console.log(report);
  }
  getReport()


}, [])

  return (
    <div className="App">
   <h1>App</h1>
    </div>
  );
}

export default App;
