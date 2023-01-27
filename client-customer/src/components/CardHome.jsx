import enak from "../assets/enak.jpeg";
export default function CardHome() {
  return (
    <div className="bg-[#FFE5E5] rounded-[40px] shadow-lg drop-shadow-lg w-[48%] grid grid-cols-12">
      <div className="col-start-2 col-end-12 py-[20px]">
        <div className=" flex justify-center">
          <div>
            <img src={enak} alt="" className="w-[60px] rounded-full" />
          </div>
        </div>
        <div className="font-bold text-[18px]">Tirex</div>
        <div className="text-[9px] font-semibold">
          Ayam goreng + nasi + sambal + lalapan
        </div>
        <div className="font-semibold">Rp. 15.000</div>
      </div>
    </div>
  );
}
