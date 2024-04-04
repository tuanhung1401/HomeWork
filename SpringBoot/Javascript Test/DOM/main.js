const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

const quiz = document.querySelector(".quiz-container");

//Tạo phần tử HTML cho câu hỏi
const render = (arr) => {
    quiz.innerHTML = "";
    let html = "";
    for (let i = 0; i < arr.length; i++) {
        let htmlans = ""
        for (let j = 0; j < arr[i].answers.length; j++) {
            htmlans +=
                `
            <div class="quiz-answer-item">
                    <input type="radio" name="${arr[i].id}" value = "${arr[i].answers[j]}">
                    <label>${arr[i].answers[j]}</label>
                </div>
            `
        }

        html +=
            `
        <div class="quiz-item">
            <h3>Câu ${arr[i].id} : ${arr[i].question}</h3>
            <div class="quiz-answer"> 
        
        ${htmlans}
   
                </div>
            </div>
        </div>
        `

    }
    quiz.innerHTML = html;
}

//Trả về một giá trị random 
render(quizes);
const getRandom = (max) => {
    return Math.floor(Math.random() * max)
}

const btn = document.getElementById("btn");

//Chọn kết quả ngẫu nhiên
const randomAns = (arr) => {
    //Lặp qua các object trong quizes và chọn đáp án ngẫu nhiên
    for (let i = 0; i < arr.length; i++) {
        let randomNumber = getRandom(arr[i].answers.length);
        //Chọn phần tử HTML tương ứng với đáp án đã chọn rồi đánh dấu input radio tương ứng 
        let ans = quiz.querySelector(`input[name = "${i + 1}"][value = "${arr[i].answers[randomNumber]}"]`)
        ans.checked = true;
    }
};

btn.addEventListener("click", () => { randomAns(quizes) });