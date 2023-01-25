import { useEffect, useState } from 'react';
import Api from '@generators/api';

interface IApp {
  name: string;
}

export function App() {
  const [text, setText] = useState<IApp[]>();

  useEffect(() => {
    const connect = new Api();
    connect.AppControllerGetData().subscribe((res) => setText(res));
  }, []);

  return (
    <div>
      <div>Welcome test gen api</div>
      {text?.length ? <div>::List App::</div> : null}
      {text?.map((data) => (
        <div>{data.name}</div>
      ))}
    </div>
  );
}

export default App;
