import { checkStatus, getTours, checkLoading } from "../../features/tourSlice";

export const getData = () => {
  return async (dispatch) => {
    try {
      dispatch(checkLoading(true));
      const res = await fetch(`http://localhost:8080/backpack/api/r1/tours`);

      if (!res.ok) {
        throw new Error(`Error while connecting with server`);
      }

      const data = await res.json();
      dispatch(checkLoading(false));
      dispatch(getTours(data));
    } catch (error) {
      dispatch(
        checkStatus({
          title: `Error`,
          message: `Server are down or Error while connecting please try again later`,
        })
      );
    }
  };
};

// http://localhost:8080/backpack/api/r1/tours
