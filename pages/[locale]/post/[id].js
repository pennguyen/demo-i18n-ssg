import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';

function Post() {
  const router = useRouter();
  const { t } = useTranslation(['second-page', 'common', 'footer'])
  const { id } = router.query;

  return (
    <div>
      <h3 style={{ minHeight: 70 }}>Post {id}</h3>
      <h2> {t('back-to-home')}</h2>
    </div>
  );
}

export default Post
const getStaticProps = makeStaticProps(['second-page', 'common', 'footer'])
export { getStaticPaths, getStaticProps }
