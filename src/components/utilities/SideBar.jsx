import React from 'react'
import { GoDotFill } from "react-icons/go";


import { NavLink } from 'react-router-dom'
// IMPORTED USECONTEXT AND DATA FROM CONTEXT FILE 
import { useContext } from 'react'
import { data } from '../context/Context'

// ------------------------------------------



export function SideBar() {

 const Data = useContext(data)  //initializing

  return (
    <>
    <div className="test flex">
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">Chart Of Account</label>
          
{
Data.chartOfAccount.map((elem, index)=>{
    return(
        <>
        <style>
          {`
              .anchorlnk{
                margin:0 !important;
                padding:6px 0;
                #070810
              }
                aside{
                background: linear-gradient(to bottom, rgb(70 35 35 / 14%), #b0d5cd6b);
                }
          `}
        </style>
          <NavLink key={index} to={elem.link} className="flex anchorlnk transform items-center rounded-lg px-3 py-[1] text-gray-600 transition-colors duration-300 hover:bg-[#c5c5c569] hover:text-gray-700">
              {/* <BarChart className="h-5 w-5" aria-hidden="true" /> */}
              <GoDotFill className='className="h-[2] w-[2] text-[2px]" aria-hidden="true"'></GoDotFill>
              <span className="mx-2 text-sm font-normal">{elem.ttl}</span>
            </NavLink>
        </>
    )
})
}
          </div>


{/* 1st  */}


          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">Division</label>
            <NavLink to="" className="flex transform anchorlnk items-center rounded-lg px-3 py-[1] text-gray-600 transition-colors duration-300 hover:bg-[#c5c5c569] hover:text-gray-700">
              {/* <BarChart className="h-5 w-5" aria-hidden="true" /> */}
              <GoDotFill className='className="h-[2] w-[2] text-[2px]" aria-hidden="true"'></GoDotFill>
              <span className="mx-2 text-sm font-normal">Master</span>
            </NavLink>
          </div>

          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
              Products
            </label>
     {
      Data.product.map((elem, index)=>{
        return(
          <>
                      <NavLink key={index} to={elem.link} className="flex transform items-center anchorlnk rounded-lg px-3 py-[1] text-gray-600 transition-colors duration-300 hover:bg-[#c5c5c569] hover:text-gray-700">
              {/* <BarChart className="h-5 w-5" aria-hidden="true" /> */}
              <GoDotFill className='className="h-[2] w-[2] text-[2px]" aria-hidden="true"'></GoDotFill>
              <span className="mx-2 text-sm font-normal">{elem.ttl}</span>
            </NavLink>
          </>
        )
      })
     }


          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">Billing Term</label>
{
  Data.billingTerm.map((elem, index)=>{
    return(
      <>
                  <NavLink key={index} to="" className="flex transform anchorlnk items-center rounded-lg px-3 py-[1] text-gray-600 transition-colors duration-300 hover:bg-[#c5c5c569] hover:text-gray-700">
              {/* <BarChart className="h-5 w-5" aria-hidden="true" /> */}
              <GoDotFill className='className="h-[2] w-[2] text-[2px]" aria-hidden="true"'></GoDotFill>
              <span className="mx-2 text-sm font-normal">{elem.ttl}</span>
            </NavLink>
      </>
    )
  })
}
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">Area Agent</label>
{
  Data.areaAgent.map((elem, index)=>{
    return(
      <>
                  <NavLink key={index} to="" className="flex transform anchorlnk items-center rounded-lg px-3 py-[1] text-gray-600 transition-colors duration-300 hover:bg-[#c5c5c569] hover:text-gray-700">
              {/* <BarChart className="h-5 w-5" aria-hidden="true" /> */}
              <GoDotFill className='className="h-[2] w-[2] text-[2px]" aria-hidden="true"'></GoDotFill>
              <span className="mx-2 text-sm font-normal">{elem.ttl}</span>
            </NavLink>
      </>
    )
  })
}
          </div>

                    <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">Others</label>
{
  Data.others.map((elem, index)=>{
    return(
      <>
                  <NavLink key={index} to="" className="flex transform anchorlnk items-center rounded-lg px-3 py-[1] text-gray-600 transition-colors duration-300 hover:bg-[#c5c5c569] hover:text-gray-700">
              {/* <BarChart className="h-5 w-5" aria-hidden="true" /> */}
              <GoDotFill className='className="h-[2] w-[2] text-[2px]" aria-hidden="true"'></GoDotFill>
              <span className="mx-2 text-sm font-normal">{elem.ttl}</span>
            </NavLink>
      </>
    )
  })
}
          </div>
          </div>
        </nav>
      </div>
    </aside>


    </div>
    </>
  )
}


export default SideBar;