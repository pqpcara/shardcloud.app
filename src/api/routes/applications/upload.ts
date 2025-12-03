import { UploadResponse } from "../../../types/apps.js";
import fs from "fs";
import path from "path";

export async function upload(
  apiKey: string,
  filePath: string,
): Promise<UploadResponse | null> {
  try {
    const buffer = fs.readFileSync(filePath);
    const fileName = path.basename(filePath);

    const formData = new FormData();
    formData.append(
      "project",
      new File([buffer], fileName, { type: "application/zip" }),
    );

    const response = await fetch("https://shardcloud.app/api/apps", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: formData,
    });

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
