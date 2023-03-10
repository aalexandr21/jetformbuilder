window.jfbHCaptchaOnLoad = function () {
	const { addAction, applyFilters } = JetPlugins.hooks;

	/**
	 * @param observable {Observable}
	 */
	function observableHandle( observable ) {
		if ( observable.parent ) {
			return;
		}

		/**
		 * @type {null|InputData}
		 */
		const token     = observable.getInput( '_captcha_token' );
		const formID    = observable.getSubmit().getFormId();
		const container = token.nodes[ 0 ].parentElement;

		let options = (
			window?.JetFormBuilderCaptchaConfig?.[ formID ] ?? false
		);

		if ( !container || !options ) {
			return;
		}

		// for correct applying validation logic
		token.isVisible  = () => true;

		options.callback = ( responseHash ) => {
			token.value.current = responseHash;
		};

		options = applyFilters(
			'jet.fb.hCaptcha.options',
			options,
			observable,
		);

		const widgetID = hcaptcha.render( container, options );

		observable.getSubmit().submitter?.watchFail( () => {
			hcaptcha.reset( widgetID );
		} );
	}

	for ( const observable of Object.values( JetFormBuilder ) ) {
		if ( !observable.hasOwnProperty( 'isObserved' ) ) {
			continue;
		}
		observableHandle( observable );
	}

	addAction(
		'jet.fb.observe.after',
		'jet-form-builder/hCaptcha',
		observableHandle,
	);
};