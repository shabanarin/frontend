import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowsysComponent } from './followsys.component';

describe('FollowsysComponent', () => {
  let component: FollowsysComponent;
  let fixture: ComponentFixture<FollowsysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowsysComponent]
    });
    fixture = TestBed.createComponent(FollowsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
