import { getDataFromLocalStorage } from "./getDataFromLocalStorage.js";
import { localStorageKeys } from "./localStorageKeys.js";
import { setDataToLocalStorage } from "./setDataToLocalStorage.js";


export const setUpLocalStorage = () => {
const groceriesFromLocalStorage = getDataFromLocalStorage(localStorageKeys.groceries);
if (!groceriesFromLocalStorage){
setDataToLocalStorage(localStorageKeys.groceries, []);
} };