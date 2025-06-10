import React,{useState} from 'react';

function ColorPicker(){
const[color,setColor] = useState("#ffffff");

function handleColorChange(event){
    setColor(event.target.value);
}

return(
    <>
    <div className="color-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{background:color}}>
            <p>Selected color: {color}</p>
        </div>
        <div className="colorChange">
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    </div>
    </>)
}



export default ColorPicker