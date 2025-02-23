---
{"dg-publish":true,"permalink":"/F/Feather/","title":"Feather","created":"2024-04-18T14:58","updated":"2025-01-22T17:37"}
---


# Feather

Toll. [[F/Föd\|Fed]] igénkből állapítja meg eredni...

#### Magyar Adorján:  

> Továbbá, kétségtelen hogy a keta `petar` = toll szó azonos a német szintén tollat jelentő `Feder` szóval, csakhogy a pet- szótő (amely besenyő szócsoportunkbeli) azonos a pad szavunkkal, amely régebben deszka jelentésű volt de eredetileg bizonyára laposságot általában jelentett, mert a finnben ma is `paate` = lapos kő, kőlap, `peitto` pedig = takaró; úgyhogy észre kell vennünk miszerint a [[F/Föd\|fed]], [[F/Föd\|föd]] = [[T/Takar\|takar]], betakar igénk, valamint a fedél, fődél főnevünk is ide tartozik, habár ezekben p helyett f hang van, ugyanúgy mint a német `Feder` szóban. Márpedig az r és l mássalhangzók is egymással majdnem azonosak lévén, eszerint a magyar fedél szó is majdnem azonos a német `Feder` szóval. Minden egyes toll is pedig lap, lep lévén, mi más tehát a madár tolla mint teste fedője, takarója, belepője, leple, leplezője.  
- A Magyar Adorján által eredetileg egy t-vel írott, általam már a szövegben javított finn peitto szóhoz hozzátehető, hogy a finn `pelto` = föld, mely szintén eltakar, ha elhantolnak. Nyilvánvaló, hogy a helyzet ugyanaz, mint a Bianca – Blanka esetében.

`Fodor` szóval veti össze CzF:  
> FODOR (1)  
>  (fod-or v. fo-dor) fn. tt. fodort v. fodrot, tb, fodrok. Toll vagy csiga, s töltsér alakuvá nem tömötten, csak könnyűdeden, mintegy lebegő módon göngyölített valami, például hajfodor; fodrok az üngön; némely növények levélfodrai; fodrokból csinált gallér.  
>  A mennyiben e szó általán lebegő formát v. alakot jelent, rokonok vele különösebben a német `Feder`, izlandi `fiödur`, hellen `pteron`, `pterux`, (toll, szárny, s általán lebegő test vagy valamely testnek lebegő része) stb.  

  

Hasonló szó még a [[F/Fátyol\|fátyol]], mely égjelkép. Az égen sok madár ([[H/Hattyú\|hattyú]], [[L/Liba\|liba]], [[L/Lúd\|lúd]]) Tejút-jelkép. A tollak a ködfoltok lehetnének.  
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
rectangle "<b>Feather</b>" as Feather
card "<color:#e7545c>petar</color>" as petar
card "<color:#e7545c>Feder</color>" as Feder
card "<color:#e7545c>paate</color>" as paate
card "<color:#e7545c>peitto</color>" as peitto
card "<color:#e7545c>pelto</color>" as pelto
card "<color:#e7545c>Fodor</color>" as Fodor
card "<color:#e7545c>fiödur</color>" as fiödur
card "<color:#e7545c>pteron</color>" as pteron
card "<color:#e7545c>pterux</color>" as pterux
Feather -- petar : keta "toll"
Feather -- Feder : német "toll"
Feather -- paate : finn "lapos kő, kőlap" (laposság)
Feather -- peitto : finn "takaró"
Feather -- pelto : finn "föld" (eltakar)
Feather -- Fodor : összehasonlítás
Feather -- fiödur : izlandi "lebegő"
Feather -- pteron : hellen "toll, szárny, lebegő"
Feather -- pterux : hellen "toll, szárny, lebegő"
@enduml
```