const quiz =  [
{
    question : "ゲームしよう、最も売れたゲーム機は次の内どれ？1",
    answers :[
        "スーパーファミコン11",
        "プレーステーション２1",
        "ニンテンドースイッチ11",
        "ds1"
    ],
    correct:"ds1"
},{
    question : "ゲームしよう、最も売れたゲーム機は次の内どれ？2",
    answers :[
        "スーパーファミコン2",
        "プレーステーション２2",
        "ニンテンドースイッチ22",
        "ds2"
    ],
    correct:"ds2"
},{
    question : "ゲームしよう、最も売れたゲーム機は次の内どれ3？",
    answers :[
        "スーパーファミコン3",
        "プレーステーション２3",
        "ニンテンドースイッチ3",
        "ds3"
    ],
    correct:"ds3"
}
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttoLenght = $button.length;



const setupQuiz = () => {
    document.getElementById("js-question").textContent= quiz[quizIndex].question;
    let buttonindex = 0;
    let buttonLenguth = $button.length;
    while(buttonindex < buttonLenguth){
        $button[buttonindex].textContent=quiz[quizIndex].answers[buttonindex];
        buttonindex++;
    }
};

setupQuiz();


//クリックされた正解を表示


const clickHandler = (e) =>{
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！"); 
        score++;
        } else {
         window.alert("1不正解!") ;  
        }    

        quizIndex++;
        
        if(quizIndex < quizLength){
            //問題数があればこちらを実行
            setupQuiz();

        }else{
            //問題数がなければこちらを実行
            window.alert("終了! あなたの正解数は"+ score + "/" + quizLength + "です！");

        }
    };

    let handlerIndex = 0;
    const buttonLength = buttoLenght; 
    while (handlerIndex < buttonLength) {
            $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
            });
        handlerIndex++;
    }


