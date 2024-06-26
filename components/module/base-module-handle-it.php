<?php


namespace JFB_Components\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Base_Module_Handle_It {

	const HANDLE_PREFIX = 'jet-fb-';

	public function get_handle( string $unique_string = '' ): string;

}
