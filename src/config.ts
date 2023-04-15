// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Krožek Programiranja";
export const SITE_DESCRIPTION =
  "Spletna stran za namene krožka programiranja na Gimnaziji Tolmin 2022/23. Učenje osnov JavaScript-a in Git-a. Mentorji: Jan Vasiljevič, Lan Vukušič, Matej Urbas";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
