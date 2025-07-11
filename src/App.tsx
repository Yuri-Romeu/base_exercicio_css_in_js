import Header from './components/Cabecalho';
import Hero from './components/Hero';
import ListaVagas from './containers/ListaVagas';

import EstiloGLobal, { Container } from './global';

function App() {
  return (
    <>
      <EstiloGLobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  );
}

export default App;
