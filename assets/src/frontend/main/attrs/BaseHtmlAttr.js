import ReactiveVar from '../reactive/ReactiveVar';

function BaseHtmlAttr() {
	this.attrName   = '';
	this.initial    = null;
	this.isFromData = false;
	this.value      = null;
}

BaseHtmlAttr.prototype = {
	/**
	 * Name of data attribute
	 */
	attrName: '',
	/**
	 * @type {InputData}
	 */
	input: null,
	initial: null,
	/**
	 * @type {ReactiveVar}
	 */
	value: null,
	observe() {
		this.value = new ReactiveVar( this.initial );
		this.value.make();

		this.addWatcherAttr();
	},
	addWatcherAttr() {
		const [ node ] = this.input.nodes;

		this.value.watch( () => {
			node[ this.attrName ] = this.value.current;
		} );
	},
	/**
	 * If you need specific check,
	 * you can rewrite this function
	 *
	 * @param input {InputData}
	 * @return {boolean}
	 */
	isSupported( input ) {
		const [ node ] = input.nodes;

		const hasProp = (
			node.hasOwnProperty( this.attrName ) ||
			node.dataset.hasOwnProperty( this.attrName )
		);

		if ( !hasProp ) {
			return false;
		}

		this.initial = this.getInitial( input );

		return Boolean( this.initial );
	},
	/**
	 * @param input {InputData}
	 * @return {*|boolean}
	 */
	getInitial( input ) {
		const [ node ] = input.nodes;

		return node.dataset[ this.attrName ] || node[ this.attrName ] || false;
	},

	/**
	 * @param input {InputData}
	 */
	setInput( input ) {
		this.input = input;
	},
};

export default BaseHtmlAttr;