import Header from '../components/header/Header.jsx';
import Filters from '../components/filters/Filters.jsx';
import CatalogList from '../components/catalog-list/CatalogList.jsx';

const App = (props) => {
  console.log(props.cards);
  return (
    <section className="onlineshop-app">
          <Header />
          <div className="onlineshop-app__wrapper">
            <Filters />
            <CatalogList cards={props.cards}/>
          </div>
        </section>
  );
}

export default App;
