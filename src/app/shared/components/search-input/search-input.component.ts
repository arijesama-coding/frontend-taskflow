// shared/components/search-input/search-input.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html' ,
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Input() placeholder: string = 'Search...';
  @Input() debounceTime: number = 300;
  @Output() onSearchChange = new EventEmitter<string>();

  searchValue: string = '';
  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject.pipe(
      debounceTime(this.debounceTime),
      distinctUntilChanged()
    ).subscribe(value => {
      this.onSearchChange.emit(value);
    });
  }

  onSearch(event: any): void {
    this.searchValue = event.target.value;
    this.searchSubject.next(this.searchValue);
  }

  clearSearch(): void {
    this.searchValue = '';
    this.onSearchChange.emit('');
  }
}
