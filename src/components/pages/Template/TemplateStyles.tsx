import { css } from "emotion";

const Styles = {
    PageStyles: css `
        font-family: Ubuntu, sans-serif;

        h1, h2, h3, h4, h5, h6, .headerfont {
            font-family: Kreon, serif;
        }
    `,
    BlogHeader: css `
        font-size: 7rem;
        text-align: center;
        transition: all 0.5s;

        &:hover {
            color: grey;
            cursor: pointer;
        }
    `
};

export default Styles;