export function toPage(text: string) {
    const out = document.getElementById('output');
    if (out === undefined) {
        throw new Error("No id=output node found in page");
    }
    out.innerText += `\n${text}`;
}