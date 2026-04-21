export type OptionQuestion = {
  category: string;
  text: string;
  type: "options";
  options: { label: string; text: string; score: number }[];
};

export type SliderQuestion = {
  category: string;
  text: string;
  type: "slider";
  min: number;
  max: number;
  defaultValue: number;
};

export type Question = OptionQuestion | SliderQuestion;

export const questions: Question[] = [
  {
    category: "שליטה בתזרים",
    text: "האם אתה יודע בדיוק כמה כסף יוצא מהחשבון שלך בכל חודש?",
    type: "options",
    options: [
      { label: "א", text: "כן, אני יודע בדיוק לאן כל שקל הולך.", score: 3 },
      { label: "ב", text: "בערך, יש לי מושג כללי.", score: 2 },
      { label: "ג", text: "לא, אני מופתע לעיתים קרובות.", score: 1 },
    ],
  },
  {
    category: "חיסכון חודשי",
    text: "האם נשאר לך סכום פנוי לחיסכון בכל סוף חודש, באופן עקבי?",
    type: "options",
    options: [
      { label: "א", text: "כן, אני חוסך סכום קבוע כל חודש.", score: 3 },
      { label: "ב", text: "לפעמים, תלוי בחודש.", score: 2 },
      { label: "ג", text: "לא, כמעט תמיד מגיע לאפס או מינוס.", score: 1 },
    ],
  },
  {
    category: "מינוף הכסף",
    text: 'האם הכסף שנשאר לך עובד למטרות ארוכות טווח — השקעות, עתיד הילדים, פרישה — או שהוא פשוט "שוכב" בעו"ש?',
    type: "options",
    options: [
      { label: "א", text: "כן, מושקע ומקדם מטרות ספציפיות — כולל לילדים ולטווח הרחוק.", score: 3 },
      { label: "ב", text: "חלקית — חלק מושקע אבל אין תכנון מסודר לטווח רחוק.", score: 2 },
      { label: "ג", text: 'שוכב בעו"ש ולא עובד בשבילי.', score: 1 },
    ],
  },
  {
    category: "נזילות מיידית",
    text: "האם היתרה שלך בעובר ושב מכסה לפחות חודש אחד של מחיה בבית?",
    type: "options",
    options: [
      { label: "א", text: 'כן, יש לי חודש ומעלה בעו"ש.', score: 3 },
      { label: "ב", text: "יש משהו, אבל פחות מחודש.", score: 2 },
      { label: "ג", text: 'לא, העו"ש שלי כמעט תמיד קרוב לאפס.', score: 1 },
    ],
  },
  {
    category: "קרן חירום",
    text: "האם יש לך סכום כסף נזיל בצד שמיועד אך ורק למקרי חירום לא צפויים?",
    type: "options",
    options: [
      { label: "א", text: "כן, יש לי קרן חירום ייעודית.", score: 3 },
      { label: "ב", text: "יש משהו, אבל לא מוגדר כקרן חירום.", score: 2 },
      { label: "ג", text: "אין לי קרן חירום בכלל.", score: 1 },
    ],
  },
  {
    category: "דמי ניהול",
    text: "האם בדקת בשנה האחרונה כמה דמי ניהול אתה משלם בקרן הפנסיה ובקופות הגמל שלך?",
    type: "options",
    options: [
      { label: "א", text: "כן, בדקתי והתנאים שלי טובים.", score: 3 },
      { label: "ב", text: 'ראיתי את הדו"ח אבל לא פעלתי.', score: 2 },
      { label: "ג", text: "לא בדקתי ואין לי מושג כמה לוקחים לי.", score: 1 },
    ],
  },
  {
    category: "מסלולי השקעה",
    text: 'האם אתה יודע בדיוק באיזה מסלול השקעה (מנייתי / אג"ח / תלוי גיל) הכסף הפנסיוני שלך נמצא?',
    type: "options",
    options: [
      { label: "א", text: "כן, בחרתי מסלול מודע ומתאים לי.", score: 3 },
      { label: "ב", text: "אני כנראה במסלול ברירת המחדל.", score: 2 },
      { label: "ג", text: "אין לי מושג איפה הכסף מושקע.", score: 1 },
    ],
  },
  {
    category: "הגנות ביטוחיות",
    text: "האם עדכנת את הביטוחים שלך (חיים, אובדן כושר עבודה) בהתאם לשינויי השכר או המשפחה האחרונים?",
    type: "options",
    options: [
      { label: "א", text: "כן, הכל מעודכן ומותאם.", score: 3 },
      { label: "ב", text: "לא בטוח, כנראה שלא.", score: 2 },
      { label: "ג", text: "לא נגעתי בזה מאז שפתחתי את הפוליסה.", score: 1 },
    ],
  },
  {
    category: "הלוואות ומשכנתא",
    text: "האם בדקת בשנה האחרונה את כדאיות מחזור המשכנתא או התאמתה לתנאי השוק?",
    type: "options",
    options: [
      { label: "א", text: "כן, בדקתי והתנאים אופטימליים.", score: 3 },
      { label: "ב", text: "לא בדקתי מאז שחתמתי.", score: 2 },
      { label: "ג", text: "אין לי משכנתא / לא רלוונטי.", score: 2 },
    ],
  },
  {
    category: "שביעות רצון",
    text: "בסולם של 1–10, עד כמה אתה מרגיש שאתה באמת מגשים את היעדים הכלכליים שלך?",
    type: "slider",
    min: 1,
    max: 10,
    defaultValue: 5,
  },
];

export const personas = {
  high: {
    title: "הקפטן",
    desc: "שליטה גבוהה — הכסף שלך בידיים טובות. כל שנדרש הוא דיוק ואופטימיזציה נקודתית.",
  },
  mid: {
    title: "הנוסע",
    desc: "יש בסיס טוב, אבל הכסף לא עובד בשבילך מספיק. עם כמה פעולות מדויקות אפשר לשפר משמעותית.",
  },
  low: {
    title: "השורד",
    desc: "צריך להתחיל לעשות סדר פיננסי אמיתי. החדשות הטובות: אפשר לשפר את התמונה מהר יותר ממה שנדמה.",
  },
} as const;

export type QuizAnswer = number | null;

export function getPersona(score: number) {
  if (score >= 8) return personas.high;
  if (score >= 5) return personas.mid;
  return personas.low;
}

export function calculateScore(answers: QuizAnswer[]) {
  let total = 0;

  questions.forEach((question, index) => {
    const answer = answers[index];

    if (question.type === "options") {
      if (typeof answer === "number") {
        total += question.options[answer].score;
      }
      return;
    }

    const sliderValue = typeof answer === "number" ? answer : question.defaultValue;
    total += sliderValue >= 8 ? 3 : sliderValue >= 5 ? 2 : 1;
  });

  const normalized = Math.round(((total - 10) / 20) * 9) + 1;
  return Math.min(10, Math.max(1, normalized));
}

export function formatAnswersForMessage(answers: QuizAnswer[]) {
  return questions
    .map((question, index) => {
      const prefix = `שאלה ${index + 1} | ${question.category}`;

      if (question.type === "options") {
        const answerIndex = answers[index];
        const answerText =
          typeof answerIndex === "number" ? question.options[answerIndex]?.text ?? "—" : "—";
        return `${prefix}\n${question.text}\nתשובה: ${answerText}`;
      }

      const sliderValue = typeof answers[index] === "number" ? answers[index] : question.defaultValue;
      return `${prefix}\n${question.text}\nתשובה: ${sliderValue} מתוך 10`;
    })
    .join("\n\n");
}
