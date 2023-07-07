import React from "react";

const Payment = () => {
  return (
    <div className="mt-5">
      <div className="container mx-auto">
        <div className="flex w-full overflow-auto items-center">
          <div className="w-96 max-md:min-w-full flex flex-col justify-center h-48 mt-4 md:border-x-2 border-borderColour">
            <div className="">
              <h1 className="text-shadeofgray text-lg font-medium">
                100% SECURE PAYMENTS
              </h1>
              <p className="text-darkgray text-xs px-12 py-3">
                Moving your card deatails to a much more secured place{" "}
              </p>
            </div>
          </div>
          <div className="w-96 max-md:min-w-full flex flex-col h-48 justify-center mt-4 ">
            <div className="">
              <h1 className="text-shadeofgray text-lg font-medium">TRUSTPAY</h1>
              <p className="text-darkgray text-xs px-9 py-3">
                100% Payment Protection.Easy Return Policy
              </p>
            </div>
          </div>
          <div className="w-96 max-md:min-w-full flex flex-col justify-center h-48 mt-4 md:border-x-2 border-borderColour">
            <div className="">
              <h1 className="text-shadeofgray text-lg font-medium">
                HELP CENTER
              </h1>
              <p className="text-darkgray text-xs px-11 py-3">
                Got a question?Look no further.Browse our FAQs or submit your
                query here.
              </p>
            </div>
          </div>
          <div className="w-96 max-md:min-w-full flex flex-col justify-center h-48 mt-4 md:border-r-2 border-borderColour">
            <div className="">
              <h1 className="text-shadeofgray text-lg font-medium">
                SHOP ON THE GO
              </h1>
              <p className="text-darkgray text-xs px-12 py-3">
                Download the app and get exciting app only offers at your
                fingertips
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-borderColour"></hr>
    </div>
  );
};

export default Payment;
