import CheckOutInput from './CheckOutInput';
import { FORMAT } from './constants';
import { getCheckoutFieldFormat, getCheckoutFieldLayout } from './functions';

const {
	      BaseSignal,
      } = JetFormBuilderAbstract;

function CheckOutSignal() {
	BaseSignal.call( this );

	this.isSupported = function ( node, input ) {
		return input instanceof CheckOutInput;
	};

	this.runSignal = function ( prevValue ) {
		'single' === getCheckoutFieldLayout()
		? this.runSignalForSingle()
		: this.runSignalForSeparate( prevValue );
	};

	this.runSignalForSingle = function () {
		const [ dateInput ] = this.input.nodes;
		const { current }   = this.input.value;

		if ( !current.length ) {
			dateInput.value = '';

			return;
		}

		dateInput.value = current.map(
			date => moment( date, FORMAT ).format( getCheckoutFieldFormat() ),
		).join( ' - ' );
	};

	this.runSignalForSeparate = function ( prevValue ) {
		const [ , startDate, endDate ] = this.input.nodes;
		const { current }              = this.input.value;

		if ( current?.toString?.() === prevValue?.toString?.() ) {
			return;
		}

		if ( !current.length ) {
			startDate.value = '';
			endDate.value   = '';

			this.updateCalendar();

			return;
		}

		startDate.value = moment( current[ 0 ], FORMAT ).format(
			getCheckoutFieldFormat(),
		);
		endDate.value   = moment(
			current[ 1 ] ?? current[ 0 ], // for one-day bookings
			FORMAT,
		).format(
			getCheckoutFieldFormat(),
		);

		this.updateCalendar();
	};

	// only for separate layout
	this.updateCalendar = function () {
		const { current }       = this.input.value;
		const [ , , , wrapper ] = this.input.nodes;

		if ( !current.length ) {
			jQuery( wrapper ).data( 'dateRangePicker' ).clear();

			return;
		}

		const fieldFormat = getCheckoutFieldFormat();

		// console.log( current );
		jQuery( wrapper ).data( 'dateRangePicker' ).setDateRange(
			moment( current[ 0 ] ).format( fieldFormat ),
			// for one-day bookings
			moment( current[ 1 ] ?? current[ 0 ] ).format( fieldFormat ),
			true,
		);
	};
}

CheckOutSignal.prototype = Object.create( BaseSignal.prototype );

export default CheckOutSignal;