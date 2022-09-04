/*
インターフェース
「哺乳類⊇人間∋ペリー」のように、人間が認識する世界の階層構造の末端には実体(モノ)があり、
それより上層にあるものは全て概念。
「接点」を表す言語。「物事の境界となる部分と、その境界でのプロトコル」を指す。
概念的に共通化した部品と機能の集まり(もしくは操作の集まり)のこと。

予想
ある概念があってそれより階層構造的に1個下の概念との接点をプログラミングで
いうインターフェースと呼ぶのではないか。より下の概念や実体を実装するために
必要な最低限の要素の集まり(or 共通した部品と機能の集まり)。
階層構造を持つためには概念的に共通した部分を階層構造敵に下の概念に継承させないと、階層構造
とは呼べないと思う。逆に言うと下の概念が上の概念のもつ特徴とか、要素とか、機能とかを持っていないといけない。
だからここでいうインターフェースは上と下の概念の間に位置するのではなくて、上の概念が持っているものになる。
継承させるためには上の階層と下の階層の接点が必要。それをインターフェースと呼んでいる。
んじゃないかな。

ノードとは
DOMでは、HTMLの中にあるすべてをノードという単位で区切る。
- 要素ノード： HTMLを表す。DOMでは、HTMLタグのことを要素という。
- 属性ノード： タグ内に記述されている属性を表す。
- テキストノード： タグではない文字の部分を表す。
- ドキュメントノード： HTML文書全体を表す。JSでは、documentオブジェクトがドキュメントノードを参照する。

const element = <h1 title="foo">Hello</h1> react要素の定義。
const container = document.getElementById("root") ノードの取得。
ReactDOM.render(element, container) レンダリング。

こいつは引数からオブジェクトを作成する関数。オブジェクトを作成するに当たって
いくつかの検証が入るらしいが、引数からオブジェクトを作成するだけなのでその関数の出力(結果)
だけを作成しても問題はない。
const element = React.createElement(
    "h1", タグ名
    {title: "foo"}, props(propatys)
    "Hello" children
)

React.createElement関数から作成されるオブジェクト。
typeとpropsの2つのプロパティをもつオブジェクト。
const element = {
    type: "h1", 作成したいDOMノードの種類。document.createElementに渡すタグ名。
    props: { JSX属性のすべてのキーと値を持っている。
        title: "foo",
        children: "Hello",
    },
}

ReactDOM.render()はReactがDOMを変更するところなので自分で書き直していく。

*/

const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello",
    },
}

const container = document.getElementById("root");

// オブジェクトのプロパティにアクセスするのに角括弧を使用すると動的にプロパティを追加できる。
// ドットによる記法だと動的にはプロパティを追加することはできない。
const node = document.createElement(element.type);
console.log(node);
// nodeの属性にはnode.<属性値>で取得できる。
node["title"] = element.props.title;

/*
    (作成する要素の子要素)子用のノードを作成する。子ノードは文字列だけなので、textノードを作成する。
    createTextNode：新しいTextノードを生成する。HTML文字をエスケープできる。
 */
const text = document.createTextNode("");
console.log(text);
// nodeValueはNodeインターフェースのプロパティで、現在のノードの値を返したり設定できたりする。
text["nodeValue"] = element.props.children;

node.appendChild(text);
container.appendChild(node);



// test
// pタグを改行すると改行だけがnodeValueで取れる。
// https://www.javadrive.jp/javascript/dom/index11.html
const test = document.getElementById("test");
console.log("nodeValue", test.firstChild);