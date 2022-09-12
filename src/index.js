/**
 * const,letなどの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能。（違う値を入れることができる）
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能。
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let変数は上書き可能。
// val2 = "let変数を上書き";
// console.log(val2);

// //let変数は再宣言不可能!!!
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

//const変数は上書きも再宣言も不可能、一番厳密な書き方〜
// でもオブジェクトとか配列に対してはプロパティの変更できちゃう
// 　↓オブジェクト（キーがあるやつ）
// const val4 = {
//   name: "つね",
//   age: 20
// };
// val4.name = "じっぽ";
// // ↑nameが"つね"から"じっぽ"に変わった。
// val4.addres = "tokyo";
// // ↑addresが追加できた
// console.log(val4);

// // ↓配列（キーがないやつ）
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// // ↑dogがbirdに変更され、monkeyが追加された。
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = "つね";
// const age = "20";
// // 「私の名前は常です。年齢は２０歳です。」

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"));

//アロー関数
// const func2 = (str) => {
//   return str;
// };
// ()を省略することもできる
// const func2 = str => {
//   return str;
// };
// 中の行が一行で終わる単一式の場合、returnと{}を省略して書くことができる
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
const 