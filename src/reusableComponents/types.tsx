import { ReactNode } from "react";

export type reactChildren = { children: ReactNode };

export interface Props {
  data: {
    id?: string;
    name?: string;
    text?: string;
    created_at?: string;
  }[];
  type?: string;
}
