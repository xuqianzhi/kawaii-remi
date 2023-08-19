import React, { FC } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import XqzImage from "../images/xqz.png";
import RemiImage from "../images/remi.png";
import Chimpanzee from "../images/chimpanzee.png";
import "./kawaii_remi.css";

interface ResultProps {
  xqzSelected: boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Result: FC<ResultProps> = (props) => {
  const { xqzSelected, setStep } = props;
  const onSubmit = () => {
    setStep(0);
  };

  return (
    <Box sx={{ width: "75%", marginTop: "20px" }}>
      {!xqzSelected && (
        <Stack spacing={2}>
          <Button variant="contained" type="submit" onClick={onSubmit}>
            Start Over
          </Button>
        </Stack>
      )}
      <div className="container image-container">
        <div className="image left-image">
          <img src={RemiImage} style={{ left: "40%" }}></img>
        </div>
        <div
          className="image right-image"
          style={{
            borderTopRightRadius: "100px",
            borderBottomRightRadius: "100px",
          }}
        >
          <img
            src={xqzSelected ? XqzImage : Chimpanzee}
            style={{ left: "45%" }}
          ></img>
        </div>
        {xqzSelected && <div className="heart"></div>}
      </div>
    </Box>
  );
};

export default Result;
