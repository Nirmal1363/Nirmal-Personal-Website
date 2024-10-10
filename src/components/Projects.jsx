
import React from "react";
import vpn from '../assets/vpn.png'
import sportix from '../assets/sportix.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Snap Shot' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={vpn} alt="" />
            </a>}
            {title=='Co People' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-csover " src={sportix} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Sportix',
        description:'Sportix is a cutting-edge sports analytics tool I crafted using Python and Streamlit. This project showcases the power of machine learning in sports, delivering jaw-dropping accuracy for NBA and EPL game predictions. It is not just about numbers – it is about bringing the thrill of data-driven insights to fans and analysts alike.',
        image: {vpn},
        git:'https://github.com/Nirmal1363/Sportix',
        technologies:[ 'Machine Learning', 'Streamlit']
    },
    {
        title:'SmartPower AI',
        description:'SmartPower AI is a cutting-edge energy prediction tool I engineered using Python and advanced machine learning. This project revolutionizes smart home energy management, blending Random Forest, XGBoost, and LSTM models for scary-accurate forecasts. It is not just about saving watts – it is about empowering homeowners with AI-driven insights for a greener future.',
        image: {sportix},
        git:"https://github.com/Nirmal1363/AI-PoweredEnergyForecast",
        technologies:[ 'Deep Learning', 'Data Analysis']
    }
]

export default Projects