import { promises as fs, statSync } from "node:fs";

export const hasPath = async (path: string | string[]): Promise<boolean> => {
  try {
    if (Array.isArray(path)) {
      for (const p of path) {
        await fs.stat(p);
      }
    } else {
      await fs.stat(path);
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const hasPathSync = (path: string | string[]): boolean => {
  try {
    if (Array.isArray(path)) {
      for (const p of path) {
        statSync(p);
      }
    } else {
      statSync(path);
    }
    return true;
  } catch (e) {
    return false;
  }
};
