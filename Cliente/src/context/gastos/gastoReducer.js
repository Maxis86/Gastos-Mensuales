import { GASTOS_MES, OBTENER_GASTO } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GASTOS_MES:
      break;
    case OBTENER_GASTO:
      return {
        ...state,
        gastosMes: state.gastosMeses.filter((gasto) => gasto.mesid === action.payload),
      };
    default:
      return state;
  }
};
