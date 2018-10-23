import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpgHeadComponent } from './epg-head.component';

describe('EpgHeadComponent', () => {
  let component: EpgHeadComponent;
  let fixture: ComponentFixture<EpgHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpgHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpgHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
