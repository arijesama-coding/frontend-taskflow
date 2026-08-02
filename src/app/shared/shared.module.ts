// shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// Shared Components
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { StatusBadgeComponent } from './components/status-badge/status-badge.component';
import { PriorityBadgeComponent } from './components/priority-badge/priority-badge.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ChartWidgetComponent } from './components/chart-widget/chart-widget.component';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatChipsModule,
  MatMenuModule,
  MatTooltipModule,
  MatBadgeModule,
  MatDividerModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatAutocompleteModule
];

const SHARED_COMPONENTS = [
  PageHeaderComponent,
  StatsCardComponent,
  StatusBadgeComponent,
  PriorityBadgeComponent,
  EmptyStateComponent,
  ConfirmDialogComponent,
  SearchInputComponent,
  FilterBarComponent,
  DataTableComponent,
  LoadingSpinnerComponent,
  ChartWidgetComponent
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    DragDropModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    DragDropModule,
    ...MATERIAL_MODULES,
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }
