const { generate } = require("@graphql-codegen/cli");

(async () => {
  await generate({
    schema: "https://api.nexar.com/graphql",
    documents: "./src/**/*.graphql",
    generates: {
      "./src/modules/graphql/generated.ts": {
        plugins: [
          "typescript",
          "typescript-operations",
          "typescript-react-apollo",
        ],
        config: {
          scalars: {
            Long: "number",
            DateTime: "string",
          },
          maybeValue: "T | undefined",
        },
      },
    },
  });
})();
