import { Main, Container, Section } from "@/components/craft";
import Hero from "./hero";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Section>
        <Container>
          <h1>Hello</h1>
        </Container>
      </Section>
    </Main>
  );
}
