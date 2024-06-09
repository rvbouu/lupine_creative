import { useState, useRef } from 'react'
import '../assets/Contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })

    //clear forms
    function clearForms() {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        })
    }

    //handles the form change function
    function handleChange(event) {
        setMessage("")
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    //handles the onBlur portion, displays error when user clicks outside of ield without valid data
    const handleInputChange = (e) => {
        // console.log(e);
        const { name, value } = e.target;
        // console.log(name, value);
        setFormData({ ...formData, [name]: value });

        if (name === 'email') {
            if (value === '') {
                setFormData('')
                return setErrorMessage('Email is required')
            }
            if (!regex.test(value)) {
                setFormData('')
                return setErrorMessage('Please enter a valid email')
            } else {
                setErrorMessage('')
            }
        }
        if (name === 'firstName') {
            if (value === '') {
                setFormData('')
                return setErrorMessage('First name is required')
            }
        }
        if (name === 'lastName') {
            if (value === '') {
                setFormData('')
                return setErrorMessage('Last name is required')
            }
        }
        if (name === 'message') {
            if (value === '') {
                setFormData('')
                return setErrorMessage('Message is required')
            }
        }
    }

    //sends a backup of a contact form to the db in case of mishaps
    async function handleEmail(event) {
        try {
            const response = await fetch("/api/contact", {
                method: 'POST',
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    message: formData.message
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            // console.log(response)
            const result = await response.json()
            if (result.status === "success") {
                setErrorMessage("Update successful")
            }
            clearForms()
        } catch (err) {
            // console.log(err)
            setErrorMessage("We could not sign you up with the credentials provided")
        }
    }

    const form = useRef();

    //sends an email to the linked account via Emailjs
    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm('lupine_email', 'contact_form', form.current, {
                publicKey: '6jmeWZE--gIJU4Au5',
            })
            .then(
                () => {
                    // console.log('SUCCESS!');
                },
                (error) => {
                    // console.log('FAILED...', error.text);
                },
                handleEmail()
            );
    };

    return (
        <>
            <div className="form-field">
                <h3 className='contact-title'>I'd love to hear from you!</h3>
                <form
                    className="contact-form"
                    ref={form}
                    onSubmit={sendEmail}>
                    <label className="firstName">First Name:</label>
                    <input
                    //ended up needing both handle functions for our form to work correctly, in onBlur and onChange respectively
                        className='input'
                        value={formData.firstName}
                        name="firstName"
                        onBlur={handleInputChange}
                        onChange={handleChange}
                        type="text"
                        placeholder="Gary"
                    />
                    <label className="lastName">Last Name:</label>
                    <input
                        className='input'
                        value={formData.lastName}
                        name="lastName"
                        onBlur={handleInputChange}
                        onChange={handleChange}
                        type="text"
                        placeholder="Almes"
                    />
                    <label className="email">E-mail:</label>
                    <input
                        className='input'
                        value={formData.email}
                        name="email"
                        onBlur={handleInputChange}
                        onChange={handleChange}
                        type="email"
                        placeholder="garytalmes@hotmail.com"
                    />
                    <label className="message">Message:</label>
                    <textarea
                        className='input'
                        value={formData.message}
                        name='message'
                        onBlur={handleInputChange}
                        onChange={handleChange}
                        type='message'
                        placeholder='Say hello!'
                    />
                    <button type='button' onClick={sendEmail} className='contactbtn'>Submit</button>
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
