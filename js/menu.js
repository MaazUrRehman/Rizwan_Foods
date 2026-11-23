const assetMap = {
  logo: "assets/logo/logo.png",
  categories: {
    appetizers: [
      "assets/menu/appetizers/spring-rolls.jpeg",
      "assets/menu/appetizers/cruch-roll.jpeg",
      "assets/menu/appetizers/cutlets.png",
      "assets/menu/appetizers/roll-samosa.png",
      "assets/menu/appetizers/shami-kabab.png"
    ],
    kadhai: [
      "assets/menu/kadhai/karahi.jpeg",
      "assets/menu/kadhai/white-karahi.jpeg",
      "assets/menu/kadhai/balochi-karahi.png"
    ],
    rice: [
      "assets/menu/rice/biryani.jpeg",
      "assets/menu/rice/nalli-biryani.jpeg",
      "assets/menu/rice/arabian-rice.png",
      "assets/menu/rice/chinese-rice.png",
      "assets/menu/rice/hyderabadi-biryani.png",
      "assets/menu/rice/pulao.png",
      "assets/menu/rice/singaporean-rice.png",
      "assets/menu/rice/white-biryani.png"
    ],
    "asian-specials": [
      "assets/menu/asian-specials/chowmein.png",
      "assets/menu/asian-specials/sashlik.png"
    ],
    pizza: ["assets/menu/pizza/mini-pizza.jpeg"],
    "regional-delights": [
      "assets/menu/regional-delights/handi.jpeg",
      "assets/menu/regional-delights/qarri.jpeg",
      "assets/menu/regional-delights/qorma.jpeg",
      "assets/menu/regional-delights/koftay.png",
      "assets/menu/regional-delights/mixsabzi.png",
      "assets/menu/regional-delights/white-handi.png"
    ],
    "regional-specials": [
      "assets/menu/regional-specials/paye.jpeg",
      "assets/menu/regional-specials/achari-keema.png",
      "assets/menu/regional-specials/chicken-achari.png",
      "assets/menu/regional-specials/namkeen.png",
      "assets/menu/regional-specials/nihari.png"
    ],
    "daal-chawal": [
      "assets/menu/daal-chawal/daal.jpeg",
      "assets/menu/daal-chawal/kari-chawal.jpeg"
    ],
    "sweet-dishes": [
      "assets/menu/sweet-dishes/fruit-custard.jpeg",
      "assets/menu/sweet-dishes/gajjar-halwa.jpeg",
      "assets/menu/sweet-dishes/sweet-chaat.jpeg"
    ]
  }
};

