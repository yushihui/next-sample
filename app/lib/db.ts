import { sql } from '@vercel/postgres';
import {
  LightNewsItem, NewsItem
} from './definitions';

export async function fetchNews() {
  try {
    const data = await sql<NewsItem>`SELECT * FROM news`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch news data.');
  }
}


export async function fetchLightNews() {
  try {
    const data = await sql<LightNewsItem>`SELECT id, title, summary FROM news`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch news data.');
  }
}

export async function fetchfakeLightNews() {
    // Return some fake data
    const fakeData: LightNewsItem[] = [
        { id: '1', title: '俄将领遇刺，莫斯科震动', sub_title: 'Summary of fake news 1' },
        { id: '2', title: '王子涉谍案，英中关系风云', sub_title: 'Summary of fake news 2' },
        { id: '3', title: '美联储再降息，未来或放缓', sub_title: 'Summary of fake news 3' },
        { id: '4', title: '叙总统遁逃 俄庇护', sub_title: 'Summary of fake news 3' },
        { id: '5', title: '特朗普再战 关税或重燃', sub_title: 'Summary of fake news 3' },
        { id: '6', title: '美议会决议 增援台岛', sub_title: 'Summary of fake news 3' },
        { id: '7', title: '华为新机 摆脱安卓？', sub_title: 'Summary of fake news 3' },
        { id: '8', title: '字节跳动或出售TikTok 最高院介入', sub_title: 'Summary of fake news 3' },
        { id: '9', title: '马斯克再起诉OpenAI', sub_title: 'Summary of fake news 3' },
        { id: '10', title: 'H-1B签证新规 简化流程', sub_title: 'Summary of fake news 3' },
    ];
    return fakeData;
}
