import React, { useEffect, useState } from 'react'
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { faAngleDown, faAngleUp, faLocation, faLocationDot, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from './contact/ContactForm';
import InformationSection from './contact/InformationSection';

function Contact() {
  // const[formData,setFormData]=useState({f_name:"",l_name:"",email:"",telephone:null,text_feedback:"",isValid:true})
  // const handleChange=(event)=>{
  //   const{name,value}=event.target
  //   setFormData(a=>({
  //     ...a,[name]:value
  //   }))
  
  // const isEmailValid=()=>{
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   emailRegex.test(formData.email)&&setFormData(a=>({...a,isValid:!formData.isValid}))
  // }
  // useEffect(()=>{
  //   isEmailValid()
  // },[formData.email])
  // style={{
  //   backgroundImage: "url('./images/logo_0.png')",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center center",
  // }}
  
  
    return (
      <section className="bg bg-opacity-20 bg-gray-900 text-white"
      >
        <h1 className="p-4 font-bold text-6xl  text-white pt-40 text-center">Contact</h1>
  
        <div className="  bg-gray-200 flex flex-col justify-evenly  text-black pt-20" >
          {/* Your content goes here */}
          <div className="container bg-slate-100  mx-auto p-4 rounded-xl ">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus culpa dicta magni quis, consectetur harum exercitationem eligendi aspernatur perferendis aliquid vero quasi nemo eveniet minus delectus veniam nisi reprehenderit debitis!
            </p>
          </div>
  
          <div className="flex flex-col items-center lg:flex-row justify-center">
            <div className="ml-8 lg:w-2/4 p-4">
              <InformationSection />
            </div>
            <div className="lg:w-1/2 p-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  

export default Contact