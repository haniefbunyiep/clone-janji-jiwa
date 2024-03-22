import { HiArrowLongRight } from "react-icons/hi2";
export default function WhatsOnJiwaGroup() {
  return (
    <div className="mx-auto h-screen w-[1200px] pt-[100px]">
      <div className="grid place-items-center">
        <hr className="h-[3px] w-[50px] bg-lime-400" />
        <p className="text-[25px] font-bold text-teal-700">
          Whats on Jiwa Group
        </p>
      </div>

      <div className="flex flex-row justify-center gap-10 pt-10">
        <div className="h-[413px] w-[380px]">
          <img
            src="/ourBrand/news1.jpg"
            className=" absolute z-10 h-[228px] w-[380px]"
          />
          <p className="h-[228px] w-[380px] translate-x-2 translate-y-2 border-[3px] border-teal-500"></p>
          <div className="pt-[20px]">
            <p className="h-[18px] text-[10px]">2024/02/23 - 03:30:03pm</p>
            <h1 className="h-[22px] w-[380px] text-[16px] font-bold text-teal-700">
              Utilizing Coffee Grounds for Plant Fertilization
            </h1>
            <p className="h-[72px] pt-2 text-[13px] text-gray-500">
              Ground coffee is naturally rich in nutrients such as potassium,
              nitrogen, and magnesium, making it an excellent choice for soil
              fertilization. In fact, coffee grounds can serve as a natural
              compost, contributing to soil health and fertility.
            </p>
            <div className="flex flex-row items-center pt-[20px] text-[13px] font-bold text-teal-700">
              <p>SEE DETAIL</p>
              <HiArrowLongRight
                size={20}
                className="ml-5 transition-all ease-linear hover:translate-x-2"
              />
            </div>
          </div>
        </div>

        <div className="h-[413px] w-[380px]">
          <img
            src="/ourBrand/news2.jpg"
            className=" absolute z-10 h-[228px] w-[380px]"
          />
          <p className="h-[228px] w-[380px] translate-x-2 translate-y-2 border-[3px] border-teal-500"></p>
          <div className="pt-[20px]">
            <p className="h-[18px] text-[10px]">2024/01/11 - 09:20:24am</p>
            <h1 className="h-[44px] w-[380px] text-[16px] font-bold text-teal-700">
              Janji Jiwa Wins Award as The Brand Of The Year Two Years in a Row
            </h1>
            <p className="h-[54px] pt-2 text-[13px] text-gray-500">
              Janji Jiwa was able to maintain its title as Brand of the Year in
              the "Retail Coffee" category from the 2023-2024 World Branding
              Awards for 2 consecutive years
            </p>
            <div className="flex flex-row items-center pt-[20px] text-[13px] font-bold text-teal-700">
              <p>SEE DETAIL</p>
              <HiArrowLongRight
                size={20}
                className="ml-5 transition-all ease-linear hover:translate-x-2"
              />
            </div>
          </div>
        </div>

        <div className="h-[413px] w-[380px]">
          <img
            src="/ourBrand/news3.jpg"
            className=" absolute z-10 h-[228px] w-[380px]"
          />
          <p className="h-[228px] w-[380px] translate-x-2 translate-y-2 border-[3px] border-teal-500"></p>
          <div className="pt-[20px]">
            <p className="h-[18px] text-[10px]">2023/11/13 - 03:27:44pm</p>
            <h1 className="h-[44px] w-[380px] text-[16px] font-bold text-teal-700">
              When Coffee, Spice, and Gadis Kretek Meet - Collaboration between
              Janji Jiwa and Netflix
            </h1>
            <p className="h-[36px] pt-2 text-[13px] text-gray-500">
              Special collaboration from Janji Jiwa x Gadis Kretek by Netflix
              presents 2 special menus
            </p>
            <div className="flex flex-row items-center pt-[20px] text-[13px] font-bold text-teal-700">
              <p>SEE DETAIL</p>
              <HiArrowLongRight
                size={20}
                className="ml-5 transition-all ease-linear hover:translate-x-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center pt-10">
        <button className="border-2 border-teal-700 hover:bg-teal-700 hover:text-white font-bold p-3">
          more info
        </button>
      </div>
    </div>
  );
}
