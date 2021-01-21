const {
	PanelColor,
	IconButton,
	TextControl,
	TextareaControl,
	SelectControl,
	ToggleControl,
	PanelBody,
	RangeControl,
	CheckboxControl,
	Disabled,
	BaseControl,
} = wp.components;

const {
	useState,
	useEffect
} = wp.element;

const PresetRender = {
	GlobalField: function ( {
								data,
								value,
								index,
								onChangeValue,
								isVisible,
								excludeOptions = options => options,
							} ) {


		switch ( data.type ) {
			case 'text':
				return ( isVisible( value, data ) &&
					<div
						key={ 'field_' + data.name + index }
						className={ 'jet-form-preset__row' }
					>
						<TextControl
							key={ data.name + index }
							label={ data.label }
							value={ value[ data.name ] }
							onChange={ newVal => {
								onChangeValue( newVal, data.name )
							} }
						/>
					</div>
				);
			case 'select':
				return ( isVisible( value, data ) &&
					<div
						key={ 'field_' + data.name + index }
						className={ 'jet-form-preset__row' }
					>
						<SelectControl
							key={ data.name + index }
							labelPosition="side"
							options={ excludeOptions( data.options ) }
							label={ data.label }
							value={ value[ data.name ] }
							onChange={ newVal => {
								onChangeValue( newVal, data.name )
							} }
						/>
					</div>
				);
		}


		return null;
	},
	AvailableMapField: function ( {
									  fieldsMap,
									  field,
									  index,
									  value,
									  onChangeValue,
									  isMapFieldVisible
								  } ) {

		let currentVal = null;

		if ( ! fieldsMap ) {
			fieldsMap = {};
		}

		currentVal = fieldsMap[ field ];

		if ( ! currentVal ) {
			currentVal = {};
		}

		return <React.Fragment key={ `map_field_preset_${ field + index }` }>
			<span className='jet-label-overflow'>{ field }</span>
			{ window.JetFormEditorData.presetConfig.map_fields.map( ( data, fIndex ) => {

				switch ( data.type ) {
					case 'text':
						return ( isMapFieldVisible( value, data, field ) &&
							<div
								key={ field + data.name + index + fIndex }
								className={ 'jet-form-preset__fields-map-item' }
							>
								<TextControl
									key={ 'control_' + field + data.name + index + fIndex }
									placeholder={ data.label }
									value={ currentVal[ data.name ] }
									onChange={ newVal => {
										currentVal[ data.name ] = newVal;
										onChangeValue( {
											...fieldsMap,
											[ field ]: currentVal
										}, 'fields_map' );
									} }
								/>
							</div>
						);
					case 'select':
						return ( isMapFieldVisible( value, data, field ) &&
							<div
								key={ field + data.name + index + fIndex }
								className={ 'jet-form-preset__fields-map-item' }
							>
								<SelectControl
									key={ 'control_' + field + data.name + index + fIndex }
									options={ data.options }
									//label={ data.label }
									value={ currentVal[ data.name ] }
									onChange={ newVal => {
										currentVal[ data.name ] = newVal;
										onChangeValue( {
											...fieldsMap,
											[ field ]: currentVal
										}, 'fields_map' );
									} }
								/>
							</div>
						);
				}
			} ) }
		</React.Fragment>;
	},

	MapField: function ( {
							 data,
							 value,
							 index,
							 currentState,
							 onChangeValue,
							 isCurrentFieldVisible
						 } ) {

		switch ( data.type ) {
			case 'text':
				return ( isCurrentFieldVisible( currentState, data ) &&
					<div
						key={ data.name + index }
						className={ 'jet-form-preset__row' }
					>
						<TextControl
							key={ 'control_' + data.name + index }
							placeholder={ data.label }
							value={ value }
							onChange={ newVal => {
								onChangeValue( newVal, 'current_field_' + data.name )
							} }
						/>
					</div>
				);
			case 'select':
				return ( isCurrentFieldVisible( currentState, data ) &&
					<div
						key={ data.name + index }
						className={ 'jet-form-preset__row' }
					>
						<SelectControl
							key={ 'control_' + data.name + index }
							labelPosition="side"
							options={ data.options }
							label={ data.label }
							value={ value }
							onChange={ newVal => {
								onChangeValue( newVal, 'current_field_' + data.name )
							} }
						/>
					</div>
				);
		}
		return null;
	}
}

export default PresetRender;