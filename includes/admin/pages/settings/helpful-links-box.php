<?php


namespace Jet_Form_Builder\Admin\Pages\Settings;

use JFB_Components\Admin\Vui_Boxes\Base_Vui_Panel_Box;
use Jet_Form_Builder\Classes\Http\Utm_Url;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Helpful_Links_Box extends Base_Vui_Panel_Box {

	public function get_slug(): string {
		return 'help';
	}

	public function get_title(): string {
		return __( 'Help Center', 'jet-form-builder' );
	}

	public function get_description(): string {
		return __( 'Support & Info', 'jet-form-builder' );
	}

	public function to_array(): array {
		$utm = new Utm_Url( 'plugin' );
		$utm->set_medium( 'settings' );
		$utm->set_campaign( 'help-center-banner/knowledge-base' );
		$utm->set_content( $utm->get_license_and_theme( true ) );

		return array_merge(
			parent::to_array(),
			array(
				'link_knowledge'  => $utm->add_query( JET_FORM_BUILDER_SITE . '/features/overview/' ),
				'link_support'    => 'https://support.crocoblock.com/support/home/',
				'link_community'  => 'https://www.facebook.com/groups/CrocoblockCommunity',
				'link_git'        => 'https://github.com/Crocoblock/jetformbuilder',
				'label_knowledge' => __( 'Knowledge base', 'jet-form-builder' ),
				'label_community' => __( 'Ask the community', 'jet-form-builder' ),
				'label_support'   => __( 'Contact support', 'jet-form-builder' ),
				'label_git'       => __( 'Feature requests & bug fixes', 'jet-form-builder' ),
			)
		);
	}

}
