import Layout from "../components/layout/layout";
import {
  AboutContainer,
  Button,
  PresentationText,
  TextGrid,
} from "../components/otherStyles/othersStyles";

export default function About() {
  return (
    <Layout>
      <AboutContainer>
        <PresentationText>
          <h1>About Voting App</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            commodi dolores praesentium vero quasi. Possimus magni, nobis
            dolorum deserunt necessitatibus cumque! Accusantium aliquam unde
            dolores quod! Ducimus vitae veniam alias?
          </p>

          <Button>Create Account</Button>
        </PresentationText>

        <TextGrid>
          <PresentationText>
            <h1>First Step</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              commodi dolores praesentium vero quasi. Possimus magni, nobis
              dolorum deserunt necessitatibus cumque! Accusantium aliquam unde
              dolores quod! Ducimus vitae veniam alias?
            </p>
          </PresentationText>

          <PresentationText>
            <h1>Second Step</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              commodi dolores praesentium vero quasi. Possimus magni, nobis
              dolorum deserunt necessitatibus cumque! Accusantium aliquam unde
              dolores quod! Ducimus vitae veniam alias?
            </p>
          </PresentationText>

          <PresentationText>
            <h1>Third Step</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              commodi dolores praesentium vero quasi. Possimus magni, nobis
              dolorum deserunt necessitatibus cumque! Accusantium aliquam unde
              dolores quod! Ducimus vitae veniam alias?
            </p>
          </PresentationText>
        </TextGrid>
      </AboutContainer>
    </Layout>
  );
}
