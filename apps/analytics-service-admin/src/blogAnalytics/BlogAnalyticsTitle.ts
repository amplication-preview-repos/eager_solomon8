import { BlogAnalytics as TBlogAnalytics } from "../api/blogAnalytics/BlogAnalytics";

export const BLOGANALYTICS_TITLE_FIELD = "id";

export const BlogAnalyticsTitle = (record: TBlogAnalytics): string => {
  return record.id?.toString() || String(record.id);
};
