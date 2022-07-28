import React from "react";

const FirstPage = () => {
  return (
    <div className="container-fluid" id="home" style={{ height: "100vh" }}>
      <div className="row ">
        <div className="position-relative">
          <img
            src="/topLeft.svg"
            alt=""
            className=" navBarRightSideImage position-absolute top-0 end-0"
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="row px-5 ">
            <div className="col-12 mt-5 d-flex justify-content-center ">
              <img src="/mainLogo.png" alt="" className="mt-5" width="60%" />
            </div>
            <div className="col-12 d-flex justify-content-center px-3">
              <h3 style={{ color: "#ED3237", textAlign: "center" }}>
                Book Your Appointment Now Online
              </h3>
            </div>
            <div className="col-12 mt-sm-0 mt-md-5 px-5 d-flex justify-content-center ">
              <h2 style={{ color: "#000000", textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
            </div>
            <div className="col-12 mt-sm-0 mt-md-5 px-5 d-flex justify-content-center ">
              <button
                className="p-2 , px-4"
                style={{
                  fontFamily: "Nunito",
                  fontStyle: "normal",
                  fontWeight: 600,

                  alignItems: "center",
                  textAlign: "center",
                  color: " #FFFFFF",

                  background:
                    "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%), #3E4095",
                  borderRadius: "58.1736px",
                  border: "none",
                }}
              >
                <p className="h2 m-1">Get Started</p>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-md-block d-sm-none d-none pt-3">
          <img
            src="/doctorImage.png"
            alt=""
            // style={{ zIndex: 2 }}
            className="mt-5"
            style={{ marginLeft: "-10%", zIndex: 2 }}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
