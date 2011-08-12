<?xml version='1.0'?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version='1.0'>

	<xsl:template name="foo">
		<xsl:param name="value" select="'0'"/>
	</xsl:template> 
	
	<xsl:template name="indent">
		<xsl:param name="n" />
		
		<xsl:if test="$n &gt; 0">
			<xsl:text>&#160;</xsl:text>
			<xsl:call-template name="indent">
				<xsl:with-param name="n" select="$n - 1" />
			</xsl:call-template>
		</xsl:if>
	
	</xsl:template>
	
	<xsl:template name="dingbat">
	<!-- now that I'm using the real serializer, all that dingbat malarky -->
	<!-- isn't necessary anymore... -->
	<xsl:param name="dingbat">bullet</xsl:param>
	  <xsl:choose>
		  <xsl:when test="$dingbat='bullet'">&#x2022;</xsl:when>
		  <xsl:when test="$dingbat='copyright'">&#x00A9;</xsl:when>
		  <xsl:when test="$dingbat='trademark'">&#x2122;</xsl:when>
		  <xsl:when test="$dingbat='trade'">&#x2122;</xsl:when>
		  <xsl:when test="$dingbat='registered'">&#x00AE;</xsl:when>
		  <xsl:when test="$dingbat='service'">(SM)</xsl:when>
		  <xsl:when test="$dingbat='nbsp'">&#x00A0;</xsl:when>
		  <xsl:when test="$dingbat='ldquo'">&#x201C;</xsl:when>
		  <xsl:when test="$dingbat='rdquo'">&#x201D;</xsl:when>
		  <xsl:when test="$dingbat='lsquo'">&#x2018;</xsl:when>
		  <xsl:when test="$dingbat='rsquo'">&#x2019;</xsl:when>
		  <xsl:when test="$dingbat='em-dash'">&#x2014;</xsl:when>
		  <xsl:when test="$dingbat='mdash'">&#x2014;</xsl:when>
		  <xsl:when test="$dingbat='en-dash'">&#x2013;</xsl:when>
		  <xsl:when test="$dingbat='ndash'">&#x2013;</xsl:when>
		  <xsl:when test="$dingbat='checkbox'">&#x2751;</xsl:when>
		  <xsl:when test="$dingbat='handpointing'">&#x261E;</xsl:when>
		  <xsl:when test="$dingbat='star'">&#x2605;</xsl:when>
		  <xsl:otherwise>
		    <xsl:text>&#x2022;</xsl:text>
		  </xsl:otherwise>
	  </xsl:choose>
	</xsl:template>


</xsl:stylesheet>

