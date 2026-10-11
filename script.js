let cards = [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language."
    },
    {
        question: "What is CSS?",
        answer: "CSS is used to style web pages."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript makes web pages interactive."
    }
];

let currentIndex = 0;

function displayCard() {
    const question = document.getElementById("question");
    const answer = document.getElementById("answer");

    if (cards.length === 0) {
        question.textContent = "No flashcards available";
        answer.textContent = "";
        answer.hidden = true;
        return;
    }

    question.textContent = cards[currentIndex].question;
    answer.textContent = cards[currentIndex].answer;
    answer.hidden = true;
}

function showAnswer() {
    if (cards.length > 0) {
        document.getElementById("answer").hidden = false;
    }
}

function nextCard() {
    if (cards.length > 0) {
        currentIndex = (currentIndex + 1) % cards.length;
        displayCard();
    }
}

function previousCard() {
    if (cards.length > 0) {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        displayCard();
    }
}

function addCard() {
    const question = document.getElementById("newQuestion").value.trim();
    const answer = document.getElementById("newAnswer").value.trim();

    if (question === "" || answer === "") {
        showMessage("Please enter both question and answer.");
        return;
    }

    cards.push({ question: question, answer: answer });
    currentIndex = cards.length - 1;

    clearInputs();
    displayCard();
    showMessage("Card added successfully!");
}

function editCard() {
    if (cards.length === 0) {
        showMessage("No card to edit. Add a card first.");
        return;
    }

    const question = document.getElementById("newQuestion").value.trim();
    const answer = document.getElementById("newAnswer").value.trim();

    if (question === "" || answer === "") {
        showMessage("Enter the new question and answer first.");
        return;
    }

    cards[currentIndex] = { question: question, answer: answer };

    clearInputs();
    displayCard();
    showMessage("Card updated successfully!");
}

function deleteCard() {
    if (cards.length === 0) {
        showMessage("No cards to delete.");
        return;
    }

    cards.splice(currentIndex, 1);
    currentIndex = Math.max(0, Math.min(currentIndex, cards.length - 1));

    displayCard();
    showMessage("Card deleted successfully!");
}

function clearInputs() {
    document.getElementById("newQuestion").value = "";
    document.getElementById("newAnswer").value = "";
}

function showMessage(message) {
    const messageBox = document.getElementById("message");

    if (messageBox) {
        messageBox.textContent = message;
    } else {
        alert(message);
    }
}

displayCard();
alert("JavaScript is working!");