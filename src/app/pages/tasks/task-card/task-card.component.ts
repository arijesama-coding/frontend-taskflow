// tasks/task-card/task-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class TaskCardComponent {
  @Input() task: any;
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onClick = new EventEmitter<any>();

  get priorityClass(): string {
    return this.task.priority.toLowerCase();
  }

  isOverdue(deadline: string): boolean {
    return new Date(deadline) < new Date();
  }
}
