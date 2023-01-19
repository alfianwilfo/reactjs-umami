import { useNavigate } from "react-router-dom";
import background from "../assets/12121.jpeg";
export default function Login() {
  let navigate = useNavigate();

  let fu = () => {
    navigate("/register");
  };

  return (
    <div className="  " style={{ backgroundImage: `url(${background})` }}>
      <div className="    w-screen h-screen grid grid-cols-12">
        <div className="col-start-2 col-end-12 grid content-center">
          <form>
            <div>
              <div>
                <label className="mini:ml-[2px] text-[#3B3B3B] font-semibold">
                  Phone Number
                </label>
              </div>
              <div>
                <input
                  className=" bg-[#B56A6A] text-white rounded mini:h-[38px] w-full italic p-2"
                  type="text"
                />
              </div>
            </div>
            <div>
              <div>
                <label className="mini:ml-[2px] text-[#3B3B3B] font-semibold">
                  Password
                </label>
              </div>
              <div>
                <input
                  className="bg-[#B56A6A] text-white rounded mini:h-[38px] w-full italic p-2"
                  type="password"
                />
              </div>
            </div>
            <div className="flex justify-center flex-col mini:mt-[19px]">
              <div>
                <button className="mini:w-full mini:h-[38px] font-semibold text-white rounded bg-[#B56A6A]">
                  Login
                </button>
              </div>
            </div>
          </form>
          <div className="text-[12px] font-semibold italic mt-[12px] text-[#3B3B3B]">
            Don’t have an account?{" "}
            <span onClick={fu} className="underline">
              Sign up!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
