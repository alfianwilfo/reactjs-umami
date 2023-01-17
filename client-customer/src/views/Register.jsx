import { useNavigate } from "react-router-dom";
export default function Register(params) {
  let navigate = useNavigate();
  let toLogin = () => {
    navigate("/login");
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="">
        <div className="">
          <div className="grid grid-cols-12">
            <form className="col-start-2 col-end-12">
              <div className="">
                <div>
                  <div className="bg-white relative text-[#3B3B3B] w-[50px]">
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
                  <div className="bg-white relative text-[#3B3B3B] w-[50px]">
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
                  <div className="bg-white relative text-[#3B3B3B] w-[60px]">
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
                  <div className="bg-white relative text-[#3B3B3B] w-[79px]">
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
              <div className=" ">
                <button className="mt-[20px] bg-[#B56A6A] text-center text-white rounded w-[240px] h-[45px]">
                  Register
                </button>
              </div>
              <div>
                <p className="text-[12px] font-semibold italic text-[#3B3B3B]">
                  Already Have Account? <span onClick={toLogin}>Login !</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
