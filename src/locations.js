const locations = [
  {
    cityName: "Gdynia",
    centerCoordinates: [18.540766, 54.505772],
    zoomValue: 12.5,
    places: [
      {
        name: "Port Gdynia",
        videoUrl: "https://www.youtube.com/embed/VWvx6ufz02A",
        description: `
          Handlowy port morski nad Zatoką Gdańską, położony na Pobrzeżu Kaszubskim. 
          Jest trzecim co do wielkości portem morskim w Polsce (po Gdańsku i Szczecinie).
          Należy do Europejskiej Organizacji Portów Morskich. 
          Materiał zarejestrowano podczas wypłynięcia promu Stena Line z Gdyni do Karlskrony. 
        `,
        coordinates: [18.547769, 54.534704]
      },
      {
        name: "Skwer Kościuszki",
        videoUrl: "https://www.youtube.com/embed/y27v07CRaxM",
        description: `
          Reprezentacyjna ulica Śródmieścia Gdyni stanowiąca wspólnie z ulicą 10 Lutego i aleją Jana Pawła II wizytówkę Gdyni.
          Przy Skwerze Kościuszki cumują Dar Pomorza oraz ORP Błyskawica. 
          Nieopodal znajduje się również Muzeum Oceanograficzne, Akwarium Morskie oraz przystań Żeglugi Pasażerskiej.
        `,
        coordinates: [18.559007, 54.518421]
      },
      {
        name: "Bulwar Nadmorski",
        videoUrl: "https://www.youtube.com/embed/G5xtX190bcE",
        description: `
          Bulwar Nadmorski to najpopularniejszy w Gdyni trakt spacerowy. 
          Ma 1.5 km długości, jest częstym miejscem przechadzek i wycieczek rowerowych. 
          Jest jednym ze znaków rozpoznawczych Gdyni obok Skweru Kościuszki i żaglowca 'Dar Pomorze'.
        `,
        coordinates: [18.551318, 54.51256]
      },
      {
        name: "Orłowo - Plaża",
        videoUrl: "https://www.youtube.com/embed/h7XRcJNtP1g",
        description: `
          Plaża znana jest z ładnego widoku na Cypel Redłowski, znajduje się 15 min spacerem od dworca Gdynia Orłowo. 
          Na szerokości 100 metrów do końca sierpnia plaża jest strzeżona, szerokość plaży to 30 m. 
          Zaplecze turystyczne jest tutaj dość skromne, ale za to można kupić świeżo uwędzoną rybę prosto od rybaka. 
        `,
        coordinates: [18.565539, 54.482516]
      },
      {
        name: "Orłowo - Skwer Antoniego Suchanka",
        videoUrl: "https://www.youtube.com/embed/CzChXgcIDbw",
        description: `
          Ławeczka Antoniego Suchanka znajduje się w Gdyni-Orłowie przy molo, na skwerze jego imienia. 
          Została odsłonięta 31 maja 2009. Jej autorem jest rzeźbiarz gdyński Zdzisław Koseda.
          Ławeczka przedstawia artystę siedzącego na ławce parkowej i pogrążonego w pracy. 
          Obok niego na ławce leży kaseta z przyborami malarskimi.
        `,
        coordinates: [18.564038, 54.480681]
      },
      {
        name: "Orłowo - Molo",
        videoUrl: "https://www.youtube.com/embed/gIeWFMgyFUM",
        description: `
          Drewniane molo znajdujące się w nadmorskiej, południowej dzielnicy Gdyni.
          Nieopodal znajduje się Scena Letnia Teatru Miejskiego w Gdyni. 
          Będąc na molo można podziwiać Klif Orłowski.
        `,
        coordinates: [18.566779, 54.479738]
      },
      {
        name: "Orłowo - Promenada",
        videoUrl: "https://www.youtube.com/embed/vMSAmFI9i08",
        description: `
          Promenada Królowej Marysieńki to nadmorski deptak w Gdyni-Orłowie ciągnący się od ulicy Przebendowskich do Orłowskiego mola. 
          Roztacza się stąd wspaniały widok na Zatokę Gdańską, Klif Orłowski, a podczas dobrej pogody można podziwiać Półwysep Helski.
          Na terenie promenady znajdują się liczne drzewa, krzewy oraz kwiaty. 
          Jest tu wiele ławek, trawników na pikniki rodzinne, plac zabaw dla dzieci.
          Warto tu się wybrać na rodzinny spacer.
        `,
        coordinates: [18.562761, 54.477822]
      }
    ]
  },
  {
    cityName: "Sopot",
    centerCoordinates: [18.566851, 54.446544],
    zoomValue: 15,
    places: [
      {
        name: "Park Północny",
        videoUrl: "https://www.youtube.com/embed/bJODWTvc8HY",
        description: `
          Park Północny w Sopocie rozciąga się od Grand Hotelu do potoku Swelinia, który stanowi granicę z Gdynią.
          W jego sąsiedztwie usytuowany jest budynek Teatru na Plaży, gdzie często odbywają się tu imprezy z dziedziny teatru, muzyki i filmu.
          Na terenie parku znajdują się dwa pomniki: Jerzego Haffnera - twórcy uzdrowiska w Sopocie oraz kamienna rzeźba zatytuowana "Pragnienie".
        `,
        coordinates: [18.566114, 54.449337]
      },
      {
        name: "Molo",
        videoUrl: "https://www.youtube.com/embed/WXFOchbI0qg",
        description: `
          Molo to jeden z najpopularniejszych polskich obiektów rekreacyjno-imprezowych, wizytówka kurortu.
          Obiekt składa się z 2 części: drewnianej i lądowej.
          Część lądowa (Skwer Kuracyjny) to plac o powierzchni 20 tys. mkw., na którym znajdują się: przepiękna zabytkowa fontanna, latarnia morska z punktem widokowym, muszla koncertowa, punkty gastronomiczne oraz dużo zieleni. 
          Na placu mogą byś organizowane imprezy masowe do 6 tys. osób, a w okresie zimowym funkcjonuje tu sztuczne lodowisko.
        `,
        coordinates: [18.574833, 54.447474]
      },
      {
        name: "Monciak",
        videoUrl: "https://www.youtube.com/embed/B2SIt_aaxpE",
        description: `
          Monciak, czyli prowadząca do mola ulica Bohaterów Monte Cassino, to najsłynniejszy w kraju deptak, przy którym mieszczą się liczne puby i galerie, a latem prezentują się uliczne teatry wędrowne i muzycy. 
          Ulica ma około 635 metrów długości i jest zamknięta dla ruchu samochodowego, co czyni z niej jeden z najsłynniejszych deptaków w Polsce.
          Zabudowę Monciaka stanowią XIX- i XX-wieczne kamieniczki.
          Ulicę wieńczy niewielki plac z fontanną, który później przechodzi w molo.
        `,
        coordinates: [18.566958, 54.444098]
      }
    ]
  },
  {
    cityName: "Gdańsk",
    centerCoordinates: [18.615224, 54.395095],
    zoomValue: 12,
    places: [
      {
        name: "Park Oliwski - Potok Oliwski",
        videoUrl: "https://www.youtube.com/embed/YtCptlTF4MQ",
        description: `
          Potok Oliwski jest jednym z głównych cieków odwadniających obszar Lasów Oliwskich, który uchodzi do Zatoki Gdańskiej.
          Wzdłuż potoku funkcjonowały liczne urządzenia, obiekty zabudowy hydrotechnicznej: przegrody z przepustami, stawy, zbiorniki młyńskie, oraz urządzenia gospodarcze: młyny, kuźnie, folusze.
          W materiale przedstawiono wodospad po dawnym młynie VII, znajdujący się na terenie Parku Oliwskiego.
        `,
        coordinates: [18.561691, 54.411094]
      },
      {
        name: "Park Oliwski - Pałac Opatów",
        videoUrl: "https://www.youtube.com/embed/gGNjyCC--a4",
        description: `
          Zabytkowy pałac w Gdańsku Oliwie, umiejscowiony w Parku Oliwskim.
          Obecnie mieści się tam Oddział Sztuki Nowoczesnej Muzeum Narodowego w Gdańsku.
          Stała Galeria Polskiej Sztuki Nowoczesnej prezentuje około 400 dzieł najwybitniejszych artystów XIX i XX wieku.
          Artyści, których dzieła prezentowane są w Galerii: Jan Matejko, Piotr Michałowski, Olga Boznańska, Jacek Malczewski, Stanisław Wyspiański, Wojciech Weiss.
        `,
        coordinates: [18.560225, 54.410508]
      },
      {
        name: "Nowy Port - Latarnia Morska",
        videoUrl: "https://www.youtube.com/embed/ZYvGDgvNNO8",
        description: `
          Latarnia morska w Nowym Porcie to budowla, która przez lata wskazywała statkom drogę do gdańskiego portu.
          Ośmiokątna wieża, zakończona galerią i laterną z miedzianą kopułą, sięga wysokości 27,3 metra.
          Obecnie jest to jedyna prywatna latarnia morska w Polsce, z której w sezonie od wiosny do jesieni można podziwiać widok na całą Zatokę Gdańską.
        `,
        coordinates: [18.661273, 54.407051]
      },
      {
        name: "Westerplatte",
        videoUrl: "https://www.youtube.com/embed/mpfcT4qxXms",
        description: `
          Od wieków Westerplatte pełniło punkt obronny dla Gdańska. 
          To tu kolejne armie budowały miejsca oporu przed najeźdźcą. 
          Przed wojną istniał tu także dobrze prosperujący kurort.
          Obecnie na Westerplatte zwiedzać można dobrze zachowaną Wartownię nr 1, symboliczny cmentarzyk obrońców Westerplatte oraz budynek nowych koszarów. 
          Symbolem Westerplatte jest Pomnik Obrońców Wybrzeża, postawiony tu w czasie komunizmu i niestety zawierający wiele przekłamań historycznych.
        `,
        coordinates: [18.667028, 54.406525]
      },
      {
        name: "Stogi - Plaża",
        videoUrl: "https://www.youtube.com/embed/IR9pozkJRBY",
        description: `
          Plaża na Stogach jest jedną z najczystszych plaż w Trójmieście. 
          Jej długość to 4 km, w tym 400 m kąpieliska, a w niektórych miejscach jest szeroka nawet na 100 m.
          Jedną z atrakcji tego miejsca jest Letni Stadion, wyposażony w trybuny na 1500 osób, na którym odbywają się liczne turnieje – m.in. plażowe rugby i piłka ręczna.
          Ponadto klimatu dodaje widok na pobliski Terminal Kontenerowy.
        `,
        coordinates: [18.727846, 54.376199]
      },
      {
        name: "Długi Targ",
        videoUrl: "https://www.youtube.com/embed/LoNlZo8X5xI",
        description: `
          Reprezentacyjny plac w Gdańsku, w dzielnicy Śródmieście, na Głównym Mieście.
          Pełni funkcję rynku, jest przedłużeniem ul. Długiej, z którą tworzy tzw. Drogę Królewską.
          Na Długim Targu znajdują się również liczne zabytki, w tym m.in.: Fontanna Neptuna, Dwór Artusa czy Brama Zielona.
        `,
        coordinates: [18.653879, 54.348381]
      }
    ]
  }
];

export default locations;
