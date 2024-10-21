import React, { useState } from "react";
import ListItems from "./ListItems";


const Todolist=()=>{

    const [inputItem,setinputItem]=useState("")
    const [list,setList]=useState([])
    const [added,setAdded]=useState(false)
    const [deleted,setDeleted]=useState(false)

    const handleInputChange=(e)=>{
        setinputItem(e.target.value)
        setAdded(false)
        setDeleted(false)
    }

    const handleAddItem=()=>{
        setList([...list,inputItem])
        setinputItem("")
        setAdded(true)
        setDeleted(false)
    }

    const deleteItems=(id)=>{
        // console.log("deleted");
        setList((prevValue)=>{
            return prevValue.filter((arrEle,index)=>{
                return index !== id
            })
        });
        setDeleted(true)
        setAdded(false)
    }
    return(
        <>
        <div className="body">
        {/* <p className="heading">TO DO LIST</p> */}
          <h1>  {added?"Successfully added":""}</h1>
          <h2>  {deleted?"Successfully deleted":""}</h2>
            <input type="text" placeholder="add your list" 
                onChange={handleInputChange}
                value={inputItem}
            />
            <button onClick={handleAddItem}> + </button>

           
                {list.map((ele,index)=>{
                    return (
                        <ListItems 
                        items={ele}
                        key={index}
                        id={index}
                        deleteFunction={deleteItems}
                        />
                        
                    )
                })}
           
        </div>
        </>
    )
}

export default Todolist