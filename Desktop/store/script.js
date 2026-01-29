const $ = (s) => document.querySelector(s);

$('#toCatalog').addEventListener('click', (e) => {
  e.preventDefault();
  $("#products").scrollIntoView({ behavior: "smooth" });
});

const modal = $('#modal');
const modalTitle = $('#modalTitle');
const modalPrice = $('#modalPrice');
const modalCloseBtn = $('#modalCloseBtn');
const modalOverlay = $('#modalOverlay');

function openModal(name, price) {
  if (!modal) return;
  if (modalTitle) modalTitle.textContent = name;
  if (modalPrice) modalPrice.textContent = price;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

document.querySelectorAll('.product').forEach((card) => {
card.addEventListener('click', () => {
    const name = card.dataset.name || card.querySelector(".product__name")?.textContent || "Товар";
    const price =
      card.dataset.price || card.querySelector(".product__price")?.textContent || "—";

    openModal(name, price);
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