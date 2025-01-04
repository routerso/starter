import { Main, Container, Section } from "@/components/craft";
import { WaitlistForm } from "./form";
import { Hero } from "./hero";

export default function Page() {
  return (
    <Main>
      <Hero />
      <Section>
        <Container>
          <WaitlistForm />
        </Container>
      </Section>
    </Main>
  );
}
