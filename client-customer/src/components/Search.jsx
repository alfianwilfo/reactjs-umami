import searchIcon from "../assets/search.svg";
import { useState } from "react";

export default function Search() {
  const [s, setS] = useState("");

  let cari = () => {
    console.log("MASUK");
  };

  let changeHandler = (e) => {
    setS(e.target.value);
  };
  return (
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
  );
}
