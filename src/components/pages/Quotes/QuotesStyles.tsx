import { css } from "emotion";

const Styles = {
    quoteText: css`
        -webkit-transition: font-size 2s;
        -moz-transition: font-size 2s;
        -o-transition: font-size 2s;
        transition: font-size 2s;
        font-size: 1.1em;
        font-family: Quicksand, serif;
    `,
    quoteJumbotronStyles: css`
        background: white;
        border: 3px solid whitesmoke;
        transition: all 2s;
        
        & .quote_text: { color: #999999; }

        &:hover {
            border-color: #C4C4C4;
            .quote_text { color: black; font-size: 1.5rem; }
            border-radius: 1rem;
            cursor: pointer;
        }
    `
};

export default Styles;