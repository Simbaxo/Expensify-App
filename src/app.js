import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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

const NotFoundPage = () => (
  <div>
    404!
  </div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));