module.exports = {
	title: "roblox-ts",
	tagline: "A TypeScript-to-Luau Compiler for Roblox",
	url: "https://roblox-ts.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/roblox-ts.svg",
	organizationName: "roblox-ts",
	projectName: "roblox-ts",
	plugins: ["docusaurus-node-polyfills"],
	themeConfig: {
		colorMode: {
			defaultMode: "dark",
		},
		navbar: {
			title: "roblox-ts",
			logo: {
				alt: "roblox-ts",
				src: "img/roblox-ts.svg",
			},
			items: [
				{
					label: "Docs",
					to: "docs/",
					position: "left",
				},
				{
					label: "Playground",
					to: "playground/",
					position: "left",
				},
				{
					label: "Packages",
					href: "https://www.npmjs.com/org/rbxts",
					position: "left",
				},
				{
					href: "https://discord.roblox-ts.com",
					className: "header-discord-link",
					position: "right",
				},
				{
					href: "https://github.com/roblox-ts/roblox-ts",
					className: "header-github-link",
					position: "right",
				},
			],
		},
		prism: {
			additionalLanguages: ["lua"],
			theme: require("prism-react-renderer/themes/github"),
			darkTheme: require("prism-react-renderer/themes/vsDark"),
		},
		footer: {
			style: undefined,
			links: undefined,
			copyright: undefined,
		},
		metadata: [
			{ name: "twitter:card", content: " " },
			{ name: "og:description", content: " " },
		],
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.json"),
					editUrl:
						"https://github.com/roblox-ts/roblox-ts.com/blob/master/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
