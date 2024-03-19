import React, { useState } from "react";
import { Arrows } from "./Icon";
const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 600) {
            setVisible(true);
        } else if (scrolled <= 1000) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button className=" position-fixed bounce  back-button justify-content-center align-items-center "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
         <Arrows/>
            </button>
        </div>
    );
};

export default BackToTop;