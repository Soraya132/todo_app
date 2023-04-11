import React from 'react'
import {NavLink} from "react-router-dom"
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd'


export default function Navbar() {

  return (
    <nav className='text-DarkGrayishBlue1 font-semibold  text-[16px] bg-VeryLightGray shadow-lg w-[90%] md:shadow-none sm:w-[70%] md:[40%] flex justify-center gap-4 h-[50px] items-center rounded-sm dark:bg-VeryDarkDesaturatedBlue'>
      <NavLink to="/"  className=" md:bg-VeryLightGray dark:bg-VeryDarkDesaturatedBlue">All </NavLink>
      <NavLink to="/active" className=" md:bg-VeryLightGray dark:bg-VeryDarkDesaturatedBlue">Active</NavLink>
      <NavLink to="/completed" className=" md:bg-VeryLightGray dark:bg-VeryDarkDesaturatedBlue"> Completed</NavLink>




    </nav>
  )
}