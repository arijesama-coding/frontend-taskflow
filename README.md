# TaskFlow Frontend

A modern, responsive single-page application for project and task management built with Angular 17 and Angular Material. TaskFlow provides an intuitive Trello-like Kanban board interface with real-time data visualization and seamless user experience.

## Table of Contents
- [Overview](#overview)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Configuration](#configuration)
- [Development](#development)
- [Testing](#testing)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Component Documentation](#component-documentation)
- [State Management](#state-management)
- [API Integration](#api-integration)

## Overview

TaskFlow Frontend is the presentation layer of the TaskFlow application, providing users with a comprehensive interface to manage projects and tasks. The application features a clean, Material Design-based interface with drag-and-drop functionality, interactive charts, and real-time form validation.

### Key Characteristics
- Single Page Application (SPA) architecture
- Lazy-loaded feature modules for optimal performance
- Reactive forms with custom validators
- JWT-based authentication with automatic token refresh
- Responsive design supporting desktop, tablet, and mobile devices
- Accessibility compliance with ARIA labels and keyboard navigation

## Technologies

### Core Framework
- Angular 17.0+ with TypeScript 5.3+
- RxJS 7.8+ for reactive programming
- Angular Router for SPA navigation

### UI Framework
- Angular Material 17.0+ with custom theming
- Angular CDK for advanced UI components
- Material Icons for consistent iconography

### Data Visualization
- Chart.js 4.4+ for interactive charts
- ng2-charts 5.0+ for Angular-native chart components

### Development Tools
- Angular CLI 17.0+ for scaffolding and building
- Karma and Jasmine for unit testing
- ESLint and Prettier for code quality
- Node.js 18+ runtime

## Getting Started

### Prerequisites

Ensure you have the following installed:

```bash
node --version  # Should be 18.x or higher
npm --version   # Should be 9.x or higher
ng version      # Should be 17.x or higher
```

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/taskflow.git
cd taskflow/frontend

npm install
```

### Development Server

Start the development server with proxy configuration:

```bash
npm start
```

The application will be available at `http://localhost:4200`. The development server includes:
- Hot Module Replacement (HMR) for instant updates
- Proxy configuration to backend API at `http://localhost:8080`
- Source maps for debugging

### Alternative Start Commands

```bash
# Start with specific port
ng serve --port 4201

# Start with production-like settings
ng serve --configuration production

# Start and open in default browser
ng serve --open
```

## Project Structure

```
frontend/
├── .vscode/                    # VS Code settings
├── node_modules/               # Dependencies
├── src/
│   ├── app/
│   │   ├── core/               # Core module (singleton services)
│   │   │   ├── services/
│   │   │   │   ├── auth.service.ts          # Authentication management
│   │   │   │   ├── project.service.ts       # Project CRUD operations
│   │   │   │   ├── task.service.ts          # Task CRUD operations
│   │   │   │   ├── user.service.ts          # User profile management
│   │   │   │   └── notification.service.ts  # Snackbar notifications
│   │   │   ├── guards/
│   │   │   │   ├── auth.guard.ts            # Route protection
│   │   │   │   └── role.guard.ts            # Role-based access
│   │   │   └── interceptors/
│   │   │       ├── jwt.interceptor.ts       # JWT token injection
│   │   │       ├── error.interceptor.ts     # Global error handling
│   │   │       └── loading.interceptor.ts   # Loading state management
│   │   ├── shared/              # Shared module (reusable components)
│   │   │   ├── components/
│   │   │   │   ├── navbar/
│   │   │   │   ├── confirm-dialog/
│   │   │   │   ├── loading-spinner/
│   │   │   │   └── empty-state/
│   │   │   ├── models/
│   │   │   │   ├── user.model.ts
│   │   │   │   ├── project.model.ts
│   │   │   │   └── task.model.ts
│   │   │   ├── validators/
│   │   │   │   ├── password.validator.ts
│   │   │   │   └── date.validator.ts
│   │   │   └── pipes/
│   │   │       ├── status-color.pipe.ts
│   │   │       └── priority-label.pipe.ts
│   │   ├── auth/                # Authentication feature module
│   │   │   ├── login/
│   │   │   │   └── login.component.ts
│   │   │   ├── register/
│   │   │   │   └── register.component.ts
│   │   │   └── auth.module.ts
│   │   ├── dashboard/           # Dashboard feature module
│   │   │   ├── dashboard.component.ts
│   │   │   ├── stats-card/
│   │   │   ├── task-chart/
│   │   │   └── dashboard.module.ts
│   │   ├── projects/            # Projects feature module
│   │   │   ├── project-list/
│   │   │   ├── project-detail/
│   │   │   ├── project-dialog/
│   │   │   └── projects.module.ts
│   │   ├── tasks/               # Tasks feature module
│   │   │   ├── task-board/
│   │   │   ├── task-card/
│   │   │   ├── task-dialog/
│   │   │   └── tasks.module.ts
│   │   ├── app.component.ts     # Root component
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.module.ts        # Root module
│   │   └── app-routing.module.ts # Route configuration
│   ├── assets/                  # Static assets
│   │   ├── images/
│   │   ├── icons/
│   │   └── i18n/               # Internationalization files
│   ├── environments/            # Environment configurations
│   │   ├── environment.ts       # Development
│   │   └── environment.prod.ts  # Production
│   ├── styles.css               # Global styles
│   ├── theme.scss               # Material theme customization
│   └── index.html               # Entry point
├── angular.json                 # Angular CLI configuration
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── proxy.conf.json             # Development proxy
├── nginx.conf                  # Production nginx configuration
├── Dockerfile                  # Docker image definition
└── README.md                   # Project documentation
```

## Features

### Authentication & Authorization
- Login and registration forms with comprehensive validation
- JWT token management with automatic header injection
- Route protection with AuthGuard for unauthorized access prevention
- Role-based access control for admin features
- Persistent login state with local storage
- Automatic logout on token expiration

### Dashboard
- Summary statistics cards showing key metrics:
  - Total projects count
  - Total tasks count
  - Completed tasks percentage
  - Overdue tasks alert
- Interactive charts:
  - Doughnut chart: Task distribution by status
  - Bar chart: Tasks by priority level
  - Line chart: Completed tasks trend over time
- Quick action buttons for creating new projects and tasks
- Recent activity feed

### Project Management
- Responsive data table with sorting, filtering, and pagination
- Create, edit, and delete projects via modal dialogs
- Search by project name with debounced input
- Filter by status (Active, Completed, Archived)
- Project detail view with task list and team members
- Status change with confirmation dialogs
- Empty state with call-to-action for new projects

### Task Management
- Kanban board with four columns:
  - To Do
  - In Progress
  - Review
  - Done
- Drag and drop functionality to change task status
- Visual task cards with:
  - Priority color coding
  - Assignee avatar
  - Deadline indicator
  - Quick status change chip
- Advanced filtering panel:
  - Status multi-select
  - Priority filter
  - Project filter
  - Assignee filter
  - Date range filter
- Task detail dialog with full information
- Bulk actions for task management

### User Interface Components
- Responsive navbar with user menu and navigation
- Confirmation dialogs for destructive actions
- Loading spinners for async operations
- Empty state illustrations
- Toast notifications (snackbar) for feedback
- Form field validation messages
- Error messages with retry options
- Keyboard shortcuts for power users

## Configuration

### Environment Configuration

#### Development (environment.ts)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  tokenKey: 'accessToken',
  userKey: 'currentUser',
  refreshTokenInterval: 300000, // 5 minutes
  snackbarDuration: 5000,
  pageSize: 10
};
```

#### Production (environment.prod.ts)
```typescript
export const environment = {
  production: true,
  apiUrl: '/api',
  tokenKey: 'accessToken',
  userKey: 'currentUser',
  refreshTokenInterval: 300000,
  snackbarDuration: 5000,
  pageSize: 20
};
```

### Proxy Configuration (proxy.conf.json)
```json
{
  "/api": {
    "target": "http://localhost:8080",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  }
}
```

### Angular CLI Configuration (angular.json)
Key settings:
- Default style extension: CSS/SCSS
- Material theme: indigo-pink
- Budget limits for bundle size
- Build optimization for production
- CSS extraction and minification
- Service worker configuration

## Development

### Code Generation

Use Angular CLI to generate components, services, and modules:

```bash
# Generate a new component
ng generate component component-name

# Generate with specific module
ng generate component component-name --module=app

# Generate a service
ng generate service service-name

# Generate a lazy-loaded module with routing
ng generate module feature-name --route feature-name --module app.module

# Generate a guard
ng generate guard guard-name

# Generate an interceptor
ng generate interceptor interceptor-name

# Generate a pipe
ng generate pipe pipe-name
```

### Styling Guidelines

- Use Angular Material theming system with custom palette
- Follow BEM methodology for custom CSS classes
- Use CSS Grid and Flexbox for layouts
- Maintain responsive breakpoints:
  - Mobile: < 600px
  - Tablet: 600px - 960px
  - Desktop: > 960px
- Use SCSS variables for consistent colors and spacing

### Best Practices

**Component Design:**
- Keep components small and focused (Single Responsibility)
- Use smart/dumb component pattern
- Implement OnPush change detection where possible
- Use async pipe for observable subscriptions
- Properly handle component cleanup with ngOnDestroy

**TypeScript:**
- Enable strict mode in tsconfig.json
- Use interfaces for data models
- Avoid any type; use unknown when necessary
- Document public methods with JSDoc comments
- Use const assertions for literal types

**RxJS:**
- Use appropriate operators for data transformation
- Handle subscription management with takeUntil pattern
- Implement error handling with catchError
- Use shareReplay for shared subscriptions
- Avoid nested subscriptions; use switchMap, mergeMap

**Performance:**
- Implement lazy loading for feature modules
- Use trackBy function with ngFor
- Optimize images and assets
- Implement virtual scrolling for large lists
- Cache HTTP responses where appropriate

### Debugging

**Angular DevTools:**
Install the Angular DevTools browser extension for:
- Component tree inspection
- Change detection profiling
- State inspection

**VS Code Extensions:**
- Angular Language Service
- Angular Snippets
- ESLint
- Prettier

**Console Commands:**
```bash
# Enable debug mode
ng serve --verbose

# Profile change detection
ng serve --source-map

# Analyze bundle
ng build --stats-json
npx webpack-bundle-analyzer dist/stats.json
```

## Testing

### Running Tests

```bash
# Run unit tests
ng test

# Run with coverage report
ng test --code-coverage

# Run specific test file
ng test --include='**/auth.service.spec.ts'

# Run in watch mode
ng test --watch

# Run once without watch
ng test --watch=false --browsers=ChromeHeadless
```

### Test Structure

```
src/app/
├── core/
│   ├── services/
│   │   ├── auth.service.spec.ts
│   │   ├── project.service.spec.ts
│   │   └── task.service.spec.ts
│   └── guards/
│       └── auth.guard.spec.ts
├── auth/
│   ├── login/
│   │   └── login.component.spec.ts
│   └── register/
│       └── register.component.spec.ts
├── dashboard/
│   └── dashboard.component.spec.ts
├── projects/
│   ├── project-list/
│   │   └── project-list.component.spec.ts
│   └── project-dialog/
│       └── project-dialog.component.spec.ts
└── tasks/
    ├── task-board/
    │   └── task-board.component.spec.ts
    └── task-dialog/
        └── task-dialog.component.spec.ts
```

### Testing Strategy

**Unit Tests:**
- Test all services with mocked HTTP calls
- Test components with isolated logic
- Test pipes and validators independently
- Mock external dependencies

**Integration Tests:**
- Test component-service interaction
- Test form submission workflows
- Test router navigation
- Test authentication flow

**E2E Tests (Future):**
- Use Cypress or Protractor
- Test critical user journeys
- Test cross-browser compatibility

## Building for Production

### Production Build

```bash
# Build with production configuration
ng build --configuration production

# Build with specific base href
ng build --base-href /taskflow/

# Build and analyze bundle
ng build --stats-json --configuration production
```

### Build Output

The build artifacts will be stored in the `dist/` directory:
- `dist/taskflow-frontend/` - Production-ready static files
- Includes minified HTML, CSS, and JavaScript
- Hashed filenames for cache busting
- Service worker for offline support (if configured)

### Bundle Optimization

- AOT compilation enabled
- Build optimizer enabled
- Dead code elimination
- CSS minification and purification
- JavaScript uglification and tree shaking
- Vendor chunking for better caching
- Lazy-loaded module chunks

## Deployment

### Docker Deployment

Build the Docker image:

```bash
docker build -t taskflow-frontend:latest .
```

Run the container:

```bash
docker run -d \
  --name taskflow-ui \
  -p 80:80 \
  taskflow-frontend:latest
```

### Nginx Configuration

The included `nginx.conf` provides:
- Gzip compression for static assets
- Cache headers for performance
- SPA fallback for client-side routing
- API proxy configuration
- Security headers (X-Frame-Options, X-Content-Type-Options)
- Rate limiting for API calls

### Docker Compose

Run with the full stack:

```bash
docker-compose up -d
```

### Manual Deployment

1. Build the application:
```bash
ng build --configuration production
```

2. Copy the `dist/taskflow-frontend` folder to your web server

3. Configure your web server (Apache/Nginx) with the provided configuration

4. Ensure proper routing for SPA:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## Component Documentation

### Core Components

**NavbarComponent**
- Displays application navigation
- Shows user information and logout option
- Responsive with mobile hamburger menu
- Active route highlighting

**ConfirmDialogComponent**
- Reusable confirmation modal
- Customizable title, message, and actions
- Supports confirm/cancel callbacks
- Accessible with keyboard focus management

### Feature Components

**DashboardComponent**
- Statistics cards with animated counters
- Chart.js integration for data visualization
- Responsive grid layout
- Refresh data functionality

**ProjectListComponent**
- Angular Material Table with sorting
- Server-side pagination
- Search and filter toolbar
- Create button with role check

**TaskBoardComponent**
- Drag and drop with Angular CDK
- Kanban columns with task limits
- Quick status change
- Filter panel with persistent state

**LoginComponent**
- Reactive form with validation
- Error display for invalid credentials
- Remember me functionality
- Redirect after successful login

## State Management

### Current Approach (Service-based)
- Services with BehaviorSubject for state
- Observable data streams for components
- Centralized state in dedicated services
- Immutable state updates

### Data Flow Pattern
```
Component → Service Method → HTTP Request → Backend API
                ↓
         Update State (BehaviorSubject)
                ↓
    Component receives new state via async pipe
                ↓
         View updates automatically
```

### Caching Strategy
- HTTP response caching with shareReplay
- Invalidating cache on mutations
- TTL-based cache expiration
- Manual cache clearing on user action

## API Integration

### Base URL Configuration
Services use environment-based API URLs:
```typescript
private apiUrl = `${environment.apiUrl}/tasks`;
```

### Request Headers
JWT Interceptor automatically adds:
```typescript
Authorization: Bearer <token>
Content-Type: application/json
```

### Error Handling
Error Interceptor handles:
- 401 Unauthorized: Redirect to login
- 403 Forbidden: Show permission error
- 404 Not Found: Display friendly message
- 500 Server Error: Retry option with exponential backoff
- Network errors: Offline mode notification

### API Endpoints Used

| Service | Endpoints |
|---------|-----------|
| Auth | POST /auth/login, POST /auth/register |
| Users | GET /users/me, PUT /users/me |
| Projects | GET /projects, POST /projects, PUT /projects/:id, DELETE /projects/:id |
| Tasks | GET /tasks, POST /tasks, PUT /tasks/:id, DELETE /tasks/:id, PATCH /tasks/:id/status |

## Accessibility

The application follows WCAG 2.1 AA standards:
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader friendly content

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Not supporting IE11

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### Commit Convention
Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Adding tests
- `chore:` Maintenance

## Performance Metrics

Target metrics for production:
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Performance Score: > 90
- Bundle Size (main): < 500KB gzipped

## License

MIT License - see LICENSE file for details.

## Acknowledgments

- Angular Team for the amazing framework
- Angular Material Team for the UI components
- Chart.js for data visualization
- The open-source community for invaluable tools and libraries

---

**Built with Love using Angular 17 and TypeScript By ARIJESA**
