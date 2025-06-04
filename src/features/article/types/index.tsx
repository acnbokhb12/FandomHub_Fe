
export interface ArticleResponse {
    ArticleId: number;
    Title: string;
    SubTitle: string;
    Content: string;
    Avatar: string;
    Slug: string;
    ViewCount: number;
    IsActive: boolean;
    CreatedBy: string | null;
    UpdatedBy: string | null;
    CreatedAt: Date;
    UpdatedAt: Date;
    ArticleCategory: ArticleCategory | null;
}
interface ArticleCategory {
    ArticleCategoryId: number;
    Name: string;
    Slug: string;
}