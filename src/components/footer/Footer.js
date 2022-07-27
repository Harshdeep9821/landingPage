import React from "react";

const Footer = () => {
  return (
    <div className="row">
      <div
        //    style={{ position: "relative", height: "300px" }}
        style={{
          backgroundImage: "url(/footerBlue.svg)",
          backgroundRepeat: "no-repeat fixed ",
          backgroundSize: "200px 500px",
          width: "100%",

          height: "300px",
        }}
      >
        <div className="row">
          <div className="col-"></div>
        </div>
        {/*         
        <img
          src="/footerBlue.svg"
          alt=""
          height="50%"
          width="800px"
          style={{
            position: "absolute",
            bottom: "0",

            zIndex: -1,
          }}
        /> */}
      </div>
    </div>
  );
};

export default Footer;
