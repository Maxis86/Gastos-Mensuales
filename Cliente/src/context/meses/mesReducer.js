import { FORMULARIO_MES } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_MES: 
        return{
            ...state,
            formulario: true
        }
        default:
            break;
    }
}