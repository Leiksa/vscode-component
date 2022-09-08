import { join } from "path";
import { TextDocumentShowOptions, window, workspace } from "vscode";
import {
  indexTemplate,
  indexTestTemplate,
  stylesTemplate,
  rollupTemplate,
  tsconfigTemplate,
  npmIgnoreTemplate,
  readMeTemplate,
} from "../templates/welcome-ui";
import { createFile, createFolder } from "../utils/file";

interface Params {
  fsPath: string;
  component: string;
}

export const welcomeUI = async ({ fsPath, component }: Params) => {
  const path = join(fsPath, component);

  createFolder(path, component);

  const TEMPLATES = [
    npmIgnoreTemplate,
    rollupTemplate,
    tsconfigTemplate,
    readMeTemplate,
    indexTestTemplate,
    stylesTemplate,
    indexTemplate,
  ];

  const textDocumentShowOptions: TextDocumentShowOptions = {
    preserveFocus: false,
    preview: false,
  };

  for (const { fileName, template, shouldOpen } of TEMPLATES) {
    createFile(join(path, fileName), template(component));

    if (!shouldOpen) {
      continue;
    }

    /**
     * Open the created files which has the params shouldOpen
     */
    const document = await workspace.openTextDocument(join(path, fileName));
    await window.showTextDocument(document, textDocumentShowOptions);
  }
};
