import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataPolicyComponent } from "./data-policy.component";

export const dataPolicyRoutes: Routes = [
  {
    path: "data-policy",
    component: DataPolicyComponent,
    data: {
      title: "data-policy.data-policy",
      breadcrumb: {
        label: "data-policy.data-policy",
        icon: "policy",
      },
    },
  },
];

const routes: Routes = [
  {
    path: "data-policy",
    redirectTo: "account/data-policy",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataPolicyRoutingModule {}
