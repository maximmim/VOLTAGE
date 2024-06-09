import React, { useState, useEffect } from "react";

function random(number1, number2) {
  return Math.floor(Math.random() * (number2 - number1 + 1)) + number1;
}

const Voltage = () => {
  const [voltage, setVoltage] = useState(parseFloat(localStorage.vol));

  useEffect(() => {
    localStorage.vol = voltage;
    if (voltage >= 12) {

        const r = random(0,255);
        const g = random(0,255);
        const b = random(0,255);
        
        const randomColor = `drop-shadow(0 0 5px rgb(${r}, ${g}, ${b}))
        drop-shadow(0 0 10px rgba(${r}, ${g}, ${b}, 0.9))
        drop-shadow(0 0 15px rgba(${r}, ${g}, ${b}, 0.8))
        drop-shadow(0 0 20px rgba(${r}, ${g}, ${b}, 0.7))`;


        document.getElementsByClassName("Voltage")[0].classList.add("awd")
        document.getElementsByClassName("Voltage")[0].style.filter = randomColor
    }
  }, [voltage]);

  function wd() {
    document.getElementById("neon-image").classList.add("actuve");
    setTimeout(() => {
      document.getElementById("neon-image").classList.remove("actuve");

      const newVoltage = voltage + random(0.2,0.7);
      setVoltage(newVoltage);
    }, 300);
  }

  

  return (
    <>
      <div className="Voltage">
        <div className="Voltage_state">
          <p>{voltage.toFixed(1)}⚡</p>

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
