import TodoForm from './components/TodoForm';
import Container from './components/Container';
import PageHeading from './components/PageHeading';

function App() {
  return (
    <div className="App">
      <Container>
        <PageHeading />
     <TodoForm />
     </Container>
    </div>
  );
}

export default App;
