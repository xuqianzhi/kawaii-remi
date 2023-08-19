import React, { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import QuestionMarkBlue from "../images/question-mark-blue.png";
import RemiImage from "../images/remi.png";
import "./kawaii_remi.css";

const bfNames = new Set([
  "qianzhixu",
  "larryxu",
  "xuqianzhi",
  "xularry",
  "qianzhi",
  "larry",
  "xqz"
]);

interface EnterBfNameProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setXqzSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const EnterBfName: FC<EnterBfNameProps> = (props) => {
  const { setStep, setXqzSelected } = props;
  const [name, setName] = useState<string>("");

  const onSubmit = () => {
    const userInput = name.toLowerCase().replace(/\s/g, "");
    if (bfNames.has(userInput)) {
        setXqzSelected(true);
    } else {
        setXqzSelected(false);
    }
    setStep(2);
  };

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <Box sx={{ width: "75%", marginTop: "20px" }}>
      <Stack spacing={2}>
        <TextField
          id="enter-name"
          label="What's your boyfriend's name?"
          fullWidth
          value={name}
          onChange={onTextChange}
        />
        <Button variant="contained" type="submit" onClick={onSubmit}>
          Enter
        </Button>
      </Stack>
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
          <img src={QuestionMarkBlue} style={{ left: "45%" }}></img>
        </div>
      </div>
    </Box>
  );
};

export default EnterBfName;
