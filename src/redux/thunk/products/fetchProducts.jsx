import { loadProduct } from "../../actions/productAction";

const loadProductData = () => {
    return async (dispatch, getState) => {
        const res = await fetch(
            "https://moon-tech-server-01.vercel.app/product"
        );
        const data = await res.json();
        if (data.length) {
            dispatch(loadProduct(data));
        }
    };
};

export default loadProductData;
