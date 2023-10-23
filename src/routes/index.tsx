import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Card } from "~/components/card";

export default component$(() => {
  return (
    <div class="m-4 grid grid-cols-3 gap-4">
      <Card>Front page</Card>
      <Card>Front page</Card>
      <Card>Front page</Card>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
