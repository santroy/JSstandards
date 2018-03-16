export function isSelector(value) {
    console.log("Testing argument is selector...");
    return (
        typeof value === "string" && !isHTMLTag(value) && !isDOMNode(value)
    );
}

export function isHTMLTag(value) {
    console.log("Testing argument is HTML tag...");
    return (
        typeof value === "string" && value.charAt(0) === "<" && value.charAt(value.length - 1) === ">"
    );
}

export function isDOMNode(value) {
    console.log("Testing argument is node element...");
    return (
        typeof value === "object" && value instanceof Element
    );
}