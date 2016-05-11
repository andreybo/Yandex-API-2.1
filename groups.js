// Группы объектов
var groups = [
        {
            name: "Минск и Минская область",
            style: "islands#redIcon",
            center: [53.92661, 27.593344],
            items: [
			     {
                    name: "Магазин &quot;Удачник&quot;",
                    addresses: [
                        {
							center: [53.92661, 27.593344],
							address: "Минск, ул. Сурганова, 36",
							phone: "8 (017) 292-69-91, 8 (029) 655-22-99, 8 (029) 761-36-13, 8 (017) 292-93-99",
							style: "islands#darkGreenIcon"
                        },
                        {
							center: [53.873627, 27.631459],
							address: "Минск, пр. Партизанский, 56/2",
							phone: "8 (017) 346-81-64, 8 (017) 346-82-12, 8 (029) 346-81-64, 8 (029) 346-82-12",
							style: "islands#darkGreenIcon"
                        },
                        {
							center: [53.911073, 27.415424],
							address: "Минск, ул. Каменногорская, 3",
							phone: "8 (029) 868-20-19, 8 (029) 180-31-54",
							style: "islands#darkGreenIcon"
                        }
                    ]
                },
				{
                    center: [53.851229784108, 27.47682350000002],
                    name: "Керхер-Центр",
					address: "Минск, пр-т Дзержинского , 119, м. Малиновка",
					phone: "8  (029) 143 99 99",
					style: "islands#yellowIcon"
                },
				{
                    name: "ТЦ &quot;Корона&quot;",
                    addresses: [
						{
							center: [53.908018, 27.527318],
							address: "Минск, ул. Кальварийская, 24",
							phone: "8 (017) 226-52-19",
							style: "islands#grayDotIcon"
						},
						{
							center: [53.92634, 27.5174],
							address: "Минск, пр. Победителей, 65",
							phone: "8 (017) 309-54-50",
							style: "islands#grayDotIcon"
						},
						{
							center: [53.93638, 27.673186],
							address: "Минск, пр. Независимости, 154",
							phone: "8 (017) 269-64-10",
							style: "islands#grayDotIcon"
						},
						{
							center: [53.842417, 27.529213],
							address: "Минск, ул. Корженевского, 26",
							phone: "",
							style: "islands#grayDotIcon"
						}
                    ]
                },
				{
                    center: [53.946949, 27.682178],
                    name: "Керхер-Центр",
					address: "Минск, ул.Шафарнянская, 11, м. Уручье",
					phone: "8 (044) 555 55 71",
					style: "islands#yellowIcon"
                },
				{
                    center: [53.905583, 27.433264],
                    name: "Строительный гипермакет &quot;Материк&quot;",
					address: "Минск, ул. Притыцкого, 101",
					phone: "8 (017) 314-22-29",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.957169, 27.605606],
                    name: "Магазин &quot;Керхер - Зеленый луг&quot;",
					address: "Минск, ул. Гамарника , 30 пом.318",
					phone: "8 (029) 644 76 84",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.88825, 27.520715],
                    name: "Магазин &quot;Штутгарт&quot;",
					address: "Минск, пр. Дзержинского, 11",
					phone: "8 (017) 236-72-22, 8 (029) 638-88-72, 8 (029) 755-67-00",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.873516, 27.416178],
                    name: "Техноплюс",
					address: "Минск, Улица монтажников 2",
					phone: "8 017 201 16 32",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.909694, 27.420517],
                    name: "Магазин &quot;Сквер 56&quot;",
					address: "Минск, ул. Неманская, 3",
					phone: "8 (017) 393-06-66, 8 (044) 741-08-48, 8 (029) 541-08-48",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.871578284026434, 27.57279950000003],
                    name: "Техноплюс",
					address: "Минск, Улица Денисовская 8",
					phone: "8 017 221 00 64",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.894761, 27.646425],
                    name: "ТЦ &quot;Керхер на Ваупшасова 10&quot;",
					address: "Минск, ул. Ваупшасова, 10",
					phone: "8 (029) 345-66-61, 8 (029) 773-33-55, 8 (044) 773-33-55",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.91783, 27.58914],
                    name: "ЦУМ",
					address: "Минск, пр-т Независимости 58",
					phone: "",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.872518, 27.560304],
                    name: "Магазин &quot;Удачная техника&quot;",
					address: "Минск, ул. Володько, 9",
					phone: "8 (017) 291-44-34, 8 (029) 269-79-16, 8 (029) 198-22-02",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.892097, 27.585097],
                    name: "Торгреминдустрия",
					address: "Минск, ул. Смоленская , 15",
					phone: "8 (044) 586 68 88",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.934811, 27.602192],
                    name: "Магазин &quot;Садовая техника АгроХ&quot;",
					address: "Минск, ул. Я. Коласа, 63",
					phone: "8 (017) 262-64-66, 8 (029) 614-16-16, 8 (033) 614-16-16",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.894219, 27.589364],
                    name: "Висбелис",
					address: "Минск, ул. Захарова, 104в, пом. 3",
					phone: "8 (029) 374 05 05",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.965598, 27.645356],
                    name: "Магазин &quot;МастерПро&quot;",
					address: "д. Боровая, 7А",
					phone: "8 (017) 511-00-05",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.848882, 27.706532],
                    name: "Магазин &quot;Хозяин&quot;",
					address: "д.Большой Тростенец, ул. Зеленая , 1А",
					phone: "8 (029) 676-66-68, 8 (029) 707-73-07, 8 (017) 227-27-22",
					style: "islands#grayDotIcon"
                },
				{
                    center: [54.2366, 28.508197],
                    name: "ТЦ &quot;Корона&quot;",
					address: "Борисов, ул. III Интернационала, 5",
					phone: "8 (0177) 70-88-02",
					style: "islands#grayDotIcon"
                },
				{
                    center: [54.198816, 28.499205],
                    name: "ТЦ &quot;Практик&quot;",
					address: "Борисов, ул. Демина, 39",
					phone: "",
					style: "islands#grayDotIcon"
                },
				{
                    center: [54.307069, 26.851704],
                    name: "магазин &quot;МастерПро&quot;",
					address: "Молодечно, ул. Волынца, 12б, к. 2-2",
					phone: "8 (0176) 70-20-08, 8 (0176) 77-46-16",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.042481, 27.55813],
                    name: "Магазин &quot;Стройинструмент&quot;",
					address: "Слуцк , ул. 14 Партизан, 128",
					phone: "8 (0179) 55-79-62",
					style: "islands#grayDotIcon"
                },
				{
                    center: [52.786776, 27.5273],
                    name: "Магазин &quot;Удачник&quot;",
					address: "Солигорск, ул. К.Заслонова, 46а",
					phone: "8 (0174) 26-17-18, 8 (029) 734-44-01, 8 (044) 557-15-00",
					style: "islands#grayDotIcon"
                },
				{
                    center: [52.789156, 27.535034],
                    name: "ТЦ &quot;Корона&quot;",
					address: "Солигорск, ул. К. Заслонова, 29",
					phone: "",
					style: "islands#grayDotIcon"
                }
            ]},
        {
            name: "Брест и Брестская область",
            style: "islands#redIcon",
            center: [52.094324, 23.732448],
            items: [
				{
                    center: [52.102041, 23.779645],
                    name: "Керхер-Центр",
					address: "Брест, ул. Московская, 281",
					phone: "8  (033) 664 29 54",
					style: "islands#yellowIcon"
                },
                {
                    center: [52.094324, 23.732448],
                    name: "Магазин &quot;Удачник&quot;",
                    address: "Брест, ул. Московская , 202",
					phone: "8 (029) 398-58-55, 8 (029) 200-21-71",
					style: "islands#darkGreenIcon"
                },
				{
                    center: [53.132417, 25.990705],
                    name: "Белинструментторг",
					address: "Барановичи, ул. Вильчковского , 3а",
					phone: "8 (029) 154 81 79",
					style: "islands#grayDotIcon"
                },
                {
                    center: [52.097145, 23.744782],
                    name: "ТЦ &quot;Корона&quot;",
					address: "Брест, ул. Московская, 210",
					phone: "8 (016) 241-95-99",
					style: "islands#grayDotIcon"
                },
				{
                    center: [52.243727, 26.80447],
                    name: "Магазин &quot;Крепеж&quot;",
					address: "Лунинец, ул. Привокзальная , пов. 22",
					phone: "8 (044) 774 78 97",
					style: "islands#grayDotIcon"
                },
                {
                    center: [52.125535, 26.065903],
                    name: "Денико-Профит",
					address: "Пинск, ул. Солнечная, 1, пав. 107",
					phone: "8 (029) 992-99-96",
					style: "islands#grayDotIcon"
                },
				{
                    center: [52.203829289085235, 24.32892049999993],
                    name: "Торговый центр &quot;Полесье&quot;",
					address: "Кобрин, ул. Николаева, 50",
					phone: "",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.153747, 25.994891],
                    name: "ТЦ &quot;Корона&quot;",
					address: "Барановичи, пр. Советский, 2",
					phone: "",
					style: "islands#grayDotIcon"
                }

				]},
        {
            name: "Витебск и Витебская область",
            style: "islands#redIcon",
            center: [55.16009777951226, 30.167259499999997],
            items: [
			    {
                    center: [55.17326177941104, 30.24446099999996],
                    name: "Керхер-центр",
                    address: "Витебск, ул. П. Бровки 4б",
					phone: " 8 (029) 769 05 65",
					style: "islands#yellowIcon"
                },
                {
                    center: [55.16009777951226, 30.167259499999997],
                    name: "ТЦ &quot;Корона&quot;",
                    address: "Витебск, ул. Бешенковичское шоссе, 3-1",
					phone: "8 (021) 254-05-03",
					style: "islands#grayDotIcon"
                },
                {
                    center: [55.29398119813013, 29.618406999999976],
                    name: "Магазин &quot;Метан&quot;",
					address: "г.п. Шумилино, ул. Юбилейная, 28",
					phone: "8 (02130) 4 25 01",
					style: "islands#grayDotIcon"
                },
                {
                    center: [54.50315528187944, 30.436520499999983],
                    name: "Элбиком",
					address: "Орша, ул. Могилевская, 24",
					phone: "8 (0216) 22-47-41",
					style: "islands#grayDotIcon"
                },
				{
                    center: [55.187820279383544, 30.255070500000013],
                    name: "Магазин электроинструмента и бензотехники",
					address: "Витебск, ул. С. Панковой 1Б, павильоны 132/133 (Рынок стройматериалов) ",
					phone: "8 (029) 622-72-44",
					style: "islands#grayDotIcon"
                },
				{
                    center: [55.180644779368706, 30.22310799999998],
                    name: "Магазин электроинструмента и бензотехники",
					address: "Витебск, ул. Офицерская 2а, павильоны 148/149 (Рынок Центральный)",
					phone: "8 (029) 622-72-44",
					style: "islands#grayDotIcon"
                },
				{
                    center: [55.484055778225176, 28.78753749999996],
                    name: "Керхер-центр",
					address: "Полоцк, пр-т Ф. Скорины 37",
					phone: "8 (029) 248 09 19",
					style: "islands#grayDotIcon"
                }
            ]},
        {
            name: "Гомель и Гомельская область",
            style: "islands#redIcon",
            center: [52.416208, 30.959259],
            items: [
                 {
                    center: [52.416208, 30.959259],
                    name: "Магазин &quot;Удачник&quot;",
                    address: "Гомель, пр. Речицкий, 5В-45",
					phone: "8 (029) 180-31-54, 8 (033) 302-60-75",
					style: "islands#darkGreenIcon"
                },
				{
                    center: [52.454569, 30.994114],
                    name: "Керхер-Центр",
					address: "Гомель, ул. Советская, 97/3",
					phone: "8 (029) 179 09 64",
					style: "islands#yellowIcon"
                },
                {
                    center: [52.437838, 31.00528],
                    name: "Магазин &quot;Удачник&quot;",
					address: "Гомель, ул. Советская, 52",
					phone: "8 (0232) 71-03-62, 21-20-16, 8 (029) 500-03-35, 8 (029) 151-29-29",
					style: "islands#darkGreenIcon"
                },
				{
                    center: [52.483365, 30.993476],
                    name: "Магазин &quot;Стройка&quot;",
					address: "Гомель, ул. Федюнинского , 19а",
					phone: "8 (044) 56 56 105",
					style: "islands#grayDotIcon"
                },
				{
                    center: [52.368631, 30.394659],
                    name: "Магазин &quot;Дом торговли Ведричь&quot;",
					address: "Речица, ул. Советская, 51",
					phone: "8 (029) 379 09 11",
					style: "islands#grayDotIcon"
                },
                {
                    center: [52.42416, 31.014272],
                    name: "Строительный магазин &quot;КСК&quot;",
					address: "Гомель, ул. Междугородняя, 7",
					phone: "8 (029) 868-20-19, 8 (029) 180-31-54",
					style: "islands#grayDotIcon"
                },
				{
                    center: [52.367724, 30.398369],
                    name: "Магазин &quot;Товары для дома&quot;",
					address: "Речица, ул. Советская , 83",
					phone: "8 (029) 376 20 97",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.165225, 29.187746],
                    name: "ТЦ &quot;Корона&quot;",
					address: "Бобруйск, ул. 50 лет ВЛКСМ, 33",
					phone: "8 (0225) 70-70-85",
					style: "islands#grayDotIcon"
                },
				{
                    center: [52.370836, 30.426316],
                    name: "Торговый дом &quot;Речицкий метизный завод&quot;",
					address: "Речица, ул. Фрунзе , 2",
					phone: "8 (044) 704 78 02",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.087746, 30.054198],
                    name: "Магазин &quot;Керхер&quot;",
					address: "Рогачев, ул. Октябрьская, 18",
					phone: "8 (029) 382 52 26",
					style: "islands#grayDotIcon"
                },
				
				
				{
                    name: "Сеть магазинов &quot;Техноград&quot;",
                    addresses: [
						{
							center: [52.037541, 29.264552],
							address: "Мозырь, 1-ый пер.Интернациональный, 50",
							phone: "8 (029) 833 33 50, 8 (0236) 32 65 83",
							style: "islands#grayDotIcon"
						},
						{
							center: [52.04877, 29.266402],
							address: "Мозырь, ул.Советская,  138",
							phone: "8 (029) 833 33 50, 8 (0236) 32 29 88",
							style: "islands#grayDotIcon"
						},
						{
							center: [52.132999, 29.343298],
							address: "Калинковичи, ул. 60 лет БССР, 2а",
							phone: "8 (029) 833 33 50, 8 (02345) 33 9 81",
							style: "islands#grayDotIcon"
						},
						{
							center: [51.80728, 29.491116],
							address: "г. Наровля, ул.Минская, 43",
							phone: "8 (029) 833 33 50, 8 (02355) 2 62 63",
							style: "islands#grayDotIcon"
						},
						{
							center: [52.204977, 27.864384],
							address: "г. Житковичи, ул. Школьная , 3",
							phone: "8 (029) 833 33 50, 8 (02353) 3 06 48",
							style: "islands#grayDotIcon"
						}
                    ]
                },
				
				{
                    center: [52.892842, 30.038531],
                    name: "Техноплюс",
					address: "г. Жлобин, Мкр 20, д 30",
					phone: "8 044 733 70 84",
					style: "islands#grayDotIcon"
                },
				{
                    center: [52.36383578862293, 30.360927499999985],
                    name: "Техноплюс",
					address: "Речица, Ул. Пролетарская 118, ",
					phone: "8 044 788 37 16",
					style: "islands#grayDotIcon"
                }
            ]},
		{
			name: "Гродно и Гродненская область",
            style: "islands#redIcon",
            center: [53.663495, 23.834658],
            items: [
                {
                    center: [53.663495, 23.834658],
                    name: "ТЦ &quot;Корона&quot;",
                    address: "Гродно, пр. Я. Купалы, 16А",
					phone: "",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.672404, 23.851124],
                    name: "Керхер-Центр",
					address: "Гродно, ул. Белуша, 20б",
					phone: "8 (029) 179 09 33",
					style: "islands#yellowIcon"
                },
                {
                    center: [53.676164, 23.847791],
                    name: "Магазин &quot;Эксперт&quot;",
					address: "Гродно, пр. Косманавтов, 2/1",
					phone: "8 (029) 583-28-99",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.894071, 25.302299],
                    name: "Магазин &quot;Центр профессионального инструмента и садовой техники Bosсh&quot;",
					address: "Лида, ул. Советская , 21",
					phone: "8 (029) 867 78 68",
					style: "islands#grayDotIcon"
                },
                {
                    center: [53.4145, 24.544291],
                    name: "Магазин &quot;Мир&quot;",
					address: "Мосты, ул. Советская , 35",
					phone: "8 (01515) 6-17-18, 8 (033) 602-06-58",
					style: "islands#grayDotIcon"
                },
				{
                    center: [53.598348, 25.829888],
                    name: "Магазин &quot;Husqvarna&quot;",
					address: "Новогрудок, ул. Свердлова, 1",
					phone: "8 (01597) 2-24-91, 8 (029) 397-37-79",
					style: "islands#grayDotIcon"
                }
            ]},
        {
			name: "Могилев и Могилевская область",
            style: "islands#redIcon",
            center: [53.908389, 30.347067],
            items: [
			    {
                    center: [53.873627, 30.345279],
                    name: "Керхер-Центр",
					address: "Могилев, пр-т Пушкинский, 28",
					phone: "8 (029) 169 09 29",
					style: "islands#yellowIcon"
                },
                {
                    center: [53.908389, 30.347067],
                    name: "Магазин &quot;Удачник&quot;",
                    address: "Могилев, пр. Мира, 59 А",
					phone: "8 (0222) 70-70-14, 8 (8029) 500-03-35, 8 (029) 151-29-29",
					style: "islands#darkGreenIcon"
                },
				{
                    center: [53.13237878632325, 29.221136500000018],
                    name: "Толока Инструмент сервис",
					address: "Бобруйск, ул. К. Маркса, 81",
					phone: "8 (01597) 2-24-91, 8 (029) 397-37-79",
					style: "islands#grayDotIcon"
                },
                {
                    center: [53.908517, 30.306364],
                    name: "РемТоргИнструмент",
					address: "Могилев, ул.Лазаренко , 73В",
					phone: "8 (029) 638-66-52, 8 (029) 546-64-66",
					style: "islands#grayDotIcon"
                }
            ]}

    ];

