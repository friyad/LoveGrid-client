export interface ICampaign {
  _id?: number;
  title: string;
  category: string;
  img: string;
  blurImg: string;
  color: string;
  totalDonations?: number;
  tlDonateAmount?: number;
  goal: number;
  fundRaiserName: string;
  fundRaiserPhoto?: string;
  lastDate: string;
  description: string;
}
