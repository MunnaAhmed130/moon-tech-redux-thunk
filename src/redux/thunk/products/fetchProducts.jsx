import { loadProduct } from "../../actions/productAction";

const loadProductData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:4000/all");
        const data = await res.json();
        if (data.length) {
            dispatch(loadProduct(data));
        }
    };
};

export default loadProductData;