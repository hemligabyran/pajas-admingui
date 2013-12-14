<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<!-- INCLUDES -->
	<!--xsl:include href="inc.elements.xsl" /-->
	<xsl:include href="inc.common.xsl" />

	<xsl:output method="html" encoding="utf-8" />

	<!-- TEMPLATE -->
	<xsl:template match="/">
		<xsl:param name="js_files" />
		<xsl:param name="css_files" />

		<html>
			<head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<link type="text/css" href="http://fonts.googleapis.com/css?family=Leckerli+One" rel="stylesheet" />
				<link type="text/css" href="http://fonts.googleapis.com/css?family=Chau+Philomene+One" rel="stylesheet" />
				<link type="text/css" href="http://fonts.googleapis.com/css?family=Droid+Sans:400,700" rel="stylesheet" />
				<link type="text/css" href="../css/admin/style.css" rel="stylesheet" media="all" />
				<base href="http://{root/meta/domain}{/root/meta/base}admin/" />

				<!-- Custom CSS files -->
				<xsl:if test="$css_files">
					<xsl:for-each select="$css_files/file">
						<link rel="stylesheet" type="text/css" href="{.}" />
					</xsl:for-each>
				</xsl:if>
				<xsl:for-each select="/root/meta/css/path">
					<link rel="stylesheet" type="text/css" href="{.}" />
				</xsl:for-each>

				<!-- Custom JS files -->
				<xsl:if test="$js_files">
					<xsl:for-each select="$js_files/file">
						<script type="text/javascript" src="{.}" />
					</xsl:for-each>
				</xsl:if>
				<xsl:for-each select="/root/meta/js/path">
					<script type="text/javascript" src="{.}"></script>
				</xsl:for-each>

				<title>Admin - Login</title>
			</head>
			<body>
				<div class="loginbox">
					<div class="branding">
						<h1 class="logo">Pajas</h1>
					</div>
					<div class="wrap">
						<form method="post" action="login/do">
							<xsl:if test="root/content/errors/error">
								<div class="message">
									<xsl:value-of select="root/content/errors/error" />
								</div>
							</xsl:if>
							<div class="inputwrapper">
								<label for="username">Username:</label>
								<input type="text" name="username" id="username" />
							</div>
							<div class="inputwrapper">
								<label for="password">Password:</label>
								<input type="password" name="password" />
							</div>
							<div class="controls">
								<a class="stronglink" href="#">Glömt lösenord? ›</a>
								<button type="submit" value="Login" class="longman positive" >Login ›</button>
							</div>
						</form>
					</div>
				</div>
			</body>
		</html>
	</xsl:template>

</xsl:stylesheet>
