import AnimatedTextCharacter from "../../components/AnimatedTextCharacter";
import AnimatedTextWord from "../../components/AnimatedTextWords";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap/src";
import Carousel from "../../components/swiperSlider/Carousel";
function App() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
            '.about',
            { x: -100, opacity:0 },
            {
                x: 0,
                opacity:1,
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top 80%', // Start the animation when .about is in the viewport
                    end: 'bottom 80%', // Define the end of the animation trigger zone
                    toggleActions: 'play none none none', // Play the animation when it enters the viewport
                },
            }
        );
        gsap.fromTo(
            '.aboutcontent',
            { x: 100, opacity:0 },
            {
                x: 0,
                opacity:1,
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top 35%', // Start the animation when .about is in the viewport
                    end: 'bottom 80%', // Define the end of the animation trigger zone
                    toggleActions: 'play none none none', // Play the animation when it enters the viewport
                },
            }
        );
    });

    return (
        <div>

            <div id="landing" className="h-screen w-full">

                <div className=" flex w-full bg-transparent backdrop-blur-sm h-full justify-center flex-col gap-4 items-center overflow-hidden font-IBMPlexSans">
                    <p className="text-5xl md:text-7xl"><AnimatedTextCharacter text={"ALCHEMY '25"} /></p>
                    <p className="md:text-2xl"><AnimatedTextWord text={'Automation of Chemical Engineering'} /></p>
                </div>


            </div>

            <div className=" min-h-screen rounded-md overflow-hidden w-full flex-col flex items-center justify-center bg-[#03652E]">

                <div className=" flex justify-center lg:-mb-24 sm:-mb-20 -mb-16 h-fit w-full items-center">
                    <div className="about lg:text-9xl font-extrabold font-Azora  flex h-fit flex-col w-fit justify-center text-6xl p-5 items-start">
                        <div className="  w-fit text-[#EC9E52]">
                            <AnimatedTextCharacter text={"ABOUT"} />
                        </div>
                        <div className=" w-full lg:translate-x-14 lg:-translate-y-14 translate-x-8 -translate-y-5 flex justify-end items-center  text-[#00B951]">
                            <AnimatedTextCharacter text={"US"} />
                        </div>
                    </div>
                    <div className=" aboutcontent w-full bg-white h-[2px] ml-4 sm:ml-10 mr-5 rounded-sm shadow-sm"/>
                </div>

                <div className="aboutcontent font-sans text-lg overflow-hidden text-white p-5 sm:p-10 flex items-start text-whi justify-start h-full w-full">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quibusdam consequatur id officiis ea perferendis eveniet qui hic praesentium, ab, dignissimos quod cum dolorem officia neque omnis? Dicta fugit minima dolorem asperiores, suscipit soluta aut provident excepturi recusandae, voluptatibus, quis nam culpa officiis corrupti. Iste quod similique suscipit asperiores error quas expedita odit in ad, assumenda perferendis fugiat nesciunt qui optio commodi magni deserunt recusandae maiores? Eaque facilis officia quibusdam suscipit totam vero, voluptatem quaerat ex dolorum omnis consequuntur iure, nobis atque vel adipisci recusandae nostrum quo corporis nemo aspernatur error quidem? Officia sed aliquam repudiandae sequi ut fugit iusto hic beatae sit, quas incidunt rem, reiciendis, est iste earum. Praesentium, totam? Temporibus molestiae consequatur rerum veniam nam, aliquam dignissimos commodi maiores alias nihil, aperiam iusto facilis accusamus voluptatibus quis reiciendis! Amet enim officiis ad dolorem omnis consequatur laboriosam neque aperiam quo, sequi voluptate eos nesciunt eius, accusantium corrupti vitae sapiente odio nemo expedita velit quasi maxime suscipit. Enim aliquam corrupti ipsam adipisci deleniti, corporis aperiam dignissimos obcaecati incidunt, et velit, temporibus assumenda natus nobis libero excepturi error quidem esse rerum amet exercitationem. Mollitia similique esse quia? Repellendus illo neque ipsa doloremque temporibus repudiandae unde porro non. Mollitia ipsum magni odit qui expedita eum iure? Possimus, aperiam dolore aliquam et, sit mollitia laborum iusto officiis unde itaque, nam voluptas sunt similique consequatur dicta. Quibusdam ducimus natus consequatur, ipsa veniam perferendis ab adipisci voluptatum nobis alias dolorum temporibus aperiam eligendi illo soluta, laborum quas perspiciatis vero? Eos esse veniam eaque suscipit dolor sunt, nihil expedita quisquam, veritatis provident harum, deleniti assumenda itaque. Quisquam reprehenderit, velit obcaecati voluptas cupiditate impedit vitae praesentium? Temporibus, quos blanditiis. Perspiciatis modi, alias fugiat, voluptatem nam in illo atque quisquam at accusantium aliquam exercitationem ratione suscipit cum eligendi, sequi voluptatum asperiores harum possimus sit. Architecto odit deleniti veniam obcaecati rem, asperiores aut, quasi saepe ex magni minus dignissimos, voluptatibus fugit corporis. Sint voluptatum facere expedita eligendi perspiciatis repudiandae dolor, voluptate nam reiciendis odit dolores nisi quos. Eaque doloremque iure ducimus voluptatum enim porro esse maiores ex, nisi qui incidunt, aliquid nobis adipisci eum nam laborum repudiandae sunt corrupti beatae. Assumenda porro culpa rerum reiciendis, accusantium necessitatibus suscipit dolor voluptatibus nihil exercitationem quisquam nemo quibusdam molestias fugit expedita ea ducimus velit voluptatum illo ab error unde cupiditate? Nulla quae, necessitatibus veritatis aliquid voluptas ratione facere deserunt laborum ipsam tempora reiciendis voluptatem laudantium maiores ut saepe, fugiat amet debitis deleniti dolores temporibus hic officiis voluptatibus aut. Totam fugiat ducimus, et beatae, suscipit nam minus quasi temporibus vel praesentium sint exercitationem consectetur eos libero voluptatibus autem! Sunt totam eum delectus quasi quo beatae expedita exercitationem, dignissimos reprehenderit ratione aut rerum temporibus sit aspernatur pariatur, modi, numquam placeat vitae. Delectus aut harum iusto iure unde porro rem minima reiciendis tempore earum cumque facere fugit excepturi assumenda placeat, tenetur similique eveniet molestiae maiores quae impedit modi doloribus? Necessitatibus nemo odio veniam quos quaerat veritatis non et pariatur minus optio libero ullam, rerum debitis in tenetur excepturi, consequuntur unde at dolor commodi enim.
                </div>

            </div>

            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="overflow-hidden overflow-x-auto">
                    <Carousel/>
                </div>
            </div>

        </div>
    );
};

export default App


