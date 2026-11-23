function setOptionalText(fieldId, textId, value) {
  const field = document.getElementById(fieldId);
  const text = document.getElementById(textId);
  const hasValue = typeof value === "string" && value.trim().length > 0;
  field.hidden = !hasValue;
  text.textContent = hasValue ? value : "";
}

function openFoodModal(item, categoryName) {
  const modal = document.getElementById("food-modal");
  const dialog = modal.querySelector(".modal__dialog");
  const image = document.getElementById("modal-image");
  const fallback = modal.querySelector(".modal__fallback");
  const price = document.getElementById("modal-price");
  const previousFocus = document.activeElement;
  const name = item.name.trim();

  document.getElementById("modal-title").textContent = name;
  document.getElementById("modal-category").textContent = categoryName || "";
  price.hidden = !item.price;
  price.textContent = item.price ? `Rs. ${item.price}` : "";
  setOptionalText("modal-description-field", "modal-description", item.description);
  setOptionalText("modal-preparation-field", "modal-preparation", item.preparation);
  setOptionalText("modal-serving-field", "modal-serving", item.serving);

  const ingredientsField = document.getElementById("modal-ingredients-field");
  const ingredientsList = document.getElementById("modal-ingredients");
  ingredientsList.replaceChildren();
  const ingredients = Array.isArray(item.ingredients) ? item.ingredients.filter(Boolean) : [];
  ingredientsField.hidden = ingredients.length === 0;
  ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    ingredientsList.append(listItem);
  });

  image.alt = name;
  image.hidden = true;
  image.onload = null;
  image.onerror = null;
  image.removeAttribute("src");
  fallback.hidden = false;
  if (item.image) {
    image.onload = () => { fallback.hidden = true; };
    image.onerror = () => { image.hidden = true; };
    image.hidden = false;
    image.src = item.image;
  }

  const message = `Hello Rizwan Foods, I would like to order ${name}.`;
  document.getElementById("modal-order").href = `https://wa.me/923432708942?text=${encodeURIComponent(message)}`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  const closeButton = modal.querySelector(".modal__close");

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", handleModalKeydown);
    if (previousFocus && typeof previousFocus.focus === "function") previousFocus.focus();
  };

  const handleModalKeydown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(dialog.querySelectorAll("a[href], button:not([disabled])"));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!modal.contains(document.activeElement)) {
      event.preventDefault();
      first.focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  document.addEventListener("keydown", handleModalKeydown);
  modal.querySelectorAll("[data-modal-close]").forEach((control) => {
    control.onclick = closeModal;
  });
  window.requestAnimationFrame(() => {
    if (modal.classList.contains("is-open")) closeButton.focus();
  });
}

window.openFoodModal = openFoodModal;
