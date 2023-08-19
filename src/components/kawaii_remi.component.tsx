import React, { FC, useState } from "react";
import Typography from "@mui/material/Typography";
import EnterBfName from "./enter_bf_name.component.tsx";
import EnterName from "./enter_name.component.tsx";
import Result from "./result.component.tsx";
import "./kawaii_remi.css";

const KawaiiRemi: FC = () => {
  const [step, setStep] = useState<number>(0);
  const [xqzSelected, setXqzSelected] = useState<boolean>(true);

  if (step === 0) {
    return (
      <div className="container">
        <EnterName
          setStep={setStep}
          setXqzSelected={setXqzSelected}
          step={step}
        />
      </div>
    );
  } else if (step === 1) {
    return (
      <div className="container">
        <EnterBfName
          setStep={setStep}
          setXqzSelected={setXqzSelected}
          step={step}
        />
      </div>
    );
  } else {
    return (
      <div className="container">
        <Result xqzSelected={xqzSelected} setStep={setStep} step={step} />
      </div>
    );
  }
};

export default KawaiiRemi;
