import React from 'react';
import './App.css';

// COMPONENT AND CONTAINER INCLUDES --------------------------------
import Header from './components/Header/Header';
import AddTodo from './containers/AddTodo/AddTodo';
import VisibleTodoList from './containers/VisileTodoList/VisibleTodoList';
// ------------------------------------------------------------------

// MATERIAL UI INCLUDES ---------------------------------------------
import Grid from 'material-ui/Grid';
import Card from 'material-ui/Card';
import Paper from 'material-ui/Paper';
// ------------------------------------------------------------------


class App extends React.Component {
  render() {
    return (
      <Grid
        container
        justify='center'
        alignItems='center'
        className='todos-box-container'
      >
        <Card className='todos-box'>
          <Paper className='header-container'>
            <AddTodo />
            <Header />
          </Paper>
          <VisibleTodoList />
        </Card>
      </Grid>
    );
  }
}

export default App;
