# React Practice TODO LIST STEP-01
todoリストを作って基礎理解

## ソース参考元
https://qiita.com/rioc/items/8723c236e10d989e827d

## 学習ポイント
### 基礎理解
- create-react-appでの環境構築
- reactの基本構造
- props（引数）/ state（状態）/ key
   - props（引数）: 不変な値、参照のみでここに値を直接変更はせず、読み取り専用。
   - state（状態）: 可変にしたいプロパティを指定。stateの更新はsetStateでおこなう、setStateをrenderメソッド内で呼んではいけない。
   - key: どの要素が追加、変更、削除されたのかReactが識別するのに役立つ。配列内の項目に識別の安定性を持たせるために、各項目にkeyを与えるべきである。
- jsxの記述の基本

*参考サイト*
> https://kenjimorita.jp/imadakarawakattareact/
> https://qiita.com/kerochelo/items/31fd5a93c23ea4deee18#key
> http://www.tohoho-web.com/ex/react.html#jsx

*寄り道*
よくあるTodoアプリのfilterメソッドを用いた削除
>https://qiita.com/Abbiscuit/items/de2a195f6e73a7c05fda