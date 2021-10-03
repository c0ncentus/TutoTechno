import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from "../../models/Task";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {

  @Input() task: Task = { id: 0, day: "", text: "", reminder: false };
  onDelete() { this.deletItemEvent.emit(this.task); this.taskService.deleteTask(this.task).subscribe(() => { }) }
  @Output() deletItemEvent = new EventEmitter<Task>();

  constructor(private taskService: TaskService) { }
  ngOnInit(): void { }
}