import { useNavigate } from "react-router-dom";
export default function Login() {
  let navigate = useNavigate();

  let fu = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="">
          <div className="flex flex-col">
            <form>
              <div>
                <div>
                  <label className="mini:ml-[2px] text-[#3B3B3B] font-semibold">
                    Phone Number
                  </label>
                </div>
                <div>
                  <input
                    className="bg-[#B56A6A] text-white rounded mini:h-[38px] italic p-2"
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
                    className="bg-[#B56A6A] text-white rounded mini:h-[38px] italic p-2"
                    type="password"
                  />
                </div>
              </div>
              <div className="flex justify-center flex-col mini:mt-[19px]">
                <div>
                  <button className="mini:w-[184px] mini:h-[38px] font-semibold text-white rounded bg-[#B56A6A]">
                    Login
                  </button>
                </div>
              </div>
            </form>
            <div className="text-[12px] font-semibold italic text-[#3B3B3B]">
              Don’t have an account? <span onClick={fu}>Sign up!</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
