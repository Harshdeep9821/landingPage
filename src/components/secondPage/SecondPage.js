import React from "react";

const SecondPage = () => {
  return (
    <div className="row" style={{ width: "100%" }}>
      <div className="col-md-8 col-sm-12">
        <div className="row px-5  ">
          <div className="col-12 d-flex justify-content-center  mt-5 px-3">
            <div
              style={{
                marginTop: "10%",
              }}
              className="d-flex align-items-center col justify-content-center"
            >
              <div
                className="m-2"
                style={{
                  width: "20%",
                  height: "10px",
                  backgroundColor: "#000",
                  borderRadius: "10px",
                }}
              ></div>
              <div>
                <h1
                  style={{
                    color: "#000000",
                    textAlign: "center",
                    // marginTop: "20%",
                  }}
                >
                  About CarePlus
                </h1>
              </div>
              <div
                className="m-2"
                style={{
                  width: "20%",
                  height: "10px",
                  backgroundColor: "#000",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </div>
          <div className="col-12 mt-sm-0 mt-md-4 px-5 d-flex justify-content-center ">
            <h3
              style={{ color: "#000000", fontWeight: 400, textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
          </div>
          <div className="col-12 mt-sm-0 mt-md-4 px-5 d-flex justify-content-center ">
            <h3
              style={{ color: "#000000", fontWeight: 400, textAlign: "center" }}
            >
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </h3>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-md-block d-sm-none d-none ">
        <div className="d-flex justify-content-end">
          <img
            src="/mobileOne.png"
            alt=""
            className=""
            style={{ height: "100vh" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
