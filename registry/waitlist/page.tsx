import { Main, Container, Section } from "@/components/craft";
import { ContactForm } from "./form";
import { Hero } from "./hero";

export default function Page() {
  return (
    <Main>
      <Hero />
      <Section>
        <Container>
          <ContactForm />
        </Container>
      </Section>
    </Main>
  );
}
