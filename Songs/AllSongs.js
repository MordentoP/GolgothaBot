class addSong {
    title = '';
    text = ``

   constructor(title, text) {
       this.title = title;
       this.text = text;
   }
};

const songs = [
    {
    title: 'Господи Великий',
    text: `
    Господи Великий
    A        E  F#m        D
    Господи Великий, я не заслужив
            A          E      F#m       D
    Рясної благодаті, всіх обіцянок Твоїх.
         A       E      F#m     D
    Вражений любов’ю, що мені даруєш Ти.
       A                        E            F#m                   D
    Жертвою Своєю Ти за гріх мій заплатив.
    
    Приспів
    A         E/G#      F#m     D
    Любов Твоя, Боже, океанів глибша
      A      E/G#        D  E
    І за хмари вища, лине до зірок.
    
    Брідж
      F#m     E     D
    Ця любов не має меж. `
},
 { title: 'Поруч текли-текли струмки',
    text: `
    F#m         
    Полем стелилися стежки 
    Hm
    Поруч текли-текли струмки
    E
    Йшов мандрівник, була дорога 
    A       F#  
    Нелегка, досить складна
    Hm                  E
    І мандрівник горів лиш тим, 
    A               F#m   
    Що побудує десь він дім
    Hm              C#
    І запанує щастя з ним
    F#m             F7
    В домі однім, в домі однім
    
    Часто, бувало, що страждав
    Але постійно він співав 
    Пісню улюблену свою
    Її в світ несу, в світ цей несу
    
    Дім це відомо всім давно
    Зовсім не двері чи вікно
    Навіть не меблі біля стін
    Все це не дім, все це не дім
    
    Дім це коли туди прийти 
    Ти можеш кожної пори
    Радісним, добрим, ніжним, злим
    Ледве живим, ледве живим 
    
    Дім твій це там де завжди приймуть
    Там де надіються і ждуть
    Де всі гріхи йдуть в небуття 
    Оселя твоя, оселя твоя 
    
    Там на небесній висоті 
    Є дім чудовий тобі й мені 
    Він приготований Христом
    Небесний Шалом, небесний Шалом 
    
    І щоб в оселю ту ввійти
    Треба у серці зберегти
    Віру, надію, мир, любов
    Божу любов, Божу любов.`,
},
 new addSong('Неймовірна любов', `
 Неймовірна любов
 [D#m C# H F#]
 
 Куплет 1:
 Перш ніж слово сказав, Ти вже співав мені,
 До мене Ти добрим був завжди!
 Перш ніж подих зробив, Ти в мене життя вдихнув,
 До мене Ти Добрим був завжди!
 
 Приспів:
 О, ця неймовірна, завжди вірна, Бог, Твоя любов!
 Небо залишає, досягає, доки не знайде!
 Не можу купити, ні заслужити, цю любов, що Ти даєш!
 О, ця неймовірна, завжди вірна, Бог, Твоя любов! 
 
 Куплет 2:
 Коли ворогом був, за мене молився Ти
 До мене Ти добрим був завжди!
 Коли не заслужив, за мене віддав усе,
 Бо Ти так любив мене завжди!
 
 Брідж:
 Кожну тінь Ти осяєш, всі гори здолаєш
 Щоб мене досягти!
 Всі стіни розіб‘єш, брехню всю розірвеш,
 Щоб мене досягти!`),
 new addSong('Можу лиш уявити', `
 Можу лиш уявити
 [A D E]

 Куплет: 
 A
 Можу лиш уявити те, що буде там
 D
 Як зустрінеш Ти мене в небесах.
 A
 Можу лиш уявити, що побачу я,
 D
 Серце полонить слава Твоя.
 A
 Можу лиш уявити 
 
 Приспів: 
 D                  E
 В Твоїй величі і славі, що відчую я тоді?
 A
 Чи я буду танцювати, чи застигну у хвалі?
 D                  E
 Чи стояти просто буду, на коліна я впаду?
 A
 Заспіваю "Алілуя", чи взагалі слова знайду?
 D                  E
 Можу лиш уявити, Можу лиш уявити
 
 Куплет: 
 Можу лиш уявити, як той день прийде,
 Я побачу, Боже мій, Тебе.
 Можу лиш уявити, все, що я зроблю -
 Буду завжди славити Тебе, Ісус.
 Можу лиш уявити 
 
 Брідж: 
 Закриваю свої очі, уявляю я той день,
 Серце в захваті шепоче: "Бог мій, Ти для мене все".
 Я стояти просто буду, у присутності Твоїй,
 Заспіваю "Алілуя", і вклонюся я Тобі.
 Можу лиш уявити
 
 Приспів: 
 В Твоїй величі і славі, що відчую я тоді?
 Чи я буду танцювати, чи застигну у хвалі?
 Чи стояти просто буду, на коліна я впаду?
 Заспіваю "Алілуя", чи взагалі слова знайду?
 Можу лиш уявити
 
 Куплет:
 Можу лиш уявити, все, що я зроблю -
 Буду завжди славити Тебе, Ісус.
 Можу лиш уявити.`),
 new addSong('Вільний', `
 Вільний
 [Am F C G E]

 Куплет 1:
 Am             F
 Був мертвим я - Ти мене оживив.
 C          G           E
 Був ворогом - Ти мене примирив.
 Am             F
 Із ями витягнув глибокої,
 C              G
 Нову пісню вклав в уста мої.
 
 Приспів: 
 C      
 Я вільний! 
 Am
 Любов’ю Ти вигнав страх мій,
 C              G
 Вінцем замінив кайдани, -
 В Тобі радітиму я.
 Вільно Ти дарував мені Світло, 
 То людям усім його вільно
 Даруватиму я.
 
 Куплет 2:
 Був я один Ти другом став моїм.
 Був сирота - назвав ім’ям Своїм.
 Із ями витягнув глибокої.
 Нову пісню вклав в уста мої.
 
 Заспів:
 Am             F
 Сяй! Світлом Божим сяй,
 C
 Ніколи не ховай
 G              E
 Радість, що Христос - Спаситель дарував.
 Am             F
 Палай! Любов’ю Отця палай,
 C
 Серце відкривай
 G              D7
 Сумним, розбитим, тим, хто потребують друга.`),
 new addSong('Бог з нами', `
 Бог з нами
 [F Am C G]

 Куплет:
 Всесильний, нездоланний…
 Хто збагне великого Творця?
 Ми безсилі, безпорадні…
 Хто зійде явити нам життя?
 
 Перехід:
 Світу, що сидить у темноті Світло засяяло
 
 Приспів:
 Бог з нами - Цар всього творіння.
 Прийняв на Себе тління долю всіх людей.
 Бог з нами, Він зняв небесні шати,
 Щоб зодягнути в славу усіх Своїх дітей.
 
 Брідж:
 Слава Богу ввисоті!
 Мир людям на землі, радійте,
 Бог з нами! 
 Слава Богу ввисоті!
 Мир людям на землі, радійте,
 Бог з нами!`),
 new addSong('День у день', `
 День у день
 [E G#m A
    C#m H A]
    
    Приспів 1:
    E           G#m             A
День у день земля сповняється життям Твоїм
C#m            H         A
Bірність і добро тримають світ що Ти створив
     E      G#m  A
День у день
    
    Куплет 1:
    H
Очі
 C#m            A
Здіймаю в небо звідки моя
H
Поміч
      C#m        A 
Знаю коли темно Ти є
H
Поруч
    C#m        A           H
Ранок ще настане ніч пройде
    
    Куплет 2:
    Очі
    Здіймаю до хреста, коли є
    Осуд.
    За гріх мій, за який вмирав Ти
    О мій,
    Спасе, я живий, бо Ти воскрес!
    
    Приспів 2:
    E          G#m              A
День у день спасінню Твоєму радіємо
   C#m          H                      A
Милість і любов вкривають, оживляють знов
E        G#m   A   
День у день

A  C#m  H  E/G#  A  C#m  H
    
    Заспів:
    A      C#m      H
Ні глибина, ні вишина
E/G#             A
Недолі, утиск, самота
     C#m          H
Нас не відлучать від Отця
В житті і в смерті ми Твої
Міцні Твої обітниці
Нас полюбив Ти назавжди!
    
    Приспів 3:
    День прийде і Цар царів зійде, земле, Радій!
    Вірність і добро відновлять все, що Він створив.
    День у день Твій Дух нагадує, що ми Твої.
    Силу і нову надію в нас Ти помістив.`),
    new addSong('Мій Пастир', `Мій Пастир
    [F C Am G]

    Куплет:
    F       C           G         Am
    Господь, з Тобою я спокійно йду, 
     F            C       Gsus G
    Зла не боюсь, бо Ти ведеш.
      F     C     Em7    Am
    Триматись хочу я Твого шляху –
     D7    F/G     C
    Ти мій Пастир і Отець!

    F         G    Am
    Якщо піду я долиною смертної темряви, 
         G/H   C
    Я долиною смертної темряви, 
       Gsus4
    То не боятимуся!
     F       G   Am
    Бо твердо знаю, що неодмінно Ти поруч зі мною,
     G/H  C
    Кожну мить огортаєш любов’ю!
       Gsus4
    Навколо милість Твоя!
    
    Приспів:
    F       C
    До висот веде мене 
    G            Am
    Добрий Пастир
     F  C     Gsus4
    І до тихої води.
        F    C      E7   Am
    За Тобою, Боже, я буду йти!
    F      C      Gsus4
    Все життя моє в Тобі, мій Пастир.`),
    new addSong('Могутня в нас твердиня Бог', `
    Могутня в нас твердиня Бог

    [G C G Em]
    
    Куплет 1: 
    Могутня в нас Твердиня Бог,
    Він - понад всі твердині!
    Він - вірний захист від тривог
    В тяжку для нас годину.
    
    Приспів: 
    Наш ворог в кожен час 
    Згубити хоче нас,
    Велика міць його,
    Та зітре Бог все зло,
    Бо Він є нам твердиня.
    
    Куплет 2: 
    Коли б в земній ми боротьбі 
    Здались на власні сили,
    Напевно, сили зла страшні 
    В ту мить би нас зломили.
    
    Приспів 2:
    Лиш Бог, Месія Сам -
    Могутня поміч нам.
    Він - наш незмінний Спас, 
    Він кров пролив за нас
    І знищив сили пекла.
    
    Куплет 3: 
    І хоч би цілий грізний світ
    На нас повстав сьогодні,
    Бог захистить нас, Він - наш щит!
    Хвалім Ім’я Господнє!
    
    Приспів 3:
    Господь - твердиня нам! 
    Він нас провадить Сам.
    Безсилля чи пітьма -
    Та з Ним страху нема.
    Ми з Ним - непереможні!
    
    Брідж:
    Могутня в нас твердиня Бог.
    Хвалім ім‘я Господнє.
    
    Закінчення:
    Могутня в нас твердиня Бог.
    Навіки Його Царство.`),
    new addSong('Ти вище влади', `
    Ти вище влади
    

    Куплет 1:
    G          C     D       G
    Ти вище влади усіх Царів,
    C    D                  G
    Вище природи, бо Сам її створив,
    Em           Em7         C
    Найвища мудрість, Господь, лише в Тобі.
    Am                  Am7             D
    Словом Ти створив цей дивний світ.
    C        D              G
    Ти понад царства усіх владик, вище
    C         D              G
    багатства, що пропонує світ,
    Em       Em7         C
    Найбільше диво з усіх земних скарбів 
    Am             Am7             H7
    Те, що ради мене Ти зробив.
    
    Приспів:
    G         Am  D                   G
    Кров пролив, розп’ятий на хресті,
    G     Am     D              G
    Щоб вмерти, жив, відкинений людьми,
    Em  Em7               C
    Як троянда, розтоптана в землі,
    Am
    Взяв весь мій бруд
    Am7          C - D
    І весь мій гріх 
    G
    На себе Ти.
    
    Куплет 2:
    Ти вище влади усіх Царів,
    Вище природи, бо Сам її створив,
    Найвища мудрість, Господь,
    лише в Тобі.
    Словом Ти створив цей дивний світ.
    
    Найбільша сила – в Твоїх руках,
    У краплях крові, що капали з
    хреста,
    В простих словах, які залишив Ти,
    Щоб ми любили так, як любиш Ти.
    
    Кінцівка:
    Ти був розп’ятий за мене на хресті
    Взяв весь мій бруд і весь мій гріх
    На себе Ти`),
    new addSong('Володар землі', `
    Володар землі
    C#m      E
Володар землі,
         H       
Цар і Спаситель,
G#m         A
Агнець Святий.
    H   C#m            
Престол Твій навіки,
      H
Співають анголи
G#m          A
Пісні хвали.
  E
Ти Святий!
  H
Вся честь і вся слава,
    C#m
І сила Твої!

    A               H
Лунає вічно слава!
    
E          H           C#m
Свят, свят Господь,
  A     E     H
Єдиний достойний хвали!
   E         H         C#m
Свят, свят Господь!
     A         E
Тобі ми вклонились,
  A   C#m        H
Прийми похвалу сердець.
  E/G#   A   H
Святий Господь!

   E/G#   A   H
Святий Господь!
    C#m
Святий Господь!
    
    Куплет 2:
    Я серце схилю, до Тебе вклоняюсь,
    Великий Творець.
    Хай милість й любов омиють гріхи,
    Небесний Отець.
    Ти Святий і добрість Твоя
    Не знає кінця! 
    Лунає вічно слава!
    
    Брідж:
    A        C#m        H              E/G#         A
Хто я, що любов'ю покрив мене Ти?
    C#m    H     E/G#    A
Хто я, хто я?
   C#m     H       E/G#         A
Хто я, що тримаєш усі мої дні?
      C#m     H     E/G#         A
Хто я, хто я?`),
    new addSong('Пісня творіння', `
    Пісня творіння 
    [C Am G C]

    Куплет 1:
    C
    Словом небеса і землю Ти створив
    C                                         Am
    Своїм подихом безодню Ти покрив
    G                   C
    Духом Ти покрив
    
    2 куплет
    Слово з уст Твоїх розсіяло пітьму
    Сонце й місяць чинить волю лиш Твою
    Волю лиш Твою
    
    Приспів
    G          F      C        G     
    Усі діла Твої звеличують Тебе
         F      Am        G
    Усе для Тебе і Тобою все живе!
       Dm Em           F
    Усі ми створені в Тобі знайти усе
        C
    Боже в Тобі усе!
    
    3 куплет
    Твоїм Словом знаю ранок настає
    Милосердям Ти підтримуєш мене
    Боже в Тобі усе!
    
    Брідж
    Am G C F 
    
    4 куплет
    C
    «Звершилося» - лунає слово із Христа
     G/B                  Am
    Той, хто світ створив відкинений за нас
    F
    Помер за нас
    
    C
    Нове творіння - новий ранок настає
        Dm Em  F G               Am
    Воскрес, вознесений і вічно Він живе
    F
    Слово вічно живе`),
    new addSong('Чудова ласка', `
    Чудова ласка 
    С   С/E     F       C
    1) Чудова ласка, що знайшла
    C       C/E     G
    Мене у прірві зла,
    C       C/E  F      C/E
    До ніг Ісуса привела,
    Am      G       C
    Життя нове дала.
    
    С   С/E     F       C
    2) Ісус мене так полюбив,
    C       C/E     G
    Що всі гріхи простив,
    Am      C/E   F     C/E 
    З Отцем навіки примирив
    Am      G           C
    І небо відчинив.
    Am      G           C
    І небо відчинив.
    
    3) Господню ласку я ціню
    І щиро так люблю;
    Навік Ісусу віддаю
    Я волю всю свою.
    
    4) Словам Господнім вірю я, 
    Моя могутність в Нім, 
    Надія, віра Він моя 
    На всіх шляхах моїх. 
    
    5) О благодать, спасенний я 
    З безодні тьми і бід. 
    Це ти мене вела всі дні, 
    Й ведеш додому ти. 
    
    6) Як навіть десять тисяч літ 
    Ми там вже проживем, 
    Співати будем Богу всі 
    Як в той найперший день.
    
    1) Чудова ласка, що знайшла
    Мене у прірві зла,
    До ніг Ісуса привела,
    Життя нове дала.`),
    new addSong('Небеса',`

    [Am, F, C, G]

    Небеса
    Куплет 1:
    Сонце вже заходить низько,
    І трава зів‘яне скоро вже.
    Ісус Христос вже зовсім близько: 
    Чи турбує, друже, це тебе?
    
    Куплет 2:
    На землі життя дочасне
    І дається тільки один раз. 
    Доки сонце ще не згасло,
    Бог дав людям всім спасіння шанс. 
    
    Приспів:
    Ти поглянь на небеса,
    Там для тебе є життя. 
    Він за тебе помирав,
    Щоб життя ти вічне мав. 
    
    Куплет 3:
    Якщо цінуєш своїм життям,
    Будуй своє майбутнє. 
    Вічність на час не проміняй,
    Сформуй серце мудре. 
    І хто б тобі що не казав –
    Ти твердо стій на свому. 
    Христос прийде на хмарах, і ми...
    Усі підем додому. 
    
    Заспів:
    Усі підем додому. 
    Ми всі підем додому. 
    Ми всі підем додому. 
    Ми всі підем додому.`),
    new addSong('Бог кличе', `
    Бог кличе
    Куплет 1:
    H            E/H           H 
Тобі важко, нема сили йти,
 E/H         G#m                 E
І не можеш тягар свій нести... Бог тебе кличе. 
H          E               H
Вже у всьому зневірився ти. 
 E             G#m               E
Ти так прагнеш живої води... Бог тебе кличе.  
    
    Приспів:
    H        C#m      G#m        E      H
Бог кличе. Чекає. Свої обійми Бог відкрив. 
    C#m      G#m             E         
За твоє спасіння Син Божий кров'ю заплатив. 
 H       E      H          E
     
    Куплет 2:
    Всі поразки й помилки лиши. 
    Час невпинно біжить. Поспіши! Бог тебе кличе. 
    Бог почує твоє каяття. 
    Із руїни повстане життя. Бог тебе кличе. 
     
    Брідж:
    H                     G#m
    Дивний Спаситель, наш Всемогутній Бог
      E                     H
    Христос Воскреслий. Алілуйя!
       H                        G#m            
    Богу вклонімось! Він - над усім Господь, 
      E                 H
    Христос Воскреслий. Алілуйя!
    
     
    Куплет 3:
    H                 E            H
Хрест неси, як чекаєш вінця. 
    A/H       E         H    E    H    E    H
Розкажи всім про Бога - Творця.﻿`),
    new addSong('Мій маяк', `
    Мій маяк
    1 куплет: 
C                   F      C 
В сумнівах і в боротьбі,
F      C            G 
В кожен час зі мною Ти,
C                     F       C 
Крок за кроком йдемо ми.
F           C            G        C 
Я не боюсь навіть темряви,
F           C            G        C 
Я не боюсь навіть темряви.

2 куплет: 
З друзями і в самоті,
В час тривоги і в час журби,
Знаєш Ти усі стежки
Я не боюсь навіть темряви,
Я не боюсь навіть темряви.

Приспів: 
F       C      Am      G 
Ти мій Бог, мій - маяк!
F       C      Am      G 
В темряві Ти сяєш, за Тобою йду!
F       C      Am      G 
Ти мій Бог, мій - Маяк!
F       C      Am      G 
Тобі я довіряю, за Тобою йду!

          F  C  G          F  C  G
В небеса, в небеса,
            F  C  G           C
В небеса, в небеса!

3 куплет: 
Не злякаюсь й завтра я
Дбаєш Ти про моє життя,
Моє світло тільки Ти.
Я не боюсь навіть темряви,
Я не боюсь навіть темряви.

Приспів: 
Ти мій Бог, мій - маяк!
В темряві Ти сяєш,
За Тобою йду!
Ти мій Бог, мій - Маяк!
Тобі я довіряю,
За Тобою йду!

В небеса, в небеса,
В небеса, в небеса!

Брідж: 
F         C         Am        G 
Ти гори в нас засвіти,
F            C           Am                 G 
Проведи нас крізь шторми!
F         C         Am        G 
Ти гори в нас засвіти,
F            C             Am               G 
Проведи нас крізь шторми

Приспів: 
Ти мій Бог, мій - маяк!
В темряві Ти сяєш,
За Тобою йду!
Ти мій Бог, мій - Маяк!
Тобі я довіряю,
За Тобою йду!

В небеса, в небеса,
В небеса, в небеса!`),
    new addSong('Добрий Ти', `
    A
Ти — Цар в серці моїм,
       D                    A
Міцна Скеля Ти моя,
       F#m      E
Моя жива вода,
      D       A
Пісня Ти моя.
Ти  — Цар в серці моїм,
Тінь Ти у спекотний день,
Ти викупив мене,
Пісня Ти моя
F#m          E          D      A
Ти благий, Бог, о-о-о 4р

Ти Цар в серці моїм,
Наче вітер для життя,
Якір у морях,
Пісня Ти моя.
Ти Цар в серці моїм,
Ти вогонь палаючий,
Лунаєш Ти в мені,
Пісня Ти моя!

Ти благий, Бог, о-о-о

F#m                  E
До мене добрим був завжди,
D                        A
Знаю: Ти не підведеш`),
    new addSong('Світлом засяй', `
    1 КУПЛЕТ:
E        H           (F#m)         A
Світлом засяй, мій Господь, у темряві,
E        H          A
Очі мої просвіти.
E      H          (F#m)         A
Дай, щоб побачив красу Твою в славі,
  E         H      A
Надію в житті укріпи.

ПРИСПІВ:
   E                 H
Ось я, щоб схилитись, ось я, щоб вклонитись,
  C#m            A
Ось я, щоб сказати: «Ти – мій Бог».
  E                  H
Ти – моя твердиня, Ти – моє спасіння,
   C#m                A
Ти – моє натхнення, мій Господь.

2 КУПЛЕТ:
Вічності Цар, Ти безмежно великий,
Вищий за славу небес.
В світ Ти прийшов, як той Агнець покірний,
Ради людей йшов на хрест.

ПРИСПІВ:
E                         H
Ось я, щоб схилитись, ось я, щоб вклонитись,
  C#m                      A
Ось я, щоб сказати: «Ти – мій Бог».
  E                        H
Ти – моя твердиня, Ти – моє спасіння,
   C#m                A
Ти – моє натхнення, мій Господь.

БРІДЖ:
H       C#m     A
І я ніколи  не збагну,
H           C#m      A
За гріх мій сплачену  ціну!

ПРИСПІВ:
   E                         H
Ось я, щоб схилитись, ось я, щоб вклонитись,
  C#m                      A
Ось я, щоб сказати: «Ти – мій Бог».
  E                        H
Ти – моя твердиня, Ти – моє спасіння,
   C#m                A
Ти – моє натхнення, мій Господь.

`),
    new addSong('Ближче о Боже мій до Тебе йду', `Куплет 1:
    G  C  G  D
Ближче, о Боже мій, до Тебе йду,
G  C  G  D7  G
Хоч і страждання тут часто несу.
G   C  G  G  C  D7
Та в боротьбі земній ближче, о Боже мій,
G  C  G  D7  G
Ближче, о Боже мій, до Тебе йду.
    
    Куплет 2:
    Я подорожній тут на цій землі
    І відпочинок лиш знайду в Тобі.
    В день і в порі нічній ближче, о Боже мій,
    Ближче, о Боже мій, до Тебе йду.
    
    Куплет 3:
    Як лиш настане день, славлю Тебе,
    Що піснею хвали сповнив мене.
    Чую я голос Твій, ближче, о Боже мій,
    Ближче, о Боже мій, до Тебе йду.
    
    Куплет 4:
    Коли ж земне життя Ти перервеш,
    Тоді у славу Сам мене введеш.
    Радість в країні тій, ближче, о Боже мій,
    Ближче, о Боже мій, до Тебе йду.`),
    new addSong('Твоя любов немов ріка', `
    [E, Fm, A, H]

    Твоя любов немов ріка

    Куплет 1:
    Твоя любов, немов ріка, як височінь могутніх гір,
    Здійму до Тебе я свій зір і заспіваю Тобі.
    До мого серця доторкнись, відчути хочу цю любов,
    Нехай Твій Дух Святий зійде й наповнить серце знов.
    
    Приспів:
    Про Твою любов співаю,
    Хай мій спів звідусіль лунає,
    Кожне серце нехай пізнає,
    Що любов Твоя не минає.
    
    Брідж:
    Я живу Тобою - 
    Нехай побачать всі.
    Вражений любов'ю
    Я співати буду лиш Тобі, Господь!`),
   


 new addSong('Бог за нас воює', `
 Бог за нас воює 
 
 1 куплет:
  F                     Dm
Бог за нас воює на нашій стороні, 
 Am                    C
Він є Переможець, Він все переміг,
  F                    Dm
Я не посоромлюсь, я не похитнусь,
   C
Сам Ісус є тут.

2 куплет:
  F                 Dm
Взяв мої хвороби, сором мій покрив,
  Am                 C
Ми - найщасливіші люди на землі.
  F                  Dm
Бог дарує силу, Бог дарує міць,
  C
Сам Христос в мені!

Приспів:
 G              F
Буду жити не помру,
C                  Am
Бо взяв Христос вину мою.
  F                Dm
І воскресіння сила тут,
    C
І я живу!
  G           F
Буду жити не помру,
   C        Am
Ім’я Ісуса піднесу
  F                Dm
Мене зцілив, благословив
    C 
Іменем своїм!

Бридж:
   F                        G
Бог за нас воює, темряву руйнує,
   Am                         Em
Світлом свого слова в серці в нас панує,
  F                           G
В імені Ісуса - наша перемога, 
   Am                 C
Слав Його ім’я, слав Його!

 `),

 new addSong ('Бога благослови', `Бога благослови / 10000 причин
    [F, C, G, Am]
 Приспів:
 Бога благослови, душе моя.
 Хвали Його ім’я.
 Як ніколи співай, душе моя.
 Хвали Святе ім'я.
 
 Куплет 1:
 Вже сонце зійшло, день почну з Тобою.
 І знову слав, душе, Творця.
 Я все пройду, що лежить переді мною.
 Співати буду до заходу дня.
 
 Куплет 2:
 Бог є любов, на гнів повільний,
 Ім'ям величний, серцем добрий Ти.
 За всі щедроти дякую я в пісні,
 Їх десять тисяч можу я знайти.
 
 Куплет 3:
 В той день, коли сила вже скінчиться,
 Кінець той близько, і мій час прийде,
 Співай, душе, хай звучить ця пісня
 На десять тисяч літ і на віки!`),

 new addSong('Будь прославлений', `Будь прославлений

 Куплет 1:
   	

A               E
Будь прославлений,
F#m             D
Як рясний плід дає земля,
A               E
Як достатку тече ріка,
                D
Будь прославлений!

Будь прославлений,
Як пустеля самотня скрізь,
Як іду по долинах сліз,
Будь прославлений!

A               E       F#m     D
Кожен дар Твій повертаю Тобі в хвалі,
A               E       F#m     D
Коли темінь наступає, кажу Тобі:
A                       E
Будь благословен навіки!
   F#m             D
Будь благословен!
A                       E
Будь благословен навіки!
             F#m             D
Господи мій, будь благословен!

Будь прославлений,
Коли радість цвіте в мені,
Коли світлі приємні дні,
Будь прославлений!
Будь прославлений,
Коли в серці страждання й сум,
Коли тяжко свій хрест несу,
Будь прославлений!

A               E
Ти дав, і Ти узяв,
F#m             D
Ти дав, і Ти узяв,
A               E
Слова ж мої без змін:
F#m              D
О, будь благословен!`),

 new addSong('Боже Єдиний', `Боже Єдиний

 Куплет 1:
 1 куплет:
    C            Em             F
Боже єдиний нашу країну тримай!
  C        Em             F
Боже народ наш з колін піднімай!
  C               Em           F
Ти наше світло в темряві ночі, наш Бог!
 C            Em        F
Ти наша сила в часи безсилля й тривог!

Приспів:
    C                     Am
Бо Ти Такий Великий, Ти Такий Могутній,
   F
Тримаєш Ти цей світ в руках Своїх.
  C                                  Am
Ти Такий Великий, Ти Такий Могутній,
  F
Вклоняємось до Тебе серцем ми.

2 куплет:
Нині ж Господь наш, благаєм прийди!
Нашу країну в рідну родину мир принеси!
Бо Ти наше світло, в темряві в ночі наш Бог!
Ти наша сила в часи безсилля й тривог!`),


new addSong('Великий Бог', `Великий Бог

A                    D
Великий Бог, коли на світ погляну,
         A      E              A   E
І бачу все, що Ти створив в красі,
           A                D
Як кожен квіт Тобі складає шану,
        A     E         A   E
І як обняв любов'ю Ти усіх.

           A             D           A
     Тоді, Господь, мій дух співа Тобі:
              E           A   E
     Великий Ти, великий Ти!

Коли беру я Книгу заповітів
І в ній читаю про Твої діла,
Як полюбив Ти нас, людей, на світі
І Свого Сина з неба нам послав.

Коли Господь мене сам закликає,
І світить промінь сяєва Його,
Тоді мій дух в покорі замовкає,
Признавши велич Господа свого.`),

new addSong('Вклонимось і скиньмо вінці', `Вклонимось і скиньмо вінці

Куплет:
 A           E           F#m     
Вклонимось і скиньмо вінці
D                E
    Біля ніг Ісуса
A      E                F#m
Милість, любов у всій повноті
D                E
    Біля ніг Ісуса

Приспів:
  D               A              E
Він Бог Святий, Святий, Святий!
 D              A               E
Він Цар Святий, Святий, Святий!
   D                A              E
Він наш Господь, Він Агнець Божий,
   A
Він - Святий!

Приспів 2: 
   D               A               E
Ти Бог Святий, Святий, Святий!
  D              A                E
Ти Цар Святий, Святий, Святий!
 D              A             E
Ти наш Господь, Ти Агнець Божий,
           A
Ти - Святий!`),

new addSong('Вірим ми', `Вірим ми


D  G/D

1 куплет:
D                G/D
В ці часи випробування,
D           G/D
Коли страх навколо нас,
Hm          G/D
Залишається надія. 
 D                G/D
Вірим ми, вірим ми. 

2 куплет: 
D          G/D
І для цього покоління
D          G/D
Ти нам світиш в темноті. 
Hm            G/D
Лиш в Тобі знайдем спасіння,
 D               G/D
Вірим ми, вірим ми. 

ПРИСПІВ:
       D      
Вірим ми, що Бог - Отець наш,
      A
Вірим в Господа Христа,
       Hm
Вірим ми в Святого Духа,
        G
Він дарує нам життя. 
      D
Вірим ми в Його розп'яття,
        A
Вірим, смерть Він подолав. 
               Hm
Вірим ми в те, що воскрес Він
        G
І повернеться до нас. 
         G
Вірим ми. 

3 куплет:
D                   G/D
Хай наповнить наша віра
D                    G/D
Все життя, не лиш пісні.
Hm                  G
У безсиллі і спокусах
  D              G/D
Вірим ми, вірим ми. 

БРІДЖ:
 G                A
Сила Божа до життя веде. 
  Hm               D/F#
В кожне серце Він любов дає. 
    G                       A
Нехай Церква проголошує:
   Hm             D/F#
"Вірим ми, вірим ми!"
   G                    A
Сили пекла не здолають нас!
 Hm                  D/F#
Береже Господь у всякий час,
G                       A
І любов Його не зрадить нас,
  Hm          A/C#
Вірим ми, вірим ми.`),

new addSong('Господа хвалімо разом', `Господа хвалімо разом

1 куплет:
  C                                        Em
Господа хвалімо разом, у Його Святому храмі.
     F           Am   G
Слава! Господу слава!
  C                                     Em
За Його чини могутні Господа хвалімо, люди.
     F             Am   G
Слава!   Господу слава!

Заспів:
 G                                 F
Хай лунає хвала з заходу на схід, 
G                           F 
І від півдня на північ, від неба до землі!

Приспів:
C                         F
Хай все, що дихає, Господу співає,
Am                      F
Усе, що дихає, Слав Його!

2 куплет:
Славте Бога звуком трубним, і на арфі, і на гуслах –
Слава! Господу слава!
Славте на дзвінких цимбалах, і на бубні, і у танці.
Слава! Господу слава!`),

new addSong('Ісус, Ти найкращий Друг', `Ісус, Ти - найкращий Друг

1 куплет:
Em 
Ісус, Ти - найкращий Друг.
В час, коли моє серце плаче,
      Am 
Я до Тебе в молитві йду,
      H7 
Ти поможеш мені, мій Пастир.
       Em 
Для душі мій спокій в Тобі,
Ти - відрада моя, Спаситель,
        Am 
Підкріпляєш у боротьбі,
         H7 
Вірний Друг і душі Втішитель.

Приспів:
            C 
       Я любов'ю Твоєю живу,
            Em 
       І вона моє серце гріє.
               Am 
       Щиро, Спасе, Тебе я люблю,
          H7                  Em 
       І ніхто вже Тебе не замінить.

2 куплет:
Em
Ти Один розумієш все
І думки всі таємні знаєш.
       Am
Ти зі мною, і в кожну мить
        H7
Потішаєш і підкріпляєш.
Em
Хай полине подяка Тобі
За щедроти і вічну милість.
          Am
Ісус, Ти - Спаситель душі,
           H7
Ти і щастя моє, і радість.`),
new addSong('Ісус Ти найкращий Друг', `Ісус, Ти - найкращий Друг

1 куплет:
Em 
Ісус, Ти - найкращий Друг.
В час, коли моє серце плаче,
      Am 
Я до Тебе в молитві йду,
      H7 
Ти поможеш мені, мій Пастир.
       Em 
Для душі мій спокій в Тобі,
Ти - відрада моя, Спаситель,
        Am 
Підкріпляєш у боротьбі,
         H7 
Вірний Друг і душі Втішитель.

Приспів:
            C 
       Я любов'ю Твоєю живу,
            Em 
       І вона моє серце гріє.
               Am 
       Щиро, Спасе, Тебе я люблю,
          H7                  Em 
       І ніхто вже Тебе не замінить.

2 куплет:
Em
Ти Один розумієш все
І думки всі таємні знаєш.
       Am
Ти зі мною, і в кожну мить
        H7
Потішаєш і підкріпляєш.
Em
Хай полине подяка Тобі
За щедроти і вічну милість.
          Am
Ісус, Ти - Спаситель душі,
           H7
Ти і щастя моє, і радість.`),

new addSong ('Оживи', `Оживи 

1 куплет:
C                                     G
Чули про дива Твої про світло з хаосу й темноти
    C
Що все з любові Ти створив і в нас любов цю помістив
C                                 G
Чули Ти вдихнув життя дав нам смисл, майбуття
C                       G
 О, Себе нам знов відкрий життям Своїм нас відроди
 
Приспів:
    C                            
Ми молимо - оживи, Господи,
G
Оживи, серцем прагнемо
  C
Повноти, Господи
G
Оживи

2 куплет:
Чули став до нас близький Божий Син і син людський
Друг усім відкиненим сам Ти був відкинений
Чули що Ти нас простив смертю смерть Ти переміг
О, відкрий що ми Твої відкрий що Ти завжди близький
 
Приспів:
            C
Ми молимо - оживи, Господи,
G
Оживи, серцем прагнемо
  C
Повноти, Господи
G
Оживи Царю милості
C
Повноти, доброти
G
Оживи

Брідж: х2
 C                           G
Спаситель перший і останній
  C                G          D
Царю незрівнянний жертвою нас відродив
C                            G
Втішитель Бог назавжди з нами
   C                     G        D
Повний благодаті світло всім у темноті

C  G  C  G

3 куплет:
Чули Ти вдихнув життя духом церкву Ти підняв
Дав їй впевненість в Тобі потішення в усі часи
Наповни церкву знов Свою вдихни любов і повноту
 
Приспів:
   C
Благаємо - оживи, Господи,
G
Оживи, серцем прагнемо
  C
Повноти, Господи
G
Оживи Царю милості
   C
Повноти, доброти
G
Оживи`),

new addSong('Океани', `Океани


Куплет 1:
Bm             A/C#    D
Мене ти кличеш йти по водах,
   A               G 
Не знаю я, встою чи ні...
Bm        A/C#   D 
Та навіть у тяжкій негоді
   A                   G   
Знайду Тебе на глибині.

приспів
G       D           A
Покличу я Твоє Ім’я,
G      D             A
Тебе побачу серед хвиль,
      G
Впізнаю Тебе,
   D                A
Знайду спокій душі моїй,
   G     A        Bm      A/C#    D
Я в Тобі, а Ти в мені.

2 куплет
Являєш милість серед бурі,
Надійний Ти мій поводир,
Коли спіткнусь, впаду у море,
Врятуєш Ти мене з біди.

брідж
Bm                          G             
О, Ісусе, поведи мене в глибини,
        D              
Хай міцніє моя віра,
       A
Як ступатиму на хвилі.
Bm                        G             
Святий Духу, Ти провадь мене невпинно.
            D
Тим, хто вірить, все можливе!
           A            
І з Тобою все під силу.`),

new addSong('Ось Він гряде', `Ось Він гряде

Куплет 1:
F                   A#
Знаходиться світ в дні останні
C               F   C
Пророки звіщали про це.
F                   A#
І царство повстане на царство,
C           C       F
Народ на народ повстає…
    C           Dm
Хоч голод і мор, землетруси,
    A#          C
Стривожать на світі усіх
    F                   A#
Глядіть, не лякайтесь, бо скоро прийде
C                   F
Ісус, Божий Син, по Своїх!

Приспів:
F               A#
Ось Він гряде на білому коні,
Dm              C
І золотий вінець блищить на голові.
F               A#
Труба звучить, що воля настає
            F
І голосить, що Божий Син іде!

Куплет 2:
Ісус же промовив для учнів,
Що скоро прийде всім кінець.
Настане великий день суду
Одним – смерть, а другим – вінець.
Бо сонце затмиться і місяць,
Коли зазвучить та сурма.
Не бійтесь, бо скоро проявить Себе
Ісус, Божий Син, в небесах!

Заспів:
Ісус вже скоро прийде!`),
new addSong('Полони мене', `Полони мене

Куплет: 1
G             C/G        D/G                G
Полони мене,  за собою клич.
D/F#                      C/E
Ось я на колінах знов,
Em          Em/D           C  
Ти, як Друг, мені промов.

Куплет: 2
G         C/G        D/G         G
Спрага Ти моя, насолода – Ти,
D/F#              C/E
І ніщо у світі цім
Em  Em/D  C  
Не дарує повноти,

G        C/G    D/G         G         D
Тільки Ти один, тільки Ти один.

Приспів: 
G      D       C
В Тобі усе,
G  D/F#  C/E  D
Усе, чого я прагну,
G     D    C
В Тобі усе,
Am                D        G
Вся повнота в Тобі.`),
new addSong('Прекрасний Ти', `Прекрасний Ти

[E, Asus2, C#m, H]

Куплет 1:
В світанках всіх Твоє лице бачу я
В очах Твоїх ранкових кольорів краса
Світ просинається у променях дня
До неба лине пісня ця
Прекрасний Ти

Куплет 2:
У світлі місяця знов сила Твоя
Планети і галактики яскраві бачу я
І світлом зорі дивують нас всіх
Усе навколо свідчить, Хто Ти
Прекрасний Ти

Куплет 3:
І на хресті Ти висів, і нас спас
В крові весь був, помер і знов воскрес Ісус для нас
Тепер сидиш Ти там на троні небес
Скоро ми побачим Тебе
Прекрасний Ти

Куплет 4:
На берег вічності народ Твій прийде
Де смерть - це лише спогади, і сльози - пусте
Весільні дзвони пролунають в той час
І пісню наречена здійме
Прекрасний Ти`),
new addSong('Прийди, Царю благодаті', `Прийди, Царю благодаті

1 куплет: 
D              A        G                 D
Прийди, Царю благодаті, милості й благословінь,
  D              A        G                 D
І навчи мене співати пісню честі і хвали.
 Hm       G     D       Hm      G        D
О, навчи мене мелодій, що лунають в Небесах
  D              A        G                 D
І нехай Тебе, о Боже, славить дух мій і душа.

2 куплет: 
Я блукав у цьому світі, але Ти мене знайшов.
Знемагав в гріховних путах, але Ти явив любов.
Ти звільнив мене з кайданів, Ти свободу дав мені.
Нову пісню я співаю, пісню вдячності Тобі.

3 куплет: 
Милосердю я вклоняюсь,благодаті я боржник.
Ти всіх спраглих напуваєш з доброти Твоїх криниць.
Боже, бачиш моє серце, воно сповнене хвали,
Хай Тобі лише належить, хай співає лиш Тобі.`),
new addSong('Розбите серце', `Розбите серце / О благодать мене знайшла

Куплет 1:
Em              G
Розбите серце, життя уламки
Em              G
Зібрав з любов’ю, цілим зробив
Em              G
Явив Бог милість і не залишив
    D           Em  D
Щоб не намарно я далі жив
 
Пре-приспів:
C               D
О, благодать, мене знайшла.
Em          C
Спасла із прірви зла.
C              D
Був мертвий, а тепер ожив,
Em              C
Сліпим був і прозрів
 
Приспів:
        G   D
Тепер Тебе я бачу
Em              C
В Твоїх очах любов неземна
    G       D
Ісус помер за мене
        Em          C
Воскресив розбите життя
 
Куплет 2:
Ти взяв провини мої на Себе,
Горня із глини скарбом зробив
Господь, наповни його любов’ю,
Щоб я всім серцем Тобі служив.`),
new addSong('Слава в висоті', `Слава в висоті

Dm C
Цар неба та землі
Gm Am Bb F
У святості нема подібних Тобі!
Dm C
Я був мертвий у гріхах,
Gm Am
Милістю стою омитий.

Bb C Dm
Слава! Слава ввисоті!
Dm C/E F
Тому, хто на хресті
Bb F
На Cебе покарання взяв,
Gm Am
Смертю шлях життя вказав.

Bb C Dm
Слава! Слава ввисоті!
Dm C/E F
Він темінь освітив!
Bb F
Цар царів, Господь панів,
Gm Am
Надія всіх народів,
Bb
Йому Слава!

Цар з’явився в тілі.
Сором наш перетерпів, гріх омив.
Довершене спасіння.
Смерть Він подолав!
Йому вся

Bb F
Святий, Всемогутній!
Bb F
Бог любові, благодаті!

Dm C
О! настане день, коли
Gm Am
Прийде за нами Цар!
Співаймо “Слава”`),

new addSong('Хто є я', `Хто є я


Куплет 1:
D
Хто є я? 
A/C#        Hm7
Що Господь, Творець землі
A/C#
Назвав ім'я моє,
G           A           G
Відчув весь мій біль.
D
Хто є я?
A/C#            Hm7
Що Ранковая Зоря
A/C#
Осяяла мій шлях
G           A           G
Промінь віри, щоб не згас.

ПередПриспів:
G           A
Не тому, що вірю я,
Hm7         A/C#
А тому, що любиш Ти!
Hm7         A
І тому, що всі гріхи
G           A
Ти забрав, аби спасти.

Приспів:
D           A       Hm7  
Я є квітка, що зів'яне,
A                   G
Промине життя й не стане,
A           G
Як хвиля в океані,
A              D
Мов пара в вишині.
D           A       Hm7 
Але чуєш, як покличу,
A                   G
Коли падаю підіймеш
A                   G
І в обіймах пригорнеш.
D               G
Я є твій.

Куплет 2:
Хто є я?
Що провини й тягарі
Господь і Бог Святий
Забрав, навік простив.
Хто є я?
Що могутній голос Твій
Крізь бурі й дощі
Дав мир душі моїй.`),
new addSong('Час', `Час

Куплет:
  D 
Час Господа прославляти,
  A             Em  D/F#  G
Час нам принести хвалу   сердець!
  D 
Час славу і честь воздати,
  A              Em  D/F#  G  
Час стать перед Богом таким як є!  
  D
Час!

Приспів:
  G                          D
День прийде і визнає кожен язик,
    G                         D
І кожен на коліна впаде!
  G                Hm
Вічна нагорода чекає тих,
        Em               A7      (D)
Хто вибрали Тебе!    Час!`),
new addSong('Чудова благодать', `Чудова благодать

Інтро:
Bb  Eb

1 куплет:
Bb        
Хто гріх і темінь перемагає,
Eb
Хто нас незмінно, усіх кохає
Gm        F                       Eb
Господь могутній, Ти над царями - Цар.
Bb        
Хто чудесами людей вражає
Eb
І хто в обіймах цей світ тримає
Gm               F                  Eb
Господь могутній, Ти над царями - Цар.

Приспів:
   Bb                     Eb
Чудова благодать… Мене Ти полюбив,
  Gm                        F
Поніс усі гріхи, За мене на хресті,
   Bb                          Eb
Віддав Своє життя, Щоб я свободу мав,
 Gm                           F
Тебе прославлю за все, що Ти нам дав

2 куплет:
Хто відродив нас і дав надію
Хто всиновив нас і завжди вірний
Господь могутній, Господь могутній.
Хто править в правді, хто справедливий,
Хто в славі сяє, Величний, Сильний,
Господь могутній, Ти над царями - Цар.

Бридж:
 Bb  
Гідний Агнець честі й хвали
 Eb
Гідний слави Цар, що смерть переміг
Gm  
Гідний Агнець честі й хвали
 Eb
Гідний слави Цар, що смерть переміг`),
new addSong('Як стихає спів', `Як стихає спів
1 куплет: 
D           A2                 Em
Як стихає спів, немає більше слів,
            A2
Я до Тебе йду.
D           A2              Em
Хочу принести цінне щось Тобі
           A
За любов Твою.

Заспів:
Em       D/F#      Asus
До неба линуть пісні,
             Em
Бо вони у душі,
        D/F#    Asus
Завжди почуєш мене.
Em       D/F#     Asus
В серце моє зазирнеш,
                 Em
Вогник свій принесеш,
       D/F#    Asus
Твоя любов у мені.

Приспів:
D                     A/C#
Вклоняюсь серцем, хвалю і славлю
   Em           G     A     D
Подяка Тобі, подяка Тобі, Ісус.
                        A
Пробач, Господь, що лиш біль приносив.
      Em         G      A    D
За любов Твою подяка Тобі, Ісус.

2 куплет: 
Мій Господь і Бог в присутності Твоії
Славлю і хвалю.
Віддаю Тобі волю всю свою
За любов Твою.`)

];
 


module.exports = songs;




