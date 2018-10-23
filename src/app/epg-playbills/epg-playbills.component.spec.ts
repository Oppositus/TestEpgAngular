import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpgPlaybillsComponent } from './epg-playbills.component';

describe('EpgPlaybillsComponent', () => {
  let component: EpgPlaybillsComponent;
  let fixture: ComponentFixture<EpgPlaybillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpgPlaybillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpgPlaybillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
