import { CustomCard } from 'common/card';
import './style.scss';

import AwsCpBadge from 'assets/certifications/aws_cp.png';
import Isc2CcBadge from 'assets/certifications/isc2_cc.png';

export const Certifications = () => {
  return (
    <div className="certifications-container">
      <CustomCard
        maxWidth="220px"
        image={AwsCpBadge}
        text="AWS Certified Cloud Practitioner"
        link="https://www.credly.com/badges/5c284837-22b2-4cdc-93b6-a4b76bd2e4e4/linked_in?t=s5iq3g"
      />
      <CustomCard
        maxWidth="220px"
        image={Isc2CcBadge}
        text="ISC2 Certified in Cybersecurity"
        link="https://www.credly.com/badges/b8b1e315-4f5b-4f82-8e6d-75d9fd810b92/linked_in?t=s4yh44"
      />
    </div>
  );
};
