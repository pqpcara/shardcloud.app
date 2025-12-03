import { AppResponse, AppStatus } from "../../../types/apps.js";
import { MetricsResult } from "../../../types/global.js";

export async function status(
  apiKey: string,
  appId: string,
): Promise<AppStatus | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/status`,
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

    if (response.status === 400) return data.error;

    return data;
  } catch (error: any) {
    console.error("Network or parsing error:", error.message);
    return null;
  }
}

export async function metrics(
  apiKey: string,
  appId: string,
): Promise<MetricsResult | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/metrics`,
      {
        method: "GET",
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

    if (response.status === 400 || response.status === 500) return data.error;

    return data;
  } catch (error: any) {
    console.error("Network or parsing error:", error.message);
    return null;
  }
}

export async function logs(
  apiKey: string,
  appId: string,
): Promise<string | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/logs`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    if (response.status === 429) {
      console.error("Rate limit exceeded. Try again later.");
      return null;
    }

    if (response.status === 400) {
      const error = await response.json();
      return error.message;
    }

    const text = await response.text();
    return text;
  } catch (error: any) {
    console.error("Network or parsing error:", error.message);
    return null;
  }
}

export async function fetchId(
  apiKey: string,
  appId: string,
): Promise<AppResponse | null> {
  try {
    const response = await fetch(`https://shardcloud.app/api/apps/${appId}`, {
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
    console.error("Network or parsing error: " + error.message);
    return null;
  }
}

export async function fetchAll(apiKey: string): Promise<AppResponse[] | null> {
  try {
    const response = await fetch(`https://shardcloud.app/api/apps`, {
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
    console.error("Network or parsing error: " + error.message);
    return null;
  }
}
