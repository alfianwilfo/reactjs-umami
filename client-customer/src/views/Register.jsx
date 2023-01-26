import { useNavigate } from "react-router-dom";
import mod from "../assets/11.jpg";
export default function Register(params) {
  let navigate = useNavigate();
  let toLogin = () => {
    navigate("/login");
  };
  return (
    <div className="relative h-screen w-screen ">
      <img src={mod} alt="" />
      <div className="absolute top-[140px] rounded-t-[40px] w-screen bg-white grid grid-cols-12">
        <form className="col-start-2 col-end-12 grid content-center mt-10">
          <div className="">
            <div>
              <div className="bg-white relative text-[#B56A6A] w-[45px]">
                <label className="font-semibold">Name</label>
              </div>
              <div>
                <input
                  className="outline outline-[2px] outline-[#B56A6A] outline-offset-[10px] w-full"
                  type="text"
                  name="name"
                  id=""
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-white relative text-[#B56A6A] w-[40px]">
                <label className="font-semibold">Email</label>
              </div>
              <div>
                <input
                  className="outline outline-[2px] outline-[#B56A6A] outline-offset-[10px]  w-full"
                  type="email"
                  name="name"
                  id=""
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-white relative text-[#B56A6A] w-[47px]">
                <label className="font-semibold">Phone</label>
              </div>
              <div>
                <input
                  className="outline outline-[2px] outline-[#B56A6A] outline-offset-[10px]  w-full"
                  type="number"
                  name="name"
                  id=""
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-white relative text-[#B56A6A] w-[69px]">
                <label className="font-semibold">Password</label>
              </div>
              <div>
                <input
                  className="outline outline-[2px] outline-[#B56A6A] outline-offset-[10px]  w-full"
                  type="password"
                  name="name"
                  id=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <button className="mt-[25px] bg-[#B56A6A] text-center text-white rounded  w-full h-[45px]">
              Register
            </button>
          </div>
          <div className="mt-[10px]">
            <p className="text-[12px] font-semibold italic text-[#3B3B3B]">
              Already Have Account?
              <span className="underline ml-[2px]" onClick={toLogin}>
                Login !
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
