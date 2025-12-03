import { APIResponse } from "../../../types/global.js";

export async function deleteApplication(
  apiKey: string,
  appId: string,
): Promise<APIResponse | null> {
  try {
    const response = await fetch(`https://shardcloud.app/api/apps/${appId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const data = await response.json();

    if (response.status === 429) {
      console.error("Rate limit exceeded. Try again later.");
      return null;
    }

    if (response.status === 500) return data.error;

    return data;
  } catch (error: any) {
    console.error("Network or parsing error:", error.message);
    return null;
  }
}
