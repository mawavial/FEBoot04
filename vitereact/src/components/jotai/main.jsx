import React from 'react';
import { Contador } from './Component';

const JotaiComponent = () => {
  return <>
    <div>Componente Jotai funcionando!</div>;
    {Contador()}
  </>;
};

export default JotaiComponent;