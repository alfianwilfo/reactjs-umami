import WelcomeDeliverProfile from "../components/WelcomeDeliverProfile";
import done from "../assets/ceklisdone.svg";
import undone from "../assets/ceklisundone.svg";
import linedone from "../assets/linedone.svg";
import lineundone from "../assets/lineundone.svg";
import chatt from "../assets/chat.svg";
export default function OrderStatus() {
  return (
    <>
      <div className="grid grid-cols-12 font-jakarta">
        <div className="col-start-2 col-end-12 flex flex-col gap-y-[40px]">
          <div>
            <WelcomeDeliverProfile />
          </div>
          <div>Your order status</div>
        </div>
      </div>
      <div className="w-screen mt-[10px]">
        <div className="mx-[10px] p-[20px] shadow-md drop-shadow-md flex flex-col gap-y-[10px] ">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div>2 x Tirex</div>
              <div>Rp. 20.000</div>
            </div>
            <div className="text-[12px]">note: Mau extra sambel</div>
          </div>
          <div className="flex justify-center flex-row gap-x-[5px] text-[10px]">
            <div className="grid content-center">
              <div className="flex justify-center flex-col">
                <div className="flex justify-center">
                  <div>
                    <img src={done} alt="" className="w-[22px]" />
                  </div>
                </div>
                <div>Confirm</div>
              </div>
            </div>
            <div className="grid content-center">
              <div className="flex justify-center">
                <div className="w-[50px] h-[3px] rounded-lg bg-[#4ECB71]"></div>
              </div>
            </div>
            <div className="grid content-center">
              <div className="flex justify-center">
                <div>
                  <img src={undone} alt="" className="w-[22px]" />
                </div>
              </div>
              <div>Cook</div>
            </div>
            <div className="grid content-center">
              <div className="flex justify-center">
                <div className="w-[50px] h-[3px] rounded-lg bg-[#ABABAB]"></div>
              </div>
            </div>
            <div className="grid content-center">
              <div className="flex justify-center">
                <div>
                  <img src={undone} alt="" className="w-[22px]" />
                </div>
              </div>
              <div>Deliver</div>
            </div>
            <div className="grid content-center">
              <div className="flex justify-center">
                <div className="w-[50px] h-[3px] rounded-lg bg-[#ABABAB]"></div>
              </div>
            </div>
            <div className="grid content-center">
              <div className="flex justify-center">
                <div>
                  <img src={undone} alt="" className="w-[22px]" />
                </div>
              </div>
              <div>Done</div>
            </div>
          </div>
          <div>
            <button className="h-[50px] w-full bg-[#F3F3F3] rounded px-[20px] text-[12px] italic text-left flex flex-row items-center gap-x-[10px]">
              <div>
                <img src={chatt} alt="" className="w-[20px]" />
              </div>
              <div>Chat with umami</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
