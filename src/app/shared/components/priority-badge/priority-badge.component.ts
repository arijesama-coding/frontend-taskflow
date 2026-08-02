// shared/components/priority-badge/priority-badge.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-priority-badge',
  templateUrl: 'priority-badge.component.html',
  styleUrls: ['stats-card.component.scss']
})
export class PriorityBadgeComponent implements OnInit {
  @Input() priority: string = 'MEDIUM';

  get priorityClass(): string {
    return this.priority.toLowerCase();
  }

  get priorityIcon(): string {
    const icons: { [key: string]: string } = {
      LOW: 'arrow_downward',
      MEDIUM: 'remove',
      HIGH: 'arrow_upward',
      URGENT: 'priority_high'
    };
    return icons[this.priority] || 'remove';
  }

  get priorityLabel(): string {
    const labels: { [key: string]: string } = {
      LOW: 'Low',
      MEDIUM: 'Medium',
      HIGH: 'High',
      URGENT: 'Urgent'
    };
    return labels[this.priority] || this.priority;
  }
}
