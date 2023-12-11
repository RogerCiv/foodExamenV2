import { renderCardFoods } from "../components/renderCardFoods";

export async function getFoodsApi(url,container){
    try{
        const resp = await fetch(url);
        if(!resp.ok) throw new Error("Error Get Food")
        const data = await resp.json()

        console.log(data);
        data.map(food => {
            renderCardFoods(container,food)
        })

    }catch(err){
        console.log("Error: ",err.message);
    }
}