import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SuggestionComponent } from './suggestion.component';

describe('SuggestionComponent', () => {
  let component: SuggestionComponent;
  let fixture: ComponentFixture<SuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestionComponent],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        RouterTestingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
