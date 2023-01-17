import { useNavigate } from "react-router-dom";
export default function Register(params) {
  let navigate = useNavigate();
  let toLogin = () => {
    navigate("/login");
  };
  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <form className="col-start-2 col-end-12 grid content-center">
        <div className="">
          <div>
            <div className="bg-white relative text-[#3B3B3B] w-[45px]">
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
            <div className="bg-white relative text-[#3B3B3B] w-[40px]">
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
            <div className="bg-white relative text-[#3B3B3B] w-[47px]">
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
            <div className="bg-white relative text-[#3B3B3B] w-[69px]">
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
        <div>
          <p className="text-[12px] font-semibold italic text-[#3B3B3B]">
            Already Have Account?
            <span className="underline" onClick={toLogin}>
              Login !
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
