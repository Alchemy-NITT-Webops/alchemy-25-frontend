import { Accordion as FAQAccordion } from "../../components"
import AnimatedTextCharacter from "../../components/AnimatedTextCharacter"

const FAQ = () => {
    return (
        <div className="h-full rounded-md overflow-hidden w-full flex items-center justify-between">
            <div className="lg:text-9xl hidden font-bold font-Azora md:flex h-fit flex-col w-[40%] items-center justify-center text-6xl p-5">
                <AnimatedTextCharacter text={"FAQ"} />
            </div>
            <div className="flex p-5 items-center justify-center w-full md:w-[60%] h-full">
                <FAQAccordion />
            </div>
        </div>
    )
}

export default FAQ