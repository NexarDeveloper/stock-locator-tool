# stock-locator-tool

The Stock Locator Tool is a React component that can be embedded into your own project. It provides search functionality to display offers and stock levels for a part, powered by the [Nexar API](https://nexar.com/).

This repository contains three folders: express-app, npm-package, and react-app. The express-app folder is an example of how to fetch Nexar access tokens to provide the tool with. The npm-package folder contains the resources to develop and publish the tool's npm package, so if you aren't internal, you can ignore this folder. Finally, there is the react-app folder which contains the source code for the tool in an example react project.

Please see the rest of the README below to see how to embed the tool into your own project.

## Prerequisites

You must have a Nexar account and application at nexar.com that has the supply scope. The application's client ID and client secret should be used to fetch access tokens that will then be used by the tool.

You must have [node](https://nodejs.org/en/) installed.

## Hosting the Tool locally

This repository is set up with an express app for fetching and caching tokens as well as a react app that displays the Stock Locator tool using the token to query the Nexar API. To start hosting the tool locally you will need to clone the repository using the following command:

```
gh repo clone NexarDeveloper/stock-locator-tool
```

### Starting up the express app

You will need to input your Nexar client ID and secret into the app. This client ID and secret must be from a Nexar app that has the supply scope. You can do this on line 7 of stock-locator-tool/express-app/index.js.

In the `express-app` folder use the command `node index.js` to start up the app.

### Starting up the react app

If you aren't already set up with react, in the folder `stock-locator-tool/react-app`, you will need to use the following commands: `npm install -g create-react-app` and `npm install --save react react-dom`

Then to install the dependencies required for the tool you can use the command:

```
npm i --save-dev @types/styled-components @types/country-list @types/date-fns @types/react-highlight-words @types/webfontloader @apollo/client
```

Once all of the dependencies are installed then you can start the react app using the `npm start` command.

## Embedding

There a couple of methods to installing the tool outlined below. The most seamless experience would be to use the NPM package. If you want the most customizable experience I would recommend the "Drag and Drop" method. With this you can then dive into the code to customize as you wish and make any adaptations.

### NPM Package

We have released the tool as an [NPM package](https://www.npmjs.com/package/@altiumnexar/stock-locator-tool). To install the package, use the command `npm i @altiumnexar/stock-locator-tool`. Then you can import `StockLocatorTool` into your project.

### Drag and Drop

In `stock-locator-tool/react-app/src` you will find the folder `nexar-stock-locator-tool` which contains all of the code for the component. To embed the tool simply drag and drop this folder into your project and install any missing dependencies - these are listed at the bottom of the page.

## Parameters

_searchParameters_ is a mandatory attribute for the tool and includes your preferences for the tools search functionality as well as the access token. The only mandatory field here is the `token` as without it the tool won't be functional. Listed below are the fields:

| Parameter              | Type    | Description                                                                | Default | Required? |
| ---------------------- | ------- | -------------------------------------------------------------------------- | ------- | --------- |
| token                  | string  | Access token for Nexar API                                                 | N/A     | mandatory |
| authorizedOnly         | boolean | Whether to only return offers from authorized dealers                      | false   | optional  |
| country                | string  | Your user's ISO-3166-1 alpha-2 country code                                | US      | optional  |
| currency               | string  | Your user's ISO-4217 currency code                                         | USD     | optional  |
| enableManufacturerLink | boolean | Whether to enable direct-to-manufacturer links for parts in search results | false   | optional  |
| expandOfferTable       | boolean | Whether to expand offer table by default                                   | false   | optional  |
| inStockOnly            | boolean | Whether to only return parts that have stock available                     | false   | optional  |
| limit                  | number  | How many parts to return in search results                                 | 10      | optional  |
| q                      | string  | Default query to search for on page load                                   | N/A     | optional  |

**Note:** for the parameter "enableManufacturerLink", if true and there is a direct-to-manufacturer pdp link in the part data, manufacturer name and mpn will link directly to the manufacturer pdp. If true and there is NO direct-to-manufacturer pdp link, manufacturer name and mpn will not link to anywhere. If false, manufacturer name and mpn will link directly to Octopart pdp.

```
searchParameters = {{
    token: string,
    authorizedOnly?: boolean,
    country?: string,
    currency?: string,
    enableManufacturerLink?: boolean,
    expandOfferTable?: boolean,
    inStockOnly?: boolean,
    limit?: number,
    q?: string,
}}
```

### Token

Nexar uses the OAuth2 authorization flow for API access. To query the API a valid access token must be provided. For development and testing, you can generate an access token in the [Nexar Portal](https://portal.nexar.com/) by going to Applications -> Details (for your app) -> Access Token -> Generate Token.

For production applications of the tool, tokens should be automatically fetched as needed. These tokens are valid for 24 hours and should be cached accordingly. We have an example in the folder `express-app` which provides tokens on localhost:5000 which are then fetched by the example site in the folder `react-app`.

The endpoint for fetching access tokens is https://identity.nexar.com/connect.token. You must pass in the `client_credentials` grant type and also your applications client id and client secret.

## Styling

Without diving into the code or for use with the NPM package there is a `styles` attribute on the `StockLocatorTool` component for customization. Without this attribute the tool will default to a light theme and the _Inter_ font. The fields are listed below:

| Field        | Type              | Description                                                                                                                                                                          | Default |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| font         | string            | Global font for all components in the tool. It will fetch the font using webfontloader                                                                                               | Inter   |
| theme        | "light" or "dark" | There are two pre-made themes, light and dark                                                                                                                                        | light   |
| customColors | incomingColors    | If you would prefer to customize the tool further than one of the themes you can use this field <br> to pass in your custom colors. The sub-fields of this field are outlined below. | N/A     |

```
styles = {{
    font?: string,
    theme?: "light" | "dark",
    customColors?: IncomingColors,
}}
```

| Field                | Type   | Description                                                          |                | Required? |
| -------------------- | ------ | -------------------------------------------------------------------- | -------------- | --------- |
| background           | string | Background color of the whole tool                                   | N/A            | mandatory |
| tint                 | string | Color for borders and other tints                                    | N/A            | mandatory |
| text                 | string | Color for all text                                                   | N/A            | mandatory |
| button               | string | Color for buttons                                                    | N/A            | mandatory |
| buttonSecondary      | string | Color for button text and border                                     | N/A            | mandatory |
| row1                 | string | Color for one row of the offer tables                                | N/A            | mandatory |
| row2                 | string | Color for the other row of the offer tables                          | N/A            | mandatory |
| searchFormBackground | string | Background color of the form containing the search box and dropdowns | background     | optional  |
| highlight            | string | Color for the mpn match highlighting                                 | partHeaderText | optional  |
| partHeaderBackground | string | Background color for the header of each returned part                | background     | optional  |
| partHeaderMpn        | string | Color for the mpn text in a part's header                            | partHeaderText | optional  |
| partHeaderText       | string | Color for the text in a part's header                                | text           | optional  |
| tableHeaderText      | string | Color for the text of an offer table's header                        | text           | optional  |
| keyText              | string | Color for the text of prices and stock                               | text           | optional  |

```
customColors = {{
    background: string,
    tint: string,
    text: string,
    button: string,
    buttonSecondary: string,
    row1: string,
    row2: string,
    searchFormBackground?: string,
    highlight?: string,
    partHeaderBackground?: string,
    partHeaderMpn?: string,
    partHeaderText?: string,
    tableHeaderText?: string,
    keyText?: string,
}}
```

If you would like to customize the tool further to your liking, it uses [styled-components](https://styled-components.com/). Within the `nexar-stock-locator-tool/components` folder you can find all the components for the tool. At the highest level are files such as `StockLocatorTool.tsx`, `searchForm.tsx` or `searchResults.tsx`. Then going into the `part` folder you can find the components for the offers tables.

The final attribute on the `StockLocatorTool` component is `hideColumns`. Here you can easily hide certain columns from the offers tables. Each field is a boolean that will default to false, if you wish to hide a column, simply set the field corresponding to the column you want to hide to "true". Here's an example showing all fields:

```
hideColumns={{
    isAuthorized: false,
    distributor: false,
    sku: false,
    stock: false,
    moq: false,
    cta: true,
    currency: true,
    price1: false,
    price10: false,
    price100: false,
    price1000: false,
    price10000: false,
    updated: false,
}}
```

### Tool Dependencies

[country-list](https://www.npmjs.com/package/country-list), [date-fns](https://www.npmjs.com/package/date-fns), [react-highlight-words](https://www.npmjs.com/package/react-highlight-words) and [styled-components](https://www.npmjs.com/package/styled-components)
