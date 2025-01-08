import React from 'react';
import Footer from '../../components/footer/footer';
import EventCarousel from '../../components/eventsCarousel/EventsCarousel';
import AnimatedTextCharacter from '../../components/AnimatedTextCharacter';

const Events: React.FC = () => {
    return (
        <div>

            <div className=" min-h-screen rounded-md overflow-hidden w-full flex-col flex items-center justify-center ">

                <div className="mt-20 flex justify-center lg:-mb-24 sm:-mb-20 -mb-16 h-fit w-full items-center">
                    <div className="about lg:text-9xl font-extrabold font-Azora  flex h-fit flex-col w-fit justify-center text-6xl p-5 items-start">
                        <div className="  w-fit text-[#EC9E52]">
                            <AnimatedTextCharacter text={"E"} />
                        </div>
                        <div className=" w-full lg:translate-x-14 lg:-translate-y-24 translate-x-7 -translate-y-10 flex justify-end items-center  text-[#EC9E52]">
                            <AnimatedTextCharacter text={"vents"} />
                        </div>
                    </div>
                    <div className=" aboutcontent w-full bg-black h-[2px] ml-4 sm:ml-10 mr-5 rounded-sm shadow-sm" />
                </div>

                <div className="w-full min-h-screen -mt-10 md:-mt-16 flex justifyce items-center no-scrollbar  ">
                    <EventCarousel />
                </div>

            </div>
            <div className="-mt-28">
                <Footer />

            </div>
        </div>
    );
};

export default Events;