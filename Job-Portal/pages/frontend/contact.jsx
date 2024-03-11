import NavBar from '@/components/NavBar'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { toast, ToastContainer } from 'react-toastify';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();
        toast.success("message send successfully");
    
        emailjs.sendForm('service_9osluec', 'template_uiinzrf', form.current, 'e6BI2BzCVdK6HOxl_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          alert("message sent successfully")
      };

    return (

    <>  <NavBar />
       <main id="contact" className="flex flex-col pt-1 mb-4 mt-12 lg:px-30 md:px-16 sm:px-12 xs:px-5 bg-background font-poppins pb-4 md:flex-row ">

        
    
   
        <div className=" flex  flex-col md:flex-row  w-full">
            <div className=" p-16 md:ml-24 lg:ml-48 text-[#07074D]">
                <div className="flex flex-col gap-6">
                    <div className="flex">
                        <div className="text-center text-purple-600 py-4 px-3 text-3xl"><FaPhoneVolume />
                        </div>
                        <div>
                            <p className='font-semibold text-3xl'>phone number </p>
                            <p className='font-light'>+977-9824065023</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="text-center text-purple-600 py-4 px-3 text-3xl"><MdMarkEmailUnread /> </div>
                        <div>
                            <p className='font-semibold text-3xl'>Email </p>
                            <p className='font-light ' >jobsync@gmail.com </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="text-center text-purple-600 py-4 px-3 text-3xl"><FaLocationDot /> </div>
                        <div>
                            <p className='font-semibold text-3xl'>Location</p>
                            <p className='font-light'>Damak, Jhapa</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center p-12 flex-auto">
                {/* <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com --> */}
                <div className="mx-auto w-full max-w-[550px]">
                    <form ref ={form } onSubmit={sendEmail} >
                        <div className="mb-5">
                            <label
                                for="name"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                for="email"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@domain.com"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required />
                        </div>
                        <div className="mb-5">
                            <label
                                for="subject"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Enter your subject"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required/>
                        </div>
                        <div className="mb-5">
                            <label
                                for="message"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Message
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                id="message"
                                placeholder="Type your message"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required></textarea>
                        </div>
                        <div>
                            <button
                                className="hover:shadow-form rounded-md bg-purple-600 py-3 px-8 text-base font-semibold text-white outline-none" type='submit'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </main>
    </>
        
    )
}

export default Form;
