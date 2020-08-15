import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@hofmann/users",
  app: () =>
    System.import(
      "@hofmann/users"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@hofmann/navbar",
//   app: () => System.import("@hofmann/navbar"),
//   activeWhen: ["/"]
// });

start();
