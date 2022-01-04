import BlockEdit from "./edit";
import metadata from "@blocks/color-picker-field/block.json";

const { __ } = wp.i18n;

const { createBlock } = wp.blocks;

const { name, icon } = metadata;

/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */
const settings = {
	title: __( 'Color Picker Field', 'jet-form-builder' ),
	icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,
	edit: BlockEdit,
	useEditProps: [ 'uniqKey', 'blockName', 'attrHelp' ],
	example: {
		attributes: {
			label: 'Color Picker Field',
			desc: 'Field description...',
		},
	},
	transforms: {
		to: [
			{
				type: 'block',
				blocks: [ 'jet-forms/text-field' ],
				transform: ( attributes ) => {
					return createBlock( 'jet-forms/text-field', { ...attributes } );
				},
				priority: 0,
			},
		],
		from: [
			{
				type: 'block',
				blocks: [ 'jet-forms/text-field' ],
				transform: ( attributes ) => {
					return createBlock( name, {
						...attributes,
					} );
				},
				priority: 0,
			},
		],
	},
};

export {
	metadata,
	name,
	settings,
};