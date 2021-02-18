import { css } from "emotion";

const Styles = {
    profileCardStyles: css`
        border: 3px solid whitesmoke;
        margin-bottom: 20px;
        padding: 20px;
        transition: all 0.5s;

        p {
            font-size: 15pt;
            color: #666;
        }
        
        img {
            padding: 20px;
            border: 3px solid whitesmoke;
            transition: all 0.5s;
        }

        &:hover {
            border-radius: 1rem;
            border-color: #C4C4C4;

            img {
                border-color: #C4C4C4;
                padding: 0;
            }
        }
    `
};

export default Styles;