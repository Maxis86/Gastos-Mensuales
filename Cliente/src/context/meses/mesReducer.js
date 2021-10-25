import { FORMULARIO_MES, 
        AGREGAR_MES 
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
    default:
      break;
  }
};
