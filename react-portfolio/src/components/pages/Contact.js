import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

export default function Contact() {
    return <>
    <h1 className='contact'>CONTACT</h1>
    <div class="maincontact">
            <h2 class="contact" id="contact">Send me a message</h2>
            <p id="message-sent"></p>

            <form id="contact-form">
                <input type="hidden" name="contact_number" />
                <label for="floatingInput" id="labelname">Your Name</label>
                <input type="text" name="from_name" class="form-control" id="floatingInput" />
                <button type="submit" class="fa fa-paper-plane-o sendbtn"></button>
                <label for="floatingPassword" id="labelname">Your Email</label>
                <input type="email" name="user_email" class="form-control" id="floatingPassword" />
                <label for="floatingPassword" id="labelname">Message</label>
                <textarea name="message" class="form-control" id="floatingPassword"></textarea>
            </form>

            <div class="iconblock">
            
                <a href="https://www.instagram.com/daniel_rezz/" target="__blank"><img src="./001-instagram.png" id="icon" /></a>
                <a href="https://www.linkedin.com/in/daniel-reza-974b53a2/" target="__blank"><img src="./002-linkedin.png"
                        id="icon" /></a>
                <a href="https://github.com/danielrezz" target="__blank"><img src="./003-github-logo.png" id="icon" /></a>
            
            </div>

        </div>
    </>
}