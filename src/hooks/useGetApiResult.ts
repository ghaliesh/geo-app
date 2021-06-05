import { useCallback, useEffect, useState } from "react";

import { AxiosResponse } from "axios";

interface IState<T> {
  result?: AxiosResponse<T>;
  loading: boolean;
  error?: Error;
}

interface IArgs<T, D> {
  dataGetterFunction: (args?: D) => Promise<AxiosResponse<T>>;
  funcArgs?: D;
}

const useGetApiResult = <T, D extends object>(args: IArgs<T, D>) => {
  const [result, setResult] = useState<IState<T>>({ loading: true });

  const getData = useCallback(() => {
    args
      .dataGetterFunction(args.funcArgs)
      .then((result) => setResult({ result, loading: false }))
      .catch((error) => setResult({ error, loading: false }));
  }, [args]);

  useEffect((): void => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return result;
};

export default useGetApiResult;
