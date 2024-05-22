import { window } from "../components/window";

export const open_about_us = () => {
  if (<HTMLSpanElement>document.getElementById("about_us")) return;

  const div = document.createElement("div");
  div.id = "about_us";
  window("w-72 h-80 md:w-96 md:h-96", "About Us", div);
};
