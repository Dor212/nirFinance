import { useEffect, useMemo, useState } from "react";
import FinancialQuizIntro from "../components/financial-quiz/FinancialQuizIntro";
import FinancialQuizQuestions from "../components/financial-quiz/FinancialQuizQuestions";
import FinancialQuizLeadStep from "../components/financial-quiz/FinancialQuizLeadStep";
import FinancialQuizSuccess from "../components/financial-quiz/FinancialQuizSuccess";
import { calculateScore, type QuizAnswer } from "../data/financialQuizData";

type Screen = "intro" | "quiz" | "lead" | "success";

const CHECKLIST_URL = "https://dub.sh/otehbZX";

export default function FinancialQuizPage() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "";
    const previousRobots = document.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "";

    document.title = "שאלון פיננסי | ניר יפרח";

    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.setAttribute("name", "description");
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute(
      "content",
      "שאלון פיננסי קצר שיעזור להבין איפה אתם עומדים ולקבל צ׳ק ליסט מסודר להמשך הדרך.",
    );

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute("content", "noindex, nofollow");

    return () => {
      document.title = previousTitle;
      descriptionMeta?.setAttribute("content", previousDescription);
      robotsMeta?.setAttribute("content", previousRobots);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

  const score = useMemo(() => calculateScore(answers), [answers]);
  const showCompactHeader = screen !== "success";
  const isIntro = screen === "intro";

  const content = useMemo(() => {
    if (screen === "intro") {
      return <FinancialQuizIntro onStart={() => setScreen("quiz")} />;
    }

    if (screen === "quiz") {
      return (
        <FinancialQuizQuestions
          onFinish={(nextAnswers) => {
            setAnswers(nextAnswers);
            setScreen("lead");
          }}
        />
      );
    }

    if (screen === "lead") {
      return (
        <FinancialQuizLeadStep
          answers={answers}
          onSuccess={() => {
            setScreen("success");
          }}
        />
      );
    }

    return <FinancialQuizSuccess score={score} checklistUrl={CHECKLIST_URL} />;
  }, [answers, score, screen]);

  return (
    <main className="min-h-[100svh] bg-[radial-gradient(circle_at_top,rgba(173,254,122,0.12),transparent_22%),radial-gradient(circle_at_15%_20%,rgba(255,165,59,0.08),transparent_18%),linear-gradient(180deg,#1d4339_0%,#14322b_100%)] px-3 py-3 sm:px-6 sm:py-8">
      <div className="mx-auto flex min-h-[calc(100svh-1.5rem)] max-w-[34rem] flex-col sm:min-h-0">
        <div className="flex flex-1 flex-col overflow-hidden rounded-[2rem] border border-[rgba(173,254,122,0.14)] bg-[#122b23] shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
          <div className="h-[3px] bg-[linear-gradient(90deg,transparent,#adfe7b,transparent)]" />

          <div className={`flex flex-1 flex-col ${showCompactHeader ? "px-4 py-4 sm:px-8 sm:py-8" : "px-4 py-5 sm:px-8 sm:py-8"}`}>
            {showCompactHeader ? (
              <header className={`mb-2.5 text-center sm:mb-4 ${isIntro ? "mx-auto max-w-[19rem] sm:max-w-[22rem]" : "mx-auto max-w-[22rem] sm:max-w-[24rem]"}`} dir="rtl">
                <p className="mb-1 text-[10px] font-bold tracking-[0.2em] text-[var(--lime)]/82 uppercase sm:text-xs">
                  תכנון פיננסי אישי ומשפחתי
                </p>
                <h1 className={`font-black leading-tight text-white ${isIntro ? "text-[1.32rem] sm:text-[1.9rem]" : "text-[1.38rem] sm:text-[2rem]"}`}>
                  בדיקת המצב הפיננסי שלך
                </h1>
                {screen !== "lead" ? (
                  <p className="mt-0.5 text-[0.82rem] leading-5 text-white/62 sm:mt-1 sm:text-[0.95rem]">האם הכסף שלך עובד בשבילך?</p>
                ) : null}
              </header>
            ) : null}

            {content}
          </div>
        </div>

        <p className="mt-3 hidden text-center text-[11px] text-[#dce4db]/40 sm:block">
          © 2026 כל הזכויות שמורות לניר יפרח | תכנון פיננסי
        </p>
      </div>
    </main>
  );
}
