import { useEffect, useState } from 'react';
import Api from '@generators/api';
import { CreateAppDto } from '@generators/type';

interface IApp {
  name: string;
}

export function App() {
  const connect = new Api();
  const [text, setText] = useState<IApp[]>();
  const [name, setName] = useState<string>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    connect.AppControllerGetData().subscribe((res) => setText(res));
  };

  const create = () => {
    if (name) {
      const data: CreateAppDto = { name };
      connect.AppControllerCreateData(data).subscribe(() => fetchData());
    }
  };

  return (
    <div>
      <div>Welcome test gen api</div>
      <div style={{ display: 'flex' }}>
        Input: <input onChange={(res) => setName(res.target.value)} />
        <button onClick={create}>submit</button>
      </div>
      {text?.length ? <div>::List App::</div> : null}
      {text?.map((data) => (
        <div key={data.name}>{data.name}</div>
      ))}
    </div>
  );
}

export default App;
