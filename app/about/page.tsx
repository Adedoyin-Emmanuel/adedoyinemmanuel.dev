
"use client"
import React from "react";
import { useRouter, usePathname } from "next/navigation";


const About = () => {

    const pathname = usePathname();

    return (
        <div>
            <h1>About works!</h1>
            <p>Current pathname: {pathname}</p>
        </div>
    );  
}

export default About;
    