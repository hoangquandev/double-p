'use client'
import { useEffect } from "react";

const Container = ({ children }) => {


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, []);
    return (
        <main className="m-auto w-full  min-[1920px]:w-[1720px] xl:w-[1240px]">{children}</main>
    )
}

export default Container