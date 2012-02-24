<?xml version="1.0"?>
<!-- File: stylingXSL.xsl -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
     <head>
        <title>Staff deployment</title>
      </head>
      <body>
        <h1> Staff and their departmental duties </H1>
        <h2>
          Name: <xsl:value-of select="staff-roll/post/name"/>
          <hr/>
          Job title: <xsl:value-of select="staff-roll/post/@type"/>
        </h2>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
