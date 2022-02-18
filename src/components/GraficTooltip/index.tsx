import React, { useEffect, useState } from "react";
import { GraficProps } from "./type";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { lighten } from "polished";

export default function GraficTooltip(props) {
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
    },
    {
      cor: "orange",
    },
    {
      cor: "yellow",
    },
    {
      cor: "blue",
    },
    {
      cor: "green",
    },
  ];
  return (
    <ResponsiveContainer width="100%" aspect={4}>
      <BarChart
        width={500}
        height={300}
        data={dateGra}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />

        <Bar dataKey="base_stat" barSize={20} fill="#8884d8">
          {colors.map((item) => (
            <Cell key={item.cor} fill={lighten(0.2, item.cor)} />
          ))}
          <Cell key={item.cor} fill={lighten(0.04, "pink")} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
