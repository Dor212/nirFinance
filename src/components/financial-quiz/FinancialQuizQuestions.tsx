import { useEffect, useMemo, useState } from "react";
import { questions, type QuizAnswer } from "../../data/financialQuizData";

type Props = {
  onFinish: (answers: QuizAnswer[]) => void;
};

export default function FinancialQuizQuestions({ onFinish }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>(() =>
    questions.map((question) => (question.type === "slider" ? question.defaultValue : null)),
  );
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey((value) => value + 1);
  }, [currentIndex]);

  const question = questions[currentIndex];
  const percentage = Math.round(((currentIndex + 1) / questions.length) * 100);
  const isLast = currentIndex === questions.length - 1;
  const canProceed = useMemo(() => answers[currentIndex] !== null, [answers, currentIndex]);

  const handleSelect = (optionIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
  };

  const handleSliderChange = (value: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = value;
      return next;
    });
  };

  const handleNext = () => {
    if (!canProceed) return;

    if (isLast) {
      onFinish(answers);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const sliderValue = question.type === "slider" && typeof answers[currentIndex] === "number"
    ? answers[currentIndex]
    : question.type === "slider"
      ? question.defaultValue
      : null;

  return (
    <section dir="rtl" className="flex flex-1 flex-col justify-between">
      <div>
        <div className="mb-2 flex items-center justify-between text-center">
          <span className="text-sm font-bold text-[var(--lime)]">שאלה {currentIndex + 1} מתוך {questions.length}</span>
          <span className="text-sm font-medium text-white/55">{percentage}%</span>
        </div>

        <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/8 sm:mb-5">
          <div
            className="h-full rounded-full bg-[linear-gradient(90deg,#7ed44f,#adfe7b)] shadow-[0_0_18px_rgba(173,254,123,0.35)] transition-[width] duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div key={animKey} className="animate-[quizSlideIn_0.28s_ease] text-center">
          <p className="mb-2 text-[11px] font-bold tracking-[0.18em] text-[var(--lime)]/72 uppercase sm:text-xs">
            {question.category}
          </p>
          <h2 className="mx-auto mb-4 max-w-[28rem] text-[1.2rem] font-black leading-[1.55] text-white sm:mb-6 sm:text-[1.6rem] sm:leading-[1.45]">
            {question.text}
          </h2>

          {question.type === "options" ? (
            <div className="space-y-2.5 sm:space-y-3">
              {question.options.map((option, optionIndex) => {
                const selected = answers[currentIndex] === optionIndex;

                return (
                  <button
                    key={`${question.category}-${option.label}`}
                    type="button"
                    onClick={() => handleSelect(optionIndex)}
                    className={`flex w-full items-center gap-3 rounded-2xl border px-3.5 py-3 text-right transition sm:px-4 sm:py-4 ${
                      selected
                        ? "border-[var(--lime)] bg-[rgba(173,254,122,0.12)] shadow-[0_0_0_3px_rgba(173,254,122,0.14)]"
                        : "border-[rgba(173,254,122,0.18)] bg-white/4 hover:border-[var(--lime)] hover:bg-[rgba(173,254,122,0.08)]"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-black transition sm:h-8 sm:w-8 ${
                        selected
                          ? "border-[var(--lime)] bg-[var(--lime)] text-[#122b23]"
                          : "border-[var(--lime)] text-[var(--lime)]"
                      }`}
                    >
                      {option.label}
                    </span>
                    <span className="text-right text-[0.94rem] leading-6 text-white sm:text-[0.98rem] sm:leading-7">
                      {option.text}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="rounded-[1.65rem] border border-[rgba(173,254,122,0.18)] bg-white/4 px-4 py-5 sm:px-6 sm:py-6">
              <div className="mb-4 flex items-center justify-center gap-2 text-white">
                <span className="text-sm text-white/52">1</span>
                <div className="rounded-2xl bg-[rgba(173,254,122,0.12)] px-4 py-2 text-3xl font-black text-[var(--lime)] shadow-[0_10px_24px_rgba(0,0,0,0.12)] sm:text-4xl">
                  {sliderValue}
                </div>
                <span className="text-sm text-white/52">10</span>
              </div>

              <input
                type="range"
                min={question.min}
                max={question.max}
                value={sliderValue ?? question.defaultValue}
                onChange={(event) => handleSliderChange(Number(event.target.value))}
                className="financial-slider h-2 w-full cursor-pointer appearance-none rounded-full"
              />

              <div className="mt-3 flex justify-between text-xs text-white/45">
                <span>ממש לא</span>
                <span>לגמרי</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 sm:mt-6">
        {currentIndex > 0 ? (
          <button
            type="button"
            onClick={handlePrevious}
            className="rounded-2xl border border-[rgba(173,254,122,0.28)] px-4 py-3 text-sm font-bold text-[var(--lime)] transition hover:bg-[rgba(173,254,122,0.06)] sm:px-5"
          >
            ← הקודמת
          </button>
        ) : (
          <div />
        )}

        <button
          type="button"
          onClick={handleNext}
          disabled={!canProceed}
          className="inline-flex min-w-[9.5rem] flex-1 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#94ec68,#adfe7a)] px-5 py-3.5 text-base font-black text-[#16342d] shadow-[0_18px_42px_rgba(173,254,122,0.24)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 sm:flex-none sm:px-6 sm:py-4"
        >
          {isLast ? "המשך לתוצאה ←" : "הבאה ←"}
        </button>
      </div>
    </section>
  );
}
