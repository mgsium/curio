import * as React from "react";
import * as ReactDOM from "react-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Styles from "./TemplateStyles";
import { cx } from "emotion";
import { GitHub, Linkedin, Twitter } from "react-feather";
import { Nav } from "react-bootstrap";
import NavigationPanel from "./NavigationPanel/NavigationPanel";
import Footer from "./Footer/Footer";

type State = {};

export default class Template extends React.Component<any, State> {
    constructor(props: any) {
        super(props);

        // Methods Bindings

        this.state = {};
    }
 
    render() {
        return (
            <div className={ cx( Styles.PageStyles ) }>
                <div style={{"width": "100%", "borderBottom": "5px solid whitesmoke"}}>
                </div>
                <Container>
                    <header>
                        <div style={{ margin: 48 }}>
                            <h1 className={ cx( Styles.BlogHeader) }>Curio.</h1>
                            <h6 style={{ textAlign: "center" }}>The Personal Blog of Musab Guma'a</h6>
                        </div>
                        <hr style={{ border: "1.5px solid whitesmoke", marginBottom: 15 }}/>
                        <NavigationPanel activeKey="/"/>
                        <hr style={{ border: "1.5px solid whitesmoke" }}/>
                    </header>
                </Container>
                <Container>
                    {this.props.children}
                </Container>
                <div style={{ height: 75 }}></div>
                <Footer/>
            </div>
        )
    }
}