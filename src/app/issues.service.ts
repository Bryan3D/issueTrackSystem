import { Issue } from './issue';
import { Injectable } from '@angular/core';
import { issues } from '../assets/mock-issues'

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private issues: Issue[] = [];
  issueForm: any;

  constructor(private IssueService:IssuesService) { }

  getPendingIssues(): Issue[] {
    return this.issues.filter(issue => !issue.completed);
  }

createIssue(issue: Issue) {
  issue.issueNo = this.issues.length + 1;
  this.issues.push(issue);
}
  addIssue() {
    this.IssueService.createIssue(this.issueForm.getRawValue() as Issue);
  }

}
