import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import mail from '../assets/mail.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    description: ''
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.from_name || !formData.from_email || !formData.message) {
      alert('Please fill in all fields.');
      return; // Prevent the form from being submitted
    }

    emailjs.sendForm('service_47bst7g', 'template_1hmg3gk', form.current, 'Ud6hqkuVWbbJR8yVJ')
      .then(() => {
        alert('Email sent successfully!');
        setFormData({ from_name: '', from_email: '', message: '' }); // Reset form data
      }, (error) => {
        alert('Failed to send email. Please try again later.');
        console.error('Failed...', error.text);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-md text-gray-300">Send us a mail</h2>
          <div className="rounded shadow-lg p-4 px-4 md:p-8 mb-6 border border-1 gradient-to-r from-white to-yellow-800">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="flex flex-col text-gray-200 items-center justify-center gap-3">
                  <img src={mail} alt="" />
                  <p className='font-medium text-lg text-center mt-5'>Please fill out all the fields.</p>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        type="text"
                        name="from_name"
                        id="fullName"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-800 text-white"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        name="from_email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-800 text-white"
                        value={formData.from_email}
                        onChange={handleChange}
                        placeholder="email@domain.com"
                      />
                    </div>
                    
                    <div className="md:col-span-5">
                      <label htmlFor="description">Description</label>
                      <textarea
                        name="message"
                        id="description"
                        className="h-24 border mt-1 rounded px-4 w-full bg-gray-800 text-white"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter a description..."
                      />
                    </div>
                    <div className="md:col-span-5 text-right">
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
