# Applications Examples

Examples for managing applications on ShardCloud.

## CommonJS (.cjs)

```javascript
const ShardCloudClient = require('shardcloud');

const API_KEY = 'your-api-key';
const APP_ID = 'your-app-id';

async function main() {
  const client = new ShardCloudClient(API_KEY);
  const apps = client.apps();

  // Get all applications
  const allApps = await apps.getAll();
  console.log('Applications:', allApps);

  // Get specific application
  const app = await apps.get(APP_ID);
  console.log('Application:', app);

  // Get application status
  const status = await apps.status(APP_ID);
  console.log('Status:', status);

  // Get metrics
  const metrics = await apps.metrics(APP_ID);
  console.log('Metrics:', metrics);

  // Get logs
  const logs = await apps.logs(APP_ID);
  console.log('Logs:', logs);

  // Start application
  await apps.start(APP_ID);

  // Stop application
  await apps.stop(APP_ID);

  // Restart application
  await apps.restart(APP_ID);

  // Update resources
  await apps.resources(APP_ID, {
    ram: 512,
    vcpu: 1,
    description: 'Updated via SDK'
  });

  // Upload application (ZIP file)
  const uploadResult = await apps.upload('./my-app.zip');
  console.log('Upload result:', uploadResult);

  // File operations
  await apps.file.create(APP_ID, 'test.txt', 'Hello World');
  const content = await apps.file.content(APP_ID, 'test.txt');
  console.log('File content:', content);
  await apps.file.delete(APP_ID, 'test.txt');

  // List files
  const files = await apps.file.getAll(APP_ID);
  console.log('Files:', files);

  // Domain operations
  const domain = await apps.domain.get(APP_ID);
  console.log('Domain:', domain);
  await apps.domain.update(APP_ID, 'myapp.example.com');
  await apps.domain.clear(APP_ID);

  // Deploy operations
  const deploys = await apps.deploy.get(APP_ID);
  console.log('Deploys:', deploys);
}

main().catch(console.error);
```

## ES Modules (.mjs)

```javascript
import ShardCloudClient from 'shardcloud';

const API_KEY = 'your-api-key';
const APP_ID = 'your-app-id';

async function main() {
  const client = new ShardCloudClient(API_KEY);
  const apps = client.apps();

  // Get all applications
  const allApps = await apps.getAll();
  console.log('Applications:', allApps);

  // Get specific application
  const app = await apps.get(APP_ID);
  console.log('Application:', app);

  // Get application status
  const status = await apps.status(APP_ID);
  console.log('Status:', status);

  // Get metrics
  const metrics = await apps.metrics(APP_ID);
  console.log('Metrics:', metrics);

  // Get logs
  const logs = await apps.logs(APP_ID);
  console.log('Logs:', logs);

  // Start application
  await apps.start(APP_ID);

  // Stop application
  await apps.stop(APP_ID);

  // Restart application
  await apps.restart(APP_ID);

  // Update resources
  await apps.resources(APP_ID, {
    ram: 512,
    vcpu: 1,
    description: 'Updated via SDK'
  });

  // Upload application (ZIP file)
  const uploadResult = await apps.upload('./my-app.zip');
  console.log('Upload result:', uploadResult);

  // File operations
  await apps.file.create(APP_ID, 'test.txt', 'Hello World');
  const content = await apps.file.content(APP_ID, 'test.txt');
  console.log('File content:', content);
  await apps.file.delete(APP_ID, 'test.txt');

  // List files
  const files = await apps.file.getAll(APP_ID);
  console.log('Files:', files);

  // Domain operations
  const domain = await apps.domain.get(APP_ID);
  console.log('Domain:', domain);
  await apps.domain.update(APP_ID, 'myapp.example.com');
  await apps.domain.clear(APP_ID);

  // Deploy operations
  const deploys = await apps.deploy.get(APP_ID);
  console.log('Deploys:', deploys);
}

main().catch(console.error);
```

## TypeScript (.ts)

```typescript
import ShardCloudClient from 'shardcloud';

const API_KEY = 'your-api-key';
const APP_ID = 'your-app-id';

async function main(): Promise<void> {
  const client = new ShardCloudClient(API_KEY);
  const apps = client.apps();

  // Get all applications
  const allApps = await apps.getAll();
  console.log('Applications:', allApps);

  // Get specific application
  const app = await apps.get(APP_ID);
  console.log('Application:', app);

  // Get application status
  const status = await apps.status(APP_ID);
  console.log('Status:', status);

  // Get metrics
  const metrics = await apps.metrics(APP_ID);
  console.log('Metrics:', metrics);

  // Get logs
  const logs = await apps.logs(APP_ID);
  console.log('Logs:', logs);

  // Start application
  await apps.start(APP_ID);

  // Stop application
  await apps.stop(APP_ID);

  // Restart application
  await apps.restart(APP_ID);

  // Update resources
  await apps.resources(APP_ID, {
    ram: 512,
    vcpu: 1,
    description: 'Updated via SDK'
  });

  // Upload application (ZIP file)
  const uploadResult = await apps.upload('./my-app.zip');
  console.log('Upload result:', uploadResult);

  // File operations
  await apps.file.create(APP_ID, 'test.txt', 'Hello World');
  const content = await apps.file.content(APP_ID, 'test.txt');
  console.log('File content:', content);
  await apps.file.delete(APP_ID, 'test.txt');

  // List files
  const files = await apps.file.getAll(APP_ID);
  console.log('Files:', files);

  // Domain operations
  const domain = await apps.domain.get(APP_ID);
  console.log('Domain:', domain);
  await apps.domain.update(APP_ID, 'exemple.shardcloud.app');
  await apps.domain.clear(APP_ID);

  // Deploy operations
  const deploys = await apps.deploy.get(APP_ID);
  console.log('Deploys:', deploys);
}

main().catch(console.error);
```

## Common Operations

### Upload Application

Upload a ZIP file containing your application:

```javascript
const result = await apps.upload('./my-app.zip');
if (result) {
  console.log('App ID:', result.id);
}
```

### Manage Application Status

```javascript
// Check status
const status = await apps.status(APP_ID);

// Start
await apps.start(APP_ID);

// Stop
await apps.stop(APP_ID);

// Restart
await apps.restart(APP_ID);
```

### File Management

```javascript
// Create file
await apps.file.create(APP_ID, 'path/to/file.txt', 'content');

// Read file
const content = await apps.file.content(APP_ID, 'path/to/file.txt');

// Update file (using commit)
await apps.commit(APP_ID, './local-file.txt');

// Delete file
await apps.file.delete(APP_ID, 'path/to/file.txt');

// Move file
await apps.file.move(APP_ID, 'old-path.txt', 'new-path.txt');

// List files
const files = await apps.file.getAll(APP_ID);
```

### Domain Configuration

```javascript
// Get domain info
const domain = await apps.domain.get(APP_ID);

// Set custom domain
await apps.domain.update(APP_ID, 'myapp.example.com');

// Clear cache
await apps.domain.clear(APP_ID);

// Delete domain
await apps.domain.delete(APP_ID);
```

### Deploy Management

```javascript
// List deploys
const deploys = await apps.deploy.get(APP_ID);

// Create deploy with token
const deployResult = await apps.deploy.create(APP_ID, 'deploy-token');

// Delete deploy
await apps.deploy.delete(APP_ID);
```

## Notes

- Replace `'your-api-key'` with your actual ShardCloud API Key
- Replace `'your-app-id'` with your application ID
- The `upload()` method requires a ZIP file path
- File paths are relative to the application root
- Always check if results are null before using them
