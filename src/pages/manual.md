<!--- 
https://www.markdownguide.org/basic-syntax/
https://docusaurus.io/docs/markdown-features/toc
-->


<!--- to test
## Obsah
toc_min_heading_level: 2
toc_max_heading_level: 5
-->


##	ÚČEL DOKUMENTU
Tento dokument obsahuje uživatelskou dokumentaci poskytující obecný popis funkcionalit aplikace Zoty. Nedává univerzální návod pro implementaci Zoty v konkrétní organizaci. Nastavení celého systému doporučujeme vždy konzultovat s kvalifikovaným implementačním partnerem. Navrhne řešení a doporučí, jak využít dané funkcionality tak, aby co nejlépe podpořily proces řízení aktiv a rizik s ohledem na zvyklosti či specifické potřeby konkrétní organizace.

:::info
 Aplikace Zoty je neustále rozvíjena a vylepšována. Pokud naleznete jakýkoliv nesoulad této dokumentace s vaší aktuální verzí Zoty, napište nám prosím na helpdesk@zoty.cz.     
 Budeme vám vděční za veškeré podněty a připomínky.
:::
                       
##	ZÁKLADNÍ POUŽÍVANÁ TERMINOLOGIE

- **Entita** obecný termín pro veškeré objekty v systému, které mohou být různého typu, přičemž entity stejného typu mají shodné chování a vlastnosti (vlastnosti jsou definované atributy). Systémové entity mohou být např. typu *Riziko, Hrozba, Zranitelnost, Aktivum, Projekt, Proces, Úkol, Cíl, Incident, Hodnocení* atp. Seznam všech typů entit, se kterými lze v systému pracovat, včetně jejich zkratek (které jsou součástí tzv. klíče jednoznačně identifikujícího všechny záznamy v Zoty), jsou uvedeny níže v rámci popisu atributu Klíč. Pro každou entitu lze také nastavit její ***Důležitost*** v rozsahu *1-Nevýznamná, 2-Nízká, 3-Normální, 4-Vysoká, 5-Kritická*.

- **Atribut** – informace popisující vlastnosti entity daného typu, např. *Název, Popis, Datum platnosti, Správce, Náklady* atp.
- **Záznam** – výskyt jedné konkrétní entity; dle typu entity lze pak záznamy třídit do stejnojmenných kategorií (*Rizika, Aktiva, Úkoly* atp.). Pro záznam libovolné entity lze nastavit různé úrovně oprávnění přístupu. Více k tomuto nastavení v kapitole Omezení přístupu na složky a záznamy.
- **Klíč** – entity mají atribut *Klíč*, který usnadňuje vyhledávání a třídění záznamů. Klíč je alfanumerický kód, který je systémem automaticky generován a je složen z pořadového čísla a kódu reprezentujícího zkratku typu entity, ke které záznam patří. Např. riziko může mít klíč „*R13*“. Pokud zkratka typu entity obsahuje na konci „*Z*“, indikuje to záznamy přednaplněné v systému Zoty výrobcem. Ty mohou být aktualizovány v rámci distribuce nových verzí aplikace.

    Zkratky používané při generování klíče pro jednotlivé typy entit:

-	***A*** – Aktivum (obecného typu) 
-	***AGR*** – Smlouva
-	***AUDN*** – Neshoda auditu
-	***AUDR*** – Doporučení auditu
-	***DATA*** – Data
-	***E*** – Hodnocení (Evaluation)
-	***F*** – Složka
-	***FP*** – Funkční místo / Pracovní pozice
-	***HW*** – Hardware
-	***I*** – Incident
-	***INF*** – Informace
-	***KNW*** – Znalost
-	***LOC*** – Lokalita
-	***M*** – Model
-	***O*** – Cíl (Objective)
-	***OU*** – Organizační jednotka
-	***PER*** – Pracovník
-	***PROD*** – Produkt
-	***PROC*** – Aktivum typu Proces
-	***PROJ*** – Aktivum typu Projekt
-	***R*** – Riziko
-	***REQ*** – Požadavek (Requirement)
-	***REQD*** – Odvozený požadavek (Derived Requirement)
-	***ROLE*** – Role
-	***SW*** – Software
-	***SR*** – Servisní požadavek
-	***T*** – Hrozba (Threat)
-	***TA*** – Hmotný majetek (Tangible asset)
-	***TASK*** – Úkol
-	***TPR*** – Plán zvládání rizik
-	***V*** – Zranitelnost (Vulnerability)
-	***VEN*** – Dodavatel
-	***WGT*** – Pracovní skupina a tým
- **Nástrojová lišta** – horní vodorovný panel s informačními a ovládacími prvky.
- **Panel** – levý svislý panel s menu pro přístup k jednotlivým sekcím.
- **Sekce** – modul aplikace Zoty dostupný z panelu nebo nástrojové lišty.
- **Podsekce** – části modulů aplikace Zoty dostupné po výběru některých sekcí z panelu nebo nástrojové lišty.
- **Seznam** – způsob zobrazení záznamů v řádkové režimu, které lze třídit, filtrovat či vyhledávat.
- **Strom** – způsob zobrazení záznamů entit v režimu stromové struktury složek, které se mohou strukturovat do dalších podřízených složek. Pro každou složku lze nastavit různé úrovně oprávnění přístupu. Více k tomuto nastavení v kapitole Omezení přístupu na složky a záznamy. 
- **Detail** – způsob zobrazení jednoho vybraného záznamu v režimu okna, které je v horním vodorovném pruhu opatřeno záložkami ***Přehled*** atributů, **Aktivity** uživatelů, ***Propojení*** na jiné entity, Hodnocení (zobrazuje se pouze pro typy entity, které lze hodnotit) s možností vytvořit nové nebo zobrazit stávající hodnocení, ***Skupiny***, do kterých je záznam zařazen a ***Schválení*** (zobrazuje se pouze pro typy entity, které se mohou schvalovat) s možností neschválené entity schválit nebo u již schválených entit zobrazit detaily schvalovacího workflow a nakonec záložka ***Oprávnění*** s přehledem uživatelů a/nebo rolí a úrovně oprávnění jejich přístupu k tomuto záznamu. Pro entity typu Hodnocení se zobrazuje navíc záložka ***Opatření***.
- **Rychlá záložka** – uživatel si může připínat pomocí ikony připínáčku libovolné záznamy z jejich detailu nebo i z výsledků vyhledávání do záložek, které jsou pak zobrazeny ve spodní části pracovní plochy. Připnuté záznamy jsou tak velmi rychle dostupné a lze se mezi nimi snadno přepínat na jedno kliknutí, bez ohledu na to, ve které sekci Zoty se uživatel právě nachází.
- **Registr** – výrobcem předdefinovaná struktura složek (např. Majetek, Informace, Procesy atp.), kde lze ukládat a spravovat entity daného typu (např. Aktiva).
- **Katalog** – uživatelsky definovatelná struktura složek, kde lze, v rámci příslušného registru, zobrazovat entity uložené v tomto registru. V katalozích jsou pak pouze odkazy (zástupci / výskytové kopie) na definiční originály entit uložených v registru.
- **Metoda** – Metoda je, zjednodušeně, systémový filtr. Tzn., že u těch typů entit, kterým lze přiřadit metodu, lze skrýt nebo zobrazit záznamy, podle toho, zda a k jaké metodě jsou přiřazeny; případně lze zobrazit/skrýt určité specifické atributy entity závislé pouze na konkrétní metodě. Základní koncept a účel metod je detailněji popsán v kapitole Metody.
- **Tooltip** – nápověda, která se uživateli zobrazí, když umístí kurzor myši na specifický objekt, například ikonu nebo odkaz. V Zoty se používá i všude tam, kde by nebylo praktické zobrazovat dlouhé řetězce znaků. Typicky dlouhé názvy, kdy se namísto toho zobrazuje kratší identifikátor, např. klíč nebo pouze zkrácený název a celý název se zobrazí až v tooltipu.

## 3	UŽIVATELSKÉ PROSTŘEDÍ {#myUserExp}
### 3.1	Ovládací panel a nástrojová lišta
Menu v levém svislém panelu umožňuje přístup k jednotlivým funkcionalitám Zoty, členěných do sekcí, stejně jako i k různým typům entit, členěných do kategorií. Panel lze jednoduše zúžit či rozšířit kliknutím na ovládací prvek vlevo nahoře a zvětšit tak hlavní pracovní plochu vpravo vedle panelu.
Horní nástrojová lišta pak zobrazuje sekce:
-	Zoty (informace o aplikaci)
-	Kalendář
-	Schválení
-	Globální vyhledávání
-	Nastavení globálního filtru
-	Nastavení globálních metod
-	Notifikace
-	Profil uživatele s jeho aktivitami, nastavením a možností odhlášení

### 3.2	Vyhledávání
V rámci příslušné sekce, např. Aktiva, Rizika atp. lze vyhledávat podle názvu nebo klíče entity zadáním části vyhledávaného řetězce do pole pro vyhledávání vedle symbolu lupy.

![Vyhledávání v sekci](/img/placeholder/3_vyhledavani.png)
Vyhledávat lze též globálně napříč celým systémem dle názvu nebo klíče entity s využitím symbolu lupy v horní nástrojové liště.

:::tip
Ikona špendlíku, která se zobrazuje vedle každého vyhledaného záznamu, umožní kterýkoliv "připnout" do samostatné záložky. Ty jsou pak ve spodní části pracovní plochy kdykoliv připraveny na jedno kliknutí zobrazit detail tohoto záznamu.
:::

![Vyhledávání globálně s připínáním výsledků do rychlých záložek](/img/placeholder/3_vyhledavani_globalni-vcetne-pripinani.png)

Vyhledávat lze fulltextově i v seznamech záznamů, které se nabízí při zadávání hodnot těch atributů, jež podporují takovýto způsob zadání výběrem ze seznamu.
Je-li zadávanou hodnotou atributu jiná entita, lze v seznamu entit pro výběr vyhledávat podle názvu nebo klíče entity.
Je-li zadávanou hodnotou atributu uživatel, lze v seznamu entit pro výběr uživatele vyhledávat podle jména nebo příjmení nebo role přiřazené uživateli.
### 3.3	Filtry
V seznamech lze rychle filtrovat záznamy volbou z dostupných, výrobcem předdefinovaných filtrů.

![Filtry](/img/placeholder/3_filtry.png)

Nebo lze také zvolit uživatelsky definovatelný filtr a nastavit jej dle vlastních preferencí.
Uživatelské filtry nabízejí možnost definovat filtrační podmínky dle obsahu různých atributů či vlastností, seskupených do filtračních kategorií. Pokud uživatel volí filtrační podmínky z atributů či vlastností v rámci jedné takovéto kategorie, aplikuje se mezi nimi podmínka ***NEBO*** (*OR*). Zatímco pokud je kombinuje v rámci různých kategorií, aplikuje se podmínka ***A*** (*AND*).

Příklad na obrázku níže demonstruje definici filtru pro vyhledání všech textových fragmentů (paragrafů, odstavců, písmen...) nějakého zákona (normy, směrnice, smlouvy atp.) mají garanta Martinu ***NEBO*** Adama ***NEBO*** jsou označeny jako auditní (daný fragment reprezentuje požadavek, který má být ověřován v rámci auditu, zda je s ním organizace ve shodě) ***A*** mají připojen alespoň jeden komentář.

<!--- <img src="/img/placeholder/3_filtr_kombinace_filtracnich_kategorii.png"  title="Filter kombinace" width="75%" /> -->

### 3.4	Komentáře
V celém systému je podporována týmová spolupráce díky rychlé a snadné interakci uživatelů pomocí sdílených komentářů. Pokud je uživatel jakýmkoliv jiným uživatelem zmíněn v komentáři, je na to upozorněn ikonou notifikací vpravo nahoře v nástrojové liště.
V komentáři lze zmínit jiného uživatele zadáním symbolu zavináče ***@***. Systém následně umožní vyhledání a výběr ze stávajících uživatelů Zoty. Všem takto zmíněným uživatelům dorazí notifikace, že byli zmíněni v tomto komentáři. Jednoduchým kliknutím na komentář si jej pak mohou ihned snadno zobrazit a případně na něj i rovnou reagovat.    
Podobným způsobem lze v komentářích zmínit také odkazy na libovolné entity v systému s pomocí znaku ***#***.    
Komentáře lze skrýt a zobrazit je pouze pro vybrané uživatele či role. Standardně jsou komentáře publikovány se statusem „Veřejné“. Pokud je před odesláním status komentáře změněn na „Soukromé“, zobrazí se nabídka Oprávnění, kde lze zadat role, konkrétní uživatele či kombinaci obojího, pro které bude komentář viditelný.

![Komentáře - oprávnění](/img/placeholder/3_komentare_opravneni.png)

Soukromé komentáře indikuje speciální ikona oprávnění
![Oprávnění pro komentáře](/img/placeholder/3_ikona_opravneni-komentare.png)
Po najetí myší nad tuto ikonu se zobrazí seznam s názvy rolí či jmen uživatelů, kteří mají oprávnění ke zobrazení tohoto komentáře.

