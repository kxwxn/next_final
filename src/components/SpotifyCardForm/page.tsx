"use client";
import styles from "./SpotifyCardForm.module.css";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { Spotify } from "react-spotify-embed";
import { InView } from "react-intersection-observer";

export const Party = () => {
  const {
    data: spotifyData,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteScroll("M", 9);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return window.alert(`An error occured${error.message}`);

  const deleteBtn = () => {};

  const renderSpotify = spotifyData.pages.flatMap((page) => {
    return page.data.map((item, index) => {
      return (
        <div className={styles.container} key={index}>
          <Spotify link={item.title} />
          <div className={styles.genre}>{item.genre}</div>
          <div className={styles.text}>{item.text}</div>
        </div>
      );
    });
  });

  return (
    <div>
      {renderSpotify}
      {hasNextPage && (
        <InView
          as="div"
          onChange={(inView, entry) => inView && fetchNextPage()}
        >
          Loading more...
        </InView>
      )}
    </div>
  );
};
