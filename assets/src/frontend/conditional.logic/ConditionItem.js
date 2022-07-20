
class ConditionItem {

	constructor( { field, operator, value, render_state }, block ) {
		this.field = field;
		this.operator = operator;
		this.value = value;
		this.render_state = render_state;
		/**
		 * @type {ConditionalBlock}
		 */
		this.block = block;
	}

	isPassed() {
		const input = this.block.root.dataInputs[ this.field ] ?? false;

		if ( false === input ) {
			return false;
		}

		return input.checker.check( this, input );
	}
}

export default ConditionItem;