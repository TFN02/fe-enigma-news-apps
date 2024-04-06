import { HomeOutlined } from '@ant-design/icons';
import React from 'react';
import { Breadcrumb } from 'antd';
import { NAVIGATION } from '../../../../config/navigation';

const NewsBreadCrumb: React.FC<{activePage: React.ReactNode}> = ({activePage}) => (
  <Breadcrumb
    items={[
      {
        href: NAVIGATION.NEWS_LIST,
        title: <HomeOutlined />,
      },
      {
        title: `Article Detail`,
      },
      {
        title: activePage,
      },
    ]}
  />
);

export default NewsBreadCrumb;