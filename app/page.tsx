import { Hero } from "@/components/sections/hero";
import { StatusStrip } from "@/components/sections/status-strip";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <StatusStrip />
      <About />
      <Services />
      <Process />
      <Projects />
      <Contact />
    </>
  );
}
