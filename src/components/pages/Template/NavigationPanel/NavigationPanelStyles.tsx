import { css } from "emotion";

const Styles = {
    navigationStyles: css`
        text-align: center;
        
        .nav-item {
            font-weight: bold;
            margin: 7px 16px;
        }

        a, a:visited {
            text-decoration: none;
            position: relative;
            color: #666;
        }

        a:hover {
            color: rgb(0, 0, 245);
        }

        a:after, a:visited:after {
            content: '';
            height: 3px;
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0%;
            background: rgb(0, 0, 245);
            transition: 0.2s;
        }

        a:hover:after, a:visited:hover:after {
            width: 100%;
        }

        a.block, a:visited.block {
            display: block;
            padding: 0.5em;
        }

        a.block:hover, a:visited.block:hover {
            background: #eee;
        }
    `
};

export default Styles;