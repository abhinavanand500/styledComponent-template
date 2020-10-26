import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, InfoSection } from "./components";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/HomePage/Home";
function App() {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
