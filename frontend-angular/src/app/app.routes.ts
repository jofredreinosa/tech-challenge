import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    loadComponent: () =>
      import("./features/elements/components/element-dashboard/element-dashboard.component").then(
        (module) => module.ElementDashboardComponent
      ),
    path: ""
  }
];
