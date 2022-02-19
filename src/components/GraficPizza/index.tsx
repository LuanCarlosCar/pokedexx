import { GraficProps } from "components/GraficTooltip/type";
import { lighten } from "polished";
import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function GraficPizza(props) {
  const { item } = props;
  const [dateGra, setDateGra] = useState<GraficProps | any>();

  function convert() {
    const newData = item?.stats.map((item) => ({
      ...item,
      name: item.stat.name,
    }));

    setDateGra(newData);
  }
  useEffect(() => {
    convert();
  }, [item]);
  const colors = [
    {
      cor: "red",
      name: "hp",
    },
    {
      cor: "orange",
      name: "attack",
    },
    {
      cor: "yellow",
      name: "defense",
    },
    {
      cor: "blue",
      name: "special-attack",
    },
    {
      cor: "green",
      name: "special-defense",
    },
    {
      cor: "pink",
      name: "speed",
    },
  ];
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dateGra}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          dataKey="base_stat"
          stroke="#574ae8"
          fill="#3ea1db"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
