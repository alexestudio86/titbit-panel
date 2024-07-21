import { createBrowserRouter } from "react-router-dom";
import { IsErrorView } from "../views/IsError.View";
  import { GeneralLayout } from "../layouts/General.Layout";
    import { ErrorPage } from "../pages/Error.Page";
import { IsHomeView } from "../views/IsHome.View";
  import { HomeLayout } from "../layouts/Home.Layout";

export const App = createBrowserRouter([
  {
    errorElement: (<IsErrorView><GeneralLayout><ErrorPage/></GeneralLayout></IsErrorView>),
    children: [
      {
        index:    true,
        element:  (<IsHomeView><GeneralLayout><HomeLayout/></GeneralLayout></IsHomeView>),
        path:     '/'
      }
    ]
  }
])