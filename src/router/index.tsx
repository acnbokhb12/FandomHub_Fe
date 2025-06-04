import { Routes, Route } from "react-router-dom"
import MainLayout from '@/layouts/MainLayout/MainLayout'
import HomePage from '@/pages/home/HomePage';
import AuthPage from '@/pages/auth/AuthPage';
import AboutPage from '@/pages/about/AboutPage';
import WikisPage from '@/pages/wiki/WikisPage';
import { ROUTES } from '@/router/path';
import { ReactElement } from "react";

interface AppRoute {
   path?: string;
   element: ReactElement;
   children?: AppRoute[];
   index?: boolean;
}

const routes = [
   {
      path: ROUTES.HOME,
      element: <MainLayout />,
      children: [
         { index: true, element: <HomePage /> },
         { path: ROUTES.ABOUT, element: <AboutPage /> },
         { path: `${ROUTES.WIKI}/:slug`, element: <WikisPage /> },
      ]
   },
   {
      path: ROUTES.SIGNIN,
      element: <AuthPage />
   },
   {
      path: ROUTES.REGISTER,
      element: <AuthPage />
   },
];

function renderRoutes(routes: AppRoute[]) {
   return routes.map((route, i) => {
      if ('index' in route && route.index) {
         return <Route key={`index-${i}`} index element={route.element} />;
      }

      return (
         <Route key={route.path} path={route.path} element={route.element}>
            {route.children && renderRoutes(route.children)}
         </Route>
      );
   });
}



const AppRouter = () => {
   return <Routes>{renderRoutes(routes)}</Routes>;
};
export default AppRouter;