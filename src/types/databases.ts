import { DatabaseStatus, DatabaseType } from "./enum/databases.js";
import { MetricsResult } from "./global.js";

export interface CreateResult {
  connection_url: string;
  id: string;
}

export interface StatusResult {
  status: DatabaseStatus[];
}

export interface DatabaseResult {
  database: {
    user_id: string;
    id: string;
    ram: number;
    name: string;
    is_app: boolean;
    blocked_until: string | null;
    setup: boolean;
    created_at: string | null;
    last_setup_at: string | null;
    vcpu: number;
    service_type: `${DatabaseType}`;
    visualizer: boolean;
    size: number;
  };
  project_info: MetricsResult;
  replica_status: `${DatabaseStatus}`;
}

export interface ConnectionUrlResult {
  connection_url: string;
  visualizer_url: string;
}
