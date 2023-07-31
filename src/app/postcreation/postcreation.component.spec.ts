import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcreationComponent } from './postcreation.component';

describe('PostcreationComponent', () => {
  let component: PostcreationComponent;
  let fixture: ComponentFixture<PostcreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostcreationComponent]
    });
    fixture = TestBed.createComponent(PostcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
