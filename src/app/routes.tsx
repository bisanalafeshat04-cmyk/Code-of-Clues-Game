import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { StoryPage } from "./pages/StoryPage";
import { GameplayPage } from "./pages/GameplayPage";
import { CharactersPage } from "./pages/CharactersPage";
import { GalleryPage } from "./pages/GalleryPage";
import { DownloadPage } from "./pages/DownloadPage";
import { NewsPage } from "./pages/NewsPage";
import { FAQPage } from "./pages/FAQPage";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { TrailerPage } from "./pages/TrailerPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, Component: HomePage },
        { path: "story", Component: StoryPage },
        { path: "gameplay", Component: GameplayPage },
        { path: "characters", Component: CharactersPage },
        { path: "gallery", Component: GalleryPage },
        {
          path: "download",
          element: (
            <ProtectedRoute>
              <DownloadPage />
            </ProtectedRoute>
          ),
        },
        { path: "news", Component: NewsPage },
        { path: "faq", Component: FAQPage },
        { path: "contact", Component: ContactPage },
        { path: "trailer", Component: TrailerPage },
      ],
    },
    {
      path: "/login",
      Component: LoginPage,
    },
    {
      path: "/register",
      Component: RegisterPage,
    },
    {
      path: "/forgot-password",
      Component: ForgotPasswordPage,
    },
  ],
  {
    basename: "/Code-of-Clues-Game",
  }
);