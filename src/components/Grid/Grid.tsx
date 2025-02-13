import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";


type GridItem = {
    id: number;
    title: string;
    description: string;
};

function Grid() {
    
    const gridData: GridItem[] = [
        {
            id: 1,
            title: "Block 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius obcaecati",
        },
        {
            id: 2,
            title: "Block 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius obcaecati",
        },
        {
            id: 3,
            title: "Block 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius obcaecati",
            
        },
        {
            id: 4,
            title: "Block 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius obcaecati",
        },
        {
            id: 5,
            title: "Block 5",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius obcaecati",
        },
        {
            id: 6,
            title: "Block 6",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius obcaecati",
        },
        {
            id: 7,
            title: "Block 7",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius obcaecati",
        },

    ];
    
    useGSAP(() => {
        var delay = 0;
        gsap.set(".slideFromRight", {
            opacity: 0,
            x:100
        })
        gsap.set(".slideFromLeft", {
            opacity: 0,
            x:-100
        })
        gsap.set(".slideFromTop", {
            opacity: 0,
            y:-100
        })
        gsap.set(".slideFromBottom", {
            opacity: 0,
            y:100
        })
        gsap.to(".slideFromRight", {
            opacity: 1,
            translateX: 0,
            duration: 1,
            delay: delay+0.5
        });
        gsap.to(".slideFromLeft", {
            opacity: 1,
            translateX: 0,
            duration: 1,
            delay: delay+0.5
        });
        gsap.to(".slideFromTop", {
            opacity: 1,
            translateY: 0,
            duration: 1
        })
        gsap.to(".slideFromBottom", {
            opacity: 1,
            translateY: 0,
            duration: 1
        })
        gsap.set(".Appear", {
            opacity: 0,
            scale: 0.5
        })
        gsap.to(".Appear", {
            opacity: 1,
            scale:1
        })
        
    })

    return (
        <>

            <div className="md:grid md:grid-cols-4 md:col-span-2 p-5 md:grid-rows-3 gap-5 my-5 scale-90">
                {gridData.map((item, i) => {
                    return (
                        <>
                            <div
                                key={i}
                                className={`
                                        bg-neutral-100 rounded-sm shadow-sm border-2 p-2 flex flex-col items-center justify-center 
                                        ${i === 0 || i === 4 || i === 5 || i === 6 ? 'md:col-span-2' : ''} 
                                        ${i === 2 ? 'md:row-span-2' : ''} 
                                        ${i == 2 || i == 6 ? 'slideFromRight' : ''}
                                        ${i == 0 ? 'slideFromLeft' : ''}
                                        ${i == 1 ? 'slideFromTop' : ''}
                                        ${i == 3 ? 'slideFromLeft' : ''}
                                        ${i == 4 ? 'Appear' : ''} ${i == 4 ? 'SlideFromBottom' : ''}
                                        
                                    `}
                            >
                                <h2 className="text-xl text-gray-600">{item.title}</h2>
                                <p className="text-2xl">{item.description}</p>
                            </div>

                        </>
                    )
                })}
            </div>

        </>
    )


}


export default Grid