import Restriction from '../restrictions/Restriction';

function MaxFilesRestriction() {
	Restriction.call( this );

	this.isSupported = function ( node, reporting ) {
		return (
			'file' === node?.type
		);
	};

	this.runOnlyIfRequired = function () {
		return false;
	};

	this.validate = function () {
		const { max_files } = this.reporting.input.attrs;
		let { current }     = this.reporting.input.value;

		current = current?.length ?? 0;

		return current <= max_files.value.current;
	};

	this.getRawMessage = function () {
		return this.getMessageBySlug( 'max_files' );
	};
}

MaxFilesRestriction.prototype = Object.create( Restriction.prototype );

export default MaxFilesRestriction;