import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Press } from "@/components/press";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";

export default function Page() {
  return (
    <div className="max-w-2xl px-4 mx-auto">
      <About />
      <Experience />
      <Education />
      <Projects />
      <Press />
      <Stack />
    </div>
  );
}
