import { css } from "emotion";

const Styles = {
    linkedInIcon: css`
        stroke: none;
        fill: #2867B2;

        transition: all .25s;
        &:hover {
            transform: scale(1.04);
            cursor: pointer;
        }
    `,
    githubIcon: css`
        stroke: black;
        fill: black;
    `,
    twitterIcon: css`
        stroke: none;
        fill: #1DA1F2;
    `
}

export default Styles;