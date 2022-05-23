import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const configFile = "cypress/tsconfig.json";

export default {
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile,
      }),
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader",
            options: {
              // Override: https://github.com/cypress-io/cypress/blob/aae90bbbe06fc2d4de4b14f5b724b254731f9065/packages/server/lib/util/ts-node-options.js#L9-L15
              transpileOnly: true,
              compilerOptions: {
                module: "CommonJS",
                esModuleInterop: true,
              },
            },
          },
        ],
      },
    ],
  },
};
