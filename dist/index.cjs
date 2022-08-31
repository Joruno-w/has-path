'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const node_fs = require('node:fs');

const hasPath = async (path) => {
  try {
    if (Array.isArray(path)) {
      for (const p of path) {
        await node_fs.promises.stat(p);
      }
    } else {
      await node_fs.promises.stat(path);
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
        node_fs.statSync(p);
      }
    } else {
      node_fs.statSync(path);
    }
    return true;
  } catch (e) {
    return false;
  }
};

exports.hasPath = hasPath;
exports.hasPathSync = hasPathSync;
