import {StoryblokStory} from 'storyblok-generate-ts'

export interface AllArticlesStoryblok {
  _uid: string;
  component: "allArticles";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface ArticleStoryblok {
  image?: AssetStoryblok;
  title?: string;
  body?: (
    | AllArticlesStoryblok
    | ArticleStoryblok
    | AvatarStoryblok
    | BoxLinkStoryblok
    | ButtonLinkStoryblok
    | ConfigStoryblok
    | GridStoryblok
    | HeaderSectionStoryblok
    | HeroStoryblok
    | ImageStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | SectionStoryblok
    | TeaserStoryblok
    | TextStoryblok
  )[];
  _uid: string;
  component: "Article";
  [k: string]: any;
}

export interface AvatarStoryblok {
  image?: AssetStoryblok;
  name?: string;
  _uid: string;
  component: "avatar";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface BoxLinkStoryblok {
  heading?: string;
  subheading?: string;
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "boxLink";
  [k: string]: any;
}

export interface ButtonLinkStoryblok {
  text?: string;
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  style?: "" | "primary" | "secondary";
  _uid: string;
  component: "buttonLink";
  [k: string]: any;
}

export interface ConfigStoryblok {
  header_menu?: MenuLinkStoryblok[];
  header_button?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  logo?: AssetStoryblok;
  _uid: string;
  component: "config";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: (
    | AllArticlesStoryblok
    | ArticleStoryblok
    | AvatarStoryblok
    | BoxLinkStoryblok
    | ButtonLinkStoryblok
    | ConfigStoryblok
    | GridStoryblok
    | HeaderSectionStoryblok
    | HeroStoryblok
    | ImageStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | SectionStoryblok
    | TeaserStoryblok
    | TextStoryblok
  )[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeaderSectionStoryblok {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  style?: "" | "left" | "center" | "right";
  _uid: string;
  component: "headerSection";
  [k: string]: any;
}

export interface HeroStoryblok {
  image?: AssetStoryblok;
  headline?: string;
  subheadline?: string;
  buttons?: ButtonLinkStoryblok[];
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface ImageStoryblok {
  image?: AssetStoryblok;
  _uid: string;
  component: "image";
  [k: string]: any;
}

export interface MenuLinkStoryblok {
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  sublink?: MenuLinkStoryblok[];
  _uid: string;
  component: "menu_link";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | AllArticlesStoryblok
    | ArticleStoryblok
    | AvatarStoryblok
    | BoxLinkStoryblok
    | ButtonLinkStoryblok
    | ConfigStoryblok
    | GridStoryblok
    | HeaderSectionStoryblok
    | HeroStoryblok
    | ImageStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | SectionStoryblok
    | TeaserStoryblok
    | TextStoryblok
  )[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface SectionStoryblok {
  content?: (
    | AllArticlesStoryblok
    | ArticleStoryblok
    | AvatarStoryblok
    | BoxLinkStoryblok
    | ButtonLinkStoryblok
    | ConfigStoryblok
    | GridStoryblok
    | HeaderSectionStoryblok
    | HeroStoryblok
    | ImageStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | SectionStoryblok
    | TeaserStoryblok
    | TextStoryblok
  )[];
  width: "" | "standard" | "full" | "popout";
  _uid: string;
  component: "section";
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface TextStoryblok {
  text?: RichtextStoryblok;
  _uid: string;
  component: "Text";
  [k: string]: any;
}
