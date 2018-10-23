import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpgDetailsComponent } from './epg-details.component';

describe('EpgDetailsComponent', () => {
  let component: EpgDetailsComponent;
  let fixture: ComponentFixture<EpgDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpgDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpgDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
