import React from 'react';
import PropTypes from 'prop-types';
import { mainLayoutStyles } from './MainLayout.styles';
import { Header } from '../Header/Header';
import { SecondaryHeader } from '../SecondaryHeader/SecondaryHeader';
import { Footer } from '../Footer/Footer';

function MainLayout({ children, isHeaderPrimary = true }) {
  const styles = mainLayoutStyles();
  const header = isHeaderPrimary ? <Header /> : <SecondaryHeader />;
  const socialNetworkIcons = [
    { text: '', link: 'https://twitter.com/harmlessMage' },
    { text: '', link: 'https://vk.com/id146364314' },
    { text: '', link: '#' },
  ];

  return (
    <div className={styles.root}>
      { header }
      <main className={styles.main}>
        {children}
      </main>
      <Footer
        text='If you notice any error, you can contact us via gmail: feonorabd2000@gmail.com or social networks'
        socialNetworkIcons={socialNetworkIcons}
      />
    </div>
  );
}

MainLayout.defaultProps = {
  children: [],
  isHeaderPrimary: false,
};

MainLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  isHeaderPrimary: PropTypes.bool,
};

export { MainLayout };
