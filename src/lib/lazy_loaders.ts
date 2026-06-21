export const animationFeaturesLoader = () =>
  import("@/lib/features").then(({ animation }) => animation);

export const allFeaturesLoader = () =>
  import("@/lib/features").then(({ all }) => all);

export const navBarLoader = () => import("@/src/components/navigation/nav_bar");

export const themeButtonLoader = () => import("@/components/toggle_theme");
