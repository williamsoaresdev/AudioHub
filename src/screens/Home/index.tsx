import { Box, Heading, ScrollView } from "native-base";
import React, { useEffect } from "react";
import ContentBackground from "../../components/ContentBackground";
import AlbumCard from "../../components/AlbumCard";
import { useUser } from "../../contexts/user";
import { getAlbums, getStories } from "../../services/musicApi";
import AuthorCard from "../../components/AuthorCard";
import { useMusics } from "../../contexts/music";
import { useLoading } from "../../contexts/loading";
import { useStories } from "../../contexts/stories";

const Home = () => {
  const { user } = useUser();
  const { musics, setMusics } = useMusics();
  const { stories, setStories } = useStories();
  const { setLoading } = useLoading();

  useEffect(() => {
    if (user?.token) {
      setLoading(true);
      getAlbums(user.token)
        .then((res) => {
          setMusics(res.data);
        })
        .finally(() => {
          setLoading(false);
        });

      getStories(user.token)
        .then((res) => {
          setStories(res.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [user]);

  return (
    <ContentBackground>
      <ScrollView>
        <Box>
          <Heading size="md" margin="1.5" color="muted.100" overflow={"hidden"}>
            Musicas
          </Heading>
          <ScrollView horizontal={true}>
            {musics
              ? musics.map((x, idx) => {
                  return (
                    <AuthorCard
                      key={idx}
                      name={x.album}
                      img={x.img}
                      title={x.album}
                    />
                  );
                })
              : null}
          </ScrollView>
        </Box>
        <Box>
          <Heading size="md" margin="1.5" color="muted.100" overflow={"hidden"}>
            Autores
          </Heading>
          <ScrollView horizontal={true}>
            {stories
              ? stories.map((x, idx) => {
                  return (
                    <AlbumCard
                      key={idx}
                      name={x.name}
                      img={x.img}
                      title={x.name}
                    />
                  );
                })
              : null}
          </ScrollView>
        </Box>
        <Box>
          <Heading size="md" margin="1.5" color="muted.100" overflow={"hidden"}>
            Ultimos Vistos
          </Heading>
          <ScrollView horizontal={true}>
            {musics
              ? musics.reverse().map((x, idx) => {
                  return (
                    <AuthorCard
                      key={idx}
                      name={x.album}
                      img={x.img}
                      title={x.album}
                    />
                  );
                })
              : null}
          </ScrollView>
        </Box>
        <Box>
          <Heading size="md" margin="1.5" color="muted.100" overflow={"hidden"}>
            Seus Cantores Favoritas
          </Heading>
          <ScrollView horizontal={true}>
            {stories
              ? stories.reverse().map((x, idx) => {
                  return (
                    <AlbumCard
                      key={idx}
                      name={x.name}
                      img={x.img}
                      title={x.name}
                    />
                  );
                })
              : null}
          </ScrollView>
        </Box>
      </ScrollView>
    </ContentBackground>
  );
};

export default Home;
