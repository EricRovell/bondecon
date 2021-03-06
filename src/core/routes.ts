import { derived } from "svelte/store";
import { locale } from "@stores";

export const basePath = derived(locale, $locale => `/${$locale}`);

// pages
export const homePagePath = derived(basePath, $basePath => `${$basePath}/home`);
export const blogPagePath = derived(basePath, $basePath => `${$basePath}/blog`);
export const articlesPagePath = derived(blogPagePath, $path => `${$path}/articles`);
export const econtwittsPagePath = derived(blogPagePath, $path => `${$path}/econtwitts`);
export const cvPagePath = derived(basePath, $basePath => `${$basePath}/cv`);
export const aboutPagePath = derived(basePath, $basePath => `${$basePath}/about`);

// contents
export const articlePath = derived(basePath, $path => (id: string) => `${$path}/blogpost/article-${id}`);
export const econtwittPath = derived(basePath, $path => (id: string) => `${$path}/blogpost/econtwitt-${id}`);

// socials
export const socialPaths = {
  hse: "https://www.hse.ru/staff/bondarenko",
  linkedin: "https://www.linkedin.com/in/ksenia-bondarenko-034649104/",
  telegram: "https://t.me/BondEcon",
  instagram: "https://www.instagram.com/xena_bond",
  facebook: "https://www.facebook.com/Xenabondarenko/",
};

// information
export const repositoryPath = "https://www.gitgub.com/EricRovell/bondecon.com";
export const creatorGithubProfilePath = "https://github.com/EricRovell";
export const designerPortfolioPath = "https://web.marcelforart.com/victoriakan";