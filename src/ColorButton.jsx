import { useState } from "react";

export default function ColorButton() {
  const [buttonColor, setButtonColor] = useState("red");
  const [checked, setChecked] = useState(false);
  const nextColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <h1 className={buttonColor} name="div">
        {buttonColor}
      </h1>
      <button onClick={() => setButtonColor(nextColor)} disabled={checked}>
        {nextColor}
      </button>
      <input
        type="checkbox"
        name=""
        id="disable-button-checkbox"
        onClick={() => setChecked(!checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}
