const {
	GeneralFields,
	AdvancedFields,
	FieldSettingsWrapper,
} = JetFBComponents;

const { __ } = wp.i18n;

const {
	InspectorControls,
	useBlockProps,
	RichText,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	TextareaControl,
	TextControl,
	PanelBody,
	Button,
	ToggleControl,
} = wp.components;

export default function FormBreakEdit( props ) {

	const blockProps = useBlockProps();

	const {
		attributes,
		setAttributes,
		editProps: { uniqKey, attrHelp },
	} = props;

	return [
		props.isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<PanelBody
				title={ __( 'Buttons Settings', 'jet-form-builder' ) }
			>
				<ToggleControl
					key={ uniqKey( 'add_next_button' ) }
					label={ __( 'Enable "Next" Button', 'jet-form-builder' ) }
					checked={ attributes.add_next_button }
					help={ attrHelp( 'add_next_button' ) }
					onChange={ add_next_button => setAttributes( { add_next_button } ) }
				/>
				{ attributes.add_next_button && <TextControl
					label={ __( 'Next Button label', 'jet-form-builder' ) }
					value={ attributes.label }
					onChange={ label => setAttributes( { label } ) }
				/> }
				<ToggleControl
					key={ uniqKey( 'add_prev' ) }
					label={ __( 'Add Prev Page Button', 'jet-form-builder' ) }
					checked={ attributes.add_prev }
					help={ attrHelp( 'add_prev' ) }
					onChange={ add_prev => setAttributes( { add_prev } ) }
				/>
				{ attributes.add_prev && <TextControl
					label={ __( 'Prev Page Button Label', 'jet-form-builder' ) }
					value={ attributes.prev_label }
					onChange={ prev_label => setAttributes( { prev_label } ) }
				/> }
			</PanelBody>
			<PanelBody
				title={ __( 'Page Settings', 'jet-form-builder' ) }
			>
				<TextControl
					label={ __( 'Label of progress', 'jet-form-builder' ) }
					value={ attributes.label_progress }
					help={ attrHelp( 'label_progress' ) }
					onChange={ ( newValue ) => {
						props.setAttributes( { label_progress: newValue } );
					} }
				/>
				<TextareaControl
					key="page_break_disabled"
					value={ attributes.page_break_disabled }
					label={ __( 'Validation message', 'jet-form-builder' ) }
					help={ attrHelp( 'page_break_disabled' ) }
					onChange={ ( newValue ) => {
						setAttributes( { page_break_disabled: newValue } );
					} }
				/>
			</PanelBody>
			<PanelBody
				title={ __( 'Advanced', 'jet-form-builder' ) }
			>
				<TextControl
					label={ __( 'CSS Class Name', 'jet-form-builder' ) }
					value={ attributes.class_name }
					onChange={ class_name => setAttributes( { class_name } ) }
				/>
			</PanelBody>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<div className={ 'jet-form-builder__next-page-wrap' }>
				{ attributes.add_next_button && <Button
					isSecondary
					key="next_page_button"
					className="jet-form-builder__next-page"
				>
					<RichText
						placeholder='Next...'
						allowedFormats={ [] }
						value={ attributes.label }
						onChange={ label => setAttributes( { label } ) }
					/>
				</Button> }
				{ attributes.add_prev && <Button
					isSecondary
					key="prev_page_button"
					className="jet-form-builder__prev-page"
				>
					<RichText
						placeholder='Prev...'
						allowedFormats={ [] }
						value={ attributes.prev_label }
						onChange={ prev_label => setAttributes( { prev_label } ) }
					/>
				</Button> }
				{ (
				  ! attributes.add_next_button && ! attributes.add_prev
				  ) && <span>
				{ __( 'Form Break', 'jet-form-builder' ) }
					</span> }
			</div>
		</div>,
	];

}