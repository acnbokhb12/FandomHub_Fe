
export interface CommunityResponse {
  CommunityId: number;
  Name: string;
  SubName: string;
  LogoImage: string;
  CoverImage: string;
  Avatar: boolean;
  ContentText: string;
  Summary: string;
  Slug: string;
  IsActive: boolean;
  LanguageId: number;
  CreatedBy: string | null;
  UpdatedBy: string | null;
  CreatedAt: Date;
  UpdatedAt: Date;
}

export interface WikiPageResponse {
  WikiPageId: number;
  CommunityId: number;
  Title: string;
  SubTitle: string;
  Avatar: string;
  Content: string;
  Slug: string;
  ViewCount: number;
  IsActive: boolean;
  CreatedBy: string | null;
  UpdatedBy: string | null;
  CreatedAt: Date;
  UpdatedAt: Date;
  Community: CommunityResponse | null;
}

export interface ItemsWikisProps {
  hubID: number;
  articleCategoryID: number;
  advertisement?: boolean;
}