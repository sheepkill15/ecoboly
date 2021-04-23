import { Book } from "../types";

export default (item: Book) => {
    window.open(item.link, '_blank');
};