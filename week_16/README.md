First, fop is needed; download from: http://uk.mirror.devgeni.us/apache//xmlgraphics/fop/binaries/fop-1.0-bin.zip
Unzip it in your C:\ drive, so that you have a folder named C:\fop-1.0
Then, assuming your files ( bookmarks.xml and transform-to-pdf.xsl ) are in C:\xml, open the command line
( Start -> Run... -> "cmd" ) and go to that folder: `cd C:\xml`, then run this command:

`C:\xml>C:\fop-1.0\fop -xml bookmarks.xml -xsl transform-to-pdf.xsl -pdf out.pdf`
