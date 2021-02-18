import React from "react";
import { Link } from "react-router-dom";

import { cx } from "emotion";
import Styles from "./ArchiveStyles";
import Template from "../Template/Template";
import Articles from "../../helpers/articles";

type Props = {};
type State = {};

export default class Arcguve extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Template>
                {
                    Articles.map(a => (
                        <Link className={cx( Styles.articleLinkStyles )} to={`article/${a.markdown_doc_link}`}>
                            <div className={cx( Styles.articleCardStyles )}>
                                <h2 style={{ margin: 0, marginBottom: 5 }}>{a.header}</h2>
                                <h6>{a.date.toDateString()}</h6>
                                <p style={{ margin: 0, color: "#666" }}>{a.description}</p>
                            </div>
                        </Link>
                    ))
                }
            </Template>
        )
    }

}