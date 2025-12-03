import { APIResponse } from "../../../types/global.js";

export async function updateResources(
  apiKey: string,
  id: string,
  { ram, vcpu }: { ram?: number; vcpu?: number },
): Promise<APIResponse | null> {
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
      console.error("Rate limit exceeded. Try again later.");
      return null;
    }

    if (response.status === 400) return data.error;

    return data;
  } catch (error: any) {
    console.error("Network or parsing error:", error.message);
    return null;
  }
}

export async function updatePassword(
  apiKey: string,
  id: string,
  password: string,
): Promise<APIResponse | null> {
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
      console.error("Rate limit exceeded. Try again later.");
      return null;
    }

    if (response.status === 400) return data.error;

    return data;
  } catch (error: any) {
    console.error("Network or parsing error:", error.message);
    return null;
  }
}
