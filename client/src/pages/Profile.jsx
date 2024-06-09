import '../assets/Profile.css'
import { useState, useEffect } from "react"
import { useAppContext } from '../providers/AppProvider';

export default function Update() {

    const { currentUser } = useAppContext()

    const [formData, setFormData] = useState({
        sname: "",
        semail: "",
        spassword: "",
        lemail: "",
        lpassword: ""
    })
    // console.log(currentUser)
    const [userData, setUserData] = useState({});
    // console.log(currentUser)
    const [errorUpdateMessage, setErrorUpdateMessage] = useState('');

    const handleInputChange = (e) => {
        // console.log(e);
        const { name, value } = e.target;
        // console.log(name, value);
        setFormData({ ...formData, [name]: value });

        if (name === 'semail') {
            if (value === '') {
                setFormData('')
                return setErrorUpdateMessage('Email is required')
            }
        }
        if (name === 'sname') {
            if (value === '') {
                setFormData('')
                return setErrorUpdateMessage('Name is required')
            }
        }
        if (name === 'spassword') {
            if (value === '') {
                setFormData('')
                return setErrorUpdateMessage('Password is required')
            }
        }
    }

    function clearForms() {
        setFormData({
            semail: "",
            spassword: "",
            sname: ""
        })
    }

    async function handleUpdate(event) {
        event.preventDefault()
        try {
            const response = await fetch(`/api/user/${userData._id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    name: formData.sname,
                    email: formData.semail,
                    password: formData.spassword
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            // console.log(response)
            const result = await response.json()
            if (result.status === "success") {
                setErrorUpdateMessage("Update successful")
                // window.location.href="/profile"
            }
            clearForms()
        } catch (err) {
            // console.log(err)
            setErrorUpdateMessage("We could not sign you up with the credentials provided")
        }
    }

    useEffect(() => {
        // console.log(currentUser)
        currentUser && setUserData(currentUser.results)
    }, [currentUser])

    useEffect(() => {
        // console.log(userData)
    }, [userData])

    return (

        <>
            {userData && (
                <section className='info-card'>
                    <h1 className='welcome'> {userData?.name}! </h1>
                    <div className='user-info'>
                        <p>Name: {userData?.name} </p>
                        <p>Email: {userData?.email} </p>
                    </div>
                </section>
            )}

            <section className='update1'>
                <h2 className='form-title1'>Update Information</h2>
                {/* Submission handling through netlify */}
                {/* onBlur used for when user clicks out of field and leaves it empty, the errMsg will display */}
                <form className='form1' onSubmit={handleUpdate}>
                    {/* Name input field */}
                    <label className='label1' htmlFor="sname" >Name:</label>
                    <input
                        id='sname'
                        className='input1'
                        name="sname"
                        type="text"
                        defaultValue={formData.sname}
                        placeholder='Enter Your Name'
                        onBlur={handleInputChange}
                        required
                    />

                    {/* Email input field */}
                    <label className='label1' htmlFor="semail" >Email:</label>
                    <input
                        id='semail'
                        className='input1'
                        name="semail"
                        type="email"
                        defaultValue={formData.semail}
                        placeholder='Enter Your Email Address'
                        onBlur={handleInputChange}
                        required
                    />

                    {/* Message input field */}
                    <label className='label1' htmlFor="spassword">Password:</label>
                    <input
                        id='spassword'
                        className='input1'
                        name="spassword"
                        type="password"
                        defaultValue={formData.spassword}
                        onBlur={handleInputChange}
                        required
                    />

                    <button
                        id="submit-update"
                        type='submit'
                        className='submitbtn1'
                    >Submit
                    </button>

                    {/* errMsg and successMsg */}
                    <div className='errMsg1'>{errorUpdateMessage}</div>
                </form>
            </section>

        </>
    )
}


