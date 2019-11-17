import { singleton } from "tsyringe";
import { HtmlObject } from "~/HtmlObject";

@singleton()
export class Application {
    private htmlObject: HtmlObject;

    public get base(): HtmlObject {
        return this.htmlObject;
    }

    public initialze(): void {
        this.htmlObject = new HtmlObject(document.body);
    }
}