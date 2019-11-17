import { HtmlObject } from "~/HtmlObject";

export abstract class ElementComponent<T extends HTMLElement> {
    protected abstract element: T;
    protected abstract htmlObject: HtmlObject;

    public get object(): HtmlObject {
        return this.htmlObject;
    }

    public constructor(parent?: HtmlObject) {
        this.awake(parent);
    }

    protected abstract awake(parent?: HtmlObject): void;
}