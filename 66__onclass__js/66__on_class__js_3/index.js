var variableNumber = 1234;
console.log(variableNumber);

var variableText = "Text";
console.log(variableText);

var variableBoolean = true;
console.log(variableBoolean);

var variableNumber = 12345;
console.log(variableNumber);

var variableText = "Text";
console.log(variableText);

var variableBoolean = true;
console.log(variableBoolean);

var variableNumber10 = 10;
var variableNumber20 = 20;
console.log(variableNumber10+variableNumber20);

console.log(variableNumber20-variableNumber10);


console.log(10+20);

console.log(20-10);

console.log(50*2);

console.log(20/2);

console.log("12"+"34");

var boolean = false;
if (boolean) {
  console.log(boolean);
};

var num = 100
if (num == 100) {
  console.log(num);
}

var text = "JavaScript"
if (text == "JavaScript") {
  console.log(text);
}

var num = "100"
if (num == 100) {
console.log(num);
}

var umi = "200"
if (umi == 200) {
console.log(umi);
}

var num = 100
if (num === 100) {
console.log(num);
}

var text = "JavaScript"
if (text === "JavaScript") {
  console.log(text);
}

var boolean = false;
if(boolean){
  console.log("true     ");
  console.log(boolean);
} else {
  console.log("false     ");
  console.log(boolean);
};

/*
1.elseを使用するときの注意点
elseの使用は がある時だけ使用できるので独立して使用はできません。
また 文と の間に処理書いてもエラーとなってしまうので注意してください。

2.JavaScriptで実装した時の確認ポイント
エラーが発生するとコンソールにエラーが表示されているので実装した時は動くかどうかの確
認も勿論ですが、コンソールにエラーを表示してないかも確認しましょう。

*/
/*3.数値型を比較してelseの処理に入る処理を作る*/
var Task__5_3 = false;
if(Task__5_3){
  console.log("trueの処理");
  console.log(Task__5_3);
}
else {
  console.log("falseの処理");
  console.log(Task__5_3);
};

/*4.文字型を比較してelseの処理を作る*/
var str = '花子';
if('太郎' === str) {
    console.log('あなたは太郎さんです！');
}
else {
    console.log('あなたは太郎さんではありません');
}

var str__6_1 = '次郎';
if('太郎' === str__6_1) {
    console.log('あなたは太郎さんです！');
}
else if (str__6_1 == '次郎') {
console.log('次郎');
    console.log('あなたは次郎さんです！');
}
else {
    console.log('あなたは太郎さんではありません');
}

var numA = 10;
var numB = 40;
if (numA == 20 && numB == 40) {
  console.log("ANDの条件と一致した処理");
  console.log(numA == 20 && numB == 40);
} else {
  console.log("ANDの条件と一致しなかったっ処理");
  console.log(numA == 20 && numB == 40);
};

var numA = 10;
var numB = 30;
if (numA == 20 || numB == 40) {
  console.log("ANDの条件と一致した処理");
  console.log(numA == 20 || numB == 40);
} else {
  console.log("ANDの条件と一致しなかったっ処理");
  console.log(numA == 20 || numB == 40);
};

var boolean = true;
if (!boolean) {
  console.log("NOTの条件と一致した処理");
  console.log(boolean);
} else {
  console.log("NOTの条件と一致しなかった処理");
  console.log(boolean);
};

/* Task__7_1 */
var numA = 20;
var numB = 40;
if (numA == 20 && numB == 40) {
  console.log("ANDの条件と一致した処理");
  console.log(numA == 20 && numB == 40);
} else {
  console.log("ANDの条件と一致しなかったっ処理");
  console.log(numA == 20 && numB == 40);
};

/* Task__7_2 */
var numA = 20;
var numB = 40;
if (numA == 20 || numB == 40) {
  console.log("ANDの条件と一致した処理");
  console.log(numA == 20 || numB == 40);
} else {
  console.log("ANDの条件と一致しなかったっ処理");
  console.log(numA == 20 || numB == 40);
};

/* Task__7_3 */
var boolean = true;
if (!boolean) {
  console.log("NOTの条件と一致した処理");
  console.log(boolean);
} else {
  console.log("NOTの条件と一致しなかった処理");
  console.log(boolean);
};

var x = 5
var y = 3
if (x > y) {
console.log("xはyより大きい");
}

