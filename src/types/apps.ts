import { ApplicationStatus, Language, LanguageVersion } from "./enum/apps.js";
import { MetricsResult } from "./global.js";

export interface UploadResponse {
  id: string;
}

export interface AppStatus {
  status: ApplicationStatus;
}

export interface AppResponse {
  app: {
    user_id: string;
    id: string;
    ram: number;
    name: string;
    is_app: boolean;
    project_type: string;
    blocked_reason: object | null;
    blocked_until: string | null;
    setup: boolean;
    created_at: string | null;
    last_setup_at: string | null;
    vcpu: number;
    auto_backup: boolean;
    auto_restart_on_deploy: boolean;
    language: `${Language}` | "unknown";
    version: `${LanguageVersion}`;
    subdomain: string;
    entrypoint: string;
    description: string;
    custom_command: string;
    custom_domain: string;
  };
  project_info: MetricsResult;
  status: `${ApplicationStatus}`;
}

export interface FilesResponse {
  path: string;
  type: string;
  name: string;
  size: number;
  last_modified: number;
}

export interface DeployResponse {
  id: string;
  app_id: string;
  created_at: string;
  error: string;
}

export interface DeployToken {
  token: string;
}
