import React, { useState } from 'react'
import {BsFillMoonStarsFill,BsFillSunFill} from "react-icons/bs"
import Todo from './Todo'
import { useEffect } from 'react'
import {Route,Routes} from "react-router-dom"
import Navbar from './Navbar'
import All from './All'
import Active from './Active'
import Completed from './Completed'
import Form from './Form'



const getItems = ()=>{
    let list = localStorage.getItem("list")
    if(list){
        return JSON.parse(localStorage.getItem("list"))
    }else{
        return []
    }

}
const getActive =()=>{
    let active = localStorage.getItem("active")
    if(active){
        return JSON.parse(localStorage.getItem("active"))
    }else{
        return[]
    }
}
const getCompleted =()=>{
    let completed = localStorage.getItem("completed")
    if(completed){
        return JSON.parse(localStorage.getItem("completed"))
    }else{
        return[]
    }
}


export default function Page() {
    const [darkMode,setDarkMode]= useState(false)
    const [name,setName] = useState("")
    const [list,setList] = useState(getItems())
    const [active,setActive] = useState(getActive())
    const [completed,setCompleted] = useState(getCompleted())

    const handleSubmit = (e)=>{
        e.preventDefault();
        let item = {id:new Date().getTime().toString(),
                    complete:false,
                    todo:name
                }
        if(name){
            setList([...list,item])
            setActive([...active,item])
        }
    setName("")
    }


    const handleRemove = (id)=>{
       setList(list.filter((item)=> item.id !==id))
       setActive(list.filter((item)=> item.id !==id && !item.complete))
       setCompleted(list.filter((item)=> item.id !==id && item.complete))
    }



    const handleCheck = (id)=>{
        const newList = [...list]
        const checked = newList.find((item)=> item.id ===id)
        checked.complete = !checked.complete
        setList(newList)
        setActive(newList.filter((item)=> !item.complete))
        setCompleted(newList.filter((item)=>  item.complete))

    }

    const handleRemoveComplete =()=>{
        const remain = list.filter((item)=> !item.complete)
        setList(remain)
        setCompleted([])
    }

    useEffect(()=> {
        localStorage.setItem("list",JSON.stringify(list))
        localStorage.setItem("active",JSON.stringify(active))
        localStorage.setItem("completed",JSON.stringify(completed))
    },[list])

  return (
    <main className={darkMode?"dark":""}>
        <section className='flex flex-col  dark:bg-mobileDark w-[100%] dark:bg-VeryDarkBlue bg-VeryLightGray  bg-contain min-h-screen bg-no-repeat dark:sm:bg-desktopDark bg-mobileLight sm:bg-desktopLight '>
            <header className='flex w-[87%] mx-auto justify-between pt-11 sm:w-[70%] md:w-[50%]'>
                <h1 className='text-[20px] tracking-[7px] text-VeryLightGray font-bold'>TODO</h1>
                <div onClick={()=>setDarkMode(!darkMode)} className=' flex justify-end'>
                    {darkMode?<BsFillSunFill className='text-VeryLightGray text-xl'/>
                    :<BsFillMoonStarsFill className='text-VeryLightGray text-xl'/>}
                </div>
            </header>

            <Form handleSubmit={handleSubmit} name={name} setName={setName}/>
            <Routes>
                <Route path='/' element ={<All handleCheck={handleCheck} list={list} handleRemove={handleRemove}/>}/>
                <Route path='/active' element ={<Active  handleCheck={handleCheck} list={active} handleRemove={handleRemove}/>}/>
                <Route path='/completed' element ={<Completed  handleCheck={handleCheck} list={completed} handleRemove={handleRemove}/>}/>
            </Routes>
            <article className=' w-[90%] sm:w-[70%] md:w-[50%] bg-white dark:bg-VeryDarkDesaturatedBlue mx-auto mb-8 shadow-lg h-[70px] items-center flex flex-row justify-between px-6 py-3 rounded-b-sm'>
                <div className='text-[13px] text-DarkGrayishBlue2'>
                    {list.filter((item)=>!item.complete).length} {list.filter((item)=>!item.complete).length <=1?"item":"items"} left </div>
                    <div className='hidden md:flex justify-center'><Navbar/></div>
                <div  className='text-[15px] text-DarkGrayishBlue2 '><button onClick={handleRemoveComplete}>clear completed</button></div>
                </article>
            
            <div className=' flex justify-center md:hidden'><Navbar/></div>
            {list.length > 0 && (<div  className='text-[14px] text-DarkGrayishBlue2 flex justify-center mt-[30px]'>drag and drop to reorder the list</div>)}
        </section>

    </main>
  )
}

