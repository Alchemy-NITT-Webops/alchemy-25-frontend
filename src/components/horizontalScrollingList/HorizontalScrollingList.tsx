import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


interface GLData {
    image: string;
    name: string;
    designation: string;
    address: string;
}

interface AnimatedGridListProps {
    gldata: { gldata: GLData[] };
}

const AnimatedGridList: React.FC<AnimatedGridListProps> = ({ gldata }) => {
    const gridRef = useRef(null);

 

    return (
        <div className="grid grid-cols-11 auto-rows-auto relative" ref={gridRef}>
            {gldata.gldata.map((gl, i) => {
                if (i === 0) {
                    return (
                        <React.Fragment key={i}>
                            <div
                                className="col-span-5 row-span-3 flex flex-col m-5 p-5 gl1"
                                data-grid-item
                            >
                                <img src={gl.image} className="rounded-xl h-full w-full" alt={gl.name} />
                                <div className="w-full text-2xl font-bold mt-5">{gl.name}</div>
                                <div className="w-full mt-4 text-[#EC9E52]">{gl.designation}</div>
                                <div className="w-full">{gl.address}</div>
                            </div>
                            <div className="col-span-6 row-span-2" />
                            <div />
                        </React.Fragment>
                    );
                }
                return (
                    <React.Fragment key={i}>
                        {i % 2 === 0 ? <div className="col-span-6" /> : null}
                        {i % 2 === 1 && i > 1 ? <div className="" /> : null}
                        {i % 2 === 1 && i > 1 ? <div className="col-span-6" /> : null}
                        {i % 2 === 1 && i > 2 ? <div /> : null}

                        <div
                            className={`col-span-5 row-span-3 flex flex-col m-5 p-5 gl${i + 1}`}
                            data-grid-item
                        >
                            <img src={gl.image} className="rounded-xl h-fit w-full" alt={gl.name} />
                            <div className="w-full text-2xl font-bold mt-5">{gl.name}</div>
                            <div className="w-full mt-4 text-[#EC9E52]">{gl.designation}</div>
                            <div className="w-full">{gl.address}</div>
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default AnimatedGridList;