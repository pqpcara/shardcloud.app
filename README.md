# ShardCloud SDK

Official SDK for interacting with the ShardCloud API - a platform for hosting and managing applications and databases.

## Installation

```bash
npm install shardcloud
```

## Quick Start

### Import
```typescript
import ShardCloudClient from 'shardcloud';
// or
import { ShardCloudClient } from 'shardcloud';
```

```typescript
import ShardCloudClient from 'shardcloud';

// Initialize the client with your API Key
const client = new ShardCloudClient('your-api-key');

// Access modules
const apps = client.apps();
const databases = client.databases();
```

## Documentation

### Main Client

#### `ShardCloudClient`

Main class for interacting with the ShardCloud API.

**Constructor:**
```typescript
new ShardCloudClient(apiKey: string)
```

**Methods:**
- `apps()` - Returns an instance of the applications manager
- `databases()` - Returns an instance of the databases manager

## Applications Module

The `Apps` module allows you to manage your applications hosted on ShardCloud.

### Status Management

```typescript
// Start application
await apps.start(appId: string): Promise<APIResponse | null>

// Stop application
await apps.stop(appId: string): Promise<APIResponse | null>

// Restart application
await apps.restart(appId: string): Promise<APIResponse | null>

// Check status
await apps.status(appId: string): Promise<AppStatus | null>
```

### Upload and Deploy

```typescript
// Upload a ZIP file
await apps.upload(filePath: string): Promise<UploadResponse | null>

// Create deploy using token
await apps.deploy.create(appId: string, deployToken: string): Promise<DeployToken | null>

// List deploys
await apps.deploy.get(appId: string): Promise<DeployResponse[] | null>

// Delete deploy
await apps.deploy.delete(appId: string): Promise<APIResponse | null>
```

### Queries

```typescript
// Get application by ID
await apps.get(appId: string): Promise<AppResponse | null>
await apps.fetch(appId: string): Promise<AppResponse | null>

// List all applications
await apps.getAll(): Promise<AppResponse[] | null>
await apps.fetchAll(): Promise<AppResponse[] | null>

// Get metrics
await apps.metrics(appId: string): Promise<MetricsResult | null>

// Get logs
await apps.logs(appId: string): Promise<string | null>
```

### Resource Management

```typescript
// Update application resources
await apps.resources(appId: string, options: {
  name?: string;
  description?: string;
  subdomain?: string;
  ram?: number;
  vcpu?: number;
  custom_command?: string;
  entrypoint?: string;
}): Promise<APIResponse | null>
```

### File Management

```typescript
// Create file
await apps.file.create(appId: string, path: string, content: string): Promise<APIResponse | null>
await apps.file.add(appId: string, path: string, content: string): Promise<APIResponse | null>

// Delete file
await apps.file.delete(appId: string, path: string): Promise<APIResponse | null>

// Move file
await apps.file.move(appId: string, oldPath: string, newPath: string): Promise<APIResponse | null>

// Get file content
await apps.file.content(appId: string, path: string): Promise<string | null>

// List all files
await apps.file.getAll(appId: string): Promise<FilesResponse | null>
await apps.file.fetchAll(appId: string): Promise<FilesResponse | null>
await apps.file.allFiles(appId: string): Promise<FilesResponse | null>

// Commit file
await apps.commit(appId: string, filePath: string): Promise<APIResponse | null>
```

### Domain Management

```typescript
// Get domain information
await apps.domain.get(appId: string): Promise<DomainResponse | null>
await apps.domain.fetch(appId: string): Promise<DomainResponse | null>

// Update custom domain
await apps.domain.update(appId: string, domain: string): Promise<UpdateDomain | null>

// Delete domain
await apps.domain.delete(appId: string): Promise<APIResponse | null>

// Clear domain cache
await apps.domain.clear(appId: string): Promise<APIResponse | null>
```

## Databases Module

The `Databases` module allows you to manage your databases hosted on ShardCloud.

### Creation and Queries

```typescript
// Create database
await databases.create(options: {
  type: DatabaseType; // 'postgres' | 'mysql' | 'mongo' | 'redis'
  name: string;
  password: string;
  ram: number;
  visualizer?: boolean;
}): Promise<CreateResult | null>

// Get database by ID
await databases.get(id: string): Promise<DatabaseResult | null>
await databases.fetch(id: string): Promise<DatabaseResult | null>

// List all databases
await databases.getAll(): Promise<DatabaseResult[] | null>
await databases.fetchAll(): Promise<DatabaseResult[] | null>
```

### Management

```typescript
// Delete database
await databases.delete(id: string): Promise<APIResponse | null>

// Check status
await databases.status(id: string): Promise<StatusResult | null>

// Get connection URL
await databases.connectionUrl(id: string): Promise<ConnectionUrlResult | null>

// Get metrics
await databases.metrics(id: string): Promise<MetricsResult | null>
```

### Updates

```typescript
// Update resources
await databases.update.resources(id: string, options: {
  ram?: number;
  vcpu?: number;
}): Promise<APIResponse | null>

// Update password
await databases.update.password(id: string, password: string): Promise<APIResponse | null>
```

### State Control

```typescript
// Initialize database
await databases.initialize(id: string): Promise<APIResponse | null>

// Stop database
await databases.stop(id: string): Promise<APIResponse | null>

// Retry setup
await databases.retrySetup(id: string): Promise<APIResponse | null>
```

## Types and Enums

### Application Enums

```typescript
enum Language {
  Python = "python",
  JavaScript = "node",
  TypeScript = "node",
  Java = "java",
  Golang = "go",
  CSharp = "csharp",
  PHP = "php",
  Static = "static"
}

enum LanguageVersion {
  Recommended = "recommended",
  Latest = "latest"
}

enum ApplicationStatus {
  NotFound = "not_found",
  Pending = "pending",
  Running = "running",
  Stopped = "stopped"
}
```

### Database Enums

```typescript
enum DatabaseType {
  Postgres = "postgres",
  MySQL = "mysql",
  MongoDB = "mongo",
  Redis = "redis"
}

enum DatabaseStatus {
  NotFound = "not_found",
  Pending = "pending",
  Running = "running",
  Stopped = "stopped"
}
```

### Main Interfaces

```typescript
interface APIResponse {
  message: string;
}

interface MetricsResult {
  ram: number[];
  vcpu: number[];
  storage: number;
  network_receive: number[];
  network_send: number[];
}

interface AppResponse {
  app: {
    user_id: string;
    id: string;
    ram: number;
    name: string;
    // ... other fields
  };
  project_info: MetricsResult;
  status: ApplicationStatus;
}

interface DatabaseResult {
  database: {
    user_id: string;
    id: string;
    ram: number;
    name: string;
    service_type: DatabaseType;
    // ... other fields
  };
  project_info: MetricsResult;
  replica_status: DatabaseStatus;
}
```

## Examples

Check the [`examples/`](./examples/) folder for practical usage examples:

- [**Applications**](./examples/apps/) - Application management examples
- [**Databases**](./examples/databases/) - Database management examples

## Links

- [API Documentation](https://docs.shardcloud.app/api-reference/introduction)
- [Discord Support](https://discord.com/invite/jjdYayFu5Q)
- [Website](https://shardcloud.app)
