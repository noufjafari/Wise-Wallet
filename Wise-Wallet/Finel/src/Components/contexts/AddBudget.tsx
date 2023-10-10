import { useRef } from "react";
import { useBudgets } from "./BudgetCont";

export default function AddBudget({ show, handleClose }: any) {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const maxRef = useRef<HTMLInputElement | null>(null);
  const { addBudget }: any = useBudgets();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (nameRef.current && maxRef.current) {
      const name = nameRef.current.value;
      const max = parseFloat(maxRef.current.value);

      addBudget(name, max);

      // Clear the input fields
      nameRef.current.value = "";
      maxRef.current.value = "";
    }
    handleClose();
  }

  return (
    <>
      {show && (
        <div
          id="defaultModal"
          aria-hidden="true"
          className="flex justify-center fixed bg-black/25 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full"
        >
          <div className=" relative w-full max-w-2xl max-h-full">
            <div className="mt-40 relative bg-white rounded-lg shadow">
              <div className="flex items-start justify-between  p-4 rounded-t">
                <h3 className="m-5 text-3xl max-sm:text-xl max-sm:ml-0 max-sm:mt-0 font-semibold ml-60 text-gray-400 ">
                  New Budget
                </h3>
                <button
                  onClick={handleClose}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                  data-modal-hide="defaultModal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form
                className="flex flex-col justify-center items-center"
                onSubmit={handleSubmit}
              >
                <div className=" flex max-sm:flex-col justify-center gap-10 max-sm:gap-0">
                  <div
                    className="p-6 max-sm:p-0 my-10 transform border-b-2 bg-transparent  duration-300 focus-within:border-black "
                    id="name"
                  >
                    <label className=" font-bold text-lg">
                      Name of Budget:{" "}
                    </label>
                    <br />
                    <input
                      className="mt-5 max-sm:mt-0 py-2 border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                      ref={nameRef}
                      type="text"
                      placeholder="Ex: house rent"
                      required
                    />
                  </div>
                  <div
                    className="p-6 max-sm:p-0 my-10 transform border-b-2 bg-transparent  duration-300 focus-within:border-black "
                    id="max"
                  >
                    <label className=" font-bold text-lg">
                      Maximum Spending:{" "}
                    </label>
                    <br />
                    <input
                      className="mt-5 max-sm:mt-0 py-2 border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                      ref={maxRef}
                      type="number"
                      placeholder="Ex: 1000"
                      min={0}
                      step={1}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center p-6 space-x-2  border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="defaultModal"
                    type="submit"
                    className="mb-10 text-white bg-[#B2E0E0] hover:bg-[#597878] hover:scale-90 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-10 py-3 text-center"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
