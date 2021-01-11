# React Practice Redux STEP-01
カウンターを作成してReduxのActions,Reducers,Storesの基本を理解する

## ソース参考元
[React + Reduxでカウントアプリを作る](https://qiita.com/rspmharada7645/items/6aad2cba81bbc6c84797)

## 学習ポイント
### Reduxとは何か
> React.jsで使用するstateつまりアプリケーションの状態を管理するフレームワーク
- Actions
  - Actionはアプリケーションからの情報をStoreへ送る為のオブジェクト
  - ActionCreatorsによってActionを生成する
  - Actionをdispatchする
  - Actionは、何を行なうものかを識別するために"type"プロパティを必ず持つ
- Reducers
  - Actionが発生した際に、そのActionに組み込まれているTypeによってどのようにStateを変化させるのかを設定しておく
  - ReducerによってStore内のStateを更新する
  - Reducerは、Actionを受けてStateを変更するためのメソッド
- Stores
  - ReduxではStoreは必ず一つ
  - アプリ内にある全てのStateを管理するための保管庫
  - Storeは受け取ったActionを読み取って、Stateを変更

*参考サイト*
[Reduxを分かりやすく解説してみた](https://future-architect.github.io/articles/20200429/)  
[Reduxの考え方をシンプルに理解しよう](https://www.yoheim.net/blog.php?q=20191201)  
[ReduxのState/Store/Action/Reducer設定まとめ](https://nekorokkekun.hatenablog.com/entry/2019/09/17/181246)  
[Redux(Actions, Reducers, Store)による状態管理](https://www.wakuwakubank.com/posts/703-react-redux)  
[Reduxの基本・Actions](https://qiita.com/kitagawamac/items/8f8d047e5cbd87399ccb)  
[Reduxの基本・Reducers](https://qiita.com/kitagawamac/items/7fdce94912d6d9c801f8)  
[Reduxの基本・Stores](https://qiita.com/kitagawamac/items/377787c24efac64f2495)  
[Reduxのconnectについて](https://qiita.com/macotok/items/ddbebfbb7dd3d834d86e)  

*寄り道*
[ReactのFragment](https://qiita.com/kaba/items/b681ffe3412a9af32f92)  

## 状態管理の選択肢
[Reactのステート管理方法まとめ](https://ics.media/entry/200409/)  
[Reduxが必要なとき/不要なとき](https://techracho.bpsinc.jp/hachi8833/2018_03_13/53183)  

## Reduxのファイル構造
[Ducks というデザインパターン](https://webbibouroku.com/Blog/Article/redux-ducks)  
[React×Reduxのディレクトリ構成にre-ducksパターンを採用すべき理由](https://tech.playground.style/javascript/re-ducks/)  
[React+Reduxで書く時に気をつけていること](https://www.fundely.co.jp/blog/tech/2019/11/20/180045/)


