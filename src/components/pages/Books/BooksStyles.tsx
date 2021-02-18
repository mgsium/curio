import { css } from "emotion";

const Styles = {
    bookJumbotronStyles: css`
        background: white;
        border: 3px solid whitesmoke;
        transition: all 0.5s;
        padding: 20px;

        h6 {
            color: #666;
        }
        
        &:hover {
            border-color: #C4C4C4;
            border-radius: 1rem;
            cursor: pointer;
        }
    `,
    linkStyles: css`
        &:link {
            text-decoration:none;
        }

        &:visited {
            text-decoration:none;
        }

        &:hover {
            text-decoration:none;
        }

        &:active {
            text-decoration:none;
        }
    `
}

export default Styles;