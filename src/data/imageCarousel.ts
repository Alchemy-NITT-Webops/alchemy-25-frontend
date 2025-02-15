import hightlight_1 from "../assets/highlights/highlight_1.png";
import hightlight_2 from "../assets/highlights/highlight_2.png";
import hightlight_3 from "../assets/highlights/highlight_3.png";
import hightlight_4 from "../assets/highlights/highlight_4.png";
import hightlight_5 from "../assets/highlights/highlight_5.png";
import hightlight_6 from "../assets/highlights/highlight_6.png";


// imageCarousel.ts
interface CarouselImage {
    id: number;
    image: string;
    title: string;
}

export const imageCarouselData: CarouselImage[] = [
    {
        id: 1,
        image: hightlight_1,
        title: "highlight 1"
    },
    {
        id: 2,
        image: hightlight_2,
        title: "highlight 2"
    },
    {
        id: 3,
        image: hightlight_3,
        title: "highlight 3"
    },
    {
        id: 4,
        image: hightlight_4,
        title: "highlight 4"
    },
    {
        id: 5,
        image: hightlight_5,
        title: "highlight 5"
    },
    {
        id: 6,
        image: hightlight_6,
        title: "highlight 6"
    }
];

export type { CarouselImage };