import { useContext } from "react";
import { electionContext } from "../electionContext";
import { ICandidate, IElection } from "../types";
import {
  Avatar,
  ButtonVote,
  CandaidateName,
  Candidate,
  CandidatesList,
  ElectionContainer,
  ElectionTitle,
  VoteNumber,
} from "./electionStyle";

export default function Election() {
  const [election] = useContext<IElection | any>(electionContext);

  return (
    <ElectionContainer>
      <ElectionTitle>Andromeda Labs Election</ElectionTitle>

      <CandidatesList number={1}>
        {election.candidates.map((values: ICandidate, index) => (
          <Candidate>
            <VoteNumber>{values.votes}</VoteNumber>
            <Avatar img={values.avatar} alt="Candidate Image" />
            <CandaidateName>{values.name}</CandaidateName>
            <p>{values.description}</p>
            <h4>
              Running to be {election.position} at {election.organization}
            </h4>
            <ButtonVote>Vote</ButtonVote>
          </Candidate>
        ))}
      </CandidatesList>
    </ElectionContainer>
  );
}
