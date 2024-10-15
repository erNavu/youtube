import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from "./Layouts/MainLayout";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ResultsPage from "./components/ResultsPage";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <MainContainer />
        },
        {
          path: '/watch',
          element: <WatchPage />
        },
        {
          path: '/results',
          element: <ResultsPage />
        }
      ]
    }
  ])

  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
