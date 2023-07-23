
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Navbar from "../components/Navbar";
import Location from "../components/Location";
import Footer from "../components/Footer";
import "../components/ContactStyle.css"

import HomeHero from "../components/HomeHero";
import { ChakraProvider, useToast } from '@chakra-ui/react'

function Contact() {
    const form = useRef();
    const toast = useToast()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8il29xi', 'template_wclrcom', form.current, 'fY2sCanyLPQxS5bvd')
            .then((result) => {
                console.log(result.text);
                toast({
                    title: 'Message sent Successfully',
                    description: "Thankyou For Your Feedback",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position: 'top'
                })
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }, (error) => {
                console.log(error.text);

                toast({
                    title: 'oops something went wrong!!',
                    description: "please try again latter",
                    status: 'danger',
                    duration: 9000,
                    isClosable: true,
                    position: 'top'
                })
            });
    };


    return (
        <>
            <ChakraProvider>

            </ChakraProvider>
            <Navbar />
            <HomeHero
                cName="hero-mid"
                heroImg="images/contact0.avif"
                title="Contact Us"
                btnClass="hide"
            />
            <section className="location">
                <Location />
            </section>
            <section className="contact-us">
                <div className="row">
                    <div className="contact-col">
                        <div>
                            <i className="fa fa-home"></i>
                            <span>
                                <h5>Chowbaga Road, Anandapur</h5>
                                <p>PO: East Kolkata Township, Kolkata - 700 107</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa fa-phone"></i>
                            <span>
                                <h5>INFO DESK: 9830201234</h5>
                                <p>Ph: +91 33 6627 0600 / 0609 / 0614 / 0622</p>
                                <p>Fax: +91 33 2443 0455 / 1794</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa fa-envelope"></i>
                            <span>
                                <h5>E-mail: admin@heritageit.edu</h5>
                                <p>Email us your query</p>
                            </span>
                        </div>
                    </div>
                    <div className="contact-col">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="user_name" placeholder="Enter your name" />
                            <input type="email" name="user_email" placeholder="Enter email address" />
                            <input type="text" name="subject" placeholder="Enter your subject" required />
                            <textarea rows="8" name="message" placeholder="Message" required></textarea>
                            <div className='row'>
                                <div className="col-12">
                                    <div className="submit-btn">
                                        <input type="reset" value={'Reset'} className="mr-2" />
                                        <input type="submit" className={'btn-submit'} value="send" />
                                    </div>
                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Contact;