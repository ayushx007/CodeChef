import React from 'react';
import styles from '../assets/Register.module.css'
import Link from 'next/link'

const Register = () => {
    return (
        <div className={styles.box}>
            <div className={styles.codechef}>
                C O D E C H E F
            </div>
            <div className="flex pb-20 w-full">
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-[45%] p-8 rounded-lg bg-[#DA66D64D]">
                        <div className="mb-20">
                            <h2 className="text-3xl text-center font-semibold">Register</h2>
                        </div>
                        <div>
                            <h2 className="text-xs font-semibold p-4">Username</h2>
                            <input
                                type="text"
                                className="w-full p-3 bg-inherit rounded-full border"
                            />
                        </div>
                        <div className="mb-20">
                            <h2 className="text-xs font-semibold p-4">Password</h2>
                            <input
                                type="password"
                                className="w-full p-3 bg-inherit rounded-full border"
                            />
                        </div>
                        <div className="flex mb-12 justify-evenly">
                            <button className="text-white text-base font-semibold w-2/5 px-5 bg-[#7C1176] py-2 rounded-full border border-white">
                                Register
                            </button>
                            <button className="text-[#7C1176] text-base font-semibold w-2/5 px-5 py-2 bg-white rounded-full border">
                               <Link href='Login'>
                               
                                Login
                               </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className='w-2/5'>
                        <h2 className="flex text-3xl p-16 font-semibold justify-center text-[#731571]" >Who are we?</h2>
                        <p className="font-semibold text-xl text-[#791274]">
                        We are a club in vitc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretiuum bibendum augue.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
