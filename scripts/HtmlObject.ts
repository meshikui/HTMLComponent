
export class HtmlObject {
    private selfElement: HTMLElement;
    private selfParent: HtmlObject;

    public get element(): HTMLElement {
        return this.selfElement;
    }

    public get parent(): HtmlObject {
        return this.selfParent;
    }

    public set parent(parent: HtmlObject) {
        this.selfParent = parent;
        parent.element.appendChild(this.selfElement);
    }

    public get width(): number {
        return this.selfElement.offsetWidth;
    }

    public set width(width: number) {
        console.log(width);
    }

    public constructor(element: HTMLElement, parent?: HtmlObject) {
        this.selfElement = element;
        this.selfParent = parent ?? this;

        if (parent) {
            this.parent = parent;
        }
    }
}