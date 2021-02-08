---
title: Tohovedede armbøjer (Biceps Brachii)
name:
  da: Tohovedede armbøjer
  latin: Biceps Brachii
  eng: Biceps
group:
  - Arme
joint:
  - Albueleddet
tags:
  - imagemap
  - fitnessinstruktør
  - muskel
function:
  da:
    - short: Flexes the arm at the elbow.
      extended: This means that the biceps brachii muscle bends the arm at the elbow joint such that there is a decrease in the angle between the forearm and the upper arm.
    - short: Supinates the forearm.
      extended: This is means that the biceps brachii muscle rotates the forearm outward (i.e. if your arms are hanging by your sides it is the action of turning your palms forward, or if you forearms are held horizontally it is the action of turning your palms upward).
    - short: Bøjning i skulderleddet
      extended: Biceps er med til at bøje skulderleddet, hvilket vil sige at føre overarmen fremad.
  en:
    - short: Flexes the arm at the elbow.
      extended: This means that the biceps brachii muscle bends the arm at the elbow joint such that there is a decrease in the angle between the forearm and the upper arm.
    - short: Supinates the forearm.
      extended: This is means that the biceps brachii muscle rotates the forearm outward (i.e. if your arms are hanging by your sides it is the action of turning your palms forward, or if you forearms are held horizontally it is the action of turning your palms upward).
    - short: Bøjning i skulderleddet
      extended: Biceps er med til at bøje skulderleddet, hvilket vil sige at føre overarmen fremad.
antagonist:
  - "Triceps Brachii"
origin:
  da: Skulderbladet
  latin: Scapula
  en: Scapula
insertion:
  da: Begge underarmsknogler
  latin: Ulna et radius
  en: Ulna and radius
last_modified_at: 2020-11-15T07:28:29+01:00
image_focus: /assets/images/anatomy/focus-biceps-brachii.jpg
image: /assets/images/anatomy/biceps-brachii.jpg
exercises:
  - Stående calf-raise
coords:
  - 193,120,209,132,223,143,230,159,229,170,216,167,202,149
  - 65,167,74,166,85,149,90,135,94,116,77,127,67,138,64,156
---

_{{ page.name.latin }}_

- **Udspring**: {{ page.origin.da }}
- **Hæfte**: {{ page.insertion.da }}

{% include figure image_path=page.image alt=page.title caption=page.title %}

## Funktion

{% for f in page.function.da %}
- **{{ f.short }}**.
  {{ f.extended | markdownify }}
{% endfor %}

{% include figure image_path=page.image_focus alt=page.title caption=page.title %}

{% comment %}
antagonist
muscleAction


<div itemscope itemtype="http://schema.org/Muscle">
  <h1 itemprop="name">Pectoralis major</h1>
  <div itemprop="alternateName">
    <em>Musculus pectoralis major</em>
  </div>
  <img itemprop="image" src="http://upload.wikimedia.org/wikipedia/commons/6/6c/Pectoralis_major.png" alt="Pectoralis major muscle" />
  <div itemprop="action">
    The pectoralis major has four actions which are primarily responsible for movement of the shoulder joint. The first action is flexion of the humerus, as in throwing a ball side-arm, and in lifting a child. Secondly, it adducts the humerus, as when flapping
    the arms. Thirdly, it rotates the humerus medially, as occurs when arm-wrestling. The pectoralis major is also responsible for keeping the arm attached to the trunk of the body. It has two different parts which are responsible for different actions.
    The clavicular part is close to the deltoid muscle and contributes to flexion, horizontal adduction, and inward rotation of the humerus. When at an approximately 110 degree angle, it contributes to abduction of the humerus. The sternocostal part is
    antagonistic to the clavicular part contributing to downward and forward movement of the arm and inward rotation when accompanied by adduction. The sternal fibers can also contribute to extension, but not beyond anatomical position.
  </div>
  <div>
    <strong>Nerve:</strong>
    <span itemprop="nerve" itemscope itemtype="http://schema.org/Nerve">
      <span itemprop="name">lateral pectoral nerve</span>
    </span> and
    <span itemprop="nerve" itemscope itemtype="http://schema.org/Nerve">
      <span itemprop="name">medial pectoral nerve</span>
    </span>
  </div>
  <div itemprop="insertion" itemscope itemtype="http://schema.org/Bone">
    <strong>Insertion:</strong> Lateral lip of the bicipital groove of the
    <span itemprop="name">humerus</span>
  </div>
  <div>
    <strong>Location:</strong>
    <span itemprop="bodyLocation">
      Clavicular head: anterior surface of the medial half of the clavicle.
      Sternocostal head: anterior surface of the sternum, the superior six costal cartilages, and the aponeurosis of the external oblique muscle.
    </span>
  </div>
</div>
{% endcomment %}