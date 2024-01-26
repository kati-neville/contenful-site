export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentFooterCollection?: Maybe<ComponentFooterCollection>;
  componentHeadCollection?: Maybe<ComponentHeadCollection>;
  elementFeatureCollection?: Maybe<ElementFeatureCollection>;
  elementLinkCollection?: Maybe<ElementLinkCollection>;
  elementPartnerCollection?: Maybe<ElementPartnerCollection>;
  elementTestimonialCollection?: Maybe<ElementTestimonialCollection>;
  entryCollection?: Maybe<EntryCollection>;
  navigationBarCollection?: Maybe<NavigationBarCollection>;
};


export type AssetLinkingCollectionsComponentFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentHeadCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsElementFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsElementLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsElementPartnerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsElementTestimonialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsNavigationBarCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** This is for the features section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFeatures) */
export type ComponentFeatures = Entry & {
  __typename?: 'ComponentFeatures';
  caption?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  featureCollection?: Maybe<ComponentFeaturesFeatureCollection>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentFeaturesLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** This is for the features section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFeatures) */
export type ComponentFeaturesCaptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is for the features section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFeatures) */
export type ComponentFeaturesDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is for the features section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFeatures) */
export type ComponentFeaturesFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentFeaturesFeatureCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementFeatureFilter>;
};


/** This is for the features section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFeatures) */
export type ComponentFeaturesInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is for the features section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFeatures) */
export type ComponentFeaturesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is for the features section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFeatures) */
export type ComponentFeaturesTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentFeaturesCollection = {
  __typename?: 'ComponentFeaturesCollection';
  items: Array<Maybe<ComponentFeatures>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentFeaturesFeatureCollection = {
  __typename?: 'ComponentFeaturesFeatureCollection';
  items: Array<Maybe<ElementFeature>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ComponentFeaturesFeatureCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ComponentFeaturesFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentFeaturesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentFeaturesFilter>>>;
  caption?: InputMaybe<Scalars['String']['input']>;
  caption_contains?: InputMaybe<Scalars['String']['input']>;
  caption_exists?: InputMaybe<Scalars['Boolean']['input']>;
  caption_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caption_not?: InputMaybe<Scalars['String']['input']>;
  caption_not_contains?: InputMaybe<Scalars['String']['input']>;
  caption_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  feature?: InputMaybe<CfElementFeatureNestedFilter>;
  featureCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFeaturesLinkingCollections = {
  __typename?: 'ComponentFeaturesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentFeaturesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentFeaturesLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentFeaturesLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentFeaturesLinkingCollectionsPageCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentFeaturesOrder {
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Footer of the website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFooter) */
export type ComponentFooter = Entry & {
  __typename?: 'ComponentFooter';
  columnsCollection?: Maybe<ComponentFooterColumnsCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentFooterLinkingCollections>;
  logo?: Maybe<Asset>;
  sys: Sys;
};


/** Footer of the website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFooter) */
export type ComponentFooterColumnsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentFooterColumnsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementFooterColumnFilter>;
};


/** Footer of the website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFooter) */
export type ComponentFooterInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Footer of the website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFooter) */
export type ComponentFooterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Footer of the website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFooter) */
export type ComponentFooterLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentFooterCollection = {
  __typename?: 'ComponentFooterCollection';
  items: Array<Maybe<ComponentFooter>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentFooterColumnsCollection = {
  __typename?: 'ComponentFooterColumnsCollection';
  items: Array<Maybe<ElementFooterColumn>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ComponentFooterColumnsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ComponentFooterFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentFooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentFooterFilter>>>;
  columns?: InputMaybe<CfElementFooterColumnNestedFilter>;
  columnsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentFooterLinkingCollections = {
  __typename?: 'ComponentFooterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentFooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentFooterLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentFooterLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentFooterLinkingCollectionsPageCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentFooterOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** This is the frequently asked question section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFrequentlyAskedQuestions) */
export type ComponentFrequentlyAskedQuestions = Entry & {
  __typename?: 'ComponentFrequentlyAskedQuestions';
  askedQuestionAndAnswersCollection?: Maybe<ComponentFrequentlyAskedQuestionsAskedQuestionAndAnswersCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ComponentFrequentlyAskedQuestionsLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** This is the frequently asked question section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFrequentlyAskedQuestions) */
export type ComponentFrequentlyAskedQuestionsAskedQuestionAndAnswersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentFrequentlyAskedQuestionsAskedQuestionAndAnswersCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementFrequentlyAskedQuestionFilter>;
};


/** This is the frequently asked question section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFrequentlyAskedQuestions) */
export type ComponentFrequentlyAskedQuestionsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the frequently asked question section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentFrequentlyAskedQuestions) */
export type ComponentFrequentlyAskedQuestionsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentFrequentlyAskedQuestionsAskedQuestionAndAnswersCollection = {
  __typename?: 'ComponentFrequentlyAskedQuestionsAskedQuestionAndAnswersCollection';
  items: Array<Maybe<ElementFrequentlyAskedQuestion>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ComponentFrequentlyAskedQuestionsAskedQuestionAndAnswersCollectionOrder {
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentFrequentlyAskedQuestionsCollection = {
  __typename?: 'ComponentFrequentlyAskedQuestionsCollection';
  items: Array<Maybe<ComponentFrequentlyAskedQuestions>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentFrequentlyAskedQuestionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentFrequentlyAskedQuestionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentFrequentlyAskedQuestionsFilter>>>;
  askedQuestionAndAnswers?: InputMaybe<CfElementFrequentlyAskedQuestionNestedFilter>;
  askedQuestionAndAnswersCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFrequentlyAskedQuestionsLinkingCollections = {
  __typename?: 'ComponentFrequentlyAskedQuestionsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentFrequentlyAskedQuestionsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentFrequentlyAskedQuestionsLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentFrequentlyAskedQuestionsLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentFrequentlyAskedQuestionsLinkingCollectionsPageCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentFrequentlyAskedQuestionsOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This is the top most part of the page [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentHead) */
export type ComponentHead = Entry & {
  __typename?: 'ComponentHead';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  landingImage?: Maybe<Asset>;
  linkedFrom?: Maybe<ComponentHeadLinkingCollections>;
  primaryActionLink?: Maybe<ElementLink>;
  secondaryActionLink?: Maybe<ElementLink>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** This is the top most part of the page [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentHead) */
export type ComponentHeadDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is the top most part of the page [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentHead) */
export type ComponentHeadLandingImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the top most part of the page [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentHead) */
export type ComponentHeadLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the top most part of the page [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentHead) */
export type ComponentHeadPrimaryActionLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ElementLinkFilter>;
};


/** This is the top most part of the page [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentHead) */
export type ComponentHeadSecondaryActionLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ElementLinkFilter>;
};


/** This is the top most part of the page [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentHead) */
export type ComponentHeadTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is the top most part of the page [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentHead) */
export type ComponentHeadTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHeadCollection = {
  __typename?: 'ComponentHeadCollection';
  items: Array<Maybe<ComponentHead>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentHeadFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentHeadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentHeadFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  landingImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  primaryActionLink?: InputMaybe<CfElementLinkNestedFilter>;
  primaryActionLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryActionLink?: InputMaybe<CfElementLinkNestedFilter>;
  secondaryActionLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHeadLinkingCollections = {
  __typename?: 'ComponentHeadLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentHeadLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentHeadLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeadLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentHeadLinkingCollectionsPageCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentHeadOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** This is the partners section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentPartners) */
export type ComponentPartners = Entry & {
  __typename?: 'ComponentPartners';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentPartnersLinkingCollections>;
  partnerCollection?: Maybe<ComponentPartnersPartnerCollection>;
  sys: Sys;
};


/** This is the partners section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentPartners) */
export type ComponentPartnersInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is the partners section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentPartners) */
export type ComponentPartnersLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the partners section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentPartners) */
export type ComponentPartnersPartnerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentPartnersPartnerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementPartnerFilter>;
};

export type ComponentPartnersCollection = {
  __typename?: 'ComponentPartnersCollection';
  items: Array<Maybe<ComponentPartners>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentPartnersFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentPartnersFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentPartnersFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partner?: InputMaybe<CfElementPartnerNestedFilter>;
  partnerCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentPartnersLinkingCollections = {
  __typename?: 'ComponentPartnersLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentPartnersLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentPartnersLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentPartnersLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentPartnersLinkingCollectionsPageCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentPartnersOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentPartnersPartnerCollection = {
  __typename?: 'ComponentPartnersPartnerCollection';
  items: Array<Maybe<ElementPartner>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ComponentPartnersPartnerCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** This section shows the pricing plans of the business [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentPricingPackages) */
export type ComponentPricingPackages = Entry & {
  __typename?: 'ComponentPricingPackages';
  caption?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentPricingPackagesLinkingCollections>;
  pricingPlansCollection?: Maybe<ComponentPricingPackagesPricingPlansCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** This section shows the pricing plans of the business [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentPricingPackages) */
export type ComponentPricingPackagesCaptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This section shows the pricing plans of the business [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentPricingPackages) */
export type ComponentPricingPackagesDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This section shows the pricing plans of the business [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentPricingPackages) */
export type ComponentPricingPackagesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This section shows the pricing plans of the business [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentPricingPackages) */
export type ComponentPricingPackagesPricingPlansCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentPricingPackagesPricingPlansCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementPricingPackageFilter>;
};


/** This section shows the pricing plans of the business [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentPricingPackages) */
export type ComponentPricingPackagesTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPricingPackagesCollection = {
  __typename?: 'ComponentPricingPackagesCollection';
  items: Array<Maybe<ComponentPricingPackages>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentPricingPackagesFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentPricingPackagesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentPricingPackagesFilter>>>;
  caption?: InputMaybe<Scalars['String']['input']>;
  caption_contains?: InputMaybe<Scalars['String']['input']>;
  caption_exists?: InputMaybe<Scalars['Boolean']['input']>;
  caption_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caption_not?: InputMaybe<Scalars['String']['input']>;
  caption_not_contains?: InputMaybe<Scalars['String']['input']>;
  caption_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pricingPlans?: InputMaybe<CfElementPricingPackageNestedFilter>;
  pricingPlansCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPricingPackagesLinkingCollections = {
  __typename?: 'ComponentPricingPackagesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentPricingPackagesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentPricingPackagesLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentPricingPackagesLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentPricingPackagesLinkingCollectionsPageCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentPricingPackagesOrder {
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ComponentPricingPackagesPricingPlansCollection = {
  __typename?: 'ComponentPricingPackagesPricingPlansCollection';
  items: Array<Maybe<ElementPricingPackage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ComponentPricingPackagesPricingPlansCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  IsPopularAsc = 'isPopular_ASC',
  IsPopularDesc = 'isPopular_DESC',
  PackageNameAsc = 'packageName_ASC',
  PackageNameDesc = 'packageName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** This is the testimonial section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentTestimonial) */
export type ComponentTestimonial = Entry & {
  __typename?: 'ComponentTestimonial';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentTestimonialLinkingCollections>;
  sys: Sys;
  testimonialCollection?: Maybe<ComponentTestimonialTestimonialCollection>;
};


/** This is the testimonial section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentTestimonial) */
export type ComponentTestimonialInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is the testimonial section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentTestimonial) */
export type ComponentTestimonialLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the testimonial section of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/componentTestimonial) */
export type ComponentTestimonialTestimonialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTestimonialTestimonialCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementTestimonialFilter>;
};

export type ComponentTestimonialCollection = {
  __typename?: 'ComponentTestimonialCollection';
  items: Array<Maybe<ComponentTestimonial>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentTestimonialFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentTestimonialFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentTestimonialFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  testimonial?: InputMaybe<CfElementTestimonialNestedFilter>;
  testimonialCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentTestimonialLinkingCollections = {
  __typename?: 'ComponentTestimonialLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentTestimonialLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentTestimonialLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTestimonialLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentTestimonialLinkingCollectionsPageCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentTestimonialOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentTestimonialTestimonialCollection = {
  __typename?: 'ComponentTestimonialTestimonialCollection';
  items: Array<Maybe<ElementTestimonial>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ComponentTestimonialTestimonialCollectionOrder {
  AuthorNameAsc = 'authorName_ASC',
  AuthorNameDesc = 'authorName_DESC',
  AuthorPositionAsc = 'authorPosition_ASC',
  AuthorPositionDesc = 'authorPosition_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** This is for individual features of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementFeature) */
export type ElementFeature = Entry & {
  __typename?: 'ElementFeature';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<ElementFeatureLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** This is for individual features of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementFeature) */
export type ElementFeatureDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is for individual features of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementFeature) */
export type ElementFeatureIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is for individual features of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementFeature) */
export type ElementFeatureLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is for individual features of the site [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementFeature) */
export type ElementFeatureTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ElementFeatureCollection = {
  __typename?: 'ElementFeatureCollection';
  items: Array<Maybe<ElementFeature>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ElementFeatureFilter = {
  AND?: InputMaybe<Array<InputMaybe<ElementFeatureFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ElementFeatureFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ElementFeatureLinkingCollections = {
  __typename?: 'ElementFeatureLinkingCollections';
  componentFeaturesCollection?: Maybe<ComponentFeaturesCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ElementFeatureLinkingCollectionsComponentFeaturesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementFeatureLinkingCollectionsComponentFeaturesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ElementFeatureLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ElementFeatureLinkingCollectionsComponentFeaturesCollectionOrder {
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ElementFeatureOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** A column of links in the footer [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementFooterColumn) */
export type ElementFooterColumn = Entry & {
  __typename?: 'ElementFooterColumn';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ElementFooterColumnLinkingCollections>;
  linksCollection?: Maybe<ElementFooterColumnLinksCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** A column of links in the footer [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementFooterColumn) */
export type ElementFooterColumnLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A column of links in the footer [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementFooterColumn) */
export type ElementFooterColumnLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementFooterColumnLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementLinkFilter>;
};


/** A column of links in the footer [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementFooterColumn) */
export type ElementFooterColumnTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ElementFooterColumnCollection = {
  __typename?: 'ElementFooterColumnCollection';
  items: Array<Maybe<ElementFooterColumn>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ElementFooterColumnFilter = {
  AND?: InputMaybe<Array<InputMaybe<ElementFooterColumnFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ElementFooterColumnFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  links?: InputMaybe<CfElementLinkNestedFilter>;
  linksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ElementFooterColumnLinkingCollections = {
  __typename?: 'ElementFooterColumnLinkingCollections';
  componentFooterCollection?: Maybe<ComponentFooterCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ElementFooterColumnLinkingCollectionsComponentFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementFooterColumnLinkingCollectionsComponentFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ElementFooterColumnLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ElementFooterColumnLinkingCollectionsComponentFooterCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ElementFooterColumnLinksCollection = {
  __typename?: 'ElementFooterColumnLinksCollection';
  items: Array<Maybe<ElementLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ElementFooterColumnLinksCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconPositionAsc = 'iconPosition_ASC',
  IconPositionDesc = 'iconPosition_DESC',
  IsExternalAsc = 'isExternal_ASC',
  IsExternalDesc = 'isExternal_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ElementFooterColumnOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This represents individual Questions of the FAQ section [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementFrequentlyAskedQuestion) */
export type ElementFrequentlyAskedQuestion = Entry & {
  __typename?: 'ElementFrequentlyAskedQuestion';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ElementFrequentlyAskedQuestionLinkingCollections>;
  question?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** This represents individual Questions of the FAQ section [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementFrequentlyAskedQuestion) */
export type ElementFrequentlyAskedQuestionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This represents individual Questions of the FAQ section [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementFrequentlyAskedQuestion) */
export type ElementFrequentlyAskedQuestionQuestionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This represents individual Questions of the FAQ section [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementFrequentlyAskedQuestion) */
export type ElementFrequentlyAskedQuestionResponseArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ElementFrequentlyAskedQuestionCollection = {
  __typename?: 'ElementFrequentlyAskedQuestionCollection';
  items: Array<Maybe<ElementFrequentlyAskedQuestion>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ElementFrequentlyAskedQuestionFilter = {
  AND?: InputMaybe<Array<InputMaybe<ElementFrequentlyAskedQuestionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ElementFrequentlyAskedQuestionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  question?: InputMaybe<Scalars['String']['input']>;
  question_contains?: InputMaybe<Scalars['String']['input']>;
  question_exists?: InputMaybe<Scalars['Boolean']['input']>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  question_not?: InputMaybe<Scalars['String']['input']>;
  question_not_contains?: InputMaybe<Scalars['String']['input']>;
  question_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  response?: InputMaybe<Scalars['String']['input']>;
  response_contains?: InputMaybe<Scalars['String']['input']>;
  response_exists?: InputMaybe<Scalars['Boolean']['input']>;
  response_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  response_not?: InputMaybe<Scalars['String']['input']>;
  response_not_contains?: InputMaybe<Scalars['String']['input']>;
  response_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ElementFrequentlyAskedQuestionLinkingCollections = {
  __typename?: 'ElementFrequentlyAskedQuestionLinkingCollections';
  componentFrequentlyAskedQuestionsCollection?: Maybe<ComponentFrequentlyAskedQuestionsCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ElementFrequentlyAskedQuestionLinkingCollectionsComponentFrequentlyAskedQuestionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementFrequentlyAskedQuestionLinkingCollectionsComponentFrequentlyAskedQuestionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ElementFrequentlyAskedQuestionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ElementFrequentlyAskedQuestionLinkingCollectionsComponentFrequentlyAskedQuestionsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ElementFrequentlyAskedQuestionOrder {
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** These are links used throughout the website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementLink) */
export type ElementLink = Entry & {
  __typename?: 'ElementLink';
  contentfulMetadata: ContentfulMetadata;
  href?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Asset>;
  iconPosition?: Maybe<Scalars['String']['output']>;
  isExternal?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<ElementLinkLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  type?: Maybe<Scalars['String']['output']>;
};


/** These are links used throughout the website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementLink) */
export type ElementLinkHrefArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** These are links used throughout the website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementLink) */
export type ElementLinkIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** These are links used throughout the website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementLink) */
export type ElementLinkIconPositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** These are links used throughout the website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementLink) */
export type ElementLinkIsExternalArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** These are links used throughout the website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementLink) */
export type ElementLinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** These are links used throughout the website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementLink) */
export type ElementLinkNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** These are links used throughout the website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementLink) */
export type ElementLinkTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ElementLinkCollection = {
  __typename?: 'ElementLinkCollection';
  items: Array<Maybe<ElementLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ElementLinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<ElementLinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ElementLinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconPosition?: InputMaybe<Scalars['String']['input']>;
  iconPosition_contains?: InputMaybe<Scalars['String']['input']>;
  iconPosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  iconPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconPosition_not?: InputMaybe<Scalars['String']['input']>;
  iconPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  iconPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal_not?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ElementLinkLinkingCollections = {
  __typename?: 'ElementLinkLinkingCollections';
  componentHeadCollection?: Maybe<ComponentHeadCollection>;
  elementFooterColumnCollection?: Maybe<ElementFooterColumnCollection>;
  elementPricingPackageCollection?: Maybe<ElementPricingPackageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  navigationBarCollection?: Maybe<NavigationBarCollection>;
};


export type ElementLinkLinkingCollectionsComponentHeadCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementLinkLinkingCollectionsComponentHeadCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ElementLinkLinkingCollectionsElementFooterColumnCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementLinkLinkingCollectionsElementFooterColumnCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ElementLinkLinkingCollectionsElementPricingPackageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementLinkLinkingCollectionsElementPricingPackageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ElementLinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ElementLinkLinkingCollectionsNavigationBarCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementLinkLinkingCollectionsNavigationBarCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ElementLinkLinkingCollectionsComponentHeadCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ElementLinkLinkingCollectionsElementFooterColumnCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ElementLinkLinkingCollectionsElementPricingPackageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  IsPopularAsc = 'isPopular_ASC',
  IsPopularDesc = 'isPopular_DESC',
  PackageNameAsc = 'packageName_ASC',
  PackageNameDesc = 'packageName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ElementLinkLinkingCollectionsNavigationBarCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ElementLinkOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconPositionAsc = 'iconPosition_ASC',
  IconPositionDesc = 'iconPosition_DESC',
  IsExternalAsc = 'isExternal_ASC',
  IsExternalDesc = 'isExternal_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** An element describing the price of a plan [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPackageAmount) */
export type ElementPackageAmount = Entry & {
  __typename?: 'ElementPackageAmount';
  amount?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  currency?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ElementPackageAmountLinkingCollections>;
  period?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** An element describing the price of a plan [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPackageAmount) */
export type ElementPackageAmountAmountArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An element describing the price of a plan [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPackageAmount) */
export type ElementPackageAmountCurrencyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An element describing the price of a plan [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPackageAmount) */
export type ElementPackageAmountInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An element describing the price of a plan [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPackageAmount) */
export type ElementPackageAmountLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** An element describing the price of a plan [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPackageAmount) */
export type ElementPackageAmountPeriodArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ElementPackageAmountCollection = {
  __typename?: 'ElementPackageAmountCollection';
  items: Array<Maybe<ElementPackageAmount>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ElementPackageAmountFilter = {
  AND?: InputMaybe<Array<InputMaybe<ElementPackageAmountFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ElementPackageAmountFilter>>>;
  amount?: InputMaybe<Scalars['String']['input']>;
  amount_contains?: InputMaybe<Scalars['String']['input']>;
  amount_exists?: InputMaybe<Scalars['Boolean']['input']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  amount_not?: InputMaybe<Scalars['String']['input']>;
  amount_not_contains?: InputMaybe<Scalars['String']['input']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  currency?: InputMaybe<Scalars['String']['input']>;
  currency_contains?: InputMaybe<Scalars['String']['input']>;
  currency_exists?: InputMaybe<Scalars['Boolean']['input']>;
  currency_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  currency_not?: InputMaybe<Scalars['String']['input']>;
  currency_not_contains?: InputMaybe<Scalars['String']['input']>;
  currency_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  period_contains?: InputMaybe<Scalars['String']['input']>;
  period_exists?: InputMaybe<Scalars['Boolean']['input']>;
  period_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period_not?: InputMaybe<Scalars['String']['input']>;
  period_not_contains?: InputMaybe<Scalars['String']['input']>;
  period_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ElementPackageAmountLinkingCollections = {
  __typename?: 'ElementPackageAmountLinkingCollections';
  elementPricingPackageCollection?: Maybe<ElementPricingPackageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ElementPackageAmountLinkingCollectionsElementPricingPackageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementPackageAmountLinkingCollectionsElementPricingPackageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ElementPackageAmountLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ElementPackageAmountLinkingCollectionsElementPricingPackageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  IsPopularAsc = 'isPopular_ASC',
  IsPopularDesc = 'isPopular_DESC',
  PackageNameAsc = 'packageName_ASC',
  PackageNameDesc = 'packageName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ElementPackageAmountOrder {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  CurrencyAsc = 'currency_ASC',
  CurrencyDesc = 'currency_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PeriodAsc = 'period_ASC',
  PeriodDesc = 'period_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Unique partner elements [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPartner) */
export type ElementPartner = Entry & {
  __typename?: 'ElementPartner';
  contentfulMetadata: ContentfulMetadata;
  href?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ElementPartnerLinkingCollections>;
  partnerLogo?: Maybe<Asset>;
  sys: Sys;
};


/** Unique partner elements [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPartner) */
export type ElementPartnerHrefArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Unique partner elements [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPartner) */
export type ElementPartnerInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Unique partner elements [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPartner) */
export type ElementPartnerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Unique partner elements [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPartner) */
export type ElementPartnerPartnerLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ElementPartnerCollection = {
  __typename?: 'ElementPartnerCollection';
  items: Array<Maybe<ElementPartner>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ElementPartnerFilter = {
  AND?: InputMaybe<Array<InputMaybe<ElementPartnerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ElementPartnerFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerLogo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ElementPartnerLinkingCollections = {
  __typename?: 'ElementPartnerLinkingCollections';
  componentPartnersCollection?: Maybe<ComponentPartnersCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ElementPartnerLinkingCollectionsComponentPartnersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementPartnerLinkingCollectionsComponentPartnersCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ElementPartnerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ElementPartnerLinkingCollectionsComponentPartnersCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ElementPartnerOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** This specifies details of each pricing  plan [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPricingPackage) */
export type ElementPricingPackage = Entry & {
  __typename?: 'ElementPricingPackage';
  benefits?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  isPopular?: Maybe<Scalars['Boolean']['output']>;
  link?: Maybe<ElementLink>;
  linkedFrom?: Maybe<ElementPricingPackageLinkingCollections>;
  packageDescription?: Maybe<Scalars['String']['output']>;
  packageName?: Maybe<Scalars['String']['output']>;
  price?: Maybe<ElementPackageAmount>;
  sys: Sys;
};


/** This specifies details of each pricing  plan [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPricingPackage) */
export type ElementPricingPackageBenefitsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This specifies details of each pricing  plan [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPricingPackage) */
export type ElementPricingPackageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This specifies details of each pricing  plan [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPricingPackage) */
export type ElementPricingPackageIsPopularArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This specifies details of each pricing  plan [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPricingPackage) */
export type ElementPricingPackageLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ElementLinkFilter>;
};


/** This specifies details of each pricing  plan [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPricingPackage) */
export type ElementPricingPackageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This specifies details of each pricing  plan [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPricingPackage) */
export type ElementPricingPackagePackageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This specifies details of each pricing  plan [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPricingPackage) */
export type ElementPricingPackagePackageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This specifies details of each pricing  plan [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementPricingPackage) */
export type ElementPricingPackagePriceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ElementPackageAmountFilter>;
};

export type ElementPricingPackageCollection = {
  __typename?: 'ElementPricingPackageCollection';
  items: Array<Maybe<ElementPricingPackage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ElementPricingPackageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ElementPricingPackageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ElementPricingPackageFilter>>>;
  benefits_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  benefits_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  benefits_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  benefits_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isPopular?: InputMaybe<Scalars['Boolean']['input']>;
  isPopular_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isPopular_not?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<CfElementLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  packageDescription?: InputMaybe<Scalars['String']['input']>;
  packageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  packageDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  packageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  packageDescription_not?: InputMaybe<Scalars['String']['input']>;
  packageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  packageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  packageName?: InputMaybe<Scalars['String']['input']>;
  packageName_contains?: InputMaybe<Scalars['String']['input']>;
  packageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  packageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  packageName_not?: InputMaybe<Scalars['String']['input']>;
  packageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  packageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<CfElementPackageAmountNestedFilter>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ElementPricingPackageLinkingCollections = {
  __typename?: 'ElementPricingPackageLinkingCollections';
  componentPricingPackagesCollection?: Maybe<ComponentPricingPackagesCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ElementPricingPackageLinkingCollectionsComponentPricingPackagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementPricingPackageLinkingCollectionsComponentPricingPackagesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ElementPricingPackageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ElementPricingPackageLinkingCollectionsComponentPricingPackagesCollectionOrder {
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ElementPricingPackageOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  IsPopularAsc = 'isPopular_ASC',
  IsPopularDesc = 'isPopular_DESC',
  PackageNameAsc = 'packageName_ASC',
  PackageNameDesc = 'packageName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Individual testimonials [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementTestimonial) */
export type ElementTestimonial = Entry & {
  __typename?: 'ElementTestimonial';
  authorName?: Maybe<Scalars['String']['output']>;
  authorPosition?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<ElementTestimonialLinkingCollections>;
  message?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Individual testimonials [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementTestimonial) */
export type ElementTestimonialAuthorNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Individual testimonials [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementTestimonial) */
export type ElementTestimonialAuthorPositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Individual testimonials [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementTestimonial) */
export type ElementTestimonialIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Individual testimonials [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementTestimonial) */
export type ElementTestimonialLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Individual testimonials [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementTestimonial) */
export type ElementTestimonialMessageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Individual testimonials [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/elementTestimonial) */
export type ElementTestimonialTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ElementTestimonialCollection = {
  __typename?: 'ElementTestimonialCollection';
  items: Array<Maybe<ElementTestimonial>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ElementTestimonialFilter = {
  AND?: InputMaybe<Array<InputMaybe<ElementTestimonialFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ElementTestimonialFilter>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorName_contains?: InputMaybe<Scalars['String']['input']>;
  authorName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorName_not?: InputMaybe<Scalars['String']['input']>;
  authorName_not_contains?: InputMaybe<Scalars['String']['input']>;
  authorName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorPosition?: InputMaybe<Scalars['String']['input']>;
  authorPosition_contains?: InputMaybe<Scalars['String']['input']>;
  authorPosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorPosition_not?: InputMaybe<Scalars['String']['input']>;
  authorPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  authorPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_contains?: InputMaybe<Scalars['String']['input']>;
  message_exists?: InputMaybe<Scalars['Boolean']['input']>;
  message_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  message_not?: InputMaybe<Scalars['String']['input']>;
  message_not_contains?: InputMaybe<Scalars['String']['input']>;
  message_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ElementTestimonialLinkingCollections = {
  __typename?: 'ElementTestimonialLinkingCollections';
  componentTestimonialCollection?: Maybe<ComponentTestimonialCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ElementTestimonialLinkingCollectionsComponentTestimonialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementTestimonialLinkingCollectionsComponentTestimonialCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ElementTestimonialLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ElementTestimonialLinkingCollectionsComponentTestimonialCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ElementTestimonialOrder {
  AuthorNameAsc = 'authorName_ASC',
  AuthorNameDesc = 'authorName_DESC',
  AuthorPositionAsc = 'authorPosition_ASC',
  AuthorPositionDesc = 'authorPosition_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** This is the top navigation section of the page [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/navigationBar) */
export type NavigationBar = Entry & {
  __typename?: 'NavigationBar';
  centerNavigationLinksCollection?: Maybe<NavigationBarCenterNavigationLinksCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<NavigationBarLinkingCollections>;
  logo?: Maybe<Asset>;
  rightNavigationLinksCollection?: Maybe<NavigationBarRightNavigationLinksCollection>;
  sys: Sys;
};


/** This is the top navigation section of the page [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/navigationBar) */
export type NavigationBarCenterNavigationLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationBarCenterNavigationLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementLinkFilter>;
};


/** This is the top navigation section of the page [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/navigationBar) */
export type NavigationBarInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is the top navigation section of the page [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/navigationBar) */
export type NavigationBarLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the top navigation section of the page [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/navigationBar) */
export type NavigationBarLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the top navigation section of the page [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/navigationBar) */
export type NavigationBarRightNavigationLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationBarRightNavigationLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementLinkFilter>;
};

export type NavigationBarCenterNavigationLinksCollection = {
  __typename?: 'NavigationBarCenterNavigationLinksCollection';
  items: Array<Maybe<ElementLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavigationBarCenterNavigationLinksCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconPositionAsc = 'iconPosition_ASC',
  IconPositionDesc = 'iconPosition_DESC',
  IsExternalAsc = 'isExternal_ASC',
  IsExternalDesc = 'isExternal_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type NavigationBarCollection = {
  __typename?: 'NavigationBarCollection';
  items: Array<Maybe<NavigationBar>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationBarFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationBarFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationBarFilter>>>;
  centerNavigationLinks?: InputMaybe<CfElementLinkNestedFilter>;
  centerNavigationLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rightNavigationLinks?: InputMaybe<CfElementLinkNestedFilter>;
  rightNavigationLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationBarLinkingCollections = {
  __typename?: 'NavigationBarLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type NavigationBarLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationBarLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationBarLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NavigationBarLinkingCollectionsPageCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationBarOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NavigationBarRightNavigationLinksCollection = {
  __typename?: 'NavigationBarRightNavigationLinksCollection';
  items: Array<Maybe<ElementLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavigationBarRightNavigationLinksCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconPositionAsc = 'iconPosition_ASC',
  IconPositionDesc = 'iconPosition_DESC',
  IsExternalAsc = 'isExternal_ASC',
  IsExternalDesc = 'isExternal_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** Pages on the marketing website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageLinkingCollections>;
  sectionsCollection?: Maybe<PageSectionsCollection>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Pages on the marketing website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Pages on the marketing website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/page) */
export type PageSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageSectionsFilter>;
};


/** Pages on the marketing website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Pages on the marketing website [See type definition](https://app.contentful.com/spaces/80l9mibwzu0r/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sections?: InputMaybe<CfsectionsMultiTypeNestedFilter>;
  sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageSectionsCollection = {
  __typename?: 'PageSectionsCollection';
  items: Array<Maybe<PageSectionsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type PageSectionsItem = ComponentFeatures | ComponentFooter | ComponentFrequentlyAskedQuestions | ComponentHead | ComponentPartners | ComponentPricingPackages | ComponentTestimonial | NavigationBar;

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  componentFeatures?: Maybe<ComponentFeatures>;
  componentFeaturesCollection?: Maybe<ComponentFeaturesCollection>;
  componentFooter?: Maybe<ComponentFooter>;
  componentFooterCollection?: Maybe<ComponentFooterCollection>;
  componentFrequentlyAskedQuestions?: Maybe<ComponentFrequentlyAskedQuestions>;
  componentFrequentlyAskedQuestionsCollection?: Maybe<ComponentFrequentlyAskedQuestionsCollection>;
  componentHead?: Maybe<ComponentHead>;
  componentHeadCollection?: Maybe<ComponentHeadCollection>;
  componentPartners?: Maybe<ComponentPartners>;
  componentPartnersCollection?: Maybe<ComponentPartnersCollection>;
  componentPricingPackages?: Maybe<ComponentPricingPackages>;
  componentPricingPackagesCollection?: Maybe<ComponentPricingPackagesCollection>;
  componentTestimonial?: Maybe<ComponentTestimonial>;
  componentTestimonialCollection?: Maybe<ComponentTestimonialCollection>;
  elementFeature?: Maybe<ElementFeature>;
  elementFeatureCollection?: Maybe<ElementFeatureCollection>;
  elementFooterColumn?: Maybe<ElementFooterColumn>;
  elementFooterColumnCollection?: Maybe<ElementFooterColumnCollection>;
  elementFrequentlyAskedQuestion?: Maybe<ElementFrequentlyAskedQuestion>;
  elementFrequentlyAskedQuestionCollection?: Maybe<ElementFrequentlyAskedQuestionCollection>;
  elementLink?: Maybe<ElementLink>;
  elementLinkCollection?: Maybe<ElementLinkCollection>;
  elementPackageAmount?: Maybe<ElementPackageAmount>;
  elementPackageAmountCollection?: Maybe<ElementPackageAmountCollection>;
  elementPartner?: Maybe<ElementPartner>;
  elementPartnerCollection?: Maybe<ElementPartnerCollection>;
  elementPricingPackage?: Maybe<ElementPricingPackage>;
  elementPricingPackageCollection?: Maybe<ElementPricingPackageCollection>;
  elementTestimonial?: Maybe<ElementTestimonial>;
  elementTestimonialCollection?: Maybe<ElementTestimonialCollection>;
  entryCollection?: Maybe<EntryCollection>;
  navigationBar?: Maybe<NavigationBar>;
  navigationBarCollection?: Maybe<NavigationBarCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryComponentFeaturesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentFeaturesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentFeaturesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentFeaturesFilter>;
};


export type QueryComponentFooterArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentFooterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentFooterFilter>;
};


export type QueryComponentFrequentlyAskedQuestionsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentFrequentlyAskedQuestionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentFrequentlyAskedQuestionsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentFrequentlyAskedQuestionsFilter>;
};


export type QueryComponentHeadArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentHeadCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeadOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentHeadFilter>;
};


export type QueryComponentPartnersArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentPartnersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentPartnersOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentPartnersFilter>;
};


export type QueryComponentPricingPackagesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentPricingPackagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentPricingPackagesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentPricingPackagesFilter>;
};


export type QueryComponentTestimonialArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentTestimonialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTestimonialOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentTestimonialFilter>;
};


export type QueryElementFeatureArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryElementFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementFeatureOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementFeatureFilter>;
};


export type QueryElementFooterColumnArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryElementFooterColumnCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementFooterColumnOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementFooterColumnFilter>;
};


export type QueryElementFrequentlyAskedQuestionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryElementFrequentlyAskedQuestionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementFrequentlyAskedQuestionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementFrequentlyAskedQuestionFilter>;
};


export type QueryElementLinkArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryElementLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementLinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementLinkFilter>;
};


export type QueryElementPackageAmountArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryElementPackageAmountCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementPackageAmountOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementPackageAmountFilter>;
};


export type QueryElementPartnerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryElementPartnerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementPartnerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementPartnerFilter>;
};


export type QueryElementPricingPackageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryElementPricingPackageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementPricingPackageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementPricingPackageFilter>;
};


export type QueryElementTestimonialArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryElementTestimonialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ElementTestimonialOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ElementTestimonialFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryNavigationBarArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationBarCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationBarOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationBarFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfElementFeatureNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfElementFeatureNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfElementFeatureNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfElementFooterColumnNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfElementFooterColumnNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfElementFooterColumnNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  linksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfElementFrequentlyAskedQuestionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfElementFrequentlyAskedQuestionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfElementFrequentlyAskedQuestionNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  question?: InputMaybe<Scalars['String']['input']>;
  question_contains?: InputMaybe<Scalars['String']['input']>;
  question_exists?: InputMaybe<Scalars['Boolean']['input']>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  question_not?: InputMaybe<Scalars['String']['input']>;
  question_not_contains?: InputMaybe<Scalars['String']['input']>;
  question_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  response?: InputMaybe<Scalars['String']['input']>;
  response_contains?: InputMaybe<Scalars['String']['input']>;
  response_exists?: InputMaybe<Scalars['Boolean']['input']>;
  response_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  response_not?: InputMaybe<Scalars['String']['input']>;
  response_not_contains?: InputMaybe<Scalars['String']['input']>;
  response_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfElementLinkNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfElementLinkNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfElementLinkNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconPosition?: InputMaybe<Scalars['String']['input']>;
  iconPosition_contains?: InputMaybe<Scalars['String']['input']>;
  iconPosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  iconPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconPosition_not?: InputMaybe<Scalars['String']['input']>;
  iconPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  iconPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal_not?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfElementPackageAmountNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfElementPackageAmountNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfElementPackageAmountNestedFilter>>>;
  amount?: InputMaybe<Scalars['String']['input']>;
  amount_contains?: InputMaybe<Scalars['String']['input']>;
  amount_exists?: InputMaybe<Scalars['Boolean']['input']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  amount_not?: InputMaybe<Scalars['String']['input']>;
  amount_not_contains?: InputMaybe<Scalars['String']['input']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  currency?: InputMaybe<Scalars['String']['input']>;
  currency_contains?: InputMaybe<Scalars['String']['input']>;
  currency_exists?: InputMaybe<Scalars['Boolean']['input']>;
  currency_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  currency_not?: InputMaybe<Scalars['String']['input']>;
  currency_not_contains?: InputMaybe<Scalars['String']['input']>;
  currency_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period?: InputMaybe<Scalars['String']['input']>;
  period_contains?: InputMaybe<Scalars['String']['input']>;
  period_exists?: InputMaybe<Scalars['Boolean']['input']>;
  period_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  period_not?: InputMaybe<Scalars['String']['input']>;
  period_not_contains?: InputMaybe<Scalars['String']['input']>;
  period_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfElementPartnerNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfElementPartnerNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfElementPartnerNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  partnerLogo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfElementPricingPackageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfElementPricingPackageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfElementPricingPackageNestedFilter>>>;
  benefits_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  benefits_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  benefits_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  benefits_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isPopular?: InputMaybe<Scalars['Boolean']['input']>;
  isPopular_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isPopular_not?: InputMaybe<Scalars['Boolean']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  packageDescription?: InputMaybe<Scalars['String']['input']>;
  packageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  packageDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  packageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  packageDescription_not?: InputMaybe<Scalars['String']['input']>;
  packageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  packageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  packageName?: InputMaybe<Scalars['String']['input']>;
  packageName_contains?: InputMaybe<Scalars['String']['input']>;
  packageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  packageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  packageName_not?: InputMaybe<Scalars['String']['input']>;
  packageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  packageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfElementTestimonialNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfElementTestimonialNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfElementTestimonialNestedFilter>>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorName_contains?: InputMaybe<Scalars['String']['input']>;
  authorName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorName_not?: InputMaybe<Scalars['String']['input']>;
  authorName_not_contains?: InputMaybe<Scalars['String']['input']>;
  authorName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorPosition?: InputMaybe<Scalars['String']['input']>;
  authorPosition_contains?: InputMaybe<Scalars['String']['input']>;
  authorPosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorPosition_not?: InputMaybe<Scalars['String']['input']>;
  authorPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  authorPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_contains?: InputMaybe<Scalars['String']['input']>;
  message_exists?: InputMaybe<Scalars['Boolean']['input']>;
  message_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  message_not?: InputMaybe<Scalars['String']['input']>;
  message_not_contains?: InputMaybe<Scalars['String']['input']>;
  message_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfsectionsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfsectionsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfsectionsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type GetAllPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPagesQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type GetSinglePageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetSinglePageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', title?: string | null, sys: { __typename?: 'Sys', id: string }, sectionsCollection?: { __typename?: 'PageSectionsCollection', items: Array<{ __typename: 'ComponentFeatures', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentFooter', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentFrequentlyAskedQuestions', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHead', title?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentPartners', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentPricingPackages', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentTestimonial', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NavigationBar', sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null };

export type GetComponentFooterQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetComponentFooterQuery = { __typename?: 'Query', componentFooter?: { __typename: 'ComponentFooter', sys: { __typename?: 'Sys', id: string }, logo?: { __typename?: 'Asset', url?: string | null } | null, columnsCollection?: { __typename?: 'ComponentFooterColumnsCollection', items: Array<{ __typename?: 'ElementFooterColumn', title?: string | null, sys: { __typename?: 'Sys', id: string }, linksCollection?: { __typename?: 'ElementFooterColumnLinksCollection', items: Array<{ __typename?: 'ElementLink', name?: string | null, href?: string | null, isExternal?: boolean | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null } | null };

export type GetComponentNavigationQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetComponentNavigationQuery = { __typename?: 'Query', navigationBar?: { __typename: 'NavigationBar', sys: { __typename?: 'Sys', id: string }, logo?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null, centerNavigationLinksCollection?: { __typename?: 'NavigationBarCenterNavigationLinksCollection', items: Array<{ __typename?: 'ElementLink', isExternal?: boolean | null, name?: string | null, href?: string | null, type?: string | null, icon?: { __typename?: 'Asset', width?: number | null, height?: number | null, url?: string | null } | null } | null> } | null, rightNavigationLinksCollection?: { __typename?: 'NavigationBarRightNavigationLinksCollection', items: Array<{ __typename?: 'ElementLink', isExternal?: boolean | null, name?: string | null, href?: string | null, type?: string | null, icon?: { __typename?: 'Asset', width?: number | null, height?: number | null, url?: string | null } | null } | null> } | null } | null };

export type GetComponentFeaturesQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetComponentFeaturesQuery = { __typename?: 'Query', componentFeatures?: { __typename: 'ComponentFeatures', title?: string | null, caption?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string }, featureCollection?: { __typename?: 'ComponentFeaturesFeatureCollection', items: Array<{ __typename?: 'ElementFeature', title?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null } | null };

export type GetComponentFaqQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetComponentFaqQuery = { __typename?: 'Query', componentFrequentlyAskedQuestions?: { __typename: 'ComponentFrequentlyAskedQuestions', title?: string | null, sys: { __typename?: 'Sys', id: string }, askedQuestionAndAnswersCollection?: { __typename?: 'ComponentFrequentlyAskedQuestionsAskedQuestionAndAnswersCollection', items: Array<{ __typename?: 'ElementFrequentlyAskedQuestion', question?: string | null, response?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };

export type GetComponentPartnersQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetComponentPartnersQuery = { __typename?: 'Query', componentPartners?: { __typename: 'ComponentPartners', sys: { __typename?: 'Sys', id: string }, partnerCollection?: { __typename?: 'ComponentPartnersPartnerCollection', items: Array<{ __typename?: 'ElementPartner', sys: { __typename?: 'Sys', id: string }, partnerLogo?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null } | null };

export type GetComponentPricingPackagesQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetComponentPricingPackagesQuery = { __typename?: 'Query', componentPricingPackages?: { __typename: 'ComponentPricingPackages', title?: string | null, caption?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string }, pricingPlansCollection?: { __typename?: 'ComponentPricingPackagesPricingPlansCollection', items: Array<{ __typename?: 'ElementPricingPackage', packageName?: string | null, packageDescription?: string | null, isPopular?: boolean | null, benefits?: Array<string | null> | null, sys: { __typename?: 'Sys', id: string }, price?: { __typename?: 'ElementPackageAmount', amount?: string | null, currency?: string | null, period?: string | null } | null, link?: { __typename?: 'ElementLink', href?: string | null, isExternal?: boolean | null, name?: string | null, iconPosition?: string | null, icon?: { __typename?: 'Asset', url?: string | null } | null } | null } | null> } | null } | null };

export type GetComponentTestimonialQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetComponentTestimonialQuery = { __typename?: 'Query', componentTestimonial?: { __typename: 'ComponentTestimonial', sys: { __typename?: 'Sys', id: string }, testimonialCollection?: { __typename?: 'ComponentTestimonialTestimonialCollection', items: Array<{ __typename?: 'ElementTestimonial', authorName?: string | null, authorPosition?: string | null, message?: string | null, title?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null } | null };

export type GetComponentHeadQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetComponentHeadQuery = { __typename?: 'Query', componentHead?: { __typename: 'ComponentHead', title?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string }, primaryActionLink?: { __typename?: 'ElementLink', name?: string | null, href?: string | null, isExternal?: boolean | null, type?: string | null, icon?: { __typename?: 'Asset', width?: number | null, height?: number | null, url?: string | null } | null } | null, secondaryActionLink?: { __typename?: 'ElementLink', name?: string | null, href?: string | null, isExternal?: boolean | null, type?: string | null, icon?: { __typename?: 'Asset', width?: number | null, height?: number | null, url?: string | null } | null } | null, landingImage?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null } | null } | null };
