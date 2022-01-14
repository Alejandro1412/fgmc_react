//Hooks
import useHelpers from "../../../helpers";
import useStrings from "../../../strings";
import useInitialStates from "../../initialStates";

const useUserReducers = () => {
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  const { useUserInitialStates } = useInitialStates();
  const { initialStateUser } = useUserInitialStates();

  const { useAuthTypes } = useStrings();
  const { LOGIN } = useAuthTypes();

  const user = createReducer(initialStateUser, {
    [LOGIN](state, action) {
      const { token, nombre, apellido } = action.payload;
      return { ...state, token, nombre, apellido };
    },
  });

  return { user };
};

export default useUserReducers;
