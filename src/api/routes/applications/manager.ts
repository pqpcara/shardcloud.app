import { APIResponse } from "../../../types/global.js";
import fs from "fs";
import path from "path";
import { FilesResponse } from "../../../types/apps.js";

export async function updateStatus(
  apiKey: string,
  appId: string,
  type: string,
): Promise<APIResponse | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/status`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: type }),
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

export async function getFileContent(
  apiKey: string,
  appId: string,
  path: string,
): Promise<string | null> {
  try {
    if (!path.startsWith("/")) {
      path = "/" + path;
    }
    const url = `https://shardcloud.app/api/apps/${appId}/file/content?path=${encodeURIComponent(path)}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (response.status === 429) {
      console.error("Rate limit exceeded. Try again later.");
      return null;
    }

    if (response.status === 400 || response.status === 500) {
      const error = await response.json();
      return null;
    }

    const text = await response.text();
    return text;
  } catch (error: any) {
    console.error("Network or parsing error:", error.message);
    return null;
  }
}

export async function updateResources(
  apiKey: string,
  appId: string,
  {
    name,
    description,
    subdomain,
    ram,
    vcpu,
    custom_command,
    entrypoint,
  }: {
    name?: string;
    description?: string;
    subdomain?: string;
    ram?: number;
    vcpu?: number;
    custom_command?: string;
    entrypoint?: string;
  },
): Promise<APIResponse | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/resources`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          subdomain,
          ram,
          vcpu,
          custom_command,
          entrypoint,
        }),
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

export async function updateFile(
  apiKey: string,
  appId: string,
  filePath: string,
): Promise<APIResponse | null> {
  try {
    const buffer = fs.readFileSync(filePath);
    const fileName = path.basename(filePath);

    const formData = new FormData();
    formData.append(
      "project",
      new File([buffer], fileName, { type: "application/zip" }),
    );

    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/file`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        body: formData as any,
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

export async function getFiles(
  apiKey: string,
  appId: string,
): Promise<FilesResponse | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/files`,
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

    if (response.status === 400 || response.status === 500) return data.error;

    return data;
  } catch (error: any) {
    console.error("Network or parsing error:", error.message);
    return null;
  }
}

export async function createFile(
  apiKey: string,
  appId: string,
  path: string,
  content: string,
): Promise<APIResponse | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/files`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ path, content }),
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

export async function moveFile(
  apiKey: string,
  appId: string,
  oldPath: string,
  newPath: string,
): Promise<APIResponse | null> {
  try {
    const response = await fetch(
      `https://sharcloud.app/api/apps/${appId}/files`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ path: oldPath, new_path: newPath }),
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

export async function deleteFile(
  apiKey: string,
  appId: string,
  path: string,
): Promise<APIResponse | null> {
  try {
    const response = await fetch(
      `https://shardcloud.app/api/apps/${appId}/files/${path}`,
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

    if (response.status === 400 || response.status === 500) return data.error;

    return data;
  } catch (error: any) {
    console.error("Network or parsing error:", error.message);
    return null;
  }
}
