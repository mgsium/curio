import React from "react";

import { cx } from "emotion";
import Styles from "./BooksStyles";

import Template from "../Template/Template";
import { Jumbotron } from "react-bootstrap";
import Book from "../../types/Book";

type Props = {};
type State = {};

export default class Books extends React.Component<Props, State> {
    books: Book[];

    constructor(props: Props) {
        super(props);

        this.books = [
            { title: "The Gulag Archipelago", author: "Aleksandr Solzhenitsyn", goodreads_link: "https://www.goodreads.com/book/show/70561.The_Gulag_Archipelago_1918_1956" },
            { title: "12 Rules for Life", author: "Jordan B. Peterson", goodreads_link: "https://www.goodreads.com/book/show/30257963-12-rules-for-life" },
            { title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", goodreads_link: "https://www.goodreads.com/book/show/51893.Thus_Spoke_Zarathustra" },
            { title: "Nineteen Eighty-Four", author: "George Orwell", goodreads_link: "https://www.goodreads.com/book/show/40961427-1984" },
            { title: "Crime and Punishment", author: "Fyodor Dostoevsky", goodreads_link: "https://www.goodreads.com/book/show/7144.Crime_and_Punishment" },
            { title: "Brave New World", author: "Aldous Huxley", goodreads_link: "https://www.goodreads.com/book/show/5129.Brave_New_World" },
            { title: "Turing's Cathedral", author: "George Dyson", goodreads_link: "https://www.goodreads.com/book/show/12625589-turing-s-cathedral" },
            { title: "Thinking, Fast and Slow", author: "Daniel Kahnemann", goodreads_link: "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow" },
            { title: "To Be a Machine", author: "Mark O'Connell", goodreads_link: "https://www.goodreads.com/book/show/30555486-to-be-a-machine" },
            { title: "KL: A History of the Nazi Concentration Camps", author: "Nikolaus Waschmann", goodreads_link: "https://www.goodreads.com/book/show/22237143-kl" },
            { title: "Gods of Metal", author: "Eric Schlosser", goodreads_link: "https://www.goodreads.com/book/show/25577505-gods-of-metal" },
            { title: "The Cossacks", author: "Lev Tolstoy", goodreads_link: "https://www.goodreads.com/book/show/17698.The_Cossacks" },
            { title: "Socrates' Defence", author: "Plato", goodreads_link: "https://www.goodreads.com/book/show/24874318-socrates-defence" },
            { title: "The Bullet Journal Method", author: "Ryder Carroll", goodreads_link: "https://www.goodreads.com/book/show/39071691-the-bullet-journal-method" },
            { title: "Oblomov", author: "Ivan Goncharov", goodreads_link: "https://www.goodreads.com/book/show/254308.Oblomov" },
            { title: "Catch-22", author: "Joseph Heller", goodreads_link: "https://www.goodreads.com/book/show/168668.Catch_22" },
            { title: "The Master Algorithm", author: "Pedro Domingos", goodreads_link: "https://www.goodreads.com/book/show/24612233-the-master-algorithm" },
            { title: "Einstein's Unfinished Revolution", author: "Lee Smolin", goodreads_link: "https://www.goodreads.com/book/show/40917082-einstein-s-unfinished-revolution" },
            { title: "The Joy Luck Club", author: "Amy Tan", goodreads_link: "https://www.goodreads.com/book/show/7763.The_Joy_Luck_Club" },
            { title: "Either/Or: A Fragment of Life", author: "Søren Kierkegaard", goodreads_link: "https://www.goodreads.com/book/show/24970.Either_Or" },
            { title: "Fear and Trembling", author: "Søren Kierkegaard", goodreads_link: "https://www.goodreads.com/book/show/24965.Fear_and_Trembling" },
            { title: "Closing Time", author: "Joseph Heller", goodreads_link: "https://www.goodreads.com/book/show/223737.Closing_Time" },
            { title: "Fight Club", author: "Chuck Palahniuk", goodreads_link: "https://www.goodreads.com/book/show/36236124-fight-club" },
            { title: "Indistractable", author: "Nir Eyal", goodreads_link: "https://www.goodreads.com/book/show/44595007-indistractable" },
            { title: "Where Wizards Stay Up Late: The Origins of the Internet", author: "Katie Hafner, Matthew Lyon", goodreads_link: "https://www.goodreads.com/book/show/281818.Where_Wizards_Stay_Up_Late" },
            { title: "Digital Minimalism", author: "Cal Newport", goodreads_link: "https://www.goodreads.com/book/show/40672036-digital-minimalism" },
            { title: "Fahrenheit 451", author: "Ray Bradbury", goodreads_link: "https://www.goodreads.com/book/show/13079982-fahrenheit-451" },
            { title: "Bad Blood", author: "John Carreyrou", goodreads_link: "https://www.goodreads.com/book/show/37976541-bad-blood" }
        ]
    }

    render() {
        return (
            <Template>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {
                        this.books.map(q => (
                            <a className={cx( Styles.linkStyles )} href={q.goodreads_link} target="_blank" rel="noreferrer">
                                <Jumbotron className={cx( Styles.bookJumbotronStyles )}>
                                    <h4>{q.title}</h4>
                                    <h6>{q.author}</h6> 
                                </Jumbotron>
                            </a>
                        ))
                    }
                </ul>
            </Template>
        )
    }

}