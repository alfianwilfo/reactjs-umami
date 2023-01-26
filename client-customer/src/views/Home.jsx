import prof from "../assets/prof.svg";
import Dropdown from "../components/Dropdown";
import mapMarker from "../assets/marker.svg";
import { useState } from "react";
export default function Home() {
  const [statusDD, setStatusDD] = useState(false);
  let change = () => {
    if (statusDD === false) {
      setStatusDD(true);
    } else {
      setStatusDD(false);
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-start-2 col-end-12 mt-[12px] ">
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
          <div className="col-span-12">
            <input
              type="text"
              placeholder="What would you like to order ?"
              className="outline outline-offset-[7px] w-full outline-[2px] placeholder:italic placeholder:text-black/50 h-[30px] text-[14px] outline-[#B56A6A] rounded-[2px] px-[5px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
