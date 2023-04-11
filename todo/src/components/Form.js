import React from 'react'

export default function Form( {handleSubmit,name,setName}) {
  return (
       <form onSubmit={(e)=>handleSubmit(e)}>
            <div className='flex justify-center mt-7 mb-3'>
                <div className='bg-white w-[90%]  dark:bg-VeryDarkDesaturatedBlue sm:w-[70%] md:w-[50%] h-[60px] rounded-[3px] flex justify-start items-center'>
                    <button type="submit" className='bg-white  dark:bg-VeryDarkDesaturatedBlue w-[20px] h-[20px] rounded-full border-[1px] border-LightGrayishBluel ml-4 mt-1 '></button>
                    <input type="text" className='focus:outline-none h-[50px] w-[90%] bg-white  dark:bg-VeryDarkDesaturatedBlue pl-3 rounded-[3px] text-DarkGrayishBlue2'
                    placeholder='create a new todo'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
            </div>
        </form>
  )
}
