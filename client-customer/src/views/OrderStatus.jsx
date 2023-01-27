import WelcomeDeliverProfile from "../components/WelcomeDeliverProfile";
import done from "../assets/ceklisdone.svg";
import undone from "../assets/ceklisundone.svg";
import linedone from "../assets/linedone.svg";
import lineundone from "../assets/lineundone.svg";
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
          <div className="flex justify-center flex-row gap-x-[5px]">
            <div className="grid content-center ">
              <div className="flex justify-center">
                <div>
                  <img src={done} alt="" className="w-[22px]" />
                </div>
              </div>
            </div>
            <div className="grid content-center">
              <div className="flex justify-center">
                <img src={linedone} alt="" />
              </div>
            </div>
            <div className="grid content-center">
              <div>
                <img src={undone} alt="" className="w-[22px]" />
              </div>
            </div>
            <div>
              <div>
                <img src={lineundone} alt="" />
              </div>
            </div>
            <div className="grid content-center">
              <div>
                <img src={undone} alt="" className="w-[22px]" />
              </div>
            </div>
            <div>
              <div>
                <img src={lineundone} alt="" />
              </div>
            </div>
            <div className="grid content-center">
              <div>
                <img src={undone} alt="" className="w-[22px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
