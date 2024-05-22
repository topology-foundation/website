import { window } from "../components/window";

export const open_mission: () => HTMLDivElement = () => {
  const div = document.createElement("div");

  window("w-72 h-80 md:w-96 md:h-96", "Mission", div);
  return div;
};
