import WelcomeDeliverProfile from "../components/WelcomeDeliverProfile";
export default function OrderStatus() {
  return (
    <>
      <div className="grid grid-cols-12 font-jakarta">
        <div className="col-start-2 col-end-12 flex flex-col gap-y-[40px]">
          <div>
            <WelcomeDeliverProfile />
          </div>
        </div>
      </div>
    </>
  );
}
