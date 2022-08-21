import Add from './Add';
import './App.css';
import Avenger from './Avenger';
import { useState } from 'react';

function App() {
    let [data, setData] = useState([
        {
            "name": "IronMan",
            "charname": "Tony Stark",
            "imageURL": "https://i.pinimg.com/564x/d7/bd/93/d7bd934adc5e5a50da570cb1bc98e946.jpg",
            "imgalt": "IronMan",
            "weapons": "Armor",
            "superpower": "Intelligence"
        },
        {
            "name": "SpiderMan",
            "charname": "Peter Parker",
            "imageURL": "https://i.pinimg.com/564x/bc/4c/a5/bc4ca55a187c1ec417fb254e580918a5.jpg",
            "imgalt": "SpiderMan"
        },
        {
            "name": "Thor",
            "charname": "Thor",
            "imageURL": "https://i.pinimg.com/564x/6d/ab/d2/6dabd294da8f4a3ce9c739d91ada3d2a.jpg",
            "imgalt": "Thor"
        },
        {
            "name": "Captain America",
            "charname": "Steve Rogers",
            "imageURL": "https://i.pinimg.com/564x/09/29/eb/0929ebfc354683eb818fc143d23f9bf3.jpg",
            "imgalt": "Captain America"
        },
        {
            "name": "Thanos",
            "charname": "Thanos",
            "imageURL": "https://i.pinimg.com/736x/e8/16/59/e81659c3ff56354819a45ca49b265a63.jpg",
            "imgalt": "Thanos"
        },
        {
            "name": "Hulk",
            "charname": "Bruce Banner",
            "imageURL": "https://i.pinimg.com/564x/a8/a4/75/a8a475f6fd643419d403b3a84419e80b.jpg",
            "imgalt": "Hulk"
        }
    ])

    function dele(e) {
        let temp = [...data];
        temp.splice(e, 1);
        setData(temp);
    }

    function change(e) {
        let temp = [...data, e];
        setData(temp);
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
