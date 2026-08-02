// projects/project-list/project-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from '../../core/services/project.service';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects: any[] = [];
  loading = false;
  totalItems = 0;
  pageSize = 10;
  activeFilters: any = {};

  projectFilters = [
    {
      key: 'status',
      label: 'Status',
      options: [
        { value: 'ACTIVE', label: 'Active' },
        { value: 'COMPLETED', label: 'Completed' },
        { value: 'ARCHIVED', label: 'Archived' }
      ]
    }
  ];

  constructor(
    private projectService: ProjectService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.loading = true;
    this.projectService.getProjects().subscribe({
      next: (response) => {
        this.projects = response.content;
        this.totalItems = response.totalElements;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      width: '500px',
      data: { mode: 'create' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadProjects();
      }
    });
  }

  editProject(project: any) {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      width: '500px',
      data: { mode: 'edit', project }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadProjects();
      }
    });
  }

  deleteProject(project: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Project',
        message: `Are you sure you want to delete "${project.name}"? This action cannot be undone.`,
        confirmText: 'Delete',
        icon: 'delete_forever'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projectService.deleteProject(project.id).subscribe(() => {
          this.loadProjects();
        });
      }
    });
  }

  viewProject(id: number) {
    // Navigate to project detail
  }

  onSearch(term: string) {
    // Implement search
  }

  onFilterChange(filter: any) {
    this.activeFilters[filter.key] = filter.value;
    this.loadProjects();
  }

  onPageChange(event: any) {
    // Handle pagination
  }
}
