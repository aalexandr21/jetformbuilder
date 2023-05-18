<?php


namespace JFB_Modules;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Advanced_Choices;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use JFB_Modules\Base_Module\Base_Module_After_Install_It;
use JFB_Modules\Base_Module\Base_Module_Dir_It;
use JFB_Modules\Base_Module\Base_Module_Handle_It;
use JFB_Modules\Base_Module\Base_Module_It;
use JFB_Modules\Base_Module\Base_Module_Url_It;

class Modules_Controller {

	use Repository_Pattern_Trait;

	public function rep_instances(): array {
		return array(
			new Jet_Style\Module(),
			new Security\Module(),
			new Switch_Page_On_Change\Module(),
			new Form_Record\Module(),
			new Advanced_Choices\Module(),
			new Captcha\Module(),
		);
	}

	public function init_hooks() {
		/** @var Base_Module_It $item */
		foreach ( $this->rep_generate_items() as $item ) {
			$item->init_hooks();
		}
	}

	/**
	 * @param string $name_or_class
	 *
	 * @return Base_Module_It|Base_Module_Handle_It|Base_Module_Url_It|Base_Module_Dir_It|Base_Module_After_Install_It
	 * @throws Repository_Exception
	 */
	public function module( string $name_or_class ): Base_Module_It {
		return $this->rep_get_item( $name_or_class );
	}

	public function has_module( string $name_or_class ): bool {
		try {
			$this->module( $name_or_class );

			return true;
		} catch ( Repository_Exception $exception ) {
			return false;
		}
	}

	public function install( Base_Module_It $item ): bool {
		try {
			$this->rep_install_item( $item );

			return true;
		} catch ( Repository_Exception $exception ) {
			return false;
		}
	}

	/**
	 * @param $item Base_Module_It
	 *
	 * @throws Repository_Exception
	 */
	public function rep_before_install_item( $item ) {
		if (
			! is_object( $item ) ||
			! ( $item instanceof Base_Module_It ) ||
			! $item->condition()
		) {
			$this->_rep_abort_this();
		}
	}

	/**
	 * @param $item Base_Module_It
	 */
	public function rep_after_install_item( $item ) {
		if ( $item instanceof Base_Module_After_Install_It ) {
			$item->on_install();
		}
	}
}