import React from "react";

import { cx } from "emotion";
import Styles from "./FooterStyles";
import { Col, Container, Row } from "react-bootstrap";
import { Linkedin, GitHub, Twitter } from "react-feather";

type Props = {};
type State = {};

export default class Footer extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <footer className={ cx( Styles.BlogFooter ) }>
                <hr style={{ marginTop: 0 }}/>
                <Container>
                    <Row>
                        <Col md={4} xs={12} className={cx( Styles.footerIconColumnStyles )}>
                            <a href="https://www.linkedin.com/in/musabgumaa/" target="_blank" rel="noreferrer">
                                <Linkedin/>
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            <a href="https://github.com/mgsium" target="_blank" rel="noreferrer">
                                <GitHub/>
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            <a href="https://twitter.com/musabgumaa" target="_blank" rel="noreferrer">
                                <Twitter/>
                            </a>
                        </Col>
                        <Col md={8} xs={0}>
                            <span style={{ float:"right", color: "#666" }}>
                                Hobbyist, Student and Programmer.
                            </span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }

}