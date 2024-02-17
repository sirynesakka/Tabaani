import React from "react";
import { BsChevronRight } from "react-icons/bs";


const NextArrow = ({onClick}) => {
    return (
        <div className="absolute right-[80px] -top-[80px]" onClick={onClick}>
            <div className="bg-red-50 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
                <BsChevronRight/>

            </div>


        </div>
    );
};
export default NextArrow; 