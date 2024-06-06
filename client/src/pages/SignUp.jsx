import '../assets/SignUp.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignUp() {

    const navigate = useNavigate();

    const [ formData, setFormData ] = useState({
      signupEmail: "", signupPassword: "", loginEmail: "", loginPassword: ""
    })
  
    const [message, setMessage] = useState("")
  
    function clearForms(){
      setFormData({ signupEmail: "", signupPassword: "", loginEmail: "", loginPassword: "" })
    }
  
    function handleInputChange(event){
      setMessage("")
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
    }
  
    async function handleSignup(event){
      event.preventDefault()
      try {
        const response = await fetch("/api/user", {
          method: 'POST',
          body: JSON.stringify({
            email: formData.signupEmail,
            password: formData.signupPassword
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const result = await response.json()
        if(result.status === "success"){
          setMessage("Signup successful")
        }
        clearForms()
      } catch(err){
        console.log(err)
        setMessage("We could not sign you up with the credentials provided")
      }
    }
  
    async function handleLogin(event){
      event.preventDefault()
      try {
        const response = await fetch("/api/user/login", {
          method: 'POST',
          body: JSON.stringify({
            email: formData.loginEmail,
            password: formData.loginPassword
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const result = await response.json()
        clearForms()
        if( result.status === 'success' ){
          navigate("/");
        } else {
          setMessage("We could not log you in with the credentials provided")
        }
      } catch(err){
        console.log(err.message)
        setMessage("We could not log you in with the credentials provided")
      }
    }


    return (
        <div className="authForm">
            <section className='login'>
                <h2 className='form-title'>Login</h2>

                {/* Submission handling through netlify */}
                {/* onBlur used for when user clicks out of field and leaves it empty, the errMsg will display */}
                <form className='form'>
                    {/* Email input field */}
                    <label className='label' htmlFor="email" >Email:</label>
                    <input id='lemail' className='input' name="email" type="email" defaultValue='' onBlur='' required />

                    {/* Message input field */}
                    <label className='label' htmlFor="password">Password:</label>
                    <input className='input' name="password" id='lpassword' type="password" defaultValue='' onBlur='' required />

                    <button id="submit-login" type='submit' className='submitbtn'>Submit</button>

                    {/* errMsg and successMsg */}
                    {/* <div className='successMsg'>{successMsg}</div>
                    <div className='errMsg'>{errMsg}</div> */}
                </form>
            </section>
            <section className='signup'>
                <h2 className='form-title'>Sign Up</h2>

                {/* Submission handling through netlify */}
                {/* onBlur used for when user clicks out of field and leaves it empty, the errMsg will display */}
                <form className='form'>
                    {/* Name input field */}
                    <label className='label' htmlFor="name" >Name:</label>
                    <input id='sname' className='input' name="name" type="text" defaultValue='' placeholder='Enter Your Name' onBlur='' required />

                    {/* Email input field */}
                    <label className='label' htmlFor="email" >Email:</label>
                    <input id='semail' className='input' name="email" type="email" defaultValue='' placeholder='Enter Your Email Address' onBlur='' required />

                    {/* Message input field */}
                    <label className='label' htmlFor="password">Password:</label>
                    <input id='spassword' className='input' name="password" type="password" defaultValue='' onBlur='' required />

                    <button id="submit-signup" type='submit' className='submitbtn'>Submit</button>

                    {/* errMsg and successMsg */}
                    {/* <div className='successMsg'>{successMsg}</div>
                    <div className='errMsg'>{errMsg}</div> */}
                </form>
            </section>
        </div>
    )
}
