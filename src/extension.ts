import {
  commands,
  ExtensionContext,
  InputBoxOptions,
  QuickPickOptions,
  window,
} from "vscode";
import { CONSTANTS } from "./utils/constants";
import { validateComponent } from "./utils/validate";
import { welcomeUI, wttjFront } from "./projects";

export const activate = (context: ExtensionContext) => {
  console.log("WTTJ Generator is active");

  let disposable = commands.registerCommand(
    "wttj-generator.generate",
    async ({ fsPath }) => {
      /**
       * Ask dev the kind of project he's working on in order to generate the component with the good templates
       */
      const projectOptions: QuickPickOptions = {
        placeHolder: "For which project this component will be created?",
        ignoreFocusOut: false,
      };

      const project = await window.showQuickPick(
        [CONSTANTS.PROJECTS.WTTJ, CONSTANTS.PROJECTS.WUI],
        projectOptions
      );

      /**
       * If no project is selected then we close the prompt
       */
      if (!project) {
        return;
      }

      /**
       * Ask to the dev the component's name he wants to create
       */
      const componentOptions: InputBoxOptions = {
        prompt: `Component will be created at ${fsPath}`,
        placeHolder: "Enter Component Name",
        validateInput: validateComponent,
        ignoreFocusOut: false,
      };

      const component = await window.showInputBox(componentOptions);

      /**
       * If no component's name is given, we close the prompt
       */
      if (!component) {
        return;
      }

      /**
       * Use the good templates based on the project
       */
      try {
        switch (project) {
          case CONSTANTS.PROJECTS.WTTJ:
            await wttjFront({ fsPath, component });
            break;
          case CONSTANTS.PROJECTS.WUI:
            await welcomeUI({ fsPath, component });
            break;
        }
      } catch (error) {
        window.showErrorMessage(
          `Could not create the component ${component}. ${error}`
        );
      }
    }
  );

  context.subscriptions.push(disposable);
};

// this method is called when your extension is deactivated
export const deactivate = () => {};
