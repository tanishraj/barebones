import { useState } from 'react';

import Button from '@/components/Button';

interface HelloWorldProps {
  msg: string;
}

export const HelloWorld = ({ msg }: HelloWorldProps) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{msg}</h1>

      <div>
        <Button>Click me</Button>
        <Button variant='primary'>Click me</Button>
        <Button variant='secondary'>Click me</Button>
        <Button variant='accent'>Click me</Button>
        <Button variant='ghost'>Click me</Button>
        <Button variant='link'>Click me</Button>
        <Button variant='success'>Click me</Button>
        <Button variant='warning'>Click me</Button>
        <Button variant='error'>Click me</Button>
        <Button variant='info'>Click me</Button>

        <Button size='xs'>Click me</Button>
        <Button size='sm'>Click me</Button>
        <Button size='md'>Click me</Button>
        <Button size='lg'>Click me</Button>

        <button type='button' onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>About</span>
          </li>
        </ul>
      </div>
      <p>
        Edit <code>components/HelloWorld.jsx</code> to test HMR (Hot Module
        Replacement)
      </p>

      <p>
        Check out{' '}
        <a href='https://vitejs.dev/guide/' target='_blank' rel='noreferrer'>
          create-react
        </a>
        , the official React + Vite starter
      </p>
      <p>
        Learn more about IDE Support for Vue in the{' '}
        <a href='https://react.dev/learn' target='_blank' rel='noreferrer'>
          React Docs Scaling up Guide
        </a>
        .
      </p>
      <p>Click on the Vite and Vue logos to learn more</p>
    </div>
  );
};
