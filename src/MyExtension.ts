/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/

import { Extension, IModelApp } from "@bentley/imodeljs-frontend";

export class MyExtension extends Extension {
  // Override the _defaultNs to setup a namespace.
  protected _defaultNs = "sample";

  /** Invoked the first time this extension is loaded. */
  public async onLoad(): Promise<void> {
    // Wait for the localization to be loaded
    await this.i18n.getNamespace(this._defaultNs)!.readFinished;

    // Add your initialization code here
    alert(this.i18n.translate(`${this._defaultNs}:Hello`));
  }

  /** Invoked each time this extension is loaded. */
  public async onExecute(): Promise<void> {
    alert(this.i18n.translate(`${this._defaultNs}:HelloAgain`));

    // Add your Extension's code
  }
}

// Register the extension with the extensionAdmin.
// NOTE: The name used here is how the Extension is registered with the Extension server it is hosted on.
IModelApp.extensionAdmin.register(new MyExtension("sample"));
