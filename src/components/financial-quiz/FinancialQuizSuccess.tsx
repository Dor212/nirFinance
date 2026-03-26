type Props = {
  score: number;
  checklistUrl: string;
};

const SUCCESS_MESSAGE_LINES = [
  "הצ'ק-ליסט הפיננסי שלך מחכה לצאת לדרך! 🚀",
  "הצעד הראשון לשיפור המצב הכלכלי הוא פשוט לעשות סדר. בצ'ק-ליסט הזה ריכזתי את כל הפעולות החשובות שצריך לעשות כדי להתקדם לעבר היעדים והמטרות שהצבת לעצמך.",
  "איך מתחילים?",
  "לוחצים על הקישור כאן למטה.",
  "משכפלים עותק אישי (כדי שכל הנתונים יישארו רק אצלך).",
  "מתחילים לסמן V על הסעיפים – זה הרבה יותר פשוט ממה שזה נראה.",
  "זה הזמן לקחת שליטה על הכסף והתחיל לצמוח כלכלית 🌱",
  "בהצלחה! ❤️",
];

function getScoreStyles(score: number) {
  if (score >= 8) {
    return {
      ring: "border-[rgba(173,254,122,0.34)]",
      bg: "bg-[radial-gradient(circle_at_top,rgba(173,254,122,0.26),rgba(173,254,122,0.08))]",
      text: "text-[var(--lime)]",
      label: "מצב טוב",
    };
  }

  if (score >= 5) {
    return {
      ring: "border-[rgba(255,211,107,0.34)]",
      bg: "bg-[radial-gradient(circle_at_top,rgba(255,211,107,0.24),rgba(255,211,107,0.08))]",
      text: "text-[#ffd36b]",
      label: "יש מה לחדד",
    };
  }

  return {
    ring: "border-[rgba(255,165,59,0.34)]",
    bg: "bg-[radial-gradient(circle_at_top,rgba(255,165,59,0.24),rgba(255,165,59,0.08))]",
    text: "text-[var(--orange)]",
    label: "כדאי לעשות סדר",
  };
}

export default function FinancialQuizSuccess({ score, checklistUrl }: Props) {
  const styles = getScoreStyles(score);

  return (
    <section dir="rtl" className="mx-auto flex w-full max-w-[21.5rem] flex-1 flex-col justify-center text-center sm:max-w-[26rem]">
      <div className="mx-auto mb-3 flex flex-col items-center gap-2 sm:mb-4">
        <div
          className={`flex h-[4.9rem] w-[4.9rem] items-center justify-center rounded-full border ${styles.ring} ${styles.bg} shadow-[0_16px_38px_rgba(0,0,0,0.18)] sm:h-[5.5rem] sm:w-[5.5rem]`}
          aria-label={`ציון ${score} מתוך 10`}
        >
          <span className={`text-[1.45rem] font-black ${styles.text} sm:text-[1.7rem]`}>{score}/10</span>
        </div>
        <div className="space-y-0.5">
          <p className="text-[0.74rem] font-bold tracking-[0.18em] text-white/46 uppercase">הציון שלך</p>
          <p className={`text-sm font-bold ${styles.text}`}>{styles.label}</p>
        </div>
      </div>

      <div className="space-y-2 text-center sm:space-y-2.5">
        {SUCCESS_MESSAGE_LINES.map((line, index) => (
          <p
            key={`${line}-${index}`}
            className={`text-[0.86rem] leading-5 text-white/86 sm:text-[0.97rem] sm:leading-6 ${index === 0 ? "font-bold text-[var(--lime)]" : ""}`}
          >
            {line}
          </p>
        ))}
      </div>

      <a
        href={checklistUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#94ec68,#adfe7a)] px-5 py-3.5 text-base font-black text-black shadow-[0_18px_42px_rgba(173,254,122,0.24)] transition hover:-translate-y-0.5 sm:mt-5 sm:py-4"
      >
        לשכפול הצ׳ק־ליסט ←
      </a>
    </section>
  );
}
