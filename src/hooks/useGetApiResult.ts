import { useCallback, useEffect, useState } from "react";

interface IState {
  data?: any[];
  loading: boolean;
  error?: Error;
}

interface IArgs {
  dataGetterFunction: (args?: any) => Promise<any>;
  funcArgs?: any;
}

const useGetApiResult = (args: IArgs) => {
  const [result, setResult] = useState<IState>({ loading: true });

  const getData = useCallback(() => {
    args
      .dataGetterFunction(args.funcArgs)
      .then((data) => {
        setResult({ data, loading: false });
      })
      .catch((err) => setResult({ loading: false, error: err }));
  }, [args]);

  useEffect((): void => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return result;
};

export default useGetApiResult;
