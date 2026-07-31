import { Project } from './project.model';
import { User } from './user.model';

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  REVIEW = 'REVIEW',
  DONE = 'DONE'
}

export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT'
}

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  deadline: Date;
  createdAt: Date;
  updatedAt: Date;
  project: Project;
  assignedUser: User | null;
}

export interface TaskRequest {
  title: string;
  description: string;
  priority: string;
  projectId: number;
  assignedUserId?: number;
  deadline?: Date;
}

export interface TaskFilter {
  status?: string;
  priority?: string;
  projectId?: number;
  assignedUserId?: number;
  deadlineBefore?: Date;
}
