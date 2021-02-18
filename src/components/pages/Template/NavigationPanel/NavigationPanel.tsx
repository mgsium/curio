import React from "react";
import { Link } from "react-router-dom";

import { cx } from "emotion";
import Styles from "./NavigationPanelStyles";
import { Nav } from "react-bootstrap";

type Props = {
    activeKey: string
};
type State = {};

export default class NavigationPanel extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Nav className={cx( Styles.navigationStyles )} activeKey={this.props.activeKey}>
                <Nav.Item>
                    <Link to="/">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/quotes">Quotes</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/books">Books</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/learning">Learning</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/archive">Archive</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/projects">Projects</Link>
                </Nav.Item>
            </Nav>
        )
    }

}