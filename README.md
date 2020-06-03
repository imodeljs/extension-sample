# iModel.js Example Extension

Copyright © Bentley Systems, Incorporated. All rights reserved.

An example iModel.js Extension that demonstrates the basic setup for an [Extension](https://imodeljs.org/learning/frontend/extensions/).

## Development Setup

1. Install and build the Extension

    ```sh
    npm install
    npm run build
    ```

1. Setup local server to serve out the Extension for loading into an iModel.js App

    ```sh
    # Create the folder to host the Extension
    mkdir -p ./lib/imjs_extensions/sample

    # Link the output of the build step above to the new folder
    cp -r ./lib/extension/ ./lib/imjs_extensions/sample/

    # Setup a server hosting the Extension from "localhost:5000"
    npx serve --cors ./lib
    ```

## Contributing

[Contributing to iModel.js](https://github.com/imodeljs/imodeljs/blob/master/CONTRIBUTING.md)
