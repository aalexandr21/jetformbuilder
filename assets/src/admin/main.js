import SettingsPage from "./pages/settings/SettingsPage";

( () => {
	const pref = 'jet-form-builder_page_';

	const { applyFilters } = wp.hooks;

	const pages = applyFilters( 'jet.fb.register.admin-pages', [
		{
			pageName: SettingsPage.name,
			template: '<SettingsPage/>',
			components: { SettingsPage }
		}
	] )

	pages.forEach( page => {
		const pageName = ( pref + page.pageName );
		if ( window.pagenow === pageName ) {
			new Vue( {
				el: '#' + pref + page.pageName,
				template: page.template,
				components: page.components
			} );
		}
	} )

})()