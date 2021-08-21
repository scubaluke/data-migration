import React from 'react'
import {Table} from 'react-bootstrap'

export default function TableComponent({data, tableTitle}) {
    const renderedRows = data.map(item => {
       return (<tr key={item.id} >
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    {item.favorite_flavor && <td>{item.favorite_flavor}</td>}
                </tr>)
    })
    return (
        <>
        <h3>{tableTitle}</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                     <th>Favorite Flavor</th>
                </tr>
                  </thead>
                <tbody>
                        {renderedRows}
                </tbody>
          
        </Table>
        </>
    )
}
