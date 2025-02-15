import ChemPlantAnim from "./ChemPlantAnim";
import SquareAnim from "./SquareAnim";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Loader() {
    const navigate = useNavigate();
    const [time, setTime] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        const timeout = setTimeout(() => {
            navigate("/");
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div className="bg-[#1C1C1C] h-screen w-full flex flex-col items-center justify-center">
            <p className="text-white font-bold font-Azora text-3xl">seeems you have lost your path <br/>redirecting to home in {time}</p>

            <div className='  flex items-center justify-center w-full'>
                <SquareAnim />
                <ChemPlantAnim />
            </div >
        </div>
    )

}


export default Loader