<?php
$now = time();
$birthDate = strtotime('2002-04-10');
$age = dateDiff($now, $birthDate);
?>

<section id="a-propos-de-moi">
  <h1 class="title">à propos de moi</h1>
  <hr class="separator">
  <article class="paragraph">
    <p>J'ai <?= $age ?> ans, je suis originaire de la Normandie et j'habite actuellement dans la Manche dans la commune du Petit-Celland.
      <br><br>
      Passionné par le fonctionnement des jeux vidéo, je me forme sur des logiciels tel que Blender.
      <br><br>

      Aussi passionné par le fonctionnement des programmes informatiques, j’ai appris les bases du Php et JavaScript que j’ai approfondi de manière autonome depuis plusieurs années. Je me suis entraîné à réaliser de petits programmes de plus en plus complexes en fonction de mes connaissances. J'ai par la suite poursuivi mes études en BTS Services Informatiques aux Organisations (SIO) option B Solutions Logicielles et Applications Métiers (SLAM).

      <br>

      C'est en ayant alimenté mon envie naturelle de connaissances en la matière que je déciderai d'en faire plus tard mon métier.
      En dehors de ma passion pour les jeux et l'informatique, je suis quelqu'un qui dessine beaucoup.
      Je suis également passionné de mangas et de dessin animés.
    </p>
    <a href="#formation"><button type="button" name="btnNext" class="btnNext">Découvrir mes formations</button></a>

  </article>

  <article class="paragraph">
    <p>
      J'ai intégré un Bac Pro au lycée Thomas Pesquet à Coutances (50) et j'ai obtenu mon Baccalauréat Professionnel Technicien d'Études du Bâtiment (TEB) option B Assistant en Architecture (AA).

      <br><br>

      Suite à mon Bac Pro j'ai été faire un BTS SIO au lycée Notre Dame de la Providance à Avranches (50). Pour la suite j'ai décidé de ne plus poursuivre d'étude mais de travailler dans le domaine de l'informatique et/ou du jeu vidéo.
    </p>
    <a href="#competences"><button type="button" name="btnNext" class="btnNext">Découvrir mes compétences</button></a>
  </article>

  <h1 class="center">- Mes qualités -</h1>

  <br>

  <div class="qualites">
    <div class="content">
      <h2>Créatif</h2>
      <br><br>
      <img src="public/img/crea.png" alt="Créatif">
    </div>

    <div class="content">
      <h2>Énergique</h2>
      <br><br>
      <img src="public/img/ener.png" alt="Énergique">
    </div>

    <div class="content">
      <h2>Curieux</h2>
      <br><br>
      <img src="public/img/curi.png" alt="Curieux">
    </div>
  </div>
</section>