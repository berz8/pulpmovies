import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <h1 className="text-3xl">PulpMovies</h1>
      <Button>Ciao</Button>
    </div>
  );
}
