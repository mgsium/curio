import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Archive from "./components/pages/Archive/Archive";
import Article from "./components/pages/Article/Article";
import Books from "./components/pages/Books/Books";
import Home from "./components/pages/Home/Home";
import Learning from "./components/pages/Learning/Learning";
import Projects from "./components/pages/Projects/Projects";
import Quotes from "./components/pages/Quotes/Quotes";

type Props = {};
type State = {};

export default class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        // Methods Bindings

        this.state = {};
    }
 
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/"                 component={Home}            exact/>
                    <Route path="/quotes"           component={Quotes}          exact/>
                    <Route path="/books"            component={Books}           exact/>
                    <Route path="/learning"         component={Learning}        exact/>
                    <Route path="/archive"          component={Archive}         exact/>
                    <Route path="/projects"         component={Projects}        exact/>
                    <Route path="/article/:id"      component={Article}         exact/>
                </Switch>
            </BrowserRouter>
        )
    }
}