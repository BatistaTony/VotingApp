import styled from "styled-components";
import { CandidatesList } from "../election/electionStyle";
import { Flexbox } from "../navbar/navbarStyle";

export const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export function GetFont(font: string) {
  return `
  
  @font-face {
    src: url(/fonts/Poppins/Poppins-${font}.ttf);
  font-family: Poppins-${font};
  }
  
  font-family: Poppins-${font};`;
}

export const PresentationText = styled.div`
  width: 50%;
  ${Flexbox("column")}
  margin-top:20px;

  h1 {
    ${GetFont("Regular")};
  }

  p {
    text-align: center;
    font-size: 12pt;
    ${GetFont("Regular")};
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  padding: 7px;
  padding-left: 15px;
  padding-right: 15px;
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-top: 20px;

  font-size: 12pt;
  background: violet;
  ${GetFont("Medium")};
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
  ${Flexbox("column", "flex-start", "center")}
`;

export const TextGrid = styled(CandidatesList)`
  box-sizing: border-box;
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 20px;

  div {
    width: 100%;
  }
`;
