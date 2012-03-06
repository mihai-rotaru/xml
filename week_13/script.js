function loadXMLDoc(docname)
{   
    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }

    xhttp.open("GET",docname,false);
    xhttp.send("");
    return xhttp.responseXML;
}

function loadXMLString(txt)
{
    if (window.DOMParser)
    {
        parser=new DOMParser();
        xmlDoc=parser.parseFromString(txt,"text/xml");
    }
    else // Internet Explorer
    {
        xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async="false";
        xmlDoc.loadXML(txt);
    }

    return xmlDoc;
}

// returns all methods supported by obj
// from: http://stackoverflow.com/questions/152483/is-there-a-way-to-print-all-methods-of-an-object-in-javascript 
function getMethods(obj) {
    var result = [];
    for (var id in obj) {
        try {
            if (typeof(obj[id]) == "function") {
                result.push(id + ": " + obj[id].toString());
            }
        } catch (err) {
            result.push(id + ": inaccessible");
        }
    }
    return result;
}

// check if the next sibling node is an element node
// ---------------------------------------------------------------
// Node types:
// 1 	ELEMENT_NODE
// 2 	ATTRIBUTE_NODE
// 3 	TEXT_NODE
// 4 	CDATA_SECTION_NODE
// 5 	ENTITY_REFERENCE_NODE
// 6 	ENTITY_NODE
// 7 	PROCESSING_INSTRUCTION_NODE
// 8 	COMMENT_NODE
// 9 	DOCUMENT_NODE
// 10 	DOCUMENT_TYPE_NODE
// 11 	DOCUMENT_FRAGMENT_NODE
// 12 	NOTATION_NODE
// ---------------------------------------------------------------
function get_nextsibling( node )
{
    x = node.nextSibling;
    while( x && x.nodeType != 1 )
    {
        x = x.nextSibling;
    }
    return x;
}

// check if the first node is an element node
function get_firstchild( node )
{
    x = node.firstChild;
    while( x && x.nodeType !=1 )
    {
        x = x.nextSibling;
    }
    return x;
}

var html_code = "";
function print_folder( xml_fragment )
{
    if( xml_fragment.nodeType != 9 && xml_fragment.hasAttribute( "name" ))
        html_code += "Folder: " + xml_fragment.getAttribute( "name" );

    html_code += "<ul>";

    if( xml_fragment.hasChildNodes )
    {
        // iterate over top-level child elements. Recursively call 'print_folder'
        // for 'folder' elements, and print all 'bookmark' elements.
        var el = get_firstchild( xml_fragment );
        while( el )
        {
            if( el.nodeName == 'folder' || el.nodeName == 'bookmarks' )
                print_folder( el );
            else if( el.nodeName == 'bookmark' )
            {
                html_code += "<li>";
                html_code += "<a href=\"" + el.getElementsByTagName("url")[0].textContent + "\">";
                html_code += el.getElementsByTagName("title")[0].textContent + "</a>"
                html_code += "</li>";
            }
            el = get_nextsibling( el );
        }
    }
    html_code += "</ul>";
}

function say_hello()
{
    var xmlDoc=loadXMLDoc("bookmarks.xml");
    hook = document.getElementById("test");
    html_code = "";
    print_folder( xmlDoc );
    hook.innerHTML = html_code;
}
