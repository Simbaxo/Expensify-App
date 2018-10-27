import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my Dashboard Component!
  </div>
)

const AddExpensePage = () => (
  <div>
    This is from my Add Expense Component!
  </div>
)

const EditExpensePage = () => (
  <div>
    This is from my Edit Expense Page!
  </div>
)

const HelpPage = () => (
  <div>
    This is from my Help Page!
  </div>
)

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));