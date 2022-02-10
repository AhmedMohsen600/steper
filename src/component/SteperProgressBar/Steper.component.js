import React, { Component } from "react";
import "./Steper.style.scss";

export default class Stepercomponent extends Component {
  render() {
    const currentIndex = this.props.steperList.findIndex(
      (currnetStep) => currnetStep === this.props.activeStep
    );

    return (
      <div class="stepper-wrapper">
        {this.props.steperList.map((step, i) => {
          if (i === this.props.steperList.length - 1) return null;
          return (
            <div
              className={`stepper-item ${
                this.props.activeStep === step ? "active" : ""
              } ${
                this.props.activeStep === step || i < currentIndex
                  ? "completed"
                  : ""
              }`}
            >
              <div class="step-counter">{i + 1}</div>
              <div className="step-name">{step}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
