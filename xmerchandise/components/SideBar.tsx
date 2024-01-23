"use client"

import Link from 'next/link'
import { BiAnalyse, BiBookmark, BiFolder, BiGridAlt, BiLayer, BiLogIn, BiLogOut, BiMessageSquareDots, BiUser } from 'react-icons/bi'
import { NavigationProps } from '../types'


const SideBar = ({show, active} : NavigationProps) => {
    const SIDEBAR = [
        {
            link: "dashboard",
            icon: <BiGridAlt className='text-primary text-xl' />,
            activeIcon: <BiGridAlt className='text-general text-xl' />,
            title: "Dashboard"
        },
        {
            link: "",
            icon: <BiUser className='text-primary text-xl' />,
            activeIcon: <BiUser className='text-general text-xl' />,
            title: "Accounts"
        },
        {
            link: "",
            icon: <BiMessageSquareDots className='text-primary text-xl' />,
            activeIcon: <BiMessageSquareDots className='text-general text-xl' />,
            title: "Products"
        },
        {
            link: "",
            icon: <BiBookmark className='text-primary text-xl' />,
            activeIcon: <BiBookmark className='text-general text-xl' />,
            title: "Recent"
        },
        {
            link: "",
            icon: <BiFolder className='text-primary text-xl' />,
            activeIcon: <BiFolder className='text-general text-xl' />,
            title: "Contacts"
        },
        {
            link: "",
            icon: <BiAnalyse className='text-primary text-xl' />,
            activeIcon: <BiAnalyse className='text-general text-xl' />,
            title: "Analytics"
        }
    ]
    return (
        <aside className={`fixed top-0 h-[100vh] ${show ? 'w-44' : 'w-16'} bg-primaryDarker pt-5 pr-4 pb-0 pl-0 z-[100]`} >
            <nav className="h-full flex flex-col justify-between items-start overflow-hidden">
                <div className='flex flex-col items-start'>
                    <Link href="/" className="flex gap-3 py-2 justify-center items-center pl-4 pr-0">
                        
                        <BiLayer className='text-general text-xl' />
                          
                        {
                            !show ? <></> : <span className="text-general font-extrabold">XM</span>
                        }
                    </Link>
                    <div className="mt-10 flex flex-col justify-center items-start">
                       {
                        SIDEBAR.map((item,index) => (
                            <Link key={index} href={item.link} className="flex gap-3 py-2 justify-center  items-center pl-4 pr-0 mb-6">
                                {
                                    active === item.link ? item.activeIcon : item.icon
                                }
                                {
                                    !show ? <></> :  <span className="text-lg text-primary">{item.title}</span>
                                }
                            </Link>
                        ))
                       }
                    </div>
                </div>

                <Link href="./login.html" className="flex gap-3 py-2 justify-center  items-center pl-4 pr-0 mb-6">
                    <BiLogIn className='text-primary text-xl' />
                    {
                        !show ? <></> : <span className="text-lg text-primary">Log-in</span>
                    }
                </Link>

                <Link href="#" className="flex gap-3 py-2 justify-center  items-center pl-4 pr-0 mb-6">
                    <BiLogOut className='text-primary text-xl' />
                    {
                        !show ? <></> : <span className="text-lg text-primary">Log-out</span>
                    }
                </Link>
            </nav>
        </aside>
    )
}

export default SideBar