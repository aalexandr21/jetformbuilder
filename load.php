<?php

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

if ( version_compare( PHP_VERSION, '7.0.0', '>=' ) ) {
	require_once __DIR__ . '/includes/functions.php';
	require_once __DIR__ . '/includes/plugin.php';
	require_once __DIR__ . '/vendor/woocommerce/action-scheduler/action-scheduler.php';

	jet_form_builder()->register_autoloader();

	add_action( 'plugins_loaded', 'jet_form_builder_init' );

	// we install this very early, because it could be needed in activation hook
	$admin_module = new JFB_Modules\Admin\Module();
	jet_form_builder()->get_modules()->install( $admin_module );

	register_activation_hook(
		JET_FORM_BUILDER__FILE__,
		array( $admin_module, 'on_plugin_activate' )
	);

	return;
}

function jet_form_builder_print_notice() {
	$class   = 'notice notice-error';
	$message = __(
		'<b>Error:</b> <b>JetFormBuilder</b> plugin requires a PHP version ">= 7.0"',
		'jet-form-builder'
	);
	printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), wp_kses_post( $message ) );
}

add_action( 'admin_notices', 'jet_form_builder_print_notice' );
