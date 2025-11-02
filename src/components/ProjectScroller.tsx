import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  description?: string;
  image?: string;
}

interface PastProjectsScrollerProps {
  projects: Project[];
}

export default function PastProjectsScroller({
  projects,
}: PastProjectsScrollerProps) {
  return (
    <section className="w-full py-10">
      <h2 className="text-2xl font-bold mb-4">Past Projects</h2>

      <div className="relative">
        <div
          className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory
            scrollbar-none pb-2
          "
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="
                min-w-[260px] max-w-[260px] snap-start shrink-0
                bg-muted/30 border border-muted/40 backdrop-blur
              "
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-36 w-full object-cover rounded-t-md"
                />
              )}

              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>

              {project.description && (
                <CardContent>
                  <p className="text-sm opacity-80 leading-snug">
                    {project.description}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
