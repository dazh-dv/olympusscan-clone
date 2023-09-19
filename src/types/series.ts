export interface TypeSerieFilter {
  id:            number;
  name:          string;
  slug:          string;
  status:        TypeStatusFilter;
  cover:         string;
  cover_srcset:  string;
  chapter_count: number;
  type:          string;
}

export interface TypeStatusFilter {
  id:   number;
  name: string;
}

export interface TypeSerieSlider {
  title:              string;
  description:        string;
  banner:             string;
  banner_srcset:      string;
  banner_mini_srcset: string;
  url?:                string;
  slug:                string;
}

export interface TypeSeriePopular_Novel {
  id:           number;
  name:         string;
  slug:         string;
  status:       TypeStatusSerieNovel | null;
  cover:        string;
  cover_srcset: string;
  type:         string;
}

export interface TypeStatusSerieNovel {
  id:         number;
  name:       string;
  created_at: Date;
  updated_at: Date;
}

export interface TypeSerieNewChapter {
  name:          string;
  slug:          string;
  id:            number;
  cover:         string;
  cover_srcset:  string;
  last_chapters: LastChapter[];
  status:        null;
  type:          string;
}

export interface LastChapter {
  id:           number;
  name:         string;
  published_at: Date;
}

export interface TypeGenders {
    id:   number;
    name: string;
}
