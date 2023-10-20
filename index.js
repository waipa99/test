const question = "ゲームしよう、最も売れたゲーム機は次の内どれ？";
const answers = ["スーパーファミコン",
    "プレーステーション２",
    "ニンテンドースイッチ",
    "ds",
];
const correct = "ds";



const $button = document.getElementsByTagName("button");

const setupQuiz = () => {
    document.getElementById("js-question").textContent= question;
    let buttonindex = 0;
    let buttonLenguth = $button.length;
    while(buttonindex < buttonLenguth){
        $button[buttonindex].textContent=answers[buttonindex];
        buttonindex++;
    }
};

setupQuiz();


//クリックされた正解を表示
$button[0].addEventListener("click", (e) => {
    console.log(e);
if (correct === e.target.textContent) {
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