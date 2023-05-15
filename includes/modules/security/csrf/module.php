<?php


namespace Jet_Form_Builder\Modules\Security\Csrf;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Modules\Base_Module\Base_Module_After_Install_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Dir_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Dir_Trait;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Handle_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Handle_Trait;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Url_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Url_Trait;
use Jet_Form_Builder\Modules\Security\Exceptions\Spam_Exception;

class Module implements Base_Module_After_Install_It, Base_Module_It, Base_Module_Url_It, Base_Module_Handle_It, Base_Module_Dir_It {

	use Base_Module_Dir_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;

	private $token;
	private $client;

	public function on_install() {
	}

	public function rep_item_id() {
		return 'csrf';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_filter( 'jet-form-builder/request-handler/request', array( $this, 'handle_request' ) );
		add_filter( 'jet-form-builder/message-types', array( $this, 'handle_messages' ) );
	}

	public function remove_hooks() {
		remove_filter( 'jet-form-builder/request-handler/request', array( $this, 'handle_request' ) );
		remove_filter( 'jet-form-builder/message-types', array( $this, 'handle_messages' ) );
	}

	/**
	 * @param array $request
	 *
	 * @return array
	 * @throws Spam_Exception
	 */
	public function handle_request( array $request ): array {
		if ( ! jet_fb_live_args()->is_use_csrf() ) {
			return $request;
		}

		$this->token  = $request[ Csrf_Tools::FIELD ] ?? false;
		$this->client = Csrf_Tools::client_id( jet_fb_live()->form_id );

		// delete all old tokens
		Csrf_Token_Model::clear();

		if ( ! Csrf_Tools::verify( $this->token, $this->client ) ) {
			throw new Spam_Exception( 'csrf_failed' );
		}

		// delete verified token only on success
		add_action( 'jet-form-builder/form-handler/after-send', array( $this, 'handle_after_send' ) );

		return $request;
	}

	public function handle_after_send() {
		if ( ! jet_fb_handler()->is_success ) {
			return;
		}

		Csrf_Tools::delete( $this->token, $this->client );
	}

	public function handle_messages( array $messages ): array {
		$messages['csrf_failed'] = array(
			'label' => __( 'CSRF token validation failed', 'jet-form-builder' ),
			'value' => __( 'Invalid token', 'jet-form-builder' ),
		);

		return $messages;
	}
}