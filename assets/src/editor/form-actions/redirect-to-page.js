import Tools from "../tools";

/**
 * Internal dependencies
 */
const {
	TextControl,
	ToggleControl,
	SelectControl,
	BaseControl,
	CheckboxControl,
} = wp.components;

const { __ } = wp.i18n;

const {
	useState
} = wp.element;

window.jetFormDefaultActions = window.jetFormDefaultActions || {};

window.jetFormDefaultActions[ 'redirect_to_page' ] = class RedirectToPageAction extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.fields = Tools.getFormFieldsBlocks();
		this.data = window.jetFormRedirectToPageData;
	}

	isChecked( name ) {
		const args_fields = Array.from( this.props.settings.redirect_args || [] );

		return Boolean( args_fields.includes( name ) );
	}

	onChangeRedirectArgs( value, field_name ) {
		let args_fields = Array.from( this.props.settings.redirect_args || [] );

		if ( ! value ) {
			const field_id = args_fields.indexOf( field_name );

			args_fields.splice( field_id, 1 );
		} else {
			args_fields.push( field_name );
		}

		this.onChangeSetting( args_fields, 'redirect_args' );
	}

	onChangeSetting( value, key ) {
		this.props.onChange( {
			...this.props.settings,
			[ key ]: value
		} );
	};


	render() {
		const settings = this.props.settings;

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <div key="redirect_to_page">
			<BaseControl
				label={ this.data.labels.redirect_type }
				key="redirect_type_control"
			>
				<div className='redirect_type-control'>
					<SelectControl
						key='redirect_type'
						value={ settings.redirect_type }
						options={ this.data.redirect_types }
						onChange={ newVal => {
							this.onChangeSetting( newVal, 'redirect_type' )
						} }
					/>
				</div>
			</BaseControl>
			{ 'static_page' === settings.redirect_type && <BaseControl
				label={ this.data.labels.redirect_page }
				key="redirect_page_control"
			>
				<div className='redirect_page-control'>
					<SelectControl
						key='redirect_type'
						value={ settings.redirect_page }
						options={ this.data.pages }
						onChange={ newVal => {
							this.onChangeSetting( newVal, 'redirect_page' )
						} }
					/>
				</div>
			</BaseControl> }

			{ 'custom_url' === settings.redirect_type && <BaseControl
				label={ this.data.labels.redirect_url }
				key="redirect_url_control"
			>
				<div className='redirect_url-control'>
					<TextControl
						key='redirect_url'
						value={ settings.redirect_url }
						onChange={ newVal => {
							this.onChangeSetting( newVal, 'redirect_url' )
						} }
					/>
				</div>
			</BaseControl> }

			<BaseControl
				label={ this.data.labels.redirect_args }
				key="redirect_args_control"
			>
				<div className='redirect_args-control'>
					{ this.fields.map( ( { name } ) => {

						return <CheckboxControl
							label={ name }
							checked={ this.isChecked( name ) }
							onChange={ newVal => {
								this.onChangeRedirectArgs( newVal, name )
							} }
						/>
					} ) }
				</div>
			</BaseControl>

			<BaseControl
				label={ this.data.labels.redirect_hash }
				key="redirect_hash_control"
			>
				<div className='redirect_hash-control'>
					<TextControl
						key='redirect_hash'
						value={ settings.redirect_hash }
						onChange={ newVal => {
							this.onChangeSetting( newVal, 'redirect_hash' )
						} }
					/>
				</div>
			</BaseControl>


		</div> );
		/* eslint-enable jsx-a11y/no-onchange */
	}

}
