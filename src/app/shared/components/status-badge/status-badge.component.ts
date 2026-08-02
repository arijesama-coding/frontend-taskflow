// shared/components/status-badge/status-badge.component.ts
import { Component, Input, OnInit } from '@angular/core';

interface StatusConfig {
  color: string;
  bgColor: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-status-badge',
  templateUrl: 'stats-card.component.html',
  styleUrls: ['stats-card.component.scss']
})
export class StatusBadgeComponent implements OnInit {
  @Input() status: string = '';
  @Input() type: 'project' | 'task' = 'task';

  config: StatusConfig = {
    color: '#757575',
    bgColor: '#f5f5f5',
    icon: 'help_outline',
    label: 'Unknown'
  };

  private statusConfigs: { [key: string]: { [key: string]: StatusConfig } } = {
    project: {
      ACTIVE: { color: '#1565c0', bgColor: '#e3f2fd', icon: 'play_circle', label: 'Active' },
      COMPLETED: { color: '#2e7d32', bgColor: '#e8f5e9', icon: 'check_circle', label: 'Completed' },
      ARCHIVED: { color: '#757575', bgColor: '#f5f5f5', icon: 'archive', label: 'Archived' }
    },
    task: {
      TODO: { color: '#757575', bgColor: '#f5f5f5', icon: 'radio_button_unchecked', label: 'To Do' },
      IN_PROGRESS: { color: '#1565c0', bgColor: '#e3f2fd', icon: 'pending', label: 'In Progress' },
      REVIEW: { color: '#f57c00', bgColor: '#fff3e0', icon: 'rate_review', label: 'Review' },
      DONE: { color: '#2e7d32', bgColor: '#e8f5e9', icon: 'check_circle', label: 'Done' }
    }
  };

  ngOnInit() {
    const configs = this.statusConfigs[this.type];
    if (configs && configs[this.status]) {
      this.config = configs[this.status];
    }
  }
}
