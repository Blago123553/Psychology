import React, { useState } from 'react';
import { Eye, Brain, CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-react';

interface Question {
  id: number;
  fact: string;
  isTrue: boolean;
  explanation: string;
}


const allQuestions: Question[] = [
  {
    id: 11,
    fact: "По Жану Пиаже, младенец на сенсомоторной стадии познает мир исключительно через мышление, без действий",
    isTrue: false,
    explanation: "На сенсомоторной стадии (весь период младенчества) младенец познает мир именно через действия с предметами и собственным телом (\"мышление руками\"). Формируются сенсомоторные схемы, понимание простейших причинно-следственных связей."
  },
  {
    id: 12,
    fact: "К концу первого года жизни у младенца формируется представление о постоянстве объекта (объект существует, даже если его не видно)",
    isTrue: true,
    explanation: "Это важнейшее когнитивное достижение конца младенческого возраста по Пиаже, знаменующее переход от простых сенсомоторных реакций к началу внутренних представлений."
  },
  {
    id: 13,
    fact: "Качество привязанности, сформировавшееся в младенчестве, не влияет на дальнейшее развитие личности",
    isTrue: false,
    explanation: "Надежная привязанность, сформированная в младенчестве (особенно к матери как первичному объекту, но и к отцу), является ключевым фактором эмоциональной стабильности, способности к регуляции эмоций и построению отношений в будущем (теория привязанности Боулби)."
  },
  {
    id: 14,
    fact: "Кризис одного года связан с началом ходьбы и активной предметной деятельности",
    isTrue: true,
    explanation: "Резкое увеличение возможностей (ходьба, активные манипуляции с предметами), появление первых слов и стремление к автономии (\"Я сам!\") являются признаками кризиса одного года, завершающего период младенчества и ведущего к переходу на предметно-манипулятивную деятельность."
  },
  {
    id: 15,
    fact: "Ведущей деятельностью в раннем возрасте является предметно-манипулятивная деятельность",
    isTrue: true,
    explanation: "Ребенок познает мир через практическое взаимодействие с предметами, осваивая их свойства, функции и способы действий с ними. Взрослый выступает как образец и носитель общественных способов употребления предметов."
  },
  {
    id: 16,
    fact: "Кризис 3 лет (\"Я сам!\") вызван исключительно капризами и плохим воспитанием",
    isTrue: false,
    explanation: "Кризис 3 лет - закономерный этап развития, связанный с формированием системы \"Я\", осознанием себя как отдельного человека, стремлением к автономии. Негативизм, упрямство, строптивость и другие симптомы - проявления этого внутреннего конфликта между желанием самостоятельности и реальными возможностями/зависимостью."
  },
  {
    id: 17,
    fact: "В раннем возрасте у ребенка преобладает наглядно-образное мышление",
    isTrue: false,
    explanation: "Мышление в раннем возрасте является наглядно-действенным. Ребенок мыслит, действуя с предметами (\"руки думают\"), решает задачи методом проб и ошибок. Наглядно-образное мышление формируется позже, в дошкольном возрасте."
  },
  {
    id: 18,
    fact: "\"Речевой взрыв\" (интенсивный рост словарного запаса и переход к фразам) характерен для раннего возраста",
    isTrue: true,
    explanation: "Ранний возраст - период бурного речевого развития: переход от однословных высказываний к двусловным (\"телеграфная речь\") и простым фразам, усвоение грамматических основ, появление вопросов \"Что это?\", \"Почему?\". Речь становится не только средством общения, но и средством мышления и планирования."
  },
  {
    id: 19,
    fact: "Эгоцентризм ребенка раннего возраста означает, что он эгоистичен и не способен к сочувствию",
    isTrue: false,
    explanation: "Эгоцентризм (по Пиаже) - это возрастная особенность мышления, при которой ребенок воспринимает мир только со своей точки зрения и не может встать на позицию другого. Это не эгоизм как черта характера, а нормативная стадия когнитивного развития. Ребенок еще не способен понять, что другие видят мир иначе."
  },
  {
    id: 20,
    fact: "Сюжетно-ролевая игра является ведущей деятельностью раннего возраста",
    isTrue: false,
    explanation: "Ведущая деятельность раннего возраста - предметно-манипулятивная. Внутри нее зарождается и развивается сюжетно-отобразительная игра (предшественница сюжетно-ролевой), где ребенок воспроизводит знакомые действия с предметами (кормит куклу), но роли еще не выделяются, сюжеты просты. Сюжетно-ролевая игра расцветает в дошкольном возрасте."
  },
  {
    id: 21,
    fact: "По Эриксону, основная задача развития в раннем возрасте - достижение автономии (vs стыд и сомнение)",
    isTrue: true,
    explanation: "Успешное прохождение кризиса 3 лет и поддержка самостоятельности со стороны взрослых формируют у ребенка волю, чувство компетентности (\"Я могу!\"). Чрезмерная опека или критика, наоборот, порождают сомнения в своих силах и стыд."
  },
  {
    id: 22,
    fact: "Ведущей деятельностью дошкольника является сюжетно-ролевая игра",
    isTrue: true,
    explanation: "Игра - основная развивающая деятельность дошкольника. В ней развиваются все психические процессы, общение, усваиваются социальные нормы и роли."
  },
  {
    id: 23,
    fact: "Дошкольник способен легко встать на точку зрения другого человека",
    isTrue: false,
    explanation: "Для дошкольника характерен эгоцентризм мышления (Пиаже). Он с трудом воспринимает мир с позиции другого, что ярко проявляется в экспериментах (например, с братьями). Развитие способности к децентрации происходит постепенно."
  },
  {
    id: 24,
    fact: "Возраст 4-5 лет называют \"возрастом почемучек\"",
    isTrue: true,
    explanation: "В этом возрасте у детей резко возрастает познавательная активность, они задают множество вопросов об окружающем мире (\"Почему?\", \"Зачем?\", \"Как?\"), стремясь удовлетворить свою любознательность."
  },
  {
    id: 25,
    fact: "Главное новообразование кризиса 7 лет - \"потеря непосредственности\"",
    isTrue: true,
    explanation: "У ребенка появляется внутренняя жизнь, переживания, которые не всегда прямо выражаются в поведении (симптом \"горькой конфеты\" - скрывает огорчение). Он учится управлять своими эмоциями и действиями в соответствии с социальными ожиданиями (готовность к школе)."
  },
  {
    id: 26,
    fact: "В дошкольном возрасте память, внимание и другие познавательные процессы становятся произвольными",
    isTrue: true,
    explanation: "Одно из ключевых достижений дошкольного возраста - развитие произвольности психических процессов. Ребенок учится целенаправленно запоминать, сосредотачиваться, управлять своим поведением, подчиняясь правилам или поставленной цели."
  },
  {
    id: 27,
    fact: "Самооценка дошкольника устойчива и мало зависит от оценок взрослых",
    isTrue: false,
    explanation: "Самооценка дошкольника очень чувствительна и неустойчива. Ребенок в значительной степени опирается на оценку значимых взрослых (родителей, воспитателей) для формирования отношения к самому себе. Похвала и поддержка формируют положительную самооценку, критика - отрицательную."
  },
  {
    id: 28,
    fact: "\"Словотворчество\" (придумывание новых слов и выражений) - нормальный этап речевого развития дошкольника (5-6 лет)",
    isTrue: true,
    explanation: "Дети активно экспериментируют со словами, создавая новые (\"гастарбайка\", \"жиравы\"), так как осваивают сами слова, но еще не всегда понимают их точное значение и правила словообразования."
  },
  {
    id: 29,
    fact: "Главный мотив дошкольника, готового к школе, - желание носить школьную форму и иметь портфель",
    isTrue: false,
    explanation: "Хотя внешние атрибуты школы (форма, портфель, пенал) очень привлекательны для старшего дошкольника и формируют положительное отношение, истинная психологическая готовность связана с более глубокими мотивами: потребностью занять новую социальную позицию (\"внутренняя позиция школьника\" - Божович), познавательными мотивами, сформированностью предпосылок учебной деятельности."
  },
  {
    id: 30,
    fact: "Ведущей деятельностью младшего школьника является учебная деятельность",
    isTrue: true,
    explanation: "Учебная деятельность (по Эльконину) - это деятельность, направленная на усвоение знаний, умений и навыков, обобщенных способов действий. Она становится главной, определяющей развитие психики и личности ребенка в этот период."
  },
  {
    id: 31,
    fact: "\"Внутренняя позиция школьника\" (по Божович) - это главный критерий психологической готовности к школе",
    isTrue: true,
    explanation: "Это новообразование дошкольного возраста, представляющее собой сплав познавательной потребности и потребности занять новую социальную позицию (быть школьником, выполнять общественно значимую деятельность)."
  },
  {
    id: 32,
    fact: "Основная задача развития по Эриксону в младшем школьном возрасте - Достижение трудолюбия (против чувства неполноценности)",
    isTrue: true,
    explanation: "Успехи в учебной и других видах деятельности, признание со стороны учителей и сверстников формируют у ребенка чувство компетентности и трудолюбия. Неудачи и постоянная критика могут привести к чувству неполноценности."
  },
  {
    id: 33,
    fact: "Социальная ситуация развития младшего школьника характеризуется только отношениями \"ребенок-учитель\"",
    isTrue: false,
    explanation: "Ситуация дифференцируется: \"ребенок-взрослый\", \"ребенок-учитель\", \"ребенок-родители\". Причем ситуация \"ребенок-учитель\" становится центральной, определяющей отношения к другим сферам."
  },
  {
    id: 34,
    fact: "Успешная школьная адаптация зависит только от интеллектуальной готовности ребенка",
    isTrue: false,
    explanation: "Успешная адаптация определяется комплексом факторов: интеллектуальной, личностной (эмоционально-волевой, мотивационной) и психофизиологической готовностью, а также методикой преподавания, условиями школьной среды, поддержкой семьи. Трудности в поведении (страх, нежелание идти в школу, агрессивность) - признаки проблем адаптации."
  },
  {
    id: 35,
    fact: "По Выготскому, обучение должно опираться на \"зону ближайшего развития\" (ЗБР) ребенка",
    isTrue: true,
    explanation: "ЗБР - это то, что ребенок может сделать сегодня с помощью взрослого (в сотрудничестве), а завтра - самостоятельно. Обучение, ориентированное на ЗБР, наиболее эффективно ведет развитие вперед."
  },
  {
    id: 36,
    fact: "Главным новообразованием младшего школьного возраста является развитие произвольности всех психических процессов",
    isTrue: true,
    explanation: "Под влиянием учебной деятельности у ребенка развивается способность сознательно управлять своим вниманием, памятью, мышлением, поведением, подчиняя их учебным задачам и правилам."
  },
  {
    id: 37,
    fact: "Психическое развитие ребенка определяется только наследственностью (созреванием)",
    isTrue: false,
    explanation: "Развитие - сложный процесс, обусловленный взаимодействием биологических (созревание, наследственность) и социальных факторов (научение, социальное взаимодействие, воспитание, образование), а также собственной активностью субъекта."
  },
  {
    id: 38,
    fact: "\"Зона ближайшего развития\" (ЗБР) - это понятие, введенное Л.С. Выготским",
    isTrue: true,
    explanation: "ЗБР - ключевое понятие в теории Выготского, обозначающее разницу между тем, что ребенок может сделать самостоятельно (уровень актуального развития) и тем, что он может сделать с помощью взрослого (ЗБР). Обучение должно ориентироваться на ЗБР."
  },
  {
    id: 39,
    fact: "Возрастные кризисы (3, 7 лет) - это периоды болезненных нарушений развития, которых нужно избегать",
    isTrue: false,
    explanation: "Кризисы - закономерные, необходимые этапы развития (Выготский). Это периоды качественных преобразований, \"отмирания старого\" и зарождения новых психологических образований. Хотя они сопровождаются трудностями (негативизм, упрямство, эмоциональная неустойчивость), они являются двигателем развития."
  },
  {
    id: 40,
    fact: "Л.С. Выготский разделил все периодизации детства на три группы: по внешнему критерию, по одному признаку развития и по существенным особенностям развития",
    isTrue: true,
    explanation: "В работе \"Проблема возраста\" Выготский систематизировал существующие периодизации: 1) по аналогии с другими процессами (Холл); 2) моносимптоматические (по одному признаку - Блонский по зубам, Штерн по активности, Фрейд по либидо, Пиаже по интеллекту); 3) связанные с выделением сущности развития (его собственная)."
  },
  {
    id: 41,
    fact: "По П.П. Блонскому, детство можно периодизировать по состоянию зубов ребенка",
    isTrue: true,
    explanation: "Блонский предложил периодизацию: беззубое детство, молочнозубое детство, период смены зубов, стадия прорезывания премоляров и клыков, постояннозубое детство. Выготский критиковал эту периодизацию за биологизацию и неравноценность периодов."
  },
  {
    id: 42,
    fact: "Надежная привязанность к матери в младенчестве формирует у ребенка базовое доверие к миру (по Эриксону)",
    isTrue: true,
    explanation: "Качественный уход, чуткое реагирование матери на потребности младенца формирует у него чувство безопасности и базовое доверие к миру (1 стадия по Эриксону). Неудовлетворение потребностей ведет к недоверию."
  },
  {
    id: 43,
    fact: "Оптимальный возраст для начала изучения иностранного языка - дошкольный возраст (примерно 2-9 лет)",
    isTrue: true,
    explanation: "Многие специалисты считают дошкольный возраст благоприятным из-за высокой восприимчивости психики, способности к имитации, отсутствия языкового барьера. Однако существуют разные точки зрения (с 3 лет, с 7 лет). Главное - правильный игровой подход и учет индивидуальных особенностей."
  },
  {
    id: 44,
    fact: "При обучении иностранному языку дошкольников за одно занятие следует вводить не более 3 новых слов",
    isTrue: true,
    explanation: "Из-за ограниченной способности к запоминанию у младших дошкольников рекомендуется ограничивать количество новой лексики за занятие, обеспечивая качественное усвоение."
  },
  {
    id: 45,
    fact: "\"Сюсюканье\" (лапусечка, малюсечка) способствует правильному речевому развитию дошкольника",
    isTrue: false,
    explanation: "Логопеды утверждают, что \"сюсюканье\" формирует неправильное представление о речи. Родители должны говорить правильно и четко, чтобы ребенок ориентировался на грамотный образец."
  },
  {
    id: 46,
    fact: "Роль отца в раннем развитии ребенка ограничивается материальной поддержкой",
    isTrue: false,
    explanation: "Отец вносит уникальный вклад: стимулирует познавательную и физическую активность через более активные игры, поощряет самостоятельность, исследование, риск (в разумных пределах), является ключевой фигурой для формирования гендерной идентичности (особенно для сыновей) и модели взаимодействия с социумом."
  },
  {
    id: 47,
    fact: "Главная задача воспитания в раннем и дошкольном возрасте - привить ребенку определенные моральные нормы и правила поведения",
    isTrue: true,
    explanation: "Воспитание направлено на ограничение развития негативных задатков (жестокость, эгоизм), формирование нравственных качеств и усвоение социальных норм. Важно делать это адекватно, без агрессии."
  },
  {
    id: 48,
    fact: "Образование в дошкольном и младшем школьном возрасте способствует развитию воли, самокритики и возможности самореализации",
    isTrue: true,
    explanation: "Образование дает не только знания, но и развивает волевые качества (усилия для достижения цели), самокритику (умение оценивать себя и свою работу), создает возможности для самореализации в интересующих областях."
  },
  {
    id: 49,
    fact: "Для гармоничного развития дошкольника ему нужно как можно больше времени уделять \"развивающим занятиям\", сокращая время на свободную игру",
    isTrue: false,
    explanation: "Игра - ведущая деятельность и главный способ познания мира для дошкольника. Чрезмерная учебная нагрузка, вытесняющая игру, вредна. Ребенок должен \"наиграться\" вдоволь для формирования произвольности и своевременного перехода к учебной мотивации."
  },
  {
    id: 50,
    fact: "Эмоциональное состояние и атмосфера в семье напрямую влияют на психологическое состояние и развитие дошкольника и младшего школьника",
    isTrue: true,
    explanation: "Ребенок тонко чувствует семейную атмосферу. Конфликты, напряжение, отсутствие тепла и поддержки могут вызывать страхи, тревожность, проблемы со сном и поведением, тормозить развитие даже при внешнем благополучии."
  }
];

const getRandomQuestions = (questions: Question[], count: number = 10): Question[] => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

type GameState = 'welcome' | 'playing' | 'result' | 'finished';

function App() {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);

  const currentQuestion = questions[currentQuestionIndex];

  const startGame = () => {
    const randomQuestions = getRandomQuestions(allQuestions, 10);
    setQuestions(randomQuestions);
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredQuestions(new Array(10).fill(false));
  };

  const handleAnswer = (answer: boolean) => {
    setUserAnswer(answer);
    setShowExplanation(true);
    
    if (answer === currentQuestion.isTrue) {
      setScore(score + 1);
    }

    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestionIndex] = true;
    setAnsweredQuestions(newAnsweredQuestions);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer(null);
      setShowExplanation(false);
    } else {
      setGameState('finished');
    }
  };

  const resetGame = () => {
    setGameState('welcome');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswer(null);
    setShowExplanation(false);
    setAnsweredQuestions([]);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-orange-500';
    return 'text-red-500';
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Отличные знания психологии!';
    if (percentage >= 60) return 'Неплохие результаты!';
    return 'Есть над чем поработать!';
  };

  if (gameState === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6 shadow-lg">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Психология
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Интерактивная игра "Правда или Миф"
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <div className="flex items-center justify-center mb-6">
                <Eye className="w-16 h-16 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Проверьте свои знания
              </h2>
              <p className="text-gray-600 mb-6">
                Ответьте на 10 случайных вопросов о психологии развития и узнайте научные объяснения каждого факта. 
                Готовы ли вы отличить правду от мифа?
              </p>
              <button
                onClick={startGame}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Начать игру
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Brain className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">40 научных фактов</h3>
                <p className="text-sm text-gray-600">
                  Узнайте правду о психологии развития ребенка
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Eye className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Случайный выбор</h3>
                <p className="text-sm text-gray-600">
                  Каждая игра содержит 10 случайных вопросов
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Trophy className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Научные объяснения</h3>
                <p className="text-sm text-gray-600">
                  Получайте подробные объяснения каждого факта
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'playing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Вопрос {currentQuestionIndex + 1} из {questions.length}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  Очки: {score}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
                  {currentQuestion.fact}
                </h2>
              </div>

              {!showExplanation ? (
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <button
                    onClick={() => handleAnswer(true)}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <CheckCircle2 className="w-6 h-6 inline mr-2" />
                    Правда
                  </button>
                  <button
                    onClick={() => handleAnswer(false)}
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <XCircle className="w-6 h-6 inline mr-2" />
                    Миф
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    userAnswer === currentQuestion.isTrue 
                      ? 'bg-green-100' 
                      : 'bg-red-100'
                  }`}>
                    {userAnswer === currentQuestion.isTrue ? (
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    ) : (
                      <XCircle className="w-8 h-8 text-red-600" />
                    )}
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 ${
                    userAnswer === currentQuestion.isTrue 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {userAnswer === currentQuestion.isTrue ? 'Правильно!' : 'Неправильно!'}
                  </h3>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6 text-left">
                    <h4 className="font-semibold text-gray-900 mb-3">Научное объяснение:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                  
                  <button
                    onClick={nextQuestion}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    {currentQuestionIndex < questions.length - 1 ? 'Следующий вопрос' : 'Показать результаты'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'finished') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Игра завершена!
              </h2>
              
              <div className="mb-6">
                <div className={`text-6xl font-bold mb-2 ${getScoreColor()}`}>
                  {score}/{questions.length}
                </div>
                <p className="text-xl text-gray-600 mb-2">
                  {getScoreMessage()}
                </p>
                <p className="text-gray-500">
                  Правильных ответов: {Math.round((score / questions.length) * 100)}%
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Ваши результаты</h3>
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        answeredQuestions[index] 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </div>
              
              <button
                onClick={resetGame}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <RotateCcw className="w-5 h-5 inline mr-2" />
                Играть снова
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default App;
