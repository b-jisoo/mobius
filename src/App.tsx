import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import GlobalStyle from "./style/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
