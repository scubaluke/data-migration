import React from 'react'
import TableComponent from './TableComponent'

export default function Report({data}) {
    const { corruptedRecords, missedRecords, newRecords } = data;
    return (
         <> 
         <h5>Stats:</h5>
         <p>{corruptedRecords.length} corrupted records</p> 
         <p>{missedRecords.length} missed records</p>
         <p>{newRecords.length} Newly added records</p>
    <TableComponent tableTitle={'Corrupted Records'} data={corruptedRecords} />
    <TableComponent tableTitle={'Missed Records'} data={missedRecords} />
    <TableComponent tableTitle={'Newly Added Records'} data={newRecords} />

   </>
    )
}
