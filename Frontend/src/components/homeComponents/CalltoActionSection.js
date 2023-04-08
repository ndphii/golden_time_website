import React from "react";


const CalltoActionSection = () => {
  const gmail = () => {
    let gmail = document.getElementById("email").value;
    alert("Khi có sản phẩm mới bạn sẽ được thông báo qua gmail : " + gmail);
  }

  return (
    <div className="subscribe-section bg-with-black" id="Emaillatestsale">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Do you want to receive sale information?</h2>
              <p>Sign up for free and get the latest sale.</p>
              <form className="form-section">
                <input placeholder="Your Email..." name="email" type="email" id="email" />
                <input value="Yes. I want!" name="subscribe" type="submit" onClick={gmail} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
