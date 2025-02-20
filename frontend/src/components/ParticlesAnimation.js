import React, { useState, useEffect } from "react";
import "./ParticlesAnimation.css"; // Import the CSS file
import "./ShimmerButton.css";
import "./RainbowInput.css";
import "./AuroraBackground.css";

const ParticlesAnimation = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => setStartAnimation(true), 1000); // Start animation after 1 second
  }, []);

  return (
    <>
      {/* <AuroraBackground /> */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ paddingTop: "4%", width: "100%" }}
          className="animation-container"
        >
          <div className={`crown ${startAnimation ? "crown-move-with-p" : ""}`}>
            👑
          </div>
          <span
            className={`letter p ${startAnimation ? "pushed-and-died" : ""}`}
          >
            P
          </span>
          <span className={`word ${startAnimation ? "bounce-push" : ""}`}>
            Articles By WeekendDevs
          </span>
        </div>
        <div className="inner-text">Small byte sized tech articles</div>
        <div style={{ display: "flex", margin: "15px" }}>
          <div
            style={{ marginRight: "15px" }}
            className={`input-container ${isActive ? "active" : ""}`}
          >
            <input
              type="text"
              className="rainbow-input"
              placeholder={"Enter your email"}
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(false)}
            />
            <div className="rainbow-border"></div>
          </div>

          <div className="center">
            <button className="shimmer-button">
              Sign up now
              <div className="shimmer"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParticlesAnimation;
