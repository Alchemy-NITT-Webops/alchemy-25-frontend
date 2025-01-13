import React from 'react';
import AnimatedTextCharacter from '../../components/AnimatedTextCharacter';
import EventCarousel from '../../components/eventsCarousel/EventsCarousel';
import workshops from '../../data/workshops.json';

const Workshops: React.FC = () => {

    return (
        <div>

            <div className=" min-h-screen rounded-md overflow-hidden w-full flex-col flex items-center justify-center ">

                <div className="mt-20 flex justify-center lg:-mb-24 sm:-mb-20 -mb-16 h-fit w-full items-center">
                    <div className="Workshops lg:text-9xl font-extrabold font-Azora  flex h-fit flex-col w-fit justify-center text-6xl p-5 items-start">
                        <div className="  w-fit text-[#EC9E52]">
                            <AnimatedTextCharacter text={"W"} />
                        </div>
                        <div className=" w-full lg:translate-x-14 lg:-translate-y-24 translate-x-7 -translate-y-10 flex justify-end items-center  text-[#EC9E52]">
                            <AnimatedTextCharacter text={"ORKSHOPS"} />
                        </div>
                    </div>
                    <div className="  w-full bg-black h-[2px] ml-4 sm:ml-10 mr-5 rounded-sm shadow-sm" />
                </div>

                <div className="w-full min-h-screen -mt-32 md:-mt-32 flex justifyce items-center no-scrollbar  ">
                    <EventCarousel eventsData={workshops.workshops} />
                </div>

            </div>
        </div>
    );
};

export default Workshops;