import { join } from "path";
import { TextDocumentShowOptions, window, workspace } from "vscode";
import {
  indexStoriesTemplate,
  indexTemplate,
  stylesTemplate,
} from "../templates/wttj-front";
import { createFile, createFolder } from "../utils/file";

interface Params {
  fsPath: string;
  component: string;
}

export const wttjFront = async ({ fsPath, component }: Params) => {
  const path = join(fsPath, component);

  createFolder(path, component);

  const TEMPLATES = [indexStoriesTemplate, stylesTemplate, indexTemplate];

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
