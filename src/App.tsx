import React, { FC, useState, useEffect, useRef, useLayoutEffect } from "react";
import { fetchFn, flickrItem } from "./api";
import Card from "./components/Card";
import Image from "./components/Image";
import Description from "./components/Description";
import Tags from "./components/Tags";
import Title from "./components/Title";
import Header from "./components/Header";
import { Container } from "./App.styles";

const getFlickr = async (search?: string) => {
  const response = await fetchFn(search);
  return response;
};

const App: FC<{}> = () => {
  const [items, setItems] = useState<flickrItem[]>([]);
  const [loadMore, setLoadMore] = useState<boolean>(true);
  const containerEl = useRef<HTMLDivElement>(null);
  const [searchString, setSearchString] = useState<string>("");

  useEffect(() => {
    async function apiCall() {
      const response = await getFlickr(searchString);
      setItems([...items, ...response.items]);
      setLoadMore(false);
    }

    if (loadMore) apiCall();
  }, [loadMore, items, searchString]);

  const onScroll = (e: any) => {
    const rect = containerEl?.current?.getBoundingClientRect();
    if (rect && rect?.bottom - window.innerHeight < 10) {
      setLoadMore(true);
    }
  };

  const debounce = <F extends (search: string) => void>(
    func: F,
    waitFor: number
  ) => {
    let timeout: number = 0;

    const debounced = (search: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(search), waitFor);
    };

    return debounced;
  };

  const onSearch = (search: string) => {
    setSearchString(search);
    window.scrollTo(0, 0);
    debounce(async () => {
      const response = await getFlickr(search);
      setItems(response.items);
      setLoadMore(false);
    }, 250)(search);
  };

  useLayoutEffect(() => {
    const parentEl = document.scrollingElement;
    parentEl?.addEventListener("scroll", onScroll);
    parentEl?.addEventListener("wheel", onScroll);

    return () => {
      parentEl?.removeEventListener("scroll", onScroll);
      parentEl?.removeEventListener("wheel", onScroll);
    };
  }, []);

  return (
    <>
      <Header onChange={onSearch} searchString={searchString} />
      <Container ref={containerEl}>
        {items.map(item => (
          <Card>
            <Image url={item.media.m} title={item.title} />
            <Title
              title={item.title}
              author_id={item.author_id}
              author={item.author}
              link={item.link}
            />
            <Description text="Description" />
            <Tags tags={item.tags} />
          </Card>
        ))}
      </Container>
    </>
  );
};

export default App;

/* TODO: 
move linkContainer to sperate component
how to infinite scroll

*/
