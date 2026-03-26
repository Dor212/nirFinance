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

export default function FinancialQuizSuccess({ score, checklistUrl }: Props) {
  return (
    <section dir="rtl" className="mx-auto flex w-full max-w-[22rem] flex-1 flex-col justify-center text-center sm:max-w-[27rem]">
      <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-[rgba(173,254,122,0.22)] bg-[rgba(173,254,122,0.08)] px-4 py-2 text-sm font-bold text-white shadow-[0_12px_30px_rgba(0,0,0,0.16)] sm:mb-4 sm:text-base">
        <span className="text-[var(--lime)]">הציון שלך:</span>
        <span className="text-[1.15rem] font-black text-[var(--lime)] sm:text-[1.35rem]">{score}/10</span>
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
        className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#94ec68,#adfe7a)] px-5 py-3.5 text-base font-black text-[#16342d] shadow-[0_18px_42px_rgba(173,254,122,0.24)] transition hover:-translate-y-0.5 sm:mt-5 sm:py-4"
      >
        לשכפול הצ׳ק־ליסט ←
      </a>
    </section>
  );
}
