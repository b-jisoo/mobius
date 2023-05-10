import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import Home from "./pages/Home";
import GeneralLayout from "./layout/GeneralLayout";
import Community from "./pages/Community";
import Login from "./pages/Login";
import Knowledge from "./pages/Knowledge";
import { BoardElement } from "./types/board";
import Notice from "./pages/Notice";
import Questions from "./pages/Questions";
import Write from "./pages/Write";

interface RouterBase {
  id: number; // 페이지 아이디 (반복문용 고유값)
  path: string; // 페이지 경로
  label: string; // 사이드바에 표시할 페이지 이름
  element: React.ReactNode; // 페이지 엘리먼트
}

interface UserAccessibleRouterElement extends RouterBase {
  withAuth?: boolean; // 인증이 필요한 페이지 여부
}

interface AdminAccessibleRouterElement extends RouterBase {
  withAuth: true; // 인증이 필요한 페이지 여부
  isAdminPage?: boolean; // 어드민 페이지 여부
}

type RouterElement = UserAccessibleRouterElement | AdminAccessibleRouterElement;

const routerData: RouterElement[] = [
  {
    id: 0,
    path: "/",
    label: "Home",
    element: <Home />,
    withAuth: false,
  },
  {
    id: 1,
    path: "/community",
    label: "커뮤니티",
    element: <Community />,
    withAuth: false,
  },
  {
    id: 2,
    path: "/knowledge",
    label: "지식",
    element: <Knowledge />,
    withAuth: false,
  },
  {
    id: 3,
    path: "/notice",
    label: "공지사항",
    element: <Notice />,
    withAuth: false,
  },
  {
    id: 4,
    path: "/questions",
    label: "Q&A",
    element: <Questions />,
    withAuth: false,
  },
  {
    id: 5,
    path: "/auth/login",
    label: "Login",
    element: <Login />,
    withAuth: false,
  },
  {
    id: 6,
    path: "/:communiti/write",
    label: "글쓰기",
    element: <Write />,
    withAuth: false,
  },
];

export const routers: RemixRouter = createBrowserRouter(
  routerData.map((router) => {
    if (router.label === "Login" || router.label === "Signup") {
      return {
        path: router.path,
        element: router.element,
      };
    } else {
      return {
        path: router.path,
        element: <GeneralLayout>{router.element}</GeneralLayout>,
      };
    }
  })
);

export const BoardArticle: BoardElement[] = routerData.reduce(
  (prev, router) => {
    return [
      ...prev,
      {
        id: router.id,
        path: router.path,
        label: router.label,
      },
    ];
  },
  [] as BoardElement[]
);
