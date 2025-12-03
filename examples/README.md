# Examples

This folder contains practical examples of how to use the ShardCloud SDK.

## Available Examples

### [Applications](./apps/)
Examples for managing applications, including:
- Creating and uploading applications
- Managing application status
- File operations
- Deploy management
- Domain configuration

### [Databases](./databases/)
Examples for managing databases, including:
- Creating databases (PostgreSQL, MySQL, MongoDB, Redis)
- Getting connection URLs
- Updating resources and passwords
- Monitoring metrics

## How to Use

1. **Install the SDK:**
```bash
npm install shardcloud
```

2. **Navigate to the example folder:**
```bash
cd examples/apps
# or
cd examples/databases
```

3. **Read the README.md** in each folder for code examples in CommonJS, ES Modules, and TypeScript.

4. **Configure your credentials:**
   - Replace `'your-api-key'` with your ShardCloud API Key
   - Update other parameters as needed (app IDs, etc.)

## Important Notes

- All examples require a valid ShardCloud API Key
- Replace example values (IDs, names, etc.) with your own
- Some operations may have costs or permanent effects (e.g., deleting resources)
- Read each example's README.md for specific details

## Links

- [Main Documentation](../README.md)
- [API Documentation](https://docs.shardcloud.app/api-reference/introduction)
- [Discord Support](https://discord.com/invite/jjdYayFu5Q)
