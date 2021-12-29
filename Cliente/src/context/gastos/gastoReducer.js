import { GASTOS_MES, 
  OBTENER_GASTO, 
  MOSTRAR_FORM_GASTO, 
  AGREGAR_GASTO, 
  ELIMINAR_GASTO, 
  EDITAR_GASTO,
  CAMBIAR_ESTADO_GASTO
} from "../../types";

const gastoReducer = (state, action) => {
  switch (action.type) {
    case GASTOS_MES:
      return {
        ...state,
        gastosMes: action.payload
      }
      
    case OBTENER_GASTO:
      return {
        ...state,
        gastosMes: state.gastosMeses.filter((gasto) => gasto.mesid === action.payload),
      };
    case MOSTRAR_FORM_GASTO:
      return {
        ...state,
        mostrarForm: true
      }
    case AGREGAR_GASTO:
      return {
        ...state,
        gastosMeses:[...state.gastosMeses, action.payload]
      }
      case ELIMINAR_GASTO:
        return {
          ...state,
          gastosMes: state.gastosMes.filter((gasto) => gasto._id !== action.payload),
        }
      case EDITAR_GASTO:
      case CAMBIAR_ESTADO_GASTO:
        return {
          ...state,
          gastosMeses: state.gastosMeses.map(gasto => gasto._id === action.payload._id ? action.payload : gasto )
        }
    default:
      return state;
  }
};

export default gastoReducer;