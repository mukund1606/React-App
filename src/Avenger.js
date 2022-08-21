import "./Avenger.css";
// import { useState } from 'react';

function Avenger(props) {
    function del() {
        props.dele(props.index);
        disappear("avengersdetail" + props.index);
    }
    function appear(e) {
        let dat = document.getElementsByClassName(e)
        dat[0].style.zIndex = 999;
        dat[0].style.visibility = "visible";
        dat[0].style.opacity = 1;
    }
    function disappear(e) {
        let dat = document.getElementsByClassName(e)
        dat[0].style.zIndex = -1;
        dat[0].style.visibility = "hidden";
        dat[0].style.opacity = 0;

    }
    return (
        <>
            <div className='avenger' onClick={() => appear("avengersdetail" + props.index)}>
                <img className="charimage" src={props.avenger.imageURL} alt={props.avenger.imgalt} />
                <h1 className="name">{props.avenger.name}</h1>
            </div>
            <div className={"avenger-detailed avengersdetail" + props.index}>
                <i className="far fa-times-circle" onClick={() => disappear("avengersdetail" + props.index)}></i>
                <img className="charimage" src={props.avenger.imageURL} alt={props.avenger.imgalt} />
                <div className="all">
                    <div className="details">
                        <h1 className="name">Name: {props.avenger.name}</h1>
                        <h2 className="charname">Character Name: {props.avenger.charname}</h2>
                        <h2 className="weapon">Weapons: {props.avenger.weapons}</h2>
                        <h2 className="superpower">Super Power: {props.avenger.superpower}</h2>
                    </div>
                    <div className="delete">
                        <i className="fa-solid fa-trash" onClick={del}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Avenger;