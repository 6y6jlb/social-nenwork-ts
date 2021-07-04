import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../../Redux/news-reducer";
import {AppStateType} from "../../../Redux/reduxStore";
import {ArticleType} from "../../../api/newsAPI";
import Article from "./Article/Article";
import Preloader from "../../common/preloader/Preloader";
import style from './NewsFeed.module.css'

const articles = [
    {
        "source": {},
        "author": "cosmonauta",
        "title": "La hibernación de los lagartos impide la apertura de la gigafactoría alemana de Tesla",
        "description": "La apertura de la gigafactoría de Tesla en Berlín, que estaba preparada para el 1 de julio, se retrasa indefinidamente. Uno de los principales motivos ha sido la ferviente oposición de grupos ecologistas, preocupados por el impacto de la planta en el ecosiste…",
        "url": "https://www.meneame.net/m/actualidad/hibernacion-lagartos-impide-apertura-gigafactoria-alemana-tesla-1",
        "urlToImage": "https://www.meneame.net/backend/media?type=link&id=3524339&version=0&ts=1625396706&image.jpeg",
        "publishedAt": "2021-07-04T11:02:54Z",
        "content": ""
    },
    {
        "source": {
            "id": null,
            "name": "M3.idg.se"
        },
        "author": null,
        "title": "Tesla slår eget rekord – levererar 200 000 bilar på ett kvartal",
        "description": "Tesla har nått en ny symbolisk milstolpe.",
        "url": "https://m3.idg.se/2.1022/1.753276/tesla-slar-eget-rekord--levererar-200-000-bilar-pa-ett-kvartal",
        "urlToImage": "https://www.idg.se/editorial/1200/path/1.753276.1625394885!imageUploader/753756212.jpg",
        "publishedAt": "2021-07-04T10:34:45Z",
        "content": "Under andra kvartalet 2021 levererade Tesla för första gången mer än 200 000 bilar inom ett kvartal och slår därmed sitt eget rekord, skriver Tesla i ett pressmeddelande. Tesla levererade närmare bes… [+306 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Www.ad.nl"
        },
        "author": "Hans Renier",
        "title": "Koers van Dogecoin stijgt niet na tweets van Elon Musk: is zijn invloed voorbij?",
        "description": "De invloed van Elon Musk op het sentiment van beleggers in crpytomunten lijkt te verminderen. Dat blijkt althans uit zijn laatste tweets over Dogecoin, afgelopen donderdag. Het directe effect daarvan bleef uit. Dat is opmerkelijk, aangezien tweets van Musk de…",
        "url": "https://www.ad.nl/geld/koers-van-dogecoin-stijgt-niet-na-tweets-van-elon-musk-is-zijn-invloed-voorbij~a96a742c/",
        "urlToImage": "https://images0.persgroep.net/rcs/QWElxcPdxAQNuA3h3p9AbnEFRWQ/diocontent/204655412/_focus/0.67/0.32/_fill/1200/630/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7",
        "publishedAt": "2021-07-04T10:00:45Z",
        "content": "Elon Musk had de afgelopen maanden een gigantische invloed op de ups en downs in de cryptowereld. Meerdere keren deden zijn tweets de koers van bitcoin exploderen of crashen. Ook bij Dogecoin was dat… [+2936 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Loveday Morris, Luisa Beck",
        "title": "At Tesla's 'Gigafactory' site in Germany, Elon Musk comes up against green activism and red tape",
        "description": "Musk expected to begin production this month. His foes have raised alarms over possible threats to water and wildlife.",
        "url": "https://www.washingtonpost.com/world/europe/elon-musk-berlin-tesla-gigafactory/2021/07/03/6463fc26-cf99-11eb-a224-bd59bd22197c_story.html",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FGMU5XWZ5EI6XDEHVVXSPEMMPA.jpg&w=1440",
        "publishedAt": "2021-07-04T10:00:00Z",
        "content": "The $7 billion plant which Tesla has nearly completed despite the pending approvals is now expected to be in production by the end of the year at the earliest.\r\nThat's still lightning speed compared … [+9406 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Giga"
        },
        "author": "Felix Gräber",
        "title": "Billig-Tesla kommt: Für 21.000 Euro wird das E-Auto VW und Co. unbequem",
        "description": "Tesla will nicht länger nur die Mittelklasse und das Hochpreissegment bedienen: 2023 soll für 21.000 Euro das bisher günstigste E-Auto der Amerikaner starten. Trotzdem sollen die Kunden nicht auf eine der wichtigsten Eigenschaften verzichten.",
        "url": "https://www.giga.de/news/billig-tesla-kommt-fuer-21.000-euro-wird-das-e-auto-vw-und-co.-unbequem/",
        "urlToImage": "https://crops.giga.de/d1/94/d1/82ca55e3d90fc5066e65e38e53_YyAyODIweDE0NzMrOTArMTA3AnJlIDEyMDAgNjI3A2Q0OGFlOWM2NjM1.jpg",
        "publishedAt": "2021-07-04T09:34:15Z",
        "content": "Tesla will nicht länger nur die Mittelklasse und das Hochpreissegment bedienen: 2023 soll für 21.000 Euro das bisher günstigste E-Auto der Amerikaner starten. Trotzdem sollen die Kunden nicht auf ein… [+2312 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Ilpost.it"
        },
        "author": null,
        "title": "Perché l’industria dei bitcoin sta lasciando la Cina",
        "description": "Il governo ha avviato una dura repressione contro i \"miner\", che verificano le transazioni, provocando un grande cambiamento per la famosa criptovaluta",
        "url": "https://www.ilpost.it/2021/07/04/migrazione-miner-bitcoin-cina-texas/",
        "urlToImage": "https://cdn.ilpost.it/wp-content/uploads/2021/06/AP18059739403795.jpg?x24176",
        "publishedAt": "2021-07-04T09:11:13Z",
        "content": "A causa della repressione sempre più decisa del governo cinese, nelle ultime settimane molti miner di bitcoin hanno interrotto le proprie operazioni nel paese. Stando a quanto scritto da diversi medi… [+13846 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "netzwelt"
        },
        "author": "Michael Knott",
        "title": "Wochenrückblick: Microsoft schielt neidisch auf Otto Waalkes' Videotexttafel - netzwelt.de",
        "description": "Im Wochenrückblick geht es wieder das voll Themenspektrum der Netzwelt in komprimierter Form: Vorhang auf für die meistgeklickten News der Kalenderwoche 26!",
        "url": "https://www.netzwelt.de/news/190837-wochenrueckblick-microsoft-schielt-neidisch-otto-waalkes-videotexttafel.html",
        "urlToImage": "https://img.netzwelt.de/dw1600_dh900_sw1520_sh855_sx7_sy1_sr16x9_nu2/picture/original/2021/06/otto-catweazle-310356.jpg",
        "publishedAt": "2021-07-04T09:06:27Z",
        "content": "TECHNOLOGY\r\nIm Wochenrückblick geht es wieder das voll Themenspektrum der Netzwelt in komprimierter Form: Vorhang auf für die meistgeklickten News der Kalenderwoche 26!\r\nIn den 1980er-Jahren traute s… [+6855 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Presse-citron"
        },
        "author": "Romain Vitt",
        "title": "Yan Liu, DG de Xiaomi : “un smartphone à 200€, ça répond aux besoins des Français”",
        "description": "Smartphones, trottinettes, TV, aspirateurs. Xiaomi est partout. Trois ans après son arrivée en France, c'est l'heure du premier bilan. Yan Liu, PDG de Xiaomi France, s'est prêté au jeu de l'interview grand format. Et il y va franco.",
        "url": "https://www.presse-citron.net/?p=441304",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2021/07/interview-yan-liu-xiaomi.jpg",
        "publishedAt": "2021-07-04T09:00:21Z",
        "content": "Rendez-vous était pris au siège de Xiaomi France, à Boulogne-Billancourt. Au 8e étage, Yan Liu, Directeur Général de l’entreprise, m’attend. Souriant, il me demande si le trajet n’a pas été trop long… [+26060 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Tomshw.it"
        },
        "author": "Alessandro Martini",
        "title": "Ford Mustang Mach-E supera le vendite del modello a benzina",
        "description": "La Mustang Mach-E ottiene altri successi negli Stati Uniti e in Norvegia, superando i modelli tradizionali nell'aspetto che conta di più: le vendite.",
        "url": "https://www.tomshw.it/automotive/ford-mustang-mach-e-supera-le-vendite-del-modello-a-benzina/",
        "urlToImage": "https://www.tomshw.it/images/images/2021/07/ford-mustang-mach-e-vendite-giugno-2021-172147.768x432.jpg",
        "publishedAt": "2021-07-04T08:59:21Z",
        "content": "AutoIn tanti dubitavano dellintero progetto ma sembra che Ford abbia fatto centro con la sua Mustang Mach-E. Il mese scorso, per la prima volta nella storia, la versione elettrica dello storico march… [+1779 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Silodrome.com"
        },
        "author": "Ben Branch",
        "title": "The Road To Monterey: A Free, Award-Winning Porsche Racing Documentary",
        "description": "The Road To Monterey is an award-winning feature film about vintage racing that centers on Australian racing driver Ron Goodman and his highly-tuned Porsche 356...\nThe post The Road To Monterey: A Free, Award-Winning Porsche Racing Documentary appeared first …",
        "url": "https://silodrome.com/the-road-to-monterey/",
        "urlToImage": "https://silodrome.com/wp-content/uploads/2021/07/Porsche-356-Drifting-768x488.jpg",
        "publishedAt": "2021-07-04T08:30:38Z",
        "content": "Reading time: about 2 minutes.\r\nThe Road To Monterey is an award-winning feature film about vintage racing that centers on Australian racing driver Ron Goodman and his highly-tuned Porsche 356 race c… [+2564 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Epravda.com.ua"
        },
        "author": "ukrpravda@gmail.com (Українська правда)",
        "title": "Продажі Tesla у другому кварталі 2021 року зросли на 222%",
        "description": "У другому кварталі 2021 року - за тримісячний період з квітня по червень автомобільна компанія Ілона Маска випустила сумарно 206 421 автомобілів і доставила покупцям 201 250 машин, для виробника це новий абсолютний рекорд.",
        "url": "https://www.epravda.com.ua/news/2021/07/4/675596/",
        "urlToImage": "https://eimg.pravda.com/images/doc/6/7/675596_fb_image_ukr_2021_07_04_11_23_22.png",
        "publishedAt": "2021-07-04T08:29:04Z",
        "content": "© 2005-2021, . ( - - ) \" \".\r\n\" , \"-\", / - , \"-\". \"-\" .\r\n PROMOTED . , .\r\n, , .\r\n, . ."
    },
    {
        "source": {
            "id": null,
            "name": "Excelsior.com.mx"
        },
        "author": "adrian.miron",
        "title": "Lanzan condena por incendio en Golfo de México; activistas y políticos advierten riesgo",
        "description": "Ilian Cedeño\r\nCIUDAD DE MÉXICO.\r\n\nAnte el incendio provocado por la ruptura de un gasoducto submarino en el Golfo de México, a cargo de Pemex, activistas ambientales y funcionarios internacionales condenaron el hecho y pidieron una investigación.\r\n\nLa activis…",
        "url": "https://www.excelsior.com.mx/nacional/lanzan-condena-por-incendio-en-golfo-de-mexico-activistas-y-politicos-advierten-riesgo",
        "urlToImage": "https://cdn2.excelsior.com.mx/media/pictures/2021/07/04/2605670.jpg",
        "publishedAt": "2021-07-04T08:23:25Z",
        "content": "CIUDAD DE MÉXICO.\r\nAnte el incendio provocado por la ruptura de un gasoducto submarino en el Golfo de México, a cargo de Pemex, activistas ambientales y funcionarios internacionales condenaron el hec… [+3462 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Gazeta.ru"
        },
        "author": "Газета.Ru",
        "title": "В Госдуме отреагировали на сравнение российской армии с \"Запорожцем\"",
        "description": "Депутат Госдумы от крымского региона Михаил Шеремет в комментарии для РИА \"Новости\" назвал безграмотным сравнение российской армии с автомобилем \"Запорожец\". \n\n\"Во-первых, автомобиль \"Запорожец\" никогда ...",
        "url": "https://www.gazeta.ru/army/news/2021/07/04/16196204.shtml",
        "urlToImage": "https://img.gazeta.ru/files3/60/13409060/RIAN_6338176.HR-pic905-895x505-34215.jpg",
        "publishedAt": "2021-07-04T08:08:52Z",
        "content": "«» «».\r\n«-, «» , . Aurus. &lt;...&gt; -, — , , — », — .\r\n , , , .\r\n , — , «» Tesla.\r\n« Tesla, , », — .\r\n , ."
    },
    {
        "source": {
            "id": null,
            "name": "Hwupgrade.it"
        },
        "author": null,
        "title": "Elon Musk annuncia: anche Tesla Cybertruck avrà le ruote posteriori sterzanti",
        "description": "Hanno fatto molto parlare di sé Hummer EV e Rivian R1T per le loro capacità di muoversi in diagonale e girare su sé stessi. Elon Musk non ci sta e annuncia \"Aggiungeremo le ruote posteriori sterzanti a Tesla Cybertruck\"",
        "url": "https://auto.hwupgrade.it/news/tecnologia/elon-musk-annuncia-anche-tesla-cybertruck-avra-le-ruote-posteriori-sterzanti_98944.html",
        "urlToImage": "https://www.hwupgrade.it/i/n/tesla-cybertruck-elon-musk-austin_720.jpg",
        "publishedAt": "2021-07-04T08:01:01Z",
        "content": "Tesla Cybertruck è certamente il pickup elettrico che più ha fatto parlare di sé, per un mix di design futuristico e controverso e per le specifiche tecniche. L'Hummer EV di GMC è però riuscito a rub… [+1063 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "MacGeneration"
        },
        "author": "Nicolas Furno",
        "title": "Tesla fait chauffer ses neurones pour sa vision à long terme",
        "description": "La plupart des voitures modernes disposent d’un mode automatique pour leurs essuie-glaces. Les balais s’activent dès que de la pluie est détectée et ils s’arrêtent quand le beau temps revient. Le plus souvent, cette fonction est permise par l’ajout d’un capte…",
        "url": "https://www.macg.co/mobilites/2021/06/tesla-fait-chauffer-ses-neurones-pour-sa-vision-long-terme-122479",
        "urlToImage": "https://cdn.mgig.fr/2021/06/mga-669f358c-w375-w1500-w750_accroche.jpg",
        "publishedAt": "2021-07-04T08:00:42Z",
        "content": "La plupart des voitures modernes disposent dun mode automatique pour leurs essuie-glaces. Les balais sactivent dès que de la pluie est détectée et ils sarrêtent quand le beau temps revient. Le plus s… [+1277 chars]"
    },
    {
        "source": {
            "id": "lenta",
            "name": "Lenta"
        },
        "author": "Ксения Богачева",
        "title": "В Госдуме ответили на сравнение российской армии с «Запорожцем»",
        "description": "Сравнение российской армии с «Запорожцем» демонстрирует безграмотность. Таким образом депутат Госдумы Михаил Шеремет ответил на слова капитана первого ранга ВМС США в отставке Гарри Табаха украинским СМИ. Он подчеркнул, что «Запорожец» — украинский, а не росс…",
        "url": "https://lenta.ru/news/2021/07/04/zap/",
        "urlToImage": "https://icdn.lenta.ru/images/2021/07/04/10/20210704101430515/share_b6c24c5a2538032a51e18064efcd62c8.jpeg",
        "publishedAt": "2021-07-04T07:38:00Z",
        "content": "«» . , .\r\n , «» , . « Aurus», . Tesla, , «, ».\r\n-, , « , » . , , .\r\n «», Tesla, Defender . , , - .\r\n , , ."
    },
    {
        "source": {
            "id": null,
            "name": "Shiftdelete.net"
        },
        "author": "Hilal Bardakcı",
        "title": "Musk, bir parazitin insanları yöneteceğini iddia etti",
        "description": "Elon Musk, bir parazitin insan beynini kontrol edeceğine dair görüşlerini belirtti. Toksoplazmoz insanlarda çeşitli sorunlara neden oluyor.\nBu içerik ilk olarak Musk, bir parazitin insanları yöneteceğini iddia etti adresinde yayınlandı Teknoloji Haberleri - S…",
        "url": "https://shiftdelete.net/elon-musk-bir-parazitin-insanlari-yonetecegini-iddia-etti",
        "urlToImage": "https://shiftdelete.net/wp-content/uploads/2021/07/elon-musk-bir-parazitin-insanlari-yonetecegini-iddia-etti4.jpg",
        "publishedAt": "2021-07-04T07:34:34Z",
        "content": "Milyarder i insan Elon Musk, zaman zaman rahatsz edici Twitter paylamlar yapyor. Tesla ve SpaceX CEO’sunu özellikle kripto para borsalarn etkileyen yorumlar ile biliyoruz. Ancak bazen farkl konularda… [+2054 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "9News"
        },
        "author": "Kate Kachor • Senior Journalist",
        "title": "COVID children vaccines for Delta strain in Australia",
        "description": "<p>A coronavirus vaccine is unlikely to be rolled out for school children in Australia until the end of 2022, despite the Delta strain potentially being more infectious among the young.</p>",
        "url": "https://www.9news.com.au/national/covid-children-vaccines-for-delta-strain-in-australia/ae7f6fc0-26f6-406b-9608-75582cf330bc",
        "urlToImage": "https://imageresizer.static9.net.au/QcE1Xt5bv7rYkh78rszGoZpeilc=/0x190:914x704/1200x628/smart/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F4ab382b1-ca42-4512-a835-25792d2f0cc4",
        "publishedAt": "2021-07-04T07:31:11Z",
        "content": "Auto news: Tesla planning to make 'Chinese-style' vehicles - caradvice.com.au"
    },
    {
        "source": {
            "id": "marca",
            "name": "Marca"
        },
        "author": "M.C.",
        "title": "Un Tesla Model S Plaid se convierte en una bola de fuego mientras circulaba",
        "description": "Todo lo que atañe a Tesla se hace viral. Lo bueno y lo malo. En la balanza está el hecho de que la compañía con base en Fremont vaya a producir más de 200.000 unidades en un trimes",
        "url": "https://www.marca.com/coches-y-motos/coches/tesla/2021/07/04/60e1607a22601d337a8b45ed.html",
        "urlToImage": "https://phantom-marca.unidadeditorial.es/adf8a59d6c1aca00b89eff7493b4c711/crop/0x65/425x303/f/jpg/assets/multimedia/imagenes/2021/07/04/16253831284143.png",
        "publishedAt": "2021-07-04T07:26:47Z",
        "content": "Todo lo que atañe a Tesla se hace viral. Lo bueno y lo malo. En la balanza está el hecho de que la compañía con base en Fremont vaya a producir más de 200.000 unidades en un trimestre por primera vez… [+3577 chars]"
    }
]
const totalResults= 12909

const NewsFeed = React.memo ( () => {
    const dispatch = useDispatch ()
    //const articles = useSelector<AppStateType,ArticleType[]>((state)=>state.news.articles )
    //const totalResults = useSelector<AppStateType,number>((state)=>state.news.totalResults )



    useEffect ( () => {
        dispatch ( getNews () )
    }, [articles] )



    return totalResults?(
        <div className={style.articles}>
        { articles.map ( article => {
            return <Article key={article.publishedAt} article={ article }/>
        } ) }
    </div>)
        : <Preloader/>
} );
export default NewsFeed;