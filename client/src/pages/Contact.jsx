import { useState } from 'react'

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
                return setErrorMessage('FirstName is required')
            }
            if (inputType === 'lastName') {
                if (inputValue === '') {
                    setLastName('')
                    return setErrorMessage('LastName is required')
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
                    <form className="contact-form">
                        <h3>Let's talk!</h3>
                        <label className="firstName">Name</label>
                        <input
                            defaultValue={firstName}
                            firstName="firstName"
                            onBlur={handleInputChange}
                            type="text"
                            placeholder="firstName"
                        />
                        <label className="lastName">Name</label>
                        <input
                            defaultValue={lastName}
                            lastName="lastName"
                            onBlur={handleInputChange}
                            type="text"
                            placeholder="lastName"
                        />
                        <label className="email">E-mail</label>
                        <input
                            defaultValue={email}
                            name="email"
                            onBlur={handleInputChange}
                            type="email"
                            placeholder="email"
                        />
                        <label className="message">Message</label>
                        <textarea
                            defaultValue={message}
                            name='message'
                            onBlur={handleInputChange}
                            type='message'
                            placeholder='message'
                        />
                        <button type="submit">Submit</button>
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
}