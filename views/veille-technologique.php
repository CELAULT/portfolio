<div id="veille-technologique">
    <h1 style="text-transform: uppercase;">Veille technologique</h1>
    <hr class="separator">

    <div class="container">
        <div class="article">
            <h2>L'informatique quantique</h2>
            <br>
            <p>
                L'informatique quantique est le sous-domaine de l'informatique qui traite des calculateurs
                quantiques utilisant des phénomènes de la mécanique quantique, par opposition à ceux de
                l'électricité exclusivement, pour l'informatique dite "classique".
            </p>
            <br>
            <p>
                L'ordinateur quantique va ainsi exploiter l'intrication entre les qubits et les probabilités
                associées aux superpositions pour effectuer une série d'opérations, de telle sorte que
                certaines probabilités soient augmentées (c'est-à-dire celles des bonnes réponses) et d'autres
                diminuées, voire nulles.
            </p>
            <br>
            <p>
                La Chine a créé un ordinateur quantique 10 millions de fois plus puissant que Google. La Chine
                annonce un nouvel ordinateur quantique aux performances inouïes. Cette machine serait 10
                millions de fois plus rapide que le Sycamore de Google, considéré jusqu'à présent comme
                l'ordinateur quantique le plus puissant.
            </p>
            <br>
            <p>
                Les ordinateurs classiques traitent de l'information binaire, des 1 et des 0. L'informatique
                quantique va plus loin, grâce aux qubits, qui peuvent être à la fois 1 et 0. Cette faculté est
                ce que l'on appelle la superposition, un des avantages premiers de l'informatique quantique.
                <br> <br>
                Jusqu'ici en 2021, les start-up du secteur ont levé environ 900 millions d'euros dans le monde,
                soit plus de quatre fois la somme levée en 2020, selon l'institut Xerfi. Le marché global de
                l'informatique quantique est aujourd'hui estimé à environ 120 millions d'euros.
            </p>
        </div>


        <div class="containerArticles">
            <h2>Articles</h2>
            <div class="grid">
                <?php
                $rss_link = "http://news.google.com/rss/search?q=informatique%20quantique&hl=fr&gl=FR&ceid=FR%3Afr";
                $rss_load = simplexml_load_file($rss_link);

                foreach ($rss_load->channel->item as $item) {
                ?>
                    <div class="article">
                        <a href="<?= $item->link ?>">
                            <span class="title">
                                <b><?= $item->title ?></b>
                            </span>
                        </a>

                        <br>

                        <span class="despriction">
                            <?= strip_tags($item->description) ?>
                        </span>

                        <br><br>
                    </div>
                <?php
                }
                ?>
            </div>
        </div>
    </div>
</div>