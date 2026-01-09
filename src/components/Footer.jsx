import React from 'react'
import { BiLogoLinkedin } from "react-icons/bi";
import { RiInstagramLine } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { BiLogoFacebook } from "react-icons/bi";
import { LiaYoutube } from "react-icons/lia";
import vec from "../assets/Vector.svg"
import con from "../assets/contact.svg"
import mn from "../assets/Email.svg"
import loc from "../assets/Location.png"
import { NavLink } from 'react-router-dom';
import icon from "../assets/logos.png"
const Footer = () => {
  return (
    <div>
        <div className='bg-black pt-10 pb-14 '>
            <div className='flex justify-between items-center pb-4 px-18'>
                  <NavLink to="/">
                        <img className="w-14" src={icon} alt="" />
                      </NavLink>
                {/* <span className='text-2xl text-white font-semibold flex items-center'>Spin <span className='text-2xl text-[#f4c20d]'>Designs</span></span> */}
           
                <div className='flex gap-4'>
                    <p className='text-base text-white'>Follow us</p>
                    <div className='flex gap-3'>
                        <a className='rounded-full w-8 h-8 bg-black border-2 border-white flex items-center justify-center' href=""><BiLogoLinkedin className='text-[#f4c20d]' />
</a>
                        <a className='rounded-full w-8 h-8 bg-black border-2 border-white flex items-center justify-center' href=""><RiInstagramLine className='text-[#f4c20d]' />

</a>
                        <a className='rounded-full w-8 h-8 bg-black border-2 border-white flex items-center justify-center' href=""><TiSocialTwitter className='text-[#f4c20d]' />
</a>
                        <a className='rounded-full w-8 h-8 bg-black border-2 border-white flex items-center justify-center' href=""><BiLogoFacebook className='text-[#f4c20d]' />
</a>
                        <a className='rounded-full w-8 h-8 bg-black border-2 border-white flex items-center justify-center' href=""><LiaYoutube className='text-[#f4c20d]' />
</a>
                    </div>
                </div>
            </div>
                 <div className='pb-4 w-[90%] border-b border-[#262626] mx-auto'></div>
            {/* <div>
                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia temporibus nesciunt voluptates nisi, laboriosam repellendus est consequuntur cum deserunt vel.</p>
            </div> */}
             <div className='flex justify-between items-center pb-10 px-18 pt-10 text-white'>
            <p className='text-lg font-normal ' >We help businesses have a lasting impact <br /> on customers by crafting captivating <br />designs and development that stands out.</p>
            <div className='flex flex-col gap-4 items-center'>
                <div className='flex flex-col gap-3 items-center'>
                    <img className='w-6' src={con} alt="" />
                    <NavLink to="/Contact">
                        <span className='text-xl hover:text-[#f4c20d]'>Contact Us</span>
                    </NavLink>
                </div>
                <p className='text-base font-light'>+234 803 955 4311</p>
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <div className='flex flex-col gap-3 items-center'>
                    <img className='w-6' src={mn} alt="" />
                   <NavLink to="/Contact">
                        <span className='text-xl hover:text-[#f4c20d]'>Get in touch</span>
                     </NavLink>
                </div>
                <p className='text-base font-light'>antiqhive@gmail.com</p>
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <div className='flex flex-col gap-3 items-center'>
                    <img className='w-4' src={loc} alt="" />
                    <span className='text-xl hover:text-[#f4c20d]'>Location</span>
                </div>
                <p className='text-base font-light text-center'>House 4B, Seidu Ayodeji <br /> Balogun Street, Ibara Housing <br /> Estate, Abeokuta</p>
            </div>

        </div>
        <div className='pb-2 h-px w-[90%] border-b border-[#f4c20d] mx-auto'></div>
        <div className='flex gap-12 items-center justify-center pt-8 pb-6'>
           <NavLink to="/" className='text-lg text-white hover:text-[#f4c20d]'> Home</NavLink>
          <NavLink to="/Aboutus" className='text-lg text-white hover:text-[#f4c20d]'> About us</NavLink>
          <NavLink to="/Works" className='text-lg text-white hover:text-[#f4c20d]'>  Work</NavLink>
           <NavLink to="/Services" className='text-lg text-white hover:text-[#f4c20d]'> Services</NavLink>
           <NavLink to="/Training" className='text-lg text-white hover:text-[#f4c20d]'> Training</NavLink>
            <NavLink to="/Contact" className='text-lg text-white hover:text-[#f4c20d]'>Contact us</NavLink>
        </div>
        <div className='pb-2 h-px w-[90%] border-b border-[#262626] mx-auto'></div>
        
<NavLink to="/">
            
<div className='text-lg text-white flex items-center justify-center pt-6 hover:text-[#f4c20d]'>
    <img className='hover:text-[#f4c20d] ' src={vec} alt="" />
    <span className='font-bold'>Antiqhive 2026</span>
</div>
</NavLink>
        </div>
       
    </div>
  )
}

export default Footer