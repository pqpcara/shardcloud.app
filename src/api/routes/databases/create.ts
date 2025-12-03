import { CreateResult } from "../../../types/databases.js";

export async function createDatabase(
  apiKey: string,
  name: string,
  password: string,
  ram: number,
  type: string,
  visualizer: boolean = false,
): Promise<CreateResult | null> {
  try {
    const response = await fetch("https://shardcloud.app/api/databases", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type, name, password, ram, visualizer }),
    });

    const data = await response.json();

    if (response.status === 429) {
      console.error("Rate limit exceeded. Try again later.");
      return null;
    }

    if (response.status === 400) return data.error;

    return data as CreateResult;
  } catch (error: any) {
    console.error("Network or parsing error: " + error.message);
    return null;
  }
}
