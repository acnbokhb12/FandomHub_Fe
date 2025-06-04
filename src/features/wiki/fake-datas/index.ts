import { ArticleResponse } from '@/features/article/types';
import { WikiPageResponse, CommunityResponse } from '@/features/wiki/types';   

const communityResponse : CommunityResponse = {
    CommunityId: 1,
    Name: "Harry Potter Wiki",
    SubName: "",
    LogoImage: "",
    CoverImage: "",
    Avatar: false,
    ContentText: "",
    Summary: "",
    Slug: "harry-potter-wiki",
    IsActive: true,
    LanguageId: 0,
    CreatedBy: null,
    UpdatedBy: null,
    CreatedAt: new Date(),
    UpdatedAt: new Date()
}

export const mockWikiPages: WikiPageResponse[] = [
  {
    WikiPageId: 1,
    CommunityId: 1,
    Title: "Harry Potter",
    SubTitle: "",
    Avatar: "https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400",
    Content: "",
    Slug: "harry-potter",
    ViewCount: 10500,
    IsActive: true,
    CreatedBy: null,
    UpdatedBy: null,
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
    Community: communityResponse
  },
  {
    WikiPageId: 2,
    CommunityId: 2,
    Title: "Game of Thrones",
    SubTitle: "",
    Avatar: "https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400",
    Content: "",
    Slug: "game-of-thrones",
    ViewCount: 8900,
    IsActive: true,
    CreatedBy: null,
    UpdatedBy: null,
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
    Community: communityResponse
  },
  {
    WikiPageId: 3,
    CommunityId: 3,
    Title: "One Piece",
    SubTitle: "",
    Avatar: "https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400",
    Content: "",
    Slug: "one-piece",
    ViewCount: 15000,
    IsActive: true,
    CreatedBy: null,
    UpdatedBy: null,
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
    Community: communityResponse
  },
  {
    WikiPageId: 4,
    CommunityId: 4,
    Title: "Stranger Things",
    SubTitle: "",
    Avatar: "https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400",
    Content: "",
    Slug: "stranger-things",
    ViewCount: 7200,
    IsActive: true,
    CreatedBy: null,
    UpdatedBy: null,
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
    Community: communityResponse
  },
  {
    WikiPageId: 5,
    CommunityId: 5,
    Title: "Attack on Titan",
    SubTitle: "",
    Avatar: "https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400",
    Content: "",
    Slug: "attack-on-titan",
    ViewCount: 13400,
    IsActive: true,
    CreatedBy: null,
    UpdatedBy: null,
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
    Community: communityResponse
  },
  {
    WikiPageId: 6,
    CommunityId: 6,
    Title: "Breaking Bad",
    SubTitle: "",
    Avatar: "https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400",
    Content: "",
    Slug: "breaking-bad",
    ViewCount: 9700,
    IsActive: true,
    CreatedBy: null,
    UpdatedBy: null,
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
    Community: communityResponse
  },
  {
    WikiPageId: 7,
    CommunityId: 6,
    Title: "Breaking Bad",
    SubTitle: "",
    Avatar: "https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400",
    Content: "",
    Slug: "breaking-bad",
    ViewCount: 9700,
    IsActive: true,
    CreatedBy: null,
    UpdatedBy: null,
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
    Community: communityResponse
  },
  {
    WikiPageId: 8,
    CommunityId: 6,
    Title: "Breaking Bad",
    SubTitle: "",
    Avatar: "https://static.wikia.nocookie.net/aad30c25-f98b-4aae-b024-901c456af1ec/scale-to-height-down/400",
    Content: "",
    Slug: "breaking-bad",
    ViewCount: 9700,
    IsActive: true,
    CreatedBy: null,
    UpdatedBy: null,
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
    Community: communityResponse
  }
];

