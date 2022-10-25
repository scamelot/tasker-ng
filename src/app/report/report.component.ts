import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  tasks: Task[] = []


  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks.slice(1,5))
  }


  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getTasks()
  }

}
