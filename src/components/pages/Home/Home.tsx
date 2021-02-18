import React from "react";

import { cx } from "emotion";
import Styles from "./HomeStyles";
import Template from "../Template/Template";
import Articles from "../../helpers/articles";
import Article from "../../types/Article";
import ArchiveStyles from "../Archive/ArchiveStyles";
import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, GitHub, Twitter } from "react-feather";
import { Link } from "react-router-dom";

type Props = {};
type State = {};

export default class Home extends React.Component<Props, State> {

    latestArticle: Article;

    constructor(props: Props) {
        super(props);
        
        // @ts-ignore
        const sortedArticles: Article[] = Articles.sort((a, b) => b.date - a.date);
        this.latestArticle = sortedArticles[0];
    }

    render() {
        return (
            <Template>
                <div className={cx( Styles.profileCardStyles )}>
                    <Container fluid>
                        <Row>
                            <Col md={12} lg={6} style={{ padding: 20 }}>
                                <img src="https://i.pinimg.com/originals/a5/10/44/a51044254719b1ddb98bcdfe00d2fc65.jpg" style={{ borderRadius: "50%", maxWidth: "100%" }}/>
                            </Col>
                            <Col md={12} lg={6}>
                                <div style={{ padding: 20 }}>
                                    <h3 style={{ textAlign: "center" }}>Hi, I'm Musab!</h3>
                                    <br/>
                                    <p>I'm a Sixth Form student and prospective Computer Science student interested in Software Development.</p>
                                    <p>This is my blog where - among other things - I write articles outlining my thoughts on topics surrounding technology, science and other topics.</p>
                                    <p>If you would like to contact me, you can find me at...</p>
                                    <div className="ml-auto mr-auto" style={{ padding: 20, display: "table" }}>
                                        <a style={{ margin: 20 }} href="https://www.linkedin.com/in/musabgumaa/" target="_blank" rel="noreferrer">
                                            <Linkedin size={50}/>
                                        </a>
                                        <a style={{ margin: 20 }} href="https://github.com/mgsium" target="_blank" rel="noreferrer">
                                            <GitHub size={50}/>
                                        </a>
                                        <a style={{ margin: 20 }} href="https://twitter.com/musabgumaa" target="_blank" rel="noreferrer">
                                            <Twitter size={50}/>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Link className={cx( ArchiveStyles.articleLinkStyles )} to={`article/${this.latestArticle.markdown_doc_link}`}>
                    <div className={cx( ArchiveStyles.articleCardStyles )}>
                        <h2 style={{ margin: 0, marginBottom: 5 }}>{this.latestArticle.header}</h2>
                        <h6>{this.latestArticle.date.toDateString()}</h6>
                        <p style={{ margin: 0, color: "#666" }}>{this.latestArticle.description}</p>
                    </div>
                </Link>
            </Template>
        )
    }

}