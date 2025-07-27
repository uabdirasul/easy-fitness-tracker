import { plans } from "./plans_data.js";

const plansContainer = document.querySelector(".plans__container");
const yearButton = document.querySelector("#year-button");
const monthButton = document.querySelector("#month-button");

function getCurrentPriceType() {
  return yearButton.checked ? "annual_price" : "monthly_price";
}

function renderPlansItem(plan) {
  const plansItem = document.createElement("div");
  plansItem.classList.add("plans__item");

  const plansItemTitle = document.createElement("h3");
  plansItemTitle.classList.add("plans__item-title");
  plansItemTitle.textContent = plan.name;
  plansItem.appendChild(plansItemTitle);

  const plansItemPrice = document.createElement("p");
  plansItemPrice.classList.add("plans__item-price");
  plansItemPrice.textContent = `$${plan[getCurrentPriceType()]}/${
    getCurrentPriceType() === "annual_price" ? "year" : "month"
  }`;
  plansItem.appendChild(plansItemPrice);

  const plansItemFeatures = document.createElement("ul");
  plansItemFeatures.classList.add("plans__item-features");
  for (const [feature, value] of Object.entries(plan.features)) {
    const featureItem = document.createElement("li");
    featureItem.classList.add("plans__item-feature");
    featureItem.textContent = `${
      feature.charAt(0).toUpperCase() + feature.slice(1)
    }: ${value}`;
    plansItemFeatures.appendChild(featureItem);
  }
  plansItem.appendChild(plansItemFeatures);

  const plansItemButton = document.createElement("button");
  plansItemButton.classList.add("plans__item-button");
  plansItemButton.type = "button";
  plansItemButton.textContent = "Get started";
  plansItem.appendChild(plansItemButton);

  plansContainer.appendChild(plansItem);
}

function renderAllPlans() {
  plansContainer.innerHTML = "";
  for (let i = 0; i < plans.plans.length; i++) {
    renderPlansItem(plans.plans[i]);
  }
}

yearButton.addEventListener("click", renderAllPlans);
monthButton.addEventListener("click", renderAllPlans);

// Initial render
renderAllPlans();
