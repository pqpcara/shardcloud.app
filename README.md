# ShardCloud SDK

---

This is the foundation.

---

## Installation
```bash
npm install shardcloud
```

---

## Usage

### Import
```typescript
import ShardCloudClient from 'shardcloud';
```
or

```typescript
import { ShardCloudClient } from 'shardcloud';
```

---

### Exemple
```typescript
import ShardCloudClient from 'shardcloud';

const ShardCloud = new ShardCloudClient('your-api-key');
const apps = ShardCloud.apps();
const databases = ShardCloud.databases();

console.log(apps.test());
console.log(databases.test());
```

---

### Documentation
[Documentation](https://docs.shardcloud.app/api-reference/introduction)

### Support
[Support](https://discord.com/invite/jjdYayFu5Q)
