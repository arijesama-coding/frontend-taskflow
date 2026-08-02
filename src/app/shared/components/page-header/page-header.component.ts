// shared/components/page-header/page-header.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: 'page-header.component.html',
  styleUrls: ['page-header.component.scss'],
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() showBackButton: boolean = false;
  @Input() showDivider: boolean = true;
  @Output() onBack = new EventEmitter<void>();
}
