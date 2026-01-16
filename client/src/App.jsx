import { Routes, Route } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import Landing from "./pages/Landing";
import AILayout from "./pages/ai/AILayout";
import Chat from "./pages/ai/Chat";
import DashBoard from "./pages/ai/DashBoard";
import ReviewResume from "./pages/ai/ReviewResume";
import GenerateImages from "./pages/ai/GenerateImages";
import WriteArticle from "./pages/ai/WriteArticle";
import RemoveObject from "./pages/ai/RemoveObject";
import RemoveBackground from "./pages/ai/RemoveBackground";
import BlogTitles from "./pages/ai/BlogTitles";
import Community from "./pages/ai/Community";

export default function App() {
  return (
    <Routes>
      {/* PUBLIC ROUTE */}
      <Route path="/" element={<Landing />} />

      {/* PROTECTED AI ROUTES */}
      <Route
        path="/ai/*"
        element={
          <>
            <SignedIn>
              <AILayout />
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      >
        <Route index element={<DashBoard />} />
        <Route path="chat" element={<Chat />} />
        <Route path="review" element={<ReviewResume />} />
        <Route path="image" element={<GenerateImages />} />
        <Route path="article" element={<WriteArticle />} />
        <Route path="blog" element={<BlogTitles />} />
        <Route path="remove-object" element={<RemoveObject />} />
        <Route path="remove-bg" element={<RemoveBackground />} />
        <Route path="community" element={<Community />} />
      </Route>
    </Routes>
  );
}
