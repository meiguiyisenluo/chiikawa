import { getAll } from "@vercel/edge-config";
import { cache } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type EdgeConfig = Record<string, any>;

let cachedConfig: EdgeConfig = {};
let isConfigLoading = false;

export const getEdgeConfigOnce: () => Promise<EdgeConfig> = cache(async () => {
  if (isConfigLoading) {
    console.log("🔄 Using cached Edge Config...");
    return cachedConfig;
  }

  try {
    console.log("🔄 Fetching Edge Config...");
    cachedConfig = await getAll();
    isConfigLoading = true; // 设置加载状态为 true
    return cachedConfig;
  } catch (err) {
    console.error("⚠️ Failed to load Edge Config:", err);
    cachedConfig = {}; // fallback 防止后续报错
    return cachedConfig;
  }
});
