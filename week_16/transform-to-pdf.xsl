<?xml version="1.0" encoding="utf-8"?> 
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:fo="http://www.w3.org/1999/XSL/Format"> 
    <xsl:output method="xml" indent="yes"/> 
    <xsl:template match="/"> 
        <fo:root> 
            <fo:layout-master-set> 
                <fo:simple-page-master master-name="A4-portrait" page-height="29.7cm" 
                    page-width="21.0cm" margin="2cm"> 
                    <fo:region-body/> 
                </fo:simple-page-master> 
            </fo:layout-master-set> 

            <fo:page-sequence master-reference="A4-portrait">
                <fo:flow flow-name="xsl-region-body">
                    <xsl:apply-templates select="bookmarks"/>
                </fo:flow> 
            </fo:page-sequence> 
        </fo:root> 
    </xsl:template>

    <xsl:template match="bookmarks">
        <xsl:for-each select="//bookmark">
            <fo:block line-height="22pt" font-size="18pt" text-align="left">
                <xsl:value-of select="title"/>
                <xsl:text>: </xsl:text>
            </fo:block>
            <fo:block color="blue">
                <xsl:value-of select="url"/>
            </fo:block>
        </xsl:for-each>
    </xsl:template>

</xsl:stylesheet>
