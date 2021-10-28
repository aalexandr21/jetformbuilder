import { SelectRadioCheckPlaceholder } from "../../components/base-select-check-radio/select-radio-check-placeholder";
import SelectRadioCheck from "../../components/base-select-check-radio/select-radio-check";
import CustomTemplateControls from '../../components/base-select-check-radio/custom-template';

const {
		  AdvancedFields,
		  GeneralFields,
		  ToolBarFields,
		  FieldControl,
	  } = JetFBComponents;

const { __ } = wp.i18n;

const {
		  InspectorControls,
		  useBlockProps,
	  } = wp.blockEditor ? wp.blockEditor : wp.editor;

const localized = window.JetFormCheckboxFieldData;

export default function CheckboxEdit( props ) {

	const blockProps = useBlockProps();

	const {
			  attributes,
			  setAttributes,
			  isSelected,
			  editProps: { uniqKey },
		  } = props;

	return [
		<ToolBarFields
			key={ uniqKey( 'JetForm-toolbar' ) }
			{ ...props }
		/>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'JetForm-general' ) }
				{ ...props }
			/>
			<AdvancedFields
				key={ uniqKey( 'JetForm-advanced' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<SelectRadioCheckPlaceholder
				key={ uniqKey( 'SelectRadioCheckPlaceholder' ) }
				scriptData={ localized }
				{ ...props }
			/>
			<SelectRadioCheck { ...props }>
				<CustomTemplateControls
					listingTypes={ localized.listings_list }
					{ ...props }
				/>
				<FieldControl
					type='custom_settings'
					key={ uniqKey( 'customSettingsFields' ) }
					{ ...props }
				/>
			</SelectRadioCheck>
		</div>,
	];
}