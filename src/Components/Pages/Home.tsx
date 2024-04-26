import React, {useState} from "react";
import SendValueCard from "../Cards/SendValueCard";
import Board from "../ESP Board/Board";




const Home = () => {

    const [submitCounter, setSubmitCounter] = useState(0)


    const incrementCounter = () => {
        setSubmitCounter(submitCounter + 1)
    }

    return (
        <div className={"w-full h-full  bg-black "}>
            <div className={"p-4 grid sm:grid-cols-2 lg:grid-cols-4 pb-20"}>

                <div className={"p-4"}>
                    <SendValueCard setSubmitCounter={() => incrementCounter()}></SendValueCard>
                </div>

                <div className={"p-4 text-white"}>
                    Esp-8266 Board
                    <Board submitCounter={submitCounter}></Board>
                </div>
            </div>


        </div>
    )

}
export default Home