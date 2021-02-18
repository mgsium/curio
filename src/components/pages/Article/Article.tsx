import React from "react";
import { withRouter } from "react-router";

import { cx } from "emotion";
import Styles from "./ArticleStyles";
import Template from "../Template/Template";
import ReactMarkdown from "react-markdown";

type Props = {};
type State = {
    markdown: string
};

export default class Article extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            markdown: null
        }

        // @ts-expect-error
        fetch(`/public/md/${this.props.match.params.id}.md`)
        .then(res => {
            if(res.status === 404) throw new Error("Could not find article");
            return res.text()
        })
        .then(data => { this.setState({ markdown: data }) })
        .catch(e => { });
    }

    render() {
        return (
            <Template>
                <br/>
                {
                    this.state.markdown ? (
                        <div className={cx( Styles.articleStyles, "ml-auto mr-auto" )}>
                            <ReactMarkdown source={this.state.markdown}/>
                        </div>
                    ) : (
                        <h2 style={{ textAlign: "center" }}>The article you're looking for doesn't exist!</h2>
                    )
                }
            </Template>
        )
    }

}