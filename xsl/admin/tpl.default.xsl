<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<!-- INCLUDES -->
	<!--xsl:include href="inc.elements.xsl" /-->
	<xsl:include href="inc.common.xsl" />

	<xsl:output
		method="html"
		encoding="utf-8"
		indent="no"
		doctype-system="about:legacy-compat"
	/>

	<xsl:key name="nav_categories" match="/root/content/menuoptions/menuoption" use="@category" />

	<!-- TEMPLATE -->
	<xsl:template name="template">
		<xsl:param name="title" />
		<xsl:param name="h1" />
		<xsl:param name="js_files" />
		<xsl:param name="css_files" />
		<xsl:param name="site_name" />
		<xsl:param name="ver_name" />

		<html>
			<head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="robots" content="nofollow" />

				<base href="{/root/meta/base}admin/" />

				<link type="text/css" href="//fonts.googleapis.com/css?family=Leckerli+One" rel="stylesheet" />
				<link type="text/css" href="//fonts.googleapis.com/css?family=Chau+Philomene+One" rel="stylesheet" />
				<link type="text/css" href="//fonts.googleapis.com/css?family=Droid+Sans:400,700" rel="stylesheet" />
				<link type="text/css" href="../css/admin/style.css" rel="stylesheet" media="all" />

				<!-- jQuery -->
				<!--script type="text/javascript" src="http://code.jquery.com/jquery-1.10.1.min.js" />
				<script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.min.js" />
				<link type="text/css" rel="stylesheet" media="all" href="http://code.jquery.com/ui/1.9.0/themes/base/jquery-ui.css" /-->

				<script type="text/javascript" src="//code.jquery.com/jquery-1.11.1.min.js"></script>
				<script type="text/javascript" src="//code.jquery.com/ui/1.11.1/jquery-ui.min.js"></script>
				<script type="text/javascript" src="../js/admin/jquery-ui-timepicker-addon.js"></script>
				<script type="text/javascript" src="../js/admin/jquery.mjs.nestedsortable.js"></script>
				<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/themes/smoothness/jquery-ui.css" type="text/css" media="all" />

				<script type="text/javascript" src="../js/admin/main.js"></script>

				<!-- Custom CSS files -->
				<xsl:if test="$css_files">
					<xsl:for-each select="$css_files/file">
						<xsl:if test="$ver_name = ''">
							<link rel="stylesheet" type="text/css" href="{.}" />
						</xsl:if>
						<xsl:if test="not($ver_name = '')">
							<link rel="stylesheet" type="text/css" href="{.}?ver={$ver_name}" />
						</xsl:if>
					</xsl:for-each>
				</xsl:if>
				<xsl:for-each select="/root/meta/css/path">
					<xsl:if test="$ver_name = ''">
						<link rel="stylesheet" type="text/css" href="{.}" />
					</xsl:if>
					<xsl:if test="not($ver_name = '')">
						<link rel="stylesheet" type="text/css" href="{.}?ver={$ver_name}" />
					</xsl:if>
				</xsl:for-each>

				<!-- Custom JS files -->
				<xsl:if test="$js_files">
					<xsl:for-each select="$js_files/file">
						<xsl:if test="$ver_name = ''">
							<script type="text/javascript" src="{.}" />
						</xsl:if>
						<xsl:if test="not($ver_name = '')">
							<script type="text/javascript" src="{.}?ver={$ver_name}" />
						</xsl:if>
					</xsl:for-each>
				</xsl:if>
				<xsl:for-each select="/root/meta/js/path">
					<xsl:if test="$ver_name = ''">
						<script type="text/javascript" src="{.}"></script>
					</xsl:if>
					<xsl:if test="not($ver_name = '')">
						<script type="text/javascript" src="{.}?ver={$ver_name}"></script>
					</xsl:if>
				</xsl:for-each>

				<title><xsl:value-of select="$title" /></title>
			</head>
			<body>
				<nav class="main_nav nav" role="navigation">
					<h1 class="branding"><a class="logo" href="/">Pajas</a></h1>
					<xsl:for-each select="/root/content/menuoptions/menuoption">
						<xsl:sort select="@category" />
						<xsl:if test="generate-id() = generate-id(key('nav_categories',@category))">
							<h3 class="menuheading">
								<xsl:if test="@category != ''">
									<xsl:value-of select="@category" />
								</xsl:if>
								<xsl:if test="@category = ''">
									<xsl:text>System</xsl:text>
								</xsl:if>
							</h3>
							<ul class="list menu" role="navigation">
								<xsl:call-template name="menuoptions">
									<xsl:with-param name="cat_name" select="@category" />
								</xsl:call-template>
							</ul>
						</xsl:if>
					</xsl:for-each>
				</nav>
				<div class="page_content left">
					<xsl:choose>
						<xsl:when test="$site_name">
							<xsl:call-template name="header">
								<xsl:with-param name="site_name" select="$site_name" />
							</xsl:call-template>
						</xsl:when>
						<xsl:otherwise>
							<xsl:call-template name="header" />
						</xsl:otherwise>
					</xsl:choose>
					<!--h1><xsl:value-of select="$h1" /></h1--> <!-- <<< I have no idea what this is.. -->
					<xsl:call-template name="tabs" />
					<!--div class="content"-->
						<!-- Content start -->
						<xsl:for-each select="/root/content/errors/error">
							<div class="message error"><xsl:value-of select="." /></div>
						</xsl:for-each>
						<xsl:for-each select="/root/content/messages/message">
							<div class="message"><xsl:value-of select="." /></div>
						</xsl:for-each>
						<xsl:apply-templates select="/root/content" />
						<!-- Content end -->
					<!--/div-->
				</div>
			</body>
		</html>
	</xsl:template>

	<xsl:template name="menuoptions">
		<xsl:param name="cat_name" />

		<xsl:for-each select="/root/content/menuoptions/menuoption">
			<xsl:sort select="position" />
			<xsl:if test="@category = $cat_name">
				<li class="item">
					<xsl:if test="/root/meta/admin_page = name or (/root/meta/path = 'admin' and current()/name = 'Home')">
						<xsl:attribute name="class">item active</xsl:attribute>
					</xsl:if>

					<a href="{href}"><xsl:value-of select="name" /></a>
				</li>
			</xsl:if>
		</xsl:for-each>
	</xsl:template>

</xsl:stylesheet>
