import React from "react";

export default function AboutUs(props) {
  const backgroundColor = props.mode === "dark" ? "#212529" : "#fff";
  const textColor = props.mode === "dark" ? "#fff" : "#000";
  const borderColor = props.mode === "dark" ? "#fff" : "#000";
  const bodyBackgroundColor = props.mode === "dark" ? "#343a40" : "#f8f9fa";

  return (
    <div className="container my-5" style={{ background: backgroundColor, color: textColor }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="accordion" id="accordionExample" style={{ border: `1px solid ${borderColor}` }}>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{ background: backgroundColor, color: textColor }}
                >
                  Who I am?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                style={{ backgroundColor: bodyBackgroundColor }}
              >
                <div className="accordion-body">
                  <strong>
                    I am Dev Kumar Seth, a 4th year student from IIT BHU Varanasi
                    pursuing Mathematics and Computing.{" "}
                  </strong>{" "}
                  I created this app as a personal project to improve my React
                  skills and help users with some basic text operations.
                 
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ background: backgroundColor, color: textColor }}
                >
                  What does this app do?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
                style={{ backgroundColor: bodyBackgroundColor }}
              >
                <div className="accordion-body">
                This app allows users to perform basic text operations such
                  as converting text to uppercase or lowercase, and removing
                  extra spaces from the text. Users can also get information
                  about the number of words and characters in their text, as
                  well as an estimated reading time.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{ background: backgroundColor, color: textColor }}
                >
                  How to use this App?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
                style={{ backgroundColor: bodyBackgroundColor }}
              >
                <div className="accordion-body">
                To use this app, simply enter your text in the text area
                  provided. You can then click on the various buttons to perform
                  text operations or get information about your text. The app
                  will automatically update the text area and provide the
                  relevant information based on the operation you performed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
