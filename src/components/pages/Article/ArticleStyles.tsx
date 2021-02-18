import { css } from "emotion";

const Styles = {
    articleStyles: css`
        h6 {
            margin-bottom: 40px;
        }

        h1, h2, h3, h4, h5, h6, p {
            text-align: center;
        }

        ul {
            display: table;
            margin-left: auto;
            margin-right: auto;
        }

        p {
            color: #444;
            font-size: 15pt;
            text-align: left;
        }

        img {
            max-width: 100%;
            border-radius: .7rem;
        }

        blockquote > p {
            color: #666;
            font-size: 20pt;
            font-family: Kreon, serif;
            text-align: center;
            border-top: 2px solid whitesmoke;
            border-bottom: 2px solid whitesmoke;
            padding-top: 10px;
            padding-bottom: 10px;
        }

        max-width: 800px;
    `
};

export default Styles;