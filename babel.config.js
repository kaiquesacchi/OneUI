module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          root: ["./"],
          alias: {
            "@atoms": "./src/components/atoms",
            "@buttons": "./src/components/buttons",
            "@focusBlock": "src/components/focusBlock",
            "@layouts": "src/components/layouts",
            "@toasts": "src/components/toasts",
          }
        }
      ]
    ]
  };
};
