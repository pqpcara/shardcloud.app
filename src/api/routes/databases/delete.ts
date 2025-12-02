import { APIResponse } from "../../../types/global.js";

export async function deleteDatabase(
  apiKey: string,
  id: string,
): Promise<APIResponse | string> {
  try {
    const response = await fetch(`https://shardcloud.app/api/databases/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

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
