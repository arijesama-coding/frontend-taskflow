// dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { TaskService } from '../../core/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl:'./dashboard.component.html' ,
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  totalProjects = 0;
  totalTasks = 0;
  completedTasks = 0;
  overdueTasks = 0;
  completionRate = 0;

  statusChartData: number[] = [];
  priorityChartData: number[] = [];

  recentActivities: any[] = [];

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    // Load data from services
  }
}
