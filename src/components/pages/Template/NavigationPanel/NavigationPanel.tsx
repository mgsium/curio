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
            <div className={cx( Styles.navigationStyles )}>
                    <Link to="/">Home</Link>
                    <Link to="/quotes">Quotes</Link>
                    <Link to="/books">Books</Link>
                    <Link to="/learning">Learning</Link>
                    <Link to="/archive">Archive</Link>
                    <Link to="/projects">Projects</Link>
            </div>
        )
    }

}