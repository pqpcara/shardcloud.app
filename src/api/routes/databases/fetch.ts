import { DatabaseResult, StatusResult } from "../../../types/databases.js";

export async function fetchId(
  apiKey: string,
  id: string,
): Promise<DatabaseResult | null> {
  try {
    const response = await fetch(`https://shardcloud.app/api/databases/${id}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.status === 429) {
      console.error("Rate limit exceeded. Try again later.");
      return null;
    }

    if (response.status === 404) return data.error;

    return data;
  } catch (error: any) {
    console.error("Network or parsing error: " + error.message);
    return null;
  }
}

export async function fetchAll(
  apiKey: string,
): Promise<DatabaseResult[] | null> {
  try {
    const response = await fetch(`https://shardcloud.app/api/databases`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.status === 429) {
      console.error("Rate limit exceeded. Try again later.");
      return null;
    }
    if (response.status === 404) return data.error;

    return data;
  } catch (error: any) {
    console.error("Network or parsing error: " + error.message);
    return null;
  }
}

export async function fetchStatus(
  apiKey: string,
  id: string,
): Promise<StatusResult | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/databases/${id}/status`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    const data = await response.json();

    if (response.status === 429) {
      console.error("Rate limit exceeded. Try again later.");
      return null;
    }

    if (response.status === 404) return data.error;

    return data;
  } catch (error: any) {
    console.error("Network or parsing error: " + error.message);
    return null;
  }
}
