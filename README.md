# Rizwan Foods

A premium, category-based menu website for Rizwan Foods, built with HTML, CSS, and vanilla JavaScript. The existing logo and all supplied food images are used in their menu categories.

## Run locally

Open PowerShell in this project folder and start a static server:

```powershell
py -m http.server 8000
```

Visit [http://localhost:8000](http://localhost:8000). If `py` is not installed, use `python -m http.server 8000`. Press `Ctrl+C` to stop the server. A local server serves the page and its local images consistently.

## Menu data

Edit `menuData` in `js/menu.js`. Food cards, category links, and modal content all come from this structure. Add only confirmed details:

```js
{
  id: "unique-item-id",
  name: "Confirmed food name",
  image: assetMap.categories.rice[0],
  price: "",
  description: "",
  ingredients: [],
  preparation: "",
  serving: ""
}
```

Unknown fields can remain empty; the modal hides missing prices, descriptions, ingredients, preparation, and serving information. A price such as `"1200"` displays as `Rs. 1200`. Use each item's correct local image path so the card and modal show the same photo.

## Image inventory

All 35 supplied food photos are assigned to menu categories and shown on the site:

- `assets/menu/appetizers/` — spring rolls, crunch rolls, cutlets, roll samosa, and shami kabab
- `assets/menu/asian-specials/` — chow mein and sashlik
- `assets/menu/daal-chawal/` — daal and kari chawal
- `assets/menu/kadhai/` — karahi, white karahi, and Balochi karahi
- `assets/menu/pizza/` — mini pizza
- `assets/menu/regional-delights/` — handi, qarri, qorma, koftay, mix sabzi, and white handi
- `assets/menu/regional-specials/` — paye, achari keema, chicken achari, namkeen, and nihari
- `assets/menu/rice/` — biryani, nalli biryani, Arabian rice, Chinese rice, Hyderabadi biryani, pulao, Singaporean rice, and white biryani
- `assets/menu/sweet-dishes/` — fruit custard, gajjar halwa, and sweet chaat

Menu ingredient lists show common recipe components for guidance; Rizwan Foods' exact recipes and allergens should be confirmed with the restaurant. Prices, preparation details, and serving sizes were not provided. The nalli biryani photo is also used as the hero background.

## Contact

- Phone: 0343 2708942
- WhatsApp: Pakistan international number `923432708942`

## Project files

- `index.html` — navbar, hero, menu, modal, and footer
- `css/style.css` — shared visual styles and components
- `css/responsive.css` — tablet and mobile layouts
- `css/animations.css` — entrance, reveal, and hover animations
- `js/menu.js` — menu data, image map, category navigation, and food cards
- `js/modal.js` — food details modal and item-specific WhatsApp ordering
- `js/script.js` — sticky state, active category, reveals, and local image checks
