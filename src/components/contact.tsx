import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import TranslateOnScroll from "../common/translate-on scroll";
import { personal } from "../data-service/data-provider";
import TextBox from "../common/text-box";
import TextArea from "../common/text-area";
import { RiSendPlaneFill } from "react-icons/ri";
import e from "cors";
import FormModel from "./form-model";
import SimpleLoader from "../svg/loader";
export default function Contact() {
  const [fName, setfName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  interface APIResponse {
    // Define the structure of your API response
    // Example: { message: string }
  }

  async function sendMsg(e: any) {
    setIsError(false);
    setIsLoading(true);
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
    };

    const requestBody = {
      fname: fName,
      lName: lName,
      email: email,
      phone: phone,
      message: message,
    };

    const requestOptions: RequestInit = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    };

    try {
      const response = await fetch("./api/sendmessage", requestOptions);
      const data: APIResponse = await response.json();
      //console.log(data);
      setEmail("");
      setfName("");
      setLName("");
      setPhone("");
      setMessage("");
      setShowModel(true);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setShowModel(true);
      setIsLoading(false);
      setIsError(true);
    }
  }

  return (
    <>
      <div className=" w-full ">
        <div className=" flex flex-row justify-center items-center py-1  rounded-2xl border border-prime_gray gap-2 w-36 mb-8 ">
          <FaEnvelope size={18} className=" text-prime_gray " />
          <p className="  ">Contact</p>
        </div>
        <div className=" group/first ">
          <TranslateOnScroll translateY={100} duration={700}>
            <p className="text-4xl lg:text-6xl mb-10  ">
              Let's Work <span className=" text-prime_Green ">Together!</span>
            </p>
            <p className="text-xl lg:text-2xl mb-10  ">{personal.email}</p>
          </TranslateOnScroll>
          <form onSubmit={(e) => sendMsg(e)}>
            <div className=" flex flex-col gap-6  ">
              <div className=" flex flex-col gap-6 md:flex-row ">
                <TextBox
                  label="First Name"
                  value={fName}
                  required={true}
                  onChange={(e) => setfName(e.target.value)}
                  placeHolder="Jhone"
                  className=" w-11/12 md:w-80 "
                  disabled={isLoading}
                />
                <TextBox
                  value={lName}
                  label="Last Name"
                  onChange={(e) => setLName(e.target.value)}
                  placeHolder="Smith"
                  className=" w-11/12 md:w-80 "
                  disabled={isLoading}
                />
              </div>
              <div className=" flex flex-col gap-6 md:flex-row ">
                <TextBox
                  value={email}
                  label="Email "
                  type="email"
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                  placeHolder="example@email.com"
                  className=" w-11/12 md:w-80 "
                  disabled={isLoading}
                />
                <TextBox
                  label="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeHolder="98 765 4322"
                  type="number"
                  className=" w-11/12 md:w-80 "
                  disabled={isLoading}
                />
              </div>
              <TextArea
                label="Message"
                value={message}
                required={true}
                onChange={(e) => setMessage(e.target.value)}
                placeHolder="Enter yor message"
                className=" w-11/12 md:w-128 min-h-[120px] "
                disabled={isLoading}
              />
              <div className=" w-full flex justify-center items-start gap-3 ">
                <button
                  type="submit"
                  className=" w-4/5 mt-10 bg-[] text-md md:text-lg rounded-2xl text-black py-3 flex justify-center items-center hover:scale-105 transition-all duration-500 ease-linear bg-prime_Green "
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <SimpleLoader height={30} width={30} />
                  ) : (
                    <div className=" flex flex-row gap-3 justify-center items-center   ">
                      SEND MESSAGE
                      <RiSendPlaneFill className=" text-xl animate-pulse " />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {showModel && (
        <FormModel closeModel={() => setShowModel(false)} status={!isError} />
      )}
    </>
  );
}
