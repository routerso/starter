import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <Section className="relative backdrop-blur-sm border-b">
      <Container className="flex flex-col gap-8">
        <Badge className="not-prose w-fit" variant="outline">
          <Link
            className="group flex items-center gap-1"
            href="https://9d8.dev"
          >
            Lorem ipsum dolor sit amet
            <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
          </Link>
        </Badge>
        <h1 className="!mb-0">Join the Waitlist</h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          We are a team of experienced developers and designers who are
          passionate about creating beautiful and functional websites.
        </h3>

        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
