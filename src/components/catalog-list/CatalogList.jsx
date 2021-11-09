import SortingForm from '../sorting-form/SortingForm.jsx';
import CardsList from '../cards-list/CardsList.jsx';
import Pagination from '../pagination/Pagination.jsx';
import FavoritesEmpty from '../favorites-empty/FavoritesEmpty.jsx';

const CatalogList = (props) => {
    return (
        <section className="onlineshop-app__results results">
          <SortingForm />
          <CardsList cards={props.cards}/>
          <Pagination />
        </section>
    );
};

export default CatalogList;