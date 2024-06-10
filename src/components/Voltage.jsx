import React, { useState, useEffect } from "react";

function random(number1, number2) {
  return Math.floor(Math.random() * (number2 - number1 + 1)) + number1;
}

const Voltage = () => {
  const [voltage, setVoltage] = useState(parseFloat(localStorage.vol));
  const [lastClickTime, setLastClickTime] = useState(0);
  const [edin, setEdin] = useState("V");


  useEffect(() => {
    localStorage.vol = voltage;      
    const r = random(0, 255);
    const g = random(0, 255);
    const b = random(0, 255);

    if (voltage >= 12) {
      document.getElementsByClassName("Voltage")[0].classList.add("awd");
      document.getElementsByClassName("Voltage")[0].style.border = `2px solid rgb(${r},${g},${b})`;
    }
    if (voltage >= 100) {
      document.getElementsByClassName("Voltage")[0].classList.add("awd");
      document.getElementsByClassName("Voltage")[0].style.border = `4px solid rgb(${r},${g},${b})`;
    }
    if (voltage >= 220) {
      document.getElementsByClassName("Voltage")[0].classList.add("awd");
      document.getElementsByClassName("Voltage")[0].style.border = `5px solid rgb(${r},${g},${b})`;
    }
    if (voltage >= 500) {
      document.getElementsByClassName("Voltage")[0].classList.add("awd");
      document.getElementsByClassName("Voltage")[0].style.border = `6px solid rgb(${r},${g},${b})`;
    }
    if (voltage >= 1000) {
      document.getElementsByClassName("Voltage")[0].classList.add("awd");
      document.getElementsByClassName("Voltage")[0].style.border = `4px solid rgba(${r},${g},${b} 0.5)`;
      setEdin("kV")
    }
    if (voltage >= 10000) {
      document.getElementsByClassName("Voltage")[0].classList.add("awd");
      document.getElementsByClassName("Voltage")[0].style.border = `4px solid rgb(${r},${g},${b} 0.5)`;
      setEdin("MV")
    }

  }, [voltage]);

  function wd() {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime > 100) {
      document.getElementById("neon-image").classList.add("active");
      setTimeout(() => {
        document.getElementById("neon-image").classList.remove("active");
        const newVoltage = voltage + random(0.2, 0.7);
        setVoltage(newVoltage);
      }, 300);
      setLastClickTime(currentTime);
    }
    else {

      document.getElementById("neon-image").classList.add("active");

    }
  }

  return (
    <>
      <div className="Voltage">
        <div className="Voltage_state">
          <p>{voltage.toFixed(1)}<span>{edin}</span></p>
        </div>

        <img
          onClick={wd}
          className="Voltage_tap"
          src="https://em-content.zobj.net/source/apple/237/high-voltage-sign_26a1.png"
          id="neon-image"
        />
      </div>
    </>
  );
};

export default Voltage;
