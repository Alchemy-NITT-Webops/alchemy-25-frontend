// workshops.ts

import workshop_1 from "../assets/workshops/workshop_1.jpg";
import workshop_2 from "../assets/workshops/workshop_2.jpg";
import workshop_3 from "../assets/workshops/workshop_3.jpg";
import workshop_4 from "../assets/workshops/workshop_4.jpg";
import workshop_5 from "../assets/workshops/workshop_5.jpg";


interface Workshop {
    id: number;
    title: string;
    image: string;
    dateTime: string;
    registerLink: string;
}

export const workshops: Workshop[] = [
    {
        id: 1,
        title: "Optimization of Chemical Process",
        image: workshop_1,
        dateTime: "28 Feb 2025",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf5v-HiLkKdSc1rHVFtyQNMojIIW72goaoZzCp4W1_or8MqQA/viewform?usp=send_form"
    },
    {
        id: 2,
        title: "MatLab Workshop",
        image: workshop_2,
        dateTime: "2 March 2025",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf5v-HiLkKdSc1rHVFtyQNMojIIW72goaoZzCp4W1_or8MqQA/viewform?usp=send_form"
    },
    {
        id: 3,
        title: "Data Analytics Workshop",
        image: workshop_3,
        dateTime: "2 March 2025",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf5v-HiLkKdSc1rHVFtyQNMojIIW72goaoZzCp4W1_or8MqQA/viewform?usp=send_form"
    },
    {
        id: 4,
        title: "Lippan Art Workshop",
        image: workshop_4,
        dateTime: "1 March 2025 | 10:30 AM",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf5v-HiLkKdSc1rHVFtyQNMojIIW72goaoZzCp4W1_or8MqQA/viewform"
    },
    {
        id: 5,
        title: "BIS Workshop",
        image: workshop_5,
        dateTime: "14 Feb 2025",
        registerLink: ""
    }
];

export type { Workshop };