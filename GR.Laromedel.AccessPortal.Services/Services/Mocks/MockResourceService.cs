using System;
using System.Collections.Generic;
using GR.Laromedel.AccessPortal.Services.Models;
using GR.Laromedel.AccessPortal.Services.Services.Contracts;
namespace GR.Laromedel.AccessPortal.Services.Services.Mocks {
  public class MockResourceService : IResourceService {
    public List<ResourceViewModel> GetResources () {
      return new List<ResourceViewModel> {
        new ResourceViewModel {
          Title = "Gleerups biologi 7-9, digital, elevlic, 12 mån",
          ArticleNumber = "9789140682413",
          ResourceUri = new Uri ("http://example.com"),
          CollectionTitle = "Titano",
          CollectionPartNumber = null,
          ImageThumbUri = new Uri ("http://bokinfo.se/Images/Products/Small/978914/9789140682413.jpg"),
          ImageUri = new Uri ("http://bokinfo.se/Images/Products/Medium/978914/9789140682413.jpg"),
          Edition = 1,
          Description = "<p>Gleerups biologi 7–9 är ett heltäckande digitalt läromedel, utformat efter Lgr 11och uppbyggt utifrån kursplanen. Innehållet bygger på den populära serien Titano.<br><br>Aktuellt innehåll med hög kvalitet <br>Miljöfrågor sätts i fokus och utvidgar elevernas förståelse för ett hållbart samhälle. Ett lättfattligt språk och intressanta kopplingar till elevernas vardag ökar läslusten. Här finns innehållsfrågor, fördjupningsuppgifter och diskussionsfrågor med samhällsanknytning.</p>\n<p>Interaktivt och multimodalt <br>Inledande bilder anknyter till avsnittens innehåll och introduktionsfilmerna ger eleverna en god översikt av vad avsnitten handlar om. Animationer underlättar förståelsen av olika biologiska skeenden och förlopp.</p>\n<p>Lättläst version<br>Eleverna har&nbsp;möjlighet att välja en enklare textversion om de önskar, där huvudinnehållet förklaras på ett mer lättillgängligt sätt.</p>\n<p>Tester och övningar <br>Genom täta frågekontroller kan eleverna testa sig själva. Här finns såväl enklare frågor som frågor av mer utmanande karaktär, där eleverna kan behöva använda andra källor när de ska förklara begrepp och föra egna resonemang. Sist i varje avsnitt finns också självrättande repetitionsfrågor. I resultatvisningen kan du följa upp resultaten av övningarna.</p>\n<p>Studiestöd på modersmål<br>I Gleerups biologi ingår ett studiestöd på arabiska, som riktar sig till elever som är nyanlända eller har nybörjarkunskaper i svenska. Studiestödet är en inläst bearbetning och pedagogisk förklaring av innehållet, och aktiveras via Inläsningstjänst.</p>\n<p>Lärarstöd <br>Lärarmaterial med handledning till varje avsnitt, bildbanker, demonstrationer, laborationer, en provbank och bedömningsmaterial.</p>\n<p>Personlig lärupplevelse<br>Stöd för smart studieteknik som ger stora möjligheter till en personlig upplevelse. Bakgrundsfärg och textstorlek går att variera. Egna anteckningar, markeringar och favoriter samlas i personliga översikter. Svåra ord och begrepp förklaras med inbyggda ordförklaringar. Dessutom går det att få all text uppläst med talsyntes.</p>\n<p>Flexibel struktur ger möjlighet till individualisering<br>Täcker kursplanens alla delar och det centrala innehållet där du som lärare har du stor flexibilitet att lägga upp undervisningen på det sätt som passar dig och dina elever. Välj de avsnitt du önskar använda, och komplettera med eget material. Du kan sedan dela din planering med en eller flera elever, vilket ger stora möjligheter till individualisering.<br></p>",
          Contributors = "Anders Henriksson",
          Language = "Svenska",
          SupplierName = "Gleerups",
          Subjects = new [] {
            "Biologi"
          },
          Stage = new [] {
            "7-9"
          }
        },
        new ResourceViewModel {
          Title = "Pixel 5A Grundbok IST",
          ArticleNumber = "9789127449367",
          ResourceUri = new Uri ("http://example.com"),
          CollectionTitle = null,
          CollectionPartNumber = null,
          ImageThumbUri = new Uri ("http://bokinfo.se/Images/Products/Small/978912/9789127449367.jpg"),
          ImageUri = new Uri ("http://bokinfo.se/Images/Products/Medium/978912/9789127449367.jpg"),
          Edition = 2,
          Description = "<p>I Pixel ligger fokus på ett praktiskt, utforskande och kreativt arbetssätt. Arbetet går alltid från konkret till abstrakt nivå för att lägga grunden till en god matematisk förståelse. Med Pixel får ni en metodisk och tydlig arbetsgång, uppgifter som är utmanade för eleverna och enkelt för dig som lärare att använda.<br><br>Med IST Lärarmaterial får du som lärare möjlighet att visa boken via projektor för att underlätta matematiska samtal och genomgångar. Här finns digitala verktyg som klossor, pengar, tallinjer och rutnät kopplade till bokens sidor, så att ni tillsammans kan undersöka och konkretisera matematiken i boken. Grundboken är uppdelad i kapitel med tydliga rubriker, för att visa det matematiska innehållet. Alla kapitel börjar med en samtalsbild baserad på en vardaglig situation så att introduktionen kan starta med ett matematiskt samtal.</p> Licenstid: 365 dagar",
          Contributors = "Bjørnar Alseth, Mona Røsseland, Gunnar Nordberg, Öyvind Vågen",
          Language = "Svenska",
          SupplierName = "Natur & Kultur",
          Subjects = new [] {
            "Matematik"
          },
          Stage = new [] {
            "4-6"
          }
        },
        new ResourceViewModel {
          Title = "FT-Test G-block, webb, lärarlicens 18 mån",
          ArticleNumber = "9789140679352",
          ResourceUri = new Uri ("http://example.com"),
          CollectionTitle = "Personbilsteknik",
          CollectionPartNumber = null,
          ImageThumbUri = new Uri ("http://bokinfo.se/Images/Products/Small/978914/9789140679352.jpg"),
          ImageUri = new Uri ("http://bokinfo.se/Images/Products/Medium/978914/9789140679352.jpg"),
          Edition = 1,
          Description = "<p>Prestanda G-block består av instuderingsuppgifter, praktiska övningar, kursprov och ett webbaserat uppföljningsverktyg för de två kurserna Personbilsteknik – introduktion och Reparation av personbilar och lätta transportfordon. </p>\n<p>Materialet består av övningar i form av praktiska utbildningsmoment. Momenten är baserade på ämnes- och kursmål samt vanligt förekommande arbetsuppgifter inom yrkesområdet. Övningarna kallas för uppdrag, moment. Varje moment har teoretiska instuderingsfrågor, praktiska instruktioner och en uppföljning. De teoretiska instuderingsfrågorna för momentet finns i Prestanda G-block T. De praktiska delarna av momentet finns i Prestanda G-block P. Uppföljningen, kunskapstestet för momentet finns i FT-test G-block. Faktaserien PbT kan med fördel användas som referensläromedel.&nbsp; </p>\n<p>FT-test G-block är ett webbaserat uppföljningsverktyg för kunskapstest, träning och repetition. Här finns frågor för varje moment, uppdrag, i Prestanda G-block. I varje övning slumpas ett antal frågor fram och likaså slumpas ordningen på svarsalternativen till varje fråga fram. Alla frågor rättas automatiskt och redovisas direkt. FT-test G-block ger eleverna en god möjlighet att testa sina kunskaper och följa sin kunskapsutveckling. Dessutom ger det dig som lärare möjlighet till uppföljning, utvärdering och dokumentation av varje elevs aktuella kunskapsnivå. FT-test G-block finns i form av elevwebb och lärarwebb. Till lärarwebben medföljer en modul för elevadministration.&nbsp; </p>\n<p>FT-test G-block i korthet:<br>•&nbsp;webbaserat uppföljningsverktyg <br>•&nbsp;frågor och svarsalternativ slumpas fram<br>•&nbsp;ger eleverna möjlighet att testa sina kunskaper och följa sin utveckling<br>•&nbsp;ger dig som lärare möjlighet till uppföljning, utvärdering och dokumentation</p>",
          Contributors = " Gleerups",
          Language = "Svenska",
          SupplierName = "Gleerups",
          Subjects = new string[] { },
          Stage = new [] {
            "Gymnasie/vux"
          }
        },
        new ResourceViewModel {
          Title = "TitaNO Biologi Elevwebb Individlicens 12 mån",
          ArticleNumber = "9789140665386",
          ResourceUri = new Uri ("http://example.com"),
          CollectionTitle = "Titano",
          CollectionPartNumber = null,
          ImageThumbUri = new Uri ("http://bokinfo.se/Images/Products/Small/978914/9789140665386.jpg"),
          ImageUri = new Uri ("http://bokinfo.se/Images/Products/Medium/978914/9789140665386.jpg"),
          Edition = 1,
          Description = "<p>TitaNO Biologi Elevwebb är elevens komplement till den tryckta boken TitaNO Biologi. Webben följer faktabokens kapitelordning och ger pedagogisk, interaktiv träning som leder till resultat. På elevwebben finns introduktionsfilmer som ger eleverna god översikt av vad de olika kapitlen behandlar. Det finns också animationer som underlättar förståelsen av olika biologiska skeenden samt ett stort antal självrättande frågor. Eleverna loggar in från vilken dator som helst - perfekt för extraträning hemma och bra föräldrastöd vid läxläsning.&nbsp; </p>\n<p>Författare är Anders Henriksson med mångårig erfarenhet som läroboksförfattare och biologilärare.</p>",
          Contributors = " Gleerups",
          Language = "Svenska",
          SupplierName = "Gleerups",
          Subjects = new [] {
            "Biologi"
          },
          Stage = new [] {
            "7-9"
          }
        },
        new ResourceViewModel {
          Title = "Hjärnbalans",
          ResourceUri = new Uri ("http://example.com"),
          ArticleNumber = "9789178090167",
          CollectionTitle = null,
          CollectionPartNumber = null,
          ImageThumbUri = null,
          ImageUri = null,
          Edition = 1,
          Description = "",
          Contributors = "Katarina Gospic",
          Language = "Svenska",
          SupplierName = "Brombergs",
          Subjects = new [] {
            "Psykologi",
            "Samhällskunskap"
          },
          Stage = new string[] { }
        },
        new ResourceViewModel {
          Title = "Matematikboken Z Onlinebok GAMMAL UPPLAGA Grupplicens 12 mån",
          ResourceUri = new Uri ("http://example.com"),
          ArticleNumber = "9789147915248",
          CollectionTitle = "Matematikboken XYZ",
          CollectionPartNumber = null,
          ImageThumbUri = new Uri ("http://bokinfo.se/Images/Products/Small/978914/9789147915248.jpg"),
          ImageUri = new Uri ("http://bokinfo.se/Images/Products/Medium/978914/9789147915248.jpg"),
          Edition = 4,
          Description = "Uppgifternas art varierar ännu mer än tidigare. Varierade frågeställningar gör att eleverna inte bara löser sina uppgifter mekaniskt. När eleverna får resonera kring lösningar och förklara hur de tänker stärker det deras förståelse. I nya upplagan finns det därför gott om diskussionsfrågor. Vi lyfter också de matematiska begreppen på ett tydligare sätt eftersom de är grunden för att eleverna ska kunna utveckla det matematiska språket. Texten är granskad för elever som har svenska som andraspråk.<br>Med XYZ är det lätt att hålla ihop klassen. Eftersom avsnitten innehåller fyra svårighetsnivåer kan varje elev arbeta med uppgifter som är lagom utmanande för just henne eller honom. Det innebär att du kan individualisera undervisningen utifrån elevernas matematiska nivå istället för deras arbetstempo. En stor fördel med konceptet i Matematikboken är att en elev kan arbeta på olika nivåer i olika avsnitt.<br>Vad är en Onlinebok?",
          Contributors = "Lennart Undvall, Kristina Johnson, Conny Welén",
          Language = "Svenska",
          SupplierName = "Liber",
          Subjects = new [] {
            "Matematik"
          },
          Stage = new [] {
            "7-9"
          }
        },
        new ResourceViewModel {
          Title = "Echo English 7 Elevbok Digital",
          ResourceUri = new Uri ("http://example.com"),
          ArticleNumber = "9789127449541",
          CollectionTitle = null,
          CollectionPartNumber = null,
          ImageThumbUri = new Uri ("http://bokinfo.se/Images/Products/Small/978912/9789127449541.jpg"),
          ImageUri = new Uri ("http://bokinfo.se/Images/Products/Medium/978912/9789127449541.jpg"),
          Edition = 1,
          Description = "<p>Materialet är framtaget i enlighet med kursplanen för Engelska 7, samt i samråd med högskolor och universitet för att uppfylla de krav som ställs där.</p>\n  <p>Integrerat i digitalboken finns extramaterial med hörövningar i form av TED-talks med färdiga uppgifter. Här finns också inlästa texter, praktiska självrättande övningar i grammatik och ordförråd.</p>\n  <p>Innehåll:<br>1) Read &amp; Respond<br>Autentiska engelskspråkiga artiklar inom olika områden. Eleverna övar läsförståelse på olika nivåer, ordförråd och avancerad textanalys. Artiklarna kommer från tidningar som The Guardian och New York Times.</p>\n  <p>2) Write &amp; Speak<br>Malltexter och information om formellt tal och skrivande inom några vanliga akademiska genrer. Eleverna lär sig att använda rätt stilnivå, samt att granska, citera och ange sina källor och bearbeta resultatet. Här finns också information och övningar på de vanligast grammatiska misstagen i Engelska 7.</p>\n  <p>Exempel på genrer:</p>\n  <p>* Scientific article and peer oppositon<br>* Abstract<br>* Compare and contrast essay<br>* Summary - response essay<br>* CV and letter of application<br>* Informative text and presentation<br>* Argumentative speech and essay<br>* Debate<br>* Negotiation</p>\n  <p>3) Literary periods &amp; Criticsim<br>En översikt över viktiga litterära genrer, med textutdrag och författarporträtt. Här finns också information, exempel och övningar på olika angreppssätt inom litteraturanalys.</p> Licenstid: 365 dagar",
          Contributors = "Marie Kabala-Rejment",
          Language = "Engelska",
          SupplierName = "Natur & Kultur",
          Subjects = new [] {
              "Engelska"
            },
            Stage = new [] {
              "Gymnasie/vux"
            }
        }
      };
    }
  }
}