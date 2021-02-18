import EntryType from "./EntryType";

type Entry = {
    title: string,
    author: string,
    link: string,
    link_text: string,
    entry_type: EntryType
}

export default Entry;