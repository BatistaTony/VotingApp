import Election from "../components/election/election";
import Layout from "../components/layout/layout";
import {
  Button,
  PresentationText,
} from "../components/otherStyles/othersStyles";

export default function Index() {
  return (
    <Layout>
      <PresentationText>
        <h1>Voting App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          commodi dolores praesentium vero quasi. Possimus magni, nobis dolorum
          deserunt necessitatibus cumque! Accusantium aliquam unde dolores quod!
          Ducimus vitae veniam alias?
        </p>

        <Button>Start Voting or Create an Election</Button>
      </PresentationText>

      <Election />
    </Layout>
  );
}
