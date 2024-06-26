import React, {useState} from "react";
import SendValueCard from "../Cards/SendValueCard";
import Board from "../ESP Board/Board";
import ChainLatencyCard from "../Advanced/ChainLatencyCard";


const Home = () => {

    const [submitCounter, setSubmitCounter] = useState(0)


    const incrementCounter = () => {
        setSubmitCounter(submitCounter + 1)
    }

    return (
        <div className={"w-full h-full min-h-screen bg-black "}>
            <div className={"p-2"}>

                <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 "}>

                    <div className={"p-4"}>
                        <SendValueCard setSubmitCounter={() => incrementCounter()}></SendValueCard>
                    </div>

                    <div className={"p-4 text-white"}>
                        Esp-8266 Board
                        <Board submitCounter={submitCounter}></Board>
                    </div>

                    <div>
                        <ChainLatencyCard></ChainLatencyCard>

                    </div>
                </div>
            </div>

        </div>
    )

}
export default Home