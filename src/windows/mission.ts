import { window } from "../components/window";

export const open_mission = () => {
  if (<HTMLSpanElement>document.getElementById("mission")) return;
  const div = document.createElement("div");
  div.id = "mission";

  window("w-72 h-80 md:w-96 md:h-96", "Mission", div);
};
