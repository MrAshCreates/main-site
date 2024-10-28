import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import Giscus from '@site/src/components/Giscus';

export default function BlogPostItemWrapper(props) {
  const { frontMatter = {}, isBlogPostPage } = props;
  const disableComments = frontMatter.disableComments ?? false;

  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && !disableComments && <Giscus />}
    </>
  );
}