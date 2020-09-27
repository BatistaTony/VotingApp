import Head from "next/head";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import { MainWrapper } from "../otherStyles/othersStyles";
import { Container } from "./layoutStyle";

export default function Layout({ children }) {
  return (
    <MainWrapper>
      <Head>
        <title>Vote App</title>
      </Head>
      <div>
        <Navbar />
        <Container>{children}</Container>
      </div>
      <Footer />
    </MainWrapper>
  );
}
