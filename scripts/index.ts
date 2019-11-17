// tslint:disable-next-line: no-import-side-effect
import "reflect-metadata";
// tslint:enable-next-line: no-import-side-effect
import { container } from "tsyringe";
import { Application } from "~/Application";
import { AElementComponent } from "~/Components";

window.onload = () => {
    const application = container.resolve(Application);
    application.initialze();

    const aElement = new AElementComponent(application.base);
    aElement.text = "nekoneko";
    console.log("aElement", aElement);
    console.log("aElement.object.width", aElement.object.width);
};