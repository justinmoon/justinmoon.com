import { getPosts } from './_posts';

let contents;

// FIXME: move this somewhere else
const allTags = [
  {
    display: 'WebDev',
    classes: 'bg-red-200',
    slug: 'webdev',
  },
  {
    display: 'Bitcoin',
    classes: 'bg-yellow-200',
    slug: 'bitcoin'
  },
  {
    display: 'OSS',
    classes: 'bg-green-200',
    slug: 'open-source'
  },
  {
    display: 'Python',
    classes: 'bg-blue-200',
    slug: 'python'
  },
]



export function get(req, res) {

	if (!contents || process.env.NODE_ENV !== 'production') {

		const posts = getPosts().map(post => ({
      ...post,
			tags: post.tags.split(',').map(
        slug => {
          const found = allTags.find(tag => tag.slug === slug.trim())
          if (!found) throw Error(`Tag ${slug} not found`)
          return found
        }
      ),
		}));

		contents = JSON.stringify(posts);
	}

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
