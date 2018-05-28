module.exports = {
	dest: './dist',
	title: 'Vue.js Meetups',
	head: [['link', { rel: 'icon', href: `/favicon.png` }]],
	description: 'Guide for all current and future Vue.js meetup organizers.',
	themeConfig: {
		repo: 'bencodezen/vue-meetups',
		nav: [
			{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Find a Meetup',
				link: '/find/'
			},
			{
				text: 'Events',
				link: '/events/'
			},
			{
				text: 'Guide',
				link: '/guide/'
			}
		],
		docsDir: 'docs',
		editLinks: true,
		editLinkText: 'Help us improve this page!'
	}
}
