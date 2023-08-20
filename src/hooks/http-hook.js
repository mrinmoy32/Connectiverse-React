import { useState, useCallback, useRef, useEffect } from "react";
import axios from 'axios';

export const useHttpClient = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsloading(true);
      const source = axios.CancelToken.source();
      activeHttpRequests.current.push(source);

      try {
        setError(null);
        const response = await axios({
          method,
          url,
          data: body,
          headers,
          cancelToken: source.token,
        });

        const responseData = response.data;

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (cancelToken) => cancelToken !== source
        );

        setIsloading(false);
        return responseData;
      } catch (error) {
        setIsloading(false);
        setError(error.response.data.message || "Something went wrong, please try again");
        throw error;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((cancelToken) => cancelToken.cancel());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
