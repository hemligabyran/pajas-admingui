<?php defined('SYSPATH') OR die('No direct access allowed.');

abstract class Pajas_Admincontroller extends Xsltcontroller
{

	/**
	 * Loads URI, and Input into this controller.
	 *
	 * @return	void
	 */
	public function __construct(Request $request, Response $response)
	{
		parent::__construct($request, $response);

		// Disable cache by default
		$this->response->headers('Cache-Control', 'no-cache');

		if ($this->xslt_stylesheet == FALSE)
			$this->xslt_stylesheet = 'admin/'.$this->request->controller();

		$this->acl_redirect_url = '/admin/login';

		if ($this->request->controller() != 'login')
		{
			// Build the menu alternatives

			// First we need to create the container for the options
			$this->menuoptions_node = $this->xml_content->appendChild($this->dom->createElement('menuoptions'));

			// First add the default home-alternative
			xml::to_XML(
				array(array( // Just simulating the config reading, thats why it looks odd :p
					'name'        => 'Home',
					'@category'   => '',
					'description' => 'Admin home page with descriptions of the available admin pages',
					'href'        => '',
					'position'    => 0,
				)),
				$this->menuoptions_node,
				'menuoption'
			);

			// Then we populate this container with options from the config files, and group them by 'menuoption'
			foreach (Kohana::$config->load('admin_menu_options') as $menu_option)
			{
				if (User::instance()->has_access_to(URL::base().'admin/'.$menu_option['href']))
				{
					xml::to_XML(
						array($menu_option),     // Array to make XML from
						$this->menuoptions_node, // Container node
						'menuoption'             // Put each group in a node with this name
					);
				}
			}
		}
	}
}