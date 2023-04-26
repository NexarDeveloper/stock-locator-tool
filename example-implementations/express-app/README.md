# Example Express App

In this folder you can find an example `express app` that will fetch tokens from the Nexar API and provide them on `localhost:4000`.

## Prerequisites

You must have a [Nexar](nexar.com) account and application that has the supply scope. The application's client ID and client secret should be pasted into the file `index.js` on line 7 where a new instance of the `NexarClient` class is created.

## Start

To start up the app use the command:

```
node index.js
```
