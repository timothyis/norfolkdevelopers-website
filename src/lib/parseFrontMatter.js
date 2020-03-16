const matter = require("gray-matter");

function parseFrontMatter(file) {
  const { content, data } = matter(file);

  if (typeof data.tags === "string") {
    data.tags = data.tags.split(",").map(tag => tag.trim());
  }

  if (typeof data.author === "string") {
    data.author = data.author.split(",").map(author => author.trim());
  }

  return {
    data,
    content
  };
}

module.exports = parseFrontMatter;
