import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentCreateComponent } from './recruitment-create.component';

describe('RecruitmentCreateComponent', () => {
  let component: RecruitmentCreateComponent;
  let fixture: ComponentFixture<RecruitmentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
