import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponentComponent {
  tareas: any[] = [];

  agregarTarea(tarea: any) {
    this.tareas.push(tarea);
  }

  eliminarTarea(i: number) {
    this.tareas.splice(i, 1);
  }
}
