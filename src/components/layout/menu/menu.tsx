import { Slot, component$ } from "@builder.io/qwik";

interface MenuProps {
  visible?: boolean;
}

export const Menu = component$((props: MenuProps) => {
  const visibility = props.visible ? "flex gap-4" : "hidden";

  return (
    <ul class={`py-3 ${visibility}`}>
      <Slot />
    </ul>
  );
});
