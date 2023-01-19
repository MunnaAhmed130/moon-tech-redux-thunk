import { updateProduct } from "../../actions/productAction";

const updateProductData = (product, id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:4000/product/${id}`, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
                "content-type": "application/json",
            },
        });
        const data = await res.json();
        // console.log(data);
        if (data.acknowledged) {
            dispatch(updateProduct(id));
        }
    };
};

export default updateProductData;
