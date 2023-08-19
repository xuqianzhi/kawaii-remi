import React, { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
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
  "xqz",
  "徐乾智",
]);

interface EnterBfNameProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setXqzSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const EnterBfName: FC<EnterBfNameProps> = (props) => {
  const { step, setStep, setXqzSelected } = props;
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

  const innerBoxWidth = window.innerWidth * 0.85;
  const imageHeight = window.innerWidth / 2;

  return (
    <Box sx={{ width: `${innerBoxWidth}px`, marginTop: "20px" }}>
      <Stack spacing={3}>
        <Typography variant="h4">{`Step ${step + 1}`}</Typography>
        <TextField
          id="enter-name"
          label="What's your boyfriend's name?"
          fullWidth
          value={name}
          onChange={onTextChange}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={onSubmit}
          disabled={name === ""}
        >
          Enter
        </Button>
        <ImageList
          sx={{ width: "100%", height: imageHeight, borderRadius: 20 }}
          cols={2}
        >
          <ImageListItem>
            <img src={RemiImage}></img>
          </ImageListItem>
          <ImageListItem>
            <img src={QuestionMarkBlue}></img>
          </ImageListItem>
        </ImageList>
      </Stack>
    </Box>
  );
};

export default EnterBfName;
