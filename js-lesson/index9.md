## Web APIを叩いてみよう 実践編
JavaScriptの書き方を学び、Web APIを扱うために必要なデータ構造を学びました。

次はお待ちかねのWeb APIを叩いてみる編です！


### APIとは
まずAPIとは何かを考えてみます。

まずAPIという言葉です。
APIはApplication Programming Interfaceの略です。
英語で見るとなんだか難しそうですね・・・

APIをざっくり説明すると以下となります。
- とある機能を持ったプログラムAがあります。
- プログラムAは自分の機能を公開して、他のプログラムにも使わせてあげることにしました。
- プログラムAは自分の機能を使う場合の手順とデータフォーマットを決めました。これがAPIです。
- APIに対して処理してほしいデータを渡すと、処理結果を戻してくれます。

これ、どこかで見たものに似てませんか？

関数の仕組みとそっくりですよね。
引数と戻り値もあります。

実はAPIも関数の一種と考えることができます。


### Web APIとは
次にWeb APIです。

APIを呼び出す場合、実はいろいろな手順やデータフォーマットがあります。
その中でもWeb技術を利用するタイプのAPIをWeb APIと呼んでいます。

Web APIでは通信の仕組みとしてHTTPを使い、データフォーマットではXMLやJSONを使うことが多いです。

したがってアクセスの際にはURLを利用します。
データの渡し方はHTTPメソッドを使います。

通常、Web APIにはReferenceがありますので
実際にWeb APIを使う場合はReferenceを参照しながら
URL、データフォーマット、HTTPメソッドを選んでください。



#### HTTPメソッドとCRUD
JavaScript入門から離れてしまうので深追いしませんが、
Web APIでよく使われるHTTPメソッドはGET/POST/PUT/DELETEの4つです。

これはデータベースの基本処理であるCRUD（クラッド）と呼ばれる考え方に基づいています。
CRUDはCreate（作成）/Read（読み込み）/Update（更新）/Delete（削除）です。

基本的には以下のイメージで使われますが、
そもそもHTTPメソッドとCRUDは別ものなので完全に一致した使われ方にはなっていないのが現状です。
- GET - Read
- POST - Create
- PUT - Update
- DELETE - Delete

HTTPメソッドやCRUDについて詳しく知りたい人はググって見てください。




### 今回利用するWeb APIについて
今回はJSON Placeholderというサイトを利用します。

[JSON Placeholder](https://jsonplaceholder.typicode.com/)

このサイトは開発者向けにテスト用のWeb APIを公開してくれているサイトです。
いくつかのWeb APIが用意されていて、アクセスするとダミーのJSONデータを返してくれます。

様々なサービスでWeb APIが公開されていますが、それらを利用するためには申し込み手続きを行い、JavaScriptで認証を行うためのプログラム開発が必要になります。

それらは今回のテーマから大きく逸脱してしまうので、今回は無料で使えるJSON Placeholderを使うことにしました。


### データ構造を確認しておこう
まずはブラウザでアクセスして、どんなJSONデータが返ってくるのかを確認しておきましょう。


[ダミーのユーザーデータ](https://jsonplaceholder.typicode.com/users)

今回のデータは全体が配列になっていて、中に複数のJSONが格納されています。

構造としては以下のような形です。
```
[{1つ目のJSON},{2つ目のJSON},{3つ目のJSON},...]
```

一応キャプチャも貼っておきます。

<img src="./img/api2-01.png" width="50%"/>


### JavaScriptでWeb APIを叩いてデータを取得しよう




## まとめ





[< データ構造について](./index8.html) | [HTMLと組み合わせて使ってみよう >](./index10.html)


[0.JavaScriptについて](./index.html)
[1.ブラウザのConsole画面の使い方](./index2.html)
[2.変数の基本](./index3.html)
[3.順次処理](./index4.html)
[4.分岐処理](./index5.html)
[5.反復処理](./index6.html)
[6.関数](./index7.html)
[7.データ構造について](./index8.html)
[8.Web APIを叩いてみよう](./index9.html)
[9.HTMLと組み合わせて使ってみよう](./index10.html)
