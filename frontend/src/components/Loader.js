import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function Loader() {
    return (
        <div style={{display: 'flex', alignItems:'center', flexDirection: 'column'}} >
             <h3>Your report is loading...</h3>
             <Spinner animation="grow" />
            
        </div>
    )
}
