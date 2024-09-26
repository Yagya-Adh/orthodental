import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./app/pages/DefaultLayout";
import NotFound from "./app/pages/NotFound";
import HomePage from "./app/pages/home/HomePage";
import DiscoverPage from "./app/pages/discover/DiscoverPage";
import SciencePage from "./app/pages/science/SciencePage";
import EducationPage from "./app/pages/education/EducationPage";
import EventsPage from "./app/pages/events/EventsPage";
import ShopPage from "./app/pages/shop/ShopPage";
import SingleShopPage from "./app/pages/shop/SingleShopPage";
import SinglePage from "./app/components/singlepagelayout/SinglePage";
import AboutPage from "./app/pages/about/AboutPage";
import SingeAboutPage from "./app/pages/about/SingleAboutPage";
import SingleScienePage from "./app/pages/science/SingleScienePage";
import SingleEducationPage from "./app/pages/education/SingleEducationPage";
import SingleDiscoverPage from "./app/pages/discover/SingleDiscoverPage";
import SearchErrorPage from "./app/components/search/SearchErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "discover",
        element: <DiscoverPage />,
      },
      {
        path: "discover/:id",
        element: <SingleDiscoverPage />,
      },
      {
        path: "education",
        element: <EducationPage />,
      },
      {
        path: "education/:id",
        element: <SingleEducationPage />,
      },
      {
        path: "science",
        element: <SciencePage />,
      },
      {
        path: "science/:id",
        element: <SingleScienePage />,
      },

      {
        path: "about-us",
        element: <AboutPage />,
      },

      {
        path: "about-us/:id",
        element: <SingeAboutPage />,
      },

      {
        path: "events",
        element: <EventsPage />,
      },

      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "shop/:id",
        element: <SingleShopPage />,
      },
      {
        path: "search-error",
        element: <SearchErrorPage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
