import { createContext, useState } from "react";
import { IElection } from "./types";

export const electionContext = createContext([]);

export default function ElectionProvider({ children }) {
  const [election, setElection] = useState<IElection>({
    organization: "Andromeda Labs",
    position: "COO",
    candidates: [
      {
        avatar: "tone.JPG",
        name: "Batista Tony",
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, nam. Minus quis obcaecati explicabo repellendus vitae illo iste doloribus quisquam.`,
        votes: 20,
      },
      {
        avatar: "joao.JPG",
        name: "João Tony",
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, nam. Minus quis obcaecati explicabo repellendus vitae illo iste doloribus quisquam.`,
        votes: 1,
      },
      {
        avatar: "caio.JPG",
        name: "Caio Tony",
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, nam. Minus quis obcaecati explicabo repellendus vitae illo iste doloribus quisquam.`,
        votes: 10,
      },
    ],
  });

  return (
    <electionContext.Provider value={[election, setElection]}>
      {children}
    </electionContext.Provider>
  );
}
