import { Statistics } from "../../types"

const StatisticsCard = ({ statistics, customStyle }: Statistics) => {
    return (
        statistics.map((stat, index) => (
            <div key={index} className={`${customStyle} cursor-pointer p-10 flex justify-between items-center w-[320px] max-[1025px]:w-[280px] max-[768px]:w-[320px] max-[426px]:w-[98%]`}>
                <div>
                    <h1 className={`font-medium text-4xl`}>{stat.number}</h1>
                    <p className='text-primary'>{stat.type}</p>
                </div>
                {stat.icon}
            </div>
        ))
    )
}

export default StatisticsCard