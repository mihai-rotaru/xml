function loadXMLDoc(docname)
{   
    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }

    xhttp.open("GET",docname,false);
    xhttp.send("");
    console.info( "xhttp: " + xhttp );
    console.info( "xhttp.responseXML: " + xhttp.responseXML );
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

function print_bookmarks_folder( my_xmlObject )
{
    var folders = my_xmlObject.getElementsByTagName( "folder" );
    for( var i = 0; i < folders.length; i++ )
    {
        folder = folders[i];
        window.write( "Folder: " + folder.getAttribute( "name" ) );
        //window.write( ( "Folder: " + folder) );
        window.write( "<ul>" );

        //print_bookmarks_folder( folder );

        window.write( "</ul>" );
    }

    console.info("SAAAAAAAAAAAAAAAA");
    bookmarks = my_xmlObject.getElementsByTagName( "bookmark" );
    //bookmarks = my_xmlObject.
    console.info("length: " + bookmarks.length );
    //for( bookmark in bookmarks )
    for( var j=0; j<bookmarks.length; j++ )
    {
        console.info( "j = " + j );
        bookmark = bookmarks[j];
        console.info( bookmark );
        //console.info( getMethods( bookmark ));
        console.info( bookmark.getElementsByTagName );
        console.info( bookmark.getElementsByTagName("title") );
        console.info( getMethods(bookmark.getElementsByTagName("title")));
        console.info("bookmark: " + bookmark.getElementsByTagName("title")[0].nodeValue );
        //document.write( "<li>" );
        //document.write( bookmark.getElementsByTagName("title")[0].nodeValue );
        //document.write( "<a href=\"" );
        //document.write( bookmark.getElementsByTagName("url")[0].nodeValue );
        //document.write( "\"" );
        //document.write( bookmark.getElementsByTagName("url")[0].nodeValue );
        //document.write( "</a></li>" );
    }
    console.info("EEEEEEEEEEEEEXITING");
}

function make_list( xmlDoc )
{
    //    document.write( xmlDoc.getElementsByTagName( "*" );
    //    document.write( xmlDoc )
    print_bookmarks_folder( xmlDoc );
    console.info("------------ exiting make_list");
}

function say_hello()
{
    var xmlDoc=loadXMLDoc("bookmarks.xml");
    make_list( xmlDoc );
    console.info("------------ exiting say_hello");
}
