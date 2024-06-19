import React from 'react'

function UpperHeading() {
  return (
    <>
    <div className="upperHeaderParent">
      <div className="upperHeaderWrapper">
        <div className="leftSide">
          <h1 className='text-[20px] font-medium'>Demo</h1>
          <h1 className='font-medium text-[15px]'>Account Group List</h1>
          <p className='text-[15px]'>Lorem ipsum dolor sit.</p>
        </div>
          <div className="rightSide">
          <p className='text-[15px]'>Demo</p>
          <p className='text-[15px]'>pAccount Group List</p>
          <p className='text-[15px]'>Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default UpperHeading