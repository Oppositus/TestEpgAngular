import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpgTimescaleComponent } from './epg-timescale.component';

describe('EpgTimescaleComponent', () => {
  let component: EpgTimescaleComponent;
  let fixture: ComponentFixture<EpgTimescaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpgTimescaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpgTimescaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
