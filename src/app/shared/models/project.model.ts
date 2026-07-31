import { User } from './user.model';

export interface Project {
  id: number;
  name: string;
  description: string;
  status: 'ACTIVE' | 'COMPLETED' | 'ARCHIVED';
  createdDate: Date;
  updatedDate: Date;
  owner: User;
  taskCount: number;
}

export interface ProjectRequest {
  name: string;
  description: string;
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}
