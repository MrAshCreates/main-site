import React from 'react';
import GiscusReact from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function Giscus() {
	const { colorMode } = useColorMode();

	return (
		<GiscusReact
			repo="MrAshCreates/main-site"
			repoId="R_kgDONG2VFQ"
			category="General"
			categoryId="DIC_kwDONG2VFc4CjwQ7"
			mapping="title"
			strict="1"
			reactionsEnabled="1"
			emitMetadata="0"
			inputPosition="bottom"	
			theme={colorMode}
			lang="en"
		/>
		
	);
};
