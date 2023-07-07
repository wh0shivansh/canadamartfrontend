import { productConstants } from '../../constant/constant';
import axios from '../../helpers/axios';

export const getAllProducts =()=>{
    return async dispatch=>{
        dispatch({
            type:productConstants.PRODUCTS_REQUEST
        });
        const res = await axios.post('products/allproducts');
        if(res.status === 200){

            const products = res.data;

            dispatch({
                type:productConstants.PRODUCTS_SUCCESS,
                payload:{
                    products:products
                }
            })
        }else{
            dispatch({
                type:productConstants.PRODUCTS_FAILURE,
                payload:{error:res.data.error}
            })
        }
    }
}


export const createProduct = (obj)=>{
    return async dispatch=>{
        const res = await axios.post('/product/create',{
            ...obj
        })
        if(res.status === 200){
            const product = res.data;
            dispatch({
                type:productConstants.CREATE_PRODUCTS_SUCCESS,
                payload:{product}
            })
        }
    }
}