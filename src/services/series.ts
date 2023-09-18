import { TypeSerieSlider } from "@/types/series";

function unorderArray(array: []){
  const und = array.sort(() => 0.5 - Math.random() );
  return und.slice(0, 3);
}

function mapSeriesSlider(comics: Array<TypeSerieSlider>) {
  const mappedData = comics.map(comic => {
    if(!comic.url) return comic
    const urlParts = comic.url.split('/');
    const slug = urlParts[urlParts.length - 1];
    delete comic.url;
    return { ...comic, slug };
  });
  
  return mappedData
}


export async function getHomeSeries() {

  try {
    const consult = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`)

    if(!consult.ok){
      return {
        succes: false,
        slider: [],
        popular_comics: [],
        novels: [],
        new_chpters: [],
        announcements: {},
      }
    }

    const res = await consult.json()

    const sliderMapped = (data: []) => {
      const unorder = unorderArray(data)
      return mapSeriesSlider(unorder)
    }

    return {
      succes: true,
      slider: sliderMapped(res.data.slider),
      popular_comics: JSON.parse(res.data.popular_comics),
      novels: res.data.novels,
      new_chpters: res.data.new_chapters,
      announcements: res.data.announcements,
    }
    
  } catch (error) {
    return {
      succes: false,
      slider: [],
      popular_comics: [],
      novels: [],
      new_chpters: [],
      announcements: {},
    }
  }

}

export async function getSeriesPage({ page = 1, direction = 'asc', type = 'comic', perPage = 15 }:{ page: number | string, direction: string, type: string, perPage: number | string }) {

  try {
    const consult = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/series?page=${page}&direction=${direction}&type=${type}&per_page=${perPage}`)

    if(!consult.ok){
      return {
        succes: false,
        recommended_series: [],
        series: [],
        data: {
          current_page: 1,
          total: 1,
          per_page: 15,
        }
      }
    }

    const res = await consult.json()

    return {
      succes: true,
      recommended_series: JSON.parse(res.data.recommended_series),
      series: res.data.series.data,
      data: {
        current_page: res.data.series.current_page,
        total: res.data.series.total,
        per_page: res.data.series.per_page,
      }
    }
    
  } catch (error) {
    
    return {
      succes: false,
      recommended_series: [],
      series: [],
      data: {
        current_page: 1,
        total: 1,
        per_page: 15,
      }
    }
  }

}