var x = 3
var y = 3
if (x >= y) {
console.log("xはyより大きいまたは等しい");
}

var x = 11
var y = 7
if (x > y) {
console.log("xはyより大きい");
}

var x = 11
var y = 7
if (x < y) {
console.log("xはyより小さい");
}

var x = 11
var y = 7
if (x >= y) {
console.log("xはy以上です");
}

var x = 7
var y = 11
if (x <= y) {
console.log("xはy以下です");
}

var boolean = true;
/*var resultText = "";
if (boolean) {
  resultText = "Aの処理"
} else {
  resultText = "Bの処理"
};*/
var resultText = boolean ? "Aの処理" : "Bの処理";
console.log(resultText);


var Task__9_1 = false;
var resultText__9_1 = Task__9_1 ? "Aの処理" : "Bの処理";
console.log(resultText__9_1);

var Task__9_2 = 3;
var resultText__9_2 = Task__9_2 > 5 ? "Aの処理" : "Bの処理";
console.log(resultText__9_2);

var Task__9_3 = 7;
var resultText__9_3 = Task__9_3 < 5 ? "Aの処理" : "Bの処理";
console.log(resultText__9_3);

var Task__9_4 = 9;
var resultText__9_4 = Task__9_4 >= 10 ? "Aの処理" : "Bの処理";
console.log(resultText__9_4);

var Task__9_4_2 = 10;
if (Task__9_4_2 > 10) {
    console.log("10より大きいです");
} else if (Task__9_4_2 <= 10) {
    console.log("10以下(false)の処理");
}
if (Task__9_4_2 >= 10) {
    console.log("10以上(true)の処理");
};

var Task__9_5 = 1;
if (!undefined){
    console.log("変数あり");
}else {
    console.log("変数なし");
};

var Task__9_5_2 = 1;
var resultText__9_5_2 = !undefined ? "変数あり" : "変数なし";
console.log(resultText__9_5_2);

var fruits = ["リンゴ","バナナ","イチゴ"];
console.log(fruits[0]);

var teacher = {
    name: "太郎",
    age: 25,
    subjedt: "国語",
}
console.log(teacher.name);

var teachers = [
    {
        name: "太郎",
        age: 25,
        subjedt: "国語",
    },
    {
        name: "浩司",
        age: 30,
        subjedt: "数学",
    },
    {
        name: "花子",
        age: 26,
        subjedt: "社会",
    }
]
console.log(teachers[2]);

var fruits = ["ぶどう","もも","メロン"];
console.log(fruits[0]);
console.log(fruits[2]);

/*
Task__10_2
key=見出し
value=内容
プロパティー=key+value
*/

var RIOTMUSIC__Meteopolis_member__SUZUNA_NAGIHARA = {
    name: "凪原涼菜",
    theme: "救済",
    VerseDay:"12月31日",
}
console.log(RIOTMUSIC__Meteopolis_member__SUZUNA_NAGIHARA);

var RIOTMUSIC_Blitzwing_member = [
    {
        name: "道明寺ここあ",
        theme: "勇気",
    },{
        name: "芦澤サキ",
        theme: "絆",
    },{
        name: "松永依織",
        theme: "可憐",
    }
]
console.log(RIOTMUSIC_Blitzwing_member[0].name);
console.log(RIOTMUSIC_Blitzwing_member[2].theme);

for (var i = 1; i < 10; i++) {
    console.log("ループ" + i + "回目");
};

var items = ["リンゴ", "バナナ", "イチゴ"];
for (index in items) {
  console.log(items[index]);
};

var teachers = [
    {
        name: "太朗",
        age: 25,
        subject: "国語",
     },{
        name: "浩司",
        age: 30,
        subject: "数学",
    },{
        name: "花子",
        age: 26,
        subject: "社会",
    }
 ]
for (teacher of teachers) {
    console.log(teacher);
};

/*Task__11*/
for (var i = 1; i <= 10; i++) {
    console.log(i + "回目");
};

var fruits = ["ぶどう","もも","メロン"];
for (index in fruits) {
  console.log(fruits[index]);
};

var RIOTMUSIC_member = [
    {
        name: "道明寺ここあ",
        theme: "勇気",
    },{
        name: "芦澤サキ",
        theme: "絆",
    },{
        name: "松永依織",
        theme: "可憐",
    },{
        name: "長瀬有花",
        theme: "憧憬",
    },{
        name: "凪原涼菜",
        theme: "救済",
    },{
        name: "皇美緒奈",
        theme: "慈愛",
    }
 ]
