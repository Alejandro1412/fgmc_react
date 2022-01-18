import useApi from "../..";
import useStrings from "../../../strings";

const useAuthActions = () => {
  const { useProviders } = useApi();
  const { useAuthProviders } = useProviders();
  const { login } = useAuthProviders();

  const { useAuthTypes } = useStrings();
  const { LOGIN } = useAuthTypes();

  const actLogin =
    ({ email, password }, onSuccess, onError) =>
    async (dispatch) => {
      try {
        const res = await login({ email, password });
        dispatch({ type: LOGIN, payload: res.data.responseDetail });
        onSuccess && onSuccess();
      } catch (error) {
        onError && onError();
      }
    };

  return { actLogin };
};

export default useAuthActions;
