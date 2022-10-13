export class Link {
    title!: string;
    url?: string;
    children?: Link[];
    isVisible?: boolean; //si notre lien est visible ou no
}