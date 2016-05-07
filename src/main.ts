import {getName} from "./Name";
import * as Print from "./Print";

export function main() {
    const greeting = `Hello, ${getName()}`;
    Print.toPage(greeting);
}