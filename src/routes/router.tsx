import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Layout } from "../components/Layout";
import { AboutPage } from "../pages/AboutPage";
import { DiaryDetailPage } from "../pages/DiaryDetailPage";
import { DiaryPage } from "../pages/DiaryPage";
import { HomePage } from "../pages/HomePage";
import { PostDetailPage } from "../pages/PostDetailPage";
import { PostsPage } from "../pages/PostsPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { TagDetailPage } from "../pages/TagDetailPage";
import { TagsPage } from "../pages/TagsPage";

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/posts",
  component: PostsPage,
});

const postDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/posts/$slug",
  component: PostDetailPage,
});

const tagsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tags",
  component: TagsPage,
});

const tagDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tags/$tag",
  component: TagDetailPage,
});

const diaryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/diary",
  component: DiaryPage,
});

const diaryDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/diary/$date",
  component: DiaryDetailPage,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: ProjectsPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  postsRoute,
  postDetailRoute,
  tagsRoute,
  tagDetailRoute,
  diaryRoute,
  diaryDetailRoute,
  projectsRoute,
  aboutRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
