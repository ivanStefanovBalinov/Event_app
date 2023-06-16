import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/Layout/Navigation/MainNavigation";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <h2>Loading...</h2>}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
