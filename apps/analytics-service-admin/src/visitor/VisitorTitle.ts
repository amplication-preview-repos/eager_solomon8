import { Visitor as TVisitor } from "../api/visitor/Visitor";

export const VISITOR_TITLE_FIELD = "id";

export const VisitorTitle = (record: TVisitor): string => {
  return record.id?.toString() || String(record.id);
};
