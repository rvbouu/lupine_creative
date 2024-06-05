import { useState, useRef } from 'react'
import '../assets/Contact.css'
import emailjs from '@emailjs/browser';

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

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_c7aey73', 'template_j0wsdxo', form.current, {
          publicKey: '6jmeWZE--gIJU4Au5',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
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
                        className='input'
                        defaultValue={firstName}
                        name="firstName"
                        onBlur={handleInputChange}
                        type="text"
                        placeholder="Gary"
                    />
                    <label className="lastName">Last Name:</label>
                    <input
                        className='input'
                        defaultValue={lastName}
                        name="lastName"
                        onBlur={handleInputChange}
                        type="text"
                        placeholder="Almes"
                    />
                    <label className="email">E-mail</label>
                    <input
                        className='input'
                        defaultValue={email}
                        name="email"
                        onBlur={handleInputChange}
                        type="email"
                        placeholder="garytalmes@hotmail.com"
                    />
                    <label className="message">Message</label>
                    <textarea
                        className='input'
                        defaultValue={message}
                        name='message'
                        onBlur={handleInputChange}
                        type='message'
                        placeholder='Say hello!'
                    />
                    <input className="submitbtn" type="submit" value="Send" />
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
