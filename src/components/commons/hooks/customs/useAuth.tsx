import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

import {
  accessTokenState,
  restoreAccessTokenLoadable,
  visitedPageState,
} from "../../../commons/store";
const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      email
      phone
      name
      point
    }
  }
`;

export default function useAuth() {
  const Auth = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  const client = useApolloClient();
  useEffect(() => {
    if (!sessionStorage.getItem("#LL")) {
      Swal.fire({
        title: "로그인을 먼저 해주세요.",
        icon: "warning",
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
      });
      setVisitedPage(router.asPath);
      router.push("/login");
    } else if (sessionStorage.getItem("#LL")) {
      if (!accessToken) {
        Auth.toPromise().then((newAccessToken) => {
          if (!newAccessToken) {
            Swal.fire({
              title: "로그인을 먼저 해주세요.",
              icon: "warning",
              showConfirmButton: false,
              timer: 1000,
              backdrop: false,
            });
            setVisitedPage(router.asPath);
            router.push("/login");
          } else if (newAccessToken) {
            client
              .query({
                query: FETCH_USER_LOGGEDIN,
                context: {
                  headers: {
                    Authorization: `Bearer ${newAccessToken}`,
                  },
                },
              })
              .catch(() => {
                Swal.fire({
                  title: "로그인을 먼저 해주세요.",
                  icon: "warning",
                  showConfirmButton: false,
                  timer: 1000,
                  backdrop: false,
                });
                setVisitedPage(router.asPath);
                router.push("/login");
              });
          }
        });
      }
    }
  }, []);
}
