import JetFormToolbar from '../controls/toolbar';
import JetFormGeneral from '../controls/general';
import JetFormAdvanced from '../controls/advanced';
import Tools from "../../tools";

const block = 'jet-forms/form-break-field';

window.jetFormBuilderBlockCallbacks = window.jetFormBuilderBlockCallbacks || {};
window.jetFormBuilderBlockCallbacks[ block ] = window.jetFormBuilderBlockCallbacks[ block ] || {};

const { __ } = wp.i18n;

const {
	ColorPalette,
	RichText,
	Editable,
	MediaUpload,
	ServerSideRender,
	BlockControls,
	InspectorControls,
} = wp.blockEditor;

const {
	PanelColor,
	IconButton,
	TextControl,
	TextareaControl,
	SelectControl,
	ToggleControl,
	PanelBody,
	Button,
} = wp.components;


const keyControls = block + '-controls-edit';
const keyGeneral = block + '-general-edit';

window.jetFormBuilderBlockCallbacks[ block ].edit = class FormBreakEdit extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.data = window.jetFormBreakFieldData;
	}

	render() {
		const props = this.props;
		const attributes = props.attributes;

		return [
			props.isSelected && (
				<InspectorControls
					key={ keyControls }
				>
					{ window.jetFormBuilderControls.general[ block ] && window.jetFormBuilderControls.general[ block ].length &&
					<JetFormGeneral
						key={ keyGeneral }
						values={ attributes }
						controls={ window.jetFormBuilderControls.general[ block ] }
						onChange={ ( newValues ) => {
							props.setAttributes( newValues );
						} }
					/> }
					<PanelBody
						title={ __( 'Field Settings' ) }
					>
						<TextareaControl
							key="page_break_disabled"
							value={ attributes.page_break_disabled }
							label={ __( 'Disabled message' ) }
							help={ Tools.getHelpMessage( this.data, 'page_break_disabled' ) }
							onChange={ ( newValue ) => {
								props.setAttributes( { page_break_disabled: newValue } );
							} }
						/>
					</PanelBody>

					{ window.jetFormBuilderControls.advanced[ block ] && window.jetFormBuilderControls.advanced[ block ].length &&
					<JetFormAdvanced
						values={ attributes }
						controls={ window.jetFormBuilderControls.advanced[ block ] }
						onChange={ ( newValues ) => {
							props.setAttributes( newValues );
						} }
					/> }
				</InspectorControls>
			),
			<div className={ 'jet-form-builder__next-page-wrap' }>
				<Button
					isSecondary
					key="next_page_button"
					className="jet-form-builder__next-page"
				>{ attributes.label || 'Next' }</Button>

				{ attributes.add_prev && <Button
					isSecondary
					key="prev_page_button"
					className="jet-form-builder__prev-page"
				>{ attributes.prev_label || 'Prev' }</Button> }
			</div>
		];
	}
}