<?php


namespace Jet_Form_Builder\Presets;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Plain_Default_Exception;
use Jet_Form_Builder\Exceptions\Preset_Exception;
use Jet_Form_Builder\Generators\Base;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Presets\Sources\Base_Source;
use Jet_Form_Builder\Presets\Sources\Preset_Source_Options_Page;
use Jet_Form_Builder\Presets\Sources\Preset_Source_Post;
use Jet_Form_Builder\Presets\Sources\Preset_Source_Query_Var;
use Jet_Form_Builder\Presets\Sources\Preset_Source_User;
use Jet_Form_Builder\Presets\Types\Base_Preset;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;
use Jet_Form_Builder\Presets\Types\General_Preset;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method static Preset_Manager instance()
 *
 * Class Preset_Manager
 * @package Jet_Form_Builder\Presets
 */
class Preset_Manager {

	use Instance_Trait;

	private $form_id;
	protected $data     = null;
	protected $source   = null;
	protected $defaults = array(
		'enabled'    => false,
		'from'       => 'post',
		'post_from'  => 'current_post',
		'user_from'  => 'current_user',
		'query_var'  => '_post_id',
		'fields_map' => array(),
	);

	private $_preset_types = array();

	/**
	 * @var Base_Preset
	 */
	public $manager_preset;
	private $_source_types;


	private $plain_default = false;


	protected function __construct() {
		$this->register_preset_types();
		$this->register_source_types();

		do_action( 'jet-form-builder/after-init/preset-manager' );
	}

	public function set_form_id( $form_id ) {
		$this->form_id = $form_id;

		$this->general()->set_init_data( $this->general()->preset_source( $form_id ) );

		try {
			$this->general()->get_source();
		} catch ( Preset_Exception $exception ) {
			return;
		}
	}

	/**
	 * @return Base_Preset[]
	 */
	protected function preset_types(): array {
		return $this->_preset_types;
	}

	/**
	 * @param $slug
	 *
	 * @return Base_Preset|void
	 */
	public function get_preset_type_raw( $slug ): Base_Preset {
		if ( isset( $this->_preset_types[ $slug ] ) ) {
			return $this->_preset_types[ $slug ];
		}

		_doing_it_wrong(
			esc_html( static::class . '::' . __METHOD__ ),
			'Undefined preset type',
			'1.4.2'
		);
	}

	public function get_preset_type( $slug ): Base_Preset {
		$type = $this->get_preset_type_raw( $slug );

		return $type->is_unique() ? clone $type : $type;
	}

	/**
	 * @return Dynamic_Preset|Base_Preset
	 */
	public function dynamic() {
		return $this->get_preset_type( Dynamic_Preset::SLUG );
	}

	/**
	 * @return General_Preset|Base_Preset
	 */
	public function general() {
		return $this->get_preset_type( General_Preset::SLUG );
	}

	private function register_source_types() {
		/** @var Base_Source[] $types */

		$types = apply_filters(
			'jet-form-builder/preset/source-types',
			array(
				new Preset_Source_Post(),
				new Preset_Source_User(),
				new Preset_Source_Query_Var(),
				new Preset_Source_Options_Page(),
			)
		);

		foreach ( $types as $type ) {
			$this->register_source_type( $type );
		}
	}

	public function register_source_type( Base_Source $source ) {
		if ( ! $source->condition() ) {
			return;
		}
		$this->_source_types[ $source->get_id() ] = $source;

		$source->after_register();
	}

	private function register_preset_types() {
		$types = array(
			new Dynamic_Preset(),
			new General_Preset(),
		);

		foreach ( $types as $type ) {
			$this->register_preset_type( $type );
		}
	}

	protected function set_preset_type_manager( $args ) {
		foreach ( $this->preset_types() as $type ) {
			try {
				if ( $type->is_active_preset( $args ) ) {
					$this->manager_preset = $this->get_preset_type( $type->get_slug() );
					break;
				}
			} catch ( Plain_Default_Exception $exception ) {
				$this->plain_default = $exception->getMessage();
				break;
			}
		}
	}

	/**
	 * @return Base_Preset
	 * @throws Preset_Exception
	 */
	public function get_preset_manager(): Base_Preset {
		if ( ! is_a( $this->manager_preset, Base_Preset::class ) ) {
			throw new Preset_Exception( 'Preset manager is not installed.' );
		}

		return $this->manager_preset;
	}

	protected function register_preset_type( Base_Preset $type ) {
		$this->_preset_types[ $type->get_slug() ] = $type;
	}

	/**
	 * Returns field value
	 *
	 * @param array $args
	 *
	 * @return [type] [description]
	 */
	public function get_field_value( $args = array() ) {
		$this->manager_preset = null;

		if ( empty( $args['name'] ) ) {
			return '';
		}

		$this->set_preset_type_manager( $args );
		$plain = $this->get_plain_default();

		if ( false !== $plain ) {
			return $plain;
		}

		try {
			return $this->get_preset_manager()->get_source( $args )->result();
		} catch ( Preset_Exception $exception ) {
			return '';
		}
	}

	public function get_plain_default() {
		$value               = $this->plain_default;
		$this->plain_default = false;

		return $value;
	}

	/**
	 * @param $type
	 *
	 * @return Base_Source
	 * @throws Preset_Exception
	 */
	public function get_source_by_type( $type ): Base_Source {
		if ( ! isset( $this->_source_types[ $type ] ) ) {
			throw new Preset_Exception( "Undefined source type: {$type}" );
		}

		return clone $this->_source_types[ $type ];
	}

	public function prepare_result( $field_type, $value ) {
		// Prepare value for date field
		switch ( $field_type ) {
			case 'date-field':
				if ( ! Tools::is_valid_timestamp( $value ) ) {
					return $value;
				}

				return date_i18n( 'Y-m-d', $value );
			case 'datetime-field':
				if ( ! Tools::is_valid_timestamp( $value ) ) {
					return $value;
				}

				return date_i18n( 'Y-m-d\TH:i', $value );
			default:
				return apply_filters( 'jet-form-builder/preset/parse-value', $value, $this );
		}
	}

}
