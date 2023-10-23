import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface MenuItemProps {
  name: string;
  href: string;
}

export const MenuItem = component$((props: MenuItemProps) => {
  return (
    <li>
      <Link href={props.href}>{props.name}</Link>
    </li>
  );
});
