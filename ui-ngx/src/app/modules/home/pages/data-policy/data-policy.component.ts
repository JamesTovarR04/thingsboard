import { Component } from "@angular/core";
import { PageComponent } from "@app/shared/public-api";
import { Store } from "@ngrx/store";
import { AppState } from "@core/core.state";

@Component({
  selector: "tb-data-policy",
  templateUrl: "./data-policy.component.html",
  styleUrl: "./data-policy.component.scss",
})
export class DataPolicyComponent extends PageComponent {
  constructor(protected store: Store<AppState>) {
    super(store);
  }
}
