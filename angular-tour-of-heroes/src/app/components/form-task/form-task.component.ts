import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})

export class FormTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = "";day: string = "";reminder: boolean = false;
  // showAddTask: boolean = true;

  constructor() {}

  ngOnInit(): void { }

  ngOnDestroy() {}

  onSubmit() {
    if (this.text==="") {alert('Please add a task!');return;}
    const newTask: Task = { text: this.text, day: this.day, reminder: this.reminder, id: -1};
    this.onAddTask.emit(newTask);
    this.text = '';this.day = '';this.reminder = false;
  }
}