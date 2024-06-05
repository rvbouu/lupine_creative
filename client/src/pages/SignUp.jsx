import '../assets/SignUp.css'

export default function SignUp() {


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
