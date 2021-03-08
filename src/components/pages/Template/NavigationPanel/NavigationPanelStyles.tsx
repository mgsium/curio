import { css } from "emotion";

const Styles = {
    navigationStyles: css`
        text-align: center;
        display: table;
        margin-left: auto;
        margin-right: auto;

        a {
            text-decoration: none;
            position: relative;
            color: #666;
            padding: 15px;
            transition: all .25s;
            border-radius: .45rem;
            font-weight: bold;
            margin: 0 auto;
        }

        a:hover {
            background: whitesmoke;
        }
    `
};

export default Styles;