import {
  ConnectionUrlResult,
  MatricsResult,
} from "../../../types/databases.js";
import { APIResponse } from "../../../types/global.js";

export async function retrySetup(
  apiKey: string,
  id: string,
): Promise<APIResponse | string> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/databases/${id}/retry-setup`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    const data = await response.json();

    if (response.status === 429) {
      return "[ShardCloud] Rate limit exceeded. Try again later.";
    }

    if (response.status === 500) {
      return data.error;
    }

    return data;
  } catch (error: any) {
    return "[ShardCloud] Network or parsing error: " + error.message;
  }
}

export async function initialize(
  apiKey: string,
  id: string,
): Promise<APIResponse | string> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/databases/${id}/initialize`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    const data = await response.json();

    if (response.status === 429) {
      return "[ShardCloud] Rate limit exceeded. Try again later.";
    }

    if (response.status === 400) {
      return data.error;
    }

    return data;
  } catch (error: any) {
    return "[ShardCloud] Network or parsing error: " + error.message;
  }
}

export async function stop(
  apiKey: string,
  id: string,
): Promise<APIResponse | string> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/databases/${id}/stop`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    const data = await response.json();

    if (response.status === 429) {
      return "[ShardCloud] Rate limit exceeded. Try again later.";
    }

    if (response.status === 400) {
      return data.error;
    }

    return data;
  } catch (error: any) {
    return "[ShardCloud] Network or parsing error: " + error.message;
  }
}

export async function metrics(
  apiKey: string,
  id: string,
): Promise<MatricsResult | string> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/databases/${id}/metrics`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    const data = await response.json();

    if (response.status === 429) {
      return "[ShardCloud] Rate limit exceeded. Try again later.";
    }

    if (response.status === 400 || response.status === 500) {
      return data.error;
    }

    return data;
  } catch (error: any) {
    return "[ShardCloud] Network or parsing error: " + error.message;
  }
}

export async function connectionUrl(
  apiKey: string,
  id: string,
): Promise<ConnectionUrlResult | string> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/databases/${id}/connection-url`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    const data = await response.json();

    if (response.status === 429) {
      return "[ShardCloud] Rate limit exceeded. Try again later.";
    }

    if (response.status === 500) {
      return data.error;
    }

    return data;
  } catch (error: any) {
    return "[ShardCloud] Network or parsing error: " + error.message;
  }
}
