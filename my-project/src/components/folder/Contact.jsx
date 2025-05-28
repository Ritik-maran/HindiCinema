import React, { useState } from "react";
import Nav from "./Nav";
import Footer from './Footer';

const Contact = () => {
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [mobile, setMobile] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! We will contact you soon.`);
    console.log('Name :', name, 'email :', email, 'mobile :', mobile);
    setName('')
    setEmail('')
    setMobile('')
   
  };

  return (
   <>
   <Nav/>

    <section className="bg-gray-900 text-white py-32 px-6 ">
     
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-500">
          Contact <span className="text-blue-500">Us</span>
        </h1>
        <p className="mt-4 text-gray-400">
          Have questions or feedback? Fill out the form below, and we’ll get in
          touch with you soon!
        </p>
      </div>

      <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={((e) => {setName(e.target.value)})}
              placeholder="Enter your full name"
              className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={((e) => {setEmail(e.target.value)})}
              placeholder="Enter your email address"
              className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="mobile"
              className="block mb-2 text-sm text-gray-400"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={mobile}
              onChange={((e) => {setMobile(e.target.value)})}
              pattern="[0-9]{10}" 
              placeholder="Enter your mobile number"
              className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
          
        </form>
      </div>
    </section>

    <Footer/>

    </>
  );
};

export default Contact;
