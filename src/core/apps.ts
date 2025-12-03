import {
  deleteDeploy,
  deployTokenFlow,
  fetchDeploys,
  fetchDeployToken,
} from "../api/routes/applications/deploy.js";
import {
  clearCacheDomain,
  deleteDomain,
  fetchDomain,
  updateDomain,
} from "../api/routes/applications/domain.js";
import {
  fetchAll,
  fetchId,
  logs,
  metrics,
  status,
} from "../api/routes/applications/fetch.js";
import {
  createFile,
  deleteFile,
  getFileContent,
  getFiles,
  moveFile,
  updateFile,
  updateResources,
  updateStatus,
} from "../api/routes/applications/manager.js";
import { upload } from "../api/routes/applications/upload.js";
import {
  AppResponse,
  AppStatus,
  DeployResponse,
  DeployToken,
  FilesResponse,
  UploadResponse,
} from "../types/apps.js";
import { DomainResponse, UpdateDomain } from "../types/domain.js";
import { APIResponse, MetricsResult } from "../types/global.js";

export class Apps {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async start(appId: string): Promise<APIResponse | null> {
    return await updateStatus(this.apiKey, appId, "run");
  }

  public async stop(appId: string): Promise<APIResponse | null> {
    return await updateStatus(this.apiKey, appId, "stop");
  }

  public async restart(appId: string): Promise<APIResponse | null> {
    return await updateStatus(this.apiKey, appId, "restart");
  }

  public async upload(filePath: string): Promise<UploadResponse | null> {
    return await upload(this.apiKey, filePath);
  }

  public async status(appId: string): Promise<AppStatus | null> {
    return await status(this.apiKey, appId);
  }

  public async metrics(appId: string): Promise<MetricsResult | null> {
    return await metrics(this.apiKey, appId);
  }

  public async logs(appId: string): Promise<string | null> {
    return await logs(this.apiKey, appId);
  }

  public async get(appId: string): Promise<AppResponse | null> {
    return await fetchId(this.apiKey, appId);
  }

  public async fetch(appId: string): Promise<AppResponse | null> {
    return await fetchId(this.apiKey, appId);
  }

  public async getAll(): Promise<AppResponse[] | null> {
    return await fetchAll(this.apiKey);
  }

  public async fetchAll(): Promise<AppResponse[] | null> {
    return await fetchAll(this.apiKey);
  }

  public async resources(
    appId: string,
    options: {
      name?: string;
      description?: string;
      subdomain?: string;
      ram?: number;
      vcpu?: number;
      custom_command?: string;
      entrypoint?: string;
    },
  ): Promise<APIResponse | null> {
    return await updateResources(this.apiKey, appId, options);
  }

  public async commit(
    appId: string,
    filePath: string,
  ): Promise<APIResponse | null> {
    return await updateFile(this.apiKey, appId, filePath);
  }

  public file = {
    add: async (
      appId: string,
      path: string,
      content: string,
    ): Promise<APIResponse | null> =>
      await createFile(this.apiKey, appId, path, content),
    create: async (
      appId: string,
      path: string,
      content: string,
    ): Promise<APIResponse | null> =>
      await createFile(this.apiKey, appId, path, content),
    delete: async (appId: string, path: string): Promise<APIResponse | null> =>
      await deleteFile(this.apiKey, appId, path),
    move: async (
      appId: string,
      oldPath: string,
      newPath: string,
    ): Promise<APIResponse | null> =>
      await moveFile(this.apiKey, appId, oldPath, newPath),
    content: async (appId: string, path: string): Promise<string | null> =>
      await getFileContent(this.apiKey, appId, path),
    getAll: async (appId: string): Promise<FilesResponse | null> =>
      await getFiles(this.apiKey, appId),
    fetchAll: async (appId: string): Promise<FilesResponse | null> =>
      await getFiles(this.apiKey, appId),
    allFiles: async (appId: string): Promise<FilesResponse | null> =>
      await getFiles(this.apiKey, appId),
  };

  public deploy = {
    get: async (appId: string): Promise<DeployResponse[] | null> =>
      await fetchDeploys(this.apiKey, appId),
    fetch: async (appId: string): Promise<DeployResponse[] | null> =>
      await fetchDeploys(this.apiKey, appId),
    create: async (
      appId: string,
      deployToken: string,
    ): Promise<DeployToken | null> =>
      await deployTokenFlow(this.apiKey, appId, deployToken),
    delete: async (appId: string): Promise<APIResponse | null> =>
      await deleteDeploy(this.apiKey, appId),
  };

  public domain = {
    get: async (appId: string): Promise<DomainResponse | null> =>
      await fetchDomain(this.apiKey, appId),
    fetch: async (appId: string): Promise<DomainResponse | null> =>
      await fetchDomain(this.apiKey, appId),
    update: async (
      appId: string,
      domain: string,
    ): Promise<UpdateDomain | null> =>
      await updateDomain(this.apiKey, appId, domain),
    delete: async (appId: string): Promise<APIResponse | null> =>
      await deleteDomain(this.apiKey, appId),
    clear: async (appId: string): Promise<APIResponse | null> =>
      await clearCacheDomain(this.apiKey, appId),
  };
}
