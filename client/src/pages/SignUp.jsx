import '../assets/SignUp.css'
import { useState } from "react"


export default function SignUp() {

  //set data required for sign up and login
  const [formData, setFormData] = useState({
    sname: "", semail: "", spassword: "", lemail: "", lpassword: ""
  })

  //regex to verify correct email and password
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [errorLoginMessage, setErrorLoginMessage] = useState('');
  const [errorSignupMessage, setErrorSignupMessage] = useState('');

  //handles the onBlur function
  const handleInputChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });

    if (name === 'semail') {
      if (value === '') {
        setFormData('')
        return setErrorSignupMessage('Email is required')
      }
      // if (!regex.test(formData.semail)) {
      //   setFormData('')
      //   return setErrorSignupMessage('Please enter a valid email')
      // } else {
      //   setErrorSignupMessage('')
      // }
    }
    if (name === 'lemail') {
      if (value === '') {
        setFormData('')
        return setErrorLoginMessage('Email is required')
      }
      if (!regex.test(value)) {
        setFormData('')
        return setErrorLoginMessage('Please enter a valid email')
      } else {
        setErrorLoginMessage('')
      }
    }
    if (name === 'sname') {
      if (value === '') {
        setFormData('')
        return setErrorSignupMessage('Name is required')
      }
    }
    if (name === 'spassword') {
      if (value === '') {
        setFormData('')
        return setErrorSignupMessage('Password is required')
      }
    }
    if (name === 'lpassword') {
      if (value === '') {
        setFormData('')
        return setErrorLoginMessage('Password is required')
      }
    }
  }

  //handles the onChange function
  function handleChange(event) {
    setMessage("")
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  //clear forms
  function clearForms() {
    setFormData({ semail: "", spassword: "", lemail: "", lpassword: "", sname: "" })
  }

  //signs up a new user
  async function handleSignup(event) {
    event.preventDefault()
    try {
      const response = await fetch("/api/user", {
        method: 'POST',
        body: JSON.stringify({
          name: formData.sname,
          email: formData.semail,
          password: formData.spassword
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // console.log("94", response)
      const result = await response.json()
      if (result.status === "success") {
        window.location.href = '/';
      }
      clearForms()
    } catch (err) {
      // console.log(err)
      setErrorSignupMessage("We could not sign you up with the credentials provided")
    }
  }

  //logins in an existing user
  async function handleLogin(event) {
    event.preventDefault()
    try {
      const response = await fetch("/api/user/login", {
        method: 'POST',
        body: JSON.stringify({
          email: formData.lemail,
          password: formData.lpassword
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await response.json()
      clearForms()
      if (result.status === 'success') {
        window.location.href = '/';
      } else {
        setErrorLoginMessage("We could not log you in with the credentials provided")
      }
    } catch (err) {
      // console.log(err.message)
      setErrorLoginMessage("We could not log you in with the credentials provided")
    }
  }


  return (
    <div className="authForm">
      <section className='login'>
        <h2 className='form-title'>Login</h2>

        {/* Submission handling through netlify */}
        {/* onBlur used for when user clicks out of field and leaves it empty, the errMsg will display */}
        <form className='form' onSubmit={handleLogin}>
          {/* Email input field */}
          <label className='label' htmlFor="lemail" >Email:</label>
          <input id='lemail' className='input' name="lemail" type="email" defaultValue={formData.lemail} onBlur={handleInputChange} required />

          {/* Password input field */}
          <label className='label' htmlFor="lpassword">Password:</label>
          <input className='input' name="lpassword" id='lpassword' type="password" defaultValue={formData.lpassword} onBlur={handleInputChange} required />

          <button id="submit-login" type='submit' className='submitbtn' >Submit</button>

          <div className='errMsg'>{errorLoginMessage}</div>
        </form>
      </section>
      <section className='signup'>
        <h2 className='form-title'>Sign Up</h2>

        <form className='form' onSubmit={handleSignup}>
          {/* Name input field */}
          <label className='label' htmlFor="sname" >Name:</label>
          <input id='sname' className='input' name="sname" type="text" defaultValue={formData.sname} placeholder='Enter Your Name' onBlur={handleInputChange} required />

          {/* Email input field */}
          <label className='label' htmlFor="semail" >Email:</label>
          <input id='semail' className='input' name="semail" type="email" defaultValue={formData.semail} placeholder='Enter Your Email Address' onBlur={handleInputChange} required />

          {/* Password input field */}
          <label className='label' htmlFor="spassword">Password:</label>
          <input id='spassword' className='input' name="spassword" type="password" defaultValue={formData.spassword} onBlur={handleInputChange} required />

          <button id="submit-signup" type='submit' className='submitbtn' >Submit</button>

          <div className='errMsg'>{errorSignupMessage}</div>
        </form>
      </section>
    </div>
  )
}
