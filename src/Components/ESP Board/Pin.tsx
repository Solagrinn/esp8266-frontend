import React from "react";

type pinVariables = {
    id: string;
    value: string;
    pinName: string;
}

const Pin = (props: pinVariables) => {


    return (
        <div className={"w-full h-[50px] pr-2 text-white flex items-center justify-end "}>
            <div className={"pr-4"}>
                {props.value}
            </div>

            <div className={"w-[50px] h-3/4 bg-[#1a1a1a] text-white rounded-xl flex items-center justify-center"}>
                <div>
                    {props.pinName}
                    <div className={"text-xs flex text-blue-400 justify-center"}>{props.id}</div>
                </div>

            </div>

        </div>
    )
}

export default Pin