const menuData = [
  {
    id: "appetizers",
    name: "Appetizers",
    description: "A tempting start to your Rizwan Foods meal.",
    items: [
      {
        id: "spring-rolls",
        name: "Spring Rolls",
        image: assetMap.categories.appetizers[0],
        ingredients: ["Spring-roll wrappers", "Cabbage and carrot", "Spring onion and garlic", "Seasoning and soy sauce", "Flour paste and frying oil"]
      },
      {
        id: "crunch-rolls",
        name: "Crunch Rolls",
        image: assetMap.categories.appetizers[1],
        ingredients: ["Crispy roll wrappers", "Savory seasoned filling", "Breadcrumb coating", "Binding mixture", "Frying oil"]
      },
      {
        id: "cutlets",
        name: "Cutlets",
        image: assetMap.categories.appetizers[2],
        ingredients: ["Potato or meat filling", "Onion and herbs", "Spices and seasoning", "Breadcrumb coating", "Cooking oil"]
      },
      {
        id: "roll-samosa",
        name: "Roll Samosa",
        image: assetMap.categories.appetizers[3],
        ingredients: ["Samosa pastry", "Savory filling", "Vegetables or meat", "Spices and seasoning", "Frying oil"]
      },
      {
        id: "shami-kabab",
        name: "Shami Kabab",
        image: assetMap.categories.appetizers[4],
        ingredients: ["Minced meat", "Lentils", "Onion", "Ginger and garlic", "Whole spices", "Fresh herbs and egg"]
      }
    ]
  },
  {
    id: "kadhai",
    name: "Kadhai",
    description: "Explore the Kadhai selection from Rizwan Foods.",
    items: [
      {
        id: "karahi",
        name: "Karahi",
        image: assetMap.categories.kadhai[0],
        ingredients: ["Chicken or meat", "Tomatoes", "Ginger and garlic", "Green chilies", "Red chili, cumin, coriander and salt", "Cooking oil, fresh ginger and coriander"]
      },
      {
        id: "balochi-karahi",
        name: "Balochi Karahi",
        image: assetMap.categories.kadhai[2],
        ingredients: ["Chicken or meat", "Tomatoes", "Ginger and garlic", "Green chilies", "Balochi spices", "Fresh coriander and cooking oil"]
      }
    ]
  },
  {
    id: "rice",
    name: "Rice",
    description: "Discover the rice favourites on our menu.",
    items: [
      {
        id: "biryani",
        name: "Biryani",
        image: assetMap.categories.rice[0],
        ingredients: ["Basmati rice", "Chicken or meat", "Onion and tomato", "Yogurt, ginger and garlic", "Biryani spices", "Mint, coriander and oil or ghee"]
      },
      {
        id: "nalli-biryani",
        name: "Nalli Biryani",
        image: assetMap.categories.rice[1],
        ingredients: ["Basmati rice", "Bone-in nalli (shank)", "Onion and tomato", "Yogurt, ginger and garlic", "Biryani spices", "Mint, coriander and oil or ghee"]
      },
      {
        id: "arabian-rice",
        name: "Arabian Rice",
        image: assetMap.categories.rice[2],
        ingredients: ["Basmati rice", "Chicken", "Onion and tomato", "Arabian spice blend", "Nuts and raisins", "Fresh herbs"]
      },
      {
        id: "chinese-rice",
        name: "Chinese Rice",
        image: assetMap.categories.rice[3],
        ingredients: ["Rice", "Vegetables", "Egg or chicken", "Soy sauce", "Spring onion", "Seasoning and cooking oil"]
      },
      {
        id: "hyderabadi-biryani",
        name: "Hyderabadi Biryani",
        image: assetMap.categories.rice[4],
        ingredients: ["Basmati rice", "Chicken or meat", "Yogurt", "Fried onion", "Ginger and garlic", "Biryani spices and fresh herbs"]
      },
      {
        id: "pulao",
        name: "Pulao",
        image: assetMap.categories.rice[5],
        ingredients: ["Basmati rice", "Chicken or meat stock", "Onion", "Whole spices", "Ginger and garlic", "Cooking oil or ghee"]
      },
      {
        id: "singaporean-rice",
        name: "Singaporean Rice",
        image: assetMap.categories.rice[6],
        ingredients: ["Rice", "Chicken", "Vegetables", "Noodles", "Sauces and seasoning", "Crispy topping"]
      },
      {
        id: "white-biryani",
        name: "White Biryani",
        image: assetMap.categories.rice[7],
        ingredients: ["Basmati rice", "Chicken", "Yogurt", "Ginger and garlic", "Whole spices", "Green chilies and fresh herbs"]
      }
    ]
  },
  {
    id: "asian-specials",
    name: "Asian Specials",
    description: "A selection of Asian-inspired favourites from Rizwan Foods.",
    items: [
      {
        id: "chowmein",
        name: "Chow Mein",
        image: assetMap.categories["asian-specials"][0],
        ingredients: ["Noodles", "Chicken or vegetables", "Cabbage and carrots", "Soy sauce", "Garlic and seasoning", "Spring onion"]
      },
      {
        id: "sashlik",
        name: "Sashlik",
        image: assetMap.categories["asian-specials"][1],
        ingredients: ["Chicken", "Bell peppers and onion", "Tomato-based sauce", "Garlic", "Spices and seasoning"]
      }
    ]
  },
  {
    id: "regional-delights",
    name: "Regional Delights",
    description: "Explore traditional favourites from Rizwan Foods.",
    items: [
      {
        id: "handi",
        name: "Handi",
        image: assetMap.categories["regional-delights"][0],
        ingredients: ["Chicken", "Tomato and onion", "Yogurt and cream", "Ginger and garlic", "Green chili and ground spices", "Cooking oil or ghee"]
      },
      {
        id: "qarri",
        name: "Qarri",
        image: assetMap.categories["regional-delights"][1],
        ingredients: ["Yogurt", "Gram flour (besan)", "Onion", "Turmeric and chili", "Cumin and other tempering spices", "Oil; pakora batter may be included"]
      },
      {
        id: "nalli-nihari",
        name: "Nalli Nihari",
        image: assetMap.categories["regional-delights"][2],
        ingredients: ["Chicken or meat", "Yogurt", "Fried onion", "Ginger and garlic", "Cardamom, cinnamon and cloves", "Oil or ghee, chili and salt"]
      },
      {
        id: "koftay",
        name: "Koftay",
        image: assetMap.categories["regional-delights"][3],
        ingredients: ["Minced meat", "Onion", "Ginger and garlic", "Tomato and yogurt gravy", "Ground spices", "Fresh coriander"]
      },
      {
        id: "mix-sabzi",
        name: "Mix Sabzi",
        image: assetMap.categories["regional-delights"][4],
        ingredients: ["Mixed seasonal vegetables", "Onion and tomato", "Ginger and garlic", "Ground spices", "Cooking oil", "Fresh coriander"]
      },
      {
        id: "white-handi",
        name: "White Handi",
        image: assetMap.categories["regional-delights"][5],
        ingredients: ["Chicken", "Yogurt and cream", "Ginger and garlic", "Green chilies", "Black pepper", "Fresh coriander and cooking oil"]
      }
    ]
  },
  {
    id: "regional-specials",
    name: "Regional Specials",
    description: "Enjoy beloved regional dishes from the Rizwan Foods menu.",
    items: [
      {
        id: "paye",
        name: "Paye",
        image: assetMap.categories["regional-specials"][0],
        ingredients: ["Paye (trotters)", "Onion", "Ginger and garlic", "Red chili, turmeric and coriander", "Whole garam masala and salt", "Oil or ghee, fresh ginger and coriander"]
      },
      {
        id: "achari-keema",
        name: "Achari Keema",
        image: assetMap.categories["regional-specials"][1],
        ingredients: ["Minced meat", "Onion and tomato", "Ginger and garlic", "Pickling spices", "Green chilies", "Fresh coriander and cooking oil"]
      },
      {
        id: "chicken-achari",
        name: "Chicken Achari",
        image: assetMap.categories["regional-specials"][2],
        ingredients: ["Chicken", "Yogurt", "Tomato and onion", "Ginger and garlic", "Pickling spices", "Fresh herbs and cooking oil"]
      },
      {
        id: "namkeen",
        name: "Namkeen",
        image: assetMap.categories["regional-specials"][3],
        ingredients: ["Meat", "Ginger and garlic", "Green chilies", "Salt and black pepper", "Fresh ginger and coriander"]
      },
      {
        id: "nihari",
        name: "Nihari",
        image: assetMap.categories["regional-specials"][4],
        ingredients: ["Beef or mutton", "Onion", "Ginger and garlic", "Nihari spice blend", "Flour thickener", "Fresh ginger, coriander and lemon"]
      }
    ]
  },
  {
    id: "daal-chawal",
    name: "Daal & Chawal",
    description: "A comforting classic from our homemade menu.",
    items: [
      {
        id: "daal",
        name: "Daal",
        image: assetMap.categories["daal-chawal"][0],
        ingredients: ["Lentils (daal)", "Onion and tomato", "Ginger and garlic", "Turmeric, cumin and chili", "Salt and cooking oil or ghee", "Fresh coriander"]
      },
      {
        id: "kari-chawal",
        name: "Kari Chawal",
        image: assetMap.categories["daal-chawal"][1],
        ingredients: ["Rice", "Yogurt and gram flour", "Onion", "Spices and seasoning", "Pakora batter", "Tempering and fresh herbs"]
      }
    ]
  },
  {
    id: "pizza",
    name: "Pizza",
    description: "Explore the Pizza selection from Rizwan Foods.",
    items: [
      {
        id: "mini-pizza",
        name: "Mini Pizza",
        image: assetMap.categories.pizza[0],
        ingredients: ["Mini pizza base", "Tomato pizza sauce", "Cheese", "Vegetable or meat topping", "Herbs and seasoning"]
      }
    ]
  },
  {
    id: "sweet-dishes",
    name: "Sweet Dishes",
    description: "Finish your meal with something sweet.",
    items: [
      {
        id: "fruit-custard",
        name: "Fruit Custard",
        image: assetMap.categories["sweet-dishes"][0],
        ingredients: ["Milk", "Custard powder", "Sugar", "Seasonal fruit pieces"]
      },
      {
        id: "gajjar-halwa",
        name: "Gajjar Halwa",
        image: assetMap.categories["sweet-dishes"][1],
        ingredients: ["Carrots", "Milk or khoya", "Sugar", "Ghee", "Cardamom", "Nuts"]
      },
      {
        id: "sweet-chaat",
        name: "Sweet Chaat",
        image: assetMap.categories["sweet-dishes"][2],
        ingredients: ["Boiled chickpeas and potato", "Yogurt", "Sweet or tamarind chutney", "Chaat masala and spices", "Fruit pieces may be included", "Fresh coriander"]
      },
      {
        id: "dahi-barey",
        name: "Dahi Barey",
        image: assetMap.categories.kadhai[1],
        ingredients: [
          "Mash daal (Urad daal)",
          "Yogurt (Dahi)",
          "Gram flour (Besan)",
          "Green chilies",
          "Ginger",
          "Cumin seeds",
          "Red chili powder",
          "Chaat masala",
          "Salt",
          "Sugar",
          "Baking soda",
          "Cooking oil",
          "Tamarind chutney"
        ]
      },
    ]
  }
];

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function createCategoryCard(item, category) {
  const card = createElement("button", "food-card", "");
  card.type = "button";
  card.setAttribute("aria-label", `View details for ${item.name}`);

  const imageFrame = createElement("span", "food-card__image");
  const image = document.createElement("img");
  image.alt = item.name;
  image.loading = "lazy";
  image.hidden = true;
  const fallback = createElement("span", "image-fallback");
  fallback.setAttribute("aria-hidden", "true");
  fallback.append(
    createElement("span", "image-fallback__plate"),
    createElement("span", "image-fallback__label", "Food photo coming soon")
  );
  imageFrame.append(image, fallback, createElement("span", "food-card__category", category.name));

  if (item.image) {
    image.addEventListener("load", () => { fallback.hidden = true; }, { once: true });
    image.addEventListener("error", () => { image.hidden = true; }, { once: true });
    image.hidden = false;
    image.src = item.image;
  }

  const body = createElement("span", "food-card__body");
  const topLine = createElement("span", "food-card__topline");
  topLine.append(createElement("span", "food-card__title", item.name));
  const view = createElement("span", "food-card__view");
  view.append(document.createTextNode("See ingredients "), createElement("span", "", "↗"));
  topLine.append(view);
  body.append(topLine);
  if (item.description) body.append(createElement("span", "food-card__description", item.description));
  if (item.price) body.append(createElement("span", "food-card__price", item.price));
  card.append(imageFrame, body);
  card.addEventListener("click", () => window.openFoodModal(item, category.name));
  return card;
}

