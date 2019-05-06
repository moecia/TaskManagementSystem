import { TestBed } from '@angular/core/testing';

import { TasksGuardService } from './tasks-guard.service';

describe('TasksGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TasksGuardService = TestBed.get(TasksGuardService);
    expect(service).toBeTruthy();
  });
});
