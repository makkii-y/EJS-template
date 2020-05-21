# EJS-template
【EJS使い方】簡易CMSのようなものをつくる -ソースコード

## Qiitaに詳細記事を載せています
https://qiita.com/makkii/items/532ce7ff4b3555483f63

## 必要なパッケージ
- gulp（gulpを動かすのに必要な本体）
- gulp-ejs（EJSをコンパイルするもの）
- gulp-rename（EJSをコンパイルして.htmlの形式にリネームするときに使用）
- browser-sync（ローカルサーバーの立ち上げ）
- gulp-plumber（エラー時の強制終了を防止）
- gulp-notify（エラー発生時にデスクトップ通知する）

`npm ci`
すべてインストールできます。

## gulpタスク実行コマンド
`npx gulp`
`npx gulp Ejs`

npx gulpはEJSのコンパイルとブラウザプレビューができます。
npx gulp EjsではEJSのコンパイルだけしてくれます。
