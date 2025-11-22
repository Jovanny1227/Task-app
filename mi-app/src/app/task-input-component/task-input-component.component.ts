import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input-component.component.html',
  styleUrls: ['./task-input-component.component.css']
})
export class TaskInputComponent {
  nombre: string = '';
  estado: string = '';
  descripcion: string = '';

  @Output() tareaCreada = new EventEmitter<any>();

  emitirTarea() {
    if (!this.nombre.trim()) return;

    const tarea = {
      nombre: this.nombre,
      estado: this.estado,
      descripcion: this.descripcion
    };

    this.tareaCreada.emit(tarea);

    this.nombre = '';
    this.estado = '';
    this.descripcion = '';
  }
}
