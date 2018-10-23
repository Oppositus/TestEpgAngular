import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpgCurrentTimeComponent } from './epg-current-time.component';

describe('EpgCurrentTimeComponent', () => {
  let component: EpgCurrentTimeComponent;
  let fixture: ComponentFixture<EpgCurrentTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpgCurrentTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpgCurrentTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
