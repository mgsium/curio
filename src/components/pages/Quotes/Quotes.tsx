import React from "react";

import { cx } from "emotion";
import Styles from "./QuotesStyles";
import { Container, Jumbotron } from "react-bootstrap";
import Template from "../Template/Template";
import Quote from "../../types/Quote";

type Props = {};
type State = {};

export default class Quotes extends React.Component<Props, State> {
    quotes: Quote[];

    constructor(props: Props) {
        super(props);

        this.quotes = [
            { quote_text: "What was worse, we asked among ourselves, to sit and wait for our own deaths with proper somber faces? Or to choose our own happiness?", author: "Amy Tan", source: "The Joy Luck Club" },
            { quote_text: "There are decades where nothing happens - and there are weeks where decades happen.", author: "Vladimir Ilyitch Ulyanov", source: "The Chief Tasks of Our Day" },
            { quote_text: "He who cannot lie does not know what the truth is.", author: "Friedrich Nietzsche", source: "Thus Spoke Zarathustra" },
            { quote_text: "People assign values to gains and losses rather than to wealth.", author: "Daniel Kahneman", source: "Thinking, Fast and Slow" },
            { quote_text: "Only to live, to live, to live! To live, no matter what - only to live! How true! Lord, how true! Man is a scoundrel! And he's a scoundrel who calls him a scoundrel for that.", author: "Fyodor Dostoevsky", source: "Crime and Punishment" },
            { quote_text: "Nature has placed mankind under the governance of two sovereign masters, pain and pleasure .", author: "Jeremy Bentham", source: "Introduction to the Principles of Morals and Legislation" },
            { quote_text: "Nothing is stranger to Man than his own image.", author: "Karel Câpek", source: "Rossum's Universal Robots" },
            { quote_text: "The the face of ambiguity, refuse the temptation to guess.", author: "Tim Peters", source: "The Zen of Python" },
            { quote_text: "Keep your eyes on the stars and your feet on the ground.", author: "Theodore D.Roosevelt", source: "" },
            { quote_text: "If only it were so simple! If only there were evil people somewhere insidiously commiting evil deeds, and it were necessary only to separate them from the rest of us and destroy them. But the line dividing good and evil cuts through the heart of every human being.", author: "Aleksandr Solzhenitsyn", source: "The Gulag Archipelago" },
            { quote_text: "The eye with which one looks at reality must constantly change.", author: "Søren Kierkegaard", source: "Either/Or" }
        ]
    }

    render() {
        return (
            <Template>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {
                        this.quotes.map( q => (
                            <Jumbotron className={cx( Styles.quoteJumbotronStyles )}>
                                <blockquote style={{ textAlign: "center" }}>
                                    <p className={cx( Styles.quoteText, "quote_text" )}>
                                        {q.quote_text}
                                    </p>
                                    <footer className="blockquote-footer" style={{ fontSize: "0.9rem" }}>
                                        <cite title={q.author}>
                                            {q.author}
                                        </cite>
                                        {
                                            q.source ? (
                                                <cite title={q.source}>
                                                    {`, ${q.source}`}
                                                </cite>
                                            ) : null
                                        }
                                    </footer>
                                </blockquote>
                            </Jumbotron>
                        ))
                    }
                </ul>
            </Template>
        )
    }

}