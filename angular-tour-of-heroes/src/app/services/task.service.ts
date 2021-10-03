import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { tack_mock } from "../mocks/tasks";
import { Task } from "../models/Task"
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), };

@Injectable({
    providedIn: "root"
})
export class TaskService {
    private apiUrl = "http://localhost:5000/task";
    constructor(private http: HttpClient) { }

    getTasks(): Observable<Task[]> { return this.http.get<Task[]>(this.apiUrl); }

    getOne(id: number): Observable<number> { return this.http.get<number>(`${this.apiUrl}/${id}`); }

    deleteTask(task: Task): Observable<Task> { return this.http.delete<Task>(`${this.apiUrl}/${task.id}`); }

    addTask(task: Task): Observable<Task> {return this.http.post<Task>(this.apiUrl, task, httpOptions);}
}