// components/FSEChart.tsx
"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { generateChartOptions } from "@/utils/generate-chart-options";
import { useTheme } from "@/Providers/ThemeProvider";

export interface FSEChartProps {
	data: any[];
	type: "pie" | "bar" | "line";
	style?: React.CSSProperties;
}

const FSEChart: React.FC<FSEChartProps> = ({ data, type, style }) => {
	const chartRef = useRef<HTMLDivElement>(null);
	const { theme } = useTheme();

	useEffect(() => {
		const chartInstance = echarts.init(chartRef.current as HTMLDivElement);
		const options = generateChartOptions(data, type, theme);
		chartInstance.setOption(options);

		const handleResize = () => {
			chartInstance.resize();
		};

		const handleClassChange = () => {
			const newOptions = generateChartOptions(data, type, theme);
			chartInstance.setOption(newOptions);
		};

		window.addEventListener("resize", handleResize);
		const observer = new MutationObserver(handleClassChange);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		return () => {
			window.removeEventListener("resize", handleResize);
			observer.disconnect();
			chartInstance.dispose();
		};
	}, [data, type, theme]);

	return <div ref={chartRef} style={style}></div>;
};

export default FSEChart;
