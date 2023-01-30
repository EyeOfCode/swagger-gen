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
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    connect.ProjectControllerGetData().subscribe((res) => setText(res));
  };

  const create = () => {
    if (name) {
      const data: CreateAppDto = { name };
      connect.ProjectControllerCreateData(data).subscribe(() => {
        fetchData();
        setName('');
      });
    }
  };

  const remove = () => {
    const connect = new Api({ Authorization: 'token' });
    connect.ProjectControllerRemoveData().subscribe((res) => {
      setMessage(res.message);
      setTimeout(() => setMessage(''), 5000);
      fetchData();
    });
  };

  return (
    <div>
      <div>Welcome test gen api</div>
      <div style={{ display: 'flex' }}>
        Input:{' '}
        <input onChange={(res) => setName(res.target.value)} value={name} />
        <button style={{ backgroundColor: 'green' }} onClick={create}>
          submit
        </button>
        <button style={{ backgroundColor: 'red' }} onClick={remove}>
          remove
        </button>
      </div>
      {message ? <div style={{ color: 'blue' }}>{message}</div> : null}
      <div>::List App::</div>
      {text?.map((data, index) => (
        <div key={`${data.name}-${index}`}>{data.name}</div>
      ))}
    </div>
  );
}

export default App;
