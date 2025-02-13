// document.body.firstElementChild
// <div class=​"container">​…​</div>​
// let cont = document.body.firstElementChild
// undefined
// cont
// <div class=​"container">​…​</div>​
// cont.childNodes
// NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]0: textassignedSlot: nullbaseURI: "http://127.0.0.1:3000/Javascript/Lec01/Dom02.html"childNodes: NodeList []data: "\n        "firstChild: nullisConnected: truelastChild: nulllength: 9nextElementSibling: div.boxnextSibling: commentnodeName: "#text"nodeType: 3nodeValue: "\n        "ownerDocument: documentparentElement: div.containerparentNode: div.containerpreviousElementSibling: nullpreviousSibling: nulltextContent: "\n        "wholeText: "\n        "[[Prototype]]: Text1: commentbaseURI: "http://127.0.0.1:3000/Javascript/Lec01/Dom02.html"childNodes: NodeList []data: " this is a element "firstChild: nullisConnected: truelastChild: nulllength: 19nextElementSibling: div.boxnextSibling: textnodeName: "#comment"nodeType: 8nodeValue: " this is a element "ownerDocument: documentparentElement: div.containerparentNode: div.containerpreviousElementSibling: nullpreviousSibling: texttextContent: " this is a element "[[Prototype]]: Comment2: text3: div.box4: text5: div.box6: text7: div.box8: text9: div.box10: text11: div.box12: textlength: 13[[Prototype]]: NodeList
// cont.childNodes.children
// undefined
// cont.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]