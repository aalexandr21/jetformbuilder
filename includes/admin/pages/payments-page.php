<?php


namespace Jet_Form_Builder\Admin\Pages;


use Jet_Form_Builder\Gateways\Table_Views\Payments;

class Payments_Page extends Base_Page {

	public function slug(): string {
		return 'jfb-payments';
	}

	public function title(): string {
		return __( 'Payments', 'jet-form-builder' );
	}

	public function is_active(): bool {
		return jet_form_builder()->allow_gateways;
	}

	public function page_config(): array {
		$view = new Payments();

		return $view->load_view();
	}

	public function assets() {
		wp_enqueue_script( 'jet-form-builder-admin-vuex-package' );

		parent::assets();
	}

}