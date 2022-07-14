(
	function ( $ ) {

		'use strict';


		const convertFields = scope => {
			scope.find( '.jet-form-builder-file-upload' ).each( function () {
				$( this ).find( '.jet-form-builder-file-upload__file' ).each( function () {
					const url = $( this ).data( 'file' );
					const name = url.split( '/' ).at( - 1 );

					fetch( url ).then(
						response => response.blob(),
					).then(
						blob => {
							const file = new File( [ blob ], name, blob );
						},
					);
				} );

			} );
		};

		var JetFormBuilderFileUpload = {

			init: function ( event, scope ) {
				$( '.jet-form-builder-file-upload__files', scope ).sortable( {
					items: '.jet-form-builder-file-upload__file',
					forcePlaceholderSize: true,
				} ).bind( 'sortupdate', JetFormBuilderFileUpload.onSortCallback );

				convertFields( scope );
			},


			onSortCallback: function ( e, ui ) {


			},

			deleteUpload: function () {
				const action = new DeleteAction( this );

				action.remove();
				action.showErrors();
			},

			issetMessage: function ( formId, status ) {
				if ( ! window.JetFormBuilderFileUploadConfig.errors[ formId ] ) {
					return false;
				}

				return window.JetFormBuilderFileUploadConfig.errors[ formId ][ status ];
			},

			getMessage: function ( formId, status ) {
				const { __ } = wp.i18n;
				const unknown = __( 'Unknown error.', 'jet-form-builder' );
				const message = JetFormBuilderFileUpload.issetMessage( formId, status );

				return message || unknown;
			},

			processUpload: function ( event ) {
				const upload = new UploadAction( event );

				upload.loadFiles();
				upload.removeSingle();
				upload.insertPreviews();
				upload.sortable();

				upload.showErrors();
			},
		};

		class ChangeFiles {
			constructor( event ) {
				this.uploadEl = $( event.target ?? event ).closest( '.jet-form-builder-file-upload' );
				this.files = this.getFiles( event );
				this.errorsEl = this.uploadEl.find( '.jet-form-builder-file-upload__errors' );
				this.previewsEl = this.uploadEl.find( '.jet-form-builder-file-upload__files' );
				this.settings = this.previewsEl.data( 'args' );
				this.fields = this.getFields();
				this.input = this.getFields().find( 'input[type="file"]' );
				this.hasError = false;
			}

			getFiles( event ) {
				return [];
			}

			removeSingle() {
				if ( this.isSingle() ) {
					this.getPreview().remove();
				}
			}

			showErrors() {
				this.input.removeClass( 'field-has-error' );
				this.fields.find( '.error-message' ).remove();

				if ( this.getPreview()?.length > this.settings.max_files ) {
					this.input.addClass( 'field-has-error' );
					this.fields.append(
						$( `<div class="error-message">${ this.getMessage( 'upload_max_files' ) }</div>` ),
					);

					return;
				}

				if ( this.hasError ) {
					this.input.addClass( 'field-has-error' );
					this.fields.append(
						$( `<div class="error-message">${ this.getMessage( this.hasError ) }</div>` ),
					);
				}
			}

			getPreview() {
				return this.previewsEl.find( '.jet-form-builder-file-upload__file' );
			}

			getFields() {
				return this.uploadEl.find( '.jet-form-builder-file-upload__fields' );
			}

			getFormId() {
				return this.uploadEl.closest( 'form.jet-form-builder' ).data( 'form-id' );
			}

			getMessage( status ) {
				return JetFormBuilderFileUpload.getMessage( this.getFormId(), status );
			}

			isSingle() {
				return (
					! this.settings?.max_files || this.settings.max_files <= 1
				);
			}
		}

		class UploadAction extends ChangeFiles {
			constructor( event ) {
				super( event );

				this.template = this.getTemplate();
			}

			getFiles( event ) {
				return event.target.files;
			}

			loadFiles() {
				if ( this.isSingle() ) {
					return;
				}
				const dt = new DataTransfer();
				const originalInput = this.input[ 0 ];
				const { files } = originalInput;

				if ( ! originalInput.jfbPrevFiles?.length ) {
					originalInput.jfbPrevFiles = files;

					return;
				}

				for ( const file of originalInput.jfbPrevFiles ) {
					dt.items.add( file );
				}

				for ( const file of files ) {
					dt.items.add( file );
				}

				originalInput.files = dt.files; // Assign the updates list
				originalInput.jfbPrevFiles = dt.files;

			}

			insertPreviews() {
				this.errorsEl.html( '' ).addClass( 'is-hidden' );

				const previewElements = [];

				for ( const file of this.files ) {
					const current = $( this.getFilePreview( file ) );

					try {
						this.validateImage( file, current );
					} catch ( error ) {
						this.hasError = error;
						current.find( '.jet-form-builder-file-upload__file-invalid-marker' ).show();
					}

					previewElements.push( current );
				}

				this.previewsEl.append( previewElements );
			}

			sortable() {
				this.previewsEl.sortable( {
					items: '.jet-form-builder-file-upload__file',
					forcePlaceholderSize: true,
				} ).bind( 'sortupdate', JetFormBuilderFileUpload.onSortCallback );
			}

			validateImage( file, current ) {
				if ( file.size > this.settings.max_size ) {
					throw 'upload_max_size';
				}
			}

			getFilePreview( file ) {
				const url = URL.createObjectURL( file );
				let template = this.template.replace( '%file_url%', url );
				template = template.replace( '%file_name%', file.name );

				if ( /^image\//.test( file.type ) ) {
					template = template.replace( '<!-- preview -->', `<img src="${ url }" alt="${ file.name }">` );
				}

				return template;
			}

			getTemplate() {
				return this.uploadEl.closest( '.field-type-media-field' ).find( '.jet-form-builder__preview-template' ).html();
			}
		}

		class DeleteAction extends ChangeFiles {
			constructor( event ) {
				super( event );

				this.self = $( event );
				this.previewEl = this.self.closest( '.jet-form-builder-file-upload__file' );
				this.preset = this.self.siblings( '.jet-form-builder-file-upload__value' );
				this.name = this.self.data( 'file-name' );
			}

			remove() {
				let fieldValue = this.getPreset();

				if ( ! Object.keys( fieldValue ).length ) {
					fieldValue = this.removeFileFromFileList();

					this.input.trigger( 'change.JetFormBuilderMain' );
				}

				this.previewEl.trigger( 'jet-form-builder/on-remove-media-item', [ fieldValue ] );
				this.previewEl.remove();
			}

			removeFileFromFileList() {
				const dt = new DataTransfer();
				const originalInput = this.input[ 0 ];

				const { files } = originalInput;
				let removedFile;

				for ( const file of files ) {
					if ( this.name !== file.name ) {
						dt.items.add( file );
					} else {
						removedFile = file;
					}
				}

				originalInput.files = dt.files; // Assign the updates list
				originalInput.jfbPrevFiles = dt.files;

				return removedFile;
			}

			getPreset() {
				let fileValue = this.preset.val();

				try {
					return JSON.parse( fileValue );
				} catch ( e ) {
					return {};
				}
			}
		}

		$( document ).on( 'jet-form-builder/init', JetFormBuilderFileUpload.init ).on( 'change', '.jet-form-builder-file-upload__input', JetFormBuilderFileUpload.processUpload ).on( 'click', '.jet-form-builder-file-upload__file-remove', JetFormBuilderFileUpload.deleteUpload );

	}( jQuery )
);