for (member of RIOTMUSIC_member) {
    console.log(member);
};

/*
function showAlert() {
    alert("functionTestが実行されました。")
}
showAlert()
*/

var getText = function () {
return "getTextが実行されたのでこのテキストを返します。"
};
console.log(getText());

var getText__12_0 = function () {
    var text =  "getText__12_0が実行されたのでこのテキストを返します。";
    console.log(text);
};
console.log(getText__12_0);

/*Task__12*/
/*
function showAlert() {
    alert("警告！")
}
showAlert()
*/

var getText__12_2 = function () {
    var text =  "getText__12_2が実行されたのでこのテキストを返します。";
    console.log(text);
};
console.log(getText__12_2);

/*
Task__12_3
家の中（関数fn内）から家の中は参照できるが、家の外（関数fn外）からは家の中を参照できない。
この仕組みのことを「スコープ」という
*/

/*Task__13*/
/*
Task__13_1
var:変数の再代入、再宣言ができる
let:変数の再代入はできるが、再宣言はできない
const:変数の再代入、再宣言ができない

Task__13_2
varを使わない理由
変数の再代入、再宣言が可能な為、何が入っているか分からなくなりやすく、バグが発生しやすい為

Task__13_3
定数とは？
constの事。再代入、再宣言ができない為決まった定数となる。
ただし、配列やオブジェクトの操作は可能。
代入した配列やオブジェクトに新しい要素の追加や、代入した値を削除は可能。
*/

/*Task__14*/
/*
Task__14_1
後で見返した時に分かりやすくする為
複数人で開発する時に統一性を持たせる為

Task__14_2
nav-item

Task__14_3
nav_item

Task__14_4
const addItem = apple
*/

function sumNum(x) {
    const result = x + 1
    console.log(result);
};
sumNum(10);

function sumNum(x, y) {
    const result = x + y
    console.log(result);
};
sumNum(5, 10);

function showText(x) {
    console.log(x);
};
showText(`引数`);
/*
function tomato(price, func) {
    const name = "トマト";
    func(name, price);
};
const price = function price(name, price) {
    console.log(name + "の値段は" + price + "円です。");
};
tomato(100, price);
*/
/*Task__15*/
/*
Task__15_1
プロパティとメソッドの違い
key + value = プロパティ
value部分が関数になっているものをメソッド
全体をオブジェクトという
*/
const Task__15_1 = {
    plusOne: sumNum15_1_1,
    minusTwo: sumNum15_1_2,
    taskText15_1_3: showText15_1_3,
}
console.log(Task__15_1);

function sumNum15_1_1() {
    const result = 10 + 1
    console.log(result);
};

function sumNum15_1_2() {
    const result = 3 - 2
    console.log(result);
};

function showText15_1_3() {
    console.log(`タスク15_1_3`);
};

/*Task__15_2*/
function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  return result
};
console.log(fruit("りんご","150"));

/*Task__15_3*/
function addTax(price, func) {
    // priceは値段
    // funcは実行する関数名 
    console.log(func)
    // 税込み価格を計算して四捨五入して整数にしている(スコープ内でしか参照できません。)
    const taxPrice = Math.round(price * 1.10);
    return taxPrice
}

// トマトの税込み価格をコンソールに表示させる処理
console.log(addTax("100","トマト"));
// 玉ねぎの税込み価格をコンソールに表示させる処理
console.log(addTax("50","玉ねぎ"));


// idで指定したwrapperを取得
const wrapper = document.getElementById("wrapper")
// 挿入するHTML要素
const newBox = `<div class="new-box">new-box要素</div>`

// setTimeoutはJavaScriptが用意している関数です
setTimeout(function () {
    // wrapper要素内先頭にnewBoxに代入されたHTML要素を挿入
    wrapper.insertAdjacentHTML("afterbegin", newBox)
    // wrapper要素の直後にnewBoxに代入されたHTML要素を挿入
    wrapper.insertAdjacentHTML("afterend", newBox)
}, 3000)


// idで指定したparentを取得
const parent = document.getElementById("parent")
// idで指定したchildを取得
const child = document.getElementById("child")

setTimeout(function () {
  // 3秒後に#child要素が削除される
  parent.removeChild(child)
}, 3000)