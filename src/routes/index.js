import ContractInputPage from "../pages/ContractInputPage";
import LandingPage from "../pages/LandingPage";
import ResultsPage from "../pages/ResultsPage";

const routes = [
  {
    url: "/",
    component: <LandingPage />,
  },
  {
    url: "/results",
    component: <ResultsPage />,
  },
  {
    url: "/contractInput",
    component: <ContractInputPage />,
  },
];

export default routes;
