module.exports = {
  baseUrl: './',
  pages: {
    index: {
      // 最初に実行されるファイル名
      entry: 'src/main.js',
      // テンプレートファイル
      template: 'public/index.html',
      // 出力されるファイル名
      filename: 'index.html',
      // タイトルの設定
      // <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page'
    }
    // サブページをせっているするとエントリーページのファイル以外はこちらが参照される。
    // テンプレートファイルは、 `public/subpage.html`
    // public/subpage.htmlがなかったら `public/index.html`が呼び出される。
    // 出力されるファイル名は `subpage.html`となる。
    // subpage: 'src/subpage/main.js'
  },
  css: {
    // 毎回読み込んでおくscssファイルの指定
    loaderOptions: {
      sass: {
        // data: `@import "@/val.scss";`
      }
    }
  },
  configureWebpack: {
    module: {

    },
    resolve: {

    },
    plugins: [
      // plugin
    ]
  }
}
