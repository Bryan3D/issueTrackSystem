import { Component } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Issue } from '../issue';

interface IssueForm{
  title: FormControl<string>;
  description: FormControl<string>;
  priority: FormControl<string>;
  type: FormControl<string>;
}


@Component({
  selector: 'app-issues-report',
  templateUrl: './issues-report.component.html',
  styleUrls: ['./issues-report.component.css']
})
export class IssuesReportComponent {
  issueForm = new FormGroup<IssueForm>({
    title:new FormControl('', {nonNullable: true}),
    description:new FormControl ('', {nonNullable: true}),
    priority:new FormControl('', {nonNullable: true}),
    type:new FormControl('', {nonNullable: true})
  })

}
