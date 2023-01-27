import Hello from "../components/Hello";
import ProfileButton from "../components/ProfileButton";
import Address from "../components/Address";
import Search from "../components/Search";
import CardHome from "../components/CardHome";
export default function Home() {
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
            <div>
              <Address />
            </div>
          </div>
          <div className="grid grid-cols-12 mt-[20px]">
            <Search />
          </div>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <div className="font-bold text-[19px]">Recommended !</div>
          <div>
            <CardHome />
          </div>
        </div>
      </div>
    </div>
  );
}
