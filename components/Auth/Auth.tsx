"use client"

import React, { useState } from 'react'
import { CAT, GROCERIES, SHOPPING, WELCOME } from '../../images'
import Image from 'next/image'
import { Button } from '..'
import { BiEnvelope, BiLogoFacebook, BiLogoGoogle, BiLogoLinkedin, BiLogoTwitter, BiLock, BiUser } from 'react-icons/bi'
import { InputTypeProps } from '../../types'


const AUTHENICATION = [
    {
        inputType: "text",
        iconType: <BiUser />,
        placeholder: "User Name"
    },
    {
        inputType: "password",
        iconType: <BiLock />,
        placeholder: "Password"
    },
    {
        inputType: 'email',
        iconType: <BiEnvelope />,
        placeholder: "Email"
    },
    {
        inputType: "password",
        iconType: <BiLock />,
        placeholder: "Confirm Password"
    },
]



const FormInput = ({ key, inputType, iconType, index, placeholder }: InputTypeProps) => {
    return (
        <div key={key} className='w-[400px] flex gap-1 items-center mb-7 bg-grey px-10 py-3 rounded-full max-[426px]:w-[365px] max-[376px]:w-[325px] max-[321px]:w-[295px]'>
            <div className='text-3xl text-primaryDarker'>
                {iconType}
            </div>
            <input type={inputType} id={index} className='outline-none bg-grey placeholder:text-primaryDarker placeholder:text-sm' placeholder={placeholder} />
        </div>
    )
}

