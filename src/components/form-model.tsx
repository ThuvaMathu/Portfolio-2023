import React from "react";
import { TiTick } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
type modetProps = {
  closeModel: () => void;
  status: boolean;
};
export default function FormModel(props: modetProps) {
  return (
    <>
      <div className=" z-50 fixed flex top-0 left-0 w-full h-full  justify-center items-center">
        <div
          className=" absolute w-full h-full bg-slate-600/30 "
          onClick={() => props?.closeModel()}
        />
        <div className="w-64 h-64  bg-white flex   relative rounded-xl  ">
          <div
            className=" absolute top-2 right-2 cursor-pointer "
            onClick={() => props?.closeModel()}
          >
            <IoCloseSharp className=" text-bg_gray text-lg " />
          </div>
          {props?.status ? (
            <div className=" flex flex-col w-full justify-center items-center text-center  gap-6 ">
              <div className=" w-24 h-24 rounded-full bg-bg_gray flex justify-center items-center overflow-hidden ">
                <TiTick className=" text-prime_Green text-8xl " />
              </div>
              <p className=" text-bg_gray text-xl font-semibold ">
                Thank you
                <br />I will contact you soon
              </p>
            </div>
          ) : (
            <div className=" flex flex-col w-full justify-center items-center text-center  gap-6 ">
              <div className=" w-24 h-24 rounded-full bg-bg_gray flex justify-center items-center overflow-hidden ">
                <IoCloseSharp className=" text-rose-700 text-8xl " />
              </div>
              <p className=" text-bg_gray text-xl font-semibold ">
                Sorry
                <br />
                Please try again later!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
