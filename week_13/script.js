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
// from: http://www.w3schools.com/dom/prop_element_nextsibling.asp
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
function get_nextsibling(n)
{
    x=n.nextSibling;
    while (x.nodeType!=1)
    {
        x=x.nextSibling;
    }
    return x;
}

function print_bookmarks_folder( my_xmlObject )
{
    var folders = my_xmlObject.getElementsByTagName( "folder" );
    var html_code = "";
    for( var i = 0; i < folders.length; i++ )
    {
        folder = folders[i];
        html_code += "<hr/>";
        html_code += "Folder: " + folder.getAttribute( "name" );
        html_code += "<ul>";
        html_code += "</ul>";
    }

    bookmarks = my_xmlObject.getElementsByTagName( "bookmark" );
    console.info(bookmarks);
    //for( bookmark in bookmarks )
    for( var j=0; j<bookmarks.length; j++ )
    {
        console.info( "j = " + j );
        bookmark = bookmarks[j];
        console.info( bookmark.getElementsByTagName( "title" )[0].textContent );
    }
    document.getElementById("test").innerHTML = html_code;
}

function make_list( xmlDoc )
{
    print_bookmarks_folder( xmlDoc );
}

function say_hello()
{
    var xmlDoc=loadXMLDoc("bookmarks.xml");
    make_list( xmlDoc );
}
