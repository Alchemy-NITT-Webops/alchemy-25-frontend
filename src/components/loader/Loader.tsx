import ChemPlantAnim from "./ChemPlantAnim";
import SquareAnim from "./SquareAnim";



function Loader() {
    return (
        <div className=' flex items-center justify-center h-screen w-full'>
            <SquareAnim />
            <ChemPlantAnim />
        </div >
    )
}


export default Loader