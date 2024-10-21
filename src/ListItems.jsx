import React from 'react'

const ListItems = ({items,deleteFunction,id}) => {

    console.log(id);
    
  return (
    <div className='listitems'>
      <h3 >{items}</h3>
        <button onClick={()=>{deleteFunction(id)}}>x</button>
    </div>
  )
}

export default ListItems
