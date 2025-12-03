import { DeployResponse, DeployToken } from "../../../types/apps.js";
import { APIResponse } from "../../../types/global.js";

export async function fetchDeploys(
  apiKey: string,
  appId: string,
): Promise<DeployResponse[] | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/deploys`,
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
    console.error("Network or parsing error: " + error.message);
    return null;
  }
}

export async function fetchDeployToken(
  apiKey: string,
  appId: string,
): Promise<DeployToken | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/deploy-token`,
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
    console.error("Network or parsing error: " + error.message);
    return null;
  }
}

export async function deployTokenFlow(
  apiKey: string,
  appId: string,
  deployToken?: string,
): Promise<DeployToken | null> {
  try {
    const url = `https://shardcloud.app/api/apps/${appId}/deploy-token${
      deployToken ? `?deploy_token=${encodeURIComponent(deployToken)}` : ""
    }`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        deploy_token: deployToken ?? undefined,
      }),
    });

    const data = await response.json();

    if (response.status === 429) {
      console.error("Rate limit exceeded. Try again later.");
      return null;
    }

    if (response.status === 500) return data.error;

    return data;
  } catch (error: any) {
    console.error("Failed to deploy token: " + error.message);
    return null;
  }
}

export async function deleteDeploy(
  apiKey: string,
  appId: string,
): Promise<APIResponse | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/deploy-token`,
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
    console.error("Network or parsing error: " + error.message);
    return null;
  }
}
