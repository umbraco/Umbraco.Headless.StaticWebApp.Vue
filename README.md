# Umbraco Heartcore Vue Boilerplate for Azure Static Web Apps (Preview)

A boilerplate for running a Vue app backed by Umbraco Heartcore on [Azure Static Web Apps (Preview)](https://docs.microsoft.com/en-us/azure/static-web-apps/overview).

All API calls are being proixed through Azure Functions avoiding leaking the project alias and API keys.

## Features

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Vue CLI](https://cli.vuejs.org/)
- [Azure Functions](https://docs.microsoft.com/azure/azure-functions)

## Prerequisites

To run this sample you will need the following tools installed

- [Node.js](https://nodejs.org/en/) 10 or newer
- [Azure Functions](https://docs.microsoft.com/azure/azure-functions/functions-develop-local) for your IDE or CLI
- An [Umbraco Heartcore](https://umbraco.com/heartcore) project.

In order to use the sample you will need an Umbraco Heartcore project with content, media and document types that correspond to those setup in the views and templates of the sample website. You can use `demo-headless` as the project alias to get started with the sample. The Project behind this alias has been used as the source of the sample, so its a good place to start.

## Running on Azure Static Web Apps (Preview)

First you need to create a Static Web App in the [Azure Portal](https://portal.azure.com), you can use this [guide](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=vue#create-a-static-web-app) to help you getting started.

On the build tab add the following configuration

```text
Enter / in the App location box
Enter api in the Api location box
Enter dist in the App artifact location box
```

After the web app has been deployed, you'll need to add the Umbraco Heartcore project alias (the project alias can be found in the [Umbraco Cloud Portal](https://www.s1.umbraco.io)) and optionally an [API key](https://our.umbraco.com/documentation/Umbraco-Heartcore/API-Documentation/#api-keys).

Open the [configuration page](https://docs.microsoft.com/azure/static-web-apps/application-settings#uploading-application-settings) for your Static Web App in the [Azure portal](https://portal.azure.com) and add `UMBRACO__PROJECT_ALIAS` and `UMBRACO__DELIVERY_API_KEY` with their corresponding values.

## Running locally

Before running the application, you need to copy `.env` to `.env.local` and update it with an url to the local Azure Functions, this will typically be `http://localhost:7071/api`.

```env
VUE_APP_UMBRACO__API=http://localhost:7071/api
```

Next you need to add a new file in the `api` folder named `local.setting.json` with the following content

```json
{
  "IsEncrypted": false,
  "Values": {
    "UMBRACO__DELIVERY_API_KEY": "<api-key>",
    "UMBRACO__PROJECT_ALIAS": "<project-alias>"
  }
}
```

`<project-alias>` should be replaced with your Umbraco Heartcore project alias.

`<api-key>` should be replaced with an API key, if API protection is not enabled then the line can be removed.

### Installation

To install dependencies, run the following command

```bash
> npm install
```

### Usage

Run the following command to start the site

```bash
> npm run serve
```

This will start a dev webserver listening on `http://localhost:8081`

### Start the API

If you've installed the Azure Functions Core Tools then run the following command in the `api` folder to start the API

```bash
> func start
```
