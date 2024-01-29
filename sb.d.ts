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
    | ConfigStoryblok
    | HeaderStoryblok
    | HeaderSectionStoryblok
    | ImageStoryblok
    | PageStoryblok
    | SectionStoryblok
  )[];
  _uid: string;
  component: "Article";
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

export interface ConfigStoryblok {
  header_menu?: MenuLinkStoryblok[];
  header_button?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  logo?: AssetStoryblok;
  _uid: string;
  component: "config";
  [k: string]: any;
}

export interface HeaderStoryblok {
  title?: string;
  subtitle?: string;
  illustration?: AssetStoryblok;
  _uid: string;
  component: "Header";
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

export interface ImageStoryblok {
  image?: AssetStoryblok;
  _uid: string;
  component: "image";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | AllArticlesStoryblok
    | ArticleStoryblok
    | ConfigStoryblok
    | HeaderStoryblok
    | HeaderSectionStoryblok
    | ImageStoryblok
    | PageStoryblok
    | SectionStoryblok
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
    | ConfigStoryblok
    | HeaderStoryblok
    | HeaderSectionStoryblok
    | ImageStoryblok
    | PageStoryblok
    | SectionStoryblok
  )[];
  width: "" | "standard" | "full" | "popout";
  _uid: string;
  component: "section";
  [k: string]: any;
}
