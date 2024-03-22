import React from "react";
import { Carousel } from "flowbite-react";
import { HiArrowLongRight } from "react-icons/hi2";

function OurBrand() {
  return (
    <div className="mx-auto h-[400px] w-full pt-10">
      <div className="grid place-items-center">
        <hr className="h-[3px] w-[50px] bg-lime-400" />
        <p className="text-[25px] font-bold text-teal-700">Our Brands</p>
      </div>

      <div className=" w-screen h-full flex flex-row justify-center">
      <Carousel slide={true} slideInterval={1000}>
        
          <div className="h-[308px] w-[340px] border border-gray-300 pt-[50px]">
            <div className="flex justify-center">
              <img
                src="/ourBrand/janji jiwa.PNG"
                className="h-[74px] w-[223px]"
              />
            </div>
            <div className="mx-5 pt-[20px]">
              <h1 className="text-[20px] font-bold text-teal-700">
                Janji Jiwa
              </h1>
              <p className="pt-2 text-[12px] text-gray-500">
                the Largest Coffe Chain in Indonesia
              </p>
            </div>
            <div className="mx-5 flex flex-row items-center pt-[50px] font-bold text-teal-700">
              <p>SEE DETAIL</p>
              <HiArrowLongRight
                size={25}
                className="ml-5 transition-all ease-linear hover:translate-x-2"
              />
            </div>
          </div>

          <div className="h-[308px] w-[340px] border border-gray-300 pt-[50px]">
            <div className="flex justify-center">
              <img src="/ourBrand/jiwatea.PNG" className="h-[74px] w-[223px]" />
            </div>
            <div className="mx-5 pt-[20px]">
              <h1 className="text-[20px] font-bold text-teal-700">Jiwa tea</h1>
              <p className="pt-2 text-[12px] text-gray-500">
                Sip Well, Feel Well with Jiwa Tea!
              </p>
            </div>
            <div className="mx-5 flex flex-row items-center pt-[50px] font-bold text-teal-700">
              <p>SEE DETAIL</p>
              <HiArrowLongRight
                size={25}
                className="ml-5 transition-all ease-linear hover:translate-x-2"
              />
            </div>
          </div>

          <div className="h-[308px] w-[340px] border border-gray-300 pt-[50px]">
            <div className="flex justify-center">
              <img
                src="/ourBrand/burger geber.PNG"
                className="h-[74px] w-[223px]"
              />
            </div>
            <div className="mx-5 pt-[20px]">
              <h1 className="text-[20px] font-bold text-teal-700">
                Burger Geber
              </h1>
              <p className="pt-2 text-[12px] text-gray-500">#GEBERinaja</p>
            </div>
            <div className="mx-5 flex flex-row items-center pt-[50px] font-bold text-teal-700">
              <p>SEE DETAIL</p>
              <HiArrowLongRight
                size={25}
                className="ml-5 transition-all ease-linear hover:translate-x-2"
              />
            </div>
          </div>

          <div className="h-[308px] w-[340px] border border-gray-300 pt-[50px]">
            <div className="flex justify-center">
              <img
                src="/ourBrand/sejuta jiwa.PNG"
                className="h-[74px] w-[223px]"
              />
            </div>
            <div className="mx-5 pt-[20px]">
              <h1 className="text-[20px] font-bold text-teal-700">
                Kopi Sejuta Jiwa
              </h1>
              <p className="pt-2 text-[12px] text-gray-500">
                New Mobile Coffee Cart Concept from Janji Jiwa
              </p>
            </div>
            <div className="mx-5 flex flex-row items-center pt-[50px] font-bold text-teal-700">
              <p>SEE DETAIL</p>
              <HiArrowLongRight
                size={25}
                className="ml-5 transition-all ease-linear hover:translate-x-2"
              />
            </div>
          </div>
        
      </Carousel>
      </div>
    </div>
  );
}

export default OurBrand;
