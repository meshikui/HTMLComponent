import { container } from "tsyringe";
import { Application } from "~/Application";
import { ElementComponent } from "~/Components/ElementComponent";
import { HtmlObject } from "~/HtmlObject";

export class AElementComponent extends ElementComponent<HTMLAnchorElement> {
    protected element: HTMLAnchorElement;
    protected htmlObject: HtmlObject;

    public set text(text: string) {
        this.element.text = text;
    }

    protected awake(parent?: HtmlObject): void {
        console.log("Called Awake");
        this.element = document.createElement("a");

        const application = container.resolve(Application);
        this.htmlObject = new HtmlObject(this.element, parent ?? application.base);
    }
}