import Add from './Add';
import './App.css';
import Avenger from './Avenger';
import { useState, useEffect } from 'react';

function App() {
    useEffect(() => {
        let localData = localStorage.getItem("marvel");
        // console.log(localData)

        if (localData === null) {
            localStorage.setItem("marvel", JSON.stringify([]));
        }
        else {
            setData(JSON.parse(localData));
        }
    }, [])
    let [data, setData] = useState([]);

    function dele(e) {
        let temp = [...data];
        temp.splice(e, 1);
        setData(temp);
        localStorage.setItem('marvel', JSON.stringify(temp));
    }

    function change(e) {
        let temp = [...data, e];
        setData(temp);
        localStorage.setItem('marvel', JSON.stringify(temp));
    }

    let [vis, setVis] = useState([0, "hidden"])


    function addchar() {
        setVis([0, "visible"]);
    }

    function hide() {
        setVis([-350, "hidden"]);
    }

    return (
        <>
            <div className='header'>
                <h1>Marvel Library</h1>
                <i className="fas fa-plus-square" onClick={addchar}></i>
            </div>
            <Add visibility={vis[1]} hide={hide} margin={vis[0]} data={change} />
            <div className='main-content'>
                {data.map((avenger, index) => {
                    return (
                        <Avenger key={index} avenger={avenger} index={index} total={data.length} dele={dele} />
                    )
                })}
            </div>
        </>
    );
}

export default App;
