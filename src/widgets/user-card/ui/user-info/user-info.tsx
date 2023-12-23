import { memo } from 'react';
import InfoItem, { InfoItemProps } from 'shared/ui/info-item/info-item';
import { User } from 'shared/model/user';

import { ReactComponent as LocationIcon } from 'shared/ui/assets/icons/icon-location.svg';
import { ReactComponent as TwitterIcon } from 'shared/ui/assets/icons/icon-twitter-x.svg';
import { ReactComponent as BlogIcon } from 'shared/ui/assets/icons/icon-website.svg';
import { ReactComponent as CompanyIcon } from 'shared/ui/assets/icons/icon-company.svg';

import s from './user-info.module.scss';

interface UserInfoProps
  extends Pick<User, 'blog' | 'company' | 'location' | 'twitterUrl'> {}

function UserInfo({ blog, company, location, twitterUrl }: UserInfoProps) {
  const items: InfoItemProps[] = [
    {
      id: 1,
      icon: <LocationIcon />,
      text: location,
    },
    {
      id: 2,
      icon: <TwitterIcon />,
      text: twitterUrl,
      isLink: true,
    },
    {
      id: 3,
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      id: 4,
      icon: <CompanyIcon />,
      text: company,
    },
  ];

  return (
    <ul className={s.list}>
      {items.map((item) => (
        <InfoItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default memo(UserInfo);
