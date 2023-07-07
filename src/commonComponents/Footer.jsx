import React from "react";

const Footer = () => {
  return (
    // SECTION STARTED HERE
    <div className="footer h-4/5">
      <div className="p-10 bg-white px-34">
        <div className="max-w-7xl mx-auto lg:px-10 xl:px-5 md:px-20 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
            <div className="mb-5">
              <h3 className="tracking-tighter text-base font-semibold text-left pb-4 text-grey">
                POLICY INFO
              </h3>
              <ul className="text-left font-normal text-black text-sm">
                <li>Privacy policy</li>
                <li>Terms of sale</li>
                <li>Terms of use</li>
                <li>Report Abuse & Takedown Policy</li>
                <li>Know Your BIS Standard</li>
                <li>Products Under Compulsory BIS</li>
                <li>Certification</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="mb-5">
              <h6 className="tracking-tighter text-base font-semibold text-left pb-4 text-grey">
                COMPANY
              </h6>
              <ul className="text-left font-normal text-black text-sm">
                <li>Impact@Snapdeal</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Sitemap</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="mb-5">
              <h6 className="tracking-tighter text-base font-semibold text-left pb-4 text-grey">
                COMPANY BUSINESS
              </h6>
              <ul className="text-left font-normal text-black text-sm">
                <li>Shopping App</li>
                <li>Sell On Snapdeal</li>
                <li>Media Enqueries</li>
              </ul>
            </div>
            <div className="mb-5">
              <h6 className="tracking-tighter text-base font-semibold text-left pb-4 text-grey">
                POPULAR LINKS
              </h6>
              <ul className="text-left font-normal text-black text-sm">
                <li>Lahenga</li>
                <li>Kid's Clothing</li>
                <li>Sarees</li>
                <li>Winter Wear</li>
              </ul>
            </div>
            <div className="mb-5">
              <h6 className="tracking-tighter text-base font-semibold text-left pb-4 text-grey">
                SUBSCRIBE
              </h6>
              <form className="">
                <div className="flex">
                  <input
                    type="text"
                    className="text-black rounded-l-sm bg-input w-2/3 p-2"
                  />
                  <button className="py-3 text-xs w-1/3 bg-gray20 rounded-r-sm text-white">
                    SUBSCRIBE
                  </button>
                </div>

                <p className="text-xs text-shadeofgray text-left mt-5">
                  Register now to get update on promotion and coupons.
                  <span className="text-blue text-sm text-left">
                    Or Download App
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
