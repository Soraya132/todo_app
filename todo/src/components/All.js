import React from 'react'
import remove from "../images/icon-cross.svg"
import Todo from "./Todo"


export default function All({list,handleRemove,handleCheck}) {
  return (
            <Todo list={list} handleRemove={handleRemove} handleCheck={handleCheck} />
  )
}