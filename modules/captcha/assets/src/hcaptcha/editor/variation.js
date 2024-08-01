const {
	      __,
      } = wp.i18n;

const variation = {
	name: 'hcaptcha',
	title: __( 'hCaptcha', 'jet-form-builder' ),
	isActive: ( blockAttributes, variationAttributes ) => (
		blockAttributes.provider === variationAttributes.provider
	),
	description: __(
		`Set the hCaptcha settings in the Captcha Container block to add anti-bot protection to your website.`,
		'jet-form-builder',
	),
	icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19.9221 45.8709C20.2757 45.4466 20.2184 44.8161 19.7941 44.4625C19.3698 44.109 18.7393 44.1663 18.3857 44.5906L13.8944 49.9801L11.8995 47.9852C11.509 47.5946 10.8758 47.5946 10.4853 47.9852C10.0948 48.3757 10.0948 49.0089 10.4853 49.3994L12.8674 51.7815C13.4911 52.4052 14.5157 52.3587 15.0803 51.6811L19.9221 45.8709Z" fill="currentColor"/>
		<path fillRule="evenodd" clipRule="evenodd" d="M5.75082 41.8091C5.86912 42.3111 6.0049 42.8167 6.15876 43.3232C5.419 44.7188 5 46.3104 5 48C5 53.5228 9.47715 58 15 58C16.3705 58 17.6766 57.7243 18.8659 57.2253C20.343 57.8385 21.8845 58.3034 23.4475 58.5872C27.9656 59.4075 32.8248 58.7321 36.7478 55.5251C40.1174 52.7705 44.7384 48.9438 48.5137 45.8085C50.4021 44.2403 52.0801 42.8441 53.286 41.8398C53.889 41.3377 54.374 40.9336 54.7083 40.6549L55.2201 40.2282C55.7727 39.7743 56.6058 38.9695 57.0825 37.8598C57.6174 36.6147 57.6538 35.0665 56.6243 33.5738C55.6927 32.2225 54.3871 31.822 53.246 31.8299L57.1077 28.58L57.1298 28.5602C59.2051 26.7055 59.7648 23.6115 57.7406 21.3871C56.7994 20.3503 55.5275 19.8112 54.1884 19.8367C53.5221 19.8494 52.8744 19.9999 52.2665 20.2625L54.2685 18.3359C56.3567 16.3875 56.4743 13.0553 54.5164 10.9668L54.5092 10.9591L54.5019 10.9515C52.4721 8.83174 49.107 8.92935 47.0976 10.8406L46.0814 11.7872C46.6606 9.98841 46.2417 7.91958 44.8308 6.51575C42.7924 4.48768 39.3658 4.5148 37.3663 6.62676L37.3536 6.64026L20.7998 24.7897L21.635 22.9358C22.3738 21.7158 22.7265 20.2198 22.5819 18.7808C22.4288 17.2581 21.6935 15.676 20.1254 14.691L20.1133 14.6834L20.1012 14.676C16.9682 12.7696 13.3972 14.5828 11.8958 16.9817C11.2205 18.0608 10.0838 20.7224 8.98585 23.4535C7.85213 26.2736 6.66003 29.4254 5.8577 31.6674C4.89326 34.3624 4.88235 38.1241 5.75082 41.8091ZM35.482 53.9766C42.2083 48.478 53.9452 38.6872 53.9452 38.6872C54.8424 37.9519 56.1697 36.4371 54.9778 34.7091C53.8155 33.0233 51.6132 34.1704 50.7142 34.7403L40.0885 42.4025C39.7234 42.7018 39.3467 42.3584 39.2475 42C39.1923 41.8002 39.1772 41.5605 39.2158 41.338C39.2224 41.3001 39.2305 41.2628 39.2403 41.2262C39.2881 41.0467 39.3748 40.8861 39.5083 40.7774L55.7971 27.0689C57.2041 25.8115 57.4006 23.9842 56.2606 22.7323C55.1483 21.5061 53.3817 21.5429 51.9617 22.8114L37.2968 34.1814C37.0114 34.4122 36.5756 34.3567 36.3588 34.0601C36.0781 33.7478 35.965 33.2207 36.2571 32.8958C36.2617 32.8908 36.2663 32.8858 36.271 32.8809L36.2807 32.8709L36.2846 32.867L52.8942 16.8827C54.1845 15.6889 54.26 13.6176 53.0573 12.3347C51.8386 11.062 49.7339 11.0862 48.4693 12.2961L31.4983 28.1058C31.4838 28.1202 31.4688 28.1335 31.4533 28.1459C31.423 28.1701 31.3911 28.1905 31.3578 28.2073C31.0944 28.3404 30.747 28.2509 30.5 28.0637C30.2204 27.8517 30.0554 27.446 30.3453 27.1645L43.3363 12.4965C44.6387 11.2918 44.6644 9.17148 43.4201 7.93354C42.1731 6.6928 40.0401 6.71164 38.8187 8.00175L19.119 29.6003C18.5763 30.1385 17.8366 30.2838 17.2985 30.1379C16.7763 29.9963 16.5 29.5 16.7518 28.9054L19.8661 21.9933C20.9821 20.25 20.9537 17.5731 19.0615 16.3845C17.1534 15.2235 14.7098 16.2553 13.5912 18.0427C12.4725 19.8301 9.32755 27.9072 7.74075 32.3413C6.95854 34.527 6.88674 37.808 7.66363 41.2045C9.4901 39.2336 12.101 38 15 38C20.5228 38 25 42.4771 25 48C25 51.2268 23.4716 54.0967 21.0992 55.9252C25.9727 57.541 31.3694 57.3386 35.482 53.9766ZM15 40C10.5817 40 7 43.5817 7 48C7 52.4182 10.5817 56 15 56C19.4183 56 23 52.4182 23 48C23 43.5817 19.4183 40 15 40Z" fill="currentColor"/>
	</svg>,
	scope: [ 'block', 'inserter' ],
	attributes: {
		provider: 'hcaptcha',
	},
};

export default variation;