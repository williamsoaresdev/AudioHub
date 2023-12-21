import { useEffect } from "react";
import { UserProvider, useUser } from "./src/contexts/user";
import Routes from "./src/routes";
import { NativeBaseProvider } from "native-base";
import { MMKV } from "react-native-mmkv";
import { LoadingProvider } from "./src/contexts/loading";
import { MusicProvider } from "./src/contexts/music";
import THEME from "./src/theme";
import { StoriesProvider } from "./src/contexts/stories";

export const storage = new MMKV({
  id: "movieapp",
});

export default function App() {
  const { user, setUser } = useUser();

  useEffect(() => {
    if (user != null) {
      storage.set("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const userDb = storage.getString("user");
    if (userDb) {
      setUser(JSON.parse(userDb));
    }
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <LoadingProvider>
        <UserProvider>
          <MusicProvider>
            <StoriesProvider>
              <Routes />
            </StoriesProvider>
          </MusicProvider>
        </UserProvider>
      </LoadingProvider>
    </NativeBaseProvider>
  );
}
