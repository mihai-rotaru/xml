<?xml version="1.0"?>
<!-- File: stylingXSL.xsl -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
     <head>
        <title>Staff deployment</title>
      </head>
      <body>
        <h1> Staff and their departmental duties </h1>
        <xsl:for-each select="staff-roll/post">
            <h2>
              Name: <xsl:value-of select="name"/>
              <br/>
              Job title: <xsl:value-of select="@type"/>
            </h2>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
