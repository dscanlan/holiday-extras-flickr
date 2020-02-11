export const fetchFn = async (search?: string): Promise<flickrResponse> => {
  try {
    const url = `http://localhost:8086/flickr`;
    const query = search ? `/?search=${search}` : "";
    const response = await fetch(`${url}${query}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
    });

    if (!response.ok) throw new Error(response.status.toString());
    const body = await response.json();
    return body;
  } catch (e) {
    console.log({ e });
    throw Error(e.message);
  }
};

interface flickrMedia {
  m: string;
}

export interface flickrItem {
  title: string;
  link: string;
  media: flickrMedia;
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}

export interface flickrResponse {
  title: string;
  link: string;
  description: string;
  items: flickrItem[];
}
