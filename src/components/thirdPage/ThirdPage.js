import React from "react";

const ThirdPage = () => {
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div
        className="row"
        style={{
          backgroundImage: "url(/bgForThirdScreen.png)",
          backgroundSize: "",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="position-relative">
          <img
            src="/topLeft.svg"
            alt=""
            className=" navBarRightSideImage position-absolute top-0 end-0"
          />
        </div>
        <div className="col-md-8 col-sm-12 ">
          <div className="row px-5  ">
            <div className="col-12 mt-4 mt-sm-0   mt-md-4  d-flex justify-content-center ">
              <div className="  mt-5 px-5">
                <p
                  className="h3 mt-5 px-5"
                  style={{
                    color: "#000000",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-12 mt-4 mt-sm-0   mt-md-4 px-5 d-flex justify-content-center ">
              <div className=" mt-5 px-5">
                <p
                  className="h3 mt-5 px-5"
                  style={{
                    color: "#000000",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-md-block d-sm-none d-none ">
          <div className="d-flex justify-content-end">
            <img
              src="/10DMobile.png"
              alt=""
              style={{ zIndex: 2 }}
              className="img-fluid"
              // style={{ transform: "rotate(10deg)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
