import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcreateComponent } from './studentcreate.component';

describe('StudentcreateComponent', () => {
  let component: StudentcreateComponent;
  let fixture: ComponentFixture<StudentcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentcreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
