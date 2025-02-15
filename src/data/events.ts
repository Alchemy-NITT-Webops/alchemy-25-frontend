import event_1 from "../assets/events/event_1.jpg";
import event_2 from "../assets/events/event_2.jpg";
import event_3 from "../assets/events/event_3.jpg";
import event_4 from "../assets/events/event_4.jpg";
// types.ts
interface Event {
    id: number;
    title: string;
    image: string;
    dateTime: string;
    registerLink: string;
}

export const events: Event[] = [
    {
        id: 1,
        title: "Alchemy Arena",
        image: event_1,
        dateTime: "1 March 2025",
        registerLink: "https://qr.me-qr.com/BsqeBwL9"
    },
    {
        id: 2,
        title: "Paper Presentation",
        image: event_2,
        dateTime: "28 Feb 2025",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfZzcZ_8Xa2_IX12KIIVTPIBsOMl3-EbGg03WLSQSD8mOgH_g/viewform?usp=send_form"
    },
    {
        id: 3,
        title: "CHEMIMPACT",
        image: event_3,
        dateTime: "1 March 2025",
        registerLink: "https://unstop.com/o/9FTtgM4?lb=98SYj1zC"
    },
    {
        id: 4,
        title: "CHEMPARDY",
        image: event_4,
        dateTime: "1 March 2025",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScHr1rN4RKYE55AM9ABmSvGsysnCMo_1ruRSB1QXmZjyArWpg/viewform"
    }
];

export type { Event };