import { css } from "emotion";

const Styles = {
    PageStyles: css `
        font-family: Quicksand, sans-serif;

        h1, h2, h3, h4, h5, h6, .headerfont {
            font-family: Lato, serif;
        }
    `,
    BlogHeader: css `
        font-size: 7rem;
        text-align: center;
        transition: all 0.5s;
        font-weight: bold;
        display: inline-block;

        &:hover {
            transform: scale(1.04);
            cursor: pointer;
        }
    `,
    subHeader: css`
        font-family: Quicksand, sans-serif;
        color: #333;
        font-size: 14pt;
        text-align: center;
    `
};

export default Styles;