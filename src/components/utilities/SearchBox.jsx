import React from 'react'



function SearchBox({Data}) {

  return (
   <>
<style>
{
    `
    .input {
  border: none;
  outline: none;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
  transition: 300ms ease-in-out;
  text-align:center;
}

.input:focus {
  background-color: white;
  transform: scale(1.05);
  box-shadow: 13px 13px 100px #969696,
             -13px -13px 100px #ffffff;
}
             .serchPArent{
             display: flex;
    justify-content: end;
    gap: 26px 0 0 0;
       margin: 24px 0px 0 0;
    width: 75vw;
             }
    `
}
</style>
<div className='serchPArent'>
   <input type="text" onChange={Data.searchHandle} autocomplete="off" name="text" class="input" style={{height:"31px"}} placeholder="Search" ></input>
   </div>
   </>
  )
}

export default SearchBox