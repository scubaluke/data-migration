import { useState, useEffect } from 'react'
import axios from 'axios'
import TableComponent from './TableComponent'

export default function Report({ data }) {
    const { corruptedRecords, missedRecords, newlyCreatedRecords, runTime } = data;
    const [dataInCSV, setDataInCSV] = useState(true)

    // fetch data for csv 
    // useEffect(() => {
    const getCSV = async () => {
        const report = await axios.get('/data')
        setDataInCSV(report.data)
        // setLoading(false)
    }

    // }, [])

    return (
        <>
            {/* {dataInCSV && ( */}
            <a
                className='btn btn--primary'
                href={`data:text/csv;charset=utf-8,${encodeURI(
                    dataInCSV
                )}`}
                download='filename.csv'
            >
                ⬇ Download CSV
            </a>
            <button onClick={getCSV()} >test</button>


            {/* )} */}
            <h5>Migration Report Run Time:</h5>
            <p>{runTime} Seconds</p>
            <h5>Stats:</h5>
            <p>{corruptedRecords.length} Corrupted records</p>
            <p>{missedRecords.length} Missed records</p>
            <p>{newlyCreatedRecords.length} Newly Created records</p>
            <TableComponent tableTitle={'Corrupted Records'} data={corruptedRecords} />
            <TableComponent tableTitle={'Missed Records'} data={missedRecords} />
            <TableComponent tableTitle={'Newly Added Records'} data={newlyCreatedRecords} />

        </>
    )
}
