import React from "react";

import { cx } from "emotion";
import Styles from "./LearningStyles";
import Template from "../Template/Template";
import { Filter } from "react-feather";
import Entry from "../../types/Entry";
import EntryType from "../../types/EntryType";
import { Nav } from "react-bootstrap";

enum FilterType {
    ALL,
    SCIENCE,
    TECH,
    MATH,
    HISTORY,
    OTHER
}

type Props = {};
type State = {
    filter: FilterType
};

export default class Learning extends React.Component<Props, State> {
    entries: Entry[];
    
    constructor(props: Props) {
        super(props);

        this.state = {
            filter: FilterType.ALL
        }

        this.entries = [
            { title: "Managing the development of Large Software Systems (The Waterfall Method)", author: "Winston Royce", link: "https://firebasestorage.googleapis.com/v0/b/classicaldissident.appspot.com/o/Papers%2Froyce1970.pdf?alt=media&token=58d0a4f3-831b-434f-a935-66ccf847da5e", link_text: "View Here", entry_type: EntryType.TECH },
            { title: "RISC vs CISC Computer Architectures (David Patterson)", author: "Lex Fridman", link: "https://www.youtube.com/watch?v=NNgdcn4Ux1k", link_text: "Watch on Youtube", entry_type: EntryType.TECH },
            { title: "Topology and Higher Dimensions", author: "Zach Star", link: "https://www.youtube.com/watch?v=lmcT2mP2bfE", link_text: "Watch on Youtube", entry_type: EntryType.MATH },
            { title: "Hidden diversity of vacancy networks in Prussian blue analogues", author: "Nature", link: "https://www.nature.com/articles/s41586-020-1980-y", link_text: "Read Here", entry_type: EntryType.SCIENCE },
            { title: "An Introduction to Markov Chains", author: "Dartmouth College", link: "https://firebasestorage.googleapis.com/v0/b/classicaldissident.appspot.com/o/Papers%2FMarkov%20Chains%20Dartmouth.pdf?alt=media&token=98cae2d6-bd44-4627-84a5-19ff7292059b", link_text: "Read Here", entry_type: EntryType.MATH },
            { title: "Real Economics in Virtual Worlds: A Massively Multiplayer Online Game Case Study: Runescape", author: "Tanla Bilir", link: "https://firebasestorage.googleapis.com/v0/b/classicaldissident.appspot.com/o/Papers%2FSSRN-id1655084.pdf?alt=media&token=f8c44663-9fb5-410a-aa12-378d4627020f", link_text: "Read Here", entry_type: EntryType.TECH },
            { title: "Computing Machinery and Intelligence", author: "Alan Turing", link: "https://firebasestorage.googleapis.com/v0/b/classicaldissident.appspot.com/o/Papers%2FTuring_1950_ImitationGame.pdf?alt=media&token=2cd772dd-7ba2-4301-a645-4f30a70617b1", link_text: "Read Here", entry_type: EntryType.TECH },
            { title: "The Early Phases of British Interest in Russian Literature", author: "Gilbert Phelps", link: "https://www.jstor.org/stable/4204960?read-now=1&seq=1#page_scan_tab_contents", link_text: "Read Here", entry_type: EntryType.HISTORY },
            { title: "Avoid News", author: "Rolf Dobelli", link: "https://firebasestorage.googleapis.com/v0/b/classicaldissident.appspot.com/o/Papers%2F2010-dobelli.pdf?alt=media&token=0d377501-4595-4a11-9d06-a2e06737b280", link_text: "Read Here", entry_type: EntryType.OTHER },
            { title: "We Tried to Do Vanlife Right. It Broke Us Down.", author: "Chris Wright", link: "https://www.outsideonline.com/2399404/van-life-difficulties", link_text: "Read Here", entry_type: EntryType.OTHER },
            { title: "If you're happy, then we know it: Scientists build 'Hedonometer'", author: "", link: "https://phys.org/news/2009-07-youre-happy-scientists-hedonometer.html", link_text: "Read Here", entry_type: EntryType.SCIENCE },
            { title: "Juno Takes on Uber", author: "Sheelah Kolhatkar", link: "https://www.newyorker.com/magazine/2016/10/10/juno-takes-on-uber", link_text: "Read More", entry_type: EntryType.TECH },
            { title: "CycleGAN", author: "", link: "https://firebasestorage.googleapis.com/v0/b/classicaldissident.appspot.com/o/Papers%2FCycleGAN-Paper.pdf?alt=media&token=fe9d2db3-801b-4c1a-9d88-4c04bfd31a09", link_text: "Read Here", entry_type: EntryType.TECH },
            { title: "Words Matter: The Language of Addiction and Life-Saving Treatment", author: "Sarah Wakeman", link: "https://www.health.harvard.edu/blog/words-matter-language-addiction-life-saving-treatments-2016081510130", link_text: "Read Here", entry_type: EntryType.SCIENCE },
            { title: "Power generation from ambient humidity using protein nanowires", author: "", link: "https://www.nature.com/articles/s41586-020-2010-9", link_text: "Read Here", entry_type: EntryType.SCIENCE }
        ]

        this.setFilterType = this.setFilterType.bind(this);
    }

