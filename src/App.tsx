import { Layout } from './shared/Layout';
import { Content } from './shared/Layout/Content';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './shared/store/reducer';
import { Statistic } from './shared/Layout/Statistic';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { statAddNewDay } from './shared/store/stat/actions';

const store = createStore(rootReducer, composeWithDevTools())
store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()))
})

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(statAddNewDay())
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='React_project/stat' element={<Statistic />} />
          <Route path='React_project/' element={<Content />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export const AppWrap = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};


