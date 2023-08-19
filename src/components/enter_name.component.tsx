import React, { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
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

const remiMarriageNames = new Set(["remixu", "yuchenxu", "xuremi", "xuyuchen"]);

interface EnterNameProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setXqzSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const EnterName: FC<EnterNameProps> = (props) => {
  const { step, setStep, setXqzSelected } = props;
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

  const innerBoxWidth = window.innerWidth * 0.85;
  const imageHeight = window.innerWidth / 2;

  return (
    <Box sx={{ width: `${innerBoxWidth}px`, marginTop: "20px" }}>
      <Stack spacing={2}>
        <Typography variant="h4">{`Step ${step + 1}`}</Typography>
        <TextField
          id="enter-name"
          label="Enter your name to begin"
          fullWidth
          value={name}
          onChange={onTextChange}
          error={error}
          helperText={error ? "You're not Remi!" : ""}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={onSubmit}
          disabled={name === ""}
        >
          Enter
        </Button>
        <ImageList sx={{ width: "100%", height: imageHeight }} cols={2}>
          <ImageListItem>
            <img src={QuestionMarkPink}></img>
          </ImageListItem>
          <ImageListItem>
            <img src={QuestionMarkBlue}></img>
          </ImageListItem>
        </ImageList>
      </Stack>
    </Box>
  );
};

export default EnterName;
