import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { SuggestionResultComponent } from './suggestion-result.component';
import { SuggestionService } from './suggestion.service';

describe('SuggestionResultComponent', () => {
  let component: SuggestionResultComponent;
  let fixture: ComponentFixture<SuggestionResultComponent>;
  let suggestionService: jasmine.SpyObj<SuggestionService>;

  beforeEach(async(() => {
    suggestionService = jasmine.createSpyObj('suggestionService', ['update']);

    TestBed.configureTestingModule({
      declarations: [SuggestionResultComponent],
      imports: [MatCardModule],
      providers: [{ provide: SuggestionService, useValue: suggestionService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
