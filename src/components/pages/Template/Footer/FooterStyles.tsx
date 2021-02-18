import { css } from "emotion";

const Styles = {
    BlogFooter: css `
        position: fixed;
        background-color: white;
        width: 100%;
        height: 60px;
        bottom: 0px;
        margin-bottom: 0;
        z-index: 1000;
        font-size: 13pt;
        margin-top: 0;
    `,
    footerIconColumnStyles: css`
        svg {
            color: black;
            transition: all 0.25s;

            &:hover {
                cursor: pointer;
                color: #666;
            }
        }
    `
};

export default Styles;