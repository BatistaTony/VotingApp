import styled from "styled-components";
import { Flexbox } from "../navbar/navbarStyle";
import { Button, GetFont } from "../otherStyles/othersStyles";

export const ElectionContainer = styled.ul`
  width: 90%;
  height: auto;
  margin-top: 50px;
  ${Flexbox("column")};
`;

export const CandidatesList = styled.ul`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(${({ number }) => number}, auto);
  justify-content: center;
  list-style: none;
  grid-gap: 50px;
  padding: 0;

  @media (max-width: 1070px) {
    justify-content: space-between;
    grid-gap: 30px;
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ElectionTitle = styled.h1`
  font-size: 14pt;
  color: black;
  border-bottom: 1px solid black;
  text-align: center;
  margin-bottom: 20px;
  ${GetFont("Medium")}
`;

export const Candidate = styled.li`
  border-radius: 10px;
  box-shadow: 0 0 5px;
  ${Flexbox("column", "flex-start")};
  padding-bottom: 20px;
  padding-top: 20px;
  position: relative;

  p {
    color: gray;
    font-size: 11pt;
    width: 90%;
    text-align: center;
    ${GetFont("Regular")}
  }

  h4 {
    width: 80%;
    text-align: center;
    margin-top: 10px;
  }
`;

export const VoteNumber = styled.h1`
  position: absolute;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  background: violet;
  left: 0;
  top: 0;
  margin-top: 0;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: 0.5s;
  cursor: default;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Avatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: url("/images/${({ img }) => img}");
  background-position: center top;
  background-size: cover;
  margin-bottom: 10px;

  transition: 0.5s;
  cursor: default;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CandaidateName = styled.h1`
  color: black;
  font-size: 15pt;
  ${GetFont("Medium")}
  margin-top:10px;

  margin-bottom: 10px;
`;

export const ButtonVote = styled(Button)`
  width: 150px;

  &:active {
    transform: rotate(50rad);
  }
`;
