# ShardCloud SDK

Official SDK for the ShardCloud API - platform for hosting applications and databases.

## Installation

```bash
npm install shardcloud
```

## How to Use

### 1. Import and Setup

```typescript
import ShardCloudClient from 'shardcloud';
// or import { ShardCloudClient } from 'shardcloud';

const client = new ShardCloudClient('your-api-key');
const apps = client.apps();
const databases = client.databases();
```

### 2. Applications Examples

#### List all applications

```typescript
const allApps = await apps.getAll();
console.log(allApps);
```

#### Get a specific application

```typescript
const app = await apps.get('app-id');
console.log(app);
```

#### Start, stop, or restart

```typescript
await apps.start('app-id');
await apps.stop('app-id');
await apps.restart('app-id');
```

#### Check status

```typescript
const status = await apps.status('app-id');
console.log(status);
```

#### Upload application (ZIP file)

```typescript
const result = await apps.upload('./my-app.zip');
console.log('App created with ID:', result.id);
```

#### Create file

```typescript
await apps.file.create('app-id', 'test.txt', 'Hello World');
```

#### Read file

```typescript
const content = await apps.file.content('app-id', 'test.txt');
console.log(content);
```

#### List files

```typescript
const files = await apps.file.getAll('app-id');
console.log(files);
```

#### Update resources

```typescript
await apps.resources('app-id', {
  ram: 512,
  vcpu: 1,
  name: 'My App'
});
```

#### Configure domain

```typescript
await apps.domain.update('app-id', 'myapp.example.com');
```

### 3. Databases Examples

#### Create database

```typescript
import { DatabaseType } from 'shardcloud';

const result = await databases.create({
  type: DatabaseType.Postgres,
  name: 'my-database',
  password: 'secure-password',
  ram: 256
});

console.log('Database created with ID:', result.id);
```

#### List all databases

```typescript
const allDatabases = await databases.getAll();
console.log(allDatabases);
```

#### Get a specific database

```typescript
const db = await databases.get('database-id');
console.log(db);
```

#### Get connection URL

```typescript
const connection = await databases.connectionUrl('database-id');
console.log('URL:', connection.connection_url);
```

#### Update resources

```typescript
await databases.update.resources('database-id', {
  ram: 512,
  vcpu: 2
});
```

#### Update password

```typescript
await databases.update.password('database-id', 'new-password');
```

#### Check status

```typescript
const status = await databases.status('database-id');
console.log(status);
```

## Database Types

```typescript
DatabaseType.Postgres  // PostgreSQL
DatabaseType.MySQL     // MySQL
DatabaseType.MongoDB   // MongoDB
DatabaseType.Redis     // Redis
```

## Complete Example

```typescript
import ShardCloudClient from 'shardcloud';

const client = new ShardCloudClient('your-api-key');
const apps = client.apps();

// List applications
const allApps = await apps.getAll();
console.log('Applications:', allApps);

// Start an application
await apps.start('app-id');

// Check status
const status = await apps.status('app-id');
console.log('Status:', status);
```

## Links

- [API Documentation](https://docs.shardcloud.app/api-reference/introduction)
- [Discord](https://discord.com/invite/jjdYayFu5Q)
- [Website](https://shardcloud.app)
