import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import { DATASET } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// temp
import { HackathonCard } from "@/components/hackathon-card";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATASET.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATASET.role}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATASET.name} src={DATASET.avatar_url} />
                <AvatarFallback>{DATASET.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Summary</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown
            remarkPlugins={[remarkGfm]}
            className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
          >
            {DATASET.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Tech Stack</h2>
          </BlurFade>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-0">
              <AccordionTrigger>Project Management</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-1 mt-2">
                  {DATASET.technical_skills.project_tool.map((value, id) => (
                    <BlurFade
                      key={value}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                    >
                      <Badge variant={"default"} key={value}>
                        {value}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
              <AccordionTrigger>Programming Languages</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-1 mt-2">
                  {DATASET.technical_skills.lang.map((value, id) => (
                    <BlurFade
                      key={value}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                    >
                      <Badge variant={"default"} key={value}>
                        {value}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Frameworks/ Platforms</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-1 mt-2">
                  {DATASET.technical_skills.framework.map((value, id) => (
                    <BlurFade
                      key={value}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                    >
                      <Badge variant={"default"} key={value}>
                        {value}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Database Management</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-1 mt-2">
                  {DATASET.technical_skills.database.map((value, id) => (
                    <BlurFade
                      key={value}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                    >
                      <Badge variant={"default"} key={value}>
                        {value}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Message Queue</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-1 mt-2">
                  {DATASET.technical_skills.messages.map((value, id) => (
                    <BlurFade
                      key={value}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                    >
                      <Badge variant={"default"} key={value}>
                        {value}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Version Control</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-1 mt-2">
                  {DATASET.technical_skills.vcs.map((value, id) => (
                    <BlurFade
                      key={value}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                    >
                      <Badge variant={"default"} key={value}>
                        {value}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>CI/CD</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-1 mt-2">
                  {DATASET.technical_skills.ops.map((value, id) => (
                    <BlurFade
                      key={value}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                    >
                      <Badge variant={"default"} key={value}>
                        {value}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Testing Skills</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-1 mt-2">
                  {DATASET.technical_skills.testing.map((value, id) => (
                    <BlurFade
                      key={value}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                    >
                      <Badge variant={"default"} key={value}>
                        {value}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>Soft Skills</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-1 mt-2">
                  {DATASET.technical_skills.soft.map((value, id) => (
                    <BlurFade
                      key={value}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                    >
                      <Badge variant={"default"} key={value}>
                        {value}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>Foreign Language</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-1 mt-2">
                  {DATASET.technical_skills.foreign.map((value, id) => (
                    <BlurFade
                      key={value}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                    >
                      <Badge variant={"default"} key={value}>
                        {value}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      {/* <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Professional Experience</h2>
          </BlurFade>
          {DATASET.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATASET.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATASET.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATASET.hackathons.length}+ hackathons. People from around
                  the country would come together and build incredible things in
                  2-3 days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATASET.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATASET.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section> */}
    </main>
  );
}
