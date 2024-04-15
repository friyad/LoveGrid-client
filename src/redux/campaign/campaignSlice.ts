import { ICampaign } from "@/types/campaignTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IProductStates {
  dashboardCampData: ICampaign[];
  dashIsHasMore: boolean;
  campaignData: ICampaign[];
  isHasMore: boolean;
}

const initialState: IProductStates = {
  dashboardCampData: [],
  dashIsHasMore: true,
  campaignData: [],
  isHasMore: true,
};

const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    setCampaignData: (state, action: PayloadAction<ICampaign[]>) => {
      state.campaignData = action.payload;
    },
    setIsHasMore: (state, action: PayloadAction<boolean>) => {
      state.isHasMore = action.payload;
    },
    setDashCampData: (state, action: PayloadAction<ICampaign[]>) => {
      state.dashboardCampData = action.payload;
    },
    setDashIsHasMore: (state, action: PayloadAction<boolean>) => {
      state.dashIsHasMore = action.payload;
    },
  },
});

export const {
  setCampaignData,
  setIsHasMore,
  setDashCampData,
  setDashIsHasMore,
} = campaignSlice.actions;

export default campaignSlice.reducer;
