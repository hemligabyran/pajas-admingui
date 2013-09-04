<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<!-- INCLUDES -->
	<!--xsl:include href="inc.elements.xsl" /-->
	<xsl:include href="inc.common.xsl" />

	<xsl:output method="html" encoding="utf-8" />

	<!-- TEMPLATE -->
	<xsl:template match="/">
		<html>
			<head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<link type="text/css" href="http://fonts.googleapis.com/css?family=Leckerli+One" rel="stylesheet" />
				<link type="text/css" href="http://fonts.googleapis.com/css?family=Chau+Philomene+One" rel="stylesheet" />
				<link type="text/css" href="http://fonts.googleapis.com/css?family=Droid+Sans:400,700" rel="stylesheet" />
				<link type="text/css" href="../css/admin/style.css" rel="stylesheet" media="all" />
				<base href="http://{root/meta/domain}{/root/meta/base}admin/" />
				<title>Admin - Login</title>
			</head>
			<body>
				<div class="loginbox">
					<div class="branding">
						<h1 class="logo">Pajas</h1>
					</div>
					<div class="wrap clear">
						<form method="post" action="login/do">
							<xsl:if test="root/content/error">
								<div class="message">
									<xsl:value-of select="root/content/error" />
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
							<div class="controls clear">
								<a class="stronglink left" href="#">Glömt lösenord? ›</a>
								<button value="Login" class="longman positive" >Login ›</button>
							</div>
						</form>
					</div>
				</div>
			</body>
		</html>
	</xsl:template>

</xsl:stylesheet>
