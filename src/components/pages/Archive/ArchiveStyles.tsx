import { css } from "emotion";

const Styles = {
    articleCardStyles: css`
        border: 2px solid whitesmoke;
        padding: 20px;
        padding-left: 30px;
        transition: all 0.5s;
        color: #999999;
        margin-bottom: 20px;

        &:hover {
            border-color: #C4C4C4;
            color: black;
            border-radius: 1rem;
            cursor: pointer;
        }
    `,
    articleLinkStyles: css`
        &:link { text-decoration:none; }
        &:visited { text-decoration:none; }
        &:hover { text-decoration:none; }
        &:active { text-decoration:none; }
    `
};

export default Styles;