import WelcomeDeliverProfile from "../components/WelcomeDeliverProfile";
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
        <div className=" h-[100px] mx-[10px] p-[20px] shadow-md drop-shadow-md ">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div>2 x Tirex</div>
              <div>Rp. 20.000</div>
            </div>
            <div className="text-[12px]">note: Mau extra sambel</div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
