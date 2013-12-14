<?php defined('SYSPATH') OR die('No direct access allowed.');

class Controller_Admin_Login extends Admincontroller
{

	public function action_index()
	{
		$this->xslt_stylesheet = 'admin/login';
		$this->ignore_acl      = TRUE; // This page should be accessible by everyone

		$user = User::instance();
		if ($user->has_access_to(URL::base().'admin'))
			$this->redirect(URL::base().'admin');
	}

	public function action_do()
	{
		if (count($_POST) && isset($_POST['username']) && isset($_POST['password']))
		{
			$post = new Validation($_POST);
			$post->filter('trim');
			$post->filter('strtolower', 'username'); // Usename should always be lower case
			$post_values = $post->as_array();

			$user = new User(FALSE, $post_values['username'], $post_values['password']);

			if ($user->logged_in() && $user->has_access_to(URL::base().'admin'))
    		$this->redirect('admin');
			elseif ( ! $user->logged_in())
				$this->add_error('Wrong username or password', FALSE, TRUE);
			elseif ( ! $user->has_access_to(URL::base().'admin'))
				$this->add_error('You are not authorized', FALSE, TRUE);
			else
				$this->add_error('Unknown error', FALSE, TRUE);
		}
		$this->redirect();
	}

}