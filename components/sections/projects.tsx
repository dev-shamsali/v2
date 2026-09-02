import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/site";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl text-3xl font-grotesk font-extrabold tracking-tight sm:text-5xl">
              Selected work.
            </h2>
            <span className="font-mono text-sm text-ink-faint">
              {String(projects.length).padStart(2, "0")} projects
            </span>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-line">
          {projects.map((project, i) => {
            const content = (
              <div className="flex flex-col gap-3 py-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-grotesk text-2xl font-bold text-ink transition-colors duration-300 group-hover/row:text-crimson-400 sm:text-3xl">
                      {project.title}
                    </h3>
                    {project.href && (
                      <ArrowUpRight
                        size={20}
                        weight="bold"
                        className="text-crimson-400 opacity-0 transition-opacity duration-300 group-hover/row:opacity-100"
                      />
                    )}
                  </div>
                  <span className="shrink-0 rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-faint">
                    {project.tag}
                  </span>
                </div>
                <p className="max-w-lg pl-9 text-sm leading-relaxed text-ink-dim">
                  {project.description}
                </p>
              </div>
            );

            return (
              <Reveal key={project.title} delay={i * 0.06}>
                <article className="group/row border-b border-line">
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
