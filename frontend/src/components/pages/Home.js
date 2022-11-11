
import { useRef } from 'react'
import './Home.css'
import Tabs from "../tabs";

function Home() {

    const tabItems = [
        { name: 'Looping Method', id: 'LoopingMethod', ref: useRef() },
        { name: 'Data Structure Method', id: 'DataStructureMethod', ref: useRef() }
    ]
    return (
        <div className='home-page'>
            <h1>Data Migration Report</h1>
            <Tabs tabItems={tabItems} tabName={'DataStructureMethod'} defaultComponent={{ name: 'Data Structure Method', id: 'DataStructureMethod' }} />
        </div>
    )
}

export default Home;