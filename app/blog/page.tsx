
"use client"
import React from "react";
import { useRouter, usePathname } from "next/navigation";


const Blog = () => {

    const pathname = usePathname();

    return (
        <div>
            <h1>Blog works!</h1>
            <p>Current pathname: {pathname}</p>
        </div>
    );  
}

export default Blog;
    