import React from 'react';

const ContactUs = () => {
    return (
        <div className='contact-us flex items-center justify-center h-screen bg-whitesmoke'>
            <div className="flex sm:flex-row lg:flex-row flex-col-reverse lg:w-8/12 h-5/6 bg-white shadow-md sm:w-10/12 w-full lg:scale-1 sm:scale-1 scale-90 ">
                <div className=" w-full lg:w-1/2 sm:w-1/2 h-full flex flex-col items-center justify-center ">
                    <form action="" className='flex flex-col items-center justify-center w-8/12'>
                        <span className='relative w-full h-12 flex items-center m-4 shadow'>
                            <input className='h-full w-full rounded-md bg-input pl-4' type="text" placeholder='Full Name' />
                            <button className='absolute right-5'>x</button>
                        </span>
                        <span className='relative  w-full h-12 flex items-center mb-4 shadow'>
                            <input className='h-full w-full rounded-md bg-input pl-4' type="text" placeholder='Enter Email' />
                            <button className='absolute right-5'>x</button>
                        </span>
                        <span className='relative w-full h-12 flex items-center mb-4 shadow' >
                            <input className='h-full w-full rounded-md bg-input pl-4' type="text" placeholder='Mobile Number' />
                            <button className='absolute right-5'>x</button>
                        </span>
                        <span className='relative w-full h-12 flex items-center mb-4 shadow'>
                            <input className='h-full w-full rounded-md bg-input pl-4' type="text" placeholder='Pincode' />
                            <button className='absolute right-5'>x</button>
                        </span>

                        <button type='submit' className='w-full h-12 flex items-center justify-center bg-button text-white rounded-md mt-3'>Contact Us</button>
                    </form>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2 bg-pink flex justify-center items-center font-bold text-3xl sm:h-full lg:h-full h-20">Contact Us</div>
            </div>
        </div>
    )
}

export default ContactUs