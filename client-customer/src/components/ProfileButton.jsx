import { useState } from "react";
import Dropdown from "./Dropdown";
import prof from "../assets/prof.svg";
export default function ProfileFunction() {
  const [statusDD, setStatusDD] = useState(false);
  let change = () => {
    if (statusDD === false) {
      setStatusDD(true);
    } else {
      setStatusDD(false);
    }
  };
  return (
    <div className="relative">
      <div>
        <img src={prof} alt="" srcset="" onClick={change} />
      </div>
      {statusDD ? (
        <div className="fixed top-[60px] right-[10px] bg-[#B56A6A] w-[70px] rounded flex justify-center">
          <Dropdown />
        </div>
      ) : null}
    </div>
  );
}
