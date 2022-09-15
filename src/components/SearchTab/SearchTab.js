import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchTab.module.css';
import { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

const SearchTab = () => {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <>
    <div class="container">
      <MDBTabs className='mb-3'>
        <MDBTabsItem >
          <MDBTabsLink className={styles.tabItems} onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            Expert Sourced
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink className={styles.tabItems} onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Document Sourced
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>Tab 1 content</MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
      </MDBTabsContent>
      </div>
    </>
  );
}

SearchTab.propTypes = {};

SearchTab.defaultProps = {};

export default SearchTab;
