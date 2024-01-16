const {
	      Modal,
	      TextareaControl,
	      Button,
	      Notice,
	      ExternalLink,
	      Flex,
      } = wp.components;

const {
	      useState,
      } = wp.element;

const {
	      __,
      } = wp.i18n;

const {
	      apiFetch,
      } = wp;

const {
	      parseHTMLtoBlocks,
	      getFormInnerFields,
      } = JetFormBuilderParser;

const promptsExamples = [
	'#fake-ai',
	'Registration form with minimum inputs',
	'Opt-in form with gender selector like radio',
	'Quiz form with 5 questions with choices about math',
];

function GenerateFormModal( {
	setShowModal,
	footer: Footer = () => 'Here may be buttons',
} ) {
	const [ prompt, setPrompt ]       = useState( '' );
	const [ formHTML, setFormHTML ]   = useState( '' );
	const [ isLoading, setIsLoading ] = useState( false );
	const [ error, setError ]         = useState( '' );

	const generateForm = () => {
		setIsLoading( true );
		apiFetch( {
			path: '/jet-form-builder/v1/ai/generate',
			method: 'POST',
			data: { prompt },
		} ).then( response => {

			setError( '' );
			setFormHTML( getFormInnerFields( response.form ) );
			console.group( __(
				'JFB: Parsed blocks from generated HTML',
				'jet-form-builder',
			) );
			console.log( parseHTMLtoBlocks( response.form ) );
			console.groupEnd();

		} ).catch( response => {
			setError( response?.message ??
				__( 'Undefined error.', 'jet-form-builder' ),
			);
		} ).finally( () => {
			setIsLoading( false );
		} );
	};

	return <Modal
		style={ {
			width: '60vw',
		} }
		onRequestClose={ () => setShowModal( false ) }
		title={ <Flex>
			{ __( 'Generate Form with AI', 'jet-form-builder' ) }
			<span className="badge">
				{ __(
					'Beta. Limited 5 requests per month',
					'jet-form-builder',
				) }
			</span>
		</Flex> }
		className="jet-form-edit-modal jfb-ai-modal"
	>
		{ error && <Notice
			status="error"
			onRemove={ () => setError( '' ) }
		>
			<Flex direction="column">
				{ error }
				<ExternalLink
					href="https://support.crocoblock.com/support/home/"
				>
					{ __( 'Contact Crocoblock support', 'jet-form-builder' ) }
				</ExternalLink>
			</Flex>
		</Notice> }
		{ Boolean( formHTML.length ) ? <>
			<div
				dangerouslySetInnerHTML={ { __html: formHTML } }
				style={ {
					padding: '2em 1em',
					backgroundColor: '#f6f7f7',
					marginBottom: '1em',
				} }
			/>
			<Footer
				clearHTML={ () => setFormHTML( '' ) }
				formHTML={ formHTML }
				prompt={ prompt }
			/>
		</> : <>
			  <TextareaControl
				  label={ __( 'Describe the form you want',
					  'jet-form-builder' ) }
				  value={ prompt }
				  onChange={ setPrompt }
				  className="jet-control-clear-full"
				  help={ __(
					  'Prompt example: Simple contact form',
					  'jet-form-builder',
				  ) }
			  />
			  { Boolean( prompt.length ) && <Button
				  variant="primary"
				  isBusy={ isLoading }
				  disabled={ isLoading }
				  onClick={ generateForm }
			  >
				  { __( 'Generate', 'jet-form-builder' ) }
			  </Button> }
			  <h4>
				  { __( 'Tips to write good prompt:', 'jet-form-builder' ) }
			  </h4>
			  <ul style={ {
				  listStyle: 'disc',
				  paddingInlineStart: '1em',
			  } }>
				  <li>{ __(
					  'Start with the main purpose of the form.',
					  'jet-form-builder',
				  ) }</li>
				  <li>{ __(
					  `If you need some specific fields - describe 
them also in prompt.`,
					  'jet-form-builder',
				  ) }</li>
				  <li>{ __(
					  `Better to use English language for 
the prompt - AI understand it better than other`,
					  'jet-form-builder',
				  ) }</li>
			  </ul>
			  <h4>
				  { __( 'Examples of the good prompts:', 'jet-form-builder' ) }
			  </h4>
			  <ul style={ {
				  listStyle: 'disc',
				  paddingInlineStart: '1em',
			  } }>
				  { promptsExamples.map( textPrompt => <li key={ textPrompt }>
					  <Button
						  onClick={ () => setPrompt( textPrompt ) }
						  variant="link"
					  >{ textPrompt }</Button>
				  </li> ) }
			  </ul>
		  </> }
	</Modal>;
}

export default GenerateFormModal;