export interface ICandidate {
  name: string;
  description: string;
  avatar: string;
  votes: number | null;
}

export interface IElection {
  organization: string;
  position: string;
  candidates: Array<ICandidate>;
}
