import { Slot, component$ } from "@builder.io/qwik";

export const Card = component$(() => {
  return (
    <section class="p-4 block bg-default border-default">
      <Slot />
    </section>
  );
});
