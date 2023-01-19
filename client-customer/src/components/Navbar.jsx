import { Outlet } from "react-router-dom";
export default function navbar() {
  return (
    <div className="">
      <div className="overflow-hidden fixed bottom-0 flex flex-row justify-evenly w-screen h-[60px] rounded-t-[20px] bg-[#B56A6A]">
        <div>
          <svg
            fill="#ffffff"
            width="30px"
            height="64px"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                d="M192,1.42108547e-14 L384,153.6 L384,384 L213.333333,384 L213.333333,277.333333 L170.666667,277.333333 L170.666667,384 L1.42108547e-14,384 L1.42108547e-14,153.6 L192,1.42108547e-14 Z M192,53.3333333 L42.6666667,170.666667 L42.6666667,341.333333 L128,341.333333 L128,234.666667 L256,234.666667 L256,341.333333 L341.333333,341.333333 L341.333333,170.666667 L192,53.3333333 Z"
                transform="translate(64 64)"
              ></path>
            </g>
          </svg>
        </div>
        <div>
          <svg
            width="30px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 7.49976V19.5M12 7.49976L13.7333 6.6332C14.5663 6.21673 15.4849 5.9999 16.4162 5.99988L18.9999 5.99981C20.1045 5.99978 21 6.89522 21 7.99981V15.9998C21 17.1043 20.1046 17.9998 19 17.9998H16.4166C15.485 17.9998 14.5662 18.2167 13.733 18.6334L12 19.5M12 7.49976L10.2667 6.63326C9.43369 6.21681 8.51514 5.99999 7.58379 5.99999H5C3.89543 5.99999 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H7.58359C8.51506 18 9.43374 18.2169 10.2669 18.6334L12 19.5"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div>
          <svg
            width="30px"
            height="64px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <circle cx="7.5" cy="18.5" r="1.5" fill="#ffffff"></circle>{" "}
              <circle cx="16.5" cy="18.5" r="1.5" fill="#ffffff"></circle>{" "}
              <path
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.704"
                d="M3 5h2l.6 3m0 0L7 15h10l2-7H5.6z"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div>
          <svg
            width="30px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M19.5355 5.46448C21.4881 7.4171 21.4881 10.5829 19.5355 12.5355L12.7071 19.364C12.3166 19.7545 11.6834 19.7545 11.2929 19.364L4.46447 12.5355C2.51184 10.5829 2.51184 7.4171 4.46447 5.46448C6.0168 3.91215 7.89056 3.43683 9.78125 4.35939C10.5317 4.72556 11.5156 5.46448 12 6.4297C12.4844 5.46448 13.4683 4.72556 14.2187 4.35939C16.1094 3.43683 17.9832 3.91215 19.5355 5.46448Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
