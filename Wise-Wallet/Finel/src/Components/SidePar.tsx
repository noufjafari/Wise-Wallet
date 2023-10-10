import overview from "../assets/abstract.png";
import profile from "../assets/user.png";
import Logout from "../assets/sign-out.png";
import Report from "../assets/budget.png";
import home from "../assets/thehome.png";
import Salary from "../assets/money.png";
import WiseWall from "../assets/Grouptest.png";

export default function SidePar() {
  const out = () => {
    localStorage.removeItem("active");
    localStorage.removeItem("Islogedin?");
  };
  return (
    <div className=" border-r-4 h-screen max-sm:h-auto max-sm:border-r-0 max-sm:border-b-4 max-sm:rounded-l-none rounded-l-full bg-[#d9d9d9] bg-opacity-5">
      <div className="  w-full">
        <div className="flex justify-center">
          <img className="h-16 my-10 max-sm:my-0 max-sm:mt-4" src={WiseWall} />
        </div>
        <nav className="mt-5 max-sm:mt-0  max-sm:px-0 max-sm:pl-4 px-2 max-sm:flex  ">
          <a
            href="/"
            className="group flex items-center px-2 py-2 text-base max-sm:flex-col max-sm:text-sm leading-6 hover:scale-105 hover:bg-black/10"
          >
            <img
              className="mr-3 w-6 max-sm:w-4 max-sm:mt-1 max-sm:ml-3 max-sm:py-2"
              src={home}
            />
            Home
          </a>
          <a
            href="/Overview"
            className="mt-1 group flex items-center px-2 max-sm:flex-col py-2 text-base max-sm:text-sm leading-6 hover:scale-105 hover:bg-black/10"
          >
            <img
              className="mr-3 w-6 max-sm:w-4 max-sm:ml-3 max-sm:py-2"
              src={Salary}
            />
            Salary
          </a>

          <a
            href="/InfoPage2"
            className="mt-1 group max-sm:ml-1 max-sm:flex-col flex items-center px-2 py-2 text-base max-sm:text-sm leading-6 hover:scale-105 hover:bg-black/10"
          >
            <img
              className="mr-3 w-5 max-sm:w-4 max-sm:ml-3 max-sm:py-2"
              src={Report}
            />
            Budget
          </a>

          <a
            href="/InfoPage"
            className="mt-1 group flex max-sm:flex-col items-center px-2 py-2 text-base max-sm:text-sm leading-6 hover:scale-105 hover:bg-black/10"
          >
            <img
              className="mr-3 w-5 max-sm:w-4 max-sm:ml-3 max-sm:py-2"
              src={overview}
            />
            Overview
          </a>

          <a
            href="/Profile"
            className="mt-1 group flex max-sm:flex-col items-center px-2 py-2 text-base max-sm:text-sm leading-6 hover:scale-105 hover:bg-black/10"
          >
            <img
              className="mr-3 w-5 max-sm:w-4 max-sm:ml-3 max-sm:py-2"
              src={profile}
            />
            Profile
          </a>
          <a
            href="/"
            className="mt-1 text-red-600 group max-sm:flex-col flex items-center px-2 py-2 max-sm:text-[0.7rem] text-base leading-6 hover:scale-105 hover:bg-black/10"
            onClick={out}
          >
            <img
              className="mr-3 w-5 max-sm:w-4 max-sm:ml-3 max-sm:py-2"
              src={Logout}
            />
            Log-Out
          </a>
        </nav>
      </div>
    </div>
  );
}
