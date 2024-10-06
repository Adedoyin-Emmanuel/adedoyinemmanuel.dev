
"use client"
import React from "react";
import { useRouter, usePathname } from "next/navigation";


const Contact = () => {

    const pathname = usePathname();

    return (
        <div>
            <h1>Contact works!</h1>
            <p>Current pathname: {pathname}</p>
        </div>
    );  
}

export default Contact;
    