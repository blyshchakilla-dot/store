const $ = (s) => document.querySelector(s);

$('#toCatalog').addEventListener('click', (e) => {
  e.preventDefault();
  $("#products").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll('.product').forEach((card) => {
card.addEventListener('click', () => {
    const name = card.dataset.name || card.querySelector(".product__name")?.textContent || "Товар";
    const price =
      card.dataset.price || card.querySelector(".product__price")?.textContent || "—";

    alert(`${name}\nЦіна: ${price}`);
  });
});

$('#callBtn').addEventListener('click', () => {
  const input = $('#phone');
  const msg = $('#ctaMsg');
if (!input || !msg) return;

const digits = (input.value || "").replace(/\D/g, "");
if (digits.length < 10) {
    msg.textContent = "❌ Введіть номер (мінімум 10 цифр)";
    return;
  }

  msg.textContent = `✅ Дякуємо! Ми зателефонуємо: ${input.value}`;
  input.value = "";
});