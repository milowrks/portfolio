// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_projects.js` rather than `projects.js`, because
// we don't want to create an `/projects/projects` route — the leading
// underscore tells Sapper not to do that.

const projects = [
	{
		title: 'Crates',
		slug: 'crates',
		html: `
		<p>Something about Crates.</p>
		`
	},
];

projects.forEach(project => {
	project.html = project.html.replace(/^\t{3}/gm, '');
});

export default projects;
