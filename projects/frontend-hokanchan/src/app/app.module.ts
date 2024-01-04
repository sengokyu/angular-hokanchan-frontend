import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { LOADING_INDICATOR_INTERCEPTOR_PROVIDERS } from './loading-indicator/loading-indicator.interceptor';
import { SuggestionResultComponent } from './suggestion/suggestion-result.component';
import { SuggestionComponent } from './suggestion/suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingIndicatorComponent,
    SuggestionComponent,
    SuggestionResultComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule
  ],
  providers: [LOADING_INDICATOR_INTERCEPTOR_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
