import { lazy, Suspense } from "react";
import { Routes, Route, useLocation, redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ============== Components ================ //
import AnimatedPages from "@components/AnimatedPages";
import PageLoader from "@components/PageLoader";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
// ============== Components ================ //

// ============== Pages ================ //
const Home = lazy(() => import("@/pages/Home/Home"));
const AboutUs = lazy(() => import("@/pages/AboutUs/AboutUs"));
const OurGroup = lazy(() => import("@/pages/OurGroup/OurGroup"));
const Products = lazy(() => import("@/pages/Products/Products"));
const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));
const Sertificates = lazy(() => import("@/pages/Sertificates"));
const Vacancy = lazy(() => import("@/pages/Vacancy/Vacancy"));
const Contraindications = lazy(() =>
  import("@/pages/Contraindications/Contraindications")
);
const Service = lazy(() => import("@/pages/Service/Service"));
// ============== Pages ================ //

function App() {
  const location = useLocation();

  const ROUTES = [
    {
      component: Home,
      url: "/",
    },
    {
      component: AboutUs,
      url: "/about",
    },
    {
      component: OurGroup,
      url: "/our-group",
    },
    {
      component: Products,
      url: "/products",
    },
    {
      component: Sertificates,
      url: "/sertificates",
    },
    {
      component: Vacancy,
      url: "/vacancy",
    },
    {
      component: Contraindications,
      url: "/contraindications",
    },
    {
      component: Service,
      url: "/service/:slug",
    },
    {
      component: NotFound,
      url: "*",
    },
  ];

  return (
    <Suspense fallback={PageLoader}>
      <ToastContainer />
      <a href="https://t.me/reviteuz"  className="fixed right-5 bottom-5 z-[100000] hover:scale-105 duration-200 active:scale-95">
      <span className="icon icon-ai !w-20 !h-20" />
      </a>
      <AnimatePresence mode="wait">
        <Routes location={location.pathname} key={location.pathname}>
          {ROUTES.map(({ component: Component, url }) => (
            <Route
              key={url}
              path={url}
              element={
                <AnimatedPages>
                  <Navbar />
                  <Component />
                  <Footer />
                </AnimatedPages>
              }
            />
          ))}
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
