import React from 'react';
import './About.css';
import content from '../../../Video/content_vid.mp4';


export default function About() {

    return (
        <div className='About'>
            <div className="pull-right">
            </div>
            <article>
                <header>
                    <h1 className="page-title">A propos</h1>
                </header>
                <div className="about">
                    <p>
                        Nous savons que la confiance ne suffit pas,
                        c'est pourquoi nous avons décidé
                        de vous transmettre la totalité de nos recherches
                        ainsi que les dates clef qui permet de données
                        une raison valable d'investir
                        sur l'actif au moment opportun.
                    </p>
                    <p>
                        N'investissé plus à l'aveugle !
                        Chaque investissement que  vous allez
                        faire sur notre site et prouvé par le
                        partage d'informations et cette information
                        permet la compréhension des raison de vos investissement.
                    </p>
                    <div className='pull-left'>
                        <h3>Se renseigner c'est éviter le pire.</h3>
                        <video autoPlay loop muted={true}>
                            <source src={content} type='video/mp4' />
                        </video>
                        <br />
                        <br />
                        <h3>Premier conseil</h3>
                        <p>
                            N'investissé plus à l'aveugle ! Chaque investissement que  vous allez faire sur notre site et prouvé par le partage d'informations et cette information permet la compréhension des raison de vos investissement.
                        </p>
                        <br />
                        <h3>L'intéret de nôtre offre</h3>
                        <p>
                            Chaque crypto ou action acheter à la suites d'un conseil chez LMK-META sera accompagné d'une information et d'une dates des événement qui  contribueront à une potentiel augmentation de l'actif de même ,l'offre comprend  l'accès aux informations que nos experts auront collecté de part leur recherche.
                        </p>
                    </div>


                    <h3>Nôtre enagement envers vous</h3>
                    <p>
                        LMK META vous confirme votre paiement d'un montant de
                        chaque case crypto ou action
                        (Investissez sur cette actif pour faire du bénéfice rapidement profité d'une rentabilité pouvant allée jusqu'à 30% avec un investissement de 500 euros minimum fortement conseiller ).
                    </p>

                    <h3>Un exemple ? </h3>
                    <p>
                        Date déclencheur : Le 9 octobre 2021 le fan Token du club de football la juventus était à son comble<br />
                        <br />
                        Raison : à cette même dates le club discuté une rencontre avec un club adverses, alexandria le 9 octobre 2021<br />
                        <br />
                        Avis d'expert : Nous étions d'avis à vous conseiller d'investir sur ce club avant l'augmentation, à la dates du 9 octobre 2021 dû à la réputation du club et les statistiques pris en compte par nos experts ,plus de trois fois sont prix à la dates du 19 juin 2022
                        <br /><br />
                        Ceci n'est qu'un exemple parmi tant d'autres peu importe le domaine de l'action ou de la crypto c'est trois informations vous permettront de gérer vos investissements et de réduire les pertes de part des mise hasardeuses .
                        En général il vous sera conseillé d'investir de quelques heure à quelque année avant la dates déclencheur
                        <br /><br />
                        4 crypto vous sont proposés et son mise à jours sur notre site
                        quotidiennement selon si la crypto aurait du potentielle prochainement.
                        <br /><br /><br />

                        A ce moment le client devra investir en baisse quelque jour , quelque mois ou quelques année avant la dates de cette événement qui aura potentiellement un effet haussier sur l'actif
                        <br /><br />
                        Cela peut être dû à une raison géopolitique, une simple inauguration d'un produit de la marque, en passant par une nouvelle série sortie pour le cas de l'action Netflix par exemple ,ou l'anniversaire des 10 ans d'une entreprise c'est le cas pour l'action
                        Nestlé: une hausse c'est fait observer le 29 décembre 2021car l’entreprise fêtait ses 10 ans.
                        <br /><br />
                        On collecte le plus possible d'événement de la sorte pour mener à bien vos investissement
                        <br /><br />
                        Ce qui permet au client d'avoir une raison  précise pour laquelle nous lui conseillons d'investir sur cette actif
                        Ainsi qu'un avis de la part de nos experts
                        <br /><br />
                        Un concept unique pour un investissement unique
                    </p>
                </div>
            </article>
        </div>
    )
}
