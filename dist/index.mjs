import { promises, statSync } from 'node:fs';

const hasPath = async (path) => {
  try {
    if (Array.isArray(path)) {
      for (const p of path) {
        await promises.stat(p);
      }
    } else {
      await promises.stat(path);
    }
    return true;
  } catch (e) {
    return false;
  }
};
const hasPathSync = (path) => {
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

export { hasPath, hasPathSync };
