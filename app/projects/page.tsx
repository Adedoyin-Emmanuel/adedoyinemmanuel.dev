
"use client"
import React from "react";
import { useRouter, usePathname } from "next/navigation";


const Projects = () => {

    const pathname = usePathname();

    return (
        <div>
            <h1>Projects works!</h1>
            <p>Current pathname: {pathname}</p>
        </div>
    );  
}

export default Projects;
    