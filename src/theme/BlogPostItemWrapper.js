import React, { useEffect } from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';

export default function BlogPostItemWrapper(props) {
    useEffect(() => {
        // Remove any existing Giscus iframe if it exists
        const existingGiscus = document.getElementById('giscus-comments');
        if (existingGiscus) {
            existingGiscus.innerHTML = '';
        }

        // Create a new script element for Giscus
        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.setAttribute('data-repo', 'MrAshCreates/main-site');
        script.setAttribute('data-repo-id', 'R_kgDONG2VFQ');  // Replace with your actual repo ID
        script.setAttribute('data-category', 'General');
        script.setAttribute('data-category-id', 'DIC_kwDONG2VFc4CjwQ7');  // Replace with your actual category ID
        script.setAttribute('data-mapping', 'title');
        script.setAttribute('data-strict', '1');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'bottom');
        script.setAttribute('data-theme', 'preferred_color_scheme');
        script.setAttribute('data-lang', 'en');
        script.setAttribute('data-loading', 'lazy');
        script.async = true;

        // Append the script to the Giscus container
        const giscusContainer = document.getElementById('giscus-comments');
        giscusContainer.appendChild(script);
    }, []);

    return (
        <>
            <BlogPostItem {...props} />
            <div id="giscus-comments" />
        </>
    );
}