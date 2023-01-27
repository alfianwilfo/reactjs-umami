import Search from "../components/Search";
import CardHome from "../components/CardHome";
import WelcomeDeliverProfile from "../components/WelcomeDeliverProfile";
export default function Home() {
  return (
    <div className="grid grid-cols-12 font-jakarta">
      <div className="col-start-2 col-end-12 flex flex-col gap-y-[40px]">
        <div>
          <WelcomeDeliverProfile />
        </div>
        <div className="grid grid-cols-12 mt-[20px]">
          <Search />
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
