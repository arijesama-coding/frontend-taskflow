// shared/components/data-table/data-table.component.ts
import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface TableColumn {
  key: string;
  header: string;
  cell: (element: any) => string;
  sortable?: boolean;
}

@Component({
  selector: 'app-data-table',
  templateUrl: 'data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements AfterViewInit {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() totalItems: number = 0;
  @Input() pageSize: number = 10;
  @Output() onRowClick = new EventEmitter<any>();
  @Output() onPageChange = new EventEmitter<PageEvent>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<any>();

  get displayedColumns(): string[] {
    return this.columns.map(col => col.key);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data = this.data;
  }
}
