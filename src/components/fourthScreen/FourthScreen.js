import React from "react";

const FourthScreen = () => {
  return (
    <div
      className="row"
      style={{
        backgroundImage: "url(/bgForFourthScreen.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="position-relative">
        <img
          src="/topLeft.svg"
          alt=""
          className="  navBarRightSideImage position-absolute top-0 end-0"
        />
      </div>
      <div className="col-md-4 d-md-block d-sm-none d-none ">
        <div className="d-flex justify-content-end">
          <img src="/leftMobile.png" alt="" className="img-fluid" style={{}} />
        </div>
      </div>
      <div className="col-md-8 col-sm-12 d-flex align-items-center ">
        <div className="row px-5  ">
          <div className="col-12 mt-sm-0 mt-md-4 px-5 d-flex justify-content-center ">
            <p
              className="h3"
              style={{ color: "#000000", fontWeight: 400, textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthScreen;
