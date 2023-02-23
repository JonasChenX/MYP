const { defineConfig } = require('@vue/cli-service')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3050,
    proxy: {
      '/runoobFttps': { // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
          target: "https://www.runoob.com/", //目标地址，一般是指后台服务器地址
          changeOrigin: true, //是否跨域
          ws: true, //是否代理 websockets
          secure: true, //是否https接口
          pathRewrite: { // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
              '^/runoobFttps': "" 
          }
      },
      "/mockAPI": {
          target: "http://localhost:3000",
          changeOrigin: true,
          secure: false,
          pathRewrite: {
            "^/mockAPI": ""
          }
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        // 配置讀取 *.md文件的規則
        {
          test: /\.md$/,
          use: [
            { loader: "html-loader" },
            { loader: "markdown-loader", options: {} }
          ]
        }
      ]
    },
    plugins: [
      new MonacoWebpackPlugin(),
    ],
  },
  chainWebpack: config => {
    config.plugin("define").tap(definitions => {
      //抓取version
      definitions[0]["process.env"]["PACKAGE_VERSION"] = JSON.stringify(
        require("./package.json").version,
      );
      return definitions;
    });
  },
})
