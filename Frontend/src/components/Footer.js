import React from "react";

const Footer = () => {

  return (
    <>
      {/*<a id="myBtn" href="#top"><i class="fa-solid fa-angles-up"></i></a>*/}
      <div className="footer" id="footer">
        <div class="row border-top border-light mx-xl-5 py-4 justify-content-center d-flex">
          <div class="col-md-6 px-xl-0 no-warp">
            <p class="mb-md-0 text-center text-md-left text-white">
              &copy; <a class="text-white font-weight-semi-bold" href="#">Golden Time</a>. All Rights Reserved. Designed
              by
              <a class="text-white font-weight-semi-bold" href="https://htmlcodex.com"> FPT</a><br />
              Distributed By <a href="" target="_blank">......</a>
            </p>
          </div>
          <div class="col-md-6  text-center d-block align-self-center text-md-center">
            <img class="img-fluid" src="images/payments.png" alt="" />
          </div>
        </div>

      </div>
    </>
  );
};

export default Footer;
