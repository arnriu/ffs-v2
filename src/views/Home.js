import React from 'react';
import { translate } from 'react-i18next';

const Home = ({t}) => (
    <article>
        <header>
            <h2>
                Fight for <strong>Sub</strong>
            </h2>
        </header>
        <section>
        	<h2>{t('home.titles.whatIsIt')}</h2>
            <p>
                {t('home.paragraphs.game')}
            </p>
            <p>
                {t('home.paragraphs.sub')}
            </p>
        </section>
        <section>
        	<h2>{t('home.titles.rules')}</h2>
            <h3 className='subheading title-blue'>
                {t('home.titles.basicRules')}
            </h3>
            <ul>
        	{t('home.paragraphs.rules', { returnObjects: true }).map((i, index) =>
        		<li key={index}>{i}</li>
        	)}
            </ul>
            <h3 className='subheading title-green'>
                {t('home.titles.handicap')}
            </h3>
            <ul>
            {t('home.paragraphs.handicaps', { returnObjects: true }).map((i, index) =>
            	<li key={index}>{i}</li>
            )}
            </ul>
        </section>
    </article>
)

export default translate()(Home);