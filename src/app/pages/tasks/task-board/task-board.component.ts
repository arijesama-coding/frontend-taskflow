// tasks/task-board/task-board.component.ts
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskService } from '../../core/services/task.service';

@Component({
  selector: 'app-task-board',
  templateUrl:'./project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class TaskBoardComponent implements OnInit {
  columns = [
    { key: 'TODO', label: 'To Do' },
    { key: 'IN_PROGRESS', label: 'In Progress' },
    { key: 'REVIEW', label: 'Review' },
    { key: 'DONE', label: 'Done' }
  ];

  tasks: any[] = [];
  activeFilters: any = {};
  connectedLists: string[] = [];

  taskFilters = [
    {
      key: 'priority',
      label: 'Priority',
      options: [
        { value: 'LOW', label: 'Low' },
        { value: 'MEDIUM', label: 'Medium' },
        { value: 'HIGH', label: 'High' },
        { value: 'URGENT', label: 'Urgent' }
      ]
    }
  ];

  constructor(private taskService: TaskService) {
    this.connectedLists = this.columns.map(col => col.key);
  }

  ngOnInit() {
    this.loadTasks();
  }

  getColumnTasks(status: string): any[] {
    return this.tasks.filter(task => task.status === status);
  }

  onDrop(event: CdkDragDrop<any[]>, newStatus: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const task = event.container.data[event.currentIndex];
      this.updateTaskStatus(task.id, newStatus);
    }
  }

  updateTaskStatus(taskId: number, status: string) {
    this.taskService.updateTaskStatus(taskId, status).subscribe();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  openTaskDialog(task?: any) {
    // Open task dialog
  }

  editTask(task: any) {
    // Edit task
  }

  deleteTask(task: any) {
    // Delete task
  }

  viewTask(task: any) {
    // View task details
  }

  onSearch(term: string) {
    // Search tasks
  }

  onFilterChange(filter: any) {
    // Filter tasks
  }
}
