<!--- 
https://www.markdownguide.org/basic-syntax/
https://docusaurus.io/docs/markdown-features/toc
-->


<!--- to test
## Obsah
toc_min_heading_level: 2
toc_max_heading_level: 5
-->

&nbsp;

##	ÚČEL DOKUMENTU
Tento dokument obsahuje uživatelskou dokumentaci poskytující obecný popis funkcionalit aplikace Zoty. Nedává univerzální návod pro implementaci Zoty v konkrétní organizaci. Nastavení celého systému doporučujeme vždy konzultovat s kvalifikovaným implementačním partnerem. Navrhne řešení a doporučí, jak využít dané funkcionality tak, aby co nejlépe podpořily proces řízení aktiv a rizik s ohledem na zvyklosti či specifické potřeby konkrétní organizace.

:::info
Aplikace Zoty je neustále rozvíjena a vylepšována. Pokud naleznete jakýkoliv nesoulad této dokumentace s vaší aktuální verzí Zoty, předejte jej prosím prostřednictvím libovolného komunikačního kanálu na [Zoty podporu](#zoty-podpora).     
Budeme vám vděční za veškeré podněty a připomínky.
:::                

&nbsp;

##	ZÁKLADNÍ POUŽÍVANÁ TERMINOLOGIE

- **Entita** – obecný termín pro veškeré objekty v systému, které mohou být různého typu, např. *Riziko, Hrozba, Zranitelnost, Aktivum,* atp. (viz [Typy entit a jejich kódové značení](#typy-entit-a-jejich-kódové-značení)). Přičemž entity stejného typu mají shodné chování a vlastnosti, jež jsou definovány pomocí atributů.      
Pro každou entitu lze také nastavit její ***Důležitost*** v rozsahu *1-Nevýznamná, 2-Nízká, 3-Normální, 4-Vysoká, 5-Kritická*.

- **Atribut** – může být různého typu, např. jako textový řetězec, časový údaj, celé nebo reálné číslo atp. a popisuje vlastnosti entity (např. *Název, Popis, Datum platnosti, Správce, Náklady* atp.). Některé atributy mohou nabývat hodnot jen z přesně definované množiny – číselníku.
- **Záznam** – výskyt jedné konkrétní entity. Dle typu entity lze pak záznamy třídit do stejnojmenných kategorií (*Rizika, Aktiva, Úkoly* atp.) reprezentovaných [složkami](#313složky-a-záznamy) v příslušném registru. Pro záznam libovolné entity lze též nastavit různé úrovně [oprávnění přístupu](#3132oprávnění-přístupu-na-záznamy).
- **Klíč** – entity mají atribut ***Klíč***, který jednoznačně identifikuje všechny záznamy v Zoty a usnadňuje jejich vyhledávání a třídění. Je to alfanumerický kód, který je systémem automaticky generován. Klíč je složen z pořadového čísla a kódu reprezentujícího [zkratku typu entity](#typy-entit-a-jejich-kódové-značení), ke které záznam patří. Např. riziko může mít klíč „*R13*“.       

:::info
Pokud klíč obsahuje zkratku typu entity, ke které je na konci přidáno písmeno „*Z*“, indikuje to záznamy přednaplněné v systému Zoty výrobcem. Ten pak může tyto specifické záznamy automaticky aktualizovat v rámci distribuce nových verzí aplikace a uživatelé je tudíž nemohou zcela volně editovat.
:::        
          
- **Nástrojová lišta** – horní vodorovný panel s informačními a ovládacími prvky celé aplikace Zoty nebo pracovní plochy jednotlivých sekcí.
- **Ovládací panel** – levý svislý panel s menu pro přístup k jednotlivým sekcím s funkcionalitami aplikace Zoty a registry entit.
- **Sekce / podsekce** – funkcionality aplikace Zoty dostupné z ovládacího panelu nebo nástrojové lišty; některé sekce mohou také reprezentovat samostatné aplikační moduly, které fungují i zcela autonomně a jsou licencované jako samostatné produkty, např. ***Zoty Designer***.
- **Seznam** – způsob zobrazení záznamů v řádkové režimu, které lze třídit, filtrovat, vybírat či prohledávat.
- **Strom** – způsob zobrazení záznamů entit v režimu stromové struktury složek, které se mohou strukturovat do dalších podřízených složek. Pro každou složku lze nastavit různé úrovně oprávnění přístupu. Více k tomuto nastavení v kapitole [Oprávnění](#3132oprávnění-přístupu-na-záznamy). 
- **Detail** – způsob zobrazení jednoho vybraného záznamu entity v režimu okna, které je v horním vodorovném pruhu opatřeno záložkami ***Přehled*** atributů, ***Aktivity*** uživatelů, ***Propojení*** na jiné entity, ***Hodnocení*** (zobrazuje se pouze pro typy entity, které lze hodnotit) s možností vytvořit nové nebo zobrazit stávající hodnocení,mitigační ***Opatření***, která mohou být propojena na cílová hodnocení rizik, ale i aktiv, hrozeb či zranitelností, ***Skupiny***, do kterých je záznam zařazen a ***Schválení*** (zobrazuje se pouze pro typy entity, které se mohou schvalovat) s možností neschválené entity schválit nebo u již schválených entit zobrazit detaily schvalovacího workflow a nakonec záložka ***Oprávnění*** s přehledem uživatelů a/nebo rolí a úrovně oprávnění jejich přístupu k tomuto záznamu.
- **Rychlá záložka** – uživatel si může připínat pomocí ikony připínáčku libovolné záznamy z jejich detailu nebo i z výsledků vyhledávání do záložek, které jsou pak zobrazeny ve spodní části pracovní plochy. Připnuté záznamy jsou tak velmi rychle dostupné a lze se mezi nimi snadno přepínat na jedno kliknutí, bez ohledu na to, ve které sekci Zoty se uživatel právě nachází.
- **Registr** – místo, kde lze ukládat a spravovat entity daného [typu](#typy-entit-a-jejich-kódové-značení) (např. Aktiva), zpravidla do předem vytvořené struktury složek, které mohou reprezentovat různé typy či kategorie entit, v tomto příkladu aktiv, např. *Hardware, Software, Informace, Procesy* atp. Registr je, podobně jako funkcionality v sekcích, dostupný z menu ovládacího panelu.
- **Katalog** – uživatelsky definovatelná struktura složek, kde lze, v rámci příslušného registru, zobrazovat entity uložené v tomto registru. V katalozích jsou pak pouze odkazy (zástupci / výskytové kopie) na definiční originály entit uložených v registru.
- **Metoda** – Metoda je, zjednodušeně, systémový filtr. Tzn., že u těch typů entit, kterým lze přiřadit metodu, lze skrýt nebo zobrazit záznamy, podle toho, zda a k jaké metodě jsou přiřazeny; případně lze zobrazit/skrýt určité specifické atributy entity závislé pouze na konkrétní metodě. Základní koncept a účel metod je detailněji popsán v kapitole [Metody](#metody).
- **Tooltip** – nápověda, která se uživateli zobrazí, když umístí kurzor myši na specifický objekt, například ikonu nebo odkaz. V Zoty se používá i všude tam, kde by nebylo praktické zobrazovat dlouhé řetězce znaků. Typicky dlouhé názvy, kdy se namísto toho zobrazuje kratší identifikátor, např. klíč nebo pouze zkrácený název a celý název se zobrazí až v tooltipu.

-----------------------------------------

 #### Typy entit a jejich kódové značení:
  -	***A*** – Aktivum (obecného typu) 
  -	***AA*** – Analýza aktiv
  -	***AGR*** – Smlouva
  -	***AUD*** – Audit
  -	***AUDC*** – Kontrola
  -	***AUDN*** – Neshoda auditu
  -	***AUDR*** – Doporučení auditu
  -	***C*** – Šablona opatření (Control)
   -	***DATA*** – Aktivum typu Data
   -	***E*** – Hodnocení (Evaluation)
   -	***F*** – Složka (Folder)
   -	***FP*** – Aktivum typu Funkční místo / Pracovní pozice
   -	***HW*** – Aktivum typu Hardware
   -	***I*** – Incident
   -	***ICH*** – Významná změna
   -	***INF*** – Aktivum typu Informace
   -	***KNW*** – Aktivum typu Znalost
   -	***LOC*** – Aktivum typu Lokalita
   -	***M*** – Model
   -	***O*** – Cíl (Objective)
   -	***OU*** – Aktivum typu Organizační jednotka
   -	***PER*** – Aktivum typu Pracovník
   -	***PROD*** – Aktivum typu Produkt
   -	***PROC*** – Aktivum typu Proces
   -	***PROJ*** – Aktivum typu Projekt
   -	***R*** – Riziko
   -	***REQ*** – Požadavek (Requirement)
   -	***REQD*** – Odvozený požadavek (Derived Requirement)
   -	***ROLE*** – Aktivum typu Role
   -	***RTP*** – Plán zvládání rizik
   -	***SW*** – Aktivum typu Software
   -	***SR*** – Servisní požadavek
   -	***C*** – Šablona opatření
   -	***T*** – Hrozba (Threat)
   -	***TA*** – Aktivum typu Hmotný majetek (Tangible asset)
   -	***TASK*** – Úkol
   -	***V*** – Zranitelnost (Vulnerability)
   -	***VEN*** – Aktivum typu Dodavatel
   -	***WF*** – Workflow
   -	***WGT*** – Aktivum typu Pracovní skupina a tým

&nbsp;

## 3	UŽIVATELSKÉ PROSTŘEDÍ {#myUserExp}
Uživatelské prostředí Zoty je navrženo tak, aby funkcionality a ovládací prvky, které jsou k dispozici na více místech v aplikaci, se chovaly a ovládaly z jakéhokoliv místa stejně.     
Zoty v tomto ohledu myslí i na hendikepované osoby se zrakovým postižením. Tito uživatelé si mohou v [nastavení svého profilu](#393-mé-nastavení) přizpůsobit uživatelské prostředí dle svých preferencí a s ohledem na svůj zdravotní hendikep. Pro vizualizace dat pomocí různých typů grafů lze např. volit ze sad barevných palet uzpůsobených pro uživatele s poruchami barvocitu. Navíc barva samotná, je-li v Zoty nositelem informací, tak pouze doplňkových. Jinak je vždy kombinována s textem. Slabozrací uživatelé zase ocení možnost zvětšit všechny grafické prvky tvořící uživatelské prostředí Zoty, včetně veškerých textových popisků.

:::info
Pro většinu uživatelů není nezbytné studovat tuto část manuálu pro zvládnutí základního ovládání.
:::

&nbsp;

### 3.1	Ovládání aplikace a vizualizace dat
Nabídka voleb z menu v levém ovládacím panelu poskytuje přístup k jednotlivým funkcionalitám a registrům Zoty, kde jsou uloženy příslušné typy entit a zpravidla též zatříděny do kategorií pomocí složek.     
Ovládací panel lze jednoduše skrýt či zobrazit kliknutím na jeho záhlaví s názvem Zoty účtu a zvětšit tak hlavní pracovní plochu vpravo vedle tohoto panelu.

<img src="/docs/img/3-zoty-menu.png"  title="Menu ovládacího panelu" />

&nbsp;

Hlavní **pracovní plocha** aplikace Zoty zobrazuje většinou některý z registrů entit nebo funkcionality příslušné sekce aplikace. Tato pracovní plocha pak ještě může být tvořena jedním či více **panely** a informačními [**kartami**](#nastavení-karet). Pracovní plochy a panely jednotlivých sekcí bývají často vybaveny horním horizontálním pruhem s nástrojovou lištou a ovládacími prvky specifickými pro danou sekci.
        
Registry jsou standardně vizualizovány pomocí dvou panelů pracovní plochy. V levém panelu se zobrazuje stromová struktura složek obsahující [entity určitého typu](#typy-entit-a-jejich-kódové-značení) (např. aktiva nebo rizika atp.). Zatímco pravý panel pak může zobrazovat různý obsah podle toho, jakou záložku (např. ***Aktivity, Propojení, Oprávnění, Schválení*** atp.) vybere uživatel v nástrojové liště pracovní plochy. Při výběru složky v levém panelu bude nabídka záložek jiná než při výběru entity. Přičemž i entity různého typu mohou mít specifickou nabídku záložek. Některé záložky mohou být také určitým uživatelům skryté s ohledem na omezení definovaná v rámci nastavení jejich uživatelských oprávnění.      
Výchozí záložkou je ***Přehled***, která v pravém panelu zobrazuje přehled všech atributů a dalších informací, jež lze evidovat u konkrétní složky nebo entity, vybrané z registru v levém panelu.

<img src="/docs/img/3-pracovni-plocha.png" title="Pracovní plocha aplikace Zoty" />

&nbsp;

V tomto výchozím přehledovém zobrazení je na pracovním panelu jeden vnější vertikální posuvník pro posun celého panelu. Pro entitu, která má mnohem více atributů než složka, je zde navíc ještě jeden vnitřní posuvník pro posun obsahu okna uvnitř panelu se všemi atributy entity. Pro jejich zobrazení je též možné, namísto rolování obsahu okna vnitřním posuvníkem, „rozbalit“ celý jeho obsah pomocí ovládacího prvku se symbolem šipky dolů. Stejným způsobem lze pak obsah okna zase „sbalit“ zpět.      

K entitám lze pomocí ikony se symbolem „**+**“ připojovat [organizace](#1621organizace), [metody](#metody), [štítky](#14štítky) a soubory. Příklad na obrázku demonstruje připojení dalších štítků, přičemž lze vybírat z dříve vytvořených nebo vytvořit a připojit štítek nový. Nově vytvořený štítek se automaticky ukládá pro případné další použití.      

V Zoty jsou dva základní způsoby zobrazení entit a složek – **detail** a **seznam**.    

#### Zobrazení detailu
Toto zobrazení skryje levý panel s registrem a celá pracovní plocha je tak využita pro lepší zobrazení všech relevantních informací k vybrané entitě nebo složce.     
Zobrazit detail entity nebo složky lze pomocí stejnojmenného tlačítka na panelu vpravo dole nebo též pomocí ikony se symbolem pravé šipky vpravo nahoře. Tyto volby nejsou dostupné pro entity, které čekají na schválení, tzn. schvalovací workflow již u nich bylo zahájeno, a ještě nebylo dokončeno (stav entity je *Schvaluje se*).

#### Zobrazení seznamu
V nástrojové liště aplikace, vpravo nahoře, je ikona ***Seznam entit***, která skryje levý panel s registrem a celá pracovní plocha je tak využita pro zobrazení řádkového seznamu všech entit uložených ve vybraném registru. Opakované kliknutí na tuto ikonu umožňuje rychle se přepínat mezi zobrazením tohoto seznamu v jednom panelu a zobrazením dvou panelů se stromem a záložkami. Přičemž se v druhém panelu zobrazí poslední zvolená záložka, která se pamatuje, dokud uživatel nevybere některou sekci v ovládacím panelu. Pokud nebyla žádná zvolena, zobrazí se výchozí záložka ***Přehled***.


Vpravo nad panelem seznamu entit lze vybrat některý z předdefinovaných filtrů a zúžit seznam na zobrazení pouze těch entit, které jsou uloženy v konkrétní složce (*Dle složky*) nebo jsou zvoleného typu entity. Vlevo nad panelem seznamu entit se pak zobrazí informace o počtu záznamů, které odpovídají definici zvoleného filtru.


Nastavení šířky panelů pracovní plochy lze konfigurovat pomocí symbolu zubatého kola v pravém horním rohu pracovní plochy. Lze pak lépe využít šířku pracovní plochy s ohledem na velikost displeje, zejména poměr jeho stran. Toto nastavení se pak použije také pro ostatní panely použité i na jiných místech aplikace Zoty. Stejnou možnost konfigurace mají uživatelé k dispozici také v [nastavení svého profilu](#393-mé-nastavení). 

<img src="/docs/img/3-konfigurace-panelu-pracovni-plochy.png " title="Konfigurace nastavení šířky panelů pracovní plochy" width="600"/>

&nbsp;

Takto lze zvětšit velikost pravého panelu pracovní plochy na úkor levého, při zobrazení detailu pak bude přes celou šířku pracovní plochy.     
Pro malé displeje, které mají nastavené vertikální rozlišení 1440 px a nižší, není toto nastavení dostupné.

:::tip
Další možností, jak zvětšit pracovní plochu v Zoty, je maximalizovat zobrazovanou plochu okna internetového prohlížeče ve Windows pomocí funkční klávesy F11 (nebo alternativně na MacOS - Control + Command + F). Opakovaným stisknutím F11 je pak možné vrátit se zpět do původního nastavení zobrazení.
:::

Podobně, jako pracovní plochy a panely jednotlivých sekcí mají své nástrojové lišty, tak i samotné Zoty má **nástrojovou lištu aplikace**. Je umístěna v horním, fialově podbarveném horizontálním pruhu nad pracovní plochou a poskytuje informace, obecné funkcionality a ovládací prvky pro celou aplikaci Zoty:

-	Zoty (informace o aplikaci)
-	Kalendář
-	Schválení
-	Vyhledávání
-	Nastavení globálního filtru
-	Nastavení globálních metod
-	Notifikace
-	Profil uživatele s jeho aktivitami, nastavením a možností odhlášení

&nbsp;

### 3.2	Zoty – O aplikaci

#### Zoty podpora
Zde jsou uvedeny důležité kontakty na **hotline** (607 007 700) a na webový **helpdesk portál** pro podporu aplikace Zoty https://zoty.support, který je preferovaným komunikačním kanálem. Jako alternativní komunikační kanál lze též využít e-mail kontakt.       
Naleznete zde i odkaz na **uživatelský manuál**, který obsahuje průběžně aktualizovanou dokumentaci k poslední uvolněné verzi aplikace Zoty. Nové verze dokumentace nejsou vydávány pro opravné patche, tj. pro ty verze Zoty, kde ve značení čísla verze dochází ke změně na posledních dvou místech.

#### Verzování Zoty
Číslo aktuální verze je doporučeno uvádět při každém kontaktu s týmem podpory Zoty.
 
Číslování Zoty verzí má syntaxi ***X.YY.ZZ***. Kde ***X.YY*** značí číslo verze (složené z verze hlavní "***X***" a vedlejší "***YY***"), která přináší nové či vylepšené schopnosti a funkcionality. Zatímco "***ZZ***" je označení pro tzv. „opravný patch“, který pro aktuální verzi přináší opravy chyb, odstraňuje případné zranitelnosti, či optimalizuje kód, s cílem zvýšit výkon, spolehlivost a zabezpečení aplikace Zoty.

:::info
Vždy, když se *Všeobecné obchodní podmínky pro poskytování licencí a údržby* odkazují na číslo verze Zoty, je tím myšleno označení verze *X.YY*.
:::

&nbsp;

### 3.3	Kalendář
V kalendáři lze zobrazit pro zvolený měsíc všechny záznamy filtrované dle data, kdy byly vytvořeny nebo aktualizovány nebo nastavit přihlášenému uživateli zobrazení všech jeho záznamů, u kterých je správcem. V kalendáři se takto zobrazují záznamy entit typu: *Incidenty, Požadavky, Cíle, Aktiva, Projekty, Procesy, Úkoly, Hrozby, Zranitelnosti, Rizika, Hodnocení*.

<img src="/docs/img/3-kalendar.png" title="Kalendář" />

&nbsp;

### 3.4	Schvalovací workflow
V sekci **Schválení** se zobrazuje seznam entit typu *aktiva* a *rizika*, které musí nejprve projít procesem schválení v rámci obecného schvalovacího workflow.     
V nástrojové liště se zobrazuje ikona, která upozorňuje na počet záznamů čekajících na schválení.

<img src="/docs/img/3-schvaleni-notifikace.png" title="Notifikace – entity ke schválení" width="300"/>

Po kliknutí na notifikační ikonu se zobrazí výpis záznamů všech entit čekajících na schválení. Ty lze schvalovat, a to buď jednotlivě nebo hromadně.

<img src="/docs/img/3-schvaleni-jednotlive.png" title="Schválení" />

&nbsp;

Možnost hromadného schválení, stejně jako možnost hromadného přiřazení schvalovatele, se zobrazí ve spodním modrém pruhu poté, co uživatel vybere záznamy ze seznamu kliknutím do zaškrtávacího pole v prvním sloupci seznamu.

<img src="/docs/img/3-schvaleni-hromadne.png" title="Schválení - hromadné" />

&nbsp;

Hromadně lze schválit entity tak, jak jsou, tedy beze změn. Chce-li schvalovatel provést v rámci schvalovacího workflow libovolné úpravy schvalovaných entit, musí je schválit jednotlivě, každou samostatně. Pak může navrhovat libovolné úpravy, jak je patrné v příkladu na obrázku níže.

<img src="/docs/img/3-schvaleni-jednotlive-navrh-uprav.png" title="Schválení – Návrh úprav" width="420"/>

&nbsp;

Případné úpravy či doplnění chybějících informací ve schvalované entitě, se v posledním kroku schvalovacího workflow mohou potvrdit a schválit volbou stavu *Schválit a aplikovat změny*. Nebo může být stav schválení zvolen *Schválit beze změny*, *Vrátit* či *Zamítnout*, případně lze schvalování *Delegovat* na jiného schvalovatele.      
Zároveň může schvalovatel k tomuto schvalovacím workflow připojit svůj komentář. Komentář je povinný pro volby *Delegovat, Vrátit* a *Zamítnout*.

<img src="/docs/img/3-schvaleni-jednotlive-potvrzeni-zmen.png" title="Schválení – Návrh úprav" width="440"/>

&nbsp;

Kliknutím na tlačítko ***Potvrdit*** je schvalovací workflow dokončeno a příslušná entita dle zvoleného typu akce buď schválena nebo vrácena žadateli (např. k doplnění některých informací potřebných k úspěšnému schválení) nebo delegována na jiného schvalovatele nebo je schválení zamítnuto.

<img src="/docs/img/3-schvaleni-jednotlive-potvrzeni-zmen-approved.png" title="Schválení – Návrh úprav" width="580"/>

&nbsp;

Průběh každého workflow je dokumentován a uložen. Lze se k němu kdykoliv snadno vrátit a zobrazit kdy a jaké změny byly provedeny, kdo byl za schválení odpovědný, kdo jej vyžádal nebo jaká komunikace formou komentářů zde probíhala.
Přístup k těmto informacím zprostředkují tyto ikony:   
<img src="/docs/img/3-schvaleni-piktogramy-aktivity-a-comment.png" title="Schválení – dokumentace aktivit" width="90"/>

K jednotlivým schválením (instancím schvalovacích workflow) mají přístup všichni jeho ***účastníci***, tj.:
- ***Autor*** - uživatel, který příslušnou entitu (aktivum, riziko, atp.) nebo výstup (např. analýzu rizik) odeslal ke schválení a tím celé workflow inicioval, což může být jakýkoliv uživatel;;
- ***Schvalovatel*** – všichni uživatelé, kteří jsou či v minulosti byli k tomuto workflow přiřazeni v roli *Schvalovatele*;      
- ***Administrátor*** - uživatelé s touto rolí mohou do schvalovacího workflow také vstupovat a pokud se tak stane, a někteří z nich provedou jakékoliv změny v některém z kroků schvalovacího workflow, stávají se pak automaticky i oni účastníky tohoto workflow.      

Všichni tito uživatelé mají přístup ke schvalovacím workflow pouze za předpokladu, že mají povolen přístup do sekce **Schválení** v [nastavení oprávnění](#oprávnění-přístupu-do-aplikace).

Celý průběh schvalování je patrný z workflow diagramu níže. Ukazuje, kdy a jak se mění jednotlivé stavy workflow při vytváření nových entit typu *Riziko* nebo *Aktivum*, spolu se změnou stavů samotné schvalované entity, včetně zapojení uživatelských rolí, které mají oprávnění provádět příslušné kroky v rámci workflow.

&nbsp;

<img src="/docs/img/3-schvalovaci-workflow-diagram.png" title="Schvalovací workflow - diagram" width="680"/>

&nbsp;

:::info
Je-li odeslána ke schválení entita uživateli, který k ní má omezené oprávnění, tak se mu v seznamu schvalovacích workflow požadavek na schválení zobrazí, ale nemůže jej schválit ani zobrazit detail této entity. Musí pak požádat, aby mu k entitě bylo uděleno oprávnění nebo aby toto schválení bylo delegováno na jiného schvalovatele.
:::

&nbsp;

### 3.5	Vyhledávání
Vyhledávat lze globálně napříč celým systémem dle názvu nebo klíče entity s využitím symbolu lupy v nástrojové liště aplikace.

<img src="/docs/img/3-vyhledavani-globalni-vcetne-pripinani.png" title="Vyhledávání globálně s připínáním výsledků do rychlých záložek" />

&nbsp;

:::tip
Ikona připínáčku, která se zobrazuje vedle každého vyhledaného záznamu, umožní kterýkoliv z nich "připnout" do samostatné záložky. Ty jsou pak ve spodní části pracovní plochy kdykoliv připraveny na jedno kliknutí zobrazit detail tohoto záznamu. Takto uložené záložky se pamatují, dokud se uživatel neodhlásí nebo neobnoví okno prohlížeče (F5). 
:::

Někdy může být výhodné omezit vyhledávání jen na sekci s příslušným registrem, např. **Aktiva**, **Rizika** atp. Vyhledávání v těchto sekcích funguje obdobně, jako globální vyhledávání. Stačí pouze zadat část vyhledávaného řetězce do pole pro vyhledávání vedle symbolu lupy.

<img src="/docs/img/3-vyhledavani.png" title="Vyhledávání v sekci" width="600" />

&nbsp;

Vyhledávat lze fulltextově i v seznamech záznamů, které se nabízí při zadávání hodnot těch atributů, jež podporují takovýto způsob zadání výběrem ze seznamu.
Je-li zadávanou hodnotou atributu jiná entita, lze v seznamu entit pro výběr vyhledávat podle názvu nebo klíče entity.
Je-li zadávanou hodnotou atributu uživatel, lze v seznamu entit pro výběr uživatele vyhledávat podle jména nebo příjmení nebo role přiřazené uživateli.

&nbsp;

### 3.6	Filtry
V seznamech lze rychle filtrovat záznamy volbou z dostupných, výrobcem předdefinovaných filtrů.

<img src="/docs/img/3-filtry.png" title="Filtry" />

&nbsp;

Nebo lze také zvolit uživatelsky definovatelný filtr a nastavit jej dle vlastních preferencí.
Uživatelské filtry nabízejí možnost definovat filtrační podmínky dle obsahu různých atributů či vlastností, seskupených do filtračních kategorií. Pokud uživatel volí filtrační podmínky z atributů či vlastností v rámci jedné takovéto kategorie, aplikuje se mezi nimi podmínka ***NEBO*** (*OR*). Zatímco pokud je kombinuje v rámci různých kategorií, aplikuje se podmínka ***A*** (*AND*).

Příklad na obrázku níže demonstruje definici filtru pro vyhledání všech textových fragmentů (paragrafů, odstavců, písmen...) nějakého zákona (normy, směrnice, smlouvy atp.) mají garanta Martinu ***NEBO*** Adama ***NEBO*** jsou označeny jako auditní (daný fragment reprezentuje požadavek, který má být ověřován v rámci auditu, zda je s ním organizace ve shodě) ***A*** mají připojen alespoň jeden komentář.

<img src="/docs/img/3-filtr-kombinace-filtracnich-kategorii.png" title="Filtr - definice" width="400"/>

&nbsp;

### 3.7	Globální metody
Globální metody umožňují ze všech metod definovaných v [administraci](#metody) nastavit pouze ty, které chce organizace aktuálně využívat. Tzn., že pouze tyto nastavené globální metody se budou zobrazovat uživatelům v nabídce při výběru metody, např. při vytváření nové entity a jejího přiřazení do některé z metod.     
Volba ***Aplikovat globální filtr*** umožní převzít toto nastavení z globálních metod i do [globálního filtru](#36filtry), kde automaticky zapne parametr ***Metoda*** a do nastavení filtru převezme ty metody, které jsou v nastavení globální metody aktivované. Uživatelům jsou pak filtrovány pouze ty záznamy, jež mají přidělenou alespoň jednu z metod převzatých či definovaných v globálním filtru. Ostatní záznamy jsou skryté.

:::tip
Aby uživatelé nemuseli vždy zadávat metody pro nově vytvářené entity, lze pro ně nastavit **automatické přednastavení správné metody**. K tomu je potřeba propojit jejich uživatelské role s preferovanou metodou/metodami v [nastavení rolí](#1624role) v administraci účtu. A zde pak v konfiguraci také nastavit, zda se tyto metody mají uživateli pouze zobrazit a nabídnout pro výběr nebo rovnou i automaticky vybrat.
:::

&nbsp;

### 3.8	Notifikace
Systémová služba Notifikace informuje uživatele o všech aktivitách, které s ním mohou mít souvislost. Jedná se o aktivity, kdy je uživatel
Systémová služba ***Notifikace*** informuje uživatele o všech aktivitách, které s ním mohou mít souvislost. Jedná se o aktivity, kdy je uživatel
-	přiřazen k entitě jako její *Správce*;
-	správcem entity, která byla upravena, smazána nebo propojena vazbou s jinou entitou;
-	správcem entity, která byla zmíněna v komentáři;
-	zmíněn jiným uživatelem v komentáři;
-	v režimu prohlížení detailu záznamu, který jiný uživatel upravuje.    

Při prvním přihlášení uživatele se mu zobrazí výzva k uložení nastavení notifikací.

<img src="/docs/img/3-notifikace-vyzva-k-nastaveni.png" title="Výzva k nastavení notifikací" width="370"/>

&nbsp;

Tato výzva se bude zobrazovat i při každém dalším přihlášení, dokud uživatel nepotvrdí pomocí tlačítka ***Uložit*** své nastavení notifikací, tj. zda je chce či nechce zasílat.    
Notifikace jsou přednastaveny v konfiguraci „vypnuté notifikace“.

<img src="/docs/img/3-notifikace-vypnuto.png" title="Výzva k nastavení notifikací" width="690" />

Pokud tedy uživatel potvrdí výzvu k nastavení notifikací, v následujím kroku notifikace nezapne a pouze potvrdí tlačítko ***Uložit***, tak mu notifikace nebudou zasílány.    
Uživatel si může později toto nastavení změnit – notifikace lze kdykoliv vypnout, zapnout či změnit jejich nastavení dle aktuálních preferencí uživatele.
V nastavení lze konfigurovat, jaké typy notifikací se mají odesílat a zda má být notifikace odeslána okamžitě nebo v souhrnném e-mail reportu jehož četnost (denně nebo týdně) a čas odeslání si může uživatel nastavit.

<img src="/docs/img/3-notifikace-nastaveni.png" title="Notifikace - nastavení" width="710"/>

Dostupný výčet typů notifikací lze rozšířit formou zakázkové úpravy na základě požadavku uživatele.      
      
V nástrojové liště se vpravo zobrazuje ikona notifikací, informující o počtu nových notifikací, které jsou připraveny ve výpisu pro přihlášeného uživatele.
      
<img src="/docs/img/3-notifikace-ikona.png" title="Notifikační ikona" width="190"/>

Po kliknutí na notifikační ikonu se zobrazí výpis s rychlým náhledem posledních deseti událostí, které mají souvislost s přihlášeným uživatelem (entita, kde je přihlášený uživatel zmíněn nebo je jejím správcem, byla založena, upravena, smazána nebo propojena vazbou s jinou entitou). 
Tlačítko ***Zobrazit vše***, na konci tohoto seznamu, zobrazí kompletní výpis všech notifikací uživatele seskupených po jednotlivých dnech, včetně časové známky zaznamenané systémem pro každou notifikovanou událost.

<img src="/docs/img/3-notifikace-vypis.png" title="Notifikace - výpis" />

&nbsp;

Pokud dojde ke ztrátě spojení se Zoty serverem, ať už v důsledku výpadku síťového nebo internetového připojení, dlouhodobé nečinnosti v aplikaci, či z jiných příčin, systémová notifikační služba bude odpojena a veškeré notifikace budou pozastaveny.
V takovém případě Zoty zobrazí informaci, že připojení k notifikační službě bylo odpojeno a pokusí se o opětovné připojení za 20 sec.      

<img src="/docs/img/3-notifikace-sluzba-odpojeno-reconnect-1.png" title="Notifikace – výpadek služby" width="350"/>      
      
      
V případě úspěchu zobrazí informaci, že připojení ke službě bylo opět navázáno.      

<img src="/docs/img/3-notifikace-sluzba-obnoveno.png" title="Notifikace – obnovení služby" width="350"/>    
     
V případě neúspěchu zopakuje za 30 sec. ještě jednou pokus o připojení.      

<img src="/docs/img/3-notifikace-sluzba-reconnect-2.png" title="Notifikace – opakované připojení" width="350"/>
Pokud ani druhý pokus nebyl úspěšný, informuje uživatele.     

<img src="/docs/img/3-notifikace-sluzba-failed.png" title="Notifikace – pozastavení služby" width="350"/>
V takovém případě není služba notifikací funkční a je třeba kontaktovat vašeho správce IT. Až v případě, kdy se prověří, že chyba není způsobena výpadkem síťového nebo internetového připojení či jinou chybou ICT indrastruktury, obracejte se na [Zoty podporu](#zoty-podpora).

&nbsp;

### 3.9	Profil uživatele a odhlášení
V pravé části horní nástrojové lišty se zobrazuje jméno přihlášeného uživatele, pod kterým lze vyvolat nabídku:
-	Aktivity
-	Můj profil
-	Mé nastavení
-	Odhlásit se

&nbsp;

#### 3.9.1 Aktivity uživatele
Aktivity zobrazí všechny uživatelem provedené aktivity v Zoty, které se týkají zejména vytváření, úprav či odstranění složek, entit či jejich atributů, připojování komentářů, štítků, dokumentů k entitám, přiřazování správců entit, apod.       
Tento seznam aktivit je tedy filtrován podle přihlášeného uživatele. Uživatelé s rolí *Administrátor* nebo *Manažer entit* si ale mohou zobrazit seznam všech aktivit **všech** uživatelů, jak je dále popsáno v kapitole  [Aktivity uživatelů](#312aktivity-uživatelů).

#### 3.9.2 Můj profil
V této sekci lze zobrazit a editovat přihlašovací a identifikační údaje přihlášeného uživatele. Tyto údaje má možnost měnit pouze přihlášený uživatel nebo administrátor aplikace s příslušným oprávněním.

#### 3.9.3 Mé nastavení
V této sekci si může uživatel přizpůsobit Zoty dle svých preferencí pomocí voleb dostupných na záložkách ***Obecné*** a [***Email notifikace***](#38notifikace).    
Na záložce ***Obecné*** může volit **jazyk aplikace** a nezávisle na jazyku aplikace také **jazyk obsahu**, tj. v jakém jazyce mají být prezentována data. S tím, že pokud data nemají překlad v daném jazyce, zobrazí se alternativně v primárním jazyce, který je nastaven v administraci systému Zoty.    
Volba **Barvy grafů** umožňuje výběrem z řady různých sad barevných palet nastavit, jaká barevnost má být použita v grafech a dashboardech při vizualizaci dat.    
Volba **Velikost UI** optimalizuje celé pracovní prostředí Zoty aplikace zejména s ohledem na velikost a zozlišení displeje zařízení, na kterém uživatel provozuje aplikaci Zoty. Zvětšením či zmenšením lze zvolit optimální kompromis mezi velikostí zobrazovaných informací a množstvím dat, která budou zobrazena bez nutnosti rolovat vertikálním či horizontálním posuvníkem.      
Podobně i volba **Šířka panelů** přispívá k optimálnějšímu využití pracovní plochy tím, že jejich šířku si může uživatel nastavit dle svých preferencí a s ohledem na velikost displeje, zejména poměr jeho stran.

:::tip
Pro širokoúhlé displeje je doporučeno vyzkoušet volbu Maximální šířka panelů, která roztáhne panely pracovní plochy aplikace na celou šířku plochy zobrazované monitorem nebo displejem mobilního zařízení.
:::

&nbsp;

#### 3.9.4 Odhlásit se
Zde se může aktuálně přihlášený uživatel odhlásit a tím uvolnit licenci k použití pro další uživatele. Systém automaticky odhlásí neaktivní uživatele při nečinnosti delší než 72 hodin. Změna tohoto parametru je možná zadáním požadavku na vašeho dodavatele Zoty nebo přímo na [Zoty podporu](#zoty-podpora).  

&nbsp;

### 3.10	Komentáře
V celém systému je podporována týmová spolupráce díky rychlé a snadné interakci uživatelů pomocí sdílených komentářů. Pokud je uživatel jakýmkoliv jiným uživatelem zmíněn v komentáři, je na to upozorněn ikonou notifikací vpravo nahoře v nástrojové liště.
V komentáři lze zmínit jiného uživatele zadáním symbolu zavináče ***@***. Systém následně umožní vyhledání a výběr ze stávajících uživatelů Zoty. Všem takto zmíněným uživatelům dorazí notifikace, že byli zmíněni v tomto komentáři. Kliknutím na komentář si jej pak mohou ihned snadno zobrazit a případně na něj i rovnou reagovat.    
Podobným způsobem lze v komentářích zmínit také odkazy na libovolné entity v systému s pomocí znaku ***#***.    
Komentáře lze skrýt a zobrazit je pouze pro vybrané uživatele či role. Standardně jsou komentáře publikovány se statusem *Veřejné*. Pokud je před odesláním status komentáře změněn na *Soukromé*, zobrazí se nabídka ***Oprávnění***, kde lze zadat role, konkrétní uživatele či kombinaci obojího, pro které bude komentář viditelný.

<img src="/docs/img/3-komentare-opravneni.png"  title="Komentáře - oprávnění" width="560" />

&nbsp;

Soukromé komentáře indikuje ikona ***Oprávnění***:

<img src="/docs/img/3-ikona-opravneni-komentare.png"  title="Oprávnění pro komentáře" width="35" />

Po najetí ukazovátka myši nad tuto ikonu se zobrazí seznam s názvy rolí či jmen uživatelů, kteří mají oprávnění ke zobrazení tohoto komentáře.

<img src="/docs/img/3-komentare-opravneni-indikace.png" title="Komentáře – indikace nastavené restrikce" width="700"/>

&nbsp;

### 3.11	Propojení
K entitám lze připojovat soubory, [štítky](#14štítky), [metody](#metody), [organizace](#1621organizace), ale i jiné entity a zachytit tak vzájemné souvislosti.
Propojení entit mezi sebou navzájem lze zobrazit na záložce ***Propojení*** v detailu každé entity, kde lze také vytvářet nová propojení pomocí tlačítka ***Vytvořit***.

<img src="/docs/img/3-propojeni-seznam.png" title="Propojení – Seznam a vytvoření" width="700"/>

&nbsp;
      
#### 3.11.1	Vizualizace propojení pomocí diagramu
Propojení jsou zobrazena nejen seznamem propojených entit, ale i graficky pomocí diagramu.

<img src="/docs/img/3-propojeni-diagram-vizualizace-odstranene-entity.png" title="Propojení - diagram" />

&nbsp;

:::info
Pokud je nějaká entita odstraněna, je přesunuta do koše, ale v diagramu je přesto stále viditelná a je vizualizována červeně. V diagramu se přestane zobrazovat až po vysypání koše.
:::

&nbsp;

Při najetí ukazovátka myši nad libovolnou entitu v diagramu se zobrazí nabídka, která umožní zobrazit ***Detail*** a ***Vlastnosti*** této entity, tzn. veškeré její atributy, připojené soubory a komentáře.

<img src="/docs/img/3-diagram-propojeni-detail-a-vlastnosti.png" title="Detail a vlastnosti entity v diagramu propojení" />

&nbsp;

V pravé části záhlaví okna Diagramu je, vedle možnosti filtrace zobrazených entit, také ikona hierarchizace. Pokud mají entity zobrazené v diagramu nějakou další hierarchizaci v rámci svých propojení na další entity, tak každé kliknutí na tuto ikonu provede dekompozici v hierarchii jejich propojení o jednu další úroveň níže.

<img src="/docs/img/3-diagram-propojeni-1x-dekompozice.png" title="Hierarchizace - Dekompozice o další jednu úroveň níže" />
<img src="/docs/img/3-diagram-propojeni-2x-dekompozice.png" title="Hierarchizace - Dekompozice o další dvě úrovně níže" />

Pro rychlý návrat zpět do původního zobrazení lze použít obnovení okna prohlížeče (funkční klávesa F5).      

&nbsp;

#### 3.11.2	Typy vazeb propojení

V Zoty lze propojovat entity vazbami různého typu. Přičemž některé typy propojení jsou systémové (systém je vytváří automaticky, bez zásahu uživatele) a některé jsou uživatelsky volitelné. Pokud je vazba směrově orientovaná, tzn., že směřuje od zdroje k cíli, tak pak je zde též informace, jaký zdroj, s jakým cílem mohou být propojeny. Neboli určuje směr propojení. 
Systémová propojení jsou typu: *Stromová struktura, Výskyt, Zástupce, Rodič→Dítě*.
Účel a použití jednotlivých typů systémových propojení:
- ***Stromová struktura*** je často používaný typ směrově orientovaného propojení mezi složkami či entitami, kde je třeba modelovat hierarchickou strukturu vazeb, kdy jedna složka či entita vystupuje v roli nadřazené a ve stromové struktuře se pak pod ní zobrazují ostatní, jí podřazené složky/entity.
- ***Výskyt*** je využíván v modulu Zoty Designer při vizualizaci propojení entit tvořící procesní modely importované z procesního nástroje ARIS.
- ***Zástupce*** je odkaz v katalogu na entitu uloženou v registru.
- ***Rodič→Dítě*** může být propojení jak systémové, tak uživatelské, viz popis níže.

Uživatel pak ještě může při propojení entit volit výběrem z propojení typu: *Vztah, Podporuje, Blokuje, Závislost, Zahrnuje, Nezahrnuje, Rodič→Dítě*.
Účel a použití jednotlivých typů propojení:
- ***Vztah*** je univerzální typ propojení, který lze použít mezi libovolnými typy entit, které mohou existovat zcela nezávisle na sobě a není třeba modelovat směr propojení mezi nimi.
- ***Podporuje*** je typ směrově orientovaného propojení, pomocí kterého lze vyjádřit, že jedna entita souvisí s jinou a to způsobem, že jedna z nich (zdroj) podporuje entitu/entity další (cíl). Tímto typem propojení se vytvoří vazba směřující od zdroje k cíli. Tento typ propojení má navíc specifickou vlastnost, která pomocí atributu ***Váha*** (udává se v procentech v rozsahu 10-100 %) umožňuje stanovit míru podpory mezi entitami či důležitost entity podpůrné pro entitu podporovanou.    
Příkladem je propojení primárních a podpůrných aktiv.
- ***Blokuje*** je typ směrově orientovaného propojení, pomocí kterého lze vyjádřit, že jedna entita blokuje entitu jinou, tzn. že by nemělo dojít ke změně stavu blokované entity, aniž by předtím došlo ke změně stavu entity, která ji blokuje.    
Příkladem je propojení dvou entit typu Úkol, kdy úkol č.2 nelze dokončit nebo na něm začít pracovat dříve, než je dokončen úkol č. 1.
- ***Závislost*** je jednosměrná vazba vyjadřující obecnou závislost jedné entity na druhé; tento typ vazby je podobný typu vazby *Blokuje*, na rozdíl od něj ale nijak neurčuje způsob, jakým jedna entita na jiné závisí (tj. neříká, že je např. „blocker“), není tedy tak striktní. Tento typ propojení má navíc specifickou vlastnost, která umožňuje pomocí atributu ***Váha*** (udává se v procentech v rozsahu 10-100 %) určit míru závislosti jedné entity na druhé.
-	***Zahrnuje*** je jednosměrné vazba, pomocí které jedna entita agreguje jiné entity.
- ***Nezahrnuje*** je specifický způsob propojení pomocí jednosměrné vazby, kdy jedna entita vylučuje propojení s jinou entitou/entitami; to jsou případy, kdy je třeba např. dokumentovat výjimku z propojení a nelze to tedy provést tak, že se entity jednoduše pouze nepropojí.
- ***Rodič→Dítě*** je jednosměrné propojení od jedné entity – rodiče, na jinou entitu – dítě. Propojuje entity, kde jedna z nich nemůže existovat nezávisle na jiné, tzn. dítě (např. hodnocení) nemůže existovat bez rodiče (zde např. aktivum, riziko atp.). Tento typ propojení může být též vytvářen zcela automaticky systémem. Například je-li vytvářeno hodnocení nějaké entity. Pak tato entita vystupuje v roli „rodiče“ a připojené hodnocení v roli „dítěte“. Vše se realizuje na pozadí, bez zásahu uživatele.    
Propojení entit pomocí vazby typu *Rodič -> Dítě* je také nezbytné, má-li jedna hodnocená entita (dítě) přebírat výsledné skóre hodnocení jiné entity (rodiče) a zahrnout ji do výpočtu svého skóre hodnocení dle nastaveného schématu.

&nbsp;

### 3.12	Aktivity uživatelů
Zoty automaticky zaznamenává aktivity uživatelů v systému. *Aktivity* zobrazují přehled informací zejména o tom, jaké entity, kdy a jakým uživatelem byly nově přidány, změněny či smazány, jaké soubory byly k jaké entitě připojeny či odebrány, nebo jaké entity byly vzájemně propojeny vazbou. Do seznamu aktivit se zapisují i aktualizace obsahu atributů.    
*Aktivity* se zobrazují jednak v přehledu na úvodní stránce, kde se zobrazuje seznam posledních aktivit a pak také v detailu u každého typu entity pouze ty vybrané aktivity, kterého se dané entity týkají. Uživatel, který nemá přiřazenu roli *Administrátor* nebo *Manažer entit*, vidí pouze aktivity informující o entitách, kde je tento uživatel přiřazen jako *Správce*.

<img src="/docs/img/3-aktivity.png" title="Aktivity" />
   

### 3.13	Složky a záznamy
Jednotlivé [typy entit](#typy-entit-a-jejich-kódové-značení) (např. aktiva, rizika, hrozby, zranitelnosti, aj.) lze třídit do složek a ty dále strukturovat na podsložky podobně, jako např. v Průzkumníku Windows. 
Každá množina záznamů entit určitého typu může mít svoji vlastní strukturu složek a podsložek. Např. záznamy entit typu *Aktiva* mohou být strukturovány zcela odlišně než *Hrozby* či *Rizika*.     
Dokonce i záznamy entit jednoho typu, např. *Aktiva*, lze uspořádat do složek více různými způsoby v rámci tzv. katalogů. Na jedna a ta samá data je pak možné dívat se různými pohledy, aby tak bylo možné podpořit různé metodiky (např. kategorizace aktiv a práce s nimi může být jiná dle kybernetického zákona, jiná dle ISO 27001, atp.). Strukturace složek na více možných způsobů se dá také s výhodou využít i při sestavování různých reportů a vizualizacích dat, kde lze pak sumarizovat stejná data dle různých skupin či kategorií, reprezentovaných právě složkami.    
Aby tento přístup nevedl k duplicitám, kdy jedna konkrétní entita se vyskytuje ve více různých složkách v rámci různých katalogů, existuje jedna definice struktury složek definovaná pro každý [typ entity](#typy-entit-a-jejich-kódové-značení), tzv. ***Registr***. V registru má každý výskyt entity daného typu jedinečnou definici, která se pak může vyskytovat, formou odkazu na ni, v dalších, uživatelsky definovatelných pohledech, které se nazývají ***Katalogy***.    
Pojmy ***Registr*** a ***Katalog*** jsou blíže vysvětleny v kapitole [Základní používaná terminologie](#základní-používaná-terminologie).

#### 3.13.1	Správa složek a entit      
Ve stromové struktuře složek zobrazené v levém okně se po výběru složky či entity zobrazí její detail, který má v pravém horním rohu ikonu se symbolem tří teček s nabídkou základních operací, které lze se složkou či entitou provádět:
-	Upravit
-	Duplikovat
-	Archivovat
-	Přesunout
-	Odstranit
- Uzamknout
-	Exportovat

Tyto operace (vyjma exportu) nejsou dostupné pro uživatele, kteří mají přidělené systémové role s nižšími oprávněními, tj. role *Uživatel*, *Auditor* nebo *Moderátor* nebo mají nastavená omezená oprávnění nebo pokud je entita uzamčena. Uzamčená entita je pak v horním pravém rohu detailu entity vizualizována ikonou zámku. Uzamknout či odemknout entitu mohou pouze uživatelé, kteří mají přidělené systémové role s vyššími oprávněními, tj. role *Manažer entit* nebo *Administrátor*.

<img src="/docs/img/3-zamek-entity.png"  title="Uzamčení entity" width="850"/>

&nbsp;

:::tip
Pokud uživatel nemůže entitu/složku upravit nebo odstranit, přestože k tomu má oprávnění, je třeba zkontrolovat, zda u ní není zobrazen symbol zámku.
:::

&nbsp;

#### Přesouvání složek
Samotné entity, ale i celé složky, do kterých jsou entity zatříděny, lze ve stromové struktuře přesouvat. Ve stromové struktuře složek zobrazené v levém okně se vybere složka. Její obsah, který je třeba přesunout jinam, se zobrazí v pravém okně. Zde se v seznamu vyhledá záznam (ať už je to jiná složka nebo záznam entity např. typu Aktivum) a u něj lze přes ikonu se symbolem tří teček zobrazit menu s nabídkou ***Přesunout***. Zde pak lze změnit zatřídění vybraného záznamu v rámci stromové struktury a kliknutím na tlačítko ***Potvrdit*** provést jeho přesun.

#### Omezení obsahu složek
Pro podporu udržení přehlednosti, zejména při větším počtu různých [typů aktiv](#typy-aktiv) (ale i jakýchkoliv jiných [typů entit](#typy-entit-a-jejich-kódové-značení)), lze zajistit, aby systém hlídal, že do konkrétní složky nebude možné uložit jiné typy entit než ty, které administrátor povolil. V případě, že do složky bude povoleno ukládat více než jeden [typ entit](#typy-entit-a-jejich-kódové-značení), lze též přednastavit, jaký výchozí typ entity se má automaticky přednastavit, pokud bude uživatel do této složky vytvářet novou entitu.    
Administrátor tedy může upravit vlastnosti každé složky tak, že např. data, informace a znalosti, které v Zoty reprezentují tři různé specifické typy entit, umístí do tří samostatných složek nebo je naopak umístí do jedné společné a povolí do ní ukládat všechny tyto tři typy entit.

<img src="/docs/img/3-slozka-nastaveni-omezeni.png"  title="Omezení obsahu složek" width="370"/>

Pokud má být jeden [typ entity](#typy-entit-a-jejich-kódové-značení), umístěný např. ve složce *Hardware*, dále členěn pro větší přehlednost do více samostatných podsložek (např. *Servery, Pracovní stanice, Tiskárny* atp. …) tak potom volba ***Nastavit dle rodiče*** u všech podřízených složek zajistí, že povolené typy entity pro ně budou nastaveny takové, jak má nastavena nadřazená (rodičovská) složka, tedy v tomto příkladu *Hardware*.    
Vedle omezení obsahu složek lze také omezit samotný [přístup na složky a entity](#3132oprávnění-přístupu-na-záznamy) v nich zatříděné.

&nbsp;

#### 3.13.2	Oprávnění přístupu na záznamy
Pro každou složku i entitu lze nastavit různé úrovně oprávnění přístupu.

:::info
Zoty umožňuje aplikovat princip tzv. dědičnosti oprávnění. To znamená, že oprávnění lze definovat pro vybranou složku pouze jednou a automaticky je pak dědit do všech podřízených složek a entit v nich zatříděných.
:::

Ve výchozím nastavení jsou složky či záznamy v nich uložené viditelné všem uživatelům. To je zajištěno pomocí atributu ***Přístup***, který je při vytváření všech nových složek či entit automaticky přednastaven na hodnotu *Veřejný*.    
Pro omezení přístupu k vybraným složkám či záznamům je třeba atribut ***Přístup*** přepnout do stavu *Omezený* nebo *Soukromý* v nastavení oprávnění na detailu příslušné entity či složky.

<img src="/docs/img/3-pristup-na-slozku.png" title="Omezení přístupu k záznamu nebo obsahu složky" width="370"/>

&nbsp;

Takto nastavená restrikce pak omezí přístup pouze pro vybrané uživatele nebo role dle definovaných úrovní oprávnění, jak je popsáno níže. Nebo složku či záznam zcela skryje, takže ji ostatní uživatelé bez nastaveného oprávnění vůbec nevidí (soukromý přístup).

<img src="/docs/img/3-omezeny-pristup-info-pro-uzivatele.png" title="Omezený přístupu – info pro uživatele" width="770"/>

&nbsp;

Pro složky, záznamy všech typů entit a pro povolení pořizovat k nim [komentáře](#310komentáře), lze nastavit různé úrovně oprávnění přístupu – *Číst, Vytvořit, Upravit, Odstranit, Komentář*. Oprávnění lze definovat pro vybrané role nebo konkrétní uživatele nebo kombinací obojího.    
Pokud je nastaven přístup na *Omezený* nebo *Soukromý* a nejsou definována žádná oprávnění pro role nebo uživatele, tak budou mít k takovýmto složkám nebo entitám přístup pouze uživatelé s rolí administrátora.    
Na obrázcích níže je příklad nastavení oprávnění přístupu na konkrétní složku.

<img src="/docs/img/3-opravneni-na-slozku.png" title="Oprávnění" width="740"/>

&nbsp;

Oprávnění definovaná na úrovni složky lze volitelně dědit i na všechny v ní umístěné entity či podřízené složky. K tomu slouží volba *Aplikovat oprávnění na podřízené uzly*. 

<img src="/docs/img/3-opravneni-na-slozku-nastaveni.png" title="Nastavení oprávnění" width="350"/>

&nbsp;

Podřízenými uzly konkrétní složky se tedy rozumí všechny ty složky nebo entity, které jsou jí ve stromové struktuře podřízené. A to až do nejnižší úrovně zanoření, má-li tato konkrétní složka víceúrovňovou strukturu dalších podřízených složek, případně i spolu s entitami v nich zatříděnými.      
Pokud už složka či entita měla nastavena nějaká oprávnění, tak jsou nahrazena zděděnými.     
Platí i obráceně, že pokud jsou definována jakákoliv oprávnění, jedno pro které uživatele či role, přímo na úrovni složky či entity, které už ale mají oprávnění děděná, tak jsou všechna tato zděděná oprávnění odstraněna a nahrazena nově definovanými.     
V případě potřeby se lze velmi snadno vrátit do předchozího stavu před výmazem děděných oprávnění – aktivace volby *Zdědit přístup* na záložce ***Oprávnění*** v detailu složky či entity znovu zdědí oprávnění z nadřízeného uzlu. Tato volba je dostupná pouze pokud: 
- kdekoliv v nadřízeném uzlu je nastaveno omezení oprávnění, které se dědí do podřízených uzlů a
- oprávnění nejsou děděna, tzn. aktuálně jsou definována přímo na dané složce nebo entitě nebo nejsou zatím vůbec definována.

<img src="/docs/img/3-opravneni-zdedit-pristup.png" title="Oprávnění – zdědit přístup" width="650"/>

&nbsp;

A opět platí – všechna stávající oprávnění jsou touto akcí odstraněna a nahrazena těmi, které se zdědí z nadřízeného uzlu.

:::info
Pokud v rámci nastavení oprávnění je v atributu ***Přístup*** dostupná volba *Zdědit přístup*, není zde pak dostupná volba *Veřejný*. Tyto dvě volby se totiž vzájemně vylučují.     
      
Pokud je na složce nastavena dědičnost, tak se uplatní nejen na všechny stávající, ale i v budoucnu vytvořené podřízené složky.
:::

&nbsp;

#### Oprávnění z pohledu uživatele
Pokud je pro přihlášeného uživatele složka či entita viditelná, ale má nastaveno jakékoliv omezení v nastavení oprávnění pro některou z jeho rolí či přímo pro něj, tak se mu v detailu příslušné složky či entity zobrazí ikona "**!**" s varováním, že oprávnění k této složce nebo entitě jsou pro něj omezena. Po najetí ukazovátka myši nad tuto ikonu se zobrazí tooltip s informací, jaká konkrétní omezení jsou zde pro něj nastavena a pokud jsou zděděna z nadřízeného uzlu, tak je zobrazen i název složky reprezentující nadřízený uzel, odkud se tato oprávnění dědí.

<img src="/docs/img/3-opravneni-prihlaseneho-uzivatele-info-k-omezeni.png" title="Informace k omezení oprávnění přihlášeného uživatele" width="750"/>                

&nbsp;

#### Oprávnění z pohledu administrátora
Pro každou entitu nebo složku lze na záložce ***Oprávnění*** zobrazit seznam uživatelů a rolí s přehledem všech úrovní jim přidělených oprávnění včetně informace, zda jsou tato oprávnění děděna i na podřízené uzly neboli zda dědičnost na podřízené uzly je aktivní či neaktivní.

<img src="/docs/img/3-opravneni-na-slozku-prehled-a-editace.png" title="Přehled přidělených oprávnění" />

&nbsp;

Pokud jsou oprávnění k přístupu na složku či entitu zděděna z nadřízeného uzlu, tak ikona, která zobrazuje menu pro editaci či odstranění oprávnění, není dostupná, neboť správa těchto oprávnění je realizována na úrovni nadřízeného uzlu odkud jsou zděděna. Informace, který konkrétní nadřízený uzel je rodičem, odkud se oprávnění dědí a kde je tedy lze případně editovat či odstranit, je dostupná přes info ikonu ***Zdroj oprávnění***.

<img src="/docs/img/3-opravneni-na-slozku-info-o-dedicnosti.png" title="Info o rodiči - zdroj, odkud se dědí oprávnění"/>

Vzhledem k tomu, že lze definovat (nebo dědit) různé úrovně oprávnění zcela nezávisle pro uživatele a pro role, může nastat situace, kdy uživatel bude mít přiřazeny role, jejichž úroveň oprávnění pro některou složku či entitu bude v konfliktu s úrovní oprávnění, která jsou definována (nebo děděna) přímo pro tohoto konkrétního uživatele. Konflikt spočívá v tom, že uživatel může mít nějaké oprávnění povoleno, ale jemu přidělená role bude mít tu stejnou úroveň oprávnění (např. odstranění složky/entity) zakázanou.      
Zoty tento konflikt řeší tak, že pokud tento případ nastane, tak oprávnění se sečtou a přednost dostane ta úroveň oprávnění, která povoluje (zelená) před tou, která zakazuje (červená).

:::note
Uživatel Martina má přiřazenou roli *Manažer entit*. Tato **role** má v registru aktiv pro složku *Informace, data a znalosti* nastaveno oprávnění, které jí **zakazuje** tuto složku a entity v ní obsažené odstranit. Zároveň má ale Martina jako **uživatel** pro tu stejnou složku, tj. *Informace, data a znalosti*, nastaveno oprávnění, které jí naopak **povoluje** tuto složku a entity v ní obsažené odstranit. Tento konflikt Zoty vyřeší tak, že v tomto příkladu bude mít Martina oprávnění tuto složku a entity v ní obsažené odstranit. Nebo-li zelená úroveň oprávnění zvítězí nad červenou.
:::


<img src="/docs/img/3-opravneni-konflikt-stejna-pro-uzivatele-i-roli.png" title="Konflikt oprávnění uživatele a jeho role" />

&nbsp;

#### Rozšířená správa oprávnění pro velké organizace
Pro větší organizace s rozsáhlejší organizační strukturou poskytuje Zoty rozšířené schopnosti řízení přístupu k datům. Ty umožňují filtrovat / skrývat určité záznamy pro uživatele podle jejich příslušnosti k podřízeným subjektům či organizačním jednotkám. Koncept tohoto řešení je založen na jednoduchém označení dat, která mají patřit vybranému subjektu/subjektům, pomocí specifického typu systémového štítku – [*Organizace*](#1621organizace). Ten lze v registrech připojit k libovolné složce či entitě a omezit tak jejich viditelnost jen pro ty uživatele, kteří patří do příslušné organizace či organizační jednotky.    
      
Typické použití v komerčním sektoru je pro ty organizace, které v rámci holdingu/skupiny sdružují více společností, jejichž data mají být oddělena. Tzn., že uživatelé pracující pro jednu konkrétní společnost pak nevidí data (složky a entity v registrech) ostatních společností skupiny.
Přesto, že z pohledu běžného uživatele se jeví data jako oddělená, ve skutečnosti jsou stále součástí jedné společné databáze. Výhodou je, že pak lze snadno vytvářet i různé konsolidované reporty a pohledy na data napříč všemi společnostmi skupiny.      
Analogicky podobně lze tuto schopnost využít např. i ve státní a veřejné správě pro více organizačních složek podřízených jednomu státnímu či veřejnému subjektu.

:::info
Tato schopnost filtrovat vybraná data a skrýt je tak některým uživatelům, v žádném případě nenahrazuje či neduplikuje systém [správy přístupových oprávnění](#3132oprávnění-přístupu-na-záznamy). Pouze jej doplňuje a rozšiřuje o schopnost snadno omezit přístup k datům i pro uživatele ve větších organizacích s velmi komplexní organizační strukturou. Tedy všude tam, kde je třeba jednoduše zajistit, aby zaměstnanci jedné organizace či org. jednotky, neviděli do dat těch ostatních.      
:::

:::tip
Pokud je očekáváno zvýšení komfortu uživatelů spíše, než vysoká úroveň zabezpečení dat, je výhodné toto filtrování dat, označených štítkem [*Organizace*](#1621organizace), využít. 
V opačném případě je doporučeno využít raději standardní systém [správy přístupových oprávnění](#3132oprávnění-přístupu-na-záznamy), který poskytuje vyšší úroveň zabezpečení. Data, která spravuje Zoty server, nejsou totiž v tomto případě filtrována/skrývána až na straně uživatele, ale zůstávají na Zoty serveru. Běžný uživatel bez administrátorského přístupu k serveru se tak k datům, ke kterým nemá oprávnění, nemůže nijak dostat.
:::

&nbsp;

## 4	PŘEHLED
Úvodní stránka zobrazuje přehled základních informací, co se nového událo, jaké nejnovější záznamy, aktivity či komentáře byly pořízeny nebo aktualizovány, jaké úkoly uživatel vytvořil nebo mu byly přiděleny k řešení anebo kolik aktiv, rizik, opatření, cílů či jiných entit je aktuálně v systému celkem evidováno.

<img src="/docs/img/4-homepage.png" title="Zoty úvodní stránka" />

&nbsp;

Vzhled a obsah této stránky si může každý uživatel přizpůsobit dle svých preferencí nastavením zobrazení preferovaných karet a konfigurací panelů pracovní plochy úvodní stránky. 

#### Nastavení karet
Obsah v horním pruhu karet lze nastavit přes ikonu ***Nastavení karet*** v pravém horním rohu pracovní plochy úvodní stránky.

<img src="/docs/img/4-homepage-nastaveni-karet.png" title="Zoty úvodní stránka - nastavení karet" />

&nbsp;

Pro zachování kompaktního zobrazení je třeba, aby byly v rámci případných úprav nastavení vybrané alespoň čtyři libovolné karty (Zoty nepovolí výběr méně karet). Pokud je tedy třeba nahradit zobrazení některé karty za jinou, je vhodné nejprve vybrat novou kartu a až poté zrušit zobrazení nechtěné karty.

#### Konfigurace panelů
Vzhled celé úvodní stránky lze upravit přepnutím do editačního módu, kdy lze jednotlivé celky zvětšovat, zmenšovat či přesouvat.

<img src="/docs/img/4-homepage-nastaveni.png" title="Zoty úvodní stránka - přizpůsobení" />

&nbsp;

## 5	ÚKOLY
Úkoly uživateli přidělené nebo jím vytvořené jsou jedna z prvních věcí, které tento uživatel vidí v sekci [Přehled](#4přehled) na své úvodní stránce po přihlášení do systému. Uživatelé s rolí ***Administrátor*** nebo ***Manažer entit*** vidí všechny úkoly, ostatní uživatelé vidí pouze své úkoly. Uživatelé, kteří mají přístup do sekce [Administrace](#1622uživatelé), vidí i úkoly přidělené všem ostatním uživatelům, na záložce *Entity* v detailu každého uživatele.    
Zobrazení všech úkolů je dostupné v sekci **Úkoly**. Zde je lze třídit, filtrovat, sledovat jejich stav, časový průběh, datumy kdy byly vytvořeny, upraveny, jaký mají deadline, jakého mají správce nebo důležitost.    
Úkoly, které nebyly uzavřeny (tzn. dokončeny, odmítnuty nebo archivovány) do plánovaného datumu dokončení, se po uplynutí tohoto datumu zobrazují v seznamu červeně s vykřičníkem. V případě, že plánovaný datum dokončení je již velmi blízko (tzn. je dnes nebo nastane již následující den), zobrazuje se toto datum oranžově.

<img src="/docs/img/5-ukoly-zobrazeni-seznam.png" title="Seznam úkolů" />

&nbsp;

V nastavení zobrazení lze zvolit, zda budou úkoly zobrazeny formou řádkového seznamu nebo formou karet (tzv. Kanban zobrazení).

<img src="/docs/img/5-ukoly-zobrazeni-kanban.png" title="Úkoly - Kanban zobrazení" />

&nbsp;

Úkoly mohou nabývat těchto stavů: *Vytvořen, Odmítnut, V řešení,
 Pozastaven, Dokončen, Archivován*.
Průběh stavů je v seznamu úkolů, stejně tak i v detailu úkolu, graficky vizualizován indikátorem průběhu, kdy jednotlivé stavy jsou rozlišeny barevně a délka každé barvy reprezentuje dobu (v počtu dnů) po jakou se úkol v daném stavu nacházel.

<img src="/docs/img/5-ukol-seznam-prubeh-stavu.png" title="Úkoly – Průběh stavů" width="550"/>

&nbsp;

Po najetí ukazovátka myši nad příslušnou barvu v indikátoru průběhu se zobrazí informace o názvu stavu, který tato barva reprezentuje, počtu dnů a datumu *Od-Do*, ve kterém se úkol v tomto stavu nacházel.

<img src="/docs/img/5-ukol-detail-prubeh-stavu.png" title="Úkoly – Průběh stavů" width="670"/>

&nbsp;

Podmínky, za jakých může úkol změnit jeden stav na jiný, jsou dány logikou přednastaveného workflow pro entitu typu Úkol, jak ukazuje workflow diagram níže.

##### Workflow diagram - změna stavů úkolu      


<img src="/docs/img/5-workflow-task.png" title="Úkoly – Wokflow" width="700"/>

&nbsp;

Úkoly (spolu s projekty a procesy) mohou tvořit opatření k cílovým hodnocením nejen rizik, ale i aktiv, hrozeb a zranitelností.
Úkoly jsou tedy typem entit, které lze použít velmi univerzálně v celém systému Zoty. Zároveň je třeba adresovat některé úkoly určitým konkrétním okruhům činností či aktivit, aby je bylo možné ve vztahu k těmto aktivitám snadno vyhledávat, filtrovat a reportovat.
Proto jsou pro entitu typu ***Úkol***, zavedeny další podtypy, které jsou specifické pro určité typické činnosti v rámci procesu řízení rizik, shody a auditů. Konkrétně jsou to podtypy *Přezkoumání* a *Audit*. Pro obecné použití je pak implicitně přednastaven podtyp *Obecný (úkol)*.

&nbsp;

## 6	VIZUALIZACE
Tato sekce je připravena na umístění libovolných dashboardů či grafů, které mohou uživatelům na míru připravit vyškolení experti.
Případné požadavky v této oblasti směrujte na vašeho dodavatele nebo přímo [na Zoty podporu](#zoty-podpora).

### 6.1	Obecné
Příklad vizualizace vazeb závislostí mezi primárními a podpůrnými aktivy a jejich hodnocení.

<img src="/docs/img/6-vizualizace-primarni-vs-podpurna-aktiva.png" title="Vizualizace vazeb primární vs podpůrná aktiva – Wokflow" />

&nbsp;

Příklad demonstruje dvě primární aktiva, kterými jsou procesy *Řízení rizik a aktiv* a *Zajištění fyzické bezpečnosti* a ty jsou závislé na podpoře pěti podpůrných aktiv – dvou softwarových systémů (SOFTWARE9. SOFTWARE10), instalovaných na dvou různých serverech (HARDWARE5, HARDWARE7), vše umístěno v jedné lokalitě, kterou je serverovna (LOCALITY3).    
Z první vizualizace jsou na první pohled patrná veškerá propojení mezi primárními a podpůrnými aktivy. Existenci propojení indikuje koeficient v průsečíku příslušného řádku (podpůrné aktivum) a sloupce (primární aktivum). Tento koeficient zároveň prezentuje sílu závislosti mezi příslušným primárním a podpůrným aktivem, jejíž váha může nabývat až deseti hodnot v rozsahu 0,1 – 1.
Následné vizualizace nabízí samostatné seznamy primárních a podpůrných aktiv, přičemž jakékoliv aktivum lze pak rozbalit/sbalit kliknutím na symbol +/- a zobrazit pouze na něm závislá připojená aktiva.     
Na obrázku níže je takto příklad rychlého zobrazení všech podpůrných aktiv nezbytných pro zajištění fungování procesu „Zajištění fyzické bezpečnosti“ – IP bezpečnostních kamery a SW aplikace pro management bezpečnostních kamer, která je instalovaná na serveru *PowerEdge* umístěném v serverovně v lokalitě ZO1.

<img src="/docs/img/6-vizualizace-rozklik-primarniho-aktiva-na-podpurna.png" title="Vizualizace – Rozpad primárních aktiv na podůrná" />

&nbsp;

### 6.2	Hodnocení
Příklad změny vizualizace hodnocení aktiv jednoduchou změnou registru v záhlaví grafu na libovolný (uživatelsky definovatelný) katalog, který může mít zcela jinou strukturu složek, v nichž jsou hodnocená aktiva zatříděna:

<img src="/docs/img/6-vizualizace-obecne-registr-vs-katalogy.png" title="Vizualizace – Hodnocení aktiv seskupená různými způsoby" />

&nbsp;

## 7 ŘÍZENÍ SHODY
Řízení shody (Compliance) umožňuje identifikovat konkrétní požadavky vyplývající např. ze zákonů, předpisů, standardů, smluv, směrnic, či jakékoliv další požadavky, propojovat je s libovolnými entitami v Zoty a integrovat je tak do celého systému řízení rizik.
Ověření shody s příslušnými požadavky je pak realizováno spoluprací funkcionalit sekce **Požadavky** s [auditním modulem](#12audity).

### 7.1	Požadavky
Registr požadavků je tvořen veškerými požadavky, které mohou být relevantní k řízení rizik a aktiv. Mohou zde ale také být obecně jakékoliv požadavky, se kterými musí být organizace trvale ve shodě. Registr požadavků je proto strukturován na požadavky zákonné (vyplývající z legislativy národní či evropské), požadavky vyplývající z ISO norem a požadavky smluvní.

<img src="/docs/img/7-pozadavky.png" title="Požadavky" />

&nbsp;

Obsah každého požadavku je tvořen fragmenty textu, reprezentující ve struktuře dokumentu kapitoly, odstavce, písmena či paragrafy. Ke každému fragmentu lze připojit soubory, libovolné další entity uložené v Zoty, vyjadřovat se k němu spolu s ostatními uživateli formou komentářů nebo k němu přiřadit odpovědnou osobu – garanta, který odpovídá za zajištění shody s tímto dílčím požadavkem.

<img src="/docs/img/7-pozadavek-kybersecurity-propojeni-garant.png" title="Garant požadavku" width="470"/>

&nbsp;

Aby bylo na první pohled vidět, za kterými fragmenty textu se skrývají další připojené informace, zobrazuje se u nich notifikace s indikací počtu takto připojených informací. Lze tak, i u velmi obsáhlého dokumentu, snadno odhalit, v kterých částech jeho obsahu se „něco děje“ (viz obrázek výše)

:::tip
 V celém obsahu dokumentu lze snadno zobrazit pouze ty fragmenty textu, za kterými se skrývají další informace. Stačí jednoduše kliknout na ikonu filtru.
:::

<img src="/docs/img/7-pozadavek-kybersecurity-propojeni-filtrace.png" title="Požadavek – filtrace textových fragmentů" width="460"/>

&nbsp;

Takovýto strukturovaný obsah lze tvořit pomocí ikony se symbolem „**+**“, která se u stávajícího či nově vytvořeného požadavku nabídne po přepnutí jeho záložky ***Obsah*** do editačního režimu.

<img src="/docs/img/7-pozadavky-strukturace-nadpisu-a-odstavcu-cil-zoty.png" title="Tvorba strukturovaného obsahu požadavku"/>

&nbsp;

Obsah zde potom lze vložit manuálním zadáním textu nebo nejlépe využít již připravený existující text, např. ve formátu dokumentu typu Word – ten označit a zkopírovat do schránky (ve Windows Ctrl+C) a vložit jej do Zoty (Ctrl+V).

<img src="/docs/img/7-pozadavky-strukturace-nadpisu-a-odstavcu-zdroj-word.png" title="Tvorba strukturovaného obsahu požadavku – příprava zdrojového textu ve Wordu"/>

&nbsp;

Text bude přenesen včetně zachování základního formátování (tučný font, kurzíva) i rozlišení jednotlivých úrovní nadpisů. Pokud je ponechán zapnutý přepínač ***Oddělit odstavce*** (viz předchozí obrázek), tak Zoty z odstavců a nadpisů, které identifikuje, automaticky vytvoří samostatné fragmenty.
         
Po najetí myší nad libovolný fragment se u něj zobrazí paleta základních nástrojů vizualizovaných ikonami, jež umožnují daný fragment editovat, posouvat jeho odsazení vlevo/vpravo pro zvýšení přehlednosti různých úrovní nadpisů či odstavců, přidávat za vybraný fragment další nové fragmenty nebo jej celý odstranit.

<img src="/docs/img/7-pozadavky-editace-fragmentu.png" title="Tvorba strukturovaného obsahu požadavku – editace fragmentů"/>

&nbsp;

Z požadavků lze pak ještě vytvářet tzv. odvozené požadavky, jejichž smyslem je zpravidla konsolidovat více stejných či podobných požadavků, pocházejících z různých zdrojů, do požadavku jednoho, který pak agregovaně alokuje zdroje pro případná plánovaná opatření. Dalším důvodem, kdy se, zpravidla z legislativního požadavku, tvoří požadavky odvozené, může být snaha interpretovat právní výklad za účelem jeho snadnější implementace v praxi, tzn. tvoří se tímto způsobem soubor prováděcích předpisů či metodických pokynů k zákonům.     

Odvozený, uživatelsky srozumitelný požadavek, lze vytvořit a připojit ke každému paragrafu či konkrétnímu odstavci zákona, či libovolného jiného typu dokumentu. A k němu přiřadit odpovědnou osobu. A celý jej pak propojit vazbou např. s rizikem, libovolným typem aktiva, cílem nebo s jiným souvisejícím požadavkem. Jsou zde tedy stejné možnosti, jako při práci s fragmenty textů u nadřízeného požadavku.
Lze tak mj. snadno dohledat, kdo za plnění jakých požadavků odpovídá a jak se s nimi konkrétně organizace vypořádala v rámci celého systému řízení rizik a shody.

<img src="/docs/img/7-pozadavek-kybersecurity-propojeni.png" title="Propojení na odvozený požadavek" />

<img src="/docs/img/7-pozadavek-kybersecurity-propojeni-pozadavek-odvozeny-a-commenty.png" title="Odvozený požadavek" width="390"/>
&nbsp;

#### Legislativní požadavky na řízení informačních aktiv

Příkladem odvozeného požadavku jsou pravidla ochrany jednotlivých úrovní informačních aktiv, která vychází z požadavků na řízení aktiv dle § 4 písm. h) – j) vyhlášky o kybernetické bezpečnosti.

<img src="/docs/img/7-pozadavky-odvozeny-pozadavek-rizeni-aktiv.png"  title="Odvozený požadavek - Pravidla ochrany jednotlivých úrovní informačních aktiv" width="" />

&nbsp;

&nbsp;

## 8	ANALÝZA RIZIK
Uživatelé zde mohou spravovat v příslušných registrech jak identifikovaná [aktiva](#82aktiva), [hrozby, zranitelnosti](#83hrozby-a-zranitelnosti), tak i výsledná [rizika](#84rizika), vytvářená z jejich kombinací.     
Vedle těchto základních registrů jsou zde také registr [cílů](#81cíle) a funkcionality pro [analýzu samotných aktiv](#823-analýza-aktiv). Analýza aktiv pomáhá vymezit hranice celé analýzy rizik tím, že umožňuje určit a odsouhlasit aktiva, jež do ní budou zahrnuta.

### 8.1	Cíle
Registr cílů je členěn na cíle bezpečnosti informací a dále cíle projektové, provozní a strategické. Cíle bezpečnosti informací jsou v rámci metody ISO27x přednaplněny cíli dle normy ISO 27001.
Cíle lze propojit s mnoha typy entit, konkrétně s riziky, hrozbami, zranitelnostmi, aktivy, opatřeními, projekty, procesy, požadavky, úkoly, incidenty, ale i s jinými cíli.

:::tip
Např. při analýze projektových rizik je zpravidla vhodné provádět jejich hodnocení skrze připojené projektové cíle. Jsou-li totiž riziko či hrozba připojeny přímo k projektu, ovlivňují jej jako celek neboli mají dopad na všechny cíle tohoto projektu. Pokud jsou ale tyto cíle založeny v registru cílů a propojeny s tímto projektem, tak následným připojením rizik či hrozeb lze modelovat jejich dopad na každý dílčí projektový cíl.
:::

&nbsp;

### 8.2	Aktiva
Aktiva tvoří (nejen v aplikaci Zoty) velkou množinu, uvnitř které lze identifikovat skupiny entit s podobnými vlastnostmi (atributy). Přitom některé vlastnosti entit z různých skupin se mohou často odlišovat.      
Proto v rámci identifikace celé velké množiny aktiv nelze všechna popsat pouze s pomocí jedné sady univerzálních atributů, např. *Název, Popis, Správce, Garant* atp., které by byly pro všechna aktiva společné. Při popisu aktiv se tak pracuje i s atributy, které jsou specifické vždy jen pro určitý konkrétní typ, např. "*Data*"; zatímco pro jiný typ aktiva, např. "*Lokalita*", nemusí být ten samý atribut vůbec relevantní.

:::note
Aktivum typu ***Lokalita*** bude mít vedle názvu a popisu i další specifické atributy, jako např. *Adresa* nebo informaci o tom, zda se jedná o lokalitu interní či externí. Pro aktivum typu ***Data*** nejsou tyto atributy relevantní. Zde je třeba evidovat jiné specifické atributy, které jsou zase zcela irelevantní pro lokality, např. *Typ úložiště dat, Klasifikace dat, Způsob zabezpečení dat*, atp.
:::

V Zoty se proto rozlišují aktiva různého typu. Díky tomu je možné v rámci analýzy popsat všechny důležité vlastnosti všech aktiv, bez ohledu, zda jsou některé z nich specifické jen pro určité skupiny (typy) aktiv.      

#### Typy aktiv:
-	Data (DATA)
-	Informace (INF)
-	Znalost (KNW – Knowledge)        
________________________________      

- Aktivum obecného typu (A – Asset)
-	Dodavatel (VEN – Vendor)
-	Hardware (HW)
-	Hmotný majetek (TA – Tangible asset)
-	Lokalita (LOC)
-	Organizační jednotka (OU – Organizational Unit)
-	Pracovník (PER)
-	Pracovní pozice / Funkční místo (FP – Functional Position)
-	Pracovní skupina a tým (WGT – Workgroup, Team)
-	Produkt (PROD)
-	Proces (PROC)
-	Projekt (PROJ)
-	Role (ROLE)
-	Software (SW)

Speciální kategorii pak tvoří aktiva typu projekt a proces, která mohou (spolu s [úkoly](#5úkoly)) vystupovat v roli konkrétních [opatření](#101opatření) připojených k [cílovým hodnocením](#9hodnocení) rizik v rámci jejich mitigace.

Jakékoliv aktivum lze na jedno kliknutí ohodnotit z hlediska jeho důležitosti.
<img src="/docs/img/8-aktivum-dulezitost-detail.png" title="Stanovení důležitosti aktiva"/>

&nbsp;

<img src="/docs/img/8-aktivum-dulezitost-seznam.png" title="Seznam vybraných aktiv dle důležitosti" width="590"/>

&nbsp;

:::info
Stanovení důležitosti aktiv je užitečné pro všechny organizace, zejména pak ale pro ty, které se musí řídit vyhláškou o kybernetické bezpečnosti (VoKB). V celém procesu řízení aktiv je požadováno, aby se zohledněním hodnoty a **důležitosti aktiv** byla stanovena pravidla pro likvidaci dat (příloha č. 4, odst. 3), nakládání s aktivy (označování informací, manipulace s aktivy a správa výměnných médií), či pravidla pro ochranu jejich integrity a dostupnosti.
:::

:::note
Důležitost aktiva může být např. vodítkem také pro to, zda pro něj dle VoKB má být prováděno zaznamenávání bezpečnostních a provozních událostí (§ 22, odst. 1 b), penetrační testování (pro aktiva v kategorii systémů ICT – viz § 25, odst. 1), nebo jak budou kategorizovány s ním související kybernetické bezpečnostní incidenty (§ 31, odst. 1 d), atp.
:::

&nbsp;

#### 8.2.1 Správa aktiv
Uživatel si může v registru aktiv vytvořit libovolnou strukturu složek a kategorizovat tak aktiva dle vlastních preferencí. Podobně, jako u jiných registrů, i zde se lze nechat inspirovat již vytvořenými strukturami složek v rámci předdefinovaných kategorií v katalozích aktiv.
       
<img src="/docs/img/8-katalogy-aktiv.png" title="Katalogy aktiv" width="570"/>

Zejména při větším objemu aktiv pak vhodně zvolená kategorizace významným způsobem zpřehledňuje a usnadňuje jejich správu. Proto při vytváření nejen nových aktiv, ale i libovolných jiných entit, je vhodné myslet také na jejich správné zatřídění ve struktuře složek v příslušném registru.

:::info
Předtím, než uživatel aktivuje tlačítko ***Vytvořit***, je třeba, aby v registru vybral některou stávající složku, do které má být nově vytvářená entita zatříděna. Tím dojde nejen k jejímu vytvoření a zatřídění, ale zároveň je entitě automaticky nastaven i [správný typ](#typy-aktiv) (např. *Hardware, Software, Proces*, atp.), neboť ten je již definován ve [vlastnostech každé složky](#omezení-obsahu-složek).
:::

:::tip 
Pokud zatřídění neproběhlo správně, tzn. nový záznam se uložil do chybně zvolené složky nebo je uložen přímo v „root“ registru (je-li to povoleno), lze jej kdykoliv snadno [přesunout do správné složky](#přesouvání-složek).
:::  

S pomocí oprávnění lze v [administraci aplikace](#oprávnění-přístupu-do-aplikace) nastavit také různé úrovně oprávnění pro registry. Tak lze např. zamezit tomu, aby uživatelé mohli přímo do root registrů entity či složky ukládat. Nebo zde předdefinovanou strukturu složek jakkoliv měnit. Dokud tedy uživatel nejprve některou složku nevybere, tak tlačítko ***Vytvořit*** nebude v registru dostupné. Tím je zabráněno uložení nově vytvářené entity do rootu příslušného registru, tj. mimo předdefinovanou strukturu složek.

<img src="/docs/img/8-entity-restrikce-na-ulozeni-do-registru.png"  title="Restrikce na vytvoření entit s uložením do root registru" />
         
:::info
Registr není standardní složka, ale část aplikace Zoty. Proto restrikce na celý registr nelze nastavit v rámci systému [správy řízení přístupů na záznamy](#3132oprávnění-přístupu-na-záznamy)
 (entity a složky), ale pouze nastavením oprávnění přístupu do vybraných částí aplikace Zoty v [administraci aplikace](#oprávnění-přístupu-do-aplikace), jak je popsáno výše.
:::

&nbsp;

#### 8.2.2 Hodnocení aktiv
Aktiva lze hodnotit podle uživatelsky definovatelných [schémat hodnocení](#1614hodnocení) obdobně, jako např. rizika, přičemž hodnocení rizik obvykle předchází právě hodnocení aktiv. Jeho cílem je stanovit **hodnotu aktiva** (např. z pohledu důvěrnosti, integrity a dostupnosti, v případě hodnocení v rámci informační bezpečnosti), která následně může vstupovat do hodnocení rizik s využitím definovaných schémat hodnocení zahrnujících **hodnotu dopadu**. Proto Zoty umožňuje automaticky přebírat výsledné skóre jednoho hodnocení (např. aktiva) jako vstup pro výpočet skóre jiného hodnocení (např. rizika).

:::info
Je třeba mít také na paměti, že hodnota aktiva v rámci hodnocení aktiv není totéž, co hodnota dopadu v rámci hodnocení rizik. Hodnota dopadu sice vychází z hodnoty aktiva, ale v důsledku přijatých bezpečnostních opatření by se měla v čase snižovat. Tzn., že na začátku (před zavedením bezpečnostních opatření) může hodnota dopadu být rovna (nebo se blížit) hodnotě aktiva, ale s implementací bezpečnostních opatření se bude postupně snižovat (jsou-li opatření účinná).
:::

Proto je vhodné, vždy v rámci konkrétního hodnocení, individuálně posoudit (např. s ohledem na existenci připojených opatření a vyhodnocení jejich účinnosti), zda nebude třeba manuálně korigovat automaticky doporučené hodnoty pro stanovení výsledného skóre hodnocení.

:::tip
 Pro účely hodnocení rizik se nepoužívá pouze účetní nebo pořizovací hodnota aktiva, ale hodnota, která odráží náklady na obnovu a nápravu následků vyplývajících ze selhání při narušení důvěrnosti, integrity nebo dostupnosti aktiva. A která je často daleko vyšší než hodnota účetní, kdy např. selhání součástky v pořizovací ceně v řádu stokorun může způsobit škodu v řádu milionů.
:::

&nbsp;

#### Hodnocení dodavatelů
V rámci hodnocení aktiv lze hodnotit i dodavatele, neboť dodavatel je v Zoty [specifická entita](#typy-aktiv) typu aktivum - ***Dodavatel***, pro kterou lze uživatelsky definovat libovolné [schéma hodnocení](#1614hodnocení), jak je demonstrováno v příkladu na obrázku níže.

<img src="/docs/img/8-hodnoceni-dodavatelu.png "  title="Hodnocení dodavatelů" width="" />

&nbsp;

:::info
I když z pohledu **účetního** je dodavatel jiný subjekt, kterému firma dluží, tedy závazek neboli **pasivum**, tak z pohledu **řízení rizik** je dodavatel **aktivem**, protože má hodnotu a vliv na bezpečnost informací. Silní dodavatelé mohou být dokonce strategickým aktivem, např. v „just-in-time“ výrobě. Pokud navíc zajišťují zpracování nebo přenos citlivých informací, pak výpadek nebo narušení bezpečnosti u takových dodavatelů může mít značný dopad na dostupnost, důvěrnost nebo integritu informací.      
Z pohledu **ekonomického či strategického** může dlouhodobý, spolehlivý dodavatel být i součástí know-how či goodwillu, tj. nehmotných aktiv. A např. při akvizicích firem se hodnota obchodních vztahů s takovými klíčovými dodavateli může ocenit jako součást jejich nehmotného majetku, tedy opět – aktiv.
:::

&nbsp;

#### 8.2.3 Analýza aktiv

Vybranou množinu aktiv, zpravidla těch, která byla pro organizaci identifikována jako kritická či významná, lze v Zoty připojit do specifického typu entity *Analýza aktiv*. Ta může mít své popisné atributy, jako jsou např. datumy platnosti *Od-Do*, odpovědného *Správce* a také podléhá schvalovacímu workflow.
&nbsp;

##### Diagram schvalovacího workflow pro analýzu aktiv

<img src="/docs/img/8-schvalovaci-workflow-analyza-aktiv-diagram.png"  title="Schvalovací workflow pro analýzu aktiv" />

&nbsp;

Pokud jsou identifikována jak primární, tak podpůrná aktiva, a jsou vzájemně propojena, tak zahrnutím primárních aktiv do analýzy se do ní automaticky zahrnou i všechna jejich podpůrná aktiva.      

:::info
Aktiva, která jsou takto zařazena do analýzy aktiv, jsou podkladem ke schválení odpovědnými osobami v roli schvalovatelů. Tím je stanoven a odsouhlasen rozsah systému řízení bezpečnosti informací (ISMS). Každá další případná změna rozsahu ISMS znamená vytvoření nové analýzy aktiv, čímž jsou tyto změny dokumentovány včetně kompletní historie.      
:::

:::tip
Zejména v případě většího množství aktiv může být výhodné rozdělit jejich analýzu na více dílčích analýz. A každou pak zaměřit jen na aktiva určitého typu (např. *Analýza systémů S1*, *Analýza systémů S2*, …). Nebo na aktiva patřící konkrétnímu útvaru či jedné společnosti ve skupině v rámci velkého holdingu atp.      
Také v rámci řízení [významných změn](#112významné-změny) je vhodné vytvořit samostatnou analýzu a zahrnout do ní pouze aktiva dotčená touto změnou.
:::
&nbsp;
Pro uživatele nebo role, které mají mít přístup ke schvalování analýz aktiv, je třeba v administraci [nastavit oprávnění](#oprávnění-přístupu-do-aplikace).

&nbsp;

### 8.3	Hrozby a zranitelnosti
Při návrhu nejvhodnější struktury složek v příslušných registrech v rámci kategorizace hrozeb a zranitelností lze hledat inspiraci v některém z předdefinovaných katalogů hrozeb a zranitelností, které vychází z uznávaných metodik a norem, konkrétně:
-	Katalog hrozeb dle Evropské agentury pro bezpečnost sítí a informací (ENISA)
-	Katalogy hrozeb a zranitelností dle normy ISO 27001 - Systém řízení bezpečnosti informací (ISMS)
-	Katalog bezpečnostních hrozeb ohrožujících soukromí uživatelů dle frameworku LIDDUN (LINDDUN privacy threats)
-	Katalog hrozeb dle metodiky STRIDE

<img src="/docs/img/8-katalogy-hrozeb.png" title="Katalogy hrozeb" width="570"/>

<img src="/docs/img/8-katalogy-zranitelnosti.png" title="Katalogy zranitelností" width="570"/>

&nbsp;

### 8.4	Rizika
Podobně, jako v jiných registrech, i zde platí, že uživatel si může vytvořit svoji vlastní strukturu složek, která bude nejlépe vyhovovat jeho potřebám a inspirovat se přitom některým z předdefinovaných katalogů rizik.    

 <img src="/docs/img/8-katalogy-rizik.png " title="Katalogy rizik" width="560"/>

&nbsp;

Založit nové riziko do registru rizik lze pomocí tlačítka ***Vytvořit*** v sekci **Rizika**.
    
Na kartě rizika je, vedle řady popisných atributů (***Název, Popis, Příčina, Dopad, Původ rizika, Vlastník rizika, Autor rizika, Účastníci***), které jsou editovatelné, zobrazen i atribut ***Strategie zvládání***, který lze editovat v Plánu zvládání rizik (tj. poté, co byla rizika analyzována a vyhodnocena ve fázi zvládání rizik ve stejnojmenné sekci).

:::info
*Autor rizika* je osoba, která riziko identifikovala, např. v rámci dotazníkových šetření, workshopů atp. *Vlastník rizika* je osoba zodpovědná za riziko, např. za jeho zvládání (role "Acountable" dle RACI matice). *Účastníci* jsou pak všechny další osoby zapojené do analýzy rizik.
:::

Riziko může nabývat stavů: *Vytvořeno, Schvaluje se, Schváleno, Dokončeno, V přípravě, Posuzuje se, Zamítnuto, Akceptováno, Archivováno*.    
Podmínky, za jakých může riziko změnit jeden stav na jiný, jsou dány logikou přednastaveného výchozího workflow pro schvalování entit, jak ukazuje workflow diagram v kapitole [Schvalovací workflow](#34schvalovací-workflow).

Při vytváření nového rizika lze zvolit i jeho tzv. „rodiče“. Tj. *hrozbu*, *zranitelnost* či *aktivum*, výsledkem jejichž kombinace je právě riziko (*hrozba*, zneužívající *zranitelnosti aktiva*, představuje *riziko*).       
Při výběru těchto rodičovských entit může Zoty uživateli napovědět, kterou konkrétní hrozbu, zranitelnost či aktivum z celého seznamu vybrat. K tomu slouží přepínače ***Filtrovat dle propojení*** a ***Filtrovat dle Znalostní báze***.       
Volba ***Filtrovat dle propojení***, je-li aktivována, tak po výběru jednoho z rodičů, např. hrozby, odfiltruje ze seznamu entit pro výběr ostatních rodičů (v tomto příkladu aktiv a zranitelností) ty, které zatím nemají s touto vybranou hrozbou žádné propojení.       
Podobně funguje i přepínač ***Filtrovat dle Znalostní báze***, který analyzuje možná propojení na základě kombinací hrozeb, zranitelností a aktiv v [matici znalostní báze](#konfigurace-matice) a podle toho pak nabídne uživateli omezený výběr vhodných rodičů pro dané riziko.      
Volba rodičů není pro vytvoření rizika v Zoty povinná. Je to ale výhodné např. v okamžiku, kdy se později provádí [hodnocení rizik](#9hodnocení). Ta lze hodnotit podle uživatelsky definovatelných [schémat hodnocení](#1614hodnocení). A pokud už bylo provedeno hodnocení některého z rodičů, tj. hrozby, zranitelnosti či aktiva, tak výstupy těchto hodnocení pak mohou automaticky vstupovat do hodnocení rizika. Jinými slovy, výsledné skóre rizika pak může být spočteno automaticky. Pokud je takto zároveň nastaveno příslušné schéma hodnocení v metodě pro hodnocení rizik.

:::tip
Rizika nemusí vytvářet sám uživatel, ale může si je nechat vygenerovat do registru rizik s pomocí Zoty.     
[Generování rizik](#generování-rizik) je realizováno na základě kombinací hrozeb, zranitelností a aktiv, které Zoty navrhne s využitím znalostní báze. Uživatel pak navržené kombinace už jen potvrdí, případně některé vyloučí, a nechá Zoty rizika vytvořit.
:::

&nbsp;

Název nového rizika (jedno, zda vytvářeného manuálně nebo generováním ze znalostní báze) může být automaticky generován kombinací z názvů jeho rodičů nebo z jejich identifikátorů, tzv. [klíčů](#typy-entit-a-jejich-kódové-značení), či z kombinace obojího – podle toho, co si uživatel zvolí v atributu „***Generovaný název dle rodiče***“.

<img src="/docs/img/8-riziko-generovany-nazev-dle-rodice.png" title="Generovaný název rizika dle jeho rodičů (aktiva, hrozby, zranitelnosti)" />

&nbsp;

## 9	HODNOCENÍ
Hodnocení je speciální [typ entity](#typy-entit-a-jejich-kódové-značení), jejíž jednotlivé záznamy představují konkrétní instance ohodnocení rizika nebo aktiva nebo hrozby nebo zranitelnosti.
V rámci hodnocení lze ohodnotit skutečnost nebo cílový stav pro vybrané časové období.

<img src="/docs/img/9-hodnoceni-rizika-detail-nastaveni-a-ohodnoceni.png" title="Hodnocení rizika – detail nastavení a ohodnocení" width="660"/>

&nbsp;

Při zadávání hodnocení cílového nebo skutečného stavu si lze zobrazit všechna předchozí provedená hodnocení (pro skutečnost i cíl) a automaticky jimi předvyplnit aktuálně prováděné hodnocení, s tím, že uživatel si může nabídnuté hodnoty změnit.

<img src="/docs/img/9-hodnoceni-predvyplnit-vyber.png" title="Hodnocení rizika – detail nastavení a ohodnocení" />

<img src="/docs/img/9-hodnoceni-predvyplnit-vybrano.png" title="Hodnocení rizika – detail nastavení a ohodnocení" />

&nbsp;

Při samotném hodnocení lze ke každé hodnocené metrice vložit číselné hodnoty, které mohou např. rozložit hodnocený parametr na více řádků, aby bylo zřejmé, z jakých dílčích hodnot se skládá.       
K jednotlivým metrikám, stejně tak k výslednému skóre, lze vkládat libovolné množství textových poznámek. Ikona pro editaci poznámky indikuje jejich počet a tím zároveň informuje, které hodnocené metriky či výsledné skóre jsou opatřeny poznámkou.

<img src="/docs/img/9-hodnoceni-poznamky.png"  title="Hodnocení - poznámky" width="600" />

&nbsp;

Časovým obdobím pro hodnocení aktuálního/skutečného stavu může být týden, měsíc, čtvrtletí nebo rok. Nebo libovolné datum, pokud neexistuje pravidelná periodicita hodnocení skutečného stavu. Plánovaná hodnocení cílového stavu se pak vždy vztahují ke konkrétnímu datu. Toto datum je milníkem, ke kterému má být dosaženo plánovaného cílového stavu. Takto nastavený milník je platný až do data, kdy bude zaplánován nový cílový milník.
          
Všechny tyto parametry lze plně uživatelsky konfigurovat v [nastavení Hodnocení](#1614hodnocení) zcela samostatně pro každé schéma hodnocení. Stejně, jako zde lze např. nastavit, zda se v rámci daného schématu může hodnotit pouze skutečnost nebo pouze cílový stav nebo obojí. Nebo zda budeme chtít v rámci daného schématu hodnotit dopad na aktiva pouze z pohledu možných hrozeb nebo příležitostí nebo obojího. Všechny možnosti uživatelské konfigurace a specifických nastavení pro schémata hodnocení jsou dále popsána v kap. [Nastavení - Hodnocení](#1614hodnocení).    
           
Ve výběru z dostupných schémat hodnocení, dle kterých se má hodnocení provést, se nenabízí všechna schémata hodnocení definovaná v [nastavení Hodnocení](#1614hodnocení). Nabízí se pouze schémata relevantní pro hodnocení určitého typu, tj. buď pro rizika nebo aktiva nebo hrozby nebo zranitelnosti.

<img src="/docs/img/9-hodnoceni-typy-hodnoceni-v-nastaveni.png" title="Hodnocení rizika – detail nastavení a ohodnocení" />

&nbsp;

Výběr z dostupných schémat pro hodnocení daného typu lze dále ještě více omezit, pokud při vytváření nové entity typového *Hodnocení* byl nejen zvolen určitý podtyp *Hodnocení* (A, R, T, V), ale bylo toto typové *Hodnocení* navíc přiřazeno nějaké konkrétní metodě, jež má v *Nastavení* povoleno pouze jedno vybrané schéma hodnocení pro tento typ.

<img src="/docs/img/9-hodnoceni-detail.png" title="Hodnocení rizika – detail nastavení a ohodnocení" />

&nbsp;

Při tvorbě nové entity typového Hodnocení je hlavně třeba také zvolit, co konkrétně se bude hodnotit, tj. k čemu se pak jednotlivá hodnocení vztahují (např. k jakému konkrétnímu riziku).

<img src="/docs/img/9-hodnoceni-detail-rodice.png" title="Hodnocení rizika – detail nastavení a ohodnocení" />

&nbsp;

Přitom je možné zvolit, že toto typové hodnocení nebude mít jednoho tzv. rodiče (v tomto příkladu riziko - *Narušení střeženého objektu*), ale může jich mít více. Např. aktivum typu *Proces* (*Provoz a údržba budov*) nebo projekt. Nebo též hrozbu, která působí na aktivum typu *Proces*. A zároveň s ní i zranitelnost aktiva (v tomto příkladu procesu), skrze kterou hrozba na aktivum působí.    
Tímto způsobem lze, pomocí vazeb mezi jednotlivými entitami, zviditelnit konkrétní instance hodnocení pro všechny tyto vybrané rodiče. To může být velmi užitečné např. při hodnocení jednoho [typu entity](#typy-entit-a-jejich-kódové-značení) (např. rizika), které je ovlivněno výsledkem předchozího hodnocení jiného typu entity (např. aktiva). Potom je výhodné vidět výsledná skóre hodnocení rizika i u všech souvisejících aktiv (rodičů).    
Propojení entit pomocí vazby typu *Rodič-Potomek* je nezbytné, má-li jedna hodnocená entita (potomek) přebírat výsledné skóre hodnocení jiné entity (rodiče) a zahrnout ji do výpočtu svého skóre hodnocení dle [nastaveného schématu](#1614hodnocení).    

Přehled všech hodnocení, jejich výsledného skóre a časového rozmezí, pro který je platné, lze pro hodnocení každé konkrétní entity zobrazit ze stejnojmenné záložky *Hodnocení*, viz obr. níže.
Pro plánovaná cílová hodnocení reprezentující cílové milníky, je navíc vidět i celkový počet opatření, s pomocí kterých má být cílového stavu dosaženo. Kliknutím na symbol **+**/**-** vlevo vedle názvu hodnocení, lze pak rozbalit/sbalit seznam všech opatření připojených k tomuto plánovanému cílovému milníku.

<img src="/docs/img/9-hodnoceni.png" title="Hodnocení rizika – detail nastavení a ohodnocení" />

&nbsp;

Časový průběh výsledných skóre hodnocení pro skutečnost i pro plánované cílové hodnoty lze přehledně zobrazit v jednoduchém grafu. Nad ním lze také zobrazit seznam záznamů s historií všech provedených hodnocení.

&nbsp;

## 10	ZVLÁDÁNÍ RIZIK
### 10.1	Opatření
Opatření lze připojovat k libovolným typům entit, které lze hodnotit (aktiva, rizika, hrozby, zranitelnosti), a které mají vytvořeno alespoň jedno ohodnocení pro cílový stav. Opatření tedy nemají vazbu na tyto entity napřímo (vyjma entit typu *Aktivum*, viz „control driven approach“níže), ale skrze jejich plánovaná cílová ohodnocení. Cílová ohodnocení reprezentují totiž cílové milníky, kterých má být dosaženo právě s pomocí plánovaných opatření.    
        
Zoty poskytuje přednaplněný registr opatření pro plnění cílů bezpečnosti informací ve všech oblastech požadovaných mezinárodními standardy (např. ISO 27 002) nebo legislativou (vyhláška k ZoKB).

<img src="/docs/img/10-sablony-opatreni.png"  title="Šablony opatření dle ISO 27002" width="" />         

&nbsp;

Tato opatření jsou obecné povahy – v Zoty jsou to tzv. „šablony opatření“, které udávají pouze směr, v jakých oblastech je třeba plánovat a realizovat konkrétní iniciativy pro plnění stanovených cílů bezpečnosti informací. Takovými iniciativami mohou být v Zoty entity různého typu. Konkrétně *Úkol, Projekt, Proces*, které, pokud se připojí k šabloně opatření, tak naplní obsah této pomyslné obálky (obecné šablony). Takto se mj. určí, co konkrétně bude vykonáno, v jakém termínu, kdo za to bude odpovědný a případně i jaké zdroje bude třeba alokovat.

:::info
Tento koncept vychází z dobré praxe, kdy např. ISO 27001 (odst. 6.2) požaduje:
&nbsp;

*Organizace musí stanovit cíle informační bezpečnosti a při plánování, jak těchto cílů dosáhnout, musí určit:*
- *co bude vykonáno;*        
- *jaké zdroje budou vyžadovány;*     
- *kdo bude odpovědný;*     
- *termín dokončení;*     
- *jak budou výsledky hodnoceny.*
&nbsp;

Podobně i NÚKIB doporučuje, aby v rámci plnění legislativních požadavků v oblasti zajištění kybernetické bezpečnosti, Plán zvládání rizik obsahoval jak konkrétní bezpečností opatření pro zvládání rizik, tak i specifikaci finančních, technických, lidských a informačních zdrojů potřebných pro jejich realizaci.
:::

&nbsp;

Opatření lze připojit nejen k cílovým hodnocením entit, ale i přímo k aktivům. To je užitečné zejména v případech, kdy se neprovádí analýza rizik (jejíž součástí je hodnocení), ale rovnou se na vybraná aktiva/skupiny aktiv aplikují příslušná opatření, tedy použije se tzv. „control driven approach“.      
Tento zjednodušený přístup lze využít např. pro rychlou implementaci základní sady opatření - tzv. „3A opatření“, která je doporučeno implementovat vždy, bez ohledu na výsledek analýzy rizik. Možnost propojit takto opatření i přímo k příslušnému aktivu je dostupná pouze v rámci základní metody „Zoty“.

:::info
**3A opatření**  jsou opatření v oblasti **A**utentizace (přihlášení uživatele heslem, otiskem, atp., či vícefaktorově, zahrnující jedinečnou identifikaci uživatele), **A**utorizace (po přihlášení do systému se přidělí odpovídající oprávnění) a odpovědnosti (**A**ccounting – logování činnosti uživatelů).
:::      

&nbsp;

V Zoty lze opatření rozlišovat dle typu na **preventivní** (proaktivní opatření, jež se aplikují před problémem, kterému se snaží zabránit), **nápravná** (reaktivní opatření, jež se aplikují až po problému, na který reagují a napravují jej) a **detekční** (opatření, jejichž účelem je včasné odhalení nežádoucích aktivit).
&nbsp;

Pro každé opatření lze zadat celkovou výši nákladů, které realizace daného opatření spotřebuje. Náklad lze zadat ve více různých měnách (CZK, EUR, USD) a zda jde o náklad jednorázový či periodicky se opakující a následně i s jakou periodou se opakuje (denně/týdně/měsíčně/ročně). Systém pak automaticky zohlední tyto vstupy při výpočtu vynaložených nákladů na všechna zaplánovaná opatření za zvolené časové období.

### 10.2	Plán zvládání rizik
Jednotlivá opatření mohou být součástí plánů zvládání rizik. Vytvořit lze libovolné množství plánů s platností Od-Do. Vytvořený plán se zařadí do seznamu plánů zvládání rizik, odkud je pak možné libovolný plán otevřít kliknutím na jeho název a pomocí tlačítka ***Připojit riziko*** do něj zahrnout rizika z registru rizik.      
Pokud už mají rizika připojená nějaká hodnocení či opatření, zobrazí se na stejnojmenných samostatných záložkách. Každý plán zobrazuje pouze ta hodnocení, jejichž datum platnosti Od-Do koresponduje s datumem platnosti Od-Do příslušného plánu.     
V záložce se samotnými riziky lze pro každé zvolit strategii jeho zvládání výběrem jedné z následujících možností:
- *Redukce*
- *Přijetí*
- *Přenesení*
- *Vyhnutí se*

***Redukce*** – tato strategie se volí zpravidla v případech vysoké pravděpodobnosti hrozby (kdy dopad dosahuje nízkých nebo středně vysokých hodnot – nikoliv kritického pásma) a znamená, že k riziku by měla být připojena opatření, jejichž cílem je snížení rizika na přijatelnou úroveň.

***Přijetí*** – tato strategie se volí zpravidla v případech nízké pravděpodobnosti hrozby a jejího dopadu a znamená, že se s rizikem nic nedělá; pouze se monitoruje a pravidelně přezkoumává, zda se v čase nezvýšila pravděpodobnost hrozby a/nebo jejího dopadu, a tudíž zda není třeba zvolit jinou strategii zvládání.

***Přenesení*** – tato strategie se volí v případech v případech nízké pravděpodobnosti hrozby a vysokého dopadu, kdy se ekonomicky vyplatí sdílet náklady ze ztrát s jinou stranou nebo v případě sdílení prospěchu ze zisku vyplývajícího z rizika.

***Vyhnutí se*** – tato strategie se volí zpravidla v případech vysoké pravděpodobnosti hrozby a vysokého dopadu (kritické pásmo).      

:::info
Uživateli se pro každé riziko v plánu nemusí nabízet všechny strategie jeho možného zvládání. Nabídka může být pro každé konkrétní riziko individuálně omezena. A to na výběr pouze z těch strategií zvládání, které administrátor definoval (v konfiguraci příslušného [schématu hodnocení rizik](#konfigurace-nabídky-strategií-zvládání-rizik)) jako přípustné volby s ohledem na výsledné skóre hodnocení úrovně daného rizika a risk apetit.
:::

:::tip
V rámci zvolené strategie lze na operativní úrovni velmi jednoduše vytvářet [úkoly](#5úkoly) a adresovat je jako konkrétní opatření pro podporu realizace dané strategie. Např. úkoly na omezení rizikových činností či revizi celých procesů (***Vyhnutí se*** riziku), uzavření pojistných smluv (***Přenesení*** rizika), atp.
:::

Ve spodním panelu je ještě volba **Report**, kde lze do plánu zvládání rizik doplnit potřebné zdroje pro jeho realizaci v členění *Technické, Finanční – investiční, Finanční – provozní, Lidské (MD), Informační*, přidat libovolnou textovou poznámku, a připravit jej pro případný tisk nebo prezentaci a schválení.    
Plán zvládání rizik je schvalován stejnými kroky, jak ukazuje [diagram  schvalovacího workflow](#diagram-schvalovacího-workflow-pro-analýzu-aktiv) pro analýzu aktiv.       
Pro uživatele nebo role, které mají mít přístup ke schvalování plánů zvládání rizik, je třeba v administraci [nastavit oprávnění](#oprávnění-přístupu-do-aplikace).

### 10.3	Reporty
V této sekci mohou být definovány reporty, jejichž obsah či vzhled je třeba zakázkově přizpůsobit dle požadavků uživatelů konkrétní organizace. V Zoty jsou pro tento účel připravena data v takovém kontextu, aby z nich bylo možné sestavit příslušné standardní reporty, např. Prohlášení o aplikovatelnosti (PoA) dle požadavku Zákona o kybernetické bezpečnosti, které v Zoty, v metodě ZoKB, využívá přednaplněný registr bezpečnostních opatření dle vyhlášky o kybernetické bezpečnosti (VoKB) s možností auditovat, zda a jak jsou jednotlivá bezpečností opatření v organizaci aplikována ve vazbě na požadavky této vyhlášky. Výstupy z tohoto auditu, spolu s registrem bezpečnostních opatření a znalostní bází Zoty, kde je definována matice opatření a kategorií zranitelností, na které tato opatření působí, jsou pak podkladem pro sestavení PoA reportu.

&nbsp;

## 11	PŘÍPADY
V této sekci lze evidovat specifické typy případů, jakými jsou:
- Bezpečnostní události a incidenty
- Významné změny
- Servisní požadavky

Protože některé tyto záznamy, zejména bezpečnostní události a incidenty, jsou často evidovány a řízeny ve specializovaných externích systémech, je Zoty připraveno tato data na pravidelné bázi synchronizovat. Aby pak mohla být propojena na relevantní entity spravované v  Zoty registrech (rizika, aktiva, atp.). Nastavení této synchronizace je vždy specifické pro každý konkrétní integrační scénář a je realizováno zakázkově v kooperaci s kvalifikovaným Zoty partnerem.

### 11.1	Bezpečnostní události a incidenty

<img src="/docs/img/11-incident-detail.png"  title="Incident - detail"/>

&nbsp;

### 11.2	Významné změny
Významné změny důležitých aktiv mohou pro organizaci představovat vysoké riziko, nejsou-li identifikovány a správně řízeny. Zejména v oblasti bezpečnosti informací je často potřeba analyzovat, zda při změnách v ICT infrastruktuře mohou mít tyto změny vliv na kybernetickou bezpečnost. Vysoké riziko může představovat i řada jiných změn, např. v organizační struktuře, změna významného dodavatele, aj.       
Pokud jsou takovéto "významné změny" identifikovány, měly by iniciovat znovuprovedení analýzy rizik.

:::info
Řízení změn je nedílnou součástí řízení bezpečnosti informací dle vyhlášky o kybernetické bezpečnosti (§ 11), ale i dle řady mezinárodních standardů, např. ITIL nebo ISO 27005 (odst. 9.1).
:::

V Zoty je pro tento účel zaveden specifický typ entity **Významná změna**, která může být propojena s [analýzou vybraných aktiv](#823-analýza-aktiv) (dotčených změnou). Ta následně vstupuje do analýzy rizik a vymezuje tak její rozsah.     
Výsledek analýzy rizik pak dává podklady k rozhodnutí o způsobech posouzení úrovně bezpečnosti za účelem identifikace slabých míst (např. provedení penetračního testování, skenu zranitelností či prověrky konfigurace) a případně též zavedení vhodných opatření vedoucích ke snížení rizika minimalizací dopadu těchto změn. 

<img src="/docs/img/11-vyznamna-zmena-detail.png"  title="Významná změna - detail" />

&nbsp;

:::tip
Pro mitigaci rizik lze v Zoty volit z připravených šablon bezpečnostních opatření, kterými je přednaplněn registr opatření. Tzn. vybrat z registru např. opatření v oblasti technologické bezpečnosti č. 8.29 - "***Testování bezpečnosti při vývoji a akceptaci***" (doporučená „best practice“ dle ISO 27002) a propojit je na plánované cílové ohodnocení rizika identifikovaného a kvantifikovaného analýzou rizik.
:::

&nbsp;

## 12	AUDITY
V modulu **Audity** lze zakládat interní či externí audity a kontroly a propojovat je s požadavky, vůči kterým je v rámci příslušných auditů nebo kontrol posuzována shoda.

<img src="/docs/img/13-audit-seznam.png" title="Audity" />

Je-li audit propojen s požadavkem v sekci Řízení shody - [Požadavky](#71požadavky), a tímto požadavkem je dokument (zákon, ISO norma, směrnice, smlouva, atp.), jež má strukturovaný obsah (kapitoly, podkapitoly nebo paragrafy, odstavce, písmena, atp.), tak pak lze ze všech těchto ucelených fragmentů textu vybrat v rámci auditu ty, u kterých má být posuzováno, zda je s nimi organizace ve shodě či nikoliv.
Po najetí ukazovátka myši nad příslušný fragment textu, např. jeden konkrétní odstavec, se zobrazí volba, která umožní aktivovat pro něj funkcionality auditu. Tento fragment /dílčí požadavek se pak stává tzv. auditní a je tedy zahrnut do kritérií a cílů auditů či kontrol. Tzn., že bude možné u něj posuzovat shodu se zavedeným systémem, např. na zajištění bezpečnosti informací.

<img src="/docs/img/13-audit-aktivace-pro-fragment-textu-pozadavku.png" title="Aktivace auditu pro fragment textu požadavku" width="770"/>

Ke každému dílčímu požadavku lze také přiřadit odpovědnou osobu – garanta, který zodpovídá za jeho zavedení, připojit k němu komentáře nebo jej propojit s libovolnými dalšími entitami v Zoty. V rámci auditu lze pak každý dílčí požadavek označit za *Zaveden, Nezaveden, V procesu zavádění* či *Neaplikovatelný*.

<img src="/docs/img/13-audit-detail.png" title="Audit - detail" />

<img src="/docs/img/13-audit-zokb-grafy.png" title="Audit – vyhodnocení v grafu" />

Zoty ve standardu nabízí různé typy grafů, které poskytnou rychlý přehled o aktuálním stavu plnění požadavků daného zákona, normy či jiných předpisů prověřovaných v rámci interního auditu.      
Grafy lze snadno použít i v externích dokumentech, např. v prezentacích a to tak, že po najetí ukazovátka myši do oblasti grafu se zobrazí ikona pro stažení grafu ve formátu PNG.
       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/docs/img/13-ikona-graph-download.png" title="Ikona stažení grafu" width="40"/>    

### 12.1 Zjištění auditu
Zjištění auditu, jako jsou např. shoda, neshoda, příležitost ke zlepšení, lze zaznamenat v textové formě do popisných atributů v entitě typu **Audit**. Pokud je ale v rámci auditního zjištění identifikována neshoda, je výhodné založit v Zoty specifický typ entity **Neshoda** a připojit ji k příslušnému auditu. Jedině tak je možné s ní systematicky a efektivně dále pracovat, tj. např. přiřadit odpovědnou osobu, sledovat stav a způsob řešení, termíny atp. Podobně lze pracovat i s doporučeními auditu.      

#### 12.1.1 Neshody auditu      
Neshody auditu mohou být v rámci zjištění auditu označeny i podle jejich závažnosti nižší nebo vyšší úrovní důležitosti podle toho, zda byly klasifikovány jako významná/velká neshoda („major neshoda“) nebo méně významná/malá neshoda („minor neshoda“).      

### 12.2 Doporučení auditu       
Návrh auditora/auditorského týmu pro certifikační nebo dozorčí orgán (např. doporučení k udělení, zachování nebo odebrání certifikace). Nebo také pro samotnou organizaci, jak by mohla zlepšit svůj systém nebo procesy na základě příležitostí pro zlepšení, identifikovaných v průběhu auditu.

&nbsp;

## 13	VYHLEDAT
Vyhledávat lze v celé aplikaci dle názvu nebo klíče entity zadáním části vyhledávaného řetězce. Avšak zatímco vyhledávání přes pole pro vyhledávání vedle symbolu lupy v jednotlivých sekcích, které dostupné pouze pro záznamy jen některých typů entit patřících do dané sekce nebo globální vyhledávání s využitím symbolu lupy v horní nástrojové liště, slouží pro rychlé vyhledání, které je omezeno na max. 10 výsledků, tak v této sekci lze vyhledávat bez omezení. Navíc se zde vyhledané výsledky, je-li jich více, zobrazují ve standardním seznamu záznamů, který lze dále filtrovat, třídit anebo označovat jednotlivé záznamy a pak s nimi provádět některé hromadné operace.     
Kterýkoliv z výsledků vyhledávání lze pak také připnout do samostatných záložek, které jsou ve spodní části obrazovky připraveny zobrazit na jedno kliknutí detail příslušného záznamu.      
Vyhledávat lze fulltextově i v seznamech záznamů, které se nabízí při zadávání hodnot těch atributů, které podporují takovýto způsob zadání výběrem ze seznamu.     
Je-li zadávanou hodnotou atributu jiná entita, lze v seznamu entit pro výběr vyhledávat podle názvu nebo klíče entity.      
Je-li zadávanou hodnotou atributu ***uživatel***, lze v seznamu entit pro výběr uživatele vyhledávat podle *jména* nebo *příjmení* nebo *role* přiřazené uživateli.

&nbsp;

## 14	ŠTÍTKY
Sekce **Štítky** obsahuje seznam všech štítků, které jsou v Zoty vytvořeny, s možností zobrazit či upravit jejich název, popis, či barvu, jakou jsou vizualizovány. V detailu štítku se pak v záložce „Obsahuje“ zobrazí seznam všech entit, ke kterým je štítek připojen.    
Specifický typ systémového štítku je *Organizace*. Pokud je tímto štítkem označena libovolná složka v registrech entit či konkrétní entita, bude omezena jejich viditelnost jen pro ty uživatele, kteří patří do příslušné organizace či organizační jednotky. Více v kap. [Rozšířená správa oprávnění](#rozšířená-správa-oprávnění-pro-velké-organizace).

&nbsp;

## 15	SKUPINY
V Zoty jsou předdefinovaná schémata pro tvorbu skupin, které umožní seskupovat entity příslušného typu – *Aktiva, Hrozby, Zranitelnosti, Rizika*. Do takto vytvořených skupin lze zařazovat entity příslušného typu (dle příslušného schématu v rámci kterého byla skupina vytvořena) a provádět s nimi pak hromadné operace, např. provést hromadně jedno hodnocení nad celou skupinou vybraných rizik namísto mnoha hodnocení jednotlivých rizik.

&nbsp;

## 16	ADMINISTRACE
Obsahuje podsekce [**Nastavení**](#161nastavení), [**Účet**](#162účet) a [**Koš**](#163koš).
V sekci **Administrace** lze provádět řadu nastavení samotné aplikace včetně dat, se kterými pracuje, spravovat Zoty účet se všemi uživateli a jejich rolemi a provádět řadu dalších systémových nastavení, která mohou mít zásadní vliv na fungování celé aplikace.

:::caution
Je důležité vždy pečlivě zkontrolovat a nastavit přístup do této sekce pouze pro vybrané uživatele či role v nastavení [oprávnění přístupu do aplikace](#oprávnění-přístupu-do-aplikace).
:::

&nbsp;

### 16.1	Nastavení
V této sekci jsou dostupná všechna důležitá nastavení, která ovlivňují chování aplikace, včetně exportů a importů dat, tvorby zakázkových reportů, konfigurace metod, schémat hodnocení, znalostní báze, multijazyčnosti, oprávnění pro přístup do různých částí aplikace a řady dalších nastavení, jak je popsáno v podkapitolách níže.

#### 16.1.1	Aplikace
Zde mohou uživatelé s příslušným oprávněním konfigurovat z jednoho místa nastavení aplikace Zoty pro všechny uživatele a přizpůsobit ji tak potřebám své organizace. Pro větší přehlednost je řada nastavení, popsaných v podkapitolách níže, rozdělena do samostatných záložek.

#### Obecné
V nastavení aplikace lze na záložce ***Obecné*** volit výchozí/primární jazyk (v aktuální verzi je podporována čeština a angličtina) a měnu (CZK, USD, EUR).

#### Metody
Záložka ***Metody*** zobrazuje seznam všech dostupných metod, pomocí kterých lze konfigurovat systém a přizpůsobit jej dané organizaci. Metody mohou být systémové (byly vytvořeny výrobcem Zoty, mají status *Systém*) nebo mohou být vytvořeny zákazníkem či implementačním partnerem pouze v Zoty účtu zákazníka. Systémové entity nelze odstranit či editovat.   
Metoda poskytuje možnost uživatelsky definovat, uložit a následně opakovaně použít (přednastavit) určitou konkrétní konfiguraci systému, která je z pohledu uživatele optimální pro jím zvolený metodický přístup v oblasti řízení aktiv a rizik. Zpravidla tedy s ohledem na to, jaké všechny ISO normy jsou v organizaci implementovány nebo jaké zákony či jiné regulatorní požadavky se na ni vztahují.

:::note
Např. hodnocení rizik (ale i aktiv, hrozeb či zranitelností) mohou mít definovaná různá schémata hodnocení v rámci různých metod, kdy jedna metoda reprezentuje jeden přístup řízení rizik vycházející např. z normy ISO 31000 pro risk management, druhá z bezpečnosti informací dle ISO 27001, třetí ze zákona o kybernetické bezpečnosti atp.
:::
Koncept metod tak umožňuje zapojit více různých pohledů v rámci celého systému řízení rizik a mnohem snáze např. ověřovat, zda je organizace ve shodě se zákonnými, regulatorními či normativními požadavky, které na ni dopadají z více různých zdrojů.

Metoda může také u libovolné entity potlačit či naopak vynutit zobrazování některých atributů, které jsou specifické jen v kontextu této konkrétní metody. Přesněji – metod, neboť k jedné entitě jich může být připojeno více.     
Ve spojení s [globálním filtrem](#36filtry) pak může metoda/metody, přiřazená konkrétním záznamům libovolných typů entit, tyto záznamy filtrovat, tedy zobrazit uživateli jen některé a jiné naopak skrýt.

:::info
Metody mohou ovlivnit, jaké vlastnosti (atributy) budou entity mít, jak se s nimi bude v systému zacházet (např. v rámci hodnocení) a také které jejich záznamy mají být viditelné nebo skryté.
:::

Schopnost skrývat záznamy lze zajistit i s pomocí nastavení [přístupových oprávnění](#3132oprávnění-přístupu-na-záznamy). Rozdíl je ale ten, že skrýt záznamy entit s využitím metod a globálního filtru může i běžný uživatel, nikoliv pouze administrátor.     
      
I když koncept metod přináší řadu výhod, není jeho použití povinné či nezbytné pro správné fungování aplikace.

#### Oprávnění přístupu do aplikace
Záložka ***Oprávnění*** umožňuje pro vybrané role či konkrétní uživatele nastavit přístup do jednotlivých sekcí či podsekcí aplikace, s libovolnou kombinací oprávnění: *Číst, Vytvořit, Upravit, Odstranit, Komentář* nebo zvolit *Vše* pro nejvyšší úroveň oprávnění.

:::tip
V případě, kdy jsou v registrech vytvořeny struktury složek, může být žádoucí, aby uživatelé nemohli zakládat nově vytvářené entity, např. [aktiva](#821-správa-aktiv), přímo do root registru, tedy mimo tuto předdefinovanou strukturu. Za tímto účelem lze v administraci nastavit oprávnění pro ***Registry entit***.
:::

<img src="/docs/img/16-opravneni-registry.png"  title="Nastavení oprávnění pro registry entit" />

&nbsp;

#### Přesměrování
Záložka ***Přesměrování*** umožňuje pro každou roli individuálně nastavit, do jaké sekce či podsekce aplikace Zoty bude po přihlášení automaticky přesměrován uživatel s touto rolí. Pokud mají uživatelé přiřazeno více rolí, pak volbou *Pořadí* lze nastavit, v jakém pořadí mají být role seřazeny při vyhodnocování, kam má být daný uživatel přesměrován. Přičemž role s nižším pořadovým číslem mají vyšší prioritu. Specifické postavení zde má role administrátora, která je v pořadí vždy na prvním místě.

#### 16.1.2	Entity
Jednotlivé záložky zobrazují všechny **Typy entit**, které jsou v systému k dispozici, **Atributy**, které jsou používány pro popis vlastností entit, typy **Propojení**, která lze mezi entitami realizovat a všechny **Stavy**, kterých mohou entity nabývat v rámci systémových či uživatelských workflow.    
Typy entit, jejich atributy, stavy a typy vzájemných propojení, mohou být systémové (byly vytvořeny výrobcem Zoty, mají status *Systém*) nebo mohou být vytvořeny zákazníkem či implementačním partnerem pouze v Zoty účtu zákazníka. Systémové entity nelze odstranit či editovat.

#### Typy entit
Typy entit jsou zatříděny do některé z kategorií: *Cíle, Aktiva, Hrozby, Zranitelnosti, Rizika, Hodnocení, Plány, Požadavky, Případy, Schválení, Úkoly, Designer*.

#### Atributy
V systému jsou dostupné atributy typu: *boolean, text, string, integer, float, number, json, datetime, relation*. Hodnoty lze pak do příslušných atributů zadávat prostřednictvím různých typů formulářů, konkrétně: *input, select, datepicker, textarea, translatable, currency*.

#### Propojení
V Zoty lze propojovat entity vazbami různého typu. Přičemž některé typy propojení jsou systémové (systém je vytváří automaticky bez zásahu uživatele) a některé jsou uživatelsky volitelné. Pokud je vazba směrově orientovaná, tzn., že směřuje od zdroje k cíli, tak pak je zde též informace, jaký zdroj, s jakým cílem mohou být propojeny. Neboli určuje směr propojení.    
Systémová propojení jsou typu: *Stromová struktura, Výskyt, Zástupce*.       
Účel a použití jednotlivých typů systémových propojení:
-	***Stromová struktura*** je často používaný typ směrově orientovaného propojení mezi složkami či entitami, kde je třeba modelovat hierarchickou strukturu vazeb, kdy jedna složka či entita vystupuje v roli nadřazené a ve stromové struktuře se pak pod ní zobrazují ostatní, jí podřazené složky/entity.
-	***Výskyt*** je využíván v modulu Zoty Designer při vizualizaci propojení entit tvořící procesní modely importované z procesního nástroje ARIS.
-	***Zástupce*** je odkaz v katalogu na entitu uloženou v registru.
-	***Rodič→Dítě*** může být propojení jak systémové, tak uživatelské, viz popis níže.                 
Uživatel pak ještě může při propojení entit volit výběrem z propojení typu: *Vztah, Podporuje, Blokuje, Závislost, Zahrnuje, Nezahrnuje, Rodič→Dítě*. Účel a použití jednotlivých typů propojení:
-	***Vztah*** je univerzální typ propojení, který lze použít mezi libovolnými [typy entit](#typy-entit-a-jejich-kódové-značení), které mohou existovat zcela nezávisle na sobě a není třeba modelovat směr propojení mezi nimi.
-	***Podporuje*** je typ směrově orientovaného propojení, pomocí kterého lze vyjádřit, že jedna entita souvisí s jinou a to způsobem, že jedna z nich (zdroj) podporuje entitu/entity další (cíl). Tímto typem propojení se vytvoří vazba směřující od zdroje k cíli. Tento typ propojení má navíc specifickou vlastnost, která umožňuje pomocí atributu ***Váha*** (udává se v procentech v rozsahu 10-100 %) určit míru podpory mezi entitami či důležitost entity podpůrné pro entitu podporovanou.
Příkladem je propojení primárních a podpůrných aktiv.
-	***Blokuje*** je typ směrově orientovaného propojení, pomocí kterého lze vyjádřit, že jedna entita blokuje entitu jinou, tzn. že by nemělo dojít ke změně stavu blokované entity, aniž by předtím došlo ke změně stavu entity, která ji blokuje.
Příkladem je propojení dvou entit typu *Úkol*, kdy úkol č. 2 nelze dokončit nebo na něm začít pracovat dříve, než je dokončen úkol č. 1.
-	***Závislost*** je jednosměrná vazba vyjadřující obecnou závislost jedné entity na druhé; tento typ vazby je podobný typu vazby *Blokuje*, na rozdíl od něj ale nijak neurčuje způsob, jakým jedna entita na jiné závisí (tj. neříká, že je např. „*blocker*“), není tedy tak striktní. Tento typ propojení má navíc specifickou vlastnost, která umožňuje pomocí atributu ***Váha*** (udává se v procentech v rozsahu 10-100 %) určit míru závislosti jedné entity na druhé.
-	***Zahrnuje*** je jednosměrné vazba, pomocí které jedna entita agreguje jiné entity.
-	***Nezahrnuje*** je specifický způsob propojení pomocí jednosměrné vazby, kdy jedna entita vylučuje propojení s jinou entitou/entitami; to jsou případy, kdy je třeba např. dokumentovat výjimku z propojení a nelze to tedy provést tak, že se entity jednoduše pouze nepropojí.
-	***Rodič→Dítě*** je jednosměrné propojení od jedné entity – rodiče, na jinou entitu – dítě. Propojuje entity, kde jedna z nich nemůže existovat nezávisle na jiné, tzn. dítě (např. hodnocení) nemůže existovat bez rodiče (zde např. aktivum, riziko atp.). Tento typ propojení může být též vytvářen zcela automaticky systémem. Například je-li vytvářeno hodnocení nějaké entity. Pak tato entita vystupuje v roli „rodiče“ a připojené hodnocení v roli „dítěte“. Vše se realizuje na pozadí, bez zásahu uživatele.
Propojení entit pomocí vazby typu *Rodič -> Dítě* je také nezbytné, má-li jedna hodnocená entita (dítě) přebírat výsledné skóre hodnocení jiné entity (rodiče) a zahrnout ji do výpočtu svého skóre hodnocení dle nastaveného schématu.

#### Stavy
V systému mohou rozličné [typy entit](#typy-entit-a-jejich-kódové-značení) získávat či měnit svůj stav v rozsahu hodnot: *Akceptováno, Archivováno, Blokováno, Čekající, Dokončeno, Implementováno, Ke schválení, Nepřiřazeno, Obnoveno, Odmítnuto, Odstraněno, Pozastaveno, Převzato, Schvaluje se, Schváleno, V přípravě, V realizaci, V revizi, Vráceno, Vyhodnoceno, Vytvořeno, Zamítnuto, Zrušeno*.

&nbsp;

#### 16.1.3	Znalostní báze
:::info
Mezi aktivem, hrozbou a zranitelností existuje určitý vztah. Jeho znalost je důležitá pro úspěšné provedení analýzy a vyhodnocení rizik. Účelem znalostní báze v Zoty je usnadnit uživatelům v roli risk analytiků či manažerů rizik nejen zhodnocení aktiv, hrozeb a zranitelností v rámci analýzy rizik, ale i kvantifikaci vhodných opatření v rámci jejich vyhodnocení.
:::  

#### Konfigurace matice
Znalostní báze je matice kombinující hrozby s relevantními zranitelnostmi, aktivy, opatřeními a případně i požadavky (zákonů, norem, smluv, …). Správce systému může jednotlivé dimenze této matice zcela volně definovat, tj. stanovit, jaké konkrétní kategorie pro aktivum, hrozbu či zranitelnost budou do této matice zahrnuty a jak na sebe navzájem působí.    
Řádky matice reprezentují jednotlivé hrozby. Systém do řádků automaticky vloží všechny hrozby, které jsou uložené v registru.     

:::tip
V konfiguraci lze zapnout přepínač *Kompaktní zobrazení*, kdy se namísto názvů entit zobrazují pouze jejich klíče a název se zobrazí až v tooltipu (po najetí ukazovátka myši nad příslušný klíč). Matice se pak stane daleko přehlednější. Zejména v případech, kdy uživatelé používají delší názvy.      
:::

<img src="/docs/img/16-znalostni-baze-kompaktni-zobrazeni.png" title="Znalostní báze - Kompaktní zobrazení" />

Tlačítko ***Přidat*** sloupec nabídne výběr ze všech entit typu zranitelnosti a entit a složek z registrů aktiv a požadavků.     
Na konci každého řádku lze pomocí symbolu tří teček vyvolat menu s volbou ***Upravit***, umožňující nastavit relevanci propojení, tj. které sloupce matice jsou pro tento konkrétní řádek relevantní.     
Se znalostí, jaké hrozby mohou působit na jaké kategorie aktiv, jaké zranitelnosti mohou při tom zneužít a jaká bezpečnostní opatření mohou pomoci tyto zranitelnosti eliminovat v rámci mitigace rizika, pak systém pracuje tak, že přednabízí uživatelům pouze smysluplná propojení mezi aktivem, zranitelností a hrozbou. A zároveň doporučuje vhodná bezpečnostní opatření.     
V menu jsou dále dostupné volby ***Duplikovat*** celý řádek matice a ***Detail***, který zobrazí možnost přiřadit [Metodu](#metody), pro kterou budou zde definované kombinace relevantní a [Organizaci](#1621organizace), pro kterou budou viditelné.

:::info
K tomu, aby byl tento koncept funkční, je pouze třeba, vedle správné jednorázové konfigurace matice, aby konkrétní identifikovaná aktiva byla při založení do systému vždy zatřízena do správné kategorie reprezentované složkami v registru aktiv. Zpravidla jsou totiž hrozby nebo zranitelnosti namapovány nikoliv na konkrétní aktivum, ale na celou kategorii aktiv daného typu, tj. složku, např. *Hardware, Software, Informace*, atp., případně na podkategorie; pro *Hardware* to tedy mohou být např. *Aktivní síťové prvky*, *Servery*, atp.
:::

<img src="/docs/img/16-znalostni-baze-kategorie-aktiv.png" title="Kategorie aktiv pro konfiguraci matice znalostní báze" width="400"/>

&nbsp;

#### Generování rizik
Pokud je v daném řádku matice definovaná alespoň jedna kombinace hrozby s dalším typem entity (jedno zda zranitelností, aktivem či kombinace obojího), pak volba ***Detail*** v menu nabídne navíc možnost z těchto kombinací vytvořit rizika.       
<img src="/docs/img/16-znalostni-baze.png" title="Zobrazení detailu možných kombinací entit pro vybranou hrozbu" />

&nbsp;

Rizika lze takto vygenerovat hromadně z celého seznamu, který Zoty sestaví na základě znalosti možných kombinací mezi vybranou hrozbu a všemi relevantními aktivy a zranitelnostmi. Hromadné generování je dostupné pouze po zvolení některé z nabízených metod (lze zvolit i volbu „*Bez metody*“). Nebo může uživatel procházet seznam s jednotlivými kombinacemi, které Zoty pro vytvoření rizik nabízí a pomocí tlačítka ***Vytvořit*** na každém jednotlivém řádku generovat rizika jedno po druhém.
<img src="/docs/img/16-znalostni-baze-kombinace-avt-detail.png" title="Nabídka kombinací aktiv, zranitelností a hrozeb pro generování rizik" />

&nbsp;

Pokud je z dané kombinace riziko vytvořeno, není již pro ni tlačítko ***Vytvořit*** dostupné a namísto něj se zobrazuje identifikátor (klíč) vytvořeného rizika. Je-li riziko odstraněno, tlačítko ***Vytvořit*** bude pro tuto kombinaci opět dostupné.      

Zoty nemusí nabízet seznam pro generování rizik hledáním kombinací aktiv a zranitelností vždy jen pro jednu hrozbu, ale i pro více hrozeb najednou. Stačí je vybrat.
<img src="/docs/img/16-znalostni-baze-select-hrozeb.png" title="Výběr hrozeb k sestavení jejich kombinací s aktivy, zranitelnostmi" />

&nbsp;

Je-li vybráno více hrozeb, aktivuje se ve spodní části pracovní plochy modrý pruh s informací o počtu vybraných záznamů. A také s tlačítkem ***Detail***, které nabídne kombinace pro hromadné vytvoření rizik sestavené ze znalostní báze pro všechny vybrané hrozby se všemi relevantními aktivy a zranitelnostmi. 
<img src="/docs/img/16-znalostni-baze-kombinace-avt-select-hrozeb-detail.png" title="Výběr hrozeb k sestavení jejich kombinací s aktivy, zranitelnostmi" />

&nbsp;

V detailu jednoho či více vybraných řádků matice znalostní báze lze zapnout zobrazování doplňkových informací. Pak se u aktiv, na které hrozba/hrozby působí, bude zobrazovat, jakým metodám nebo organizacím či org. jednotkám jsou tato aktiva přiřazena.
<img src="/docs/img/16-znalostni-baze-kombinace-avt-rozsireny-detail-a-skryvani.png" title="Skrývání vybraných kombinací aktiv, zranitelností a hrozeb pro generování rizik" />      

&nbsp;

Mimo to zde lze také skrýt nechtěné kombinace. Ne vždy je totiž vhodné generovat rizika z celého seznamu všech možných kombinací aktiv, hrozeb a zranitelností, které se nabízí. Uživatel má proto možnost skrýt vybrané kombinace pomocí stejnojmenné volby ***Skrýt***, aby se pro tvorbu rizik nenabízely. Tyto kombinace se pak přesunou do odděleného seznamu, kde je možné je pouze prohlížet. Nebo je lze pomocí volby ***Zobrazit*** přesunout zpět do seznamu relevantních kombinací, ze kterých lze generovat nová rizika.      

:::info
Nechtěné kombinace se záměrně neodstraňují, ale pouze skrývají proto, aby byla zajištěna transparentnost. Pokud totiž v registru chybí riziko pro některou kombinaci hrozby, zranitelnosti či aktiva, je zde dokumentováno, proč tomu tak je a že je to tudíž žádoucí stav.
:::

&nbsp;

#### 16.1.4	Hodnocení
V rámci **Administrace – Nastavení – Hodnocení** lze zobrazit přehled stávajících definic schémat hodnocení, upravovat nastavení těchto schémat nebo založit definici nového schématu hodnocení.


<img src="/docs/img/16-hodnoceni-prehled-schemat.png" title="Přehled schémat hodnocení" />      
       
&nbsp;

Nově vytvořené schéma je třeba publikovat (pomocí tlačítka ***Publikovat***), aby bylo viditelné v ostatních sekcích aplikace a mohlo se podle něj provádět hodnocení.

<img src="/docs/img/16-nastaveni-hodnoceni-publikace.png" title="Publikace schématu hodnocení" />

&nbsp;

Aby bylo možné stávající schéma, které je publikováno, upravit, je třeba jej přepnout pomocí tlačítka ***Upravit*** do editačního režimu. Schéma je pak viditelné pouze zde, v nastavení hodnocení.

<img src="/docs/img/16-nastaveni-hodnoceni-editace.png" title="Povolení editace schématu hodnocení" />

&nbsp;

Schéma hodnocení je možné přiřadit metodě. Pak bude viditelné pouze u této konkrétní metody.
Při definici schématu hodnocení je třeba dále nastavit:
- **Typ hodnocení** – zda se podle definovaného schématu budou hodnotit aktiva, rizika, hrozby nebo zranitelnosti
- **Název** – libovolný uživatelský název pro schéma hodnocení
- **Možnosti stavu** – volba, zda se při hodnocení má uživateli nabízet hodnocení pro aktuální/skutečný stav nebo pro cílový nebo zda se nabídnou k hodnocení obě možnosti
- **Možnosti dopadu** – volba, zda se při hodnocení má uživateli nabízet hodnocení dopadu na aktiva pouze z pohledu možných hrozeb nebo příležitostí nebo obojího
- **Perioda hodnocení** – volba, zda časovým obdobím pro hodnocení aktuálního/skutečného stavu má být týden, měsíc, čtvrtletí nebo rok. Nebo libovolné datum, pokud neexistuje pravidelná periodicita hodnocení skutečného stavu. Plánovaná hodnocení cílového stavu se pak vždy vztahují ke konkrétnímu datu.

V dalším kroku lze již definovat metriky pomocí tlačítka ***Přidat metriku***. Metrika je jedním z parametrů hodnocení, pro který lze definovat:
- **Typ** – určuje způsob, jakým bude metrika v definovaném schématu hodnocení použita. Metrika může být v rámci schématu zcela nově definována (jak je popsáno níže) pomocí volby
  - **Vytvořit metriku**
  - **Metrika** – lze použít některou ze stávajících, již definovaných metrik v rámci jiných schémat hodnocení.
  - **Schéma hodnocení** – lze použít výsledné skóre jiného schématu hodnocení, jehož hodnotu lze převzít do této metriky. Při této volbě je třeba mít na paměti, že entita, která v rámci hodnocení přebírá výsledné skóre hodnocení jiné entity, musí být s touto entitou propojena vazbou rodič-potomek a zároveň, pokud je těmto entitám přiřazena některá metoda, musí být stejná.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="/docs/img/16-hodnoceni-metrika-typ.png" title="Typy metrik hodnocení" width="300"/>

Níže uvedené dokumentuje postup a význam jednotlivých atributů pro volbu ***Vytvořit metriku***:
- **Název** (např. *Dopad* nebo *Pravděpodobnost, Závažnost, Dostupnost, Integrita* atp.)
- **Osa** – volba, zda se má parametr vynášet do osy X nebo Y při prezentaci výsledného hodnocení ve formátu dvou-rozměrného grafu typu heatmapa. Volba osy Y se zpřístupní až tehdy je li definována více než jedna metrika. Hodnocení mohou být jak jednorozměrná (pouze v ose X), tak dvourozměrná (osa X a Y).
- **Pořadí** – pořadí v jakém se metrika zobrazí uživateli v rámci ostatních definovaných metrik při vizualizaci heatmapy, která se pak uživatelům nabízí pro provedení konkrétních ohodnocení.
- **Vstupní data** – lze zvolit, v jakém formátu bude uživatel zadávat vstupní data pro daný parametr a v jakém rozsahu *OD* (minimum) *DO* (maximum), k dispozici jsou volby:
  - *Hodnota* – uživatel může zadat jednu konkrétní hodnotu v rozsahu *Od-Do*
  - *Hodnota (rozmezí)* - uživatel může zadat více hodnot v rozsahu *Od-Do* v rámci definovaných pásem (viz níže)
  - *Procenta* – uživatel může zadat jedno konkrétní procento v rozsahu *Od-Do*
  - *Procenta (rozmezí)* - uživatel může zadat více procent v rozsahu *Od-Do* v rámci definovaných pásem (viz níže)
- **Popis** – volitelná poznámka s doplňujícím popisem k názvu. Tyto popisky se pak mohou zobrazit uživateli, pokud při hodnocení podrží ukazatel myši nad příslušným polem heatmapy reprezentujícím předdefinovanou hodnotu v daném pásmu.

<img src="/docs/img/16-hodnoceni-zobrazeni-popisu-k-nazvu.png" title="Definice metrik hodnocení" width="550"/>

&nbsp;

**Pásmové rozmezí** – definice pásem, v rámci kterých budou zadávána vstupní data pro daný parametr. Pásma lze přidávat pomocí symbolu "**+**" a odebírat kliknutím na symbol koše v pásmu, které se má odstranit.    
Pro každé pásmo lze definovat hodnotu (nebo procento, podle toho, jaký formát vstupních dat byl zvolen v předchozím kroku) a k této hodnotě (nebo procentu) zvolit úroveň, kterou má tato hodnota reprezentovat, včetně přednastavené barvy, kterou bude zobrazena v heatmapě. K výběru jsou tyto předdefinované úrovně hodnocení: *Nulové, Velmi nízké, Nízké, Velmi malé, Malé, Střední, Významné, Velmi významné, Vysoké, Velmi vysoké, Kritické*. Pro všechny tyto úrovně lze definovat vlastní názvy aktivací volby ***Definovat vlastní názvy***. Lze k nim také doplnit volitelnou poznámku aktivací volby ***Doprovodný popis***.    

<img src="/docs/img/16-hodnoceni-vlatni-nazvy-urovni-metrik.png" title="Vlastní názvy úrovní metrik hodnocení" width="850"/>

&nbsp;

:::note
Na obrázku níže je prezentován příklad výsledné definice pásem hodnocení dopadu na informační aktivum při narušení jeho *integrity*. Na dalším obrázku pak příklad možného vzorce výpočtu, který vedle integrity zahrnuje další dvě hodnocené vlastnosti bezpečnosti informací – *důvěrnost* a *dostupnost*.
:::

<img src="/docs/img/16-nastaveni-hodnoceni-pasma.png" title="Definice pásem ve schématu hodnocení" width="560"/>

&nbsp;

- **Vzorec výpočtu hodnocení** – výsledné skóre hodnocení se spočte na základě vstupních dat, která uživatel vybere z předdefinovaných hodnot pro jednotlivá pásma hodnocení. Vzorec je uživatelsky definovatelný. V rámci jeho definice lze použít všechny metriky definované v předchozím kroku a s nimi provádět základní operace, jako jsou sčítání, odčítání, násobení, dělení, funkce zaokrouhlení nahoru (*Round Up*), zaokrouhlení dolů (*Round Down*), vyhledání maxima z množiny hodnot (*MAX*), vyhledání minima z množiny hodnot (*MIN*). Použít lze přitom závorky, čárky pro oddělení hodnot při použití funkcí nebo libovolný celočíselný koeficient pro úpravu celého výpočtu.      

<img src="/docs/img/16-nastaveni-hodnoceni-vzorec-definice.png" title="Definice vzorce ve schématu hodnocení" width="680"/>   
      
:::note
Použití základních funkcí:
  - *MAX* (3,4,5) = 5
  - *MIN* (3,4,5) = 3
  - *Round Up* (1.4) = 2
  - *Round Down* (1.6) = 1
:::

&nbsp; 

Tlačítko ***Zkontrolovat*** provede kontrolu logické správnosti celého definovaného vzorce a oznámí, zda je matematicky správný nebo zda obsahuje chybu. Bez provedené kontroly nelze schéma hodnocení uložit.
      
<img src="/docs/img/16-nastaveni-hodnoceni-vzorec-zkontrolovat.png" title="Kontrola vzorce ve schématu hodnocení" width="400"/>
      
Výsledné pásmové hodnocení je heatmapa, která může zobrazovat jednoduché jednorozměrné hodnocení pouze v jedné ose X.
Anebo může také kombinovat pásmová hodnocení v ose X a v ose Y v podobě dvourozměrné heatmapy – viz příklad na obr. níže. V takovém případě jsou definovány vzorce tři. Jeden, obsahující parametr/parametry v ose X, druhý, obsahující parametr/parametry v ose Y a třetí (tzv. *Matice*), který kombinuje výsledky výpočtu předchozích dvou (*Osa X celkem, Osa Y celkem*).
:::note
Vzorec výpočtu hodnocení pro sestavení dvojrozměrné heatmapy v rámci hodnocení rizik dle Zákona o kybernetické bezpečnosti.
:::

<img src="/docs/img/16-hodnoceni-priklad-pro-osu-x-a-y.png" title="Definice heatmapy s výpočtem skóre ve schématu hodnocení" />

&nbsp;
#### Konfigurace nabídky strategií zvládání rizik
Pro libovolné kombinace metrik, ze kterých je v nastavení příslušného schématu hodnocení rizik počítáno výsledné pásmové rozmezí úrovně rizika (neboli pro každý průsečík osy X a Y v matici heatmapy), lze definovat přípustné strategie zvládání rizika. A zohlednit přitom stanovený risk apetit.

<img src="/docs/img/16-hodnoceni-strategie-zvladani.png" title="Definice heatmapy s nastavením strategie zvládání" /> 

&nbsp;

Pokud někde toto omezení nebude administrátorem nastaveno, budou se pak pro zvládání takto hodnoceného rizika nabízet uživatelům všechny strategie zvládání. Např. ve výběru při volbě strategie v [plánu zvládání rizik](#102plán-zvládání-rizik).

&nbsp;

#### 16.1.5	Reporty
Správce aplikace zde má k dispozici prostředí pro tvorbu vlastních reportů s využitím standardních vývojářských technologií (JavaScript, GraphQL, Handlebars, CSS). Pro každý report lze také zapnout/vypnout přepínač *Aktivní*, aby mohl tvůrce reportu rozlišit reporty, které jsou např. ještě rozpracované, od těch, které jsou již hotové a mohou se uživatelům nabízet. Pro každý report lze navíc nastavit omezení jen na vybrané uživatele či role, pro které má být report dostupný.       
Výstupem reportů mohou být soubory ve formátech, které mohou konzumovat běžní uživatelé (např. *PDF, DOC, XLS*). Anebo ve formátech (*JSON*, *XML*, …), které mohou být poskytnuty k dalšímu zpracování aplikacím třetích stran. A to jak jednorázově, tak i automatizovaně, na pravidelné bázi, s využitím [plánovače úloh](#plánovač-úloh). 

#### 16.1.6	Data a zálohování
Záložky ***Export*** a ***Import*** slouží pro zálohu a obnovu dat v aktuálním účtu Zoty.
Je-li aplikace Zoty provozována v cloudu formou předplatného jako služba (**Zoty cloud**), jsou data zálohována automaticky na denní bázi. Obnovení dat z databáze je pak provedeno na základě zákazníkova požadavku založeného v aplikaci Zoty Helpdesk nebo zaslaného na [Zoty podporu](#zoty-podpora).     
Pokud je aplikace Zoty provozována na vlastním serveru zákazníka (**Zoty on-premise**), je zálohování dat uložených v databázi (PostgreSQL) plně v režii a odpovědnosti zákazníka. Zoty také umožňuje uživateli v roli administrátora exportovat většinu uživatelských dat z databáze v Zoty do souboru ve formátu JSON.

<img src="/docs/img/16-zalohovani.png" title="Záloha a obnova dat" width="640"/>

&nbsp;

Po exportu databáze do souboru lze pak tento soubor naimportovat zpět do Zoty účtu a data tak v databázi obnovit. Pokud se mezitím, tedy od posledního importu, v databázi některá data změnila, tak po aktivaci volby *Vynutit změny* se přepíší data v Zoty účtu, tzn. prioritu mají data v importovaném souboru. Volba *Odstranit data, která import neobsahuje*, odstraní v Zoty účtu všechna data, která nejsou nalezena v importovaném souboru.      
Aktivace obou výše zmíněných voleb importu je tedy ekvivalentem běžného obnovení dat ze zálohy pomocí libovolného standardního nástroje pro zálohování a obnovu dat.  

:::caution
Pro pravidelné zálohování v produkčním prostředí důrazně doporučujeme používat nativní nástroje pro zálohování databází namísto zálohování pomocí exportu a importu JSON souborů v Zoty. Nativní nástroje pro zálohování databází nabízejí mnohem konzistentnější a spolehlivější způsob ukládání a obnovy dat.
:::

:::info
Když je Zoty používáno, není zaručeno, že zálohy v JSON souborech budou konzistentní, protože databáze může být během procesu zálohování aktualizována. Zoty nehlásí žádná varování ani chybová hlášení, pokud by byla vytvořena JSON záloha s nekonzistencí. Takové zálohy pak během procesu obnovy selžou. JSON export navíc nezahrnuje některá specifická data Zoty účtu, např. [notifikace](#38notifikace), [log aktivit](#312aktivity-uživatelů), informace o samotném [účtu](#162účet) a jeho [uživatelích](#1622uživatelé).
:::

&nbsp;

Záložka ***Spreadsheet*** importuje data různých typů entit (*Aktiva, Hrozby, Zranitelnosti, Rizika*) ze souborů formátu Excel.

Pro nové zákazníky, kteří testují Zoty s demo daty, založili si v rámci testování v tomto účtu i svá data, která chtějí zachovat, přičemž demo data potřebují odstranit, slouží volba *Vyčistit* na záložce ***Demo***.      

Záložka ***ARIS*** poskytuje funkcionality importu dat z  databáze SW nástroje ARIS pro modelování a analýzu procesů.      

#### Plánovač úloh
Schopnost vytvářet a plánovat specifické úlohy, spolu se schopnostmi [reportů](#1615reporty), zajišťují interoperabilitu Zoty s aplikacemi třetích stran. V administraci jsou všechny dostupné úlohy zobrazeny na záložce ***Naplánované úlohy***. Zde mohou být spouštěny buď manuálně nebo automatizovaně v pravidelných, předem definovaných časech. 

<img src="/docs/img/16-task-scheduler.png"  title="Plánovač úloh pro spouštění reportů" width="700" />

&nbsp;

:::note
Úloha může v Zoty např. iniciovat libovolný [report](#1615reporty) a získaný výstup v definovaném formátu a struktuře poskytnout aplikacím třetích stran. Může také volat externí URL adresy, kde běží služby aplikací třetích stran a data od nich naopak získávat. Takto lze efektivně přistupovat k datům a vzájemně si je vyměňovat s aplikacemi třetích stran.
A nejen to. Jiné specifické úlohy mohou, dle definovaných pravidel, data na straně Zoty také např. automaticky generovat či upravovat.
:::

:::info
Výsledné řešení, jak popisují výše uvedené příklady, je třeba vždy zakázkově implementovat s podporou vyškolených expertů.  Zoty poskytuje pouze technické schopnosti a nástroje v podobě funkcionalit pro administrátory aplikace. 
Případné požadavky v této oblasti proto směrujte na vašeho dodavatele nebo přímo na [Zoty podporu](#zoty-podpora).
:::

&nbsp;

### 16.2	Účet
V administraci účtu jsou v rámci příslušných záložek definovány **organizace** (a organizační jednotky), **uživatelé**, **lidé** a **role**.
#### 16.2.1	Organizace
Uživatel si může definovat, jaké organizace (společnosti, organizační složky či jiné subjekty) jsou součástí jeho organizační struktury. Zároveň pak k jednotlivým organizacím nebo organizačním jednotkám (např. oddělením) přiřadit uživatele, kteří do nich patří.
Jsou-li některá tato data spravována v externím systému, tak vyplněním atributu ***ID externího zdroje dat*** lze zajistit automatickou synchronizaci např. organizací a uživatelských účtů v Zoty a jejich přiřazení do té které organizace.
Pokud je pak štítkem s názvem zde definované organizace označena složka či entita, tak bude viditelná pouze pro ty uživatele, kteří jsou jejími členy (viz kapitola [Rozšířená správa oprávnění](#rozšířená-správa-oprávnění-pro-velké-organizace)).

#### 16.2.2	Uživatelé
***Přehled*** zobrazuje seznam všech uživatelů, kteří mají přístup do aplikace Zoty. 
Symbol tří teček na konci každého záznamu zobrazí menu s možností upravit základní identifikační a přihlašovací údaje u vybraného uživatele, jemu přiřazené role, celý jeho účet odstranit nebo anonymizovat záznamy o něm za účelem plnění požadavků na ochranu osobních údajů (GDPR). 
Záložka ***Vizualizace*** pak poskytuje graf nejaktivnějších uživatelů podle celkového času, který strávili v aplikaci Zoty v aktuálním dni.      
V detailu vybraného uživatele lze pak zobrazit, vedle jeho identifikačních údajů, seznam všech entit či složek, které jsou mu přiděleny (jeho jméno je zadáno v atributu ***Správce*** nebo ***Garant***) a také přehled všech jeho komentářů a připojených souborů.

#### 16.2.3	Lidé
Lidé jsou osoby bez přístupu do aplikace Zoty. Tzn., že nemají vytvořen uživatelský účet, přesto se ale mohou nabízet pro vyplnění některých atributů entit, kde se očekává zadání výběrem i z těch osob, které nemusí být uživateli Zoty (přičemž se neřeší, zda se jedná o zaměstnance, externisty nebo jakékoliv jiné osoby).      

#### 16.2.4	Role
Zde se zobrazují jak role předdefinované výrobcem (systémové role), tak role vytvořené uživatelem. V seznamu rolí se zobrazuje i atribut ***Uživatelé*** s číselným údajem o celkovém počtu uživatelů, kterým je daná role přiřazena. Kliknutím na tuto informaci se pak zobrazí výpis všech uživatelů s touto rolí.      
Aby se zjednodušilo a částečně či zcela zautomatizovalo vyplňování metod, lze navíc jednotlivým rolím nastavit omezení pouze na *přiřazené metody*. A poté vybrat a přiřadit této roli, které metody z těch všech, jež jsou v Zoty definované, se mají uživateli nabízet pro výběr.          
Nebo lze také metodu/metody rovnou předvybrat bez zásahu uživatele. Uživatel s takto nastavenými rolemi pak nebude muset z nabídky metod vůbec vybírat, protože se předvyplní automaticky ta/ty, které jsou zde nastaveny jako *předvybrané metody*. Žádné jiné metody pak nemůže zvolit.

&nbsp;

### 16.3	Koš
Všechny smazané záznamy se přesouvají do koše, odkud je možné je obnovit nebo trvale odstranit. V koši se zobrazuje název, datum odstranění a typ záznamu (*Složka, Hodnocení, Riziko, Hrozba* atp.).

<img src="/docs/img/16-kos.png" title="Koš" width="740"/>

&nbsp;

Na entity v koši se aplikují oprávnění dle rolí podobně, jako na entity mimo koš. Tzn., že zobrazit a/nebo odstranit či obnovit entitu z koše, může jen uživatel, který je u ní přiřazen jako *Správce*, pokud není správce přiřazen, tak uživatel, který ji vytvořil. Role *Manažer* entit má oprávnění plného přístupu na všechny entity bez ohledu na to, kdo je vytvořil nebo kdo je jejich *Správce*, ale pouze za předpokladu, že je členem *Organizace*, která je entitě přiřazena. Toto pravidlo opět platí i pro entity v koši.

&nbsp;

&nbsp;

:::info
Aplikace Zoty je neustále rozvíjena a vylepšována. Pokud naleznete jakýkoliv nesoulad této dokumentace s vaší aktuální verzí Zoty, předejte jej prosím prostřednictvím libovolného komunikačního kanálu na [Zoty podporu](#zoty-podpora).     
Budeme vám vděční za veškeré podněty a připomínky.
:::  


<!---
vlastní lokalizace

node_modules\@docusaurus\theme-translations\locales\cs\theme-common.json

  "theme.admonition.caution": "pozor",
  "theme.admonition.danger": "pozor!",
  "theme.admonition.info": "info",
  "theme.admonition.note": "příklad",
  "theme.admonition.tip": "tip",


Formátování:

Název sekce: bold
--
Název záložky: bold+kurzíva
Název ikony: bold+kurzíva
Název atributu: bold+kurzíva
Název menu nebo volby v menu: bold+kurzíva
--
Název hodnoty atributu: kurzíva
Název přepínače: kurzíva
Název typu entity: kurzíva

--->
