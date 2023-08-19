import React, { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import QuestionMarkBlue from "../images/question-mark-blue.png";
import QuestionMarkPink from "../images/question-mark-pink.png";
import "./kawaii_remi.css";

const remiNames = new Set([
  "remilin",
  "yuchenlin",
  "linremi",
  "linyuchen",
  "remi",
  "yuchen",
]);

const remiMarriageNames = new Set([
  "remixu",
  "yuchenxu",
  "xuremi",
  "xuyuchen",
]);

interface EnterNameProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setXqzSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const EnterName: FC<EnterNameProps> = (props) => {
  const { setStep, setXqzSelected } = props;
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const onSubmit = () => {
    const userInput = name.toLowerCase().replace(/\s/g, "");
    if (remiMarriageNames.has(userInput)) {
      setXqzSelected(true);
      setStep(2);
    } else if (remiNames.has(userInput)) {
      setStep(1);
    } else {
      setError(true);
    }
  };

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(false);
    }
    setName(event.target.value);
  };

  return (
    <Box sx={{ width: "75%", marginTop: "20px" }}>
      <Stack spacing={2}>
        <TextField
          id="enter-name"
          label="Enter your name to begin"
          fullWidth
          value={name}
          onChange={onTextChange}
          error={error}
          helperText={error ? "You're not Remi!" : ""}
        />
        <Button variant="contained" type="submit" onClick={onSubmit}>
          Enter
        </Button>
      </Stack>
      <div className="container image-container">
        <div className="image left-image">
          <img src={QuestionMarkPink} style={{ left: "40%" }}></img>
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

export default EnterName;
