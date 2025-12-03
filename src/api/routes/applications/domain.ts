import { DomainResponse, UpdateDomain } from "../../../types/domain.js";
import { APIResponse } from "../../../types/global.js";

export async function fetchDomain(
  apiKey: string,
  appId: string,
): Promise<DomainResponse | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/domain`,
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

    if (response.status === 500) return data.error;

    return data;
  } catch (error: any) {
    console.error("Network or parsing error:", error.message);
    return null;
  }
}

export async function updateDomain(
  apiKey: string,
  appId: string,
  domain: string,
): Promise<UpdateDomain | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/domain`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ custom_domain: domain }),
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

export async function deleteDomain(
  apiKey: string,
  appId: string,
): Promise<APIResponse | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/domain`,
      {
        method: "DELETE",
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

    if (response.status === 500) return data.error;

    return data;
  } catch (error: any) {
    console.error("Network or parsing error:", error.message);
    return null;
  }
}

export async function clearCacheDomain(
  apiKey: string,
  appId: string,
): Promise<APIResponse | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/domain/cache`,
      {
        method: "DELETE",
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

    if (response.status === 500) return data.error;

    return data;
  } catch (error: any) {
    console.error("Network or parsing error:", error.message);
    return null;
  }
}
