import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;