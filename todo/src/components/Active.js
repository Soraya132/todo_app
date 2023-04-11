import React from 'react'
import Todo from './Todo'

export default function Active({list,handleRemove,handleCheck}) {
  return (
      <Todo list={list} handleRemove={handleRemove} handleCheck={handleCheck} />

  )
}
