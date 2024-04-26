import React, {useEffect, useState} from "react";
import Pin from "./Pin";
import axios from "axios";
import {yourIp} from "../Pages/Home";


interface Pin {
    id: string;
    value: string;
    pinName: string;
}

interface submitCount {
    "submitCounter": number
}


const getUrl = `http://${yourIp}:8080/getboard`

const Board = (props: submitCount) => {

    const initialPinData: Pin[] = [
        {id: "1", pinName: "D0", value: "0"},
        {id: "2", pinName: "D1", value: "0"},
        {id: "3", pinName: "D2", value: "0"},
        {id: "4", pinName: "D3", value: "0"},
        {id: "5", pinName: "D4", value: "0"},
        {id: "6", pinName: "3v", value: "0"},
        {id: "7", pinName: "3v", value: "0"},
        {id: "8", pinName: "D5", value: "0"},
        {id: "9", pinName: "D6", value: "0"},
        {id: "10", pinName: "D7", value: "0"},
        {id: "11", pinName: "D8", value: "0"},
        {id: "12", pinName: "RX", value: "0"},
        {id: "13", pinName: "TX", value: "0"},
        {id: "14", pinName: "G", value: "0"},
        {id: "15", pinName: "3.3v", value: "0"},
    ];

    const [pinData, setPinData] = useState(initialPinData)

    const updatePinData = () => {
        axios.get(getUrl)
            .then(response => {
                console.log(response.data)
                const pinArray: Pin[] = Object.keys(response.data.pins).map(key => ({
                    id: key,
                    value: response.data.pins[key].value,
                    pinName: response.data.pins[key].pinName
                }));


                setPinData(pinArray)

            })
            .catch(error => console.log(error));
    }


    useEffect(() => {
        updatePinData()
    }, [props.submitCounter]);

    const handleUsbClick = () => {
        updatePinData()
    }


    return (

        <div className={"pt-4 pl-4 pr-4"}>
            <div className={"w-[350px]  bg-[#333] rounded-xl "}>

                {pinData.map(pin => (
                    <Pin
                        key={pin.id}
                        id={pin.id}
                        value={pin.value}
                        pinName={pin.pinName}
                    />
                ))}

                <div className={"w-full flex justify-center"}>
                    <div className={"bg-[#223054] w-1/4 flex text-blue-400 justify-center rounded-t-xl cursor-pointer"}
                         onClick={handleUsbClick}> USB
                    </div>
                </div>

            </div>
        </div>


    )

}

export default Board