// main_script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // Элементы страницы (основной экран)
    const textLine1 = document.querySelector('.line-1');
    const textLine2 = document.querySelector('.line-2');
    const textLine3 = document.querySelector('.line-3');
    const museumTitle1 = document.querySelector('.museum-title1');
    const museumTitle2 = document.querySelector('.museum-title2');
    const menuButton = document.querySelector('.museum-button');
    const langRuBtn = document.querySelector('.language-switcher1');
    const langEnBtn = document.querySelector('.language-switcher2');
    
    // Элементы секции истории
    const historyHeader = document.querySelector('#history h1');
    const historySubtitle = document.querySelector('.dif h3');
    const historyParagraphs = document.querySelectorAll('.history-section .text p');
    const historySubheaders = document.querySelectorAll('.dif h2');
    
    // Элементы секции стран
    const countryHeader = document.querySelector('#country');
    const countrySubtitles = document.querySelectorAll('.allder .subtitle');
    
    // Элементы секции исполнителей
    const artistHeader = document.querySelector('#artist h2');
    const searchInput = document.querySelector('#searchInput');
    const searchButton = document.querySelector('#searchBtn');
    const artistCards = document.querySelectorAll('.music-card');
    
    // Элементы секции артефактов
    const artifactsHeader = document.querySelector('#artifacts');
    const artifactTitles = document.querySelectorAll('.artifact-title');
    const artifactDescriptions = document.querySelectorAll('.artifact-description');
    
    // Элементы секции статей
    const articlesHeader = document.querySelector('.header3');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    
    // Элементы футера
    const footerHeader = document.querySelector('.header4');
    const footerMetaLeft = document.querySelector('.subscribe-meta-left');
    const footerLinks = document.querySelectorAll('.subscribe-meta-right a');
    const footerInput = document.querySelector('#emailInput');
    const footerButton = document.querySelector('.subscribe-button');
    
    // Тексты на русском
    const ruTexts = {
        // Основной экран
        textLine1: 'Онлайн погружение',
        textLine2: 'в историю',
        textLine3: 'музыки',
        museumTitle1: 'Музей',
        museumTitle2: 'Музыки',
        menuButton: 'МЕНЮ',
        langRu: 'РУС/',
        langEn: 'ЕН',
        
        // Секция истории
        historyHeader: 'Начало <span class="orange">пути</span>',
        historySubtitle: '(до 1-го тысячелетия до н.э.)',
        historyParagraphs: [
            'Первые музыкальные звуки — это подражание человека голосам животных и птиц во время охоты. Используя голосовые связки, человек уже мог воспроизводить звуки в широком диапазоне: от пения экзотических птиц и стрекотания насекомых до рева дикого зверя.',
            'Самой древней песне, по мнению ученых, около 2000 лет, и она была найдена записанной на глиняной табличке при раскопках в Ниппуре. Кроме того, исследования древних рисунков на стенах и керамике позволяют предположить, что музыка уже тогда развивалась в форму полифонии. Флейта, один из древнейших музыкальных инструментов, созданных человеком, играла мелодию, в то время как вторая флейта обеспечивала фон или второй голос.',
            'Прототипы флейты были обнаружены при раскопках на юго-западе Германии, датируемые периодом 35–40 тысяч лет до н.э.',
            'В Средние века существовало два основных направления в развитии музыки: духовная музыка и светская, развлекательная музыка. При этом светская музыка осуждалась религией и считалась "дьявольским наваждением".',
            'Источником средневековой духовной музыки была монастырская среда. Песнопения разучивались в певческих школах на слух и распространялись в церковной среде. Из-за появления большого разнообразия мелодий католическая церковь решила канонизировать и упорядочить песнопения, отражающие единство христианского вероучения.',
            'Они были призваны очистить разум человека от эмоций и приблизить его к Богу, поэтому церковь наложила запрет на музыкальные инструменты, что было вполне логично для Средневековья. "Бог создал человека как инструмент (человек — флейта Божья), поэтому нам не нужны никакие флейты и скрипки", — такова была позиция церкви. Так зародилась хоровая музыка, ставшая воплощением церковной музыкальной традиции. В ее основе лежат такие жанры, как месса, антифон и мистерия, созданные специально для определенных праздников и богослужений.',
            'В конце XI века произошел всплеск интереса к музыкальной культуре. Это связано с важными открытиями в этой области, такими как появление своего рода нотной записи. Гвидо д’Ареццо создал новый тип рукописей, на которых можно было размещать ноты по звукоряду. Ранее музыканты использовали только специальные знаки (невмы), которые показывали движение мелодии вниз или вверх.',
            'Светскую музыку исполняли мимы, жонглеры, трубадуры или труверы, менестрели (во Франции), миннезингеры, шпильманы (в немецких странах), хоглары (в Испании). Эти артисты должны были не только уметь петь, играть и танцевать, но и уметь исполнять цирковые номера, фокусы, театральные сценки, всячески развлекать публику.',
            'Труверы, трубадуры и миннезингеры, исполнявшие придворную рыцарскую музыку, создали свои оригинальные жанры: "ткацкие" и "майские" песни, рондо, балладу, виреле, героический эпос, песни крестоносцев, канцону.',
            'Благодаря тому, что музыка была одной из наук и преподавалась в университетах, феодалы и знатные люди, получившие образование, могли применять свои знания в искусстве. Так, музыка развивалась в придворной среде. В противовес христианскому аскетизму рыцарская музыка воспевала чувственную любовь и идеал Прекрасной Дамы.',
            'Этот период получил свое название в связи с возрождением интереса к античному искусству, которое стало идеалом для деятелей культуры нового времени. Фактура произведений меняется, количество голосов увеличивается до четырех, шести и более. В гармонии преобладают консонансы, использование диссонансов строго ограничено специальными правилами. Формируются мажорный и минорный лады и тактовая система ритмики, характерные для более поздней музыки.',
            'Стилевые характеристики, определяющие музыку Ренессанса, — полифоническая фактура, подчиняющаяся законам контрапункта и регулируемая модальной системой григорианского хорала, унаследованной от Средневековья.',
            'За столетие техника имитации была усовершенствована — когда один голос повторяет или развивает тему, услышанную в другом. Постепенно сформировались более сложные формы, такие как канон и фуга, которые стали значительным шагом вперед в развитии музыкальной мысли.',
            'В то же время развивалась светская музыка, особенно в Италии, где популярным жанром стал мадригал. Мадригал отличался свободной формой, разнообразием выразительных средств и высокой мелодической красотой. Это способствовало развитию мастерства композиторов в передаче эмоций и нюансов через музыку.',
            'Важным этапом стало распространение нотной записи и печатных изданий, что значительно повысило доступность музыки и ускорило ее развитие. Музыканты и композиторы получили возможность обмениваться произведениями, учиться у лучших мастеров и развивать собственные навыки. Композиторы начали писать более сложные и технически требовательные произведения для новых инструментов, таких как клавесин, орган и лютня.',
            'В эпоху барокко произошли важные изменения в музыкальном мышлении: полифоническое многоголосие сменилось гомофонно-гармонической системой, что способствовало развитию импровизации. Музыкальное содержание расширилось — помимо мессы и лирики появились скорбные и трагические образы.',
            'В это время формируется личность композитора, работающего в различных жанрах. Главной формой становится опера, а оратория достигает вершины с Бахом и Генделем. Развиваются виртуозные формы, такие как токката и фуга, появляется жанр концерта — как для одного инструмента с оркестром, так и ансамблевого концерта.',
            'Основным инструментом эпохи становится орган, а также клавесин, струнные и деревянные духовые. Появляются первые оркестры и инструментальная музыка. Итальянский композитор Клаудио Монтеверди создал речитативный стиль и развил итальянскую оперу, ставшую центром нового стиля.',
            'Италия стала культурным центром, а католическая церковь использовала музыку для распространения веры, делая акцент на разборчивости текста и развитии гомофонии. В зрелом барокко усилилось разделение музыкальных форм и расширился круг слушателей благодаря книгопечатанию и обмену произведениями.',
            'Важными направлениями стали гармония и систематизация музыкального образования. Арканджело Корелли развил жанр Concerto grosso, основанный на контрастах и чередовании громких и тихих частей. В Англии ярко проявился талант Генри Пёрселла, работавшего в различных жанрах — от религиозных гимнов до сценической музыки.',
            'В музыке сложились два стиля — гомофонный и полифонический, и созрели такие формы, как концерт, сюита, соната, опера и балет. Общепринятыми стали следующие схемы: двухчастная, трехчастная и рондо. Эпоха барокко была временем богатых изменений и развития музыкальной культуры.',
            'Классицизм основывался на вере в разумность бытия и единый порядок, управляющий природой и человеческой натурой. Произведение должно строиться по строгим канонам, отражая гармонию и логику мироздания. Классицизм разделял жанры на "высокие", связанные с античностью и религией (трагедии, оды), и "низкие", отражающие народную жизнь (басни, комедии), при этом их смешение было недопустимо.',
            'В середине XVIII века появились новые жанры инструментальной музыки — соната, симфония, концерт, сформировалась сонатно-симфоническая форма. Возникли виды камерных ансамблей, такие как трио и квартет. Сонатная форма была окончательно сформирована Гайдном и Моцартом и достигла совершенства у Бетховена, включающего три раздела: экспозицию, разработку и репризу. Симфония обычно состояла из четырех частей: быстрой, медленной, менуэта и финала. Концерт — произведение для оркестра и солиста, с традиционным трехчастным строением (быстро — медленно — быстро), закрепленным Гайдном и Моцартом. Струнный квартет стал популярным жанром камерной музыки.',
            'В XVIII веке в Италии господствовала опера, особенно опера-сериа, созданная Метастазио, с минимальным количеством персонажей и без хора. Во Франции развивались трагическая опера и опера-буффа, которая к 1750 году заняла важное место на сцене, вытесняя серьезные оперы. Музыка оставалась важной в церквях, но светская культура и драматизация проникли в церковные произведения, иногда перенося их из священных в светские жанры.',
            'Классицизм сочетал простоту и ясность с глубоким содержанием, сильными чувствами и драматизмом. Этот стиль стал основой для современной академической музыки и продолжает оказывать значительное влияние на музыку сегодня.',
            'Музыкальный романтизм, возникший во втором десятилетии XIX века, был новаторским явлением с глубокими связями с классикой.',
            'Предшественниками были Бетховен, Керубини и Глюк. В произведениях романтиков раскрывались их идея, структура и развитие. Музыка стала более эмоциональной, выразительной и индивидуальной, особенно в песенных жанрах.',
            'Главной темой романтической музыки стала личность, ее конфликт с окружающим миром. Герой — одинокий и неординарный человек, часто поэт, музыкант или художник. Тема одиночества и творческой личности стала центральной, как в произведениях Шумана, Берлиоза и Листа. Также важной стала тема лирической исповеди, тесно связанная с природой, которая передавала внутреннее состояние, часто окрашенное чувством дисгармонии. Идея вымысла развивалась в жанровом и эпическом симфонизме, впервые музыкально изображая сказочные и фантастические образы с помощью необычных оркестровых и гармонических красок — примером может служить сцена в Волчьем ущелье из "Волшебного стрелка" Вебера.',
            'Интерес к народному творчеству стал характерной чертой романтизма. Композиторы широко использовали народные песни, баллады и былины, опираясь на интонации и ритмы национального фольклора, возрождали древние диатонические лады. Это привело к преобразованию европейской музыки, расширению музыкального языка и формообразования, развитию мелодики, речевой интонации, тембровой и гармонической палитры.',
            'В центре внимания оказывается уже не собирательное человечество, а отдельная личность с ее неповторимыми чувствами. Это вылилось в уменьшение обобщенных интонаций, типичных аккордовых последовательностей, фактур, которые становились более индивидуализированными. В оркестровке предпочтение отдается сольным голосам, и ансамбли уступают место сольному выразительному звучанию.',
            'Промышленная революция в XIX веке значительно повлияла на развитие музыки, прежде всего благодаря усовершенствованию музыкальных инструментов, что расширило возможности композиторов экспериментировать со звуком. Также были изобретены и развиты устройства для воспроизведения музыки — фонограф и граммофон, которые сделали музыку доступной для широкого круга слушателей и открыли новые горизонты для поиска новых звуковых идей.',
            'Зарождавшийся импрессионизм в музыке стремился передавать впечатления и ощущения, создавая мягкие атмосферные звуковые ландшафты. Клод Дебюсси и Морис Равель стали одними из ведущих композиторов этого жанра.',
            'Экспрессионизм, возникший в начале XX века, представлял собой экспериментальный подход к выражению внутренних эмоций. Арнольд Шёнберг ввел двенадцатитоновую систему, основанную на равенстве всех 12 звуков, что открыло новые гармонические возможности. Модернизм этого времени дал музыкантам свободу от традиций и породил множество новых стилей и направлений, актуальных в современном искусстве.',
            'XX век стал эпохой революционных изменений в музыке. Появляются новые стили, такие как джаз, блюз, рок, электронная музыка, авангард и экспериментальные стили. Развитие технологий звукозаписи, радио и телевидения коренным образом изменило способы распространения и потребления музыки. Важными событиями стали создание первого фонографа, виниловых пластинок, а позднее цифровых форматов и Интернета, что сделало музыку доступной для миллионов людей по всему миру. В это время возникает множество новых жанров, сочетающих разные культуры и стили, а также развиваются фестивали, концерты и онлайн-музыкальные платформы.',
            'Классическая музыка XX века претерпела значительные изменения и эксперименты. Такие композиторы, как Игорь Стравинский, Сергей Прокофьев, Бела Барток и Дмитрий Шостакович, внесли значительный вклад в развитие этого жанра. Игорь Стравинский прославился своими революционными балетами, такими как "Весна священная" и "Петрушка", которые отражали современные художественные и музыкальные тенденции своего времени. Сергей Прокофьев сочетал в своих произведениях элементы классицизма, экспериментальные звуковые эффекты и эмоциональную глубину. Его искусство отличается уникальным стилем и необычными гармониями. Бела Барток и Дмитрий Шостакович внесли значительный вклад в развитие современной классической музыки, сочетая народные мелодии и ритмы с инновационными гармониями и структурами.',
            'Постмодернизм и влияние технологий привели к появлению электронной музыки и новых жанров. Использование электроники, сэмплирования и компьютерного программного обеспечения дало музыкантам возможность создавать, записывать и распространять музыку независимо от крупных звукозаписывающих лейблов. Транс, хаус и дабстеп стали популярными жанрами, которые активно влияли на молодежную культуру и музыкальный вкус.',
            
            // Заголовки истории
            historySubheaders: [
                'Средневековье',
                'Ренессанс',
                'Барокко',
                'Классицизм',
                'Романтизм',
                'XX век и современность'
            ],
            
            // Секция стран
            countryHeader: 'Музыкальные <span class="orange">традиции</span><br>разных <span class="orange">стран</span>',
            countrySubtitles: ['Индия', 'Китай', 'Россия', 'Испания', 'Африка'],
            
            // Секция исполнителей
            artistHeader: 'Выдающиеся <span class="orange">исполнители<br>и создатели</span> музыкальных<br>шедевров',
            searchPlaceholder: 'Найти музыканта',
            searchButtonText: 'НАЙТИ —',
            
            // Секция артефактов
            artifactsHeader: 'Инструменты и<br>музыкальные артефакты',
            artifactTitles: [
                'Мануал',
                'Цимбалы',
                'Губная гармошка',
                'Мандолина',
                'Жалейка',
                'Гусли',
                'Орган Вивальди',
                'Рожок',
                'Труба',
                'Фагот',
                'Лира',
                'Галльская флейта',
                'Лютня',
                'Кларнет раннего периода'
            ],
            artifactDescriptions: [
                'Мануал — ранний клавишный инструмент, предшественник органа, появившийся в Средние века. Он состоял из деревянной рамы с несколькими клавишами, позволяя играть мелодии и создавать аккомпанемент. Мануалы использовались в церковной музыке и домашнем быту, позволяя музыкантам создавать богатое звучание. В отличие от современных органов, мануалы имели ограниченную механику и возможности. Этот инструмент сыграл важную роль в развитии клавишных инструментов и органной техники.',
                'Цимбалы — древний клавишный или ударный инструмент, известный со времен Средневековья. Он состоит из металлических пластин, натянутых на деревянную раму, по которым ударяют молоточком или палочкой. В средневековой музыке и музыке эпохи Возрождения цимбалы использовались как сольный инструмент и для аккомпанемента, а также в придворных ансамблях. Их звонкое и чистое звучание хорошо сочеталось с другими инструментами. Сегодня цимбалы широко используются в исторических реконструкциях и народной музыке.',
                'Губная гармошка — небольшой портативный духовой инструмент, состоящий из корпуса с металлическими или пластиковыми язычками, которые вибрируют при вдохе или выдохе. Ее история насчитывает тысячи лет — различные формы существовали в Китае, Европе и Америке. В народной музыке многих стран гармоника популярна благодаря своей простоте и выразительности. В XIX веке она стала популярным инструментом, особенно в блюзе и фолк-музыке.',
                'Мандолина — щипковый струнный инструмент с коротким грифом и несколькими параллельными струнами, впервые появившийся в Италии в XVI–XVII веках. Ее характерное звучание достигается множеством металлических струн, натянутых на деревянный корпус. Мандолина широко использовалась в музыке барокко, классической и народной музыке, а также в семейных ансамблях. В XIX веке она стала популярной в Европе и Америке благодаря своему яркому звучанию и компактным размерам. Сегодня мандолина остается популярным инструментом для исполнения народных и современных композиций.',
                'Жалейка — духовой инструмент, распространенный в Средние века, изготавливался из дерева или металла. Имеет длинную трубку и иногда украшается резьбой или инкрустацией. На нем играли на церковных службах, а также для развлечения и придворных увеселений. Звук жалейки был ярким и звонким, ее использовали для передачи мелодий и сигналов. Впоследствии он эволюционировал в другие духовые инструменты, такие как гобой и геликон.',
                'Гусли — древний струнный инструмент, распространенный в России и других славянских культурах. Это плоское или коробкообразное устройство с натянутыми на нем струнами, на которых играют щипком или ударом. В разных регионах гусли имели разную форму и конструкцию, они использовались для исполнения народных песен и сказаний. Гусли были важной частью народной культуры и религиозных обрядов, а также использовались для аккомпанемента пению. Этот инструмент считается одним из символов славянского музыкального наследия.',
                'Галльская флейта — древняя деревянная флейта, распространенная в Европе в Средние века и эпоху Возрождения. Обычно она имела простую конструкцию и одно или два отверстия для пальцев, что позволяло играть мелодии. Этот инструмент использовался как в народной, так и в придворной музыке, часто в ансамблях и оркестрах. Громкие и выразительные звуки галльской флейты были важны в церковной и светской культуре того времени. Сегодня она считается одной из прародительниц современных флейт и используется в исторической реконструкции.',
                'Рожок — древний духовой инструмент, изготовленный из дерева, рогов животных или металла. Он использовался для сигналов, в военных целях и в церковной музыке. В средневековых европейских традициях рожок имел значение в военном и церковном контексте, а также для развлечения. Звук рожка мощный и громкий, что делало его эффективным для передачи сигналов на большие расстояния.',
                'Труба — один из древнейших духовых инструментов, известный с античных времен. В древности она использовалась для военных сигналов, церковных служб и развлечений. Натуральные трубы без вентилей имели ограниченные звуковысотные возможности, но их мощный и яркий голос делал их важными в оркестровых и военных ансамблях. В XVI–XVII веках появились первые вентили, которые значительно расширили диапазон и возможности инструмента. Сегодня труба является обязательным элементом симфонических оркестров и духовых ансамблей.',
                'Фагот — древний деревянный духовой инструмент, существующий с XVII века. Он состоит из длинной трубки с клапанами и расширяющимся нижним концом, что позволяет извлекать глубокие низкие звуки. В XVII–XIX веках фагот стал важной частью оркестров и камерных ансамблей. Его богатое и теплое звучание используется для исполнения мелодий и ритмических фигур. Со временем конструкция инструмента совершенствовалась.',
                'Лира — один из древнейших струнных инструментов, известный с античных времен. Она имела деревянную раму с натянутыми струнами, которые перебирали или ударяли пальцами или с помощью колец. Лира широко использовалась для аккомпанемента пению, в религиозных и светских церемониях. В Средние века она стала важным инструментом для поэтов и музыкантов, а также имела символическое значение. Ее звуки были мягкими и выразительными, а конструкция относительно простой.',
                'Орган Вивальди — небольшой портативный орган, созданный в XVIII веке для сольных выступлений и домашнего использования. Он имел один или два регистра и механическую механику, позволявшую играть мелодии и аккомпанементы. Этот инструмент был широко распространен в Европе и использовался в церковных и светских мероприятиях. Звук органа отличался яркостью и богатством тембров, что делало его популярным в то время. В наше время он считается важным этапом в развитии клавишных инструментов.',
                'Лютня — древний струнный инструмент, популярный в Европе в XVI–XVII веках. Она имеет плоский корпус с резонатором, гриф и нейлоновые или металлические струны. Обычно она использовалась для сольных выступлений, аккомпанемента и обучения музыке. Ее звуковой диапазон и техника игры позволяли исполнять как простые мелодии, так и сложные полифонические произведения. Лютня сыграла важную роль в развитии европейской музыкальной культуры эпохи Возрождения и барокко.',
                'Кларнет раннего периода появился в конце XVII века и стал предшественником современного инструмента. Он имел деревянный корпус и одноступенчатую механику, что делало его проще и легче в изготовлении. Этот кларнет использовался в музыке барокко для исполнения мелодий и ансамблевых партий. Его характерное теплое и богатое звучание отличалось от современных версий. В XIX веке конструкция кларнета была значительно улучшена, что сделало его одним из важнейших инструментов оркестра.'
            ],
            
            // Секция статей
            articlesHeader: 'Хотите узнать<br>что-то ещё новое',
            
            // Футер
            footerHeader: '<span class="orange">Подпишитесь</span> на наши новости и<br>статьи — вместе мы<br><span class="pinkish">откроем новые горизонты</span> музыки!',
            footerMetaLeft: 'Контент<br>Главный редактор: Жамиля Алексеевна Спиридонова<br><br>Техническая поддержка<br>info@help.media<br><br>Правила использования материалов<br>Пользовательское соглашение<br>Политика использования Cookie',
            footerLinks: ['история', 'страны', 'исполнители', 'инструменты', 'статьи'],
            footerPlaceholder: 'Ваш email-адрес',
            footerButton: 'ПОДПИСАТЬСЯ—'
        },
        
        // Тексты на английском (оригинальные, но собираем в объект для единообразия)
        enTexts = {
            // Основной экран
            textLine1: 'Online immersion',
            textLine2: 'in the history of',
            textLine3: 'music',
            museumTitle1: 'Music',
            museumTitle2: 'Museum',
            menuButton: 'MENU',
            langRu: 'RUS/',
            langEn: 'EN',
            
            // Секция истории
            historyHeader: 'The <span class="orange">beginning</span><br>of the path',
            historySubtitle: '(before the 1st millennium BC)',
            historyParagraphs: [
                'The first musical sounds are human imitations of animal and bird voices during hunting. By using the vocal cords, a person could already reproduce sounds in a wide range: from the singing of exotic birds and the chirping of insects to the roar of a wild animal.',
                'The oldest song, according to scientists, is about 2,000 years old, and it was found written on a clay tablet during excavations in Nippur. Additionally, research on ancient drawings on walls and ceramics suggests that music was already evolving into a form of polyphony. The flute, one of the oldest musical instruments created by humans, played a melody, while a second flute provided a background or second voice.',
                'The prototypes of the flute were discovered during excavations in southwestern Germany, dating back to the period 35-40 thousand years BC.',
                'In the Middle Ages, there were two main directions in the development of music: sacred music and secular, entertaining music. At the same time, secular music was condemned by religion and considered a "devilish obsession."',
                'The source of medieval sacred music was the monastic environment. Chants were learned in singing schools by ear and spread in the church environment. Due to the emergence of a wide variety of melodies, the Catholic Church decided to canonize and regulate chants that reflected the unity of Christian doctrine.',
                'They were intended to purify a person\'s mind from emotions and bring them closer to God, which is why the church imposed a ban on musical instruments, which was quite logical for the Middle Ages. "God created man as an instrument (man is God\'s flute), so we don\'t need any flutes or violins," was the church\'s position. This is how the choral music emerged, becoming the epitome of the church\'s musical tradition. It is based on genres such as the Mass, antiphon and mystery, created specifically for certain holidays and divine services.',
                'At the end of the 11th century, there was a surge of interest in musical culture. This is due to important discoveries in this field, such as the appearance of a kind of musical notation. Guido of Arezzo created a new type of manuscripts on which it was possible to place notes according to the scale. Previously, musicians used only special signs (neumes) that showed the movement of the melody down or up.',
                'Mimes, jugglers, troubadours or trouvers, minstrels (in France), minnesingers, shpilmans (in German countries), hoglars (in Spain) performed secular music. These artists had to not only be able to sing, play and dance, but also be able to perform circus performances, magic tricks, theatrical scenes, and had to entertain the audience in every possible way.',
                'Trouvers, troubadours and minnesingers playing courtly chivalrous music have created their own original genres: "Weaving" and "May" songs, rondo, ballad, virelle, heroic epic, crusader songs, canzone.',
                'Due to the fact that music was one of the sciences and was taught at Universities, feudal lords and noble people who received education could apply their knowledge in art. Thus, music developed in the court environment. In contrast to Christian asceticism, chivalrous music celebrated sensual love and the ideal. A beautiful Lady.',
                'This period got its name in connection with the revival of interest in ancient art, which became an ideal for cultural figures of the new age. The texture of the works changes, the number of voices increases to four, six or more. Consonantal consonances prevail in harmony, the use of dissonances is strictly limited by special rules. The major and minor frets and the clock system of rhythmics characteristic of later music are formed.',
                'The stylistic characteristics defining Renaissance music are a polyphonic texture that obeys the laws of counterpoint and is regulated by the modal system of Gregorian chant inherited from the Middle Ages.',
                'Over the course of a century, the technique of imitation has been perfected — when one voice repeats or develops a theme heard in another. Gradually, more complex forms such as canon and fugue were formed, which became a significant step forward in the development of musical thought.',
                'At the same time, secular music was developing, especially in Italy, where the madrigal became a popular genre. The madrigal was distinguished by its free form, variety of expressive means and high melodic beauty. This contributed to the development of the composers\' skills in conveying emotions and nuances through music.',
                'An important stage was the spread of musical notation and printed publications, which significantly increased the availability of music and accelerated its development. Musicians and composers had the opportunity to exchange works, learn from the best masters and develop their own skills. Composers began to write more complex and technically demanding works for new instruments such as harpsichord, organ and lute.',
                'During the Baroque era, important changes took place in musical thinking: polyphonic polyphony was replaced by a homophonic-harmonic system, which contributed to the development of improvisation. The musical content expanded — in addition to the mass and lyrics, mournful and tragic images appeared.',
                'At this time, the personality of the composer, who worked in various genres, was formed. Opera became the main form, and the oratorio reached the top with Bach and Handel. Virtuoso forms such as toccatas and fugues developed, and a genre of concerto appeared, both for one instrument and orchestra, and an ensemble concerto.',
                'The organ became the main instrument of the era, as well as the harpsichord, strings and woodwinds. The first orchestras and instrumental music appeared. Italian composer Claudio Monteverdi created the recitative style and developed Italian opera, which became the center of a new style.',
                'Italy became a cultural center, and the Catholic Church used music to spread faith, emphasizing the legibility of the text and the development of homophony. In the mature Baroque, the separation of musical forms intensified and the circle of listeners expanded due to the printing and exchange of works.',
                'Harmony and systematization of musical education have become important areas. Arcangelo Corelli developed the genre of Concerto grosso, based on contrasts and the alternation of loud and quiet parts. In England, Henry Purcell\'s talent was clearly evident, working in various genres — from religious hymns to stage music.',
                'Two styles have emerged in music — homophonic and polyphonic, and forms such as concert, suite, sonata, opera, and ballet have matured. The following schemes have become generally accepted: two-part, three-part and rondo. The Baroque era was a time of rich changes and the development of musical culture.',
                'Classicism was based on the belief in the reasonableness of existence and a single order governing nature and human nature. The work should be built according to strict canons, reflecting the harmony and logic of the universe. Classicism divided genres into "high" ones related to antiquity and religion (tragedies, odes), and "low" ones reflecting folk life (fables, comedies), while mixing them was unacceptable.',
                'In the middle of the 18th century, new genres of instrumental music emerged — sonata, symphony, concerto, and the sonata-symphonic form was formed. Types of chamber ensembles have emerged, such as trios and quartets. The sonata form was finally formed by Haydn and Mozart and reached perfection by Beethoven, which includes three parts: exposition, elaboration and reprise. The symphony usually consisted of four movements: fast, slow, minuet and finale. The concerto is a work for orchestra and soloist, with the traditional three—movement structure (fast, slow, fast), anchored by Haydn and Mozart. The string quartet has become a popular genre of chamber music.',
                'In the 18th century, Italian opera dominated, especially the opera seria, created by Metastasio, with a minimal number of characters and without a chorus. France developed tragic opera and opera buffa, which by 1750 had taken an important place on the stage, displacing serious operas. Music remained important in churches, but secular culture and dramatization penetrated into church works, sometimes transferring them from sacred to secular genres.',
                'Classicism combined simplicity and clarity with deep content, strong feelings and drama. This style became the basis for modern academic music and continues to have a significant influence on music today.',
                'Musical romanticism, which emerged in the second decade of the 19th century, was an innovative phenomenon with deep connections with the classics.',
                'The predecessors were Beethoven, Cherubini, and Gluck. The works of the Romantics revealed their idea, structure and development. Music has become more emotional, expressive and individual, especially in song genres.',
                'The main theme of romantic music was personality, its conflict with the outside world. The hero is a lonely and extraordinary person, often a poet, musician or artist. The theme of loneliness and creative personality has become central, as in the works of Schumann, Berlioz and Liszt. The theme of lyrical confession, closely related to nature, which conveyed an inner state often tinged with a sense of disharmony, also became important. The idea of fiction developed in genre and epic symphonism, for the first time musically depicting fabulous and fantastic images using unusual orchestral and harmonic colors — an example is the scene in the Wolf Gorge from Weber\'s The Magic Arrow.',
                'Interest in folk art has become a characteristic feature of Romanticism. The composers widely used folk songs, ballads and epics, based on the intonations and rhythms of national folklore, revived the ancient diatonic modes. This led to the transformation of European music, the expansion of musical language and formation, the development of melody, speech intonation, timbre and harmonic palette.',
                'The focus is no longer on the collective humanity, but on an individual with his unique feelings. This resulted in a decrease in generalized intonations, typical chord progressions, and textures that became more individual. In orchestration, preference is given to solo voices and ensembles give way to solo expressive sound.',
                'The industrial Revolution in the 19th century significantly influenced the development of music, primarily due to the improvement of musical instruments, which expanded the possibilities of composers to experiment with sound. Musical reproduction was also invented and developed — the phonograph and gramophone, which made music accessible to a wide range of listeners and opened up new horizons for the search for new sound ideas.',
                'The emerging impressionism in music sought to convey impressions and sensations, creating soft atmospheric soundscapes. Claude Debussy and Maurice Ravel became one of the leading composers of this genre.',
                'Expressionism, which emerged at the beginning of the 20th century, was an experimental approach to expressing inner emotions. Arnold Schoenberg introduced a twelve-tone system based on the equality of all 12 sounds, which opened up new harmonic possibilities. Modernism of this time gave musicians freedom from tradition and gave rise to many new styles and trends that are relevant in modern art.',
                'The 20th century was an era of revolutionary changes in music. New styles are emerging, such as jazz, blues, rock, electronic music, avant-garde, and experimental styles. The development of recording, radio, and television technologies has radically changed the way music is distributed and consumed. Important events were the creation of the first phonograph, vinyl records, and later digital formats and the Internet, which made music accessible to millions of people around the world. At this time, many new genres are emerging, combining different cultures and styles, as well as the development of festivals, concerts and online music platforms.',
                'Classical music of the 20th century has experienced significant changes and experiments. Composers such as Igor Stravinsky, Sergei Prokofiev, Bela Bartok and Dmitry Shostakovich have made significant contributions to the development of this genre. Igor Stravinsky became famous for his revolutionary ballets such as Sacred Spring and Petrushka, which reflected the modern artistic and musical trends of their time. Sergei Prokofiev combined elements of classicism, experimental sound effects and emotional depth in his works. His art has a unique style and unusual harmonies. Bela Bartok and Dmitry Shostakovich have made significant contributions to the development of modern classical music by combining folk melodies and rhythms with innovative harmonies and structures.',
                'Postmodernism and the influence of technology have led to the emergence of electronic music and new genres. The use of electronics, sampling, and computer software has given musicians the opportunity to create, record, and distribute music independently of major record labels. Trance, house and dubstep became popular genres, which actively influenced youth culture and musical taste.'
            ],
            
            // Заголовки истории
            historySubheaders: [
                'The Middle Ages',
                'Renaissance',
                'Baroque',
                'Classics',
                'Romanticism',
                'XX century and modernity'
            ],
            
            // Секция стран
            countryHeader: 'Musical <span class="orange">traditions</span><br>of different <span class="orange">countries</span>',
            countrySubtitles: ['India', 'China', 'Russia', 'Spain', 'Africa'],
            
            // Секция исполнителей
            artistHeader: 'Outstanding <span class="orange">artists<br>and creators</span> of<br>musical masterpieces',
            searchPlaceholder: 'Find a musician',
            searchButtonText: 'GO —',
            
            // Секция артефактов
            artifactsHeader: 'Instruments and<br>musical artifacts',
            artifactTitles: [
                'Manual',
                'Cymbals',
                'Harmonica',
                'Mandolin',
                'Camel',
                'Psaltery',
                'Vivaldi-organ',
                'Horn',
                'Pipe',
                'Bassoon',
                'The Lira',
                'The Gallic Flute',
                'The lute',
                'Clarinet from the early period'
            ],
            artifactDescriptions: [
                'The manual is an early keyboard instrument, the forerunner of the organ, which appeared in the Middle Ages. It consisted of a wooden frame with several keys, allowing you to play melodies and create accompaniments. The manuals were used in church music and household use, allowing musicians to create a rich sound. Unlike modern organs, manuals had limited mechanics and capabilities. This instrument has played an important role in the development of keyboard instruments and organ technology.',
                'Are an ancient keyboard or metal - striking instrument known since the Middle Ages. It consists of metal plates stretched on a wooden frame, which are struck with a hammer or a plane. In medieval and Renaissance music, dulcimers were used as a solo instrument and for accompaniment, as well as in court ensembles. Their sonorous and clear sound combined well with other instruments. Today, dulcimers are widely used in historical reenactments and folk music.',
                'A harmonica is a small portable wind instrument consisting of a body with metal or plastic plates that vibrate when inhaling or exhaling. Its history goes back thousands of years — different forms existed in China, Europe and America. In the folk music of many countries, the harmonica is popular due to its simplicity and expressiveness. In the 19th century, it became a popular instrument, especially in blues and folk music.',
                'The mandolin is a plucked stringed instrument with a short neck and several parallel strings, which first appeared in Italy in the XVI–XVII centuries. Its distinctive sound is achieved by a multitude of metal strings strung on a wooden frame. The mandolin was widely used in Baroque, classical, and folk music, as well as in family ensembles. In the 19th century, it became popular in Europe and America due to its vibrant sonority and compact size. Today, the mandolin remains a popular instrument for performing folk and modern compositions.',
                'A fireplace is a spiritual instrument common in the Middle Ages, made of wood or metal. It has a long tube and is sometimes decorated with carvings or inlays. It was played at church services, as well as for entertainment and court entertainment. The sound of the camel was bright and sonorous, it was used to transmit melodies and signals. It subsequently evolved into other wind instruments such as the oboe and the helicon.',
                'The gusli is an ancient stringed instrument common in Russia and other Slavic cultures. It is a flat or box-shaped device with strings stretched on it, which are played by plucking or hitting. In different regions, psaltery had different shapes and designs, they were used to perform folk songs and legends. Psaltery was an important part of folk culture and religious rituals, and was also used to accompany singing. This instrument is considered one of the symbols of the Slavic musical heritage.',
                'The Gallic flute is an ancient wooden flute common in Europe during the Middle Ages and the Renaissance. It usually had a simple design and one or two finger holes, which made it possible to play melodies. This instrument was used in both folk and court music, often in ensembles and orchestras. The booming and expressive sounds of the Gallic flute were important in the ecclesiastical and secular culture of that time. Today it is considered one of the ancestors of modern flutes and is used in historical reconstruction.',
                'A horn is an ancient spiritual instrument made of wood, animal horns, or metal. It was used for signals, for military purposes, and in church music. In medieval European traditions, the horn was important in a military and ecclesiastical context, as well as for entertainment. The horn\'s sound is powerful and loud, which made it effective for transmitting signals over long distances.',
                'The trumpet is one of the most ancient wind instruments, known since ancient times. In ancient times it was used for military signals, church services and entertainment. Natural pipes without valves had limited pitch capabilities, but their powerful and vibrant voice made them important in orchestral and military ensembles. In the XVI–XVII centuries, the first valves appeared, which significantly expanded the range and capabilities of the instrument. Today, the trumpet is an essential element of symphony orchestras and brass ensembles.',
                'The bassoon is an ancient woodwind instrument that has existed since the 17th century. It consists of a long tube with valves and an expanding bottom end, which allows you to get deep low sounds. In the 17th and 19th centuries, the bassoon became an important part of orchestras and chamber ensembles. Its rich and warm sound is used to perform melodies and rhythmic figures. Over time, the design of the instrument has improved.',
                'The lyre is one of the oldest stringed instruments known since ancient times. It had a wooden frame with stretched strings that were plucked or struck with fingers or fingers using rings. The lyre was widely used to accompany singing, in religious and secular ceremonies. In the Middle Ages, it became an important instrument for poets and musicians, and also had symbolic significance. Her sounds were soft and expressive, and her construction was relatively simple.',
                'The Vivaldi Organ is a small portable organ created in the 18th century for solo performances and home use. It had one or two registers and mechanical mechanics that allowed melodies and accompaniments to be played. This instrument was widespread in Europe and was used in church and secular events. The organ\'s sound was distinguished by its brightness and richness of timbres, which made it popular at that time. In modern times, it is considered an important stage in the development of keyboard instruments.',
                'The lute is an ancient stringed instrument popular in Europe in the XVI–XVII centuries. It has a flat body with a resonator, a neck and nylon or metal strings. It was usually used for solo performances, accompaniment, and music instruction. Her sound range and playing technique allowed her to perform both simple melodies and complex polyphonic pieces. The lute played an important role in the development of European Renaissance and Baroque musical culture.',
                'The early clarinet appeared at the end of the 17th century and became the forerunner of the modern instrument. It had a wooden body and single-stage mechanics, which made it simpler and easier to manufacture. This clarinet was used in Baroque music to perform melodies and ensemble parts. Its characteristic warm and rich sound was different from modern versions. In the 19th century, the clarinet\'s design was significantly improved, making it one of the most important instruments of the orchestra.'
            ],
            
            // Секция статей
            articlesHeader: 'If you want to learn<br>something else new',
            
            // Футер
            footerHeader: '<span class="orange">Subscribe</span> to our news and<br>articles — together we will<br><span class="pinkish">open new horizons</span> of music!',
            footerMetaLeft: 'Content<br>Editor-in-chief: Jamilya Alekseevna Spiridonova<br><br>Technical support<br>info@help.media<br><br>Rules for the use of materials<br>User agreement<br>Cookie Policy',
            footerLinks: ['history', 'country', 'artists', 'instruments', 'articles'],
            footerPlaceholder: 'Your email address',
            footerButton: 'GO—'
        }
    };
    
    // Функция перевода на русский
    function translateToRussian() {
        // Основной экран
        if (textLine1) textLine1.textContent = ruTexts.textLine1;
        if (textLine2) textLine2.textContent = ruTexts.textLine2;
        if (textLine3) textLine3.textContent = ruTexts.textLine3;
        if (museumTitle1) museumTitle1.textContent = ruTexts.museumTitle1;
        if (museumTitle2) museumTitle2.textContent = ruTexts.museumTitle2;
        if (menuButton) menuButton.textContent = ruTexts.menuButton;
        if (langRuBtn) langRuBtn.innerHTML = ruTexts.langRu;
        if (langEnBtn) langEnBtn.innerHTML = ruTexts.langEn;
        
        // Секция истории
        if (historyHeader) historyHeader.innerHTML = ruTexts.historyHeader;
        if (historySubtitle) historySubtitle.textContent = ruTexts.historySubtitle;
        
        // Параграфы истории
        if (historyParagraphs.length > 0) {
            historyParagraphs.forEach((p, index) => {
                if (ruTexts.historyParagraphs[index]) {
                    p.textContent = ruTexts.historyParagraphs[index];
                }
            });
        }
        
        // Подзаголовки истории
        if (historySubheaders.length > 0) {
            historySubheaders.forEach((h2, index) => {
                if (ruTexts.historySubheaders[index]) {
                    h2.textContent = ruTexts.historySubheaders[index];
                }
            });
        }
        
        // Секция стран
        if (countryHeader) countryHeader.innerHTML = ruTexts.countryHeader;
        if (countrySubtitles.length > 0) {
            countrySubtitles.forEach((subtitle, index) => {
                if (ruTexts.countrySubtitles[index]) {
                    subtitle.textContent = ruTexts.countrySubtitles[index];
                }
            });
        }
        
        // Секция исполнителей
        if (artistHeader) artistHeader.innerHTML = ruTexts.artistHeader;
        if (searchInput) searchInput.placeholder = ruTexts.searchPlaceholder;
        if (searchButton) searchButton.innerHTML = `<i>${ruTexts.searchButtonText}</i>`;
        
        // Секция артефактов
        if (artifactsHeader) artifactsHeader.innerHTML = ruTexts.artifactsHeader;
        if (artifactTitles.length > 0) {
            artifactTitles.forEach((title, index) => {
                if (ruTexts.artifactTitles[index]) {
                    title.textContent = ruTexts.artifactTitles[index];
                }
            });
        }
        if (artifactDescriptions.length > 0) {
            artifactDescriptions.forEach((desc, index) => {
                if (ruTexts.artifactDescriptions[index]) {
                    desc.textContent = ruTexts.artifactDescriptions[index];
                }
            });
        }
        
        // Секция статей
        if (articlesHeader) articlesHeader.innerHTML = ruTexts.articlesHeader;
        if (prevBtn) prevBtn.innerHTML = '<i>назад</i>';
        if (nextBtn) nextBtn.innerHTML = '<i>дальше</i>';
        
        // Футер
        if (footerHeader) footerHeader.innerHTML = ruTexts.footerHeader;
        if (footerMetaLeft) footerMetaLeft.innerHTML = ruTexts.footerMetaLeft;
        if (footerLinks.length > 0) {
            footerLinks.forEach((link, index) => {
                if (ruTexts.footerLinks[index]) {
                    link.textContent = ruTexts.footerLinks[index];
                }
            });
        }
        if (footerInput) footerInput.placeholder = ruTexts.footerPlaceholder;
        if (footerButton) footerButton.innerHTML = `<i>${ruTexts.footerButton}</i>`;
    }
    
    // Функция перевода на английский
    function translateToEnglish() {
        // Основной экран
        if (textLine1) textLine1.textContent = enTexts.textLine1;
        if (textLine2) textLine2.textContent = enTexts.textLine2;
        if (textLine3) textLine3.textContent = enTexts.textLine3;
        if (museumTitle1) museumTitle1.textContent = enTexts.museumTitle1;
        if (museumTitle2) museumTitle2.textContent = enTexts.museumTitle2;
        if (menuButton) menuButton.textContent = enTexts.menuButton;
        if (langRuBtn) langRuBtn.innerHTML = enTexts.langRu;
        if (langEnBtn) langEnBtn.innerHTML = enTexts.langEn;
        
        // Секция истории
        if (historyHeader) historyHeader.innerHTML = enTexts.historyHeader;
        if (historySubtitle) historySubtitle.textContent = enTexts.historySubtitle;
        
        // Параграфы истории
        if (historyParagraphs.length > 0) {
            historyParagraphs.forEach((p, index) => {
                if (enTexts.historyParagraphs[index]) {
                    p.textContent = enTexts.historyParagraphs[index];
                }
            });
        }
        
        // Подзаголовки истории
        if (historySubheaders.length > 0) {
            historySubheaders.forEach((h2, index) => {
                if (enTexts.historySubheaders[index]) {
                    h2.textContent = enTexts.historySubheaders[index];
                }
            });
        }
        
        // Секция стран
        if (countryHeader) countryHeader.innerHTML = enTexts.countryHeader;
        if (countrySubtitles.length > 0) {
            countrySubtitles.forEach((subtitle, index) => {
                if (enTexts.countrySubtitles[index]) {
                    subtitle.textContent = enTexts.countrySubtitles[index];
                }
            });
        }
        
        // Секция исполнителей
        if (artistHeader) artistHeader.innerHTML = enTexts.artistHeader;
        if (searchInput) searchInput.placeholder = enTexts.searchPlaceholder;
        if (searchButton) searchButton.innerHTML = `<i>${enTexts.searchButtonText}</i>`;
        
        // Секция артефактов
        if (artifactsHeader) artifactsHeader.innerHTML = enTexts.artifactsHeader;
        if (artifactTitles.length > 0) {
            artifactTitles.forEach((title, index) => {
                if (enTexts.artifactTitles[index]) {
                    title.textContent = enTexts.artifactTitles[index];
                }
            });
        }
        if (artifactDescriptions.length > 0) {
            artifactDescriptions.forEach((desc, index) => {
                if (enTexts.artifactDescriptions[index]) {
                    desc.textContent = enTexts.artifactDescriptions[index];
                }
            });
        }
        
        // Секция статей
        if (articlesHeader) articlesHeader.innerHTML = enTexts.articlesHeader;
        if (prevBtn) prevBtn.innerHTML = '<i>back</i>';
        if (nextBtn) nextBtn.innerHTML = '<i>farther</i>';
        
        // Футер
        if (footerHeader) footerHeader.innerHTML = enTexts.footerHeader;
        if (footerMetaLeft) footerMetaLeft.innerHTML = enTexts.footerMetaLeft;
        if (footerLinks.length > 0) {
            footerLinks.forEach((link, index) => {
                if (enTexts.footerLinks[index]) {
                    link.textContent = enTexts.footerLinks[index];
                }
            });
        }
        if (footerInput) footerInput.placeholder = enTexts.footerPlaceholder;
        if (footerButton) footerButton.innerHTML = `<i>${enTexts.footerButton}</i>`;
    }
    
    // Обработчики кликов
    if (langRuBtn) {
        langRuBtn.addEventListener('click', function() {
            translateToRussian();
        });
    }
    
    if (langEnBtn) {
        langEnBtn.addEventListener('click', function() {
            translateToEnglish();
        });
    }
    
});
