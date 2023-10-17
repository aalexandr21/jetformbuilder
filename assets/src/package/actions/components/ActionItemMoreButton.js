import useLoopedAction from '../hooks/useLoopedAction';
import useActionsEdit from '../hooks/useActionsEdit';

const {
	      __,
      } = wp.i18n;

const {
	      DropdownMenu,
      } = wp.components;

const {
	      useMemo,
      } = wp.element;

function ActionItemMoreButton( { exclude = [] } ) {
	const { action, index } = useLoopedAction();

	const {
		      moveAction,
		      deleteAction,
		      actions,
		      toggleExecute,
	      } = useActionsEdit();

	const isExecute = (
		action.is_execute ?? true
	);

	const controls = useMemo( () => {
		const list = [];

		if ( -1 === exclude.indexOf( 'up' ) ) {
			list.push( {
				title: __( 'Up', 'jet-form-builder' ),
				icon: 'arrow-up',
				disabled: 0 === index,
				onClick: () => {
					moveAction( index, index - 1 );
				},
			} );
		}

		if ( -1 === exclude.indexOf( 'down' ) ) {
			list.push( {
				title: __( 'Down', 'jet-form-builder' ),
				icon: 'arrow-down',
				disabled: (
					actions.length - 1
				) === index,
				onClick: () => {
					moveAction( index, index + 1 );
				},
			} );
		}

		if ( -1 === exclude.indexOf( 'delete' ) ) {
			list.push( {
				title: __( 'Delete', 'jet-form-builder' ),
				icon: 'trash',
				onClick: () => {
					deleteAction( index );
				},
			} );
		}

		if ( -1 === exclude.indexOf( 'off-on' ) ) {
			list.push( {
				title: isExecute
				       ? __( 'Turn off', 'jet-form-builder' )
				       : __( 'Turn on', 'jet-form-builder' ),
				icon: isExecute ? 'no-alt' : 'yes',
				onClick: () => {
					toggleExecute( action );
				},
			} );
		}

		return list;
	}, [ index, actions.length, isExecute ] );

	return <DropdownMenu
		icon="ellipsis"
		label={ __( 'Edit, move or delete', 'jet-form-builder' ) }
		controls={ controls }
	/>;
}

export default ActionItemMoreButton;