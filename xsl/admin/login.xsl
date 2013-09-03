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
				<link type="text/css" href="../css/admin/style.css" rel="stylesheet" media="all" />
				<link href='http://fonts.googleapis.com/css?family=Cuprum&amp;subset=latin' rel='stylesheet' type='text/css' />
				<base href="http://{root/meta/domain}{/root/meta/base}admin/" />
				<title>Admin - Login</title>
			</head>
			<body>
				<div class="login_container">
					<!--h1>Pajas</h1-->
					<form method="post" action="login/do">
						<fieldset>
							<div class="login_inputwrapper">
								<label for="username">Username:</label>
								<input type="text" name="username" id="username" />
							</div>
							<div class="login_inputwrapper">
								<label for="password">Password:</label>
								<input type="password" name="password" />
							</div>
							<div class="controls">
								<button class="longman positive">Login ›</button>
							</div>
						</fieldset>
					</form>
				</div>
			</body>
		</html>
	</xsl:template>

</xsl:stylesheet>
