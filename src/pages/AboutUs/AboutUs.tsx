import AnimatedTextCharacter from "../../components/AnimatedTextCharacter"

const AboutUs = () => {
    return (

        <div className="min-h-screen rounded-md overflow-hidden w-full flex flex-col md:flex-row items-center justify-evenly">
            <div className="lg:text-8xl font-bold font-Azora flex h-fit flex-col w-fit items-center justify-center text-4xl p-5">
                <AnimatedTextCharacter text={"About Us"} />
            </div>
            <div className="flex p-2 md:p-5 items-center m-4 justify-center about-card md:w-[55%] h-fit">
                <p className="font-Lato font-normal opacity-75 text-base md:text-xl tracking-normal overflow-hidden text-white p-5 sm:p-10 flex items-start justify-start h-full w-full">
                    {"Lorem ipsum dolor sit amet, consectetur adipis minima dolorem asperiores, , aperiam iusto facilis accusamus voluptatibus quis reiciendis! Amet enim officiis ad dolorem omnis consequatur laborios, Lorem ipsum dolor sit amet, consectetur adipis minima dolorem asperiores,, Lorem ipsum dolor sit amet, consectetur adipis minima dolorem asperiores,am neque aperiam quo, sequi voluptate eos nesciunt eius, accusantium corrupti vitae sapiente odio nemo expedita velit quasi maxime suscipit. Enim aliquam corrupti ipsam adipisci deleniti, corporis aperiam dignissimos obcaecati incidunt, et velit, temporibus assumenda natus nobis libero excepturi error quidem esse rerum amet exercitationem. Mollitia similique esse quia? Repellendus illo neque ipsa doloremque temporibus repudiandae unde porro non. Mollitia ipsum magni odit qui expedita eum iure? Possimus, aperiam dolore aliquam et, sit mollitia laborum iusto officiis unde itaque, nam voluptas sunt similique consequatur dicta. Quibusdam ducimus natus consequatur, ipsa veniam perferendis ab adipisci voluptatum nobis alias dolorum temporibus aperiam eligendi illo soluta, laborum quas perspiciatis vero? Eos esse veniam eaque suscipit dolor sunt, nihil expedita quisquam, veritatis provident harum, deleniti assumenda itaque. Quisquam reprehenderit, velit obcaecati voluptas cupiditate impedit vitae praesentium? Temporibus, quos blanditiis. Perspiciatis modi, alias fugiat, voluptatem nam in illo atque"}
                </p>
            </div>
        </div>
    )
}

export default AboutUs