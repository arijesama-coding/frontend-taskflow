// shared/components/stats-card/stats-card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: 'stats-card.component.html',
  styleUrls: ['stats-card.component.scss']
})
export class StatsCardComponent {
  @Input() label: string = '';
  @Input() value: number = 0;
  @Input() icon: string = 'trending_up';
  @Input() color: 'primary' | 'accent' | 'success' | 'warning' = 'primary';
  @Input() trend: number | null = null;
  @Input() trendDirection: 'up' | 'down' = 'up';
  @Input() progress: number | undefined;
  @Input() progressColor: string = 'primary';

  get colorClass(): string {
    return this.color;
  }

  get trendIcon(): string {
    return this.trendDirection === 'up' ? 'trending_up' : 'trending_down';
  }
}
