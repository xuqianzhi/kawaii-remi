import React, { FC, useState } from "react";
import Typography from "@mui/material/Typography";
import EnterBfName from "./enter_bf_name.component";
import EnterName from "./enter_name.component";
import Result from "./result.component";

const KawaiiRemi: FC = () => {
  const [step, setStep] = useState<number>(0);
  const [xqzSelected, setXqzSelected] = useState<boolean>(true);

  if (step === 0) {
    return (
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h4">{`Step ${step + 1}`}</Typography>
        <EnterName setStep={setStep} setXqzSelected={setXqzSelected} />
      </div>
    );
  } else if (step === 1) {
    return (
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h4">{`Step ${step + 1}`}</Typography>
        <EnterBfName setStep={setStep} setXqzSelected={setXqzSelected} />
      </div>
    );
  } else {
    return (
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h4">
          {xqzSelected ? "💗💗💗💗💗" : "How your future bf looks like :)"}
        </Typography>
        <Result xqzSelected={xqzSelected} setStep={setStep} />
      </div>
    );
  }
};

export default KawaiiRemi;
