import prof from "../assets/prof.svg";
import Dropdown from "../components/Dropdown";
import mapMarker from "../assets/marker.svg";
import searchIcon from "../assets/search.svg";
import enak from "../assets/enak.jpeg";
import { useState } from "react";
export default function Home() {
  const [statusDD, setStatusDD] = useState(false);
  const [s, setS] = useState("");
  let change = () => {
    if (statusDD === false) {
      setStatusDD(true);
    } else {
      setStatusDD(false);
    }
  };
  let cari = () => {
    console.log("MASUK");
  };

  let changeHandler = (e) => {
    setS(e.target.value);
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-start-2 col-end-12 flex flex-col gap-y-[40px]">
        <div className=" mt-[12px] ">
          <div className="flex flex-row justify-between">
            <div className="font-bold grid content-center">
              <div>
                <p>Welcome, Irene</p>
              </div>
            </div>
            <div className="flex flex-row relative">
              <div>
                <img src={prof} alt="" srcset="" onClick={change} />
              </div>
              {statusDD ? (
                <div className="fixed top-[60px] right-[10px] bg-[#B56A6A] w-[70px] rounded flex justify-center">
                  <Dropdown />
                </div>
              ) : null}
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
          <div className="font-bold text-[19px]">Recomended !</div>
          <div>
            <div className="bg-[#FFE5E5] rounded shadow-2xl w-1/2">
              <div>
                <img src={enak} alt="" className=" rounded-full" />
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
  );
}
