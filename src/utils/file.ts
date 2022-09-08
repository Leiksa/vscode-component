import { existsSync, mkdirSync, writeFileSync } from "fs";

/**
 * Creates a folder for a given path & check if it already exist
 * @param path - path to the folder
 * @param component - component name to be created (useful for error)
 */
export const createFolder = (path: string, component: string) => {
  if (existsSync(path)) {
    throw new Error(`Folder ${component} already exists`);
  }
  mkdirSync(path);
};

/**
 * Creates a file for a given path & check if it already exist
 * @param path - path to the file
 * @param template - template to generate file
 */
export const createFile = (path: string, template: string) => {
  if (existsSync(path)) {
    throw new Error(`File ${path} already exists`);
  }
  writeFileSync(path, template);
};
