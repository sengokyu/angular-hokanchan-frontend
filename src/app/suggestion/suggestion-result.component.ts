import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { SuggestionService } from "./suggestion.service";

@Component({
  selector: "app-suggestion-result",
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, MatCardModule],
  templateUrl: "./suggestion-result.component.html",
  styles: [],
})
export class SuggestionResultComponent {
  readonly suggestions$ = this.suggestionService.suggestions$;

  constructor(private suggestionService: SuggestionService) {}
}
