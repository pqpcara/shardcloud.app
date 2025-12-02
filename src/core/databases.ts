import { createDatabase } from "../api/routes/databases/create.js";
import { deleteDatabase } from "../api/routes/databases/delete.js";
import {
  fetchAll,
  fetchId,
  fetchStatus,
} from "../api/routes/databases/fetch.js";
import {
  connectionUrl,
  initialize,
  metrics,
  retrySetup,
  stop,
} from "../api/routes/databases/manager.js";
import {
  updatePassword,
  updateResources,
} from "../api/routes/databases/update.js";
import {
  ConnectionUrlResult,
  CreateResult,
  DatabaseResult,
  MatricsResult,
  StatusResult,
} from "../types/databases.js";
import { DatabaseType } from "../types/enum/databases.js";
import { APIResponse } from "../types/global.js";

interface CreateOptions {
  type: `${DatabaseType}`;
  name: string;
  password: string;
  ram: number;
  visualizer?: boolean;
}

interface UpdateResourcesOptions {
  ram?: number;
  vcpu?: number;
}

export class Databases {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async create(options: CreateOptions): Promise<CreateResult | string> {
    const { name, password, ram, type, visualizer } = options;
    return await createDatabase(
      this.apiKey,
      name,
      password,
      ram,
      type,
      visualizer,
    );
  }

  public async get(id: string): Promise<DatabaseResult | string> {
    return await fetchId(this.apiKey, id);
  }

  public async fetch(id: string): Promise<DatabaseResult | string> {
    return await fetchId(this.apiKey, id);
  }

  public async getAll(): Promise<DatabaseResult[] | string> {
    return await fetchAll(this.apiKey);
  }

  public async fetchAll(): Promise<DatabaseResult[] | string> {
    return await fetchAll(this.apiKey);
  }

  public async delete(id: string): Promise<APIResponse | string> {
    return await deleteDatabase(this.apiKey, id);
  }

  public update = {
    resources: async (
      id: string,
      options: UpdateResourcesOptions,
    ): Promise<APIResponse | string> =>
      await updateResources(this.apiKey, id, options),
    password: async (
      id: string,
      password: string,
    ): Promise<APIResponse | string> =>
      await updatePassword(this.apiKey, id, password),
  };

  public async status(id: string): Promise<StatusResult | string> {
    return await fetchStatus(this.apiKey, id);
  }

  public async retrySetup(id: string): Promise<APIResponse | string> {
    return await retrySetup(this.apiKey, id);
  }

  public async initialize(id: string): Promise<APIResponse | string> {
    return await initialize(this.apiKey, id);
  }

  public async stop(id: string): Promise<APIResponse | string> {
    return await stop(this.apiKey, id);
  }

  public async metrics(id: string): Promise<MatricsResult | string> {
    return await metrics(this.apiKey, id);
  }

  public async connectionUrl(
    id: string,
  ): Promise<ConnectionUrlResult | string> {
    return await connectionUrl(this.apiKey, id);
  }
}
