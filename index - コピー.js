const question = "ゲームしよう、最も売れたゲーム機は次の内どれ？";
const answers = ["スーパーファミコン",
    "プレーステーション２",
    "ニンテンドースイッチ",
    "ds",
];

let buttonindex = 0;
let buttonLenguth = $button.buttonLenguth;
while(buttonindex < buttonLenguth){
    $button[buttonindex].textContent=answers[buttonindex]
    buttonindex++;
}


const correct = "スーパーファミコン";
console.log();
document.getElementById("js-question").textContent= question;

const $button = document.getElementsByTagName("button");



//クリックされた正解を表示
$button[0].addEventListener("click", () => {
if (correct === $button[0].textContent) {
window.alert("正解！");    
} else {
 window.alert("0不正解!") ;  
}
});
$button[1].addEventListener("click", () => {
    if (correct === $button[1].textContent) {
    window.alert("正解！");    
    } else {
     window.alert("1不正解!") ;  
    }
    });

    $button[2].addEventListener("click", () => {
        if (correct === $button[2].textContent) {
        window.alert("正解！");    
        } else {
         window.alert("2不正解!") ;  
        }
        });

        $button[3].addEventListener("click", () => {
            if (correct === $button[3].textContent) {
            window.alert("3正解！");    
            } else {
             window.alert("3不正解!") ;  
            }
            });