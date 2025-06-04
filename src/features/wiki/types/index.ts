
export interface WikiPage {
  WikiPageId: number;
  CommunityId: number;
  Title: string;
  SubTitle: string; 
  Avatar : string;
  Content: string;
  Slug : string;
  ViewCount: number;
  IsActive: boolean;
}