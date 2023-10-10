import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo (2).png";
import user from "../Assets/user (1).png";

export default function NavPar() {
  const active = localStorage.getItem("active");
  const name =localStorage.getItem("userName");

  const nav = useNavigate();

  return (
    <div>
      {active === "true" && (
        <ul className="flex justify-between py-4 cursor-pointer">
          <li
            className=" lg:ml-10 lg:w-60 lg:h-10 max-sm:ml-4 max-sm:h-10 max-sm:w-40 flex max-sm:gap-3 lg:gap-6 "
            onClick={() => {
              nav("/Overview");
            }}
          >
            <img className="hover:scale-90 w-10 max-sm:w-9" src={user} alt="" />
            <p className=" mt-1 text-lg">{name}</p>
          </li>
          <li className="lg:mr-10 lg:w-20 max-sm:mr-4 max-sm:w-12">
            <img src={logo} alt="" />
          </li>
        </ul>
      )}

      {(!active || active === "false") && (
        <ul className=" text-white flex justify-between lg:py-4 sm:py-2 text-xl cursor-pointer">
          <div className="flex ml-20 mt-1 max-sm:ml-0">
            <li
              className="hover:scale-90 mr-8 max-sm:ml-4 lg:mt-1 max-sm:px-4 bg-[#B2E0E0] lg:w-32 lg:h-10 max-sm:h-9 max-sm:mt-3  rounded-3xl hover:text-[#5c7676] "
              onClick={() => {
                nav("/LogIn");
              }}
            >
              <p className=" text-center max-sm:text-sm mt-2 lg:text-base font-bold">
                LOG-IN
              </p>
            </li>

            <li
              className="hover:scale-90 mr-8 lg:mt-1 max-sm:px-3 bg-[#B2E0E0] lg:w-32 lg:h-10 max-sm:h-9 max-sm:mt-3 rounded-3xl hover:text-[#5c7676] "
              onClick={() => {
                nav("/SignUp");
              }}
            >
              <p className=" text-center max-sm:text-sm mt-2 lg:text-base font-bold">
                SIGN-UP
              </p>
            </li>
          </div>
          <li className="mr-10 max-sm:mr-4 w-16">
            <img src={logo} alt="" />
          </li>
        </ul>
      )}
    </div>
  );
}
