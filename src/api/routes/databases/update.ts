import { APIResponse } from "../../../types/global.js";

export async function updateResources(
  apiKey: string,
  id: string,
  { ram, vcpu }: { ram?: number; vcpu?: number },
): Promise<APIResponse | string> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/databases/${id}/resources`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ram, vcpu }),
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

export async function updatePassword(
  apiKey: string,
  id: string,
  password: string,
): Promise<APIResponse | string> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/databases/${id}/password`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
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
