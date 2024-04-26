import React, {ChangeEvent, FormEvent, useState} from "react";
import BlackButtonWhiteOutline from "../Buttons/BlackButtonWhiteOutline";
import axios from "axios";
import {yourIp} from "../../YourIp";

type numberCounter = {
    "setSubmitCounter": () => void
}


const SendValueCard = (props: numberCounter) => {

    const url = `http://${yourIp}:8080/savetoboard`

    const [value, setValue] = useState("0")
    const [pinId, setPinId] = useState("")
    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(value)

        const requestBody = {
            "id": pinId,
            "value": value

        }

        const sendTime = Date.now()
        axios.post(url, requestBody)
            .then(response => {
                const receiveTime = Date.now()
                const delay = receiveTime - sendTime

                console.log(response)
                console.log("Delay = " + delay)
            })
            .then(props.setSubmitCounter)
            .catch(error => {
                console.log(error)
            })

    }

    const changeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {

        setValue(event.target.value)
    }
    const changePinIdHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPinId(event.target.value)
    }

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        // Enforce the constraint
        event.target.value = Math.max(0, Math.min(parseInt(event.target.value, 10) || 0, 255)).toString();
    };

    return (
        <div
            className={"bg-[#333] text-white rounded-3xl p-4  grid place-items-center sm:max-w-[304px]  outline outline-1 outline-[#4f4f4f] w-full "}>


            <form className={"grid place-items-center"} onSubmit={submitHandler}>
                <div>
                    Value to send
                </div>
                <input type={"number"} className={" rounded-lg shadow-white focus:shadow-lg outline-none bg-gray-600"}
                       onInput={handleInput}
                       onChange={changeValueHandler}/>
                <div className={"pt-4"}>
                    Pin Number to send
                </div>
                <input type={"text"}
                       className={" rounded-lg shadow-white mt-1 focus:shadow-lg outline-none bg-gray-600"}
                       onChange={changePinIdHandler}/>

                <div className={"pt-4 w-full"}>
                    <BlackButtonWhiteOutline></BlackButtonWhiteOutline>
                </div>
            </form>

            <div>
                Value in State = {value}
            </div>
            <div>
                pinId in State = {pinId}
            </div>
        </div>
    )


}

export default SendValueCard