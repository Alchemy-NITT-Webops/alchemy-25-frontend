import React from 'react';
import bg_circle from '../../assets/gl_bg_circle.png';
import gldata from '../../data/gl.json';
import glimg from "../../assets/logo.png"

const GuestLectures: React.FC = () => {

    return (
        <div style={
            {
                backgroundImage: `url(${bg_circle})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '33%',
                backgroundPositionX: 'center',
                backgroundAttachment: 'fixed',
                backgroundPositionY: 'center',
            }
        } className=" w-full overflow-y-auto overflow-x-hidden felx flex-col justify-center items-center" >

            <div className="gl lg:text-9xl font-extrabold font-Azora  flex h-fit flex-col w-fit justify-center text-6xl p-5 items-start">
                <div className="  w-fit text-[#EC9E52]">
                    GUEST
                </div>
                <div className=" w-full lg:translate-x-14 lg:-translate-y-14 translate-x-8 -translate-y-5 flex justify-end items-center  text-[#00B951]">
                    LECTURES
                </div>
            </div>
            <div className="grid grid-cols-11 auto-rows-auto relative">
                {
                    gldata.gldata.map((gl, i) => {
                        if (i === 0) {
                            return (
                                <>
                                    <div className={`rounded-lg bg-blue-600 border-2 backdrop-blur-md border-orange-400 col-span-5 row-span-3 flex flex-col m-5 p-5 gl${i + 1}`}>
                                        <img alt='img' src={glimg} className="rounded-xl size-fit"></img>

                                        <div className="w-full text-lg md:text-2xl font-bold mt-5">{gl.name}</div>
                                        <div className="w-full mt-4 text-[#EC9E52]">{gl.designation}</div>
                                        <div className="w-full">{gl.address}</div>
                                    </div>

                                    <div className={`col-span-6 row-span-2`} />
                                    <div />
                                </>
                            )
                        }
                        return (
                            <>
                                {i % 2 == 0 ? <div className="col-span-6" /> : null}
                                {i % 2 == 1 && i > 1 ? <div/> : null}
                                {i % 2 == 1 && i > 1 ? <div className="col-span-6" /> : null}
                                {i % 2 == 1 && i > 2 ? <div /> : null}

                                <div className={`rounded-lg ${i%2==0? "bg-blue-600":"bg-green-600"} border-2 border-orange-400 col-span-5 row-span-3 flex flex-col m-5 p-5 gl${i + 1} h-fit`}>
                                    <img src={glimg} alt='img' className="rounded-xl size-fit"></img>

                                    <div className="w-full text-lg md:text-2xl font-bold mt-5">{gl.name}</div>
                                    <div className="w-full mt-4 text-[#EC9E52]">{gl.designation}</div>
                                    <div className="w-full">{gl.address}</div>
                                </div>

                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default GuestLectures;