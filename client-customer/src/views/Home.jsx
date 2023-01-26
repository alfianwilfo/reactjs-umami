import prof from "../assets/prof.svg";
import Dropdown from "../components/Dropdown";
import down from "../assets/down.svg";
import { useState } from "react";
export default function Home() {
  const [statusDD, setStatusDD] = useState(false);
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-2 col-end-12 mt-[12px]">
        <div className="flex flex-row justify-between">
          <div className="font-bold grid content-center">
            <div>
              <p>Welcome, Irene</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <img src={prof} alt="" srcset="" />
            </div>
            <div>
              <img src={down} alt="" srcset="" />
            </div>
            {statusDD ? <Dropdown /> : null}
          </div>
        </div>
        <div>
          <div>
            <p>Delivery to</p>
          </div>
          <div>
            <div></div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
