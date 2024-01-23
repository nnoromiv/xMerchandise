"use client"

import { BiMailSend, BiNotification, BiPhone, BiStar, BiUser } from "react-icons/bi"
import { Button, NavBar } from "../../../components"
import { useToggler } from "../../../hooks"
import Image from "next/image"
import { FOOD_2 } from "../../../images"
import { useState } from "react"

const TEXT = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta
deleniti perferendis dignissimos dolorum, corporis dolorem placeat
harum dolore ipsa consectetur culpa expedita incidunt voluptatibus
provident itaque veritatis explicabo deserunt.`

const Profile = () => {
    const [textLength, setTextLength] = useState<number>(100)

    function handleLength() {
        if(textLength !== -1){
            setTextLength(-1)
        } else {
            setTextLength(100)
        }
    }
    return (
        <div className={`relative mx-40 px-5 mt-5 max-[1025px]:mx-20 max-[768px]:ml-14 max-[768px]:mx-0`}>

            <div className="bg-general px-10 py-5 flex justify-between items-center shadow-shadow relative z-[98] max-[426px]:px-3">
                <div className="flex items-center gap-10">
                    <Image src={FOOD_2} width={200 } height={200} alt="" className="relative rounded-full border-[4px] border-solid border-grey max-[426px]:hidden" />
                    <div className="mt-auto">
                        <h3 className="text-3xl font-bold">John Doe</h3>
                        <p className="text-grey">Osun,Nigeria</p>
                    </div>
                </div>                
                <div className="flex">
                    <BiNotification  className="bg-primary text-general text-6xl p-3 rounded-full"/>
                    <sub className="-ml-4 bg-general px-3 h-fit rounded-full text-lg">1</sub>
                </div>
            </div>

            <div className="w-full flex max-[1025px]:flex-col">
                <div className="w-[25%] p-4 bg-general shadow-below relative z-[43] pt-[40px] -mt-6 ml-4 max-[1025px]:w-[96%] max-[1025px]:mr-3 max-[426px]:w-full max-[426px]:mx-0">
                    <span className="flex items-center gap-3">
                        <BiPhone /> +44 789-3XXX-XX
                    </span>
                    <span className="flex items-center gap-3">
                        <BiMailSend /> John.Doe@gmail.com
                    </span>
                    <div className="mt-2">
                        <h3 className="text-xl font-bold">BIO</h3>
                        <p className="text-sm text-primaryDarker">
                            {
                                TEXT.slice(0,textLength) + `.`
                            } <span onClick={handleLength} className="text-primary text-xs cursor-pointer">See More</span>
                        </p>
                    </div>
                    <div className="flex justify-between gap-3 mt-3 max-[321px]:flex-col">
                        <Button title="Chat" customStyle="rounded-none"/>
                        <Button title="Create" customStyle="rounded-none" />
                    </div>
                    <div className="flex gap-3 mt-3">
                        <h3 className="text-3xl font-medium text-gray-400">4.5</h3>
                        <div className="">
                            <div className="flex mb-2">
                                <BiStar className="text-primaryDarker"/>
                                <BiStar className="text-primaryDarker"/>
                                <BiStar className="text-primaryDarker"/>
                                <BiStar className="text-primaryDarker"/>
                                <BiStar className="text-primaryDarker"/>
                            </div>
                            <span className="text-primaryDarker"> 123 Reviews </span>
                        </div>
                    </div>
                </div>
                
                <div className="w-[75%] mr-3 max-[1025px]:w-[96%] max-[1025px]:ml-4 max-[426px]:mx-0 max-[426px]:w-full">
                    <h3 className="bg-gray-900 text-white text-center py-2 border-b-[4px] border-b-primary">POSTS</h3>
                        <div className="text-center">
                            <h1 className="my-2 text-2xl">Your Posts</h1>
                            <p className="text-sm px-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Perspiciatis nesciunt et officiis enim porro! Maiores quisquam
                                voluptatibus vitae accusamus, aliquam, quos quaerat ducimus veniam
                                debitis placeat facilis mollitia deleniti modi. Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. Corrupti totam odio commodi
                                deleniti veritatis ut hic inventore doloremque esse, eius corporis
                                provident delectus magnam, blanditiis ipsum quae accusantium!
                                Laborum, culpa? Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Consequatur atque cum cupiditate quaerat. Distinctio neque
                                consectetur eveniet autem, iste vero architecto sunt quod quo nulla
                                quae magni. Recusandae, quas explicabo! Lorem ipsum dolor sit, amet
                                consectetur adipisicing elit. Veritatis ratione soluta sit optio
                                eius amet consequuntur iusto blanditiis! Nesciunt reprehenderit,
                                tenetur optio quae iste odit error. Quidem minima sapiente totam.
                            
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Home = () => {
    const { handleMenu, show } = useToggler()
    return (
        <main className="h-full pb-10 pt-20 bg-grey">
            <NavBar super={{ handleMenu, show }} pageIcon={<BiUser className='text-primaryDarker text-3xl cursor-pointer' onClick={handleMenu} />} />
            <Profile />
        </main>
    )
}

export default Home