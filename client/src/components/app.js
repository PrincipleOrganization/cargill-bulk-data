import React from 'react';
import {render} from 'react-dom';
import SimpleArray from './simpleArray';

const App = () => {
  return (
    <div class="container-fluid">
      <h3>Kernel Bulkdata</h3>
      <SimpleArray />
    </div>
  )
}

const APP = document.getElementById("app");
render(<App />, APP);
