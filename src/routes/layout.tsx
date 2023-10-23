import type { RequestHandler } from "@builder.io/qwik-city";
import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";
import { Header } from "~/components/layout/header";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7, // Always serve a cached response by default, up to a week stale
    maxAge: 5, // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
  });
};

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <main class="mx-auto container">
        <Slot />
      </main>
    </>
  );
});
