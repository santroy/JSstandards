import eQuery from "./Library/eQuery.js";
import { isSelector, isDOMNode, isHTMLTag } from "./utils/Check.js";
import { findElements, createElement } from "./utils/Element.js";

function init(param) {

    let nodes = null;

    if ( isSelector(param) ) {
        console.log("This is selector.");
        nodes = findElements(param);
    } else if( isHTMLTag(param) ) {
        console.log("This is HTML tag.");
        nodes = createElement(param);
    } else if( isDOMNode(param) ) {
        console.log("This is node element.");
        nodes = param;
    }

    return eQuery.create(nodes);
    


}

window.eQuery = init;