const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({
      "topics": [
        {
          "title": "Układ mięśniowy",
          "subtopics": [
            {
              "title": "Rodzaje mięśni",
              "notes": [
                {
                  "id": 1,
                  "content": "Mięśnie szkieletowe to mięśnie przyczepione do kości, umożliwiające poruszanie się. Mięśnie gładkie występują w ścianach narządów wewnętrznych, takich jak żołądek czy jelita. Mięśnie sercowe to specjalny typ mięśni skurczający się w sercu."
                },
                {
                  "id": 2,
                  "content": "Funkcje mięśni w organizmie są różnorodne, obejmują m.in. utrzymanie postawy ciała, poruszanie się, wsparcie narządów wewnętrznych, czy udział w procesach metabolicznych."
                },
                {
                  "id": 3,
                  "content": "Mięśnie szkieletowe mogą być podzielone na mięśnie czerwone (wolnokurczliwe) i białe (szybkokurczliwe)."
                },
                {
                  "id": 4,
                  "content": "Przykładowe główne mięśnie w ciele obejmują: \n - Mięsień czworogłowy uda\n - Mięsień dwugłowy ramienia\n - Mięsień prosty brzucha\n - Mięsień naramienny\n - Mięsień gruszkowaty\n - Mięsień pośladkowy wielki\n - Mięsień trójgłowy ramienia"
                },
                {
                  "id": 5,
                  "content": "Zdolność mięśni do skurczu i rozciągania umożliwia wykonywanie różnych ruchów, takich jak chód, bieg, czy podnoszenie przedmiotów."
                }
              ]
            },
            {
              "title": "Budowa mięśni",
              "notes": [
                {
                  "id": 6,
                  "content": "Składniki mięśni obejmują włókna mięśniowe, naczynia krwionośne, nerwy i tkankę łączną."
                },
                {
                  "id": 7,
                  "content": "Włókna mięśniowe zawierają miofibryle, struktury odpowiedzialne za skurcze mięśni."
                },
                {
                  "id": 8,
                  "content": "Rola białek w funkcjonowaniu mięśni obejmuje m.in. aktynę, miozynę, troponinę i tropomiozynę."
                }
              ]
            },
            {
              "title": "Funkcje mięśni",
              "notes": [
                {
                  "id": 9,
                  "content": "Mięśnie są kluczowym elementem układu ruchu, umożliwiając poruszanie się i utrzymanie postawy ciała."
                },
                {
                  "id": 10,
                  "content": "Mięśnie biorą udział w procesach metabolicznych, regulując zużycie energii w organizmie."
                },
                {
                  "id": 11,
                  "content": "Różne typy mięśni pełnią specjalizowane funkcje, np. mięśnie sercowe zapewniają skurcze serca, utrzymując krążenie krwi."
                }
              ]
            },
            {
              "title": "Trening mięśni",
              "notes": [
                {
                  "id": 12,
                  "content": "Regularny trening mięśni przyczynia się do poprawy siły, wytrzymałości i elastyczności mięśni."
                },
                {
                  "id": 13,
                  "content": "Trening oparty na obciążeniu stymuluje rozwój mięśni, prowadząc do zwiększenia masy mięśniowej."
                },
                {
                  "id": 14,
                  "content": "Różne formy treningu, takie jak aerobik i trening siłowy, wpływają korzystnie na różne grupy mięśni."
                }
              ]
            },
            {
              "title": "Problemy mięśni",
              "notes": [
                {
                  "id": 15,
                  "content": "Niewłaściwa postawa i brak aktywności fizycznej mogą prowadzić do problemów z mięśniami, takich jak bóle pleców i sztywność mięśni."
                },
                {
                  "id": 16,
                  "content": "Nadmierna aktywność fizyczna bez odpowiedniego rozgrzewania może prowadzić do kontuzji mięśniowych."
                },
                {
                  "id": 17,
                  "content": "Nieprawidłowa równowaga między mięśniami agonistycznymi i antagonistycznymi może prowadzić do dysfunkcji ruchowej."
                }
              ]
            },
            {
              "title": "Rola mięśni w zdrowiu",
              "notes": [
                {
                  "id": 18,
                  "content": "Mięśnie pełnią kluczową rolę w utrzymaniu zdrowia układu ruchu, wspierając funkcje stawów i kości."
                },
                  {
                    "id": 19,
                    "content": "Regularna aktywność fizyczna, w tym trening mięśni, przyczynia się do poprawy ogólnej kondycji i zdrowia serca."
                  },
                  {
                    "id": 20,
                    "content": "Silne i elastyczne mięśnie redukują ryzyko kontuzji, poprawiają postawę ciała i wpływają pozytywnie na samopoczucie."
                  }
                ]
              },
              {
                "title": "Anatomia mięśni",
                "notes": [
                  {
                    "id": 21,
                    "content": "Mięśnie składają się z wielu włókien mięśniowych, które łączą się w pęczki, tworząc struktury umożliwiające skurcze i rozciąganie."
                  },
                  {
                    "id": 22,
                    "content": "Anatomia mięśni obejmuje różne partie mięśni, takie jak brzuch, klatka piersiowa, plecy, ramiona i nogi."
                  },
                  {
                    "id": 23,
                    "content": "Różne grupy mięśni pełnią różnorodne funkcje, np. mięśnie rdzenia stabilizują kręgosłup, podczas gdy mięśnie nóg umożliwiają chód i bieg."
                  }
                ]
              },
              {
                "title": "Rozciąganie i elastyczność",
                "notes": [
                  {
                    "id": 24,
                    "content": "Regularne rozciąganie mięśni poprawia elastyczność i zakres ruchu, co przyczynia się do unikania kontuzji."
                  },
                  {
                    "id": 25,
                    "content": "Rozciąganie powinno obejmować wszystkie główne grupy mięśni, koncentrując się na miejscach napięcia i skrętu."
                  },
                  {
                    "id": 26,
                    "content": "Elastyczne mięśnie wspierają prawidłową postawę ciała i pomagają utrzymać równowagę między różnymi grupami mięśni."
                  }
                ]
              },
              {
                "title": "Mięśnie a metabolizm",
                "notes": [
                  {
                    "id": 27,
                    "content": "Mięśnie są aktywnym narządem metabolicznym, przyczyniającym się do spalania kalorii i utrzymania prawidłowej masy ciała."
                  },
                  {
                    "id": 28,
                    "content": "Trening siłowy zwiększa masę mięśniową, co wpływa korzystnie na tempo przemiany materii."
                  },
                  {
                    "id": 29,
                    "content": "Odpowiednie odżywianie, w tym dostarczanie białek, jest kluczowe dla regeneracji i wzrostu mięśni."
                  }
                ]
              },
              {
                "title": "Mięśnie a starzenie się",
                "notes": [
                  {
                    "id": 30,
                    "content": "Starzenie się wpływa na masę i funkcję mięśni, prowadząc do utraty siły i elastyczności."
                  },
                  {
                    "id": 31,
                    "content": "Regularny trening mięśni jest ważny w procesie starzenia, wspierając utrzymanie sprawności fizycznej i niezależności."
                  },
                  {
                    "id": 32,
                    "content": "Starzenie się mięśni może prowadzić do problemów z równowagą, stabilnością i wykonywaniem codziennych czynności."
                  }
                ]
              }
            ]
          },
          {
            "title": "Układ kostny",
            "subtopics": [
              {
                "title": "Struktura kości",
                "notes": [
                  {
                    "id": 9,
                    "content": "Kości składają się z tkanki kostnej, która może być gąbczasta lub zbita, zależnie od lokalizacji w ciele."
                  },
                  {
                    "id": 10,
                    "content": "Mozaičność kości oznacza, że są one dynamicznymi strukturami, podlegającymi ciągłej przebudowie."
                  },
                  {
                    "id": 11,
                    "content": "Kość jest unikalnym narządem, spełniającym funkcje podporowe, ochronne i magazynujące minerały."
                  }
                ]
              },
              {
                "title": "Rozwój kości",
                "notes": [
                  {
                    "id": 12,
                    "content": "Kość powstaje poprzez procesy kostnienia, zarówno intramembranowe, jak i endochondralne."
                  },
                  {
                    "id": 13,
                    "content": "U dzieci kości rosną dzięki chrząstkom wzrostowym, a u dorosłych zachodzi proces remodelingu kostnego."
                  },
                  {
                    "id": 14,
                    "content": "Hormony, takie jak hormon wzrostu, estrogeny i testosteron, odgrywają kluczową rolę w rozwoju kości."
                  }
                ]
              }
            ]
          }
  ]
});
});

app.get("/*", (req, res) => {
    res.json("No route found");
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
