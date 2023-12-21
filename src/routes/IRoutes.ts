import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type IRoutes = {
  AudioHub: undefined;
  Login: undefined;
  Registration: undefined;
};

interface IRouteParams {
  route: {
    key: string;
    name: string;
    params: any;
  };
}

export { IRouteParams };
export type RoutesType = NativeStackNavigationProp<IRoutes>;
