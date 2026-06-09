import { Outlet } from "react-router";
import { Navigation } from "../components/Navigation";
import { RainEffect } from "../components/effects/RainEffect";
import { FogEffect } from "../components/effects/FogEffect";

export function RootLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <RainEffect />
      <FogEffect />
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
