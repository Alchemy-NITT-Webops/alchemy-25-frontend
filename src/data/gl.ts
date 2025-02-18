
import gl_1 from "../assets/gl/gl_1.png"
import gl_2 from "../assets/gl/gl_2.png"
import gl_3 from "../assets/gl/gl_3.png"
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
        name: "Dr Subash Kannan",
        topic: "Making Manufacturing SMART",
        designation: "Global Technology Manager",
        address: "BASF"
    },
    {
        image: gl_3,
        name: "Dr Nat Malupillai",
        topic: "Dr S H Ibrahim endowment lecture",
        designation: "Group CEO",
        address: "IIT Madras Research Park | Incubation Cell | Rural Technology Business Incubator"
    },
    {
        image: gl_2,
        name: "Swathi Srinivasan",
        topic: "Molecules to Models: Shaping the future through digital technology.",
        designation: "Asst. Research Scientist",
        address: "Unilever"
    },
    
];

export type { GLPerson };