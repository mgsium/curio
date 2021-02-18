import React from "react";

import { cx } from "emotion";
import Styles from "./ProjectsStyles";
import Template from "../Template/Template";
import Projects from "../../helpers/projects";
import ArchiveStyles from "../Archive/ArchiveStyles";

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
                    Projects.map(p => (
                        <a className={cx( ArchiveStyles.articleLinkStyles )} href={p.project_link} target="_blank" rel="noreferrer">
                            <div className={cx( Styles.projectCardStyles )}>
                                <h2 style={{ margin: 0, marginBottom: 5 }}>{p.header}</h2>
                                <p style={{ margin: 0, color: "#666" }}>{p.description}</p>
                            </div>
                        </a>
                    ))
                }
            </Template>
        )
    }

}