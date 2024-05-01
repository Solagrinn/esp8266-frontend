import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle, faSquareCaretDown, faSquareCaretLeft, faSquareCaretRight} from '@fortawesome/free-regular-svg-icons';

const ChainLatencyCard = () => {
    return (
        <div
            className={"bg-[#333]   rounded-3xl text-blue-400 p-4 grid place-items-center sm:max-w-[304px]   outline outline-1 outline-[#4f4f4f] w-full  "}>
            <div className={"grid grid-cols-5 "}>
                <div>
                    <img src="/logo192.png" alt={"React Logo"} className={"w-10 h-10"}/>
                </div>
                <div className={"w-12 flex justify-center"}>
                    10ms
                    <div className={"absolute justify-center pt-5"}>
                        <FontAwesomeIcon icon={faSquareCaretRight} style={{fontSize: '20px'}}></FontAwesomeIcon>
                    </div>
                </div>
                <div>
                    <img src="/springlogo.png" alt={"Spring Logo"} className={"w-10 h-10"}/>
                </div>
                <div className={"w-12 flex justify-center"}>
                    10ms
                    <div className={"absolute justify-center pt-5"}>
                        <FontAwesomeIcon icon={faSquareCaretRight} style={{fontSize: '20px'}}></FontAwesomeIcon>
                    </div>
                </div>
                <div className={""}>
                    <div className={"flex justify-center"}>
                        <img src="/esp8266logo.png" alt={"Esp8266 Logo"} className={"w-10 h-10"}/>
                    </div>

                    <div className={"flex justify-center"}>
                        <div className={"absolute pr-16 pt-2"}>10ms</div>
                        <FontAwesomeIcon icon={faSquareCaretDown} style={{
                            fontSize: '20px',
                            paddingTop: '11px',
                            paddingBottom: '11px'
                        }}></FontAwesomeIcon>
                    </div>

                </div>
            </div>
            <div className={"grid grid-cols-5 "}>
                <div className={"w-10 h-10"}>
                    <FontAwesomeIcon icon={faCheckCircle} style={{fontSize: '40px'}}></FontAwesomeIcon>
                </div>

                <div className={"w-12 flex justify-center"}>
                    OK
                    <div className={"absolute justify-center pt-5"}>
                        <FontAwesomeIcon icon={faSquareCaretLeft} style={{fontSize: '20px'}}></FontAwesomeIcon>
                    </div>
                </div>


                <div>
                    <img src="/logo192.png" alt={"React Logo"} className={"w-10 h-10"}/>
                </div>
                <div className={"w-12 flex justify-center"}>
                    10ms
                    <div className={"absolute justify-center pt-5"}>
                        <FontAwesomeIcon icon={faSquareCaretLeft} style={{fontSize: '20px'}}></FontAwesomeIcon>
                    </div>
                </div>

                <div className={"flex justify-center"}>
                    <img src="/springlogo.png" alt={"Spring Logo"} className={"w-10 h-10"}/>
                </div>


            </div>

            <div className={"mt-10"}>

                Success
            </div>
        </div>
    )
}

export default ChainLatencyCard