![Komentáře – indikace nastavené restrikce](/img/placeholder/3_komentare_opravneni-indikace.png)
### 3.5	Propojení
K entitám lze připojovat soubory, štítky, metody, organizace, ale i jiné entity a zachytit tak vzájemné souvislosti.
Propojení entit mezi sebou navzájem lze zobrazit na záložce ***Propojení*** v detailu každé entity, kde lze také vytvářet nová propojení pomocí tlačítka ***Vytvořit***.
![Propojení – Seznam a vytvoření](/img/placeholder/3_propojeni-seznam.png)
Propojení jsou zobrazena nejen seznamem propojených entit, ale i graficky pomocí diagramu.

![Propojení - diagram](/img/placeholder/3_propojeni-diagram_vizualizace-odstranene-entity.png)

Pokud je nějaká entita z registru odstraněna (je přesunuta do koše), v diagramu je vizualizována červeně. Z diagramu automaticky zmizí až po vysypání koše.

V Zoty lze propojovat entity vazbami různého typu. Přičemž některé typy propojení jsou systémové (systém je vytváří automaticky bez zásahu uživatele) a některé jsou uživatelsky volitelné. Pokud je vazba směrově orientovaná, tzn., že směřuje od zdroje k cíli, tak pak je zde též informace, jaký zdroj, s jakým cílem mohou být propojeny. Neboli určuje směr propojení. 
Systémová propojení jsou typu: *Stromová struktura, Výskyt, Zástupce, Rodič→Dítě*.
Účel a použití jednotlivých typů systémových propojení:
- ***Stromová struktura*** je často používaný typ směrově orientovaného propojení mezi složkami či entitami, kde je třeba modelovat hierarchickou strukturu vazeb, kdy jedna složka či entita vystupuje v roli nadřazené a ve stromové struktuře se pak pod ní zobrazují ostatní, jí podřazené složky/entity.
- ***Výskyt*** je využíván v modulu Zoty Designer při vizualizaci propojení entit tvořící procesní modely importované z procesního nástroje ARIS.
- ***Zástupce*** je odkaz v katalogu na entitu uloženou v registru.
- ***Rodič→Dítě*** může být propojení jak systémové, tak uživatelské, viz popis níže.

Uživatel pak ještě může při propojení entit volit výběrem z propojení typu: *Vztah, Podporuje, Blokuje, Závislost, Zahrnuje, Nezahrnuje, Rodič→Dítě*.
Účel a použití jednotlivých typů propojení:
- ***Vztah*** je univerzální typ propojení, který lze použít mezi libovolnými typy entit, které mohou existovat zcela nezávisle na sobě a není třeba modelovat směr propojení mezi nimi.
- ***Podporuje*** je typ směrově orientovaného propojení, pomocí kterého lze vyjádřit, že jedna entita souvisí s jinou a to způsobem, že jedna z nich (zdroj) podporuje entitu/entity další (cíl). Tímto typem propojení se vytvoří vazba směřující od zdroje k cíli. Tento typ propojení má navíc specifickou vlastnost, která umožňuje pomocí atributu „Váha“ (udává se v procentech v rozsahu 10-100 %) určit míru podpory mezi entitami či důležitost entity podpůrné pro entitu podporovanou.    
Příkladem je propojení primárních a podpůrných aktiv.
- ***Blokuje*** je typ směrově orientovaného propojení, pomocí kterého lze vyjádřit, že jedna entita blokuje entitu jinou, tzn. že by nemělo dojít ke změně stavu blokované entity, aniž by předtím došlo ke změně stavu entity, která ji blokuje.    
Příkladem je propojení dvou entit typu Úkol, kdy úkol č.2 nelze dokončit nebo na něm začít pracovat dříve, než je dokončen úkol č. 1.
- ***Závislost*** je jednosměrná vazba vyjadřující obecnou závislost jedné entity na druhé; tento typ vazby je podobný typu vazby *Blokuje*, na rozdíl od něj ale nijak neurčuje způsob, jakým jedna entita na jiné závisí (tj. neříká, že je např. „blocker“), není tedy tak striktní. Tento typ propojení má navíc specifickou vlastnost, která umožňuje pomocí atributu „*Váha*“ (udává se v procentech v rozsahu 10-100 %) určit míru závislosti jedné entity na druhé.
-	***Zahrnuje*** je jednosměrné vazba, pomocí které jedna entita agreguje jiné entity.
- ***Nezahrnuje*** je specifický způsob propojení pomocí jednosměrné vazby, kdy jedna entita vylučuje propojení s jinou entitou/entitami; to jsou případy, kdy je třeba např. dokumentovat výjimku z propojení a nelze to tedy provést tak, že se entity jednoduše pouze nepropojí.
- ***Rodič→Dítě*** je jednosměrné propojení od jedné entity – rodiče, na jinou entitu – dítě. Propojuje entity, kde jedna z nich nemůže existovat nezávisle na jiné, tzn. dítě (např. hodnocení) nemůže existovat bez rodiče (zde např. aktivum, riziko atp.). Tento typ propojení může být též vytvářen zcela automaticky systémem. Například je-li vytvářeno hodnocení nějaké entity. Pak tato entita vystupuje v roli „rodiče“ a připojené hodnocení v roli „dítěte“. Vše se realizuje na pozadí, bez zásahu uživatele.    
Propojení entit pomocí vazby typu *Rodič -> Dítě* je také nezbytné, má-li jedna hodnocená entita (dítě) přebírat výsledné skóre hodnocení jiné entity (rodiče) a zahrnout ji do výpočtu svého skóre hodnocení dle nastaveného schématu.

### 3.6	Aktivity
Zoty automaticky zaznamenává aktivity uživatelů v systému. *Aktivity* zobrazují přehled informací zejména o tom, jaké entity, kdy a jakým uživatelem byly nově přidány, změněny či smazány, jaké soubory byly k jaké entitě připojeny či odebrány, nebo jaké entity byly vzájemně propojeny vazbou. Do seznamu aktivit se zapisují i aktualizace obsahu atributů.    
*Aktivity* se zobrazují jednak v přehledu na úvodní stránce, kde se zobrazuje seznam posledních aktivit a pak také v detailu u každého typu entity pouze ty vybrané aktivity, kterého se dané entity týkají. Uživatel, který nemá přiřazenu roli *Administrátor* nebo *Manažer entit*, vidí pouze aktivity informující o entitách, kde je tento uživatel přiřazen jako Správce.

![Aktivity](/img/placeholder/3_aktivity.png)
### 3.7	Oprávnění
Pro každou složku i entitu lze nastavit různé úrovně oprávnění přístupu.
> Zoty zde umožňuje aplikovat princip dědičnosti. Oprávnění lze definovat pro vybranou složku pouze jednou a automaticky je pak dědit do všech podřízených složek a entit v nich zatříděných.

Ve výchozím nastavení jsou složky či záznamy v nich uložené viditelné všem uživatelům. To je zajištěno pomocí atributu ***Přístup***, který je při vytváření všech nových složek či entit automaticky přednastaven na hodnotu Veřejný.    
Pro omezení přístupu k vybraným složkám či záznamům je třeba atribut ***Přístup*** přepnout do stavu *Omezený* nebo *Soukromý* v nastavení oprávnění na detailu příslušné entity či složky.

![Omezení přístupu k záznamu](/img/placeholder/3_pristup-na-slozku.png)

Takto nastavená restrikce pak omezí přístup pouze pro vybrané uživatele nebo role dle definovaných úrovní oprávnění, jak je popsáno níže. Nebo složku či záznam zcela skryje, takže ji ostatní uživatelé bez nastaveného oprávnění vůbec nevidí (soukromý přístup).

![Omezený přístupu – info pro uživatele](/img/placeholder/3_omezeny-pristup-info-pro-uzivatele.png)

Pro složky, záznamy všech typů entit a pro povolení pořizovat k nim komentáře (viz kap. Komentáře), lze nastavit různé úrovně oprávnění přístupu – *Číst, Vytvořit, Upravit, Odstranit, Komentář*. Oprávnění lze definovat pro vybrané role nebo konkrétní uživatele nebo kombinací obojího.    
Pokud je nastaven přístup na *Omezený* nebo *Soukromý* a nejsou definována žádná oprávnění pro role nebo uživatele, tak budou mít k takovýmto složkám nebo entitám přístup pouze uživatelé s rolí administrátora.    
Na obrázcích níže je příklad nastavení oprávnění přístupu na konkrétní složku.

![Oprávnění](/img/placeholder/3_opravneni-na-slozku.png)

Oprávnění definovaná na úrovni složky lze volitelně dědit i na všechny v ní umístěné entity či podřízené složky. K tomu slouží volba *Aplikovat oprávnění na podřízené uzly*. 

![Nastavení oprávnění](/img/placeholder/3_opravneni-na-slozku-nastaveni.png)

Podřízenými uzly konkrétní složky se tedy rozumí všechny ty složky nebo entity, které jsou jí ve stromové struktuře podřízené. A to až do nejnižší úrovně zanoření, má-li tato konkrétní složka víceúrovňovou strukturu dalších podřízených složek, případně i spolu s entitami v nich zatříděnými.
Pokud už složka či entita měla nastavena nějaká oprávnění, tak jsou nahrazena zděděnými.
Platí i obráceně, že pokud jsou definována jakákoliv oprávnění, jedno pro které uživatele či role, přímo na úrovni složky či entity, které už ale mají oprávnění děděná, tak jsou všechna tato zděděná oprávnění odstraněna a nahrazena nově definovanými. V případě potřeby se lze velmi snadno vrátit do předchozího stavu před výmazem děděných oprávnění – aktivace volby *Zdědit přístup* na záložce *Oprávnění* v detailu složky či entity znovu zdědí oprávnění z nadřízeného uzlu. Tato volba je dostupná pouze pokud 
- kdekoliv v nadřízeném uzlu je nastaveno omezení, které se dědí do podřízených uzlů a
- oprávnění nejsou děděna, tzn. aktuálně jsou definována přímo na dané složce nebo entitě nebo nejsou zatím vůbec definována.

![Oprávnění – zdědit přístup](/img/placeholder/3_opravneni-zdedit-pristup.png)

A opět platí – všechna stávající oprávnění jsou touto akcí odstraněna a nahrazena těmi, které se zdědí z nadřízeného uzlu.

:::info
Pokud je v rámci nastavení oprávnění v atributu "Přístup" dostupná volba "Zdědit přístup", není zde dostupná volba "Veřejný". Tyto dvě volby se totiž vzájemně vylučují.
Pokud je na složce nastavena dědičnost, tak se uplatní nejen na stávající podřízené složky, ale automaticky i na všechny ty, které budou v budoucnu teprve vytvořené.
:::

#### 3.7.1	Oprávnění z pohledu uživatele
Pokud je pro přihlášeného uživatele složka či entita viditelná, ale má nastaveno jakékoliv omezení v nastavení oprávnění pro některou z jeho rolí či přímo pro něj, tak se mu v detailu příslušné složky či entity zobrazí ikona "**!**" s varováním, že oprávnění k této složce nebo entitě jsou omezena. Po najetí myší nad tuto ikonu se zobrazí tooltip s informací, jaká konkrétní omezení jsou zde pro něj nastavena a pokud jsou zděděna z nadřízeného uzlu, tak je zobrazen i název složky reprezentující nadřízený uzel, odkud se tato oprávnění dědí.

![Informace k omezení oprávnění přihlášeného uživatele](/img/placeholder/3_opravneni-prihlaseneho-uzivatele-info-k-omezeni.png)
##### 3.7.2	Oprávnění z pohledu administrátora
Pro každou entitu nebo složku lze na záložce *Oprávnění* zobrazit seznam uživatelů a rolí s přehledem všech úrovní jim přidělených oprávnění včetně informace, zda jsou tato oprávnění děděna i na podřízené uzly neboli zda dědičnost na podřízené uzly je aktivní či neaktivní.

![Přehled přidělených oprávnění](/img/placeholder/3_opravneni-na-slozku-prehled-a-editace.png)

Pokud jsou oprávnění k přístupu na složku či entitu zděděna z nadřízeného uzlu, tak ikona, která zobrazuje menu pro editaci či odstranění oprávnění, není dostupná, neboť správa těchto oprávnění je realizována na úrovni nadřízeného uzlu odkud jsou zděděna. Informace, který konkrétní nadřízený uzel je rodičem, odkud se oprávnění dědí a kde je tedy lze případně editovat či odstranit, je dostupná přes info ikonu "Zdroj oprávnění".

![Přehled přidělených oprávnění](/img/placeholder/3_opravneni-na-slozku-info-o-dedicnosti.png)

Vzhledem k tomu, že lze definovat (nebo dědit) různé úrovně oprávnění zcela nezávisle pro uživatele a pro role, může nastat situace, kdy uživatel bude mít přiřazeny role, jejichž úroveň oprávnění pro některou složku či entitu bude v konfliktu s úrovní oprávnění, která jsou definována (nebo děděna) přímo pro tohoto konkrétního uživatele. Konflikt spočívá v tom, že uživatel může mít nějaké oprávnění povoleno, ale jemu přidělená role bude mít tu stejnou úroveň oprávnění (např. odstranění složky/entity) zakázanou.
Zoty tento konflikt řeší tak, že pokud tento případ nastane, tak oprávnění se sečtou a přednost dostane ta úroveň oprávnění, která povoluje (zelená) před tou, která zakazuje (červená).

