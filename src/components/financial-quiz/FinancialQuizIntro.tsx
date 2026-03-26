type Props = {
  onStart: () => void;
};

export default function FinancialQuizIntro({ onStart }: Props) {
  return (
    <section dir="rtl" className="mx-auto flex w-full max-w-[21rem] flex-1 flex-col justify-center text-center sm:max-w-[26rem]">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(173,254,122,0.22)] bg-[rgba(173,254,122,0.08)] text-3xl shadow-[0_12px_30px_rgba(0,0,0,0.16)] sm:h-16 sm:w-16 sm:text-4xl">
        📊
      </div>

      <div className="mx-auto mt-4 w-full space-y-3 sm:mt-5 sm:space-y-4">
        <p className="text-[0.93rem] font-medium leading-6 text-white/88 sm:text-lg sm:leading-8">
          10 שאלות קצרות שייתנו לך תמונה ברורה על המצב הפיננסי שלך ומה אפשר לשפר כבר עכשיו.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 sm:gap-3">
          <div className="rounded-2xl border border-[rgba(173,254,122,0.22)] bg-[rgba(173,254,122,0.08)] px-3 py-2 text-sm font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] sm:px-4 sm:py-2.5">
            <span className="ml-1.5 text-[var(--lime)]">⏱</span>
            3 דקות בלבד
          </div>
          <div className="rounded-2xl border border-[rgba(173,254,122,0.22)] bg-[rgba(173,254,122,0.08)] px-3 py-2 text-sm font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] sm:px-4 sm:py-2.5">
            <span className="ml-1.5 text-[var(--lime)]">✓</span>
            ללא התחייבות
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onStart}
        className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#94ec68,#adfe7a)] px-5 py-3.5 text-base font-black text-[#16342d] shadow-[0_18px_42px_rgba(173,254,122,0.24)] transition hover:-translate-y-0.5 sm:mt-7 sm:py-4 sm:text-lg"
      >
        התחל את הבדיקה ←
      </button>
    </section>
  );
}
