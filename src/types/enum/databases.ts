export enum DatabaseType {
  Postgres = "postgres",
  MySQL = "mysql",
  MongoDB = "mongo",
  Redis = "redis",
}

export enum DatabaseStatus {
  NotFound = "not_found",
  Pending = "pending",
  Running = "running",
  Stopped = "stopped",
}
