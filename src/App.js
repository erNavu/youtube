import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from "./Layouts/MainLayout";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ResultsPage from "./components/ResultsPage";
import ErrorPage from "./Layouts/ErrorPage"

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
        },
      ]
    },
    {
      path: "*",
      element: <ErrorPage />  // Default fallback for any undefined route (404)
    }
  ], {
    basename: '/youtube'
  })

  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
