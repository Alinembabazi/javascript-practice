document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     SUBSCRIBE FORM
  ===================== */
  const form = document.getElementById("subscribe-form");
  const message = document.getElementById("subscribe-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.querySelector("input").value.trim();
    const valid = /^\S+@\S+\.\S+$/.test(email);

    message.classList.remove("hidden");
    message.classList.toggle("text-green-600", valid);
    message.classList.toggle("text-red-600", !valid);
    message.textContent = valid
      ? "Successfully subscribed!"
      : "Please enter a valid email.";

    if (valid) form.reset();
  });


  /* =====================
     MODAL
  ===================== */
  const modal = document.getElementById("subscribe-modal");

  document.getElementById("open-modal")
    .addEventListener("click", () => {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });

  document.getElementById("close-modal")
    .addEventListener("click", () => {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  });


  /* =====================
     REPLY TOGGLE
  ===================== */
  document.querySelectorAll(".reply-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest("article")
         .querySelector(".reply-wrapper")
         .classList.toggle("hidden");
    });
  });


  /* =====================
     LIKE SYSTEM
  ===================== */
  document.querySelectorAll(".like-btn").forEach((btn, i) => {

    const id = `article-${i}`;
    const icon = btn.querySelector("i");
    const text = btn.querySelector(".like-text");
    const countEl = btn.querySelector(".like-count");

    let data = JSON.parse(localStorage.getItem(id)) || {
      count: parseInt(countEl.textContent),
      liked: false
    };

    function updateUI() {
      countEl.textContent = data.count;
      btn.classList.toggle("bg-gray-100", data.liked);
      icon.className = data.liked ? "fa fa-check" : "fa fa-thumbs-o-up";
      text.textContent = data.liked ? "Liked" : "Like";
    }

    updateUI();

    btn.addEventListener("click", () => {
      data.liked = !data.liked;
      data.count += data.liked ? 1 : -1;
      localStorage.setItem(id, JSON.stringify(data));
      updateUI();
    });

  });

});
