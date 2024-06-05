import { useState } from 'react'
import '../assets/Contact.css'

export default function Contact() {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            if (inputValue === '') {
                setEmail('')
                return setErrorMessage('Email is required')
            }
            if (!regex.test(inputValue)) {
                setEmail('')
                return setErrorMessage('Please enter a valid email')
            } else {
                setErrorMessage('')
            }
        }
        if (inputType === 'firstName') {
            if (inputValue === '') {
                setFirstName('')
                return setErrorMessage('First name is required')
            }
        }
        if (inputType === 'lastName') {
            if (inputValue === '') {
                setLastName('')
                return setErrorMessage('Last name is required')
            }
        }
        if (inputType === 'message') {
            if (inputValue === '') {
                setMessage('')
                return setErrorMessage('Message is required')
            }
        }
    }


    return (
        <>
            <div className="form-field">
                <h3 className='contact-title'>Let's talk!</h3>
                <form className="contact-form">
                    <label className="firstName">First Name:</label>
                    <input
                        defaultValue={firstName}
                        name="firstName"
                        onBlur={handleInputChange}
                        type="text"
                        placeholder="Gary"
                    />
                    <label className="lastName">Last Name:</label>
                    <input
                        defaultValue={lastName}
                        name="lastName"
                        onBlur={handleInputChange}
                        type="text"
                        placeholder="Almes"
                    />
                    <label className="email">E-mail</label>
                    <input
                        defaultValue={email}
                        name="email"
                        onBlur={handleInputChange}
                        type="email"
                        placeholder="garytalmes@hotmail.com"
                    />
                    <label className="message">Message</label>
                    <textarea
                        defaultValue={message}
                        name='message'
                        onBlur={handleInputChange}
                        type='message'
                        placeholder='Say hello!'
                    />
                    <button className='submitbtn' type="submit">Submit</button>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </form>
            </div>
        </>
    )
}
