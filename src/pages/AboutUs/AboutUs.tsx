import AnimatedTextCharacter from "../../components/AnimatedTextCharacter"
import { aboutUsData } from "../../data/aboutsUsData.json"
const AboutUs = () => {
    return (

        <div className="min-h-screen rounded-md overflow-hidden w-full flex flex-col md:flex-row items-center justify-evenly">
            <div className="lg:text-8xl font-bold font-Azora flex h-fit flex-col w-fit items-center justify-center text-4xl p-5">
                <AnimatedTextCharacter text={"About Us"} />
            </div>
            <div className="flex p-2 md:p-5 items-center m-4 justify-center about-card md:w-[55%] h-fit">
                <p className="font-Lato font-normal opacity-75 text-base md:text-xl tracking-normal overflow-hidden text-white p-5 sm:p-10 flex items-start justify-start h-full w-full">
                    {aboutUsData}
                </p>
            </div>
        </div>
    )
}

export default AboutUs