import { component$, useSignal, $, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Menu } from "./menu/menu";
import { MenuItem } from "./menu/item";

export const Header = component$(() => {
  const searchVisible = useSignal(false);
  const toggleSearch = $(() => (searchVisible.value = !searchVisible.value));

  const show = useStore({
    search: false,
    subMenu: "",
  });

  return (
    <header id="header" class="bg-slate-500/10">
      <div class="py-4 container-c flex items-center justify-between">
        <div id="logo">
          <Link href="/" class="font-semibold text-lg tracking-tight">
            Spice Brain
          </Link>
        </div>
        <nav id="main-menu" class="h-10 flex gap-4 items-center font-medium">
          <span id="search" class="flex items-center">
            {/* TODO: Change to CSS-driven visibility for increased reliability */}
            <span class={`${searchVisible.value ? "hidden" : "visible"}`}>
              {/* This span is visible by default */}
              <button type="button" onClick$={toggleSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="22"
                  height="22"
                  viewBox="0 0 28 28"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                  <path d="M21 21l-6 -6"></path>
                </svg>
              </button>
            </span>

            <span class={`${searchVisible.value ? "visible" : "hidden"}`}>
              {/* This span is hidden by default */}
              <input
                type="search"
                placeholder="Search"
                class="mx-2 input-base inline-block"
              />

              <button type="button" onClick$={toggleSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="22"
                  height="22"
                  viewBox="0 0 28 28"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M18 6l-12 12"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </button>
            </span>
          </span>
          <Link href="#" onClick$={() => (show.subMenu = "plan")}>
            Plan
          </Link>
          <Link href="#" onClick$={() => (show.subMenu = "study")}>
            Study
          </Link>
          <Link href="#" onClick$={() => (show.subMenu = "contact")}>
            Contact
          </Link>
          <Link href="#" onClick$={() => (show.subMenu = "thrive")}>
            Thrive
          </Link>
          <Link href="#" onClick$={() => (show.subMenu = "user")}>
            Me
          </Link>
          {/* TODO: Maybe add a points tally, or streak count */}
        </nav>
      </div>
      <div class="bg-slate-500/10">
        <div class="container-c flex justify-end items-center gap-4">
          <Menu visible={show.subMenu == "plan"}>
            <MenuItem name="Goals" href="/plan/goals" />
            <MenuItem name="Tasks" href="/plan/tasks" />
            <MenuItem name="Calendar" href="/plan/calendar" />
          </Menu>

          <Menu visible={show.subMenu == "study"}>
            <MenuItem name="Notes" href="/study/notes" />
            <MenuItem name="Knowledge" href="/study/knowledge" />
            <MenuItem name="Tools" href="/study/tools" />
            <MenuItem name="Practice" href="/study/practice" />
          </Menu>

          <Menu visible={show.subMenu == "contact"}>
            <MenuItem name="People" href="/contact/people" />
            <MenuItem name="Events" href="/contact/events" />
          </Menu>

          <Menu visible={show.subMenu == "thrive"}>
            <MenuItem name="Health" href="/thrive/health" />
            <MenuItem name="Mood" href="/thrive/mood" />
            <MenuItem name="Toolbox" href="/thrive/toolbox" />
          </Menu>

          <Menu visible={show.subMenu == "user"}>
            <MenuItem name="Profile" href="/profile" />
            <MenuItem name="Notifications" href="/notifications" />
            <MenuItem name="Preferences" href="/preferences" />
          </Menu>

          <button
            type="button"
            class={show.subMenu ? "visible" : "hidden"}
            onClick$={() => (show.subMenu = "")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              width="22"
              height="22"
              viewBox="0 0 28 28"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
});
