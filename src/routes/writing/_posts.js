import fs from 'fs';
import path from 'path';
import marked from 'marked';

const contentDir = 'writing'

export function getPosts () {
	const slugs = fs.readdirSync(contentDir)
		.filter(file => path.extname(file) === '.md')
		.map(file => file.slice(0, -3));

	return slugs.map(getPost).sort((a, b) => {
		return a.date < b.date ? 1 : -1;
	});
}

export function getPost(slug) {
	const file = `${contentDir}/${slug}.md`;
	if (!fs.existsSync(file)) return null;

	const markdown = fs.readFileSync(file, 'utf-8');

	const { content, metadata } = processMarkdown(markdown);
  const { tags, description, title, date } = metadata
	const html = marked(content);
  const link = `/writing/${slug}`

	return {
		link, html, date, tags, description, title
	};
}

function processMarkdown(markdown) {
	const match = /---\n([\s\S]+?)\n---/.exec(markdown);
	const frontMatter = match[1];
	const content = markdown.slice(match[0].length);

	const metadata = {};
	frontMatter.split('\n').forEach(pair => {
		const colonIndex = pair.indexOf(':');
		metadata[pair.slice(0, colonIndex).trim()] = pair
			.slice(colonIndex + 1)
			.trim();
	});

	return { metadata, content };
}
