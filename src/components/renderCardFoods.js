import { addButton } from "../helper/addButton"
import { renderCardOrder } from "./renderCardOrder"

export function renderCardFoods(container,foodData){

    let description = foodData.strCategoryDescription.slice(0,60) + "..."

    const divCardFood = document.createElement('div')
    divCardFood.classList.add("col-md-4")

    divCardFood.innerHTML = `
    <div class="card">
      <img
        src="${foodData.strCategoryThumb}"
        class="card-img-top"
        alt="${foodData.strCategory}"
      />
      <div class="card-body">
        <h5 class="card-title">${foodData.strCategory}</h5>
        <p class="card-text">${description}</p>
        <p class="card-text">Precio: ${foodData.price}$</p>
        <a href="#" class="btn btn-link card-link" data-id="${foodData.id}">Añadir</a>
      </div>
    </div>
    `
    container.appendChild(divCardFood)
  addButton(divCardFood)

}

