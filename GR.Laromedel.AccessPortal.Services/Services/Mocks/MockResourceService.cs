using System.Collections.Generic;
using GR.Laromedel.AccessPortal.Services.Models;
using GR.Laromedel.AccessPortal.Services.Services.Contracts;
using System;
namespace GR.Laromedel.AccessPortal.Services.Services.Mocks
{
    public class MockResourceService : IResourceService
    {
        public List<ResourceViewModel> GetResources()
        {
            return new List<ResourceViewModel>
            {
                new ResourceViewModel
                {
                    Title = "Svenska i dag 7 Övningsbok",
                    Description =
                        "Läroböckerna innehåller texter och uppgifter för alla moment som ingår i svenskämnet. Övningsböckerna repeterar och övar de moment som tas upp i respektive lärobok samt tränar eleverna inför de nationella proven.\r\n\r\nFrån Gilgamesh till Guillou är en vacker litteraturhistorisk antologi som sträcker sig från forntiden fram till i dag. I anslutning till texterna finns författarpresentationer och olika typer av uppgifter.\r\n\r\nLäromedlet består av följande komponenter:\r\n\r\n* Tre läroböcker\r\n* Tre övningsböcker (för förbrukning)\r\n* En antologi\r\n* Tre lärarhandledningar inkl. facit (pdf:er)\r\n\r\nDigitalt\r\n\r\nSvenska i dag finns även som digitalbok där ni kan få all text uppläst.\r\n\r\nDina behov och önskemål styr\r\n\r\nHur ser dina behov och önskemål ut? Med Svenska i dag kan själv välja i vilken omfattning du vill använda lärobok, övningsbok och antologin:\r\n\r\nMINI\r\nVill du ha ett slimmat svenskläromedel klarar du dig med endast läroboken.\r\n\r\nMIDI\r\nMed övningsboken som komplement till läroboken finns många möjligheter att gnugga och fördjupa färdigheter.\r\n\r\nMAXI\r\nLärobok, övningsbok och en antologi blir tillsammans ett maxat svenskpaket.\r\n\r\nLÄRARSTÖD\r\nLärarhandledningen är digital och innehåller metodiska tips och kopieringsunderlag.\r\n\r\n",
                    ImageUri = new Uri("https://www.bokinfo.se/Images/Products/Medium/978912/9789127406827.jpg"),
                    ResourceUri = new Uri("https://someresource"),
                    Classifications = new Dictionary<string, string[]>
                    {
                        {
                            "Ämne", new [] { "Svenska" }
                        },
                        {
                            "Ålder", new [] { "7-9" }
                        },
                        {
                            "Typ av lärresurs", new [] { "Böcker" }
                        }
                    }
                },
                new ResourceViewModel
                {
                    Title = "Svenska i dag 8 Lärobok",
                    Description =
                        "Läroböckerna innehåller texter och uppgifter för alla moment som ingår i svenskämnet. Övningsböckerna repeterar och övar de moment som tas upp i respektive lärobok samt tränar eleverna inför de nationella proven.\r\n\r\nFrån Gilgamesh till Guillou är en vacker litteraturhistorisk antologi som sträcker sig från forntiden fram till i dag. I anslutning till texterna finns författarpresentationer och olika typer av uppgifter.\r\n\r\nLäromedlet består av följande komponenter:\r\n\r\n* Tre läroböcker\r\n* Tre övningsböcker (för förbrukning)\r\n* En antologi\r\n* Tre lärarhandledningar inkl. facit (pdf:er)\r\n\r\nDigitalt\r\n\r\nSvenska i dag finns även som digitalbok där ni kan få all text uppläst.\r\n\r\nDina behov och önskemål styr\r\n\r\nHur ser dina behov och önskemål ut? Med Svenska i dag kan själv välja i vilken omfattning du vill använda lärobok, övningsbok och antologin:\r\n\r\nMINI\r\nVill du ha ett slimmat svenskläromedel klarar du dig med endast läroboken.\r\n\r\nMIDI\r\nMed övningsboken som komplement till läroboken finns många möjligheter att gnugga och fördjupa färdigheter.\r\n\r\nMAXI\r\nLärobok, övningsbok och en antologi blir tillsammans ett maxat svenskpaket.\r\n\r\nLÄRARSTÖD\r\nLärarhandledningen är digital och innehåller metodiska tips och kopieringsunderlag.\r\n\r\n",
                    ImageUri = new Uri("https://www.bokinfo.se/Images/Products/Medium/978912/9789127406841.jpg"),
                    ResourceUri = new Uri("https://someresource"),
                    Classifications = new Dictionary<string, string[]>
                    {
                        {
                            "Ämne", new [] { "Svenska" }
                        },
                        {
                            "Ålder", new [] { "7-9" }
                        },
                        {
                            "Typ av lärresurs", new [] { "Böcker" }
                        }
                    }
                },
                new ResourceViewModel
                {
                    Title = "PULS Biologi 7-9 Fokus, fjärde upplagan",
                    Description =
                        "Fokus för att språket inte ska vara hindret\r\nPULS Fokus är för elever som upplever NO som svårt och som har behov av ett enklare språk. Texterna är anpassade för att underlätta läsning och läsförståelse. Fokusböckerna är helt parallella med PULS-seriens grundböcker. Både Fokusböckerna och grundböckerna är kompletta läroböcker som tar upp ämnenas alla viktiga områden. Det går utmärkt att använda böckerna parallellt i klassrummet.\r\n\r\nAlla NO-ämnen\r\nPULS Fokusserien finns i ämnena biologi, kemi och fysik. Såväl Fokusböckerna som grundböckerna är väl förankrade i Lgr 11 och anpassade för att eleverna ska utveckla de förmågor som beskrivs. I samtliga böcker avslutas varje kapitel med instuderingsfrågor samt en sammanfattning som lyfter fram det viktigaste i kapitlet.\r\n\r\nFokus Arbetsbok\r\nAlla böcker i serien Puls NO 79 Fokus kan kompletteras med arbetsböcker. De har uppgifter sorterade efter böckernas innehåll och lämpar sig väl som instuderingsuppgifter i samband med läsning av texten.\r\n\r\nLärarhandledning\r\nTill samtliga böcker i PULS-serien finns lärarhandledningar i pdf-format som kan laddas ner och delas med kollegor. Lärarhandledningarna ger många tips på hur du kan arbeta med bokens innehåll och förslag på övningar.\r\n\r\nDigitalbok\r\nSamtliga böcker i serien PULS Grundbok och PULS Fokus finns även som digitalböcker med inläst text, interaktiva bilder, filmer och självrättande övningar.\r\n\r\n",
                    ImageUri = new Uri("https://www.bokinfo.se/Images/Products/Medium/978912/9789127421677.jpg"),
                    ResourceUri = new Uri("https://someresource"),
                    Classifications = new Dictionary<string, string[]>
                    {
                        {
                            "Ämne", new [] { "Biologi" }
                        },
                        {
                            "Ålder", new [] { "7-9" }
                        },
                        {
                            "Typ av lärresurs", new [] { "Böcker" }
                        }
                    }
                },
                new ResourceViewModel
                {
                    Title = "PULS Fysik 7-9 Fokus, fjärde upplagan",
                    Description =
                        "Fokus för att språket inte ska vara hindret\r\nPULS Fokus är för elever som upplever NO som svårt och som har behov av ett enklare språk. Texterna är anpassade för att underlätta läsning och läsförståelse. Fokusböckerna är helt parallella med PULS-seriens grundböcker. Både Fokusböckerna och grundböckerna är kompletta läroböcker som tar upp ämnenas alla viktiga områden. Det går utmärkt att använda böckerna parallellt i klassrummet.\r\n\r\nAlla NO-ämnen\r\nPULS Fokusserien finns i ämnena biologi, kemi och fysik. Såväl Fokusböckerna som grundböckerna är väl förankrade i Lgr 11 och anpassade för att eleverna ska utveckla de förmågor som beskrivs. I samtliga böcker avslutas varje kapitel med instuderingsfrågor samt en sammanfattning som lyfter fram det viktigaste i kapitlet.\r\n\r\nFokus Arbetsbok\r\nAlla böcker i serien Puls NO 79 Fokus kan kompletteras med arbetsböcker. De har uppgifter sorterade efter böckernas innehåll och lämpar sig väl som instuderingsuppgifter i samband med läsning av texten.\r\n\r\nLärarhandledning\r\nTill samtliga böcker i PULS-serien finns lärarhandledningar i pdf-format som kan laddas ner och delas med kollegor. Lärarhandledningarna ger många tips på hur du kan arbeta med bokens innehåll och förslag på övningar.\r\n\r\nDigitalbok\r\nSamtliga böcker i serien PULS Grundbok och PULS Fokus finns även som digitalböcker med inläst text, interaktiva bilder, filmer och självrättande övningar.\r\n\r\nStudiestöd på arabiska och somaliska\r\nTill PULS Fokus Fysik finns studiestöd på arabiska och somaliska (inlasningstjanst.se).\r\n\r\n",
                    ImageUri = new Uri("https://www.bokinfo.se/Images/Products/Medium/978912/9789127421691.jpg"),
                    ResourceUri = new Uri("https://someresource"),
                    Classifications = new Dictionary<string, string[]>
                    {
                        {
                            "Ämne", new [] { "Fysik" }
                        },
                        {
                            "Ålder", new [] { "7-9" }
                        },
                        {
                            "Typ av lärresurs", new [] { "Böcker" }
                        }
                    }
                },
                new ResourceViewModel
                {
                    Title = "Summit matematik Elevbok Digital",
                    Description =
                        "Bokens tydliga struktur och lättlästa text hjälper eleven att behålla fokus. Summit sammanfattar grundskolans matematik på en grundläggande nivå vilket gör det lättare att klara kunskapskraven för matematik årskurs 9.\r\n\r\nInläst ljud\r\nDigitalboken har inläst ljud för elever som behöver få texten uppläst. På så sätt kan boken hjälpa eleven med språkinlärningen.\r\n\r\nBehåll fokus med tydlig struktur\r\nMed en tydlig struktur, lugn layout och en lättförståelig svenska hjälper Summit eleven att behålla fokus och enkelt se sina framsteg. Inga lösa blad att hålla reda på, ingen växling mellan lärobok och skrivhäfte. Eleven skriver direkt i boken och ser sina lösningar ihop med uppgiften.\r\n\r\nLättläst som stärker förståelse\r\nSummit är skriven på lättläst svenska. Ord och begrepp är dessutom granskade med tanke på elever med annat modersmål.\r\n\r\nEleven ser sina framsteg\r\nNär eleverna öppnar Summit finns en karta över den färdväg som ligger framför dem. Här markerar och utvärderar de själva varje avklarad etapp, och du som lärare har möjlighet att ge ditt omdöme direkt i elevens bok. Base Camp och Check Point visar dem vägen genom matematiken på väg till toppen. Där går de i mål och klarar kunskapskraven för årskurs 9.\r\n\r\nElevnära exempel ger mening\r\nExempel är ofta kopplade till saker i elevens närhet och tankar om framtiden. Det kan handla om telefoner, transportmedel, lön för extrajobb eller kostnader för bilskola. Matematiken blir konkret och meningsfull.\r\n\r\nLicenstid: 365 dagar",
                    ImageUri = new Uri("https://www.bokinfo.se/Images/Products/Medium/978912/9789127443709.jpg"),
                    ResourceUri = new Uri("https://someresource"),
                    Classifications = new Dictionary<string, string[]>
                    {
                        {
                            "Ämne", new [] { "Matematik" }
                        },
                        {
                            "Ålder", new [] { "7-9" }
                        },
                        {
                            "Typ av lärresurs", new [] { "Digital" }
                        }
                    }
                },
                new ResourceViewModel
                {
                    Title = "Un été très cool åk 7 Textbok",
                    Description =
                        "Un été très cool är skriven utifrån det centrala innehållet i kursplanen för moderna språk. Fokus ligger på muntlig kommunikation, vardagliga, välbekanta situationer och på att våga använda språkliga strategier för att förstå och göra sig förstådd.\r\n\r\nStor identifikation\r\nHuvudpersonerna, med begränsade kunskaper i franska, är i samma ålder som eleverna vilket underlättar identifikationen. Berättelsen börjar på svenska men övergår i franska allteftersom ungdomarna blir säkrare på språket. Tanken är att låta eleverna uppleva hur man kan lära sig ett nytt språk genom att vara nyfiken, våga prata men också säga fel, gissa vad ord betyder, lära sig associera för att komma ihåg nya ord, samt använda kroppsspråket och andra strategier.\r\n\r\nBerättelsen i åk 7\r\n13-åriga Jesper från Luleå är förväntansfull när han åker med familjen på semester till Nice. I sin resedagbok beskriver han sina upplevelser och vi får bland annat följa med familjen på utflykt till Eze och Monaco. Jesper lär känna franska Lina och hennes kompisar. De tillbringar mycket tid tillsammans runt Place Masséna och Promenade du Paillon. Och Jesper blir förälskad, inte bara i staden Nice ...\r\n\r\nÖvningarna i Un été très cool\r\nI varje kapitel finns bland annat ord och fraser som behövs för att börja kommunicera på ett nytt språk, en inledande uppgift med detaljerade illustrationer som skapar förförståelse, minst två hörövningar och en gruppaktivitet där eleverna får använda språket. Uttal och intonation tränas systematiskt. Kulturkunskap varvas med uppgifter för att söka information på internet. Efter varje kapitel utvärderar eleverna sina kunskaper.\r\n\r\nMaterialet i åk 7 består av:\r\n* Textbok\r\n* Övningsbok\r\n* Elevwebb (extramaterial)\r\n* Textbok Digital\r\n* Övningsbok Digital\r\n* Lärarhandledning Webb\r\n\r\nKostnadsfritt extramaterial\r\nUn été très cool fortsätter på webben! Här finns inlästa texter och hörövningar, samt interaktiv ord- och grammatikträning.\r\n\r\nDigitalbok\r\nI digitalböckerna är all text inläst.\r\n\r\nLärarhandledning\r\nLärarhandledningen är webbaserad och innehåller allt elevmaterial samt facit. Här finns också arbetsblad, diagnostiska prov samt färdighetsprov med bedömningsmatriser. Licensen gäller för en lärare i 12 månader.",
                    ImageUri = new Uri("https://www.bokinfo.se/Images/Products/Medium/978912/9789127455191.jpg"),
                    ResourceUri = new Uri("https://someresource"),
                    Classifications = new Dictionary<string, string[]>
                    {
                        {
                            "Ämne", new [] { "Franska" }
                        },
                        {
                            "Ålder", new [] { "7-9" }
                        },
                        {
                            "Typ av lärresurs", new [] { "Böcker" }
                        }
                    }
                }
            };
        }
    }
}