export const mockArticlesFandom: ArticleResponse[] = [
  {
    ArticleId: 1,
    Title: "Harry Potter",
    SubTitle: "Devil May Cry makes a hell of a first impression with its debut season on Netflix.",
    Content: "",
    Avatar: "https://static.wikia.nocookie.net/6a6094c3-0f92-450c-ae7a-5ae0bb814aaa/scale-to-width-down/800",
    Slug: "harry-potter",
    ViewCount: 10000,
    IsActive: true,
    CreatedBy: null,
    UpdatedBy: null,
    CreatedAt: new Date("2022-01-01T00:00:00Z"),
    UpdatedAt: new Date("2024-05-01T00:00:00Z"),
    ArticleCategory: {
      ArticleCategoryId: 1,
      Name: "GameSpot",
      Slug: "harry-potter-wiki"
    }
  },
  {
    ArticleId: 2,
    Title: "Naruto",
    SubTitle: "Devil May Cry makes a hell of a first impression with its debut season on Netflix.",
    Content: "",
    Avatar: "https://static.wikia.nocookie.net/6a6094c3-0f92-450c-ae7a-5ae0bb814aaa/scale-to-width-down/800",
    Slug: "naruto",
    ViewCount: 12000,
    IsActive: true,
    CreatedBy: null,
    UpdatedBy: null,
    CreatedAt: new Date("2023-01-01T00:00:00Z"),
    UpdatedAt: new Date("2024-04-10T00:00:00Z"),
    ArticleCategory: {
      ArticleCategoryId: 2,
      Name: "GameSpot",
      Slug: "naruto-wiki"
    }
  },
  {
    ArticleId: 3,
    Title: "One Piece",
    SubTitle: "Devil May Cry makes a hell of a first impression with its debut season on Netflix.",
    Content: "",
    Avatar: "https://static.wikia.nocookie.net/6a6094c3-0f92-450c-ae7a-5ae0bb814aaa/scale-to-width-down/800",
    Slug: "one-piece",
    ViewCount: 15000,
    IsActive: true,
    CreatedBy: null,
    UpdatedBy: null,
    CreatedAt: new Date("2023-03-01T00:00:00Z"),
    UpdatedAt: new Date("2024-05-10T00:00:00Z"),
    ArticleCategory: {
      ArticleCategoryId: 3,
      Name: "GameSpot",
      Slug: "one-piece-wiki"
    }
  },
  {
    ArticleId: 4,
    Title: "Dragon Ball",
    SubTitle: "Devil May Cry makes a hell of a first impression with its debut season on Netflix.",
    Content: "",
    Avatar: "https://static.wikia.nocookie.net/6a6094c3-0f92-450c-ae7a-5ae0bb814aaa/scale-to-width-down/800",
    Slug: "dragon-ball",
    ViewCount: 18000,
    IsActive: true,
    CreatedBy: null,
    UpdatedBy: null,
    CreatedAt: new Date("2023-05-01T00:00:00Z"),
    UpdatedAt: new Date("2024-05-15T00:00:00Z"),
    ArticleCategory: {
      ArticleCategoryId: 4,
      Name: "GameSpot",
      Slug: "dragon-ball-wiki"
    }
  },
  {
    ArticleId: 5,
    Title: "Attack on Titan",
    SubTitle: "Devil May Cry makes a hell of a first impression with its debut season on Netflix.",
    Content: "",
    Avatar: "https://static.wikia.nocookie.net/6a6094c3-0f92-450c-ae7a-5ae0bb814aaa/scale-to-width-down/800",
    Slug: "attack-on-titan",
    ViewCount: 11000,
    IsActive: true,
    CreatedBy: null,
    UpdatedBy: null,
    CreatedAt: new Date("2023-02-01T00:00:00Z"),
    UpdatedAt: new Date("2024-05-05T00:00:00Z"),
    ArticleCategory: {
      ArticleCategoryId: 5,
      Name: "GameSpot",
      Slug: "attack-on-titan-wiki"
    }
  },
  {
    ArticleId: 6,
    Title: "My Hero Academia",
    SubTitle: "Devil May Cry makes a hell of a first impression with its debut season on Netflix.",
    Content: "",
    Avatar: "https://static.wikia.nocookie.net/6a6094c3-0f92-450c-ae7a-5ae0bb814aaa/scale-to-width-down/800",
    Slug: "my-hero-academia",
    ViewCount: 9000,
    IsActive: true,
    CreatedBy: null,
    UpdatedBy: null,
    CreatedAt: new Date("2023-04-01T00:00:00Z"),
    UpdatedAt: new Date("2024-05-20T00:00:00Z"),
    ArticleCategory: {
      ArticleCategoryId: 6,
      Name: "GameSpot",
      Slug: "my-hero-academia-wiki"
    }
  }
];

