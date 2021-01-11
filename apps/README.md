# React Practice Redux STEP-01
カウンターを作成してReduxのActions,Reducers,Storesの基本を理解する

## ソース参考元
https://qiita.com/rspmharada7645/items/6aad2cba81bbc6c84797

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
  - Stateを保持する
  - Storeは受け取ったActionを読み取って、Stateを変更

*参考サイト*
>https://future-architect.github.io/articles/20200429/  
>https://www.yoheim.net/blog.php?q=20191201
>https://www.wakuwakubank.com/posts/703-react-redux/  
>https://qiita.com/kitagawamac/items/8f8d047e5cbd87399ccb  
>https://qiita.com/kitagawamac/items/7fdce94912d6d9c801f8  
>https://qiita.com/kitagawamac/items/377787c24efac64f2495  
>https://qiita.com/macotok/items/ddbebfbb7dd3d834d86e

*寄り道*
- ReactのFragment
[ReactのFragment](https://qiita.com/kaba/items/b681ffe3412a9af32f92)