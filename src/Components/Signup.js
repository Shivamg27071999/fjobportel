// import React, { useState } from 'react'

export default function Signup() {



  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const submitFormHandler=(e)=>{
    e.preventDefault()
    console.log('button clicked')
    // const data = {name, email, password}
  //   fetch('https://job-portal-zapc.onrender.com/api/register',{
  //     method:"POST",
  //     body:JSON.stringify(
  //         {
  //             name: 'name',
  //             email: 'email;',
  //             password: 'password',
  //         }
  //     )
  // })
  //     .then(res=>res.json())
  //     .then(json=>console.log(json))
  }


  return (
    <div>
      <form style={{marginTop:'25px'}}>
        <div className='form-group'>
        <label style={{color:'white'}}>Name    :      </label>
        <input type="text" name="name" />
        </div>
        <div className='form-group'>
        <label style={{color:'white'}}>Email   :     </label>
        <input type="text" name="email" />
        </div>
        <div className='form-group'>
        <label style={{color:'white'}}>Password:    </label>
        <input type="text" name="password" />
        </div>
        <input type="submit" onSubmit={submitFormHandler}/>
      </form>
    </div>
  )
}
