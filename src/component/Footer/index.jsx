import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";

export default function Footer() {
  return (
    <div className="border-pampas mt-[20px] flex h-[365px] w-full flex-col items-center justify-center border-t-2 bg-white pt-[30px]">
      <div className="flex pb-[10px]">
        <div className="h-[300px] w-[500px] p-[5px]">
          <img
            className="mb-[10px] h-[40px] w-[96px]"
            src="https://jiwagroup.com/assets/img/jiwa-logo.png"
            alt=""
          />
          <div className="text-nevada mb-[30px] mt-[10px] flex items-start justify-start pt-[10px] text-[14px] font-light">
            PT Luna Boga Narayan
          </div>
          <div className="text-fungreen flex items-start justify-start text-[14px] font-bold">
            Hubungi Kami
          </div>
          <div className="text-nevada flex items-start justify-start gap-2 py-[5px] text-[14px] font-light">
            <MdOutlineEmail size={20} className="text-fungreen" />
            info@jiwagroup.com
          </div>
          <div className="text-nevada flex  items-start justify-start gap-2 py-[5px] text-[14px] font-light">
            <MdOutlineLocationOn size={20} className="text-fungreen" />
            <div className="flex flex-col">
              <p>Jl. Kedoya Raya No.2 Kota </p>
              <p>Jakarta Barat, Daerah Khusus </p>
              <p>Ibukota Jakarta 11520 </p>
            </div>
          </div>
          <div className="flex h-[50px] w-[490px] items-center">
            <div className="text-fungreen w-[163px] p-[5px] text-[14px] font-bold">
              Ikuti Kami
            </div>
            <div className="text-fungreen flex h-[50px] w-[163px] items-center justify-start text-[13px] font-bold hover:text-white">
              <button className=" border-fungreen hover:bg-fungreen flex w-[80%] items-center justify-center gap-2 border px-2 py-1 ">
                <SlSocialYoutube
                  size={20}
                  className="text-fungreen font-bold hover:text-white"
                />
                Youtube
              </button>
            </div>
            <div className="text-fungreen flex h-[50px] w-[163px] items-center justify-start text-[13px] font-bold hover:text-white">
              <button className=" border-fungreen hover:bg-fungreen flex w-[80%] items-center justify-center gap-2 border px-2 py-1  ">
                <SlSocialInstagram
                  size={20}
                  className="text-fungreen font-bold hover:text-white"
                />
                Instagram
              </button>
            </div>
          </div>
        </div>
        <div className="h-[300px] w-[200px] p-[5px]">
          <h1 className="text-fungreen mb-[25px] flex h-[20px] w-[190px] justify-start text-[16px] font-bold">
            BRAND
          </h1>
          <p className="text-fungreen mb-[10px] text-[14px] font-light">
            Kopi Sejuta Jiwa
          </p>
          <p className="text-fungreen mb-[10px] text-[14px] font-light">
            Burger Geber
          </p>
          <p className="text-fungreen mb-[10px] text-[14px] font-light">
            Jiwa Tea
          </p>
          <p className="text-fungreen mb-[10px] text-[14px] font-light">
            Janji Jiwa
          </p>
        </div>
        <div className="h-[300px] w-[200px] p-[5px]">
          <h1 className="text-fungreen mb-[25px] flex h-[20px] w-[190px] justify-start text-[16px] font-bold">
            JIWA+
          </h1>
          <p className="text-fungreen mb-[10px] text-[14px] font-bold">
            Download Sekarang
          </p>
          <img
            className="mb-[10px] h-[40px] w-[120px]"
            src="https://jiwagroup.com/assets/img/app-apple.png"
            alt=""
          />
          <img
            className="h-[40px] w-[120px]"
            src="https://jiwagroup.com/assets/img/app-google.png"
            alt=""
          />
        </div>
        <div className="h-[300px] w-[300px] p-[5px]">
          <h1 className="text-fungreen mb-[25px] flex h-[20px] w-[190px] justify-start text-[16px] font-bold">
            PARTNERSHIP
          </h1>
          <div className="bg-fungreen h-[120px] w-full p-[15px]">
            <p className="text-[14px] font-bold text-white">
              Let's become partner and build the perfect product.
            </p>
            <button className="hover:bg-fungreen bg-pistachio mt-[10px] w-[140px] px-[10px] py-[7px] text-[13px] font-bold text-white">
              Become A Partner
            </button>
          </div>
        </div>
      </div>
      <div className="bg-pampas text-nevada flex h-[50px] w-screen items-center justify-center py-[15px] font-light">
        <h1 className="flex flex-col">
          © 2024 Jiwa Group. All rights reserved.
        </h1>
      </div>
    </div>
  );
}
