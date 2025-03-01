---
title: &title "Fysikken og kræfterne bag et vertikalt spring"
seo_title: "Hvad er fysikken og kræfterne bag det vertikale spring?"
permalink: /fysik-vertikalt-hop/
language: da
header:
  teaser: https://images.unsplash.com/photo-1613122707153-070406e9fd27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=300&w=400&q=10
category:
  - Træning
  - Springtræning
tags:
  - spring
  - beregner
  - fysik
last_modified_at: 2021-11-19T08:14:14Z
toc: true
meta:
  name: Udregn hoppehøjde fra afsætshastighed
  equipment: hoppemåtte
  measures: hoppehøjde
  type: spring
---

Det vertikale hop er et rigtig godt eksempel på fysikkens love. Her kan du virklig lære noget om sammenhængen mellem hastighed, acceleration, kræfter og svævetid. Det er særlig interessant, når man har adgang til en kraftplatform, som vi har på Vejle Idrætshøjskole.

I dette indlæg kigger vi på fem faser i det vertikale spring, og vi kigger på hvordan de fysiske love virker i de enkelte faser. Jeg har baseret dette indlæg på en rigtig god artikel på [www.thehoopsgeek.com](https://www.thehoopsgeek.com/the-physics-of-the-vertical-jump/).

**Læs**: [Fysikkens love og det horisontale spring](/fysik-horisontalt-hop/)
{: .notice }

## Kræfter der påvirker springeren

Når du springer, så vil du i dit afsæt påvirke jorden med den kraft du kan sætte af med. Men samtidig vil jorden påvirke dig med de modsatrettede kræfter.

Fænomenet er beskrevet i [Newtons love](https://da.wikipedia.org/wiki/Newtons_love), og mest præcist Newtons 3. lov.

> Et legeme a, der påvirker et legeme b med en kraft, vil blive påvirket med en lige stor modsat rettet kraft.
>
> --- <cite>[Wikipedia](https://da.wikipedia.org/wiki/Newtons_love)</cite>

Så når du påvirker jorden med en bestemt kraft, så vil du blive påvirket af en lige så stor modsatrettet kraft.

## Analyse på kraftplatform

Det er derfor du kan bruge en kraftplatform til at analysere spring. På kraftplatformen kan du se, hvor meget kraft, hvor hurtigt og hvor længe atleten udøver kraft.

I denne Youtube-video kan du se et eksempel på et spring og se de målte kræfter i forhold til springet.

{% include video provider="youtube" id="qN3apht8zRs" %}

I denne Youtube-video kan du få en god gennemgang af, hvad der sker i hoppet.

{% include video provider="youtube" id="Aa7cSOUwTDQ" %}

## Analyse af kræfterne i det vertikale hop

I det følgende kigger vi på relationerne mellem kraften, accelerationen, hastigheden og højden af et vertikalt spring. Vi tager udgangspunkt i en kraftplatformanalyse, fordi det er et godt eksempel på, hvordan fysikkens love kan ses i praksis i et spring.

{% include figure image_path="/assets/images/blog/vertical-jump-forces-1.png" %}

## Fase 1. Før hoppet

Før hoppet kan man se, at kraftplatformen påvirkes af en lige linje, som har en kraft på 981 Newton. Atleten bevæger sig ikke endnu, så hvor kommer denne kraft fra?

Det er naturligvis tyngdekraften, der trækker atleten ned mod jorden. Kraften er forklaret i denne formel.

{% include motionsplan/math formula="F = m * g" %}

Her er <em>m</em> atletens masse, og <em>g</em> er accelerationen fra tyngdekraften.

<em>F</em> er den kraft, som atleten bliver nødt til at overkomme bare for at neutralisere tyngdekraften og bevæge sig overhovedet. Vi ved at <em>g</em> er lig med 9,81 m/s<sup>2</sup>. Derfor kan vi opstille følgende formel:

{% include motionsplan/math formula="981 N = m * 9.81 m/s^2 \\ \\ => m = \frac{981N}{9.81 m/s^2} = 100kg" %}

Inden atleten bevæger sig er kraftplatformen egentlig en en simpel vægt, som fortæller størrelsen af kraften, som tyngdekraften påvirker atleten med.

## Fase 2. Nedadgående bevægelse før hoppet

### 1. Acceleration i nedadgående bevægelse

I denne fase er der en nedadgående bevægelse, hvor atleten bøjer i knæene og gør sig klar til at springe ved at sænke tyngdepunktet. Nu registrerer kraftplatformen kræfter, som er mindre end tyngdekraften. Det betyder, at atleten har en nedadgående acceleration.

Det kan beskrives med denne formel:

{% include motionsplan/math formula="F_{Jumper} = F_{GRF} - F_{Gravity}" %}

Det er interessant, når man analyserer et hop, hvor hurtigt den nedadgående bevægelse foregår. Kan vi beregne det fra resultaterne fra kraftplatformen?

Vi ved:

{% include motionsplan/math formula="F = m a => F t = m a t" %}

F er ikke konstant undervejs, men en funktion af tiden og <em>v = a * t</em>. Det giver os følgende formel:

{% include motionsplan/math formula="=> \int_{t_1}^{t_2} F_{Jumper}(t) \mathrm{d}t = m v" %}

Her er <em>F<sub>Jumper</sub>(t)</em> er forskellen mellem de registrerede kræfter fra jorden og tyngdekraften. Dette kan udregnes fra data på kraftplatformen. Det nedadgående impuls er altså området under tyngdekraften.

{% include figure image_path="/assets/images/blog/vertical-jump-forces-2-1.png" %}

Hvis vi antager at impulset bliver -70 Ns, så kan vi konkludere at:

{% include motionsplan/math formula="\int_{t_1}^{t_2} F(t) \mathrm{d}t = m v \\ \\ \\
=> -70 N s = 100kg * v \\ \\ \\
=> v = -70 N s / 100kg = -0.7 m/s" %}

Atleten opnår altså den højeste hastighed på -0,7 m/s i den nedadgående bevægelse før hoppet.

### 2. Deceleration af den nedadgående bevægelse

Indtil nu har vi kigget på forspændingen i hoppen i den nedadgående acceleration. Det er let at identificere denne fase, som ligger under tyngdekraften.

Atleten er nødt til at decellere den nedadgående bevægelse for at opnå en ganske kort pause nederst i forberedelsen til afsættet.

Decelerationen af bevægelsen er lidt vanskeligere nøjagtigt at finde, men hvordan identificerer vi den i grafen fra kraftplatformen?

I den nedadgående bevægelse oparbejdede vi et impuls på -70 Ns. Nu skal vi finde et impuls i den modsatte retning. Vi kan beskrive impulset sådan her:

{% include motionsplan/math formula="\int_{t_2}^{t_3} F_{Jumper}(t) \mathrm{d}t = 70 Ns" %}

<em>F(t)</em> og <em>t₂</em> er kendte. Nu kigger vi efter <em>t<sub>3</sub></em>, hvor impulset er lig med 70 Ns.

Det kan illusteres i grafen, hvor vi kigger efter <em>t<sub>3</sub></em>, så vi har et område under grafen, som også er 70 Ns.

{% include figure image_path="/assets/images/blog/vertical-jump-forces-2-2.png" %}

## Fase 3. Opadgående bevægelse før afsættet

Denne fase begynder i bunden af hoppet lige som atleten begynder at sætte af med en kraftfuld bevægelse opefter. I grafen kan du se, at atleten kort efter at have været på det laveste sted i hoppet opnår de højeste kræfter. Accelerationen fortsætter opefter indtil fødderne forlader platformen, og der ikke længere kan måles kræfter i platformen.

{% include motionsplan/math formula="\int_{t_3}^{t_4} F_{Jumper}(t) \mathrm{d}t = m v" %}

Dette integral kan illustreres som det gule område i målingen fra kraftplatformen.

{% include figure image_path="/assets/images/blog/vertical-jump-forces-3.png" %}

Dette område kan i dette eksempel udregnes til 245 Ns. Derfor kan vi udregne afsætshastigheden til:

{% include motionsplan/math formula="245 N s = 100kg * v \\ \\ \\
=> v = 245 N s / 100kg = 2.45 m/s" %}

## Fase 4. Svævefasen

I denne fase kan atleten ikke længere påvirke tyngdepunktet. Højden af hoppet er nu forudbestemt af den hastighed atleten kunne bygge op under afsættet. Den eneste kraft der virker på atleten er nu tyngdekraften.

Når nu atleten ikke længere kan påvirke tyngdepunktet. Så kan vi estimere den samlede hoppehøjde. Vi kender <em>v(0)=2.45 m/s<sup>2</sup></em> og vi kender tyngdekraften på a=9.81m/s<sup>2</sup>.

Vi ved også, at hastigheden i toppen af hoppet nødvendigvis må være 0, ellers ville atleten jo blive ved med at komme højere og højere op.

{% include motionsplan/math formula="v(t_{peak})=0" %}

Når vi kender hastigheden ved afsættet og tyngdekraften, så kan vi udregne hastigheden på alle tidspunkter i i hoppet sådan her.

{% include motionsplan/math formula="v(t)=v(0) -a * t " %}

Derfor kan vi også udregne, hvornår springeren er på det højeste punkt i springet (hvor hastigheden er 0).

{% include motionsplan/math formula="v(t_{peak}) = v(0) - a * t_{peak} \\ \\
=> 0 = v(0) - a * t_{peak}" %}

{% include motionsplan/math formula="=> t_{peak} = \frac{v(0)}{a} = \frac{2.45m/s}{9.81m/s^2} = 0.25s" %}

Når vi kender hastigheden <em>v(t)</em> på hvert tidspunkt af hoppet, og vi kender tiden inden springeren er på det højeste punkt i hoppet efter 0,25 sekunder, så kan vi udregne hoppehøjden som et integral af hastigheden over den tid, det tager at opnå det øverste punkt i springet.

{% include motionsplan/math formula="h_{jump} = \int_0^{\frac{v(o)}{a}} \bigg( v(o) - at \bigg) \ \mathrm{d}t= \\ \\= v(o)t \ - \ \frac{1}{2} at^2 \ \bigg|_0^{\frac{v(0)}{a}} \\ \\= v(0) \left(\frac{v(0)}{a}\right) - \frac{1}{2} a \left(\frac{v(0)}{a}\right)^2 \\ \\= \frac{v(0)^2}{a} \ - \ \frac{1}{2} \frac{v(0)^2}{a} \\ \\" %}

{% include motionsplan/math formula="=> h_{jump} \ = \ \frac{1}{2} \frac{v(0)^2}{a}" %}

Nu ender vi altså med en relativt simpel formel, som gør det muligt at beregne den vertikale hoppehøjde, hvis vi kender afsætshastigheden. I vores specifikke eksempel får vi:

{% include motionsplan/math formula="h_{jump} = \frac{1}{2} \frac{(2.45m/s)^2}{9.81 m/s^2} = 0.306m" %}

Du kan bruge denne beregner:

{% include calculator/calculate-jump-cmj-height-initial-velocity.html %}

Hvis du har en kraftplatform, så kan du altså relativt enkelt udregne hoppehøjden ud fra den indledende hastighed. Men er der andre måder du kan bruge fysik til at udregne din hoppehøjde.

### Udregn hoppehøjden fra svævetiden

Hvis du ikke kender kræfterne ved afsættet eller den oprindelige hastighed ved afsættet. Vi kender i stedet springerens svævetid, så kan vi bruge svævetiden i stedet.

Det er noget lettere at finde udstyr, som kan hjælpe os med at måle svævetiden. Vi kan enten få svævetiden fra en hoppemåtte eller ved at måle svævetiden med et _high speed_ kamera eller en smartphone. Det er bl.a. den teknologi, som bruges i [The Hoops Geek online måleinstrument](https://www.thehoopsgeek.com/measurement-app/).

{% include figure image_path="/assets/images/blog/thehoopgeek.jpg" caption="Du kan bruge [The Hoops Geek onlineredskab](https://www.thehoopsgeek.com/measurement-app/) til at måle hoppehøjde ud fra en video baseret på svævetiden." %}

I vores eksempel blev svævetiden udregnet til <em>t = 0,5 s</em>, men den kunne vi også aflæse.

Da vi kan udregne hoppehøjden for et spring, når vi kender den oprindelige hastighed ved afsætstidspunktet med denne formel.

{% include motionsplan/math formula="=> h_{jump} = \frac{1}{2} \frac{v(0)^2}{a}" %}

Hvis vi kan finde den oprindelige hastighed ved et spring, som har en svævetid på 0,5 sekunder, så kan vi altså udregne hoppehøjden. Hvis du springer 1 meter, så betyder det også, at du skal falde en meter igen efter, at du har opnået toppunktet i springet.

Hastigheden er en lineær funktion <em>(v=a * t)</em>. Derfor opnår springeren toppunktet nøjagtigt i midten af springet. Det giver os følgende sammenhæng:

{% include motionsplan/math formula="t_{peak} = 0.5 * t_{hangtime}" %}

Så hvis vi gerne vil vide, hvor højt en med en svævetid på 0,5 sekunder hoppede, så skal vi bare udregne hvor langt et fritfaldende objekt falder i halvdelen svævetiden. Personen falder altså ned mod jorden igen på halvdelen af 0,5 sekunder, nemlig 0,25 sekunder.

Den generelle formel for fritfaldende objekter er:

{% include motionsplan/math formula="S = \int_0^{\frac{1}{2} t_{hangtime}} v(t) \; dt \\ \\
= \int_0^{\frac{1}{2} t_{hangtime}} a * t \; dt \\ \\
= \frac{1}{2} a t^2 \; \bigg|_0^{\frac{1}{2}t_{hangtime}} \\ \\
= \frac{1}{2} a \left( \frac{1}{2} t_{hangtime} \right)^2 \\ \\
= \frac{1}{8} a \: t_{hangtime}^2 \\ \\" %}

I vores specifikke eksempel med en svævetid på 0,5 sekunder får vi følgende resultat:

{% include motionsplan/math formula="S = \frac{1}{8} a \: t_{hangtime}^2 = \frac{1}{8} * 9.81m/s^2 * 0.5^2 = 0.306m" %}

Hvis du kan finde din svævetid, så kan du altså udregne din hoppehøjde.

{% include calculator/calculate-jump-cmj-height.html %}

## Fase 5. Landingen

I afsættet skaber atleten en kraft, som er stor nok til at overkomme tyngdekraften, så vedkommende letter fra jorden. Vi har før vist, at hastigheden på toppunktet er 0 m/s, og det er let at vise, at hastigheden i landingen er den samme som i afsættet, men i den modsatte retning.

{% include motionsplan/math formula="\int_{t_4}^{t_5} F(t) \mathrm{d}t = m v(t_4) = m v(t_0)" %}

Impulset kan ses i den grønne del af grafen nedenunder.

{% include figure image_path="/assets/images/blog/vertical-jump-forces-5.png" %}

I vores eksempel har atleten accelereret fra en hastighed på <em>v(t<sub>0</sub>) = 0</em> til <em>v(t<sub>3</sub>) = 2.45 m/s<sup>2</sup></em> under afsættet. Under landingen skal atleten accelere fra en hastighed på <em>v(t<sub>4</sub>) = -2.45m/s<sup>2</sup></em> til en hastighed på <em>v(t<sub>5</sub>)=0m/s<sup>2</sup></em>.

Ændringen i hastighed v<sub>delta</sub> = 2.45m/s<sup>2</sup> er den samme i begge tilfælde, så impulset skal også være det samme. Det kan ses i grafen, at både det gule og grønne område er 245 Ns.

Nu står atleten igen stille efter hoppet, og de fem faser i hoppet er overstået.

## Formler til udregning af hoppehøjde

<details markdown="1" class="equation">
  <summary><h3 id="eq-1">Udregning af potentiel energi fra et spring</h3></summary>

{% include motionsplan/math formula="U = m * g * h = \frac{1}{2} m v(0)^2" %}

hvor <em>v(0)</em> er den oprindelige hastighed og <em>g</em> er tyngdeaccelerationen.
</details>
<details markdown="1" class="equation">
  <summary><h3 id="eq-2">Udregning af hoppehøjde ud fra oprindelige hastighed</h3></summary>

{% include motionsplan/math formula="h_{jump} = \frac{1}{2} \frac{v(0)^2}{g}" %}

hvor <em>v(0)</em> er den oprindelige hastighed og <em>g</em> er tyngdeaccelerationen.
</details>
<details markdown="1" class="equation">
  <summary><h3 id="eq-3">Udregne vertikal springhøjde ud fra svævetid</h3></summary>

{% include motionsplan/math formula="h_{jump} = \frac{1}{8} a \: t_{hangtime}^2" %}

hvor t<sub>hangtime</sub> er tiden mellem afsæt og landing og <em>a</em> er accelerationen fra tyngdekraften.
</details>
<details markdown="1" class="equation">
  <summary><h3 id="eq-4">Udregne vertikal springhøjde ud impuls-momentum-metoden</h3></summary>

{% include motionsplan/math formula="h_{jump} = \frac{1}{2} \frac{(\frac{I}{M})^2}{a}" %}

hvor

{% include motionsplan/math formula="I = \int_{start}^{takeoff}{\bigg(F_{Jumper}(t) - F_{gravity}(t) \bigg) dt }" %}

Hvor <em>I</em> er arealet under kraft-tid-kurven (minus tyngdekraften) fra starten af hoppet og indtil afsættet.
</details>

<details markdown="1" class="references">
  <summary><h2 id="references">Referencer</h2></summary>
  
- [The Physics of the Vertical Jump](https://www.thehoopsgeek.com/the-physics-of-the-vertical-jump/)
</details>
