import React, { useState, useEffect } from "react";
import SidePar from "../Components/SidePar";

interface UserInfo {
  name: string;
  email: string;
  password: string;
}
export default function Profile() {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [successMessageE, setSuccessMessageE] = useState("");
  const [successMessageP, setSuccessMessageP] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  {
    errorMessage;
  }
  const login = localStorage.getItem("active");
  if (login != "true") {
    window.location.href = "/Login";
  }
  useEffect(() => {
    // Retrieve user ID from local storage
    const savedUserId = localStorage.getItem("userId");
    if (savedUserId) {
      setUserId(savedUserId);
    }
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const updateUserProfile = async (data: Partial<UserInfo>) => {
    try {
      // Make a PUT request to update the name on the server
      const response = await fetch(
        `https://64f3989fedfa0459f6c6b193.mockapi.io/Userinfo/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: data.name,
            Password: data.password,
            email: data.email,
          }),
        }
      );

      if (response.ok) {
        localStorage.setItem("userName", name);
      } else {
        setErrorMessage("Failed to update name.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while updating name.");
    }
  };

  const handleChangeName = () => {
    setSuccessMessage("Name updated successfully!");
    updateUserProfile({ name });
  };

  const handleChangeEmail = () => {
    setSuccessMessageE("email updated successfully!");
    updateUserProfile({ email });
  };

  const handleChangePassword = () => {
    setSuccessMessageP("Password updated successfully!");
    updateUserProfile({ password });
  };

  return (
    <>
      <div className="h-[60rem] max-sm:h-full flex justify-center items-center bg-[url('https://cdn.discordapp.com/attachments/1145734750921838642/1150502190297907361/Group_86.png')] bg-white bg-cover">
        <div className="h-[55rem] w-[90rem] max-sm:h-[61rem] max-sm:w-screen bg-[#d9d9d9] bg-opacity-30 rounded-3xl max-sm:rounded-none ">
          <div className=" grid grid-cols-5  h-screen max-sm:flex max-sm:flex-col">
            <div className=" h-screen ">
              <SidePar />
            </div>

            <div className=" h-screen col-start-2 col-end-6 max-sm:flex max-sm:flex-col  max-sm:items-center ml-4 max-sm:ml-0 ">
              <h1 className="text-5xl my-10 ml-10 max-sm:ml-0 max-sm:me-0 max-sm:text-center">
                Profile
              </h1>
              <div className="bg-white w-[40rem] py-10 flex flex-col rounded-3xl justify-center gap-10 items-center ml-60 h-auto max-sm:w-11/12 max-sm:ml-0 mt-16">
                <div className="bg-white w-96 h-32 flex flex-col justify-center gap-7 rounded-2xl max-sm:pl-4  max-sm:w-full items-start">
                  <label>Change Name</label>
                  <div>
                    <input
                      className="rounded-2xl text-black p-2 px-10 max-sm:px-4 bg-opacity-40 bg-[#B2E0E2]"
                      placeholder="Enter New Name"
                      value={name}
                      onChange={handleNameChange}
                      required
                    />
                    <button
                      className="ml-9 p-2 hover:scale-110 hover:bg-[#5e81bd] rounded-2xl bg-[#3E68AE] text-white"
                      onClick={handleChangeName}
                    >
                      Change
                    </button>
                  </div>
                  <p className="text-green-700 ml-10">{successMessage}</p>
                </div>
                <div className="bg-white w-96 h-32 flex flex-col justify-center gap-7 rounded-2xl max-sm:pl-4  max-sm:w-full items-start">
                  <label>Change Email</label>
                  <div>
                    <input
                      className="rounded-2xl text-black px-10 max-sm:px-4 p-2 bg-opacity-40 bg-[#B2E0E2]"
                      placeholder="Enter New Email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <button
                      className="ml-9 p-2 rounded-2xl hover:scale-110 hover:bg-[#5e81bd]  bg-[#3E68AE] text-white"
                      onClick={handleChangeEmail}
                    >
                      Change
                    </button>
                  </div>
                  <p className="text-green-700 ml-10">{successMessageE}</p>
                </div>
                <div className="bg-white w-96 h-32 flex flex-col justify-center gap-7 rounded-2xl max-sm:pl-4  max-sm:w-full items-start">
                  <label>Change Password</label>
                  <div>
                    <input
                      className="rounded-2xl text-black  px-10 max-sm:px-4 p-2 bg-opacity-40 bg-[#B2E0E2]"
                      placeholder="Enter New Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <button
                      className="ml-9 p-2 rounded-2xl hover:scale-110 hover:bg-[#5e81bd] bg-[#3E68AE] text-white"
                      onClick={handleChangePassword}
                    >
                      Change
                    </button>
                  </div>
                  <p className="text-green-700 ml-10">{successMessageP}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
