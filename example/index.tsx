import React from 'react';
import { render } from 'react-dom';
import TodoList from './components/todo-list';
import WeatherForecast from './components/weather-forecast';
import Counter from './components/counter';
import { Provider } from './synaptik';

const App = () => (
  <Provider>
    <TodoList />
    <WeatherForecast />
    <Counter />
  </Provider>
);

render(<App />, document.getElementById('root'));
