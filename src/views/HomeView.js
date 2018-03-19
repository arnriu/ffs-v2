import React from 'react';
import { translate } from 'react-i18next';

const HomeView = ({t}) => (
    <article>
        <h2>
            Fight for <strong>Sub</strong>
        </h2>
        <section className="mt-5">
        	<h3>{t('home.titles.whatIsIt')}</h3>
            <p>
                {t('home.paragraphs.game')}
            </p>
            <p>
                {t('home.paragraphs.sub')}
            </p>
        </section>
        <section className="mt-5">
        	<h3>{t('home.titles.rules')}</h3>
            
            <h4>
                {t('home.titles.basicRules')}
            </h4>
            <ul className="mb-5 styled-list">
        	{t('home.paragraphs.rules', { returnObjects: true }).map((i, index) =>
        		<li key={index}>{i}</li>
        	)}
            </ul>
            
            <h4>
                {t('home.titles.handicap')}
            </h4>
            <ul className="styled-list">
            {t('home.paragraphs.handicaps', { returnObjects: true }).map((i, index) =>
            	<li key={index}>{i}</li>
            )}
            </ul>
        </section>
    </article>
)

export default translate()(HomeView);