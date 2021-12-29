import { FORMULARIO_MES, 
        AGREGAR_MES,
        MES_ACTUAL,
        OBTENER_MES,
        ELIMINAR_MES,
        MES_ERROR
} from "../../types";

const mesReducer = (state, action) => {
  switch (action.type) {
   
    case FORMULARIO_MES:
      return {
        ...state,
        formulario: true,
      };
    case OBTENER_MES:
      return {
        ...state,
        mesesGastos: action.payload,
      };
    case ELIMINAR_MES:
      return {
        
        ...state,
        mesesGastos: state.mesesGastos.filter(mes => mes._id !== action.payload),
        mes: null,
       
      }
    case AGREGAR_MES:
      return {
        ...state,
        mesesGastos: [...state.mesesGastos, action.payload],
        formulario: false,
      };
    case MES_ACTUAL:
      return {
        ...state,
        mes: state.mesesGastos.filter(mes => mes._id === action.payload )
        
      };
    case MES_ERROR:
      return {
        ...state,
        mensaje: action.payload
      }
    default:
      return state;
  }
};

export default mesReducer;