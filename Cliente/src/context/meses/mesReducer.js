import { FORMULARIO_MES, 
        AGREGAR_MES,
        MES_ACTUAL
} from "../../types";

export default (state, action) => {
  switch (action.type) {
   
    case FORMULARIO_MES:
      return {
        ...state,
        formulario: true,
      };

    case AGREGAR_MES:
      return {
        ...state,
        mesesGastos: [...state.mesesGastos, action.payload],
        formulario: false,
      };
    case MES_ACTUAL:
      return {
        ...state,
        mes: state.mesesGastos.filter(mes => mes.id === action.payload )
      }
    default:
      return state;
  }
};
