function checkPassword() {
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");

  if (password.length < 6) {
    result.textContent = "Weak: Password is too short.";
    result.style.color = "red";
  } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[\W]/.test(password)) {
    result.textContent = "Medium: Add numbers, symbols, uppercase letters.";
    result.style.color = "orange";
  } else {
    result.textContent = "Strong Password!";
    result.style.color = "green";
  }
}

function submitQuiz() {
  const answers = document.querySelectorAll('input[type="radio"]:checked');
  let score = 0;

  answers.forEach(ans => {
    if (ans.value === "correct") {
      score++;
    }
  });

  document.getElementById("quizResult").textContent = `Your Score: ${score}/2`;
  return false; // prevent page refresh
}
