import { Apps } from "./apps.js";
import { Databases } from "./databases.js";

export class ShardCloudClient {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  apps() {
    return new Apps(this.apiKey);
  }

  databases() {
    return new Databases(this.apiKey);
  }
}

export default ShardCloudClient;
