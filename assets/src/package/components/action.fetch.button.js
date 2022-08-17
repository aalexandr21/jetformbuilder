import FetchApiButton from './fetch-api-button';
import { withCurrentAction } from '../helpers/hooks/hooks-helper';

const { compose } = wp.compose;

const {
	      withSelect,
      } = wp.data;

function ActionFetchButton( {
	currentAction,
	...props
} ) {

	return <FetchApiButton
		id={ currentAction.id }
		{ ...props }
	/>;
}

export default compose(
	withSelect( withCurrentAction ),
)( ActionFetchButton );