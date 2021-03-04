import {AddCart} from '../constant/types'
export const addCart = (Card:any) => {
    return {
        type : AddCart,
        payload : Card,
    };
};
