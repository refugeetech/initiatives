//Configuration for ryw:blog package
// check out the README: https://github.com/meteor-blog/meteor-blog


Blog.config({
  basePath: '/blog', // '/myBlog', '/myBlog/my-post', '/myBlog/tag/whatever', etc.
  //adminBasePath: '/admin/blog',
  blogIndexTemplate: 'allPosts', // '/blog' route
  blogShowTemplate: 'singlePost'    // '/blog/:slug' route
});
