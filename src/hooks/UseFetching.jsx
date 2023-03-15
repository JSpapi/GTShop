import React, { useState } from "react";

export const UseFetching = (calback) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await calback();
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, error, isLoading];
};

export default UseFetching;
