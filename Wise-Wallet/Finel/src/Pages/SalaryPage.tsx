import SidePar from "../Components/SidePar";
import { useNavigate } from "react-router-dom";

export default function Overview() {
  const nav = useNavigate();
  const login = localStorage.getItem("active");
  if (login != "true") {
    window.location.href = "/Login";
  }
  const ShowBudget = () => {
    nav("/Salary");
  };

  return (
    <>
      <div className="h-[55rem] max-sm:h-full   flex justify-center items-center  bg-[url('https://cdn.discordapp.com/attachments/1145734750921838642/1150502190297907361/Group_86.png')] bg-white bg-cover  ">
        <div className="h-[50rem] w-[90rem] max-sm:h-[63rem] max-sm:rounded-none max-sm:w-screen bg-[#d9d9d9] bg-opacity-30 rounded-3xl ">
          {" "}
          <div className=" grid grid-cols-5 h-screen  max-sm:flex max-sm:flex-col  ">
            <div className="  h-screen ">
              <SidePar />
            </div>
            <div className=" h-screen  col-start-2 col-end-6 max-sm:flex max-sm:flex-col  max-sm:items-center ml-4 max-sm:ml-0 mb-40">
              <div className="flex">
                <h1 className="me-auto text-5xl my-10 ml-10 max-sm:text-4xl max-sm:ml-0 max-sm:me-0 max-sm:text-center">
                  My Salary
                </h1>
              </div>

              <div className="flex flex-row max-sm:flex-col max-sm:items-center justify-evenly w-[70rem] max-sm:w-full pt-40 max-sm:pt-5 pb-10">
                <div className=" w-[35rem] max-sm:w-[15rem] max-sm:mx-0  h-[10rem] mt-4 mx-10 hover:scale-110 bg-white rounded-3xl px-10 flex justify-evenly items-center gap-5">
                  <div className="flex flex-col justify-center text-center gap-5">
                    <p className=" text-gray-500 text-lg">Your Salary</p>
                    <p className=" text-xl font-semibold">
                      {localStorage.getItem("salary")}
                    </p>
                  </div>
                </div>

                <div className=" w-[35rem] max-sm:w-[15rem] max-sm:mx-0  h-[10rem] mt-4 mx-10 hover:scale-110 bg-white rounded-3xl px-10  flex justify-evenly items-center gap-5">
                  <div className="flex flex-col justify-center text-center gap-5">
                    <p className=" text-gray-500 text-lg">Your Saving</p>
                    <p className=" text-xl font-semibold">
                      {localStorage.getItem("saving")}
                    </p>
                  </div>
                </div>

                <div className=" w-[35rem] max-sm:w-[15rem] max-sm:mx-0  h-[10rem] mt-4 mx-10 hover:scale-110 bg-white rounded-3xl px-10  flex justify-evenly items-center gap-5">
                  <div className="flex flex-col justify-center text-center gap-5">
                    <p className=" text-gray-500 text-lg">Rest of Salary</p>
                    <p className=" text-xl font-semibold">
                      {localStorage.getItem("rest")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center ">
                <button
                  className=" bg-[#3E68AE] hover:bg-[#7399db] hover:scale-90 focus:ring-4 focus:outline-none lg:w-40 lg:h-10 max-sm:text-base max-sm:w-4/6 max-sm:p-2 max-sm:mt-10 max-sm:mb-5 max-sm:rounded-3xl lg:rounded-3xl lg:text-lg font-bold text-white m-10"
                  onClick={ShowBudget}
                >
                  Add Salary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
