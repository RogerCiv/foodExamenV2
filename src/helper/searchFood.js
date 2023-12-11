import { findFoodApi } from "../utils/findFoodApi"
import { getFoodsApi } from "../utils/getFoodsApi"
import { capitalizeWords } from "./capitalizeWords"

export function searchFood(url,container){
    btnSearch.addEventListener("click", () => {
        const capitalizeValue = capitalizeWords(inputSearch.value)
        findFoodApi(url,capitalizeValue,container)
        inputSearch.value = ""
    })
    
    inputSearch.addEventListener("keydown", (e) => {
        const capitalizeValue = capitalizeWords(inputSearch.value)
        if(e.key === "Escape" || (inputSearch.value === "" && e.key === "Enter")){
            container.innerHTML = ""
            getFoodsApi(url,container)
        }else if(e.key === "Enter"){
            findFoodApi(url,capitalizeValue,container)
            inputSearch.value = ""
        }
    })
  }