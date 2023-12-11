import { showBtnPay } from "./showBtnPay";

export function removeCardOrder(orderCard,divCardFood,orderContainer){
    const removeButton = orderCard.querySelectorAll('.card-link')

    removeButton.forEach(del => {
      del.addEventListener("click", (e) => {
          console.log(e.target.dataset.id);
          orderContainer.removeChild(orderCard)
          divCardFood.style.opacity = 1
          const addButton =  divCardFood.querySelector(".card-link")
          addButton.style.display = "block"
          showBtnPay()
      })
    })
}