const Auth = () => {
    const [signUpClicked, setSignUpClicked] = useState<boolean>(true)

    function handleSignUpClicked() {
        setSignUpClicked(!signUpClicked)
    }

    return (
        <div className='relative z-[100] flex w-full h-[100vh] overflow-hidden '>
            <div className={`bg-loginGradient w-[100vw] h-[100vw] absolute rounded-full ${signUpClicked ? '-translate-x-[50%] -mt-[600px] max-[1441px]:-mt-[300px] max-[1025px]:-mt-[100px]' : 'translate-x-[50%] -mt-[600px] max-[1441px]:-mt-[300px] max-[1025px]:-mt-[100px]'}`}></div>
            <div className={`w-full flex absolute -z-[3] p-20 max-[1025px]:px-5 justify-between max-[769px]:z-10 `}>
                <form action="" className={`flex flex-col justify-center items-center ${signUpClicked ? 'max-[769px]:absolute max-[769px]:opacity-0' : 'max-[769px]:absolute'} `}>
                    <Image priority src={CAT} alt='' width={200} height={100} className='mb-4' />

                    {
                        AUTHENICATION.map((auth, index) => (
                            <FormInput
                                key={index}
                                iconType={auth.iconType}
                                index={index.toString()}
                                inputType={auth.inputType}
                                placeholder={auth.placeholder}
                            />
                        ))
                    }

                    <Button title='SIGN UP' customStyle='text-xs px-12 py-4 mb-5 hover:border-[1px] hover:border-primaryDarker' />

                    <div>
                        <p className='text-lg mb-4 font-medium text-primary'>Or sign up with social platforms</p>
                        <div className="flex justify-between">
                            <BiLogoFacebook className='border-[2px] border-primaryDarker text-primaryDarker p-2 text-5xl rounded-full cursor-pointer hover:text-general hover:border-general hover:bg-primaryDarker' />
                            <BiLogoGoogle className='border-[2px] border-primaryDarker text-primaryDarker p-2 text-5xl rounded-full cursor-pointer hover:text-general hover:border-general hover:bg-primaryDarker' />
                            <BiLogoTwitter className='border-[2px] border-primaryDarker text-primaryDarker p-2 text-5xl rounded-full cursor-pointer hover:text-general hover:border-general hover:bg-primaryDarker' />
                            <BiLogoLinkedin className='border-[2px] border-primaryDarker text-primaryDarker p-2 text-5xl rounded-full cursor-pointer hover:text-general hover:border-general hover:bg-primaryDarker' />
                        </div>
                    </div>
                </form>
                <form action="" className={`flex flex-col justify-center items-center ${signUpClicked ? 'max-[769px]:absolute ' : 'max-[769px]:absolute max-[769px]:opacity-0'}`}>
                    <Image priority src={WELCOME} alt='' width={150} height={100} className='mb-4' />
                    
                    {
                        AUTHENICATION.slice(0,2).map((auth, index) => (
                            <FormInput
                                key={index}
                                iconType={auth.iconType}
                                index={index.toString()}
                                inputType={auth.inputType}
                                placeholder={auth.placeholder}
                            />
                        ))
                    }

                    <Button title='LOG IN' customStyle='text-xs px-12 py-4 mb-5 hover:border-[1px] hover:border-primaryDarker' />

                    <div>
                        <p className='text-lg mb-4 font-medium text-primary'>Or sign in with social platforms</p>
                        <div className="flex justify-between">
                            <BiLogoFacebook className='border-[2px] border-primaryDarker text-primaryDarker p-2 text-5xl rounded-full cursor-pointer hover:text-general hover:border-general hover:bg-primaryDarker' />
                            <BiLogoGoogle className='border-[2px] border-primaryDarker text-primaryDarker p-2 text-5xl rounded-full cursor-pointer hover:text-general hover:border-general hover:bg-primaryDarker' />
                            <BiLogoTwitter className='border-[2px] border-primaryDarker text-primaryDarker p-2 text-5xl rounded-full cursor-pointer hover:text-general hover:border-general hover:bg-primaryDarker' />
                            <BiLogoLinkedin className='border-[2px] border-primaryDarker text-primaryDarker p-2 text-5xl rounded-full cursor-pointer hover:text-general hover:border-general hover:bg-primaryDarker' />
                        </div>
                    </div>
                </form>
            </div>

            <div className={`w-full flex absolute p-20 max-[1025px]:px-2 justify-between `}>
                <Button title={signUpClicked ? 'SIGN UP' : 'LOG IN'} clickFunction={handleSignUpClicked} customStyle={`${signUpClicked ? 'translate-x-[10%] ' : 'translate-x-[75vw]'} z-[100] mb-3 text-xs h-fit min-[1025px]:hidden  font-bold bg-transparent`} />

                <div className={`flex flex-col items-center ml-10 max-[1025px]:hidden ${signUpClicked ? 'flex' : 'opacity-0'}`}>
                    <div className='text-center text-general'>
                        <h1 className='text-2xl mb-3'>New You?</h1>
                        <p className='text-sm w-[520px] mb-3'>Welcome to X-merchandise your fav. store for food , clothes , and most RUN needed item. RUN BIGGEST SHOP</p>
                        <Button title='SIGN UP' clickFunction={handleSignUpClicked} customStyle='mb-3 text-xs font-bold bg-transparent border-[3px] py-3 px-12 border-primaryDarker hover:bg-primaryDarker hover:text-general ' />
                    </div>
                    <Image  src={GROCERIES} priority alt='' width={480} height={480} className='relative w-[480px] mt-10 ' />
                </div>

                <div className={`flex flex-col items-center ml-10 max-[1025px]:hidden ${signUpClicked ? 'opacity-0' : 'flex'}`}>
                    <div className='text-center text-general'>
                        <h1 className='text-2xl mb-3'>One of us</h1>
                        <p className='text-sm w-[520px] mb-3'>Welcome to X-merchandise your fav. store for food , clothes , and most RUN needed item. RUN BIGGEST SHOP</p>
                        <Button title='LOG IN' clickFunction={handleSignUpClicked} customStyle='mb-3 text-xs font-bold bg-transparent border-[3px] py-3 px-12 border-primaryDarker hover:bg-primaryDarker hover:text-general ' />
                    </div>
                    <Image src={SHOPPING} priority alt='' width={480} height={480} className='relative w-[480px] mt-10' />
                </div>
            </div>

        </div>
    )
}

export default Auth