import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesReportComponent } from './issues-report.component';

describe('IssuesReportComponent', () => {
  let component: IssuesReportComponent;
  let fixture: ComponentFixture<IssuesReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssuesReportComponent]
    });
    fixture = TestBed.createComponent(IssuesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
