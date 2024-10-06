
"use client"
import React from "react";
import { useRouter, usePathname } from "next/navigation";


const HallOfFame = () => {

    const pathname = usePathname();

    return (
        <div>
            <h1>HallOfFame works!</h1>
            <p>Current pathname: {pathname}</p>
        </div>
    );  
}

export default HallOfFame;
    