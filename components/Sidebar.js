import React from "react";
import Image from "next/image";
import phillPhoto from "../public/assets/Images/pngwing.com.png";

const Sidebar = () => {
  return (
    <div className="grid gap-4">
      <div className="bg-[#F7F7FA] grid gap-8 rounded-[8%] py-6 px-8">
        <div className="text-xl w-3/4 text-gray-500">
          <strong>StrepNaz Portakal &amp; </strong>Ekinezya 24 Pastil
        </div>
        <div className="relative py-2">
          <Image
            layout="responsive"
            src={phillPhoto}
            alt={`StrepNaz Portakal & Ekinezya Pastil`}
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="border border-[#00B1B2] rounded-2xl p-2 bg-white cursor-pointer">
            <Image
              layout="responsive"
              src={phillPhoto}
              className="rounded-2xl"
              alt={`StrepNaz Portakal & Ekinezya Pastil`}
            />
          </div>
          <div className="border border-[#00B1B2] rounded-2xl p-2 bg-white cursor-pointer">
            <Image
              layout="responsive"
              src={phillPhoto}
              className="rounded-2xl"
              alt={`StrepNaz Portakal & Ekinezya Pastil`}
            />
          </div>
          <div className="border border-[#00B1B2] rounded-2xl p-2 border-[2.5px] bg-white cursor-pointer">
            <Image
              layout="responsive"
              src={phillPhoto}
              className="rounded-2xl"
              alt={`StrepNaz Portakal & Ekinezya Pastil`}
            />
          </div>
          <div className="border border-[#00B1B2] rounded-2xl p-2 bg-white cursor-pointer">
            <Image
              layout="responsive"
              src={phillPhoto}
              className="rounded-2xl"
              alt={`StrepNaz Portakal & Ekinezya Pastil`}
            />
          </div>
        </div>
        <button className="text-left font-medium text-pink-200 text-xl">
          Hata Bildir!
        </button>
      </div>
      <div className=" bg-[#F7F7FA] grid gap-8 rounded-[8%] py-6 px-8">
        <div className="flex justify-between ">
          <h2 className="text-[#4CBEC5] font-bold text-xl"> DURUM </h2>
          <button className="border bg-white border-[#00B1B2] px-2 py-1 rounded-full text-base relative pr-6 text-[#7E8096]">
            Temizle
            <div className="absolute right-2 top-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.528"
                height="11.528"
                viewBox="0 0 11.528 11.528"
              >
                <path
                  id="Path_100"
                  data-name="Path 100"
                  d="M4488.537,1387.553l3.52-3.52a1.311,1.311,0,0,0,0-1.852l-.023-.023a1.31,1.31,0,0,0-1.852,0l-3.52,3.52-3.5-3.5a1.31,1.31,0,0,0-1.852,0h0a1.308,1.308,0,0,0,0,1.852l3.5,3.5-3.516,3.515a1.309,1.309,0,0,0,0,1.851l.023.023a1.307,1.307,0,0,0,1.851,0l3.515-3.515,3.5,3.5a1.309,1.309,0,0,0,1.852,0h0a1.31,1.31,0,0,0,0-1.851Z"
                  transform="translate(-4480.912 -1381.775)"
                  fill="#7e8096"
                />
              </svg>
            </div>
          </button>
        </div>
        <div>
          <div className="form-group">
            <input type="checkbox" id="Miadı 12 Aydan Uzunlar" />
            <label htmlFor="Miadı 12 Aydan Uzunlar">
              Miadı 12 Aydan Uzunlar
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="Kargo Kampanyalılar" />
            <label htmlFor="Kargo Kampanyalılar">Kargo Kampanyalılar</label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="Min. Satış Tutarı Olmayanlar" />
            <label htmlFor="Min. Satış Tutarı Olmayanlar">
              Min. Satış Tutarı Olmayanlar
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="4,7 Puandan Yüksek Olanlar" />
            <label htmlFor="4,7 Puandan Yüksek Olanlar">
              4,7 Puandan Yüksek Olanlar
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="Aynı Gün Kargo" />
            <label htmlFor="Aynı Gün Kargo" className="font-medium">
              Aynı Gün Kargo
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
