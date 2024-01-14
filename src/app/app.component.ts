import { Component } from "@angular/core";
import { LoadingIndicatorComponent } from "./loading-indicator/loading-indicator.component";
import { SuggestionResultComponent } from "./suggestion/suggestion-result.component";
import { SuggestionComponent } from "./suggestion/suggestion.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    LoadingIndicatorComponent,
    SuggestionComponent,
    SuggestionResultComponent,
  ],
  templateUrl: "./app.component.html",
  styles: [
    `
      app-loading-indicator {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
      }
    `,
  ],
})
export class AppComponent {}
