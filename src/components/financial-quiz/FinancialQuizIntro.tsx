type Props = {
  onStart: () => void;
};

export default function FinancialQuizIntro({ onStart }: Props) {
  return (
    <section dir="rtl" className="mx-auto flex w-full max-w-[19.25rem] flex-1 flex-col justify-center text-center sm:max-w-[24rem]">
      <div className="mx-auto flex h-[4.35rem] w-[4.35rem] items-center justify-center rounded-full border border-[rgba(173,254,122,0.24)] bg-[rgba(173,254,122,0.09)] text-[2.35rem] shadow-[0_14px_34px_rgba(0,0,0,0.17)] sm:h-[5rem] sm:w-[5rem] sm:text-[2.7rem]">
        📊
      </div>

      <div className="mx-auto mt-2.5 w-full space-y-2.5 sm:mt-3 sm:space-y-3">
        <p className="text-[0.92rem] font-medium leading-5 text-white/88 sm:text-[1.02rem] sm:leading-7">
          10 שאלות קצרות שייתנו לך תמונה ברורה על המצב הפיננסי שלך ומה אפשר לשפר כבר עכשיו.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-0.5 sm:gap-3">
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
        className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#94ec68,#adfe7a)] px-5 py-3.5 text-base font-black text-[#16342d] shadow-[0_18px_42px_rgba(173,254,122,0.24)] transition hover:-translate-y-0.5 sm:mt-6 sm:py-4 sm:text-lg"
      >
        התחל את הבדיקה ←
      </button>
    </section>
  );
}
