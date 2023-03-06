# Nexar Stock Locator Tool NPM Package

In this folder is all of the code for our [NPM Package](https://www.npmjs.com/package/@altiumnexar/stock-locator-tool). Please see the [repositories README](https://github.com/NexarDeveloper/nexar-gpa-tool) for more information on the tool.

## Development

You will need to be logged in to NPM and to be a member of the [altiumnexar](https://www.npmjs.com/settings/altiumnexar/packages). To login on the command line use the following command.

```
npm login
```

Once the appropriate changes have been made use the following command which will make a fresh build of the package into the `dist` folder.

```
npm run build
```

Then switch the version you are working on to the next version number in the format 1.0.0 using the following command.

```
npm version 1.0.0
```

Then to publish the newly built package use the following command.

```
npm publish --access public
```
