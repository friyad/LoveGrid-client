"use client";

import dynamic from "next/dynamic";
import React from "react";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartsSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-8">
        <div className="border-2">
          <ApexChart
            options={{
              colors: ["#ff9509", "#581796", "#2A5FFF", "#009940", "#00000070"],
              labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
            }}
            series={[44, 55, 13, 43, 22]}
            type="pie"
            width="100%"
            height={450}
            className="w-full h-full [&_text]:text-xs sm:[&_text]:text-lg xl:[&_text]:text-xs mxl:[&_text]:text-xl [&_.apexcharts-legend]:hidden sm:[&_.apexcharts-legend]:inline-block"
          />
        </div>

        <div className="border-2">
          <ApexChart
            options={{
              colors: ["#009940", "#581796"],
              labels: ["Your Donation", "Total Donation"],
              dataLabels: {
                enabled: true,
                offsetX: 0,
                offsetY: 0,
                style: {
                  colors: undefined,
                },
                background: {
                  enabled: true,
                  foreColor: "#fff",
                  padding: 8,
                  borderRadius: 2,
                  borderWidth: 1,
                  borderColor: "#fff",
                  opacity: 0.9,
                  dropShadow: {
                    enabled: false,
                  },
                },
                dropShadow: {
                  enabled: false,
                },
              },
            }}
            series={[44, 55]}
            type="pie"
            width="100%"
            height={450}
            className="w-full h-full [&_text]:text-xs sm:[&_text]:text-lg xl:[&_text]:text-xs mxl:[&_text]:text-xl [&_.apexcharts-legend]:hidden sm:[&_.apexcharts-legend]:inline-block"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
