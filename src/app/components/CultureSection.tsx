import React from "react";

const CultureSection: React.FC = () => {
  return (
    <div className="culture-section">
      <div className="container-fluid position-relative">
        <div className="img-culture">
          <div className="culture-text">
            <div>F%*K</div>
            <div className="culture-text-div" style={{ marginLeft: "15%" }}>
              Cancel{" "}
            </div>{" "}
            <div> Culture</div>
          </div>
          <img src="/assets/images/culture.png" alt="culture-img" />
          <div className="culture-inner">
            <h3>we get it's just a joke.</h3>
            <br />
            <p>
              We don't cancel you <br />
              We don't take down your work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureSection;
