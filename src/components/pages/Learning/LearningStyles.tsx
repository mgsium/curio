import { css } from "emotion";

const Styles = {
    entryNavigatorStyles: css`
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
            width: 0;
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
    `,
    activeTabStyles: css`
        color: rgb(0, 0, 245);

        &:after, &:visited:after {
            content: '';
            height: 3px;
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            background: rgb(0, 0, 245);
            transition: 0.2s;
        }
    `,
    entryListStyles: css`
        li {
            border-radius: 0px !important;
            transition: all .25s;

            &:hover {
                cursor: pointer;
                opacity: 0.8;
                transform: scale(1.02);
                border-radius: .7rem !important;
            }
        }
    `,
    entryLinkStyles: css`
        &:link { text-decoration:none; }
        &:visited { text-decoration:none; }
        &:hover { text-decoration:none; }
        &:active { text-decoration:none; }
    `
};

export default Styles;