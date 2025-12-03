# Databases Examples

Examples for managing databases on ShardCloud.

## CommonJS (.cjs)

```javascript
const { ShardCloudClient, DatabaseType } = require('shardcloud');

const API_KEY = 'your-api-key';
const DB_ID = 'your-database-id';

async function main() {
  const client = new ShardCloudClient(API_KEY);
  const databases = client.databases();

  // Create database
  const createResult = await databases.create({
    type: DatabaseType.Postgres,
    name: 'my-database',
    password: 'secure-password',
    ram: 256,
    visualizer: true
  });
  console.log('Created:', createResult);

  // Get all databases
  const allDatabases = await databases.getAll();
  console.log('All databases:', allDatabases);

  // Get specific database
  const db = await databases.get(DB_ID);
  console.log('Database:', db);

  // Get status
  const status = await databases.status(DB_ID);
  console.log('Status:', status);

  // Get connection URL
  const connectionUrl = await databases.connectionUrl(DB_ID);
  console.log('Connection URL:', connectionUrl);

  // Get metrics
  const metrics = await databases.metrics(DB_ID);
  console.log('Metrics:', metrics);

  // Update resources
  await databases.update.resources(DB_ID, {
    ram: 512,
    vcpu: 2
  });

  // Update password
  await databases.update.password(DB_ID, 'new-secure-password');

  // Initialize database
  await databases.initialize(DB_ID);

  // Stop database
  await databases.stop(DB_ID);

  // Retry setup
  await databases.retrySetup(DB_ID);

  // Delete database
  await databases.delete(DB_ID);
}

main().catch(console.error);
```

## ES Modules (.mjs)

```javascript
import { ShardCloudClient, DatabaseType } from 'shardcloud';

const API_KEY = 'your-api-key';
const DB_ID = 'your-database-id';

async function main() {
  const client = new ShardCloudClient(API_KEY);
  const databases = client.databases();

  // Create database
  const createResult = await databases.create({
    type: DatabaseType.Postgres,
    name: 'my-database',
    password: 'secure-password',
    ram: 256,
    visualizer: true
  });
  console.log('Created:', createResult);

  // Get all databases
  const allDatabases = await databases.getAll();
  console.log('All databases:', allDatabases);

  // Get specific database
  const db = await databases.get(DB_ID);
  console.log('Database:', db);

  // Get status
  const status = await databases.status(DB_ID);
  console.log('Status:', status);

  // Get connection URL
  const connectionUrl = await databases.connectionUrl(DB_ID);
  console.log('Connection URL:', connectionUrl);

  // Get metrics
  const metrics = await databases.metrics(DB_ID);
  console.log('Metrics:', metrics);

  // Update resources
  await databases.update.resources(DB_ID, {
    ram: 512,
    vcpu: 2
  });

  // Update password
  await databases.update.password(DB_ID, 'new-secure-password');

  // Initialize database
  await databases.initialize(DB_ID);

  // Stop database
  await databases.stop(DB_ID);

  // Retry setup
  await databases.retrySetup(DB_ID);

  // Delete database
  await databases.delete(DB_ID);
}

main().catch(console.error);
```

## TypeScript (.ts)

```typescript
import { ShardCloudClient, DatabaseType } from 'shardcloud';

const API_KEY = 'your-api-key';
const DB_ID = 'your-database-id';

async function main(): Promise<void> {
  const client = new ShardCloudClient(API_KEY);
  const databases = client.databases();

  // Create database
  const createResult = await databases.create({
    type: DatabaseType.Postgres,
    name: 'my-database',
    password: 'secure-password',
    ram: 256,
    visualizer: true
  });
  console.log('Created:', createResult);

  // Get all databases
  const allDatabases = await databases.getAll();
  console.log('All databases:', allDatabases);

  // Get specific database
  const db = await databases.get(DB_ID);
  console.log('Database:', db);

  // Get status
  const status = await databases.status(DB_ID);
  console.log('Status:', status);

  // Get connection URL
  const connectionUrl = await databases.connectionUrl(DB_ID);
  console.log('Connection URL:', connectionUrl);

  // Get metrics
  const metrics = await databases.metrics(DB_ID);
  console.log('Metrics:', metrics);

  // Update resources
  await databases.update.resources(DB_ID, {
    ram: 512,
    vcpu: 2
  });

  // Update password
  await databases.update.password(DB_ID, 'new-secure-password');

  // Initialize database
  await databases.initialize(DB_ID);

  // Stop database
  await databases.stop(DB_ID);

  // Retry setup
  await databases.retrySetup(DB_ID);

  // Delete database
  await databases.delete(DB_ID);
}

main().catch(console.error);
```

## Database Types

Available database types:

```javascript
DatabaseType.Postgres  // PostgreSQL
DatabaseType.MySQL     // MySQL
DatabaseType.MongoDB   // MongoDB
DatabaseType.Redis     // Redis
```

## Common Operations

### Create Database

```javascript
const result = await databases.create({
  type: DatabaseType.Postgres,
  name: 'my-database',
  password: 'secure-password-123',
  ram: 256,
  visualizer: false  // Optional
});

if (result) {
  console.log('Database ID:', result.id);
  console.log('Connection URL:', result.connection_url);
}
```

### Get Connection URL

```javascript
const connection = await databases.connectionUrl(DB_ID);
if (connection) {
  console.log('Connection URL:', connection.connection_url);
  if (connection.visualizer_url) {
    console.log('Visualizer URL:', connection.visualizer_url);
  }
}
```

### Update Resources

```javascript
await databases.update.resources(DB_ID, {
  ram: 512,    // RAM in MB
  vcpu: 2      // Number of vCPUs
});
```

### Update Password

```javascript
await databases.update.password(DB_ID, 'new-secure-password');
```

### Monitor Database

```javascript
// Get status
const status = await databases.status(DB_ID);

// Get metrics
const metrics = await databases.metrics(DB_ID);
if (metrics) {
  const currentRam = metrics.ram[metrics.ram.length - 1];
  const currentVcpu = metrics.vcpu[metrics.vcpu.length - 1];
  console.log(`RAM: ${currentRam}MB, vCPU: ${currentVcpu}%`);
}
```

### Control Database State

```javascript
// Initialize database (if needed)
await databases.initialize(DB_ID);

// Stop database
await databases.stop(DB_ID);

// Retry setup (if setup failed)
await databases.retrySetup(DB_ID);
```

## Connection URL Examples

### PostgreSQL
```
postgresql://user:password@host:port/database
```

### MySQL
```
mysql://user:password@host:port/database
```

### MongoDB
```
mongodb://user:password@host:port/database
```

### Redis
```
redis://:password@host:port
```

## Notes

- Replace `'your-api-key'` with your actual ShardCloud API Key
- Replace `'your-database-id'` with your database ID
- Minimum RAM is typically 256MB
- Visualizer is useful for MongoDB and other NoSQL databases
- Always check if results are null before using them
- Deleting a database is permanent and cannot be undone
