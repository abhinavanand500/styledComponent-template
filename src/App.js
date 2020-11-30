import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, InfoSection } from "./components";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/HomePage/Home";
import { FooterContainer } from './container/Footer'

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
            <FooterContainer/>
        </Router>
    );
}

export default App;
