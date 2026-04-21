import { useState, type ChangeEvent, type FormEvent } from "react";
import { calculateScore, formatAnswersForMessage, getPersona, type QuizAnswer } from "../../data/financialQuizData";

type Props = {
  answers: QuizAnswer[];
  onSuccess: (payload: { name: string; email: string; phone: string }) => void;
};

type FormValues = {
  name: string;
  email: string;
  phone: string;
};

type Status =
  | { type: "idle"; message: string }
  | { type: "loading"; message: string }
  | { type: "error"; message: string };

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
};

export default function FinancialQuizLeadStep({ answers, onSuccess }: Props) {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  const accessKey = import.meta.env.VITE_WEB3FORMS_QUIZ_ACCESS_KEY;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!accessKey) {
      setStatus({
        type: "error",
        message: "לא הוגדר VITE_WEB3FORMS_QUIZ_ACCESS_KEY בקובץ הסביבה.",
      });
      return;
    }

    const score = calculateScore(answers);
    const persona = getPersona(score);
    const detailedAnswers = formatAnswersForMessage(answers);
    const message = `ליד חדש מהשאלון של ניר יפרח

שם מלא: ${formValues.name}
טלפון: ${formValues.phone}
מייל: ${formValues.email}
ציון: ${score}/10
פרופיל: ${persona.title}

תשובות השאלון:

${detailedAnswers}`;

    setStatus({ type: "loading", message: "שולח פרטים..." });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `ליד חדש משאלון פיננסי | ${formValues.name}`,
          from_name: "שאלון פיננסי - ניר יפרח",
          name: formValues.name,
          phone: formValues.phone,
          email: formValues.email,
          message,
          botcheck: "",
        }),
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || "משהו השתבש בשליחת הטופס.");
      }

      const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
      fbq?.("track", "Lead");

      onSuccess(formValues);
      setFormValues(initialValues);
      setStatus({ type: "idle", message: "" });
    } catch (error) {
      const messageText = error instanceof Error ? error.message : "משהו השתבש. נסו שוב בעוד רגע.";
      setStatus({ type: "error", message: messageText });
    }
  };

  return (
    <section dir="rtl" className="mx-auto flex w-full max-w-[22rem] flex-1 flex-col justify-center text-center sm:max-w-[26rem]">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-bold text-[var(--lime)]">שלב אחרון מתוך 11</span>
          <span className="text-sm font-medium text-white/55">100%</span>
        </div>

        <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/8 sm:mb-5">
          <div className="h-full w-full rounded-full bg-[linear-gradient(90deg,#7ed44f,#adfe7b)] shadow-[0_0_18px_rgba(173,254,123,0.35)]" />
        </div>

        <div className="animate-[quizFadeUp_0.28s_ease]">
          <h2 className="mx-auto mb-4 max-w-[16rem] text-[1.2rem] font-black leading-[1.45] text-white sm:mb-5 sm:max-w-[18rem] sm:text-[1.55rem]">
            מלאו פרטים
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
            placeholder="שם מלא"
            className="h-12 w-full rounded-2xl border border-[rgba(173,254,122,0.22)] bg-white/6 px-4 text-center text-base text-white outline-none transition placeholder:text-white/34 focus:border-[var(--lime)] focus:bg-white/8 sm:h-13"
          />

          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
            placeholder="מייל"
            dir="ltr"
            className="h-12 w-full rounded-2xl border border-[rgba(173,254,122,0.22)] bg-white/6 px-4 text-center text-base text-white outline-none transition placeholder:text-white/34 focus:border-[var(--lime)] focus:bg-white/8 sm:h-13"
          />

          <input
            type="tel"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            required
            placeholder="טלפון"
            dir="ltr"
            className="h-12 w-full rounded-2xl border border-[rgba(173,254,122,0.22)] bg-white/6 px-4 text-center text-base text-white outline-none transition placeholder:text-white/34 focus:border-[var(--lime)] focus:bg-white/8 sm:h-13"
          />

          {status.type === "error" ? (
            <div className="rounded-2xl bg-[rgba(255,165,59,0.14)] px-4 py-3 text-sm font-medium text-[#ffd39a]">
              {status.message}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={status.type === "loading"}
            className="inline-flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#94ec68,#adfe7a)] px-5 py-3.5 text-base font-black text-[#16342d] shadow-[0_18px_42px_rgba(173,254,122,0.24)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:py-4"
          >
            {status.type === "loading" ? "שולח..." : "המשך ←"}
          </button>
        </form>
      </div>
    </section>
  );
}
