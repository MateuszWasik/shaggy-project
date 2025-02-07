import { getCollection } from 'astro:content';

export async function getSections(currentLang: string) {
    const section1 = await getCollection('sections', (entry) => entry.id === `section1.${currentLang}.md`);
    const section2 = await getCollection('sections', (entry) => entry.id === `section2.${currentLang}.md`);
    const section3 = await getCollection('sections', (entry) => entry.id === `section3.${currentLang}.md`);
    return {
        section1: section1[0].data,
        section2: section2[0].data,
        section3: section3[0].data
    };
}
