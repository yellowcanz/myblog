
// import axios from "axios"
import requset from './mdList'
import MarkdownIt from 'markdown-it';
import fm from 'front-matter';
// import MarkdownItVue from 'markdown-it-vue';


// https://gitee.com/api/v5/repos/{owner}/{repo}/contents(/{path})

// https://gitee.com/api/v5/repos/yellowcanz/blogmd/contents/js?access_token=afdee1e56b182b556ec35082d7a8e519&ref=master


// 仓库所属空间地址(企业、组织或个人的地址path)
const owner = 'yellowcanz'
// 仓库路径(path)
const repo = 'blogmd'
// 文件的路径
// const path = 'js'
// 用户授权码
const access_token = 'afdee1e56b182b556ec35082d7a8e519'
// const jsMdUrl = ``

export const MdData = (path) => {
    return requset({
        method: 'get',
        url: `https://gitee.com/api/v5/repos/${owner}/${repo}/contents/${path}?access_token=${access_token}`,
    })
}

// https://gitee.com/api/v5/repos/{owner}/{repo}/git/blobs/{sha}
export const fileData = (sha) => {
    return requset({
        method: 'get',
        url: `https://gitee.com/api/v5/repos/${owner}/${repo}/git/blobs/${sha}?access_token=${access_token}`,
    })
}

export const base64ToArrayBuffer = (base64) => {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; ++i) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

export const getMdFiles = async (sha) => {
    const frontmatterList = []
    const { content } = await fileData(sha);
    const decoder = new TextDecoder('utf-8');
    const decodedContent = decoder.decode(base64ToArrayBuffer(content));
    const { attributes, body } = fm(decodedContent);
    frontmatterList.push({...attributes,sha})
    const md = new MarkdownIt();
    const renderedHTML = md.render(body);
    return {
        renderedHTML,
        frontmatterList
    }
} 