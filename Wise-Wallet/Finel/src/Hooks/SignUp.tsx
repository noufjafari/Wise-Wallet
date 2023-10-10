import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import background from "../Assets/Background.png";
import checkimg from "../Assets/giphy (1).gif";

type IuserInfo = {
  Name: string;
  Password: string;
  email: string;
};

export default function SingUp() {
  const [error, seterror] = React.useState("");
  const [emailerror, setEmailerror] = React.useState("");
  const [passerror, setPaaerror] = React.useState("");
  const [inputValue, setInputValue] = React.useState<IuserInfo>({
    Name: "",
    Password: "",
    email: "",
  });
  const [showAlert, setShowAlert] = React.useState(false);
  const nav = useNavigate();
  localStorage.setItem("active", "false");

  const back = () => {
    nav("/");
  };

  const Signup = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[a-zA-Z0-9]{8,}$/;
    localStorage.setItem("active", "true");
    if (
      inputValue.Name != "" &&
      inputValue.Password != "" &&
      inputValue.email != ""
    ) {
      if (!emailRegex.test(inputValue.email)) {
        setEmailerror("Invalid email must be ex: nouf@gmail.com");
      }
      if (!passwordRegex.test(inputValue.Password)) {
        setPaaerror("Invalid password must at least 8 digit");
      }
      if (
        emailRegex.test(inputValue.email) &&
        passwordRegex.test(inputValue.Password)
      ) {
        axios
          .post("https://64f3989fedfa0459f6c6b193.mockapi.io/Userinfo", {
            Name: inputValue.Name,
            Password: inputValue.Password,
            email: inputValue.email,
          })

          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });

        setShowAlert(true);
        seterror("");
        setEmailerror("");
        setPaaerror("");
      }
    } else {
      seterror("Invalid must be filled");
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
    nav("/LogIn");
  };
  return (
    <div>
      <div className=" absolute">
        <img
          className=" w-screen h-[35rem] max-sm:h-[20rem]"
          src={background}
          alt=""
        />
      </div>
      <div className=" ml-20 absolute justify-center items-start h-screen w-1/2 max-sm:ml-5 ">
        <div className="mt-32 w-[40rem] h-fit flex flex-col max-sm:w-[20rem]">
          <p className="text-left text-6xl  text-[#3E68AE] mt-10 mb-20 max-sm:text-5xl max-sm:text-left">
            Sign-Up
          </p>

          <div className="w-full transform  mb-5 border-b-2 bg-transparent flex flex-col text-lg duration-300 focus-within:border-black">
            <label className="text-xl max-sm:text-lg font-semibold mb-5 text-left">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-noneml-2 mb-5 bg-transparent outline-none placeholder:italic focus:outline-none"
              onChange={(e) => {
                setInputValue({ ...inputValue, Name: e.target.value });
              }}
            />
          </div>
          <div className="ml-[20rem] m-2 max-sm:ml-0 text-red-600">{error}</div>

          <div className="w-full transform  mb-5 border-b-2  bg-transparent flex flex-col text-lg duration-300 focus-within:border-black">
            <label className="text-xl max-sm:text-lg font-semibold mb-5 text-left">
              Email Address
            </label>
            <input
              type="text"
              placeholder="Email@gmail.com"
              className="w-full border-none mb-5 ml-2 bg-transparent outline-none placeholder:italic focus:outline-none"
              onChange={(e) => {
                setInputValue({ ...inputValue, email: e.target.value });
              }}
            />
          </div>
          <div className="ml-[20rem] m-2 max-sm:ml-0 text-red-600">
            {error}{" "}
          </div>
          <div className="ml-[20rem] m-2 max-sm:ml-0 text-red-600">
            {emailerror}
          </div>

          <div className="w-full transform  mb-5 border-b-2 bg-transparent flex flex-col text-lg duration-300 focus-within:border-black">
            <label className="text-xl max-sm:text-lg font-semibold mb-5 text-left">
              Password
            </label>
            <input
              type="text"
              placeholder="................................"
              className="w-full border-none mb-5 ml-2 bg- v transparent outline-none placeholder:italic focus:outline-none"
              onChange={(e) => {
                setInputValue({ ...inputValue, Password: e.target.value });
              }}
            />
          </div>
          <div className="ml-[20rem] m-2 max-sm:ml-0 text-red-600">{error}</div>
          <div className="ml-[20rem] m-2 max-sm:ml-0 text-red-600">
            {passerror}
          </div>

          <div className="flex flex-row justify-evenly mb-20 mt-10">
            <button
              className="hover:bg-teal-600 hover:scale-90 bg-[#B2E0E0] w-1/4 h-12 text-white font-bold text-xl max-sm:text-lg max-sm:w-2/5 py-1 px-5 rounded-3xl"
              onClick={back}
            >
              Back
            </button>

            <button
              className="hover:bg-teal-600 hover:scale-90 bg-[#B2E0E0] w-1/4 h-12 text-white font-bold text-xl max-sm:text-lg max-sm:w-2/5 py-1 px-5 rounded-3xl"
              onClick={Signup}
            >
              Sign up
            </button>
          </div>
          {showAlert && ( // Show the alert when showAlert is true
            <div className="fixed inset-0 pt-10 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white p-20 text-center mt-40 max-sm:mt-20 rounded-lg shadow-lg max-w-xs absolute top-0 left-0 right-0 mx-auto">
                <img className="w-20 ml-10 mb-6 " src={checkimg} alt="" />
                <h2 className="text-3xl font-semibold mb-5">Success</h2>
                <p className="my-10 text-lg text-green-700">
                  Sing-Up successful!
                </p>
                <button
                  className="mt-2 bg-[#B2E0E0] hover:bg-teal-600  text-white font-semibold py-1 px-3 rounded focus:outline-none"
                  onClick={closeAlert}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
