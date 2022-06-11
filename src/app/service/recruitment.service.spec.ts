import { TestBed } from '@angular/core/testing';

import { RecruitmentService } from './recruitment.service';

describe('RecruimentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecruitmentService = TestBed.get(RecruitmentService);
    expect(service).toBeTruthy();
  });
});
