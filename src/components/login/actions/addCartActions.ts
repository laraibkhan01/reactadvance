import {AddCart , GetCard} from '../constant/types'
export const addCart = (Card:any) => {
    return {
        type : AddCart,
        payload : Card,
    };
};

export const getCard = (id:any) => ({
    type: GetCard, 
    payload : id,
});
