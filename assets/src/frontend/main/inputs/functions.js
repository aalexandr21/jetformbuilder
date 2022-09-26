import InputData from './InputData';
import ChangeData from './ChangeData';
import CheckboxData from './CheckboxData';
import MultiSelectData from './MultiSelectData';
import RangeData from './RangeData';
import WysiwygData from './WysiwygData';
import RadioData from './RadioData';
import NoListenData from './NoListenData';
import InputMaskedData from './InputMaskedData';

const {
	      applyFilters,
      } = wp.hooks;

/**
 * @type {function(): *}
 */
const getDataTypes = () => applyFilters(
	'jet.fb.inputs',
	[
		RangeData,
		WysiwygData,
		MultiSelectData,
		ChangeData,
		CheckboxData,
		RadioData,
		NoListenData,
		InputMaskedData,
		InputData,
	],
);

let dataTypes = [];

/**
 * @param node
 * @param observable {Observable}
 * @returns {*}
 */
function createInput( node, observable ) {
	if ( !dataTypes.length ) {
		dataTypes = getDataTypes();
	}
	for ( const dataType of dataTypes ) {
		const current = new dataType();

		if ( !current.isSupported( node ) ) {
			continue;
		}
		current.setRoot( observable );
		current.setNode( node );

		return current;
	}

	console.error( 'Something went wrong', node );
}

function getParsedName( name ) {
	const regexps = [
		// multiple fields (checkbox[])
		/^(\w+)\[\]$/,
		// fields inside repeater (rep_name[1][content_field])
		/^\w+\[\d+\]\[([\w\-]+)\]\[?\]?$/,
	];

	for ( const regExp of regexps ) {
		if ( !regExp.test( name ) ) {
			continue;
		}
		const matches = name.match( regExp );

		return matches[ 1 ];
	}

	return name;
}

export { getParsedName, createInput };