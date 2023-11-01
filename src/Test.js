import React, { useEffect, useReducer } from 'react';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './SearchBox';
import ProductList from './ProductList';
import Categories from './Categories';
import Select from './Select';
import Page from './Page';
import ProductView from './ProductView';
import Modal from './FormButton';
import OpenForm from './ModalButton';
import FormButton from './FormButton';
import ModalButton from './ModalButton';
import Reduce from './Reduce';

// Define your initial state
const initialState = {
  itemData: [],
  filterData: [],
  cart: [],
  count: 0,
};

// Define your reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITEM_DATA':
      return { ...state, itemData: action.payload, filterData: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload], count: state.count + 1 };
    case 'FILTER_PRODUCTS':
      const filteredProducts = state.itemData.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, filterData: filteredProducts };
    case 'SORT_PRODUCTS':
      // Implement your sorting logic here and return the updated state
      return state;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'SET_ITEM_DATA', payload: data });
      });
  }, []);

  const addTocart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const onSearch = (searchTerm) => {
    dispatch({ type: 'FILTER_PRODUCTS', payload: searchTerm });
  };

  const sortProducts = (selectedSort) => {
    dispatch({ type: 'SORT_PRODUCTS', payload: selectedSort });
  };

  return (
    <div className="container-fluid m-0 p-0">
      <Navbar count={state.count} onSearch={onSearch} />
      <div className="d-flex">
        <div className="col-lg-2">
          <Categories />
          <div>
            <Select onSort={sortProducts} />
          </div>
          <div>
            <div className="mt-4">
              <FormButton />
            </div>
            <div className="mt-4">
              <ModalButton />
            </div>
          </div>
        </div>

        {state.filterData.length > 0 ? (
          <ProductList display={state.filterData} addTocart={addTocart} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        <Page />
      </div>
      <div>
        <Reduce />
      </div>
    </div>
  );
}

export default App;
