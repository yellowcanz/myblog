import jsonData from './mdList'

export  const openMdFile = (filePath) => {
    console.log(filePath);
    return import(/* @vite-ignore */ filePath).then(md => {
        return {
            title: md.frontmatter.title,
            description: md.frontmatter.description,
            name: md.frontmatter.name,
            date: md.frontmatter.date
        };
    });
};

export  const baseUrl = jsonData.baseUrl
export  const jsArray = async () => {
    return await Promise.all(jsonData.js.map(item => openMdFile(`${baseUrl}/${item.name}`)))
}
export const vueArray = async () => {
    return await Promise.all(jsonData.vue.map(item => openMdFile(`${baseUrl}/${item.name}`)))
}
export const noteArray = async () => {
    return await Promise.all(jsonData.note.map(item => openMdFile(`${baseUrl}/${item.name}`)))
}
