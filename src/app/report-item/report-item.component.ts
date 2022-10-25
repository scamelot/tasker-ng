import { Task } from './../task';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report-item',
  templateUrl: './report-item.component.html',
  styleUrls: ['./report-item.component.css']
})
export class ReportItemComponent implements OnInit {

  @Input() task: Task = {}

  constructor() { }

  ngOnInit(): void {
  }

}
