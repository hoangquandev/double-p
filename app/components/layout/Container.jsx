'use client'

import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";

const Container = ({ children }) => {
    const options = {
        licenseKey: "opensource",
        focusableElementsOffsetX: 5,
        focusableElementsOffsetY: 5,
        color: "#609F15",
        dotColor: "#0e1016",
        invert: true,
        focusableElements:
            "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",

        opacity: 1,
        size: 40,
        radius: 4,
        magnetic: true,
        // focusableElementsOffsetX: 5,
        // focusableElementsOffsetY: 5,
        // color: "#609F15",
        // opacity: 1,
        // dotColor: "#0e1016",
        // zIndex: 0,
        // // tooltipPadding: 20,
        // radius: 10,
        // magnetic: true,
    }
    // useEffect(() => {
    //     new Blobity(options);
    // }, [])
    const blobityInstance = useBlobity(options);
    useEffect(() => {
        // console.log(blobityInstance.current);
        window.blobity = blobityInstance.current;
        // if (blobityInstance.current) {
        //     // @ts-ignore for debugging purposes or playing around
        // }
    }, [blobityInstance]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, []);
    return (
        <main className="m-auto w-full min-h-[calc(100vh-436px)] xl:w-[1240px]">{children}</main>
    )
}

export default Container