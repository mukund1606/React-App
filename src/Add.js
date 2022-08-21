import React from 'react'
import './Add.css';

function Add(props) {
    let vis = props.visibility;
    function abc(e) {
        props.hide();
        props.data(e);
    }
    let temparr = {
        "name": "",
        "charname": "",
        "imageURL": "",
        "imgalt": "",
        "weapons": "",
        "superpower": ""
    }
    return (
        <>
            <div className='addchar' style={{ visibility: vis, marginLeft: props.margin }}>
                <div className='add-header'>
                    <h1>Add Character</h1>
                    <i className="far fa-times-circle" onClick={props.hide}></i>
                </div>
                <div className='details-form'>
                    <input name="name" placeholder='Name' onChange={(e) => {
                        temparr.name = e.target.value;
                        temparr.imgalt = e.target.value;
                    }} />
                    <input name="charname" placeholder='Character Name' onChange={(e) => temparr.charname = e.target.value} />
                    <input name="weapons" placeholder='Weapons' onChange={(e) => temparr.weapons = e.target.value} />
                    <input name="superpower" placeholder='Super Power' onChange={(e) => temparr.superpower = e.target.value} />
                    <input name="imageURL" placeholder='Image Source' onChange={(e) => temparr.imageURL = e.target.value} />
                    <button className='add-button' onClick={() => { abc(temparr) }}>Add Marvel Character</button>
                </div>
            </div>
        </>
    )
}

export default Add;