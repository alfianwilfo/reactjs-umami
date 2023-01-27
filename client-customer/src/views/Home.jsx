import enak from "../assets/enak.jpeg";
import Hello from "../components/Hello";
import { useState } from "react";
import ProfileButton from "../components/ProfileButton";
import Address from "../components/Address";
import Search from "../components/Search";
export default function Home() {
  return (
    <div className="grid grid-cols-12 font-jakarta">
      <div className="col-start-2 col-end-12 flex flex-col gap-y-[40px]">
        <div className=" mt-[12px] ">
          <div className="flex flex-row justify-between">
            <div className=" grid content-center">
              <Hello />
            </div>
            <div>
              <ProfileButton />
            </div>
          </div>
          <div>
            <div>
              <p>Delivery to</p>
            </div>
            <div>
              <Address />
            </div>
          </div>
          <div className="grid grid-cols-12 mt-[20px]">
            <Search />
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <div className="font-bold text-[19px]">Recommended !</div>
          <div>
            <div className="bg-[#FFE5E5] rounded-[40px] shadow-lg drop-shadow-lg w-[48%] grid grid-cols-12">
              <div className="col-start-2 col-end-12 py-[20px]">
                <div className=" flex justify-center">
                  <div>
                    <img src={enak} alt="" className="w-[60px] rounded-full" />
                  </div>
                </div>
                <div className="font-bold text-[18px]">Tirex</div>
                <div className="text-[9px] font-semibold">
                  Ayam goreng + nasi + sambal + lalapan
                </div>
                <div className="font-semibold">Rp. 15.000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
