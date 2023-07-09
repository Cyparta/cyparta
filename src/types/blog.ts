export interface blogProps {
  id?: number;
  created_at?: string;
  image?: null | string;
  likes_count?: number;
  publisher?: number;
  text?: string;
  title?: string;
  publisher_image?: string;
  publisher_name?: string;
  publisher_job?: string;
  category?: categoryProps[];
}

export interface categoryProps {
  id: number;
  name: string;
}
