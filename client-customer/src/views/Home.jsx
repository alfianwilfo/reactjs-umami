import mapMarker from "../assets/marker.svg";
import searchIcon from "../assets/search.svg";
import enak from "../assets/enak.jpeg";
import Hello from "../components/Hello";
import { useState } from "react";
import ProfileButton from "../components/ProfileButton";

export default function Home() {
  const [s, setS] = useState("");

  let cari = () => {
    console.log("MASUK");
  };

  let changeHandler = (e) => {
    setS(e.target.value);
  };

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
            <div className="flex flex-row">
              <div>
                <img src={mapMarker} alt="" className="w-[20px]" />
              </div>
              <div className="text-[13px]">
                <p>Universitas advent indonesia (Ester Extension No.1)</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-[20px]">
            <div className="col-span-12 flex flex-row relative grid grid-cols-12">
              <div className="col-span-12">
                <input
                  type="text"
                  onChange={changeHandler}
                  placeholder="What would you like to order ?"
                  className="outline outline-offset-[7px] w-full outline-[2px] placeholder:italic placeholder:text-black/50 h-[30px] text-[14px] outline-[#B56A6A] rounded-[2px] px-[5px] pr-[50px]"
                />
              </div>
              <div className="fixed right-[50px]">
                <button onClick={cari}>
                  <img src={searchIcon} alt="" className="w-[30px]" />
                </button>
              </div>
            </div>
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
