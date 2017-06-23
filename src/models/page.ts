export class Page {
    public title: string;
    public component: any;
    public icon: string;
    public color: string;

    constructor(title: string, component: any, icon: string) {
        this.title = title;
        this.component = component;
        this.icon = icon;
    }
}