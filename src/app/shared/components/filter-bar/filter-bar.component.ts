// shared/components/filter-bar/filter-bar.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface FilterOption {
  key: string;
  label: string;
  options: { value: string; label: string }[];
}

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
  @Input() filters: FilterOption[] = [];
  @Input() searchPlaceholder: string = 'Search...';
  @Input() activeFilters: { [key: string]: string } = {};
  @Output() onSearch = new EventEmitter<string>();
  @Output() onFilterChange = new EventEmitter<{ key: string; value: string }>();

  isFilterActive(key: string, value: string): boolean {
    return this.activeFilters[key] === value;
  }
}
