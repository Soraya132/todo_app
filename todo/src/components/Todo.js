import React, { useState } from 'react'
import remove from "../images/icon-cross.svg"
import checkedIcon from "../images/icon-check.svg"
import {AiOutlineClose} from "react-icons/ai"
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd'


export default function Todo({list,handleRemove,handleCheck}) {
  const[characters,updateCharacters] = useState(list)


  function handleOnDragEnd(result){
    const items = Array.from(characters)
    const [reorderedItem] = items.splice(result.source.index,1)
    items.splice(result.destination.index,0,reorderedItem)
    updateCharacters(items)

  }
  return (
        <ul  className={list.length? ' w-[90%] sm:w-[70%] md:w-[50%] mx-auto rounded-t-sm pt-[10px] bg-white dark:bg-VeryDarkDesaturatedBlue flex flex-col  ':""}>
          {list.map((item)=>{
            return(
              <li key={item.id}
              className=' bg-white dark:bg-VeryDarkDesaturatedBlue flex justify-between items-center px-4 py-[20px] border-b-[1px] border-b-LightGrayishBluel  dark:border-b-VeryDarkGrayishBlue1 cursor-pointer'>
                <label className='text-[15px] font-semibold flex items-center mr-5 relative' htmlFor={item.id}>
                       <img src={checkedIcon} className={item.complete?'absolute left-[5px]':"hidden"}/>
                       <input type='checkbox' checked={item.complete} onChange={()=>handleCheck(item.id)} id={item.id}className={!item.complete?"mr-4 appearance-none w-[20px] h-[20px] border-[1px] rounded-full cursor-pointer border-LightGrayishBluel":' cursor-pointer border-LightGrayishBluel mr-4 appearance-none w-[20px] h-[20px] border-[1px] rounded-full  bg-gradient-to-r from-CheckFirst to-CheckSecond'}/>
                       <div className=
                        {item.complete?"line-through  text-LightGrayishBluel dark:text-VeryDarkGrayishBlue1 ":"text-DarkGrayishBlue2 dark:text-LightGrayishBlued cursor-pointer"}>{item.todo}</div>
                </label>
                <button onClick={()=>handleRemove(item.id)} className='w-[15px] h-[15px]'><AiOutlineClose  className='text-DarkGrayishBlue2 dark:text-white'/></button>
             </li>
            )
          })}
        </ul>
        )
  }



{/* <DragDropContext onDragEnd={handleOnDragEnd}>
<Droppable droppableId='characters'>
  {(provided)=>(
     <ul {...provided.droppableProps} ref={provided.innerRef} className={list.length? ' w-[90%] sm:w-[70%] md:w-[50%] mx-auto rounded-t-sm pt-[10px] bg-white dark:bg-VeryDarkDesaturatedBlue flex flex-col  ':""}>
     {characters.map((item,index)=>(
       <Draggable key={item.id} draggableId={item.id} index={index}>
       {(provided)=>(
       <li {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} className=' bg-white dark:bg-VeryDarkDesaturatedBlue flex justify-between items-center px-4 py-[20px] border-b-[1px] border-b-LightGrayishBluel  dark:border-b-VeryDarkGrayishBlue1 cursor-pointer'>
          <label className='text-[15px] font-semibold flex items-center mr-5 relative' htmlFor={item.id}>
                 <img src={checkedIcon} className={item.complete?'absolute left-[5px]':"hidden"}/>
                 <input type='checkbox' checked={item.complete} onChange={()=>handleCheck(item.id)} id={item.id}className={!item.complete?"mr-4 appearance-none w-[20px] h-[20px] border-[1px] rounded-full cursor-pointer border-LightGrayishBluel":' cursor-pointer border-LightGrayishBluel mr-4 appearance-none w-[20px] h-[20px] border-[1px] rounded-full  bg-gradient-to-r from-CheckFirst to-CheckSecond'}/>
                 <div className= {item.complete?"line-through  text-LightGrayishBluel dark:text-VeryDarkGrayishBlue1 ":"text-DarkGrayishBlue2 dark:text-LightGrayishBlued cursor-pointer"}>{item.todo}</div>
          </label>
          <button onClick={()=>handleRemove(item.id)} className='w-[15px] h-[15px]'><AiOutlineClose  className='text-DarkGrayishBlue2 dark:text-white'/></button>
       </li>
      )}
  </Draggable>
     ))}
       {provided.placeholder}
   </ul>
  )}
</Droppable>
</DragDropContext> */}