:::note
Uživatel Martina má přiřazenou roli *Manažer entit*. Tato **role** má v registru aktiv pro složku *Informace, data a znalosti* nastaveno oprávnění, které jí **zakazuje** tuto složku a entity v ní obsažené odstranit. Zároveň má ale Martina jako **uživatel** pro tu stejnou složku, tj. *Informace, data a znalosti*, nastaveno oprávnění, které jí naopak **povoluje** tuto složku a entity v ní obsažené odstranit. Tento konflikt Zoty vyřeší tak, že v tomto příkladu bude mít Martina oprávnění tuto složku a entity v ní obsažené odstranit. Nebo-li zelená úroveň oprávnění zvítězí nad červenou.
:::


![Konflikt oprávnění uživatele a jeho role](/img/placeholder/3_opravneni_konflikt_stejna-pro-uzivatele-i-roli.png)
##### 3.7.3	Rozšířená správa oprávnění pro velké organizace
Pro větší organizace s rozsáhlejší organizační strukturou poskytuje Zoty rozšířené schopnosti řízení přístupu k datům i podle jejich příslušnosti k podřízeným subjektům / organizačním jednotkám. Systém je postaven na jednoduchém označení dat, která patří vybranému subjektu/subjektům pomocí specifického typu systémového štítku – *Organizace*. Ten lze v registrech připojit k libovolné složce či entitě a omezit pak jejich viditelnost jen pro ty uživatele, kteří patří do příslušné organizace či organizační jednotky (více v kapitole Organizace).    
Typické použití v komerčním sektoru je pro ty organizace, které v rámci holdingu/skupiny sdružují více společností, jejichž data mají být oddělena. Tzn., že uživatelé pracující pro jednu konkrétní společnost pak nevidí data (složky a entity v registrech) ostatních společností skupiny.
Přesto, že z pohledu běžného uživatele se jeví data jako oddělená, ve skutečnosti jsou stále součástí jedné společné databáze. Výhodou je, že pak někteří uživatelé s příslušným vyšším oprávněním mohou dostávat i konsolidované pohledy na data napříč všemi společnostmi skupiny.
Analogicky podobně lze tuto schopnost využít např. i ve státní a veřejné správě pro více organizačních složek podřízených jednomu státnímu či veřejnému subjektu.
:::info
Tato schopnost omezení přístupu na vybraná data v žádném případě nenahrazuje či neduplikuje systém správy přístupových oprávnění, jak jsou dále popsána v kapitole Oprávnění. Pouze jej doplňuje a rozšiřuje o schopnost jednoduché správy přístupu k datům i pro větší organizace s velmi komplexní organizační strukturou, kde by správa přístupů s pomocí standardních funkcionalit pro řízení oprávnění pouze na úrovni uživatelů/uživatelských skupin/rolí, mohla být dosti složitá a pracná.
:::
## 3.8	Kalendář
V kalendáři lze zobrazit pro zvolený měsíc všechny záznamy filtrované dle data, kdy byly vytvořeny nebo aktualizovány nebo nastavit přihlášenému uživateli zobrazení všech jeho záznamů, u kterých je správcem. V kalendáři se takto zobrazují záznamy entit typu: *Incidenty, Požadavky, Cíle, Aktiva, Projekty, Procesy, Úkoly, Hrozby, Zranitelnosti, Rizika, Hodnocení*.

![Kalendář](/img/placeholder/3_kalendar.png)

### 3.9	Schválení
V této sekci se zobrazuje seznam entit, které musí nejprve projít procesem schválení. Typy nově vytvářených entit, které prochází schvalovacím workflow, jsou rizika a aktiva.
V nástrojové liště se zobrazuje ikona, která upozorňuje na počet záznamů čekajících na schválení.
![Notifikace – entity ke schválení](/img/placeholder/3_schvaleni_notifikace.png)
Po kliknutí na notifikační ikonu se zobrazí výpis záznamů všech entit čekajících na schválení. Ty lze schvalovat, a to buď jednotlivě nebo hromadně.

![Schválení](/img/placeholder/3_schvaleni_jednotlive.png)

Možnost hromadného schválení, stejně jako možnost hromadného přiřazení schvalovatele, se zobrazí ve spodním modrém pruhu poté, co uživatel vybere záznamy ze seznamu kliknutím do zaškrtávacího pole v prvním sloupci seznamu.

![Schválení - hromadné](/img/placeholder/3_schvaleni_hromadne.png)

Hromadně lze schválit entity tak, jak jsou, tedy beze změn. Chce-li schvalovatel provést v rámci schvalovacího workflow libovolné úpravy schvalovaných entit, musí je schválit jednotlivě, každou samostatně. Pak může navrhovat libovolné úpravy, jak je patrné v příkladu na obrázku níže.

![Schválení – Návrh úprav](/img/placeholder/3_schvaleni_jednotlive_navrh-uprav.png)

Případné úpravy či doplnění chybějících informací ve schvalované entitě, se v posledním kroku schvalovacího workflow mohou potvrdit a schválit volbou stavu *Schválit + Aplikovat změny*. Nebo může být stav schválení zvolen *Schválit beze změny*, *Vrátit* či *Zamítnout*. Zároveň může schvalovatel k tomuto schvalovacím workflow připojit svůj komentář.

![Schválení – Návrh úprav](/img/placeholder/3_schvaleni_jednotlive_potvrzeni-zmen.png)

Kliknutím na tlačítko ***Potvrdit*** je schvalovací workflow dokončeno a příslušná entita schválena nebo vrácena žadateli (např. k doplnění některých informací potřebných k úspěšnému schválení) nebo je schválení zamítnuto.

![Schválení – Návrh úprav](/img/placeholder/3_schvaleni_jednotlive_potvrzeni-zmen-approved.png)

Průběh každého workflow je dokumentován a uložen. Lze se k němu kdykoliv snadno vrátit a zobrazit kdy a jaké změny byly provedeny, kdo byl za schválení odpovědný, kdo jej vyžádal nebo jaká komunikace formou komentářů zde probíhala.
K tomu slouží tyto ikony:
![Schválení – dokumentace aktivit](/img/placeholder/3_schvaleni_piktogramy_aktivity-a-comment.png)

Celý průběh schvalovacího workflow je patrný z workflow diagramu na následujícím obrázku. Ukazuje kdy a jak se mění jednotlivé stavy workflow při vytváření nových entit typu Riziko nebo Aktivum, spolu se změnou stavů samotné schvalované entity, včetně zapojení uživatelských rolí, které mají oprávnění příslušné činnosti provádět.

![Schvalovací workflow - diagram](/img/placeholder/3_schvalovaci-workflow-diagram.png)
### 3.10	Notifikace
Systémová služba Notifikace informuje uživatele o všech aktivitách, které s ním mohou mít souvislost. Jedná se o aktivity, kdy je uživatel
Systémová služba ***Notifikace*** informuje uživatele o všech aktivitách, které s ním mohou mít souvislost. Jedná se o aktivity, kdy je uživatel
-	přiřazen k entitě jako její *Správce*;
-	správcem entity, která byla upravena, smazána nebo propojena vazbou s jinou entitou;
-	správcem entity, která byla zmíněna v komentáři;
-	zmíněn jiným uživatelem v komentáři;
-	v režimu prohlížení detailu záznamu, který jiný uživatel upravuje.    

Při prvním přihlášení uživatele se mu zobrazí výzva k uložení nastavení notifikací.
![Výzva k nastavení notifikací](/img/placeholder/3_notifikace_vyzva k nastaveni.png)
Tato výzva se bude zobrazovat i při každém dalším přihlášení, dokud uživatel nepotvrdí pomocí tlačítka ***Uložit*** své nastavení notifikací, tj. zda je chce či nechce zasílat.    
Notifikace jsou přednastaveny v konfiguraci „vypnuté notifikace“.
![Výzva k nastavení notifikací](/img/placeholder/3_notifikace-vypnuto.png)
Pokud tedy uživatel potvrdí výzvu k nastavení notifikací, v následujím kroku notifikace nezapne a pouze potvrdí tlačítko ***Uložit***, tak mu notifikace nebudou zasílány.    
Uživatel si může později toto nastavení změnit – notifikace lze kdykoliv vypnout, zapnout či změnit jejich nastavení dle aktuálních preferencí uživatele.
V nastavení lze konfigurovat, jaké typy notifikací se mají odesílat a zda má být notifikace odeslána okamžitě nebo v souhrnném e-mail reportu jehož četnost (denně nebo týdně) a čas odeslání si může uživatel nastavit.

![Notifikace - nastavení](/img/placeholder/3_notifikace-nastaveni.png)

Dostupný výčet typů notifikací lze rozšířit formou zakázkové úpravy na základě požadavku uživatele.
V nástrojové liště se vpravo zobrazuje ikona notifikací, informující o počtu nových notifikací, které jsou připraveny ve výpisu pro přihlášeného uživatele.
![Notifikační ikona](/img/placeholder/3_notifikace-ikona.png)
Po kliknutí na notifikační ikonu se zobrazí výpis s rychlým náhledem posledních deseti událostí, které mají souvislost s přihlášeným uživatelem (entita, kde je přihlášený uživatel zmíněn nebo je jejím správcem, byla založena, upravena, smazána nebo propojena vazbou s jinou entitou). 
Tlačítko ***Zobrazit vše***, na konci tohoto seznamu, zobrazí kompletní výpis všech notifikací uživatele seskupených po jednotlivých dnech, včetně časové známky zaznamenané systémem pro každou notifikovanou událost.

![Notifikace - výpis](/img/placeholder/3_notifikace-vypis.png)

Pokud dojde ke ztrátě spojení se Zoty serverem, ať už v důsledku výpadku síťového nebo internetového připojení, dlouhodobé nečinnosti v aplikaci, či z jiných příčin, systémová notifikační služba bude odpojena a veškeré notifikace budou pozastaveny.
V takovém případě Zoty zobrazí informaci, že připojení k notifikační službě bylo odpojeno a pokusí se o opětovné připojení za 20 sec.
![Notifikace – výpadek služby](/img/placeholder/3_notifikace-sluzba_odpojeno_reconnect-1.png)
V případě úspěchu zobrazí informaci, že připojení ke službě bylo opět navázáno.
![Notifikace – obnovení služby](/img/placeholder/3_notifikace-sluzba_obnoveno.png)
V případě neúspěchu zopakuje za 30 sec. ještě jednou pokus o připojení.
![Notifikace – opakované připojení](/img/placeholder/3_notifikace-sluzba_reconnect-2.png)
Pokud ani druhý pokus nebyl úspěšný, informuje uživatele.
![Notifikace – pozastavení služby](/img/placeholder/3_notifikace-sluzba_failed.png)
V takovém případě není služba notifikací funkční a je třeba kontaktovat vašeho správce IT. Až v případě, kdy se prověří, že chyba není způsobena výpadkem síťového nebo internetového připojení či jinou chybou ICT indrastruktury, obracejte se na Zoty Helpdesk nebo využijte hotline linku Zoty podpory.
### 3.11	Profil uživatele a odhlášení
V pravé části horní nástrojové lišty se zobrazuje jméno přihlášeného uživatele, pod kterým lze vyvolat nabídku:
-	Aktivity
-	Můj profil
-	Mé nastavení
-	Odhlásit se

#### 3.11.1	Aktivity
Aktivity zobrazí všechny uživatelem provedené aktivity v Zoty, které se týkají zejména vytváření, úprav či odstranění složek, entit či jejich atributů, připojování komentářů, štítků, dokumentů k entitám, přiřazování správců entit, apod.

#### 3.11.2	Můj profil
V této sekci lze zobrazit a editovat přihlašovací a identifikační údaje přihlášeného uživatele. Tyto údaje má možnost měnit pouze přihlášený uživatel nebo administrátor aplikace s příslušným oprávněním.

#### 3.11.3	Mé nastavení
V této sekci si může uživatel přizpůsobit Zoty dle svých preferencí pomocí voleb dostupných na záložkách Obecné a Email notifikace (viz kap. Notifikace)
V této sekci si může uživatel přizpůsobit Zoty dle svých preferencí pomocí voleb dostupných na záložkách **Obecné** a **Email notifikace** (viz kap. Notifikace)    
Na záložce **Obecné** může volit **jazyk aplikace** a nezávisle na jazyku aplikace také **jazyk obsahu**, tj. v jakém jazyce mají být prezentována data. S tím, že pokud data nemají překlad v daném jazyce, zobrazí se alternativně v primárním jazyce, který je nastaven v administraci systému Zoty.    
Volba **Barvy grafů** umožňuje výběrem z řady různých sad barevných palet nastavit, jaká barevnost má být použita v grafech a dashboardech při vizualizaci dat.    
Volba **Velikost UI** optimalizuje celé pracovní prostředí Zoty aplikace zejména s ohledem na velikost a zozlišení displeje zařízení, na kterém uživatel provozuje aplikaci Zoty. Zvětšením či zmenšením lze zvolit optimální kompromis mezi velikostí zobrazovaných informací a množstvím dat, která budou zobrazena bez nutnosti rolovat vertikálním či horizontálním posuvníkem.

