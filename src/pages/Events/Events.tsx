import React from 'react';
import {events} from "../../data/events";
import { EventCarousel } from '../../components';
import AnimatedTextCharacter from '../../components/AnimatedTextCharacter';


const Events: React.FC = () => {
    return (
        <div className="h-[90vh] md:h-screen bg-[#1C1C1C] w-full flex flex-col items-center justify-center">
            <div className="-mt-8 md:mt-[8%] w-full flex items-center md:items-start justify-center md:justify-start ">
                <div className="lg:text-8xl text-6xl font-bold font-Azora md:text-6xl px-4 md:px-8">
                    <AnimatedTextCharacter text={"Events"} />
                </div>
            </div>
            <div className="mt-8 md:mt-0 w-full flex items-center justify-center">
                <EventCarousel eventsData={events} />
            </div>
        </div>
    );
};

export default Events;