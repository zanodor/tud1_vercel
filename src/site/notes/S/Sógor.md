---
{"dg-publish":true,"permalink":"/S/Sógor/","title":"Sógor","created":"2024-11-08T15:26","updated":"2024-11-23T05:37"}
---


# Sógor

[[S/Social\|Social]] szónál is előjött. CzF elemzését (a német `schwager` = sógor szót nem említik) ignorálva Szag-Úr, Nap Úr értelme lehet. A Nap alatt mindenki egy és úr. A [[N/Nász\|nász]] által szerzett rokon (mint a [[K/Koma\|koma]]) még inkább kedves (volt).  
Sógor lehet napsógor, mint Ipolyi Arnold Magyar mythologia című könyvének 187. oldalán. (Sőt, [[B/Barát\|barát]] szavunkhoz hasonlóan valóban a Napra utalhat; bár akkor melyik csillag testvére lenne?)  

#### Kandra Kabos Magyar Mythologia...  

...című könyvében (a PDF 67. oldalán) talált info alapján viszont Sug-Úr = Szél Úr lehetne a jelentése:  
> Előbb láttuk, hogy az átmeneti magyar imádság a szép, ragyogó Napot "testvér"-nek tiszteli, a Holdat "asszonynénénk"-nek, a Csillagokat "hugaink"-nak, a Szelet "süvünk"-nek, sógornak, a Vizet "ángyikánk"-nak, a Tüzet "urunkbátyánk-nak, a Földet "nagyasszonyunk"-nak.  

Vesd össze a [[K/Koma\|koma]] és [[K/KUN\|KUN]] címnél szereplő spanyol `cuñado`/`cuñada` = sógor(nő) szavakkal; ott is Napnevek állnak.  

[[S/Sacchar-\|Sacchar-]] és [[S/Sugar\|sugar]] címnél hasonló sémi és közel-keleti szavakról volt szó: az akkád `zikaru` = férfi, héber `zakhár` = hím, férfi, az arab `zakar` (zekernek ejtik) = hím; hímtag értelműnek (vö. arab `ḏakar` = hímtag) megadott. A perzsa és urdu `shohar` = férj ugyanezen sémi szóforma kell legyen.  

```plantuml-svg
@startuml
left to right direction
skinparam BackGroundColor transparent
skinparam rectangle {
    BackgroundColor #ccbe78
}
skinparam card {
    roundCorner 15
    BackgroundColor #f9f5d7
}

rectangle "<b>sógor</b>" as sogor
card "magyar <color:#e7545c>nász</color>" as nasz
card "magyar <color:#e7545c>koma</color>" as koma
card "magyar <color:#e7545c>barát</color>" as barat
card "magyar <color:#e7545c>nap</color>" as nap
card "magyar <color:#e7545c>szél</color>" as szel
card "spanyol <color:#e7545c>cuñado</color>/<color:#e7545c>cuñada</color>" as cunadacunada
card "akkád <color:#e7545c>zikaru</color>" as zikaru
card "héber <color:#e7545c>zakhár</color>" as zakhar
card "arab <color:#e7545c>zakar</color>" as zakar
card "perzsa/urdu <color:#e7545c>shohar</color>" as shohar

sogor -- nasz : rokon
sogor -- koma : rokon
sogor -- barat : hasonlóság
sogor -- nap : napsógor
sogor -- szel : jelentés
sogor -- cunadacunada : napnevek
sogor -- zikaru : férfi
zikaru -- zakhar : férfi
zakhar -- zakar : hím(tag)
zakar -- shohar : férj

@enduml
```