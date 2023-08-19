import React, { FC } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import XqzImage from "../images/xqz.png";
import RemiImage from "../images/remi.png";
import Chimpanzee from "../images/chimpanzee.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import styled from "styled-components";
import "./kawaii_remi.css";

interface ResultProps {
  className?: string;
  step: number;
  xqzSelected: boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Result: FC<ResultProps> = (props) => {
  const { xqzSelected, setStep, step } = props;
  const onSubmit = () => {
    setStep(0);
  };

  const innerBoxWidth = window.innerWidth * 0.85;
  const imageHeight = window.innerWidth / 2;

  return (
    <div className={props.className}>
      <Box sx={{ width: `${innerBoxWidth}px`, marginTop: "20px" }}>
        <Stack spacing={2}>
          <div className="container">
            <Typography variant="h4">
              {xqzSelected ? "❤️❤️❤️❤️❤️" : "How your future bf looks like :)"}
            </Typography>
          </div>
          {!xqzSelected && (
            <Button variant="contained" type="submit" onClick={onSubmit}>
              Start Over
            </Button>
          )}
        </Stack>

        <div className="container">
          <ImageList
            sx={{
              width: "100%",
              height: imageHeight,
              borderRadius: 20,
              zIndex: 1,
            }}
            cols={2}
          >
            <ImageListItem>
              <img src={RemiImage}></img>
            </ImageListItem>
            <ImageListItem>
              <img src={xqzSelected ? XqzImage : Chimpanzee}></img>
            </ImageListItem>
          </ImageList>
          {xqzSelected && <div className="heart"></div>}
        </div>
      </Box>
    </div>
  );
};

const heartScale = window.innerWidth / 500;
const heartWidth = 100 * heartScale;
const heartHeight = 90 * heartScale;
const heartTop = window.innerWidth / 2 - heartHeight * 0.9;
const heartSubWidth = 52 * heartScale;
const heartSubHeight = 80 * heartScale;
const heartBorderRadius = 50 * heartScale;
const heartBeforeLeft = 50 * heartScale;
const heartAfterLeft = -2 * heartScale;

export default styled(Result)`
  .heart {
    position: absolute;
    z-index: 2;
    width: ${heartWidth}px;
    height: ${heartHeight}px;
  }

  .heart::before,
  .heart::after {
    content: "";
    position: absolute;
    top: ${heartTop}px;
    width: ${heartSubWidth}px;
    height: ${heartSubHeight}px;
    border-radius: ${heartBorderRadius}px ${heartBorderRadius}px 0 0;
    background: red;
  }

  .heart::before {
    left: ${heartBeforeLeft}px;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  .heart::after {
    left: ${heartAfterLeft}px;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;