function createCategorySection(category, index) {
  const section = createElement("section", "category-section reveal");
  section.id = `category-${category.id}`;
  section.dataset.categoryId = category.id;
  section.setAttribute("aria-labelledby", `${category.id}-title`);

  const container = createElement("div", "container");
  const heading = createElement("div", "category-section__heading");
  heading.append(createElement("span", "category-section__number", String(index + 1).padStart(2, "0")));

  const headingText = createElement("div");
  headingText.append(
    createElement("p", "category-section__kicker", "Rizwan Foods · Menu"),
    createElement("h2", "category-section__title", category.name),
    createElement("p", "category-section__description", category.description)
  );
  headingText.querySelector("h2").id = `${category.id}-title`;

  const divider = createElement("span", "category-section__divider", "✳");
  divider.setAttribute("aria-hidden", "true");
  heading.append(headingText, divider);

  const entries = Array.isArray(category.items) ? category.items.filter((item) => item && item.name) : [];
  if (entries.length) {
    const grid = createElement("div", entries.length === 1 ? "food-grid food-grid--single" : "food-grid");
    entries.forEach((item) => grid.append(createCategoryCard(item, category)));
    container.append(heading, grid);
  } else {
    const empty = createElement("div", "category-empty");
    const mark = createElement("span", "category-empty__mark", "R");
    mark.setAttribute("aria-hidden", "true");
    const copy = createElement("div");
    copy.append(
      createElement("h3", "", "Menu details coming soon"),
      createElement("p", "", "Confirmed dishes and food photos will appear here. Get in touch to ask about the menu.")
    );
    const ask = document.createElement("a");
    ask.href = `https://wa.me/923432708942?text=${encodeURIComponent(`Hello Rizwan Foods, could you please share the ${category.name} menu?`)}`;
    ask.target = "_blank";
    ask.rel = "noopener noreferrer";
    ask.append(document.createTextNode("ASK ON WHATSAPP "), createElement("span", "", "↗"));
    empty.append(mark, copy, ask);
    container.append(heading, empty);
  }

  section.append(container);
  return section;
}

function renderMenu() {
  const nav = document.getElementById("category-nav-list");
  const sections = document.getElementById("menu-sections");
  const footerCategories = document.getElementById("footer-category-links");
  nav.replaceChildren();
  sections.replaceChildren();
  footerCategories.replaceChildren();

  menuData.forEach((category, index) => {
    const sectionId = `category-${category.id}`;
    const link = createElement("a", "category-link", category.name);
    link.href = `#${sectionId}`;
    link.dataset.categoryId = category.id;
    if (index === 0) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "location");
    }
    nav.append(link);

    const footerLink = createElement("a", "", category.name);
    footerLink.href = `#${sectionId}`;
    footerCategories.append(footerLink);

    sections.append(createCategorySection(category, index));
  });

  window.RizwanFoodsMenu = { menuData, assetMap };
  document.dispatchEvent(new CustomEvent("rizwan-menu-rendered"));
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  document.getElementById("current-year").textContent = String(new Date().getFullYear());
});
