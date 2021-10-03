import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from "../../models/Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() items: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void { this.taskService.getTasks().subscribe((tasks) => { this.items = tasks }) }
  deleteTask(task: Task) { this.items.splice(this.items.findIndex(x => x.id === task.id), 1) }

  addTask(task: Task) { this.taskService.addTask(task).subscribe(); this.items.push(task) }
}