Zde se může aktuálně přihlášený uživatel odhlásit a tím uvolnit licenci k použití pro další uživatele.
#### 3.12	Zoty – O aplikaci
:::info
Zde je důležité zejména číslo verze, které je třeba uvádět při každém ohlášení požadavku, dotazu či chyby prostřednictvím aplikace Zoty Helpdesk (https://zoty.support) nebo pomocí telefonní hotline linky 607 007 700.
:::
#### 3.13	Složky
Jednotlivé typy entit (např. aktiva, rizika, hrozby, zranitelnosti, aj.) lze třídit do složek a ty dále strukturovat na podsložky podobně, jako např. v Průzkumníku Windows. 
Každá množina záznamů entit určitého typu může mít svoji vlastní strukturu složek a podsložek. Např. záznamy entit typu *Aktiva* mohou být strukturovány zcela odlišně než *Hrozby* či *Rizika*.     
Dokonce i záznamy entit jednoho typu, např. *Aktiva*, lze uspořádat do složek více různými způsoby v rámci tzv. katalogů. Na jedna a ta samá data je pak možné dívat se různými pohledy, aby tak bylo možné podpořit různé metodiky (např. kategorizace aktiv a práce s nimi může být jiná dle kybernetického zákona, jiná dle ISO 27001, atp.). Strukturace složek na více možných způsobů se dá také s výhodou využít i při sestavování různých reportů a vizualizacích dat, kde lze pak sumarizovat stejná data dle různých skupin či kategorií, reprezentovaných právě složkami.    
Aby tento přístup nevedl k duplicitám, kdy jedna konkrétní entita se vyskytuje ve více různých složkách v rámci různých katalogů, existuje jedna specifická systémová definice struktury složek definovaná pro každý typ entity, tzv. ***Registr***. V registru má každý výskyt entity daného typu jedinečnou definici, která se pak může vyskytovat, formou odkazu na ni, v dalších, uživatelsky definovatelných pohledech, které se nazývají ***Katalogy***.    
Pojmy ***Registr*** a ***Katalog*** jsou blíže vysvětleny v kapitole Základní používaná terminologie.

3.13.1	Správa složek a entit
Ve stromové struktuře složek zobrazené v levém okně se po výběru složky či entity zobrazí její detail, který má v pravém horním rohu ikonu se symbolem tří teček s nabídkou základních operací, které lze se složkou či entitou provádět:
-	Upravit
-	Duplikovat
-	Archivovat
-	Přesunout
-	Odstranit
-	Exportovat

Tyto operace (vyjma exportu) nejsou dostupné pro uživatele, kteří mají přidělené systémové role s nižšími oprávněními, tj. role *Uživatel*, *Auditor* nebo *Moderátor* nebo pokud je entita uzamčena. Entita má totiž ještě, na rozdíl od složky, tuto nabídku základních operací rozšířenou o možnost uzamčení. Uzamčená entita je pak v horním pravém rohu detailu entity vizualizována ikonou zámku. Uzamknout či odemknout entitu mohou pouze uživatelé, kteří mají přidělené systémové role s vyššími oprávněními, tj. role *Manažer entit* nebo *Administrátor*.

#### 3.13.1.1	Přesouvání
Samotné entity, ale i celé složky, do kterých jsou entity zatříděny, lze ve stromové struktuře přesouvat. Ve stromové struktuře složek zobrazené v levém okně se vybere složka. Její obsah, který je třeba přesunout jinam, se zobrazí v pravém okně. Zde se v seznamu vyhledá záznam (ať už je to jiná složka nebo záznam entity např. typu Aktivum) a u něj lze přes ikonu se symbolem tří teček zobrazit menu s nabídkou ***Přesunout***. Zde pak lze změnit zatřídění vybraného záznamu v rámci stromové struktury a kliknutím na tlačítko ***Potvrdit*** provést jeho přesun.

#### 3.13.2	Omezení obsahu složek
Pro podporu udržení přehlednosti, zejména při větším počtu různých typů aktiv (ale i jakýchkoliv jiných typů entit), lze zajistit, aby systém hlídal, že do konkrétní složky nebude možné uložit jiné typy entit než ty, které administrátor povolil. V případě, že do složky bude povoleno ukládat více než jeden typ entit, lze též přednastavit, jaký výchozí typ entity se má automaticky přednastavit, pokud bude uživatel do této složky vytvářet novou entitu.    
Administrátor tedy může upravit vlastnosti každé složky tak, že např. data, informace a znalosti, které v Zoty reprezentují tři různé specifické typy entit, umístí do tří samostatných složek nebo je naopak umístí do jedné společné a povolí do ní ukládat všechny tyto tři typy entit.

![Omezení obsahu složek](/img/placeholder/3_Slozka_Nastaveni omezeni.png)

Pokud má být jeden typ entity, umístěný např. ve složce Hardware, dále členěn pro větší přehlednost do více samostatných podsložek (např. Servery, Pracovní stanice, Tiskárny atp. …) tak potom volba ***Nastavit dle rodiče*** u všech podřízených složek zajistí, že povolené typy entity pro ně budou nastaveny takové, jak má nastavena nadřazená (rodičovská) složka, tedy v tomto příkladu Hardware.    
Vedle omezení obsahu složek lze také omezit samotný přístup na složky a entity v nich zatříděné. Celý systém správy uživatelských oprávnění je popsán v kapitole Oprávnění.

## 4	PŘEHLED
Úvodní stránka zobrazuje přehled základních informací, co se nového událo, jaké nejnovější záznamy, aktivity či komentáře byly pořízeny nebo aktualizovány, jaké úkoly uživatel vytvořil nebo mu byly přiděleny k řešení anebo kolik aktiv, rizik, opatření, cílů či jiných entit je aktuálně v systému celkem evidováno.

![Zoty úvodní stránka](/img/placeholder/4_homepage.png)

Vzhled a obsah této stránky si může každý uživatel přizpůsobit dle svých preferencí. Obsah v horním pruhu karet lze nastavit přes ikonu Nastavení karet v pravém horní rohu úvodní stránky.

![Zoty úvodní stránka](/img/placeholder/4_homepage_nastaveni-karet.png)

Vzhled celé úvodní stránky lze upravit přepnutím do editačního módu, kdy lze jednotlivé celky zvětšovat, zmenšovat či přesouvat.

![Zoty úvodní stránka](/img/placeholder/4_homepage_nastaveni.png)

## 5	ÚKOLY
Úkoly uživateli přidělené nebo jím vytvořené jsou jedna z prvních věcí, které tento uživatel vidí v sekci **PŘEHLED** na své úvodní stránce po přihlášení do systému. V sekci **UŽIVATELÉ** lze pak zobrazit úkoly ostatních uživatelů, na záložce *Přehled* v detailu každého uživatele.    
Zobrazení všech úkolů je dostupné v sekci **ÚKOLY**. Zde je lze třídit, filtrovat, sledovat jejich stav, časový průběh, datumy kdy byly vytvořeny, upraveny, jaký mají deadline, jakého mají správce nebo důležitost.    
Úkoly, které nebyly uzavřeny (tzn. dokončeny, odmítnuty nebo archivovány) do plánovaného datumu dokončení, se po uplynutí tohoto datumu zobrazují v seznamu červeně s vykřičníkem. V případě, že plánovaný datum dokončení je již velmi blízko (tzn. je dnes nebo nastane již následující den), zobrazuje se toto datum oranžově.

![Seznam úkolů](/img/placeholder/5_ukoly_zobrazeni-seznam.png)

V nastavení zobrazení lze zvolit, zda budou úkoly zobrazeny formou řádkového seznamu nebo formou karet (tzv. Kanban zobrazení).

![Úkoly - Kanban zobrazení](/img/placeholder/5_ukoly_zobrazeni-kanban.png)

Úkoly mohou nabývat těchto stavů: *Vytvořen, Odmítnut, V řešení,
 Pozastaven, Dokončen, Archivován*.
Průběh stavů je v seznamu úkolů, stejně tak i v detailu úkolu, graficky vizualizován indikátorem průběhu, kdy jednotlivé stavy jsou rozlišeny barevně a délka každé barvy reprezentuje dobu (v počtu dnů) po jakou se úkol v daném stavu nacházel.

![Úkoly – Průběh stavů](/img/placeholder/5_ukol-seznam_prubeh-stavu.png)

Po najetí kurzorem myši nad příslušnou barvu v indikátoru průběhu se zobrazí informace o názvu stavu, který tato barva reprezentuje, počtu dnů a datumu *Od-Do*, ve kterém se úkol v tomto stavu nacházel.

![Úkoly – Průběh stavů](/img/placeholder/5_ukol-detail_prubeh-stavu.png)

Podmínky, za jakých může úkol změnit jeden stav na jiný, jsou dány logikou přednastaveného workflow pro entitu typu Úkol, jak ukazuje workflow diagram níže.

![Úkoly – Wokflow](/img/placeholder/5_workflow_task.png)
Úkoly (spolu s projekty a procesy) mohou tvořit opatření k cílovým hodnocením nejen rizik, ale i aktiv, hrozeb a zranitelností.
Úkoly jsou tedy typem entit, které lze použít velmi univerzálně v celém systému Zoty. Zároveň je třeba adresovat některé úkoly určitým konkrétním okruhům činností či aktivit, aby je bylo možné ve vztahu k těmto aktivitám snadno vyhledávat, filtrovat a reportovat.
Proto jsou pro entitu typu ***Úkol***, zavedeny další podtypy, které jsou specifické pro určité typické činnosti v rámci procesu řízení rizik, shody a auditů. Konkrétně jsou to podtypy *Přezkoumání* a *Audit*. Pro obecné použití je pak implicitně přednastaven podtyp *Obecný (úkol)*.
## 6	VIZUALIZACE
Tato sekce je připravena na umístění libovolných dashboardů či grafů, které mohou zákazníkům na míru připravit implementační partneři.
Případné požadavky či náměty směřujte na vašeho implementačního partnera nebo na email: helpdesk@zoty.cz.
### 6.1	Obecné
Příklad vizualizace vazeb závislostí mezi primárními a podpůrnými aktivy a jejich hodnocení.

![Vizualizace vazeb primární vs podpůrná aktiva – Wokflow](/img/placeholder/6_vizualizace_primarni-vs-podpurna-aktiva.png)

Příklad demonstruje dvě primární aktiva, kterými jsou procesy *Řízení rizik a aktiv* a *Zajištění fyzické bezpečnosti* a ty jsou závislé na podpoře pěti podpůrných aktiv – dvou softwarových systémů (SOFTWARE9. SOFTWARE10), instalovaných na dvou různých serverech (HARDWARE5, HARDWARE7), vše umístěno v jedné lokalitě, kterou je serverovna (LOCALITY3).    
Z první vizualizace jsou na první pohled patrná veškerá propojení mezi primárními a podpůrnými aktivy. Existenci propojení indikuje koeficient v průsečíku příslušného řádku (podpůrné aktivum) a sloupce (primární aktivum). Tento koeficient zároveň prezentuje sílu závislosti mezi příslušným primárním a podpůrným aktivem, jejíž váha může nabývat až deseti hodnot v rozsahu 0,1 – 1.
Následné vizualizace nabízí samostatné seznamy primárních a podpůrných aktiv, přičemž jakékoliv aktivum lze pak rozbalit/sbalit kliknutím na symbol +/- a zobrazit pouze na něm závislá připojená aktiva.
Na obrázku níže je takto příklad rychlého zobrazení všech podpůrných aktiv nezbytných pro zajištění fungování procesu „Zajištění fyzické bezpečnosti“ – IP bezpečnostních kamery a SW aplikace pro management bezpečnostních kamer, která je instalovaná na serveru *PowerEdge* umístěném v serverovně v lokalitě ZO1.

![Vizualizace – Rozpad primárních aktiv na podůrná](/img/placeholder/6_vizualizace_rozklik-primarniho-aktiva-na-podpurna.png)

### 6.2	Hodnocení
Příklad změny vizualizace hodnocení aktiv jednoduchou změnou registru v záhlaví grafu na libovolný (uživatelsky definovatelný) katalog, který může mít zcela jinou strukturu složek, v nichž jsou hodnocená aktiva zatříděna:

![Vizualizace – Hodnocení aktiv seskupená různými způsoby](/img/placeholder/6_vizualizace_obecne-registr-vs-katalogy.png)

## 7 ŘÍZENÍ SHODY
### 7.1	Požadavky
Registr požadavků je tvořen veškerými požadavky, které mohou být relevantní k řízení rizik a aktiv. Mohou zde ale také být obecně jakékoliv požadavky, se kterými musí být organizace trvale ve shodě. Registr požadavků je proto strukturován na požadavky zákonné (vyplývající z legislativy národní či evropské), požadavky vyplývající z ISO norem a požadavky smluvní.

![Požadavky](/img/placeholder/7_pozadavky.png)

Obsah každého požadavku je tvořen fragmenty textu, reprezentující ve struktuře dokumentu kapitoly, odstavce, písmena či paragrafy. Ke každému fragmentu textu lze připojit soubory, libovolné další entity uložené v Zoty, vyjadřovat se k němu spolu s ostatními uživateli formou komentářů nebo k němu přiřadit odpovědnou osobu – garanta, který odpovídá za zajištění shody s tímto dílčím požadavkem.

![Garant požadavku](/img/placeholder/7_pozadavek_kybersecurity_propojeni-garant.png)

Aby bylo na první pohled vidět, za kterými fragmenty textu se skrývají další připojené informace, zobrazuje se u nich notifikace s indikací počtu takto připojených informací. Lze tak, i u velmi obsáhlého dokumentu, snadno odhalit, v kterých částech jeho obsahu se „něco děje“ (viz obrázek výše)

:::tip
 V celém obsahu dokumentu lze snadno zobrazit pouze ty fragmenty textu, za kterými se skrývají další informace. Stačí jednoduše kliknout na ikonu filtru.
:::


![Požadavek – filtrace textových fragmentů](/img/placeholder/7_pozadavek_kybersecurity_propojeni-filtrace.png)

Z požadavků lze pak ještě vytvářet tzv. odvozené požadavky, jejichž smyslem je zpravidla konsolidovat více stejných či podobných požadavků, pocházejících z různých zdrojů, do požadavku jednoho, který pak agregovaně alokuje zdroje pro případná plánovaná opatření. Dalším důvodem, kdy se, zpravidla z legislativního požadavku, tvoří požadavky odvozené, může být snaha interpretovat právní výklad za účelem jeho snadnější implementace v praxi, tzn. tvoří se tímto způsobem soubor prováděcích předpisů či metodických pokynů k zákonům.
Odvozený, uživatelsky srozumitelný požadavek, lze vytvořit a připojit ke každému paragrafu či konkrétnímu odstavci zákona, či libovolného jiného typu dokumentu. A k němu přiřadit odpovědnou osobu. A celý jej pak propojit vazbou např. s rizikem, libovolným typem aktiva, cílem nebo s jiným souvisejícím požadavkem. Jsou zde tedy stejné možnosti, jako při práci s fragmenty textů u nadřízeného požadavku.
Lze tak mj. snadno dohledat, kdo za plnění jakých požadavků odpovídá a jak se s nimi konkrétně organizace vypořádala v rámci celého systému řízení rizik a shody.

![Propojení na odvozený požadavek](/img/placeholder/7_pozadavek_kybersecurity_propojeni.png)

![Odvozený požadavek](/img/placeholder/7_pozadavek_kybersecurity_propojeni-pozadavek-odvozeny-a-commenty.png)
## 8	ANALÝZA RIZIK
### 8.1	Cíle
Registr cílů je členěn na cíle bezpečnosti informací a dále cíle projektové, provozní a strategické. Cíle bezpečnosti informací jsou v rámci metody ISO27x přednaplněny cíli dle normy ISO 27001.
Cíle lze propojit s mnoha typy entit, konkrétně s riziky, hrozbami, zranitelnostmi, aktivy, opatřeními, projekty, procesy, požadavky, úkoly, incidenty, ale i s jinými cíli.
Např. při analýze projektových rizik je zpravidla vhodné provádět jejich hodnocení skrze připojené projektové cíle. Jsou-li totiž riziko či hrozba připojeny přímo k projektu, ovlivňují jej jako celek neboli mají dopad na všechny cíle tohoto projektu. Pokud jsou ale tyto cíle založeny v registru cílů a propojeny s tímto projektem, tak následným připojením rizik či hrozeb lze modelovat jejich dopad na každý dílčí projektový cíl.
### 8.2	Aktiva
Uživatel si může v registru aktiv vytvořit libovolnou strukturu složek a kategorizovat tak aktiva dle vlastních preferencí. Podobně, jako u jiných registrů, i zde se lze nechat inspirovat již vytvořenými strukturami složek v rámci přednaplněných katalogů aktiv.
![Katalogy aktiv](/img/placeholder/8_katalogy-aktiv.png)

Speciální typy aktiv tvoří projekty a procesy, které mohou (spolu s úkoly) tvořit **Opatření** k cílovým hodnocením nejen rizik, ale i aktiv, hrozeb a zranitelností.    
Aktiva lze hodnotit podle uživatelsky definovatelných schémat **HODNOCENÍ** obdobně, jako např. rizika, přičemž hodnocení rizik obvykle předchází právě hodnocení aktiv. Jeho cílem je stanovit **hodnotu aktiva** (např. z pohledu důvěrnosti, integrity a dostupnosti, v případě hodnocení v rámci informační bezpečnosti), která následně může vstupovat do hodnocení rizik s využitím definovaných schémat hodnocení zahrnujících **hodnotu dopadu**. Proto Zoty umožňuje automaticky přebírat výsledné skóre jednoho hodnocení (např. aktiva) jako vstup pro výpočet skóre jiného hodnocení (např. rizika).

:::tip
 Pro účely hodnocení rizik se nepoužívá pouze účetní nebo pořizovací hodnota aktiva, ale hodnota, která odráží náklady na obnovu a nápravu následků vyplývajících ze selhání, tj. např. narušení důvěrnosti, integrity nebo dostupnosti aktiva. A která je většinou daleko vyšší než hodnota účetní, kdy např. selhání součástky v pořizovací ceně v řádu stokorun může způsobit škodu v řádu milionů.
:::
:::info
Je třeba mít také na paměti, že hodnota aktiva v rámci hodnocení aktiv není totéž, co hodnota dopadu v rámci hodnocení rizik. Hodnota dopadu sice vychází z hodnoty aktiva, ale v důsledku přijatých bezpečnostních opatření by se měla v čase snižovat. Tzn., že na začátku (před zavedením bezpečnostních opatření) může hodnota dopadu být rovna (nebo se blížit) hodnotě aktiva, ale s implementací bezpečnostních opatření se bude postupně snižovat (jsou-li opatření účinná).
:::
Proto je vhodné, vždy v rámci konkrétního hodnocení, individuálně posoudit (např. s ohledem na existenci připojených opatření a vyhodnocení jejich účinnosti), zda nebude třeba manuálně korigovat automaticky doporučené hodnoty pro stanovení výsledného skóre hodnocení.

## 8.3	Hrozby a zranitelnosti
Při návrhu nejvhodnější struktury složek v příslušných registrech v rámci kategorizace hrozeb a zranitelností lze hledat inspiraci v některém z předdefinovaných katalogů hrozeb a zranitelností, které vychází z uznávaných metodik a norem, konkrétně:
-	Katalog hrozeb dle Evropské agentury pro bezpečnost sítí a informací (ENISA)
-	Katalogy hrozeb a zranitelností dle normy ISO 27001 - Systém řízení bezpečnosti informací (ISMS)
-	Katalog bezpečnostních hrozeb ohrožujících soukromí uživatelů dle frameworku LIDDUN (LINDDUN privacy threats)
-	Katalog hrozeb dle metodiky STRIDE

![Katalogy hrozeb](/img/placeholder/8_katalogy-hrozeb.png)
![Katalogy zranitelností](/img/placeholder/8_katalogy-zranitelnosti.png)
### 8.4	Rizika
Registr rizik je standardně členěn na rizika *informační, finanční, projektová, provozní, strategická, a environmentální*. Uživatel si i v tomto registru může vytvořit svoji vlastní strukturu složek, která bude lépe vyhovovat jeho potřebám.    
Riziko může nabývat těchto stavů: *Vytvořeno, Schvaluje se, Schváleno, Dokončeno, V přípravě, Posuzuje se, Zamítnuto, Akceptováno, Archivováno*.    
Podmínky, za jakých může riziko změnit jeden stav na jiný, jsou dány logikou přednastaveného výchozího workflow pro schvalování entit, jak ukazuje workflow diagram v kapitole Schválení.    
Na kartě rizika je, vedle datumů platnosti a popisných atributů (*Název, Popis, Příčina, Dopad, Původ rizika, Vlastník rizika, Autor rizika, Účastníci*), i výběrový atribut ***Strategie zvládání***, kde je možné zvolit jednu z následujících možností:
- *Redukce*
- *Přijetí*
- *Přenesení*
- *Vyhnutí se*

***Redukce*** – tato strategie se volí zpravidla v případech vysoké pravděpodobnosti hrozby (kdy dopad dosahuje nízkých nebo středně vysokých hodnot – nikoliv kritického pásma) a znamená, že k riziku by měla být připojena opatření, jejichž cílem je snížení rizika na přijatelnou úroveň. Jde pak o činnosti ke snížení pravděpodobnosti nebo negativního dopadu nebo obou těchto parametrů.

***Přijetí*** – tato strategie se volí zpravidla v případech nízké pravděpodobnosti hrozby a jejího dopadu a znamená, že se s rizikem nic nedělá; pouze se monitoruje a pravidelně přezkoumává, zda se v čase nezvýšila pravděpodobnost hrozby a/nebo jejího dopadu, a tudíž zda není třeba zvolit jinou strategii zvládání.

***Přenesení*** – tato strategie se volí v případech, kdy se ekonomicky vyplatí sdílet náklady ze ztrát s jinou stranou nebo sdílení prospěchu ze zisku vyplývajícího z rizika. V Zoty je pak možné přidat opatření typu *Úkol* (např. uzavřít Pojistnou smlouvu), nebo *Proces* (např. Správa pojištění).

***Vyhnutí se*** – tato strategie se volí zpravidla v případech vysoké pravděpodobnosti hrozby a vysoké míry dopadu (kritické pásmo). V těchto případech se zpravidla volí úkoly týkající se zastavení běžících nebo vyhnutí se plánovaným aktivitám.
Zvolená strategie má, stejně jako samotné riziko, svoji platnost Od-Do. Po této době by měla být zvolená strategie zrevidována a ponechána nebo změněna.
Rizika lze hodnotit podle uživatelsky definovatelných schémat *Hodnocení*.

:::tip
Pravidelné přezkoumání zvolené strategie je výhodné podpořit připojenými úkoly. Správce každého rizika pak bude mít u svých rizik připojen úkol/úkoly s termínem splnění k datu, kdy končí platnost zvolené strategie pro tato rizika.
:::

## 9	HODNOCENÍ
Hodnocení je speciální typ entity, jejíž jednotlivé záznamy představují konkrétní instance ohodnocení rizika nebo aktiva nebo hrozby nebo zranitelnosti.
V rámci hodnocení lze ohodnotit skutečnost nebo cílový stav pro vybrané časové období.

![Hodnocení rizika – detail nastavení a ohodnocení](/img/placeholder/9_hodnoceni-rizika_Detail-nastaveni-a-ohodnoceni.png)

Při zadávání hodnocení cílového nebo skutečného stavu si lze zobrazit všechna předchozí provedená hodnocení (pro skutečnost i cíl) a automaticky jimi předvyplnit aktuálně prováděné hodnocení, s tím, že uživatel si může nabídnuté hodnoty změnit.

![Hodnocení rizika – detail nastavení a ohodnocení](/img/placeholder/9_hodnoceni_predvyplnit-vyber.png)
![Hodnocení rizika – detail nastavení a ohodnocení](/img/placeholder/9_hodnoceni_predvyplnit-vybrano.png)

Při samotném hodnocení lze ke každé hodnocené metrice vložit textové poznámky a také číselné hodnoty, které mohou např. rozložit hodnocený parametr na více řádků, aby bylo zřejmé, z jakých dílčích hodnot se skládá.
Aby bylo na první pohled patrné, že k příslušné hodnocené metrice jsou již nějaké poznámky vloženy, tak je ikona pro editaci poznámky podsvícena ve žlutém kruhu.
Časovým obdobím pro hodnocení aktuálního/skutečného stavu může být týden, měsíc, čtvrtletí nebo rok. Nebo libovolné datum, pokud neexistuje pravidelná periodicita hodnocení skutečného stavu. Plánovaná hodnocení cílového stavu se pak vždy vztahují ke konkrétnímu datu. Toto datum je milníkem, ke kterému má být dosaženo plánovaného cílového stavu. Platnost takto nastaveného milníku je v čase platná až do data, kdy bude zaplánován nový cílový milník.
Všechny tyto parametry lze plně uživatelsky konfigurovat v *Nastavení – Hodnocení* zcela samostatně pro každé schéma hodnocení. Stejně, jako zde lze např. nastavit, zda se v rámci daného schématu může hodnotit pouze skutečnost nebo pouze cílový stav nebo obojí. Nebo zda budeme chtít v rámci daného schématu hodnotit dopad na aktiva pouze z pohledu možných hrozeb nebo příležitostí nebo obojího. Všechny možnosti uživatelské konfigurace a specifických nastavení pro schémata hodnocení jsou dále popsána v kap.  Nastavení, podkapitole Hodnocení.    
Ve výběru z dostupných schémat hodnocení, dle kterých se má hodnocení provést, se nenabízí všechna schémata hodnocení definovaná v *Nastavení – Hodnocení*. Nabízí se pouze schémata relevantní pro hodnocení určitého typu, tj. buď pro rizika nebo aktiva nebo hrozby nebo zranitelnosti.

![Hodnocení rizika – detail nastavení a ohodnocení](/img/placeholder/9_hodnoceni-typy-hodnoceni-v-nastaveni.png)

Výběr z dostupných schémat pro hodnocení daného typu lze dále ještě více omezit, pokud při vytváření nové entity typového *Hodnocení* byl nejen zvolen určitý podtyp *Hodnocení* (A, R, T, V), ale bylo toto typové *Hodnocení* navíc přiřazeno nějaké konkrétní metodě, jež má v *Nastavení* povoleno pouze jedno vybrané schéma hodnocení pro tento typ.

![Hodnocení rizika – detail nastavení a ohodnocení](/img/placeholder/9_hodnoceni_detail.png)

Při tvorbě nové entity typového Hodnocení je hlavně třeba také zvolit, co konkrétně se bude hodnotit, tj. k čemu se pak jednotlivá hodnocení vztahují (např. k jakému konkrétnímu riziku).

![Hodnocení rizika – detail nastavení a ohodnocení](/img/placeholder/9_hodnoceni_detail-rodice.png)

Přitom je možné zvolit, že toto typové hodnocení nebude mít jednoho tzv. rodiče (v tomto příkladu riziko - *Narušení střeženého objektu*), ale může jich mít více. Např. aktivum typu *Proces* (*Provoz a údržba budov*) nebo projekt. Nebo též hrozbu, která působí na aktivum typu *Proces*. A zároveň s ní i zranitelnost aktiva (v tomto příkladu procesu), skrze kterou hrozba na aktivum působí.    
Tímto způsobem lze, pomocí vazeb mezi jednotlivými entitami, zviditelnit konkrétní instance hodnocení pro všechny tyto vybrané rodiče. To může být velmi užitečné např. při hodnocení jednoho typu entity (např. rizika), které je ovlivněno výsledkem předchozího hodnocení jiného typu entity (např. aktiva). Potom je výhodné vidět výsledná skóre hodnocení rizika i u všech souvisejících aktiv (rodičů).    
Propojení entit pomocí vazby typu *Rodič-Potomek* je nezbytné, má-li jedna hodnocená entita (potomek) přebírat výsledné skóre hodnocení jiné entity (rodiče) a zahrnout ji do výpočtu svého skóre hodnocení dle nastaveného schématu (viz Nastavení, v kap. Hodnocení).    
Přehled všech hodnocení, jejich výsledného skóre a časového rozmezí, pro který je platné, lze pro hodnocení každé konkrétní entity zobrazit ze stejnojmenné záložky *Hodnocení*, viz obr. níže.
Pro plánovaná cílová hodnocení reprezentující cílové milníky, je navíc vidět i celkový počet opatření, s pomocí kterých má být cílového stavu dosaženo. Kliknutím na symbol **+**/**-** vlevo vedle názvu hodnocení, lze pak rozbalit/sbalit seznam všech opatření připojených k tomuto plánovanému cílovému milníku.
![Hodnocení rizika – detail nastavení a ohodnocení](/img/placeholder/9_hodnoceni.png)

Časový průběh výsledných skóre hodnocení pro skutečnost i pro plánované cílové hodnoty lze přehledně zobrazit v jednoduchém grafu. Nad ním lze také zobrazit seznam záznamů s historií všech provedených hodnocení.
## 10	ZVLÁDÁNÍ RIZIK
### 10.1	Opatření
Opatření lze připojovat k libovolným typům entit, které lze hodnotit (aktiva, rizika, hrozby, zranitelnosti), a které mají vytvořeno alespoň jedno ohodnocení pro cílový stav. Opatření tedy nemají vazbu na tyto entity napřímo (vyjma entit typu *Aktivum*, viz „control driven approach“níže), ale skrze jejich plánovaná cílová ohodnocení. Cílová ohodnocení reprezentují totiž cílové milníky, kterých má být dosaženo právě s pomocí plánovaných opatření. Opatřeními mohou být také entity typu úkol, projekt či proces. Proto v Zoty používáme pro samotná opatření termín „*Šablona opatření*“, abychom je odlišili od opatření typu úkol / projekt /proces.    
Opatření lze připojit nejen k cílovým hodnocením entit, ale i přímo k aktivům. To je užitečné zejména v případech, kdy se neprovádí analýza rizik (jejíž součástí je hodnocení), ale rovnou se na vybraná aktiva/skupiny aktiv aplikují příslušná opatření, tedy použije se tzv. „control driven approach“. Typické je to u tzv. „3A opatření“ - tj. opatření v oblasti **A**utentizace (přihlášení uživatele heslem, otiskem, atp., či vícefaktorově, zahrnující jedinečnou identifikaci uživatele), **A**utorizace (po přihlášení do systému se přidělí odpovídající oprávnění) a odpovědnosti (**A**ccounting – logování činnosti uživatelů). V tomto případě se jedná o základní sadu opatření, která je doporučeno implementovat vždy, bez ohledu na výsledek analýzy rizik. Proto mohou být tato opatření připojena přímo k příslušnému aktivu.    
Pro každé opatření lze zadat celkovou výši nákladů, které realizace daného opatření spotřebuje. Náklad lze zadat ve více různých měnách (CZK, EUR, USD) a zda jde o náklad jednorázový či periodicky se opakující a následně i s jakou periodou se opakuje (denně/týdně/měsíčně/ročně). Systém pak automaticky zohlední tyto vstupy při výpočtu vynaložených nákladů na všechna zaplánovaná opatření za zvolené časové období.
### 10.2	Plán zvládání rizik
Jednotlivá opatření mohou být součástí plánů zvládání rizik. Vytvořit lze libovolné množství plánů s platností OD-DO. Vytvořený plán se zařadí do seznamu plánů zvládání rizik, odkud je pak možné libovolný plán otevřít kliknutím na jeho název a pomocí tlačítka Připojit riziko do něj zahrnout rizika z registru rizik. Pokud mají rizika připojená nějaká hodnocení či opatření, zobrazí se na stejnojmenných záložkách v detailu vybraného plánu v sekci Obsah stejně, jako samotná rizika do něj zahrnutá. Pod sekcí Obsah je pak ještě sekce Report, kde lze do plánu zvládání rizik doplnit potřebné zdroje pro jeho realizaci v členění Technické, Finanční – investiční, Finanční – provozní, Lidské (MD), Informační a dále též libovolnou textovou poznámku.
### 10.3	Reporty
V této sekci mohou být definovány reporty, jejichž obsah či vzhled je třeba zakázkově přizpůsobit dle požadavků uživatelů konkrétní organizace. V Zoty jsou pro tento účel připravena data v takovém kontextu, aby z nich bylo možné sestavit příslušné standardní reporty, např. Prohlášení o aplikovatelnosti (PoA) dle požadavku Zákona o kybernetické bezpečnosti, které v Zoty, v metodě ZoKB, využívá přednaplněný registr bezpečnostních opatření dle vyhlášky o kybernetické bezpečnosti (VoKB) s možností auditovat, zda a jak jsou jednotlivá bezpečností opatření v organizaci aplikována ve vazbě na požadavky této vyhlášky. Výstupy z tohoto auditu, spolu s registrem bezpečnostních opatření a znalostní bází Zoty, kde je definována matice opatření a kategorií zranitelností, na které tato opatření působí, jsou pak podkladem pro sestavení PoA reportu.
## 11	PŘÍPADY
V této sekci lze evidovat specifické typy případů, jakými jsou:
- Auditní nálezy
  - Doporučení auditu
  - Neshody auditu
- Incidenty
- Servisní požadavky
Protože některé tyto záznamy, zejména incidenty a servisní požadavky, jsou často evidovány a řízeny ve specializovaných externích systémech, je Zoty připraveno tato data na pravidelné bázi synchronizovat. Aby pak mohla být propojena na relevantní entity spravované v  Zoty registrech (rizika, aktiva, atp.). Nastavení této synchronizace je vždy specifické pro každý konkrétní integrační scénář a je realizováno zakázkově v kooperaci s kvalifikovaným implementačním Zoty partnerem.
## 12	AUDITY
V modulu ***Audit*** lze zakládat interní či externí audity a propojovat je s požadavky, vůči kterým je v rámci daného auditu posuzována shoda.

![Audity](/img/placeholder/13_audit_seznam.png)

Je-li audit propojen s požadavkem v sekci Řízení shody - POŽADAVKY, a tímto požadavkem je dokument (zákon, ISO norma, směrnice, smlouva, atp.), jež má strukturovaný obsah (kapitoly, podkapitoly nebo paragrafy, odstavce, písmena, atp.), tak pak lze ze všech těchto ucelených fragmentů textu vybrat v rámci auditu ty, u kterých má být posuzováno, zda je s nimi organizace ve shodě či nikoliv.
Po najetí myší nad příslušný fragment textu, např. jeden konkrétní odstavec, se zobrazí volba, která umožní aktivovat pro něj funkcionality auditu. Tento fragment se stává tzv. auditní.
![Aktivace auditu pro fragment textu požadavku](/img/placeholder/13_audit_aktivace-pro-fragment-textu-pozadavku.png)

Aktivací auditu pro vybrané fragmenty / dílčí požadavky se určí zaměření a rozsah celého auditu. Zároveň lze ke každému dílčímu požadavku přiřadit odpovědnou osobu – garanta, který zodpovídá za jeho zavedení, připojit k němu komentáře nebo jej propojit s libovolnými dalšími entitami v Zoty. V rámci auditu lze pak každý dílčí požadavek označit za Zaveden, Nezaveden, V procesu zavádění či Neaplikovatelný.

![Audit - detail](/img/placeholder/13_audit_detail.png)
![Audit – vyhodnocení v grafu](/img/placeholder/13_audit_zokb_grafy.png)

Zoty ve standardu nabízí různé typy grafů, které poskytnou rychlý přehled o aktuálním stavu plnění požadavků daného zákona, normy či jiných předpisů prověřovaných v rámci interního auditu.
Grafy lze snadno použít i v externích dokumentech, např. v prezentacích a to tak, že po najetí myší do oblasti grafu se zobrazí ikona  ![Ikona stažení grafu](/img/placeholder/13_ikona_graph-download.png) pro stažení grafu ve formátu PNG (viz obrázek výše).
## 13	VYHLEDAT
Vyhledávat lze v celé aplikaci dle názvu nebo klíče entity zadáním části vyhledávaného řetězce. Avšak zatímco vyhledávání přes pole pro vyhledávání vedle symbolu lupy v jednotlivých sekcích, které dostupné pouze pro záznamy jen některých typů entit patřících do dané sekce nebo globální vyhledávání s využitím symbolu lupy v horní nástrojové liště, slouží pro rychlé vyhledání, které je omezeno na max. 10 výsledků, tak v této sekci lze vyhledávat bez omezení. Navíc se zde vyhledané výsledky, je-li jich více, zobrazují ve standardním seznamu záznamů, který lze dále filtrovat, třídit anebo označovat jednotlivé záznamy a pak s nimi provádět některé hromadné operace.
Kterýkoliv z výsledků vyhledávání lze pak také připnout do samostatných záložek, které jsou ve spodní části obrazovky připraveny zobrazit na jedno kliknutí detail příslušného záznamu.
Vyhledávat lze fulltextově i v seznamech záznamů, které se nabízí při zadávání hodnot těch atributů, které podporují takovýto způsob zadání výběrem ze seznamu.
Je-li zadávanou hodnotou atributu jiná entita, lze v seznamu entit pro výběr vyhledávat podle názvu nebo klíče entity.
Je-li zadávanou hodnotou atributu *uživatel*, lze v seznamu entit pro výběr uživatele vyhledávat podle *jména* nebo *příjmení* nebo *role* přiřazené uživateli.
## 14	ŠTÍTKY

Sekce **Štítky** obsahuje seznam všech štítků, které jsou v Zoty vytvořeny, s možností zobrazit či upravit jejich název, popis, či barvu, jakou jsou vizualizovány. V detailu štítku se pak v záložce „Obsahuje“ zobrazí seznam všech entit, ke kterým je štítek připojen.    
Specifický typ systémového štítku je *Organizace*. Pokud je tímto štítkem označena libovolná složka v registrech entit či konkrétní entita, bude omezena jejich viditelnost jen pro ty uživatele, kteří patří do příslušné organizace či organizační jednotky. Více v kap. Omezení přístupu na složky a záznamy.

## 15	SKUPINY
V Zoty jsou předdefinovaná schémata pro tvorbu skupin, které umožní seskupovat entity příslušného typu – *Aktiva, Hrozby, Zranitelnosti, Rizika*. Do takto vytvořených skupin lze zařazovat entity příslušného typu (dle příslušného schématu v rámci kterého byla skupina vytvořena) a provádět s nimi pak hromadné operace, např. provést hromadně jedno hodnocení nad celou skupinou vybraných rizik namísto mnoha hodnocení jednotlivých rizik.

## 16	ADMINISTRACE
Obsahuje podsekce **Nastavení**, **Účet** a **Koš**.
V sekci Administrace lze provádět řadu nastavení samotné aplikace včetně dat, se kterými pracuje, spravovat Zoty účet se všemi uživateli a jejich rolemi a provádět řadu dalších systémových nastavení, která mohou mít zásadní vliv na fungování celé aplikace.

:::warning
Je důležité vždy pečlivě zkontrolovat a nastavit přístup do této sekce pouze pro vybrané uživatele či role v nastavení oprávnění – viz kapitola Oprávnění.
:::

### 16.1	Nastavení
V této sekci jsou dostupná všechna důležitá nastavení, která ovlivňují chování aplikace, včetně exportů a importů dat, tvorby zakázkových reportů, konfigurace metod, schémat hodnocení, znalostní báze, multijazyčnosti, oprávnění pro přístup do různých částí aplikace a řady dalších nastavení, jak je popsáno v podkapitolách níže.

#### 16.1.1	Aplikace

##### 16.1.1.1	Obecné
V nastavení aplikace lze na záložce **Obecné** volit výchozí/primární jazyk (v aktuální verzi je podporována čeština a angličtina) a měnu (CZK, USD, EUR).

##### 16.1.1.2	Metody
Záložka **Metody** zobrazuje seznam všech dostupných metod, pomocí kterých lze konfigurovat systém a přizpůsobit jej dané organizaci. Metody mohou být systémové (byly vytvořeny výrobcem Zoty, mají status *Systém*) nebo mohou být vytvořeny zákazníkem či implementačním partnerem pouze v Zoty účtu zákazníka. Systémové entity nelze odstranit či editovat.   
Metoda poskytuje možnost uživatelsky definovat, uložit a následně opakovaně použít (přednastavit) určitou konkrétní konfiguraci systému, která je z pohledu uživatele optimální pro jím zvolený metodický přístup v oblasti řízení aktiv a rizik. Zpravidla tedy s ohledem na to, jaké všechny ISO normy jsou v organizaci implementovány nebo jaké zákony či jiné regulatorní požadavky se na ni vztahují. Metod lze definovat více.
Typickým příkladem jsou hodnocení. Např. hodnocení rizik (ale i aktiv, hrozeb či zranitelností), která mohou mít definovaná různá schémata hodnocení v rámci různých metod, kdy jedna metoda reprezentuje jeden přístup řízení rizik vycházející např. z normy ISO 31000 pro Risk management, druhá z Bezpečnosti informací dle ISO 27001, třetí ze zákona o kybernetické bezpečnosti atp. Podobně i např. doporučená opatření pro mitigaci rizik.
Koncept metod tak umožňuje zapojit více různých pohledů v rámci celého systému řízení rizik a mnohem snáze např. ověřovat, zda je organizace ve shodě se zákonnými, regulatorními či normativními požadavky, které na ni dopadají z více různých zdrojů.

##### 16.1.1.3	Oprávnění
Záložka **Oprávnění** umožňuje pro vybrané role či konkrétní uživatele nastavit přístup do jednotlivých sekcí či podsekcí systému s libovolnou kombinací oprávnění: *Číst, Vytvořit, Upravit, Odstranit, Komentář* nebo zvolit *Vše* pro nejvyšší úroveň oprávnění.

##### 16.1.1.4	Přesměrování
Záložka **Přesměrování** umožňuje pro každou roli individuálně nastavit, do jaké sekce či podsekce aplikace Zoty bude po přihlášení automaticky přesměrován uživatel s touto rolí. Pokud mají uživatelé přiřazeno více rolí, pak volbou *Pořadí* lze nastavit, v jakém pořadí mají být role seřazeny při vyhodnocování, kam má být daný uživatel přesměrován. Přičemž role s nižším pořadovým číslem mají vyšší prioritu. Specifické postavení zde má role *Administrátor*, která je v pořadí vždy na prvním místě.

#### 16.1.2	Entity
Jednotlivé záložky zobrazují všechny **Typy entit**, které jsou v systému k dispozici, **Atributy**, které jsou používány pro popis vlastností entit, typy **Propojení**, která lze mezi entitami realizovat a všechny **Stavy**, kterých mohou entity nabývat v rámci systémových či uživatelských workflow.    
Typy entit, jejich atributy, stavy a typy vzájemných propojení, mohou být systémové (byly vytvořeny výrobcem Zoty, mají status *Systém*) nebo mohou být vytvořeny zákazníkem či implementačním partnerem pouze v Zoty účtu zákazníka. Systémové entity nelze odstranit či editovat.

##### 16.1.2.1	Typy entit
Typy entit jsou zatříděny do některé z kategorií: *Cíle, Aktiva, Hrozby, Zranitelnosti, Rizika, Hodnocení, Plány, Požadavky, Případy, Schválení, Úkoly, Designer*.

##### 16.1.2.2	Atributy
V systému jsou dostupné atributy typu: *boolean, text, string, integer, float, number, json, datetime, relation*. Hodnoty lze pak do příslušných atributů zadávat prostřednictvím různých typů formulářů, konkrétně: *input, select, datepicker, textarea, translatable, currency*.

##### 16.1.2.3	Propojení
V Zoty lze propojovat entity vazbami různého typu. Přičemž některé typy propojení jsou systémové (systém je vytváří automaticky bez zásahu uživatele) a některé jsou uživatelsky volitelné. Pokud je vazba směrově orientovaná, tzn., že směřuje od zdroje k cíli, tak pak je zde též informace, jaký zdroj, s jakým cílem mohou být propojeny. Neboli určuje směr propojení.    
Systémová propojení jsou typu: *Stromová struktura, Výskyt, Zástupce*.
Účel a použití jednotlivých typů systémových propojení:
-	***Stromová struktura*** je často používaný typ směrově orientovaného propojení mezi složkami či entitami, kde je třeba modelovat hierarchickou strukturu vazeb, kdy jedna složka či entita vystupuje v roli nadřazené a ve stromové struktuře se pak pod ní zobrazují ostatní, jí podřazené složky/entity.
-	***Výskyt*** je využíván v modulu Zoty Designer při vizualizaci propojení entit tvořící procesní modely importované z procesního nástroje ARIS.
-	***Zástupce*** je odkaz v katalogu na entitu uloženou v registru.
-	***Rodič→Dítě*** může být propojení jak systémové, tak uživatelské, viz popis níže.
Uživatel pak ještě může při propojení entit volit výběrem z propojení typu: *Vztah, Podporuje, Blokuje, Závislost, Zahrnuje, Nezahrnuje, Rodič→Dítě*.
Účel a použití jednotlivých typů propojení:
-	***Vztah*** je univerzální typ propojení, který lze použít mezi libovolnými typy entit, které mohou existovat zcela nezávisle na sobě a není třeba modelovat směr propojení mezi nimi.
-	***Podporuje*** je typ směrově orientovaného propojení, pomocí kterého lze vyjádřit, že jedna entita souvisí s jinou a to způsobem, že jedna z nich (zdroj) podporuje entitu/entity další (cíl). Tímto typem propojení se vytvoří vazba směřující od zdroje k cíli. Tento typ propojení má navíc specifickou vlastnost, která umožňuje pomocí atributu *Váha* (udává se v procentech v rozsahu 10-100 %) určit míru podpory mezi entitami či důležitost entity podpůrné pro entitu podporovanou.
Příkladem je propojení primárních a podpůrných aktiv.
-	***Blokuje*** je typ směrově orientovaného propojení, pomocí kterého lze vyjádřit, že jedna entita blokuje entitu jinou, tzn. že by nemělo dojít ke změně stavu blokované entity, aniž by předtím došlo ke změně stavu entity, která ji blokuje.
Příkladem je propojení dvou entit typu *Úkol*, kdy úkol č.2 nelze dokončit nebo na něm začít pracovat dříve, než je dokončen úkol č. 1.
-	***Závislost*** je jednosměrná vazba vyjadřující obecnou závislost jedné entity na druhé; tento typ vazby je podobný typu vazby *Blokuje*, na rozdíl od něj ale nijak neurčuje způsob, jakým jedna entita na jiné závisí (tj. neříká, že je např. „*blocker*“), není tedy tak striktní. Tento typ propojení má navíc specifickou vlastnost, která umožňuje pomocí atributu *Váha* (udává se v procentech v rozsahu 10-100 %) určit míru závislosti jedné entity na druhé.
-	***Zahrnuje*** je jednosměrné vazba, pomocí které jedna entita agreguje jiné entity.
-	***Nezahrnuje*** je specifický způsob propojení pomocí jednosměrné vazby, kdy jedna entita vylučuje propojení s jinou entitou/entitami; to jsou případy, kdy je třeba např. dokumentovat výjimku z propojení a nelze to tedy provést tak, že se entity jednoduše pouze nepropojí.
-	***Rodič→Dítě*** je jednosměrné propojení od jedné entity – rodiče, na jinou entitu – dítě. Propojuje entity, kde jedna z nich nemůže existovat nezávisle na jiné, tzn. dítě (např. hodnocení) nemůže existovat bez rodiče (zde např. aktivum, riziko atp.). Tento typ propojení může být též vytvářen zcela automaticky systémem. Například je-li vytvářeno hodnocení nějaké entity. Pak tato entita vystupuje v roli „rodiče“ a připojené hodnocení v roli „dítěte“. Vše se realizuje na pozadí, bez zásahu uživatele.
Propojení entit pomocí vazby typu *Rodič -> Dítě* je také nezbytné, má-li jedna hodnocená entita (dítě) přebírat výsledné skóre hodnocení jiné entity (rodiče) a zahrnout ji do výpočtu svého skóre hodnocení dle nastaveného schématu.

##### 16.1.2.4	Stavy
V systému mohou rozličné typy entit získávat či měnit svůj stav v rozsahu hodnot: *Akceptováno, Archivováno, Blokováno, Čekající, Dokončeno, Implementováno, Ke schválení, Nepřiřazeno, Obnoveno, Odmítnuto, Odstraněno, Pozastaveno, Převzato, Schvaluje se, Schváleno, V přípravě, V realizaci, V revizi, Vráceno, Vyhodnoceno, Vytvořeno, Zamítnuto, Zrušeno*.
#### 16.1.3	Znalostní báze
Mezi aktivem, hrozbou a zranitelností existuje určitý vztah. Jeho znalost je důležitá pro úspěšné provedení analýzy a vyhodnocení rizik. Účelem znalostní báze v Zoty je usnadnit uživatelům v roli risk analytiků či manažerů rizik nejen zhodnocení aktiv, hrozeb a zranitelností v rámci analýzy rizik, ale i kvantifikaci vhodných opatření v rámci vyhodnocení rizik.    
Znalostní báze je matice kombinující hrozby s relevantními zranitelnostmi, požadavky a kategoriemi aktiv (či přímo konkrétními aktivy). Správce systému může jednotlivé dimenze této matice zcela volně definovat, tj. stanovit, jaké konkrétní kategorie pro aktivum, hrozbu či zranitelnost budou do této matice zahrnuty a jak na sebe navzájem působí.    
Řádky matice reprezentují jednotlivé hrozby. Systém do řádků automaticky vloží všechny hrozby, které jsou uložené v registru.     
V konfiguraci lze také zapnout přepínač *Kompaktní zobrazení* kdy se namísto názvů entit zobrazují pouze jejich klíče a název se zobrazí až v tooltipu (po najetí myší nad příslušný klíč). Matice se pak stane daleko přehlednější. Zejména v případech, kdy uživatelé používají delší názvy.      
Tlačítko **Přidat** sloupec nabídne výběr ze všech entit typu zranitelnosti a entit a složek z registrů aktiv a požadavků. Na konci každého řádku lze vyvolat menu Upravit, umožňující nastavit relevanci propojení, tj. které sloupce matice jsou pro tento konkrétní řádek relevantní.    
Se znalostí, jaké hrozby, mohou působit na jaké kategorie aktiv a jaké zranitelnosti mohou při tom zneužít, pak systém pracuje tak, že přednabízí uživatelům pouze smysluplná propojení mezi aktivem zranitelností a hrozbou.    
K tomu, aby byl tento koncept funkční, je pouze třeba (vedle správné jednorázové konfigurace matice), aby konkrétní identifikovaná aktiva byla při založení do systému vždy zatřízena do správné kategorie (reprezentované složkami v registru či katalozích aktiv).

#### 16.1.4	Hodnocení
V rámci **Administrace – Nastavení – Hodnocení** lze zobrazit přehled stávajících definic schémat hodnocení, upravovat nastavení stávajících schémat nebo založit definici nového schématu hodnocení.

![Přehled schémat hodnocení](/img/placeholder/16_hodnoceni_prehled-schemat.png)

Nově vytvořené schéma je třeba publikovat (pomocí tlačítka ***Publikovat***), aby bylo viditelné v ostatních sekcích aplikace a mohlo se podle něj provádět hodnocení.

![Publikace schématu hodnocení](/img/placeholder/16_nastaveni_hodnoceni-publikace.png)

Aby bylo možné stávající schéma, které je publikováno, upravit, je třeba jej přepnout pomocí tlačítka ***Upravit*** do editačního režimu. Schéma je pak viditelné pouze zde, v nastavení **Hodnocení**.

![Povolení editace schématu hodnocení](/img/placeholder/16_nastaveni_hodnoceni-editace.png)

Schéma hodnocení je možné přiřadit metodě. Pak bude viditelné pouze u této konkrétní metody.
Při definici schématu hodnocení je třeba dále nastavit:
- **Typ hodnocení** – zda se podle definovaného schématu budou hodnotit aktiva, rizika, hrozby nebo zranitelnosti
- **Název** – libovolný uživatelský název pro schéma hodnocení
- **Možnosti stavu** – volba, zda se při hodnocení má uživateli nabízet hodnocení pro aktuální/skutečný stav nebo pro cílový nebo zda se nabídnou k hodnocení obě možnosti
- **Možnosti dopadu** – volba, zda se při hodnocení má uživateli nabízet hodnocení dopadu na aktiva pouze z pohledu možných hrozeb nebo příležitostí nebo obojího
- **Perioda hodnocení** – volba, zda časovým obdobím pro hodnocení aktuálního/skutečného stavu má být týden, měsíc, čtvrtletí nebo rok. Nebo libovolné datum, pokud neexistuje pravidelná periodicita hodnocení skutečného stavu. Plánovaná hodnocení cílového stavu se pak vždy vztahují ke konkrétnímu datu.

V dalším kroku lze již definovat metriky pomocí tlačítka Přidat metriku. Metrika je jedním z parametrů hodnocení, pro který lze definovat:
- **Typ** – určuje způsob, jakým bude metrika v definovaném schématu hodnocení použita. Metrika může být v rámci schématu zcela nově definována (jak je popsáno níže) pomocí volby
  - **Vytvořit metriku**
  - **Metrika** – lze použít některou ze stávajících, již definovaných metrik v rámci jiných schémat hodnocení.
  - **Schéma hodnocení** – lze použít výsledné skóre jiného schématu hodnocení, jehož hodnotu lze převzít do této metriky. Při této volbě je třeba mít na paměti, že entita, která v rámci hodnocení přebírá výsledné skóre hodnocení jiné entity, musí být s touto entitou propojena vazbou rodič-potomek a zároveň, pokud je těmto entitám přiřazena některá metoda, musí být stejná.

![Typy metrik hodnocení](/img/placeholder/16_hodnocení_metrika-typ.png)

Níže uvedené dokumentuje postup a význam jednotlivých atributů pro volbu ***Vytvořit metriku***:
- **Název** (např. *Dopad* nebo *Pravděpodobnost, Závažnost, Dostupnost, Integrita* atp.)
- **Osa** – volba, zda se má parametr vynášet do osy X nebo Y při prezentaci výsledného hodnocení ve formátu dvou-rozměrného grafu typu heatmapa. Volba osy Y se zpřístupní až tehdy je li definována více než jedna metrika. Hodnocení mohou být jak jednorozměrná (pouze v ose X), tak dvourozměrná (osa X a Y).
- **Pořadí** – pořadí v jakém se metrika zobrazí uživateli v rámci ostatních definovaných metrik při vizualizaci heatmapy, která se pak uživatelům nabízí pro provedení konkrétních ohodnocení.
- **Vstupní data** – lze zvolit, v jakém formátu bude uživatel zadávat vstupní data pro daný parametr a v jakém rozsahu *OD* (minimum) *DO* (maximum), k dispozici jsou volby:
  - *Hodnota* – uživatel může zadat jednu konkrétní hodnotu v rozsahu *OD-DO*
  - *Hodnota (rozmezí)* - uživatel může zadat více hodnot v rozsahu *OD-DO* v rámci definovaných pásem (viz níže)
  - *Procenta* – uživatel může zadat jedno konkrétní procento v rozsahu *OD-DO*
  - *Procenta (rozmezí)* - uživatel může zadat více procent v rozsahu *OD-DO* v rámci definovaných pásem (viz níže)
- **Popis** – volitelná poznámka s doplňujícím popisem k názvu. Tyto popisky se pak mohou zobrazit uživateli, pokud při hodnocení podrží ukazatel myši nad příslušným polem heatmapy reprezentujícím předdefinovanou hodnotu v daném pásmu.

![Definice metrik hodnocení](/img/placeholder/16_hodnoceni_zobrazeni-popisu-k-nazvu.png)
**Pásmové rozmezí** – definice pásem, v rámci kterých budou zadávána vstupní data pro daný parametr. Pásma lze přidávat pomocí symbolu "**+**" a odebírat kliknutím na symbol koše v pásmu, které se má odstranit.    
Pro každé pásmo lze definovat hodnotu (nebo procento, podle toho, jaký formát vstupních dat byl zvolen v předchozím kroku) a k této hodnotě (nebo procentu) zvolit úroveň, kterou má tato hodnota reprezentovat, včetně přednastavené barvy, kterou bude zobrazena v heatmapě. K výběru jsou tyto předdefinované úrovně hodnocení: *Nulové, Velmi nízké, Nízké, Velmi malé, Malé, Střední, Významné, Velmi významné, Vysoké, Velmi vysoké, Kritické*. Pro všechny tyto úrovně lze definovat vlastní názvy aktivací volby Definovat vlastní názvy. Lze k nim také doplnit volitelnou poznámku aktivací volby Doprovodný popis.    
:::note
Na obrázku níže je prezentován příklad výsledné definice pásem hodnocení pro jeden z parametrů hodnocení aktiv – *Integrita*. Na dalším obrázku pak příklad možného vzorce výpočtu hodnoty aktiva, který vedle integrity zahrnuje další 2 hodnocené parametry – *Důvěrnost* a *Dostupnost*.
:::
![Definice pásem ve schématu hodnocení](/img/placeholder/16_nastaveni_hodnoceni_pasma.png)

- **Vzorec výpočtu hodnocení** – výsledné skóre hodnocení se spočte na základě vstupních dat, která uživatel vybere z předdefinovaných hodnot pro jednotlivá pásma hodnocení. Vzorec je uživatelsky definovatelný. V rámci jeho definice lze použít všechny metriky definované v předchozím kroku a s nimi provádět základní operace, jako jsou sčítání, odčítání, násobení, dělení, funkce zaokrouhlení nahoru (*Round Up*), zaokrouhlení dolů (*Round Down*), vyhledání maxima z množiny hodnot (*MAX*), vyhledání minima z množiny hodnot (*MIN*). Použít lze přitom závorky, čárky pro oddělení hodnot při použití funkcí nebo libovolný celočíselný koeficient pro úpravu celého výpočtu.
![Definice vzorce ve schématu hodnocení](/img/placeholder/16_nastaveni_hodnoceni-vzorec-definice.png)
:::note
Použití základních funkcí:
  - *MAX* (3,4,5) = 5
  - *MIN* (3,4,5) = 3
  - *Round Up* (1.4) = 2
  - *Round Down* (1.6) = 1
:::
Tlačítko ***Zkontrolovat*** provede kontrolu logické správnosti celého definovaného vzorce a oznámí, zda je matematicky správný nebo zda obsahuje chybu. Bez provedené kontroly nelze schéma hodnocení uložit.
![Kontrola vzorce ve schématu hodnocení](/img/placeholder/16_nastaveni_hodnoceni_vzorec-zkontrolovat.png)
Výsledné pásmové hodnocení je heatmapa, která může zobrazovat jednoduché jednorozměrné hodnocení pouze v jedné ose X.
Anebo může také kombinovat pásmová hodnocení v ose X a v ose Y v podobě dvourozměrné heatmapy – viz příklad na obr. níže. V takovém případě jsou definovány vzorce tři. Jeden, obsahující parametr/parametry v ose X, druhý, obsahující parametr/parametry v ose Y a třetí (tzv. *Matice*), který kombinuje výsledky výpočtu předchozích dvou (*Osa X celkem, Osa Y celkem*).
:::note
Vzorec výpočtu hodnocení pro sestavení dvojrozměrné heatmapy v rámci hodnocení rizik dle Zákona o kybernetické bezpečnosti.
:::
![Definice heatmapy s výpočtem skóre ve schématu hodnocení](/img/placeholder/16_hodnoceni_priklad-pro-osu-x-a-y.png)
#### 16.1.5	Reporty
Správce aplikace zde má k dispozici prostředí pro tvorbu vlastních reportů s využitím standardních technologií JavaScript, GraphQL, Handlebars, CSS. Pro každý report lze také zapnout/vypnout přepínač Aktivní, aby mohl tvůrce reportu rozlišit reporty, které jsou např. ještě rozpracované, od těch, které jsou již hotové a mohou se uživatelům nabízet. Pro každý report lze navíc nastavit omezení jen na vybrané uživatelům či role, pro které má být report dostupný.
### 16.1.6	Data
Záložky ***Export*** a ***Import*** v sekci ***Administrace – Nastavení – Data***, slouží pro zálohu a obnovu dat v aktuálním účtu Zoty.
Tato volba není dostupná, je-li aplikace Zoty provozována v cloudu, jako služba (Zoty cloud), kdy jsou data zálohována automaticky na denní bázi. Obnovení dat z databáze je pak provedeno na základě zákazníkova požadavku založeného v aplikaci Zoty Helpdesk nebo zaslaného na e-mail adresu hotline podpory: helpdesk@zoty.cz.
Pokud je aplikace Zoty provozována na vlastním serveru zákazníka (Zoty on-premise), je zálohování dat uložených v PostgreSQL databázi plně v režii a odpovědnosti zákazníka. Zoty pak umožňuje uživateli v roli administrátora exportovat obsah databáze do souboru ve formátu JSON.

![Záloha a obnova dat](/img/placeholder/16_zalohovani.png)

Po exportu databáze do souboru lze soubor zpět naimportovat do Zoty účtu a data tak v databázi obnovit. Pokud se mezitím, tedy od posledního importu, v databázi některá data změnila, tak po aktivaci volby *Vynutit změny* se přepíší data v Zoty účtu, tzn. prioritu mají data v importovaném souboru. Volba *Odstranit data, která import neobsahuje*, odstraní v Zoty účtu všechna data, která nejsou nalezena v importovaném souboru.    
Záložka ***Spreadsheet*** importuje data různých typů entit (*Aktiva, Hrozby, Zranitelnosti, Rizika*) ze souborů formátu Excel.
Pro nové zákazníky, kteří si testují Zoty s demo daty, založili si v rámci testování v tomto účtu i svá data, která chtějí zachovat, ale demo demo data potřebují odstranit, slouží volba *Vyčistit* na záložce ***Demo***.    
Záložka ***ARIS*** importuje data z  databáze SW nástroje ARIS pro modelování a analýzu procesů.

V administraci účtu jsou v rámci příslušných záložek definovány organizace (a organizační jednotky), uživatelé, lidé a role.
#### 16.2.1	Organizace
Uživatel si může definovat, jaké organizace (společnosti, organizační složky či jiné subjekty) jsou součástí jeho organizační struktury. Zároveň pak k jednotlivým organizacím nebo organizačním jednotkám (např. oddělením) přiřadit uživatele, kteří do nich patří.
Jsou-li některá tato data spravována v externím systému, tak vyplněním atributu "ID externího zdroje dat" lze zajistit automatickou synchronizaci např. organizací a uživatelských účtů v Zoty a jejich přiřazení do té které organizace.
Pokud je pak štítkem s názvem zde definované organizace označena složka či entita, tak bude viditelná pouze pro ty uživatele, kteří jsou jejími členy (viz kapitola Oprávnění).

#### 16.2.2	Uživatelé
***Přehled*** zobrazuje seznam všech uživatelů, kteří mají přístup do aplikace Zoty. 
Symbol tří teček na konci každého záznamu zobrazí menu s možností upravit základní identifikační a přihlašovací údaje u vybraného uživatele, jemu přiřazené role, celý jeho účet odstranit nebo anonymizovat záznamy o něm za účelem plnění požadavků na ochranu osobních údajů (GDPR). 
Záložka ***Vizualizace*** pak poskytuje graf nejaktivnějších uživatelů podle celkového času, který strávili v aplikaci Zoty v aktuálním dni.

Lidé jsou osoby bez přístupu do aplikace Zoty. Tzn., že nemají vytvořen uživatelský účet, přesto se ale mohou nabízet pro vyplnění některých atributů entit, kde se očekává zadání výběrem i z těch osob, které nemusí být uživateli Zoty (přičemž se neřeší, zda se jedná o zaměstnance, externisty nebo jakékoliv jiné osoby).
#### 16.2.4	Role
Zde se zobrazují jak role předdefinované výrobcem (systémové role), tak role vytvořené uživatelem. V seznamu rolí se zobrazuje i atribut *Uživatelé* s číselným údajem o celkovém počtu uživatelů, kterým je daná role přiřazena. Kliknutím na tuto informaci se pak zobrazí výpis všech uživatelů s touto rolí.
Aby se zjednodušilo a částečně či zcela zautomatizovalo vyplňování metod, lze navíc jednotlivým rolím nastavit omezení pouze na *přiřazené metody*. A poté vybrat a přiřadit této roli, které metody z těch všech, jež jsou v Zoty definované, se mají uživateli nabízet pro výběr.
Nebo lze také metodu/metody rovnou předvybrat bez zásahu uživatele. Uživatel s takto nastavenými rolemi pak nebude muset z nabídky metod vůbec vybírat, protože se předvyplní automaticky ta/ty, které jsou zde nastaveny jako *předvybrané metody*. Žádné jiné metody pak nemůže zvolit.

## 16.3	Koš
Všechny smazané záznamy se přesouvají do koše, odkud je možné je obnovit nebo trvale smazat. V koši se zobrazuje název, datum odstranění a typ záznamu (*Složka, Hodnocení, Riziko, Hrozba* atp.).

![Koš](/img/placeholder/16_kos.png)

Na entity v koši se aplikují oprávnění dle rolí podobně, jako na entity mimo koš. Tzn., že zobrazit a/nebo odstranit či obnovit entitu z koše, může jen uživatel, který je u ní přiřazen jako *Správce*, pokud není *Správce* přiřazen, tak uživatel, který ji vytvořil. Role *Manažer* entit má oprávnění plného přístupu na všechny entity bez ohledu na to, kdo je vytvořil nebo kdo je jejich *Správce*, ale pouze za předpokladu, že je členem *Organizace*, která je entitě přiřazena. Toto pravidlo platí i pro ty entity, které již byly odstraněny do koše.

:::info
 Aplikace Zoty je neustále rozvíjena a vylepšována. Pokud naleznete jakýkoliv nesoulad této dokumentace s vaší aktuální verzí Zoty, napište nám prosím na helpdesk@zoty.cz.     
 Budeme vám vděční za veškeré podněty a připomínky.
:::