import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import Giscus from '@giscus/react';

export default function BlogPostItemWrapper(props) {
    return (
        <>
            <BlogPostItem {...props} />
            <Giscus
                id="comments"
                repo="MrAshCreates/main-site"
                repoId="R_kgDONG2VFQ"            // Replace with your repo ID
                category="General"               // Discussion category name
                categoryId="DIC_kwDONG2VFc4CjwQ7" // Replace with your category ID
                mapping="title"
                strict="1"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme="preferred_color_scheme"
                lang="en"
                loading="lazy"
            />
        </>
    );
}