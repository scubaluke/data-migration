import TableComponent from './TableComponent'

export default function Report({ data }) {
    const { corruptedRecords, missedRecords, newlyCreatedRecords, runTime } = data;

    return (
        <>
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
