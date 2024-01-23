import Image from "next/image"
import { Button } from ".."
import { CUSTOMER, TABLE_BODY, TABLE_HEADERS } from "../../constants"
import { BiComment, BiPhone, BiUserCircle } from "react-icons/bi"
import { NavigationProps } from "../../types"

const Content = ({show} : NavigationProps) => {
    return (
        <section className={`relative flex gap-3 px-3 ${show ? 'ml-48 max-[426px]:blur-2xl max-[426px]:h-[100vh] max-[426px]:overflow-hidden' : 'ml-14'} mt-16 max-[769px]:flex-col max-[426px]:px-3`}>

            <div className="px-10 py-5 bg-general w-[70%] rounded-lg max-[1025px]:w-[65%] max-[769px]:w-[98%] max-[426px]:px-3">
                <div className="flex justify-between mb-3">
                    <h3 className="text-2xl font-semibold max-[426px]:text-base">Recent Projects</h3>
                    <Button customStyle="max-[321px]:hidden" title="More"  />
                </div>
                <div >
                    <table className="w-full">
                        <thead className="border-y-[1px]">
                            <tr className="font-bold text-lg max-[426px]:text-xs">
                                {
                                    TABLE_HEADERS.map((header, index) => (
                                        <td key={index} className="py-2">
                                            {header}
                                        </td>
                                    ))
                                }
                            </tr>
                        </thead>

                        <tbody >
                            {
                                TABLE_BODY.map((body, index) => (
                                    <tr key={index}>
                                        <td className="py-1 max-[426px]:text-xs">{body.title}</td>
                                        <td className="py-1 max-[426px]:text-xs">{body.department}</td>
                                        <td className="py-1 max-[426px]:text-xs flex">{body.status}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="px-3 py-5 bg-general w-[28%] rounded-lg max-[1025px]:w-[33%] max-[769px]:w-[98%]">
                <div className="flex justify-between mb-3">
                    <h3 className="text-xl font-semibold max-[1025px]:text-base">New Customer</h3>
                    <Button customStyle="max-[321px]:hidden" title="More" />
                </div>
                {
                    CUSTOMER.map((item, index) => (
                        <div key={index} className="mb-3 flex gap-3 w-full justify-between">
                            <div className="flex gap-2">
                                <Image src={item.image} width={50} height={50} alt="" className="ml-1 h-[50px] rounded-full" />
                                <div className="flex flex-col">
                                    <h4 className="max-[426px]:text-xs">{item.name}</h4>
                                    <small>{item.title}</small>
                                </div>
                            </div>
                            <div className="flex mt-auto mb-5 mr-3 cursor-pointer">
                                <BiUserCircle className="text-primaryDarker" />
                                <BiComment className="text-primaryDarker" />
                                <BiPhone className="text-primaryDarker" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Content