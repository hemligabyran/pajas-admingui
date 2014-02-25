<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:decimal-format decimal-separator="." grouping-separator="," />

	<xsl:template name="header">
		<xsl:param name="site_name" />

		<header class="pageheader clear">
			<xsl:choose>
				<xsl:when test="$site_name">
					<h1 class="heading left"><xsl:value-of select="$site_name" /></h1>
				</xsl:when>
				<xsl:otherwise>
					<h1 class="heading left">Admin</h1>
				</xsl:otherwise>
			</xsl:choose>

			<div class="account right">
				<xsl:if test="/root/meta/user_data">
					<span class="left"><xsl:text>Logged in as: </xsl:text><xsl:value-of select="/root/meta/user_data/username" /></span><a class="left stronglink" href="logout">Log out ›</a>
				</xsl:if>
			</div>
		</header>
	</xsl:template>

	<!-- The small tab thingies in the top of every admin page -->
	<xsl:template name="tab">
		<xsl:param name="href" />
		<xsl:param name="action">index</xsl:param>
		<xsl:param name="text"><xsl:value-of select="$href" /></xsl:param>
		<xsl:param name="url_param">yesyeswhatever</xsl:param>

		<li class="item">
			<xsl:if test="
					/root/meta/action = $action and
					(
						(
							$url_param = '' and not(/root/meta/url_params/*)
						) or
						/root/meta/url_params/*[local-name() = $url_param] or
						$url_param = 'yesyeswhatever'
					)
				">
					<xsl:attribute name="class">item active</xsl:attribute>
				</xsl:if>
			<a href="{$href}">
				<xsl:value-of select="$text" />
			</a>
		</li>
	</xsl:template>

	<xsl:template name="form_line">
		<xsl:param name="id" /><!-- This should always be set -->
		<xsl:param name="name" />
		<xsl:param name="value" />
		<xsl:param name="checked">0</xsl:param>
		<xsl:param name="label" />

		<!-- This -->
		<xsl:param name="options" />

		<!-- OR this, not both -->
		<xsl:param name="option_ids" />
		<xsl:param name="option_values" />

		<xsl:param name="error" />
		<xsl:param name="disabled" />
		<xsl:param name="placeholder" />

		<xsl:param name="type">text</xsl:param>

		<!-- Only used if type is textarea -->
		<xsl:param name="rows" />
		<xsl:param name="cols" />

		<xsl:choose>
			<!-- Filefield -->
			<xsl:when test="$type = 'file'">
				<div class="inputwrapper">
					<xsl:if test="/root/content/errors/error[@id = $id]">
						<xsl:attribute name="class">inputwrapper error</xsl:attribute>
					</xsl:if>

					<xsl:call-template name="form_line_label">
						<xsl:with-param name="label"><xsl:value-of select="$label" /></xsl:with-param>
						<xsl:with-param name="type"><xsl:value-of select="$type" /></xsl:with-param>
						<xsl:with-param name="id"><xsl:value-of select="$id" /></xsl:with-param>
					</xsl:call-template>
					<div class="fileupload_wrapper">
						<input type="{$type}" id="{$id}">

							<xsl:if test="$disabled">
								<xsl:attribute name="disabled">disabled</xsl:attribute>
							</xsl:if>

							<xsl:attribute name="name">
								<xsl:if test="$name = ''">
									<xsl:value-of select="$id" />
								</xsl:if>
								<xsl:if test="$name != ''">
									<xsl:value-of select="$name" />
								</xsl:if>
							</xsl:attribute>
						</input>
					</div>
				</div>
			</xsl:when>

			<!-- Select lists -->
			<xsl:when test="$options or ($option_ids and $option_values)">

				<div class="inputwrapper">
					<xsl:if test="/root/content/errors/error[@id = $id]">
						<xsl:attribute name="class">inputwrapper error</xsl:attribute>
					</xsl:if>

					<xsl:call-template name="form_line_label">
						<xsl:with-param name="label"><xsl:value-of select="$label" /></xsl:with-param>
						<xsl:with-param name="type"><xsl:value-of select="$type" /></xsl:with-param>
						<xsl:with-param name="id"><xsl:value-of select="$id" /></xsl:with-param>
					</xsl:call-template>

					<div class="select_wrapper">
						<select id="{$id}">

							<xsl:if test="$disabled">
								<xsl:attribute name="disabled">disabled</xsl:attribute>
							</xsl:if>

							<xsl:attribute name="name">
								<xsl:if test="$name = ''">
									<xsl:value-of select="$id" />
								</xsl:if>
								<xsl:if test="$name != ''">
									<xsl:value-of select="$name" />
								</xsl:if>
							</xsl:attribute>

							<xsl:if test="$options">
								<xsl:for-each select="$options/option">
									<xsl:sort select="@sorting" />

									<option value="{@value}">

										<xsl:if test="($value != '' and $value = @value) or ($value = '' and @value = /root/content/formdata/field[@id = $id])">
											<xsl:attribute name="selected">selected</xsl:attribute>
										</xsl:if>

										<xsl:value-of select="." />

									</option>

								</xsl:for-each>

							</xsl:if>

							<xsl:if test="$option_ids and $option_values">

								<xsl:for-each select="$option_ids">
									<option value="{.}">

										<xsl:if test=". = /root/content/formdata/field[@id = $id]">
											<xsl:attribute name="selected">selected</xsl:attribute>
										</xsl:if>

										<xsl:call-template name="form_line_option">
											<xsl:with-param name="position" select="position()" />
											<xsl:with-param name="option_values" select="$option_values" />
										</xsl:call-template>
									</option>
								</xsl:for-each>

							</xsl:if>

						</select>
					</div>
				</div>
				<xsl:if test="/root/content/errors/error[@id = $id]">
					<div class="error_box"><xsl:value-of select="/root/content/errors/error[@id = $id]" /></div>
				</xsl:if>
			</xsl:when>

			<!-- Inputs of different types -->
			<xsl:when test="$type = 'text' or $type = 'password' or $type = 'email' or $type = 'tel' or $type = 'time' or $type = 'date' or $type = 'number' or $type = 'datetime-local'">
				<div class="inputwrapper">
					<xsl:if test="/root/content/errors/error[@id = $id]">
						<xsl:attribute name="class">inputwrapper error</xsl:attribute>
					</xsl:if>

					<xsl:call-template name="form_line_label">
						<xsl:with-param name="label"><xsl:value-of select="$label" /></xsl:with-param>
						<xsl:with-param name="type"><xsl:value-of select="$type" /></xsl:with-param>
						<xsl:with-param name="id"><xsl:value-of select="$id" /></xsl:with-param>
					</xsl:call-template>

					<input type="{$type}" id="{$id}">

						<xsl:if test="$disabled = 'true'">
							<xsl:attribute name="disabled">disabled</xsl:attribute>
						</xsl:if>

						<xsl:attribute name="name">
							<xsl:if test="$name = ''">
								<xsl:value-of select="$id" />
							</xsl:if>
							<xsl:if test="$name != ''">
								<xsl:value-of select="$name" />
							</xsl:if>
						</xsl:attribute>

						<xsl:if test="$type != 'password'">

							<xsl:attribute name="value">
								<xsl:if test="$value = '' and /root/content/formdata/field[@id = $id]">
									<xsl:value-of select="/root/content/formdata/field[@id = $id]" />
								</xsl:if>
								<xsl:if test="not($value = '' and /root/content/formdata/field[@id = $id])">
									<xsl:value-of select="$value" />
								</xsl:if>
							</xsl:attribute>

						</xsl:if>

						<xsl:if test="$placeholder != ''">
							<xsl:attribute name="placeholder">
								<xsl:value-of select="$placeholder" />
							</xsl:attribute>
						</xsl:if>

					</input>
				</div>
				<xsl:if test="/root/content/errors/error[@id = $id]">
					<div class="error_box"><xsl:value-of select="/root/content/errors/error[@id = $id]" /></div>
				</xsl:if>
			</xsl:when>

			<!-- Textarea -->
			<xsl:when test="$type = 'textarea'">
				<xsl:call-template name="form_line_label">
					<xsl:with-param name="label"><xsl:value-of select="$label" /></xsl:with-param>
					<xsl:with-param name="type"><xsl:value-of select="$type" /></xsl:with-param>
					<xsl:with-param name="id"><xsl:value-of select="$id" /></xsl:with-param>
				</xsl:call-template>
				<textarea id="{$id}" name="{$name}">
					<xsl:if test="/root/content/errors/error[@id = $id]">
						<xsl:attribute name="class">error</xsl:attribute>
					</xsl:if>

					<xsl:if test="$rows">
						<xsl:attribute name="rows">
							<xsl:value-of select="$rows" />
						</xsl:attribute>
					</xsl:if>

					<xsl:if test="$disabled">
						<xsl:attribute name="disabled">disabled</xsl:attribute>
					</xsl:if>

					<xsl:attribute name="name">
						<xsl:if test="$name = ''">
							<xsl:value-of select="$id" />
						</xsl:if>
						<xsl:if test="$name != ''">
							<xsl:value-of select="$name" />
						</xsl:if>
					</xsl:attribute>

					<xsl:if test="$value = '' and /root/content/formdata/field[@id = $id]">
						<xsl:value-of select="/root/content/formdata/field[@id = $id]" />
					</xsl:if>
					<xsl:if test="not($value = '' and /root/content/formdata/field[@id = $id])">
						<xsl:value-of select="$value" />
					</xsl:if>

					<xsl:if test="$placeholder != ''">
						<xsl:attribute name="placeholder">
							<xsl:value-of select="$placeholder" />
						</xsl:attribute>
					</xsl:if>

				</textarea>

				<xsl:if test="/root/content/errors/error[@id = $id]">
					<div class="error_box"><xsl:value-of select="/root/content/errors/error[@id = $id]" /></div>
				</xsl:if>
			</xsl:when>

			<!-- Checkboxes, radios -->
			<xsl:when test="type = 'radio' or $type = 'checkbox'">
				<div class="inputwrapper_checkbox">

					<input type="{$type}" id="{$id}" value="{$value}">
						<xsl:if test="$disabled">
							<xsl:attribute name="disabled">disabled</xsl:attribute>
						</xsl:if>

						<xsl:if test="/root/content/errors/error[@id = $id]">
							<xsl:attribute name="class">error</xsl:attribute>
						</xsl:if>

						<xsl:attribute name="name">
							<xsl:if test="$name = ''">
								<xsl:value-of select="$id" />
							</xsl:if>
							<xsl:if test="$name != ''">
								<xsl:value-of select="$name" />
							</xsl:if>
						</xsl:attribute>

						<xsl:if test="
							(
								$type = 'checkbox' and
								/root/content/formdata/field[@id = $id] and
								/root/content/formdata/field[@id = $id] != '0'
							)
							or
							$checked != '0'
						">
							<xsl:attribute name="checked">checked</xsl:attribute>
						</xsl:if>

						<xsl:if test="$type = 'radio' and /root/content/formdata/field[@id = $id] = $value">
							<xsl:attribute name="checked">checked</xsl:attribute>
						</xsl:if>
					</input>
					<xsl:call-template name="form_line_label">
						<xsl:with-param name="label"><xsl:value-of select="$label" /></xsl:with-param>
						<xsl:with-param name="type"><xsl:value-of select="$type" /></xsl:with-param>
						<xsl:with-param name="id"><xsl:value-of select="$id" /></xsl:with-param>
					</xsl:call-template>
				</div>

				<xsl:if test="/root/content/errors/error[@id = $id]">
					<div class="error_box"><xsl:value-of select="/root/content/errors/error[@id = $id]" /></div>
				</xsl:if>
			</xsl:when>

			<!-- Plain text, no input -->
			<xsl:when test="$type = 'none'">
				<div class="inputwrapper">
					<label><xsl:value-of select="$label" /></label>
					<input type="text" id="{$id}" name="{$name}" value="{$value}" disabled="disabled" style="border: none;" />
				</div>
			</xsl:when>

			<!-- Everything else -->
			<xsl:otherwise>
				<div class="inputwrapper">
					<xsl:if test="/root/content/errors/error[@id = $id]">
						<xsl:attribute name="class">inputwrapper error</xsl:attribute>
					</xsl:if>

					<xsl:call-template name="form_line_label">
						<xsl:with-param name="label"><xsl:value-of select="$label" /></xsl:with-param>
						<xsl:with-param name="type"><xsl:value-of select="$type" /></xsl:with-param>
						<xsl:with-param name="id"><xsl:value-of select="$id" /></xsl:with-param>
					</xsl:call-template>
					<xsl:text>Type: </xsl:text><xsl:value-of select="$type" />
				</div>

				<xsl:if test="/root/content/errors/error[@id = $id]">
					<div class="error_box"><xsl:value-of select="/root/content/errors/error[@id = $id]" /></div>
				</xsl:if>
			</xsl:otherwise>

		</xsl:choose>
	</xsl:template>
	<xsl:template name="form_line_option">
		<xsl:param name="position" />
		<xsl:param name="option_values" />
		<xsl:for-each select="$option_values">
			<xsl:if test="position() = $position">
				<xsl:value-of select="." />
			</xsl:if>
		</xsl:for-each>
	</xsl:template>
	<xsl:template name="form_line_label">
		<xsl:param name="label" />
		<xsl:param name="type" />
		<xsl:param name="id" />

		<xsl:if test="$label">
			<label><xsl:value-of select="$label" /></label>
		</xsl:if>
		<xsl:if test="not($label) and not($type = 'submit')">
			<xsl:value-of select="translate(substring($id, 1, 1), 'abcdefghijklmnopqrstuvwxyzåäö', 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ')" />
			<xsl:value-of select="substring($id, 2)" />
			<xsl:text>:</xsl:text>
		</xsl:if>
	</xsl:template>

	<xsl:template name="form_button">
		<xsl:param name="value" />
		<xsl:param name="id" />
		<xsl:param name="name" />
		<xsl:param name="disabled" />

		<button class="longman positive">
			<xsl:if test="$id">
				<xsl:attribute name="id"><xsl:value-of select="$id" /></xsl:attribute>
				<xsl:attribute name="name">
					<xsl:if test="$name = ''">
						<xsl:value-of select="$id" />
					</xsl:if>
					<xsl:if test="$name != ''">
						<xsl:value-of select="$name" />
					</xsl:if>
				</xsl:attribute>
			</xsl:if>
			<xsl:if test="$disabled">
				<xsl:attribute name="disabled">disabled</xsl:attribute>
			</xsl:if>
			<xsl:value-of select="$value"/><xsl:text> ›</xsl:text>
		</button>
	</xsl:template>

	<xsl:template name="input_field">
		<xsl:param name="id" />
		<xsl:param name="name" />
		<xsl:param name="value" />
		<xsl:param name="class" />
		<xsl:param name="options" />

		<xsl:param name="type">text</xsl:param>

		<xsl:if test="not($options) or not($options/*)">
			<input type="{$type}">

				<xsl:if test="$id != ''">
					<xsl:attribute name="id"><xsl:value-of select="$id" /></xsl:attribute>
				</xsl:if>

				<xsl:if test="$name != ''">
					<xsl:attribute name="name"><xsl:value-of select="$name" /></xsl:attribute>
				</xsl:if>

				<xsl:if test="$value != '' and $type != 'password'">
					<xsl:attribute name="value"><xsl:value-of select="$value" /></xsl:attribute>
				</xsl:if>
				<xsl:if test="$value = '' and $type != 'password'">
					<xsl:attribute name="value"><xsl:value-of select="/root/content/formdata/field[@name = $name]" /></xsl:attribute>
				</xsl:if>

				<xsl:if test="$class != ''">
					<xsl:attribute name="class"><xsl:value-of select="$class" /></xsl:attribute>
				</xsl:if>

				<xsl:if test="$class = ''">
					<xsl:for-each select="/root/content/errors/form_errors/*">
						<xsl:if test="name(.) = $name">
							<xsl:attribute name="class">error</xsl:attribute>
						</xsl:if>
					</xsl:for-each>
				</xsl:if>

			</input>
		</xsl:if>

		<xsl:if test="$options">
			<xsl:if test="$options/*">
				<select>
					<xsl:if test="$id != ''">
						<xsl:attribute name="id"><xsl:value-of select="$id" /></xsl:attribute>
					</xsl:if>

					<xsl:if test="$name != ''">
						<xsl:attribute name="name"><xsl:value-of select="$name" /></xsl:attribute>
					</xsl:if>

					<xsl:for-each select="$options/option">
						<xsl:sort select="@sorting" />

						<option value="{@value}">

							<xsl:if test="($value != '' and $value = @value) or ($value = '' and @value = /root/content/formdata/field[@name = $name])">
								<xsl:attribute name="selected">selected</xsl:attribute>
							</xsl:if>

							<xsl:value-of select="." />
						</option>

					</xsl:for-each>

				</select>
			</xsl:if>
		</xsl:if>
	</xsl:template>

	<!-- Pagination -->
	<xsl:template name="pagination">
		<xsl:param name="link_first" />
		<xsl:param name="link_previous" />
		<xsl:param name="current_page">1</xsl:param>
		<xsl:param name="link_next" />
		<xsl:param name="link_last" />

		<div class="clear full_size">
			<p style="text-align: center; width: 400px; margin: 1em auto;">
				<a href="{$link_first}" style="font-size: 1.5em;">«</a>
				<xsl:text>&#160;&#160;&#160;&#160;</xsl:text>
				<a href="{$link_previous}" style="font-size: 1.5em;">‹</a>
				<xsl:text>&#160;&#160;&#160;&#160;</xsl:text>
				<xsl:value-of select="format-number($current_page, '###,###')" />
				<xsl:text>&#160;&#160;&#160;&#160;</xsl:text>
				<a href="{$link_next}" style="font-size: 1.5em;">›</a>
				<xsl:text>&#160;&#160;&#160;&#160;</xsl:text>
				<a href="{$link_last}" style="font-size: 1.5em;">»</a>
			</p>
		</div>
	</xsl:template>

</xsl:stylesheet>