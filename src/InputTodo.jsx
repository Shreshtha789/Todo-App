import React,{useState} from "react";
import './InputTodo.css';

function InputTodo(){
    
    function changeHandle(e){
        console.log(e.target.value);
    }

    function addHandle(){
        //let a = document.createElement('div');
        
    }
    
    return(
        <div>
            <input className="input" onChange={changeHandle}></input>
            <button className="addItem" onClick={addHandle}>ADD ITEM</button>
        </div>
    );
}

export default InputTodo;