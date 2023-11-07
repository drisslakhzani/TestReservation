import React, { useState } from 'react'

function Main() {
    const [data, setData]=useState({ad_email:"",ad_pass:""})

    const handleChange=(event)=>{
        const {name,type,value,checked}=event.target;
        setData(oldData=>({...oldData,[name]:value}))
    }
    console.log(data)
  return (
    <form>
        {/* for the email */}
        <span>
            <label htmlFor="ad_email">Admin_email</label>
            <input type='email' required onChange={handleChange} name='ad_email' placeholder='Email' value={data.ad_email}/> 
        </span>
        {/* for the password */}
        <span>
        <label htmlFor="ad_pass">Admin_Password</label>
            <input type='password' required onChange={handleChange} name='ad_pass' placeholder='Password' value={data.ad_pass}/>
        </span>
    </form>
  )
}

export default Main