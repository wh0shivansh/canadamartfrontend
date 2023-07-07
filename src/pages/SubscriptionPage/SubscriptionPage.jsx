import { React, useState } from "react";
import CorrectTick from "../../assets/check-circle-1.svg";

const SubscriptionPage = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };
  return (
    <>
      <main>
        {/* PRICING SECTION */}
        <section>
          <div className="flex h-32 justify-evenly">
            <div className="flex justify-around flex-col">
              <h1 className="text-left px-2 md:px-16 text-3xl text-bluebutton font-medium">
                Plans & Pricing
              </h1>
              <p className="text-left px-3 md:px-10 text-lightblue">
                Whether your time-saving automation needs are large or
                small,we're here to help you.
              </p>
            </div>

            <div className="flex items-center mt-16">
              <div className="h-fit">
                <div class="flex items-center">
                  <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
                    <div className="flex justify-center bg-lightgray rounded-full mr-5">
                      <div classNmae="w-20">
                        <button
                          className={`px-4 py-2 rounded-full text-sm ${
                            isMonthly
                              ? "bg-lightorange text-white"
                              : "bg-gray-300"
                          }`}
                          onClick={handleToggle}
                        >
                          MONTHLY
                        </button>
                        <button
                          className={`px-4 py-2 rounded-full ${
                            !isMonthly
                              ? "bg-lightorange text-white"
                              : "bg-gray-300"
                          }`}
                          onClick={handleToggle}
                        >
                          YEARLY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CARD SECTION */}
        <section>
          <div className="min-h-screen mt-16">
            <div className="flex flex-wrap md:justify-center lg:justify-center bg-lightgray shadow-lg mx-6 rounded-[24px] lg:mx-38 xl:mx-60 sm:mx-32 px-6">
              <div className="text-left px-6 lg:w-1/3 mb-6 py-12">
                <span className="text-4xl text-bluebutton font-bold mb-4">
                  $19
                </span>
                <span className="">/month</span>
                <h2 className="text-2xl text-bluebutton font-medium mb-3 mt-5">
                  Silver
                </h2>
                <div className="mb-3 text-lightblue">
                  Lorem ipsum dolor Lorem Lorem Lorem Lorem
                </div>
                <div className="flex mb-3">
                  <img src={CorrectTick} alt="correct"></img>
                  <p className="ml-3 text-lightblue">Lorem ipsum dolor</p>
                </div>
                <div className="flex mb-3">
                  <img src={CorrectTick} alt="correct"></img>
                  <p className="ml-3 text-lightblue">Lorem ipsum dolor</p>
                </div>
                <div className="flex mb-3">
                  <img src={CorrectTick} alt="correct"></img>
                  <p className="ml-3 text-lightblue">Lorem ipsum dolor</p>
                </div>
                <button className="w-full bg-lightblue text-white hover:bg-blue-600 font-bold py-2 px-4 rounded-full mt-20">
                  Choose plan
                </button>
              </div>
              <div className="px-6 lg:w-1/3 text-left mb-6 py-12">
                <span className="text-4xl text-bluebutton font-bold mb-4">
                  $54
                </span>
                <span>/month</span>
                <h2 className="text-2xl text-bluebutton font-medium mb-3 mt-5">
                  Gold
                </h2>
                <div className="mb-3 text-lightblue">
                  Lorem ipsum dolor Lorem Lorem Lorem Lorem
                </div>
                <div className="flex mb-3">
                  <img src={CorrectTick} alt="correct"></img>
                  <p className="ml-3 text-lightblue">Lorem ipsum dolor</p>
                </div>
                <div className="flex mb-3">
                  <img src={CorrectTick} alt="correct"></img>
                  <p className="ml-3 text-lightblue">Lorem ipsum dolor</p>
                </div>
                <div className="flex mb-3">
                  <img src={CorrectTick} alt="correct"></img>
                  <p className="ml-3 text-lightblue">Lorem ipsum dolor</p>
                </div>
                <div className="flex mb-3">
                  <img src={CorrectTick} alt="correct"></img>
                  <p className="ml-3 text-lightblue">Lorem ipsum dolor</p>
                </div>
                <button className="w-full mt-10 bg-lightblue text-white font-bold py-2 px-4 rounded-full ">
                  Choose plan
                </button>
              </div>
              <div className="px-6 rounded-[24px] lg:w-1/3 bg-lightorange text-left mb-4 py-2 transform translate-y-[-22px]">
                <div className="flex justify-end">
                  <button className="bg-white text-black font-bold py-1 px-4 rounded-full mt-2 mb-4">
                    Most Popular
                  </button>
                </div>
                <span className="text-4xl text-white font-bold mb-4">$89</span>
                <span className="text-white">/month</span>
                <h2 className="text-2xl text-white font-medium mb-3 mt-5">
                  Platinum
                </h2>
                <div className="mb-3 text-white">
                  Lorem ipsum dolor Lorem Lorem Lorem Lorem
                </div>
                <div className="flex mb-2">
                  <img src={CorrectTick} alt="correct"></img>
                  <p className="ml-3 text-white">Lorem ipsum dolor</p>
                </div>
                <div className="flex mb-2">
                  <img src={CorrectTick} alt="correct"></img>
                  <p className="ml-3 text-white">Lorem ipsum dolor</p>
                </div>
                <div className="flex mb-2">
                  <img src={CorrectTick} alt="correct"></img>
                  <p className="ml-3 text-white">Lorem ipsum dolor</p>
                </div>
                <div className="flex mb-2">
                  <img src={CorrectTick} alt="correct"></img>
                  <p className="ml-3 text-white">Lorem ipsum dolor</p>
                </div>
                <div className="flex mb-4">
                  <img src={CorrectTick} alt="correct"></img>
                  <p className="ml-3 text-white">Lorem ipsum dolor</p>
                </div>
                <button className="w-full bg-white text-black font-bold py-2 px-4 rounded-full mt-4">
                  Choose plan
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SubscriptionPage;
