import React, { useState, useEffect } from "react";

function random(number1, number2) {
  return Math.floor(Math.random() * (number2 - number1 + 1)) + number1;
}

const Voltage = () => {
  const [voltage, setVoltage] = useState(parseFloat(localStorage.vol));
  const [lastClickTime, setLastClickTime] = useState(0);

  useEffect(() => {
    localStorage.vol = voltage;
    if (voltage >= 12) {
      const r = random(0, 255);
      const g = random(0, 255);
      const b = random(0, 255);

      document.getElementsByClassName("Voltage")[0].classList.add("awd");
      document.getElementsByClassName("Voltage")[0].style.border = `4px solid rgb(${r},${g},${b})`;
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
      localStorage.vol = 0
        setVoltage(0);
      alert("НАДТО ВЕЛИКИЙ ВОЛЬТАЖЖЖЖЖЖ !!!!")


    }
  }

  return (
    <>
      <div className="Voltage">
        <div className="Voltage_state">
          <p>{voltage.toFixed(1)}v</p>
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
