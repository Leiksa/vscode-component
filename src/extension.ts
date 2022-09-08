import * as vscode from "vscode";
import { CONSTANTS } from "./utils/constants";
import { validateComponent } from "./utils/validate";

export const activate = (context: vscode.ExtensionContext) => {
  console.log("WTTJ Generator is active");

  let disposable = vscode.commands.registerCommand(
    "wttj-generator.generate",
    async ({ fsPath }) => {
      const projectOptions: vscode.QuickPickOptions = {
        placeHolder: "For which project this component will be created?",
        ignoreFocusOut: false,
      };

      const project = await vscode.window.showQuickPick(
        [CONSTANTS.PROJECTS.WTTJ, CONSTANTS.PROJECTS.WUI],
        projectOptions
      );

      if (!project) {
        return;
      }

      const componentOptions: vscode.InputBoxOptions = {
        prompt: `Component will be created at ${fsPath}`,
        placeHolder: "Enter Component Name",
        validateInput: validateComponent,
        ignoreFocusOut: false,
      };

      const component = await vscode.window.showInputBox(componentOptions);

      if (!component) {
        return;
      }

      switch (project) {
        case CONSTANTS.PROJECTS.WTTJ:
          // wttjTemplate
          break;
        case CONSTANTS.PROJECTS.WUI:
          // wuiTemplate
          break;
      }
    }
  );

  context.subscriptions.push(disposable);
};

// this method is called when your extension is deactivated
export const deactivate = () => {};
