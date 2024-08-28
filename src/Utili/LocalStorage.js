
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const saveToLocalStorage = (data) => {
    const existingFavs = JSON.parse(localStorage.getItem("FavList")) || [];

    const isProductInFavs = existingFavs.some(item => item._id === data._id);

    if (!isProductInFavs) {
        const updatedFavs = [...existingFavs, data];
        localStorage.setItem("FavList", JSON.stringify(updatedFavs));

        console.log(`${data.productName} has been added to favorites!`);
        toast.success(`${data.productName} has been added to favorites!`)
    } else {
        toast.error(`${data.productName} is already in favorites!`);
        console.log(`${data.productName} is already in favorites!`);
    }
    window.location.reload();
}

export const deleteItemFromLocalStorage = (data) => {
    const favList = getFromLocalStorage('FavList') || [];
    const updatedFavList = favList.filter(item => item._id !== data._id);
    localStorage.setItem('FavList', JSON.stringify(updatedFavList));
    window.location.reload();
}
export const getFromLocalStorage = (dataFormat) => {
    const data = JSON.parse(localStorage.getItem(dataFormat)) || [];
    // console.log("Total data stored:", data.length);
    return data;
}