    getListGroupItemVariant(entryType: EntryType): { name: string, variant: string } {
        switch(entryType) {
            case EntryType.TECH:
                return { name: "Technology", variant: "list-group-item-primary" };
            case EntryType.SCIENCE:
                return { name: "Science", variant: "list-group-item-success"};
            case EntryType.MATH:
                return { name: "Math", variant:  "list-group-item-secondary"};
            case EntryType.HISTORY:
                return { name: "History", variant: "list-group-item-info"};
            default:
                return { name: "Other", variant: "list-group-item-light"};
        }
    }

    getFilteredEntries(): Entry[] {
        switch(this.state.filter) {
            case FilterType.TECH:
                return this.entries.filter(e => e.entry_type == EntryType.TECH);
            case FilterType.SCIENCE:
                return this.entries.filter(e => e.entry_type == EntryType.SCIENCE);
            case FilterType.MATH:
                return this.entries.filter(e => e.entry_type == EntryType.MATH);
            case FilterType.HISTORY:
                return this.entries.filter(e => e.entry_type == EntryType.HISTORY);
            case FilterType.OTHER:
                return this.entries.filter(e => e.entry_type == EntryType.OTHER);
            default:
                return this.entries;
        }
    }

    setFilterType(filter: FilterType) {
        this.setState({ filter: filter });
    }

    render() {
        return (
            <Template>
                <br/>
                <h3 style={{ textAlign: "center" }}>Interesting Papers, Articles and Videos</h3>
                <div id="interesting-articles-section">
                    <div style={{ maxWidth: 600 }} className="ml-auto mr-auto">
                        <Nav id="interesting-articles-nav-tab" className={cx( Styles.entryNavigatorStyles )} style={{ padding: 20, paddingBottom: 10 }}>
                            <Nav.Item className="ml-auto mr-auto" id="all-tab" onClick={() => { this.setFilterType(FilterType.ALL) }}>
                                <a href="#"> All </a>
                            </Nav.Item>
                            <Nav.Item className="ml-auto mr-auto" id="science-tab" onClick={() => { this.setFilterType(FilterType.SCIENCE) }}>
                                <a href="#">Science</a>
                            </Nav.Item>
                            <Nav.Item className="ml-auto mr-auto" id="technology-tab" onClick={() => { this.setFilterType(FilterType.TECH) }}>
                                <a href="#">Tech</a>
                            </Nav.Item>
                            <Nav.Item className="ml-auto mr-auto" id="math-tab" onClick={() => { this.setFilterType(FilterType.MATH) }}>
                                <a href="#">Math</a>
                            </Nav.Item>
                            <Nav.Item className="ml-auto mr-auto" id="history-tab" onClick={() => { this.setFilterType(FilterType.HISTORY) }}>
                                <a href="#">History</a>
                            </Nav.Item>
                            <Nav.Item className="ml-auto mr-auto" id="other-tab" onClick={() => { this.setFilterType(FilterType.OTHER) }}>
                                <a href="#">Other</a>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div>
                        <ul className={ cx( Styles.entryListStyles, "list-group" ) } id="ext-articles">
                            {
                                this.getFilteredEntries().map(e => {
                                    const listGroupItemVariant = this.getListGroupItemVariant(e.entry_type);
                                    return (
                                        <a className={cx( Styles.entryLinkStyles )} href={e.link} target="_blank" rel="noreferrer">
                                            <li className={`list-group-item ${listGroupItemVariant.variant} ext-article shadow-sm`} style={{ marginBottom: 5, padding: 15 }}>
                                                <strong>
                                                    { e.author ? `${e.title}, ${e.author}` : e.title }
                                                </strong>
                                                <span style={{ float: "right" }}>
                                                    {listGroupItemVariant.name}
                                                </span>
                                            </li>
                                        </a>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Template>
        )
    }

}