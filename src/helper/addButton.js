import { renderCardOrder } from "../components/renderCardOrder";

export function addButton(divCardFood){
    const addButton = divCardFood.querySelectorAll(".card-link")
  
    addButton.forEach(add => {
        add.addEventListener("click", (e) => {
            console.log(e.target.dataset.id);
            const foodItem = e.target.dataset.id
            divCardFood.style.opacity = 0.3
            e.target.style.display = "none"
            renderCardOrder(foodItem,divCardFood)
        })
    })
  }