import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { LoadingIndicatorService } from "./loading-indicator.service";

@Component({
  selector: "app-loading-indicator",
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  template: `
    <mat-progress-bar
      color="accent"
      mode="indeterminate"
      [style.visibility]="(loading.visibility$ | async) ? 'visible' : 'hidden'"
    ></mat-progress-bar>
  `,
})
export class LoadingIndicatorComponent {
  constructor(public loading: LoadingIndicatorService) {}
}
