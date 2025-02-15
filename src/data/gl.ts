
import gl_1 from "../assets/gl/gl_1.jpg"
// gldata.ts
interface GLPerson {
    image: string;
    name: string;
    topic: string;
    designation: string;
    address: string;
}

export const gldata: GLPerson[] = [
    {
        image: gl_1,
        name: "Dr. Subash Kannan",
        topic: "Making Manufacturing SMART",
        designation: "Global Technology Manager",
        address: "BASF"
    },
    {
        image: gl_1,
        name: "Dr. Subash Kannan",
        topic: "Making Manufacturing SMART",
        designation: "Global Technology Manager",
        address: "BASF"
    },
    {
        image: gl_1,
        name: "Dr. Subash Kannan",
        topic: "Making Manufacturing SMART",
        designation: "Global Technology Manager",
        address: "BASF"
    },
    
];

export type { GLPerson };