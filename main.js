import { searchFood } from './src/helper/searchFood'

import { getFoodsApi } from './src/utils/getFoodsApi'
import './style.css'

const cardsContainer = document.querySelector('.cards')
const inputSearch = document.getElementById("inputSearch")
const btnSearch = document.getElementById("btnSearch")

const url = "http://localhost:4000/categories"

getFoodsApi(url,cardsContainer)


searchFood(url,cardsContainer)




