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
        { id: '8', title: '字节跳动或售TikTok，最高院介入', sub_title: 'Summary of fake news 3' },
        { id: '9', title: '马斯克再诉OpenAI', sub_title: 'Summary of fake news 3' },
        { id: '10', title: 'H-1B新规 简化流程', sub_title: 'Summary of fake news 3' },
    ];
    return fakeData;
}


export async function fetchfakeLightNewsByCategory(category: string) {
  // Return some fake data
  const fakeData: LightNewsItem[] = [
      { id: '1', title: '俄将领遇刺，莫斯科震动', sub_title: 'Summary of fake news 1' },
      { id: '2', title: '王子涉谍案，英中关系风云', sub_title: 'Summary of fake news 2' },
      { id: '3', title: '美联储再降息，未来或放缓', sub_title: 'Summary of fake news 3' },
      { id: '4', title: '叙总统遁逃 俄庇护', sub_title: 'Summary of fake news 3' },
      { id: '5', title: '特朗普再战 关税或重燃', sub_title: 'Summary of fake news 3' },
      { id: '6', title: '美议会决议 增援台岛', sub_title: 'Summary of fake news 3' },
      { id: '7', title: '华为新机 摆脱安卓？', sub_title: 'Summary of fake news 3' },
      { id: '8', title: '字节跳动或售TikTok，最高院介入', sub_title: 'Summary of fake news 3' },
      { id: '9', title: '马斯克再诉OpenAI', sub_title: 'Summary of fake news 3' },
      { id: '10', title: 'H-1B新规 简化流程', sub_title: 'Summary of fake news 3' },
  ];
  return fakeData;
}


export async function fetchfakeNewsById(id: string) {
  // Return some fake data
  const fakeData: NewsItem = {
    id: '1',
    title: '美联储再降息，未来或放缓',
    sub_title: 'Summary of fake news 1',
    content: `许多美国购房者曾寄希望于美联储能通过降息让房贷利率更便宜。但到目前为止，抵押贷款利率反而在美联储“三连降”后大幅上升。
根据房地美的数据，自美联储9月份开始降息以来，美国30年期抵押贷款平均利率已从约6.1%升至约6.7% 。而且利率预计还将进一步上升。这是因为抵押贷款利率会随着10年期美国国债收益率而变动，而10年期美国国债收益率在过去几个月大幅上涨。`,
    status: 'published',
    published_at: '12/23/2024 18:00',
    created_at: '12/23/2024 18:00',
    updated_at: '12/23/2024 18:00',
    category: 'Category Name',
    tags: ['tag1', 'tag2'],
    source: '',
    weight: 0,
    address: '',
    entities: ['普京', '俄罗斯']
  };
  return fakeData;
}