import { useEffect, useState } from "react";

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

  useEffect((): void => {
    args
      .dataGetterFunction(args.funcArgs)
      .then((data) => {
        setResult({ data, loading: false });
      })
      .catch((err) => setResult({ loading: false, error: err }));
  }, []);

  return result;
};

export default useGetApiResult;
