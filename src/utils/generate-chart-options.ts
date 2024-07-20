import { ThemeType } from "@/Providers/ThemeProvider";
import { EChartsOption } from "echarts";

const colorMap: { [key: string]: string } = {
    Images: "#22c55ee6", // green
    Documents: "#f97316e6", // orange
    Videos: "#3b82f6e6", // blue
    "Audio Files": "#ec4899e6", // magenta
    "Available Space": "#cccccc", // grey
};

export const generateChartOptions = (
    data: any[],
    type: "pie" | "bar" | "line",
    theme: ThemeType
): EChartsOption => {
    let transformedData = data.map((item) => ({
        name: item.title,
        value: item.currentSpace,
        itemStyle: { color: colorMap[item.title] },
    }));

    const totalSpace = data[0]?.totalSpace || 0;
    const usedSpace = data.reduce((sum, item) => sum + (item.currentSpace || 0), 0);
    const availableSpace = totalSpace - usedSpace;

    transformedData.push({
        name: "Available Space",
        value: availableSpace,
        itemStyle: { color: colorMap["Available Space"] },
    });

    const textColor = theme === "dark" ? "#ffffff" : "#000000";

    if (type === "pie") {
        return {
            title: {
                text: "File Storage Usage",
                left: "center",
                textStyle: {
                    color: textColor,
                },
            },
            tooltip: {
                trigger: "item",
                formatter: "{b}: {c} ({d}%)",
                textStyle: {
                    color: textColor,
                },
            },
            series: [
                {
                    name: "Space Used",
                    type: "pie",
                    radius: ["40%", "70%"], // Donut chart
                    avoidLabelOverlap: false,
                    padAngle: 5,
                    itemStyle: {
                        borderRadius: 10,
                    },
                    label: {
                        position: "outside",
                        formatter: "{b}: {c}MB ({d}%)",
                        color: textColor,
                    },
                    labelLine: {
                        show: true,
                        lineStyle: {
                            color: textColor,
                        },
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: "12",
                            fontWeight: "bold",
                            color: textColor,
                        },
                    },
                    data: transformedData,
                },
            ],
        };
    } else if (type === "bar") {
        return {
            title: {
                text: "File Storage Usage",
                left: "center",
                textStyle: {
                    color: textColor,
                },
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
                formatter: "{b}: {c}MB",
                textStyle: {
                    color: textColor,
                },
            },
            xAxis: {
                type: "category",
                data: transformedData.map((item) => item.name),
                axisLabel: {
                    rotate: 45,
                    interval: 0,
                    color: textColor,
                },
            },
            yAxis: {
                type: "value",
                axisLabel: {
                    formatter: "{value} MB",
                    color: textColor,
                },
                splitLine: {
                    lineStyle: {
                        color: theme === "dark" ? "#444" : "#ddd",
                    },
                },
            },
            series: [
                {
                    name: "Space Used",
                    type: "bar",
                    data: transformedData.map((item) => item.value),
                    itemStyle: {
                        color: (params) => colorMap[params.name] || "#000000",
                    },
                    label: {
                        show: true,
                        position: "top",
                        formatter: "{c}MB",
                        color: textColor,
                    },
                },
            ],
        };
    } else if (type === "line") {
        const lineData = data.map((item) => ({
            value: item.fileSize,
            name: item.createdAt,
        }));

        return {
            title: {
                text: "File Upload Over Time",
                left: "center",
                textStyle: {
                    color: textColor,
                },
            },
            tooltip: {
                trigger: "axis",
                formatter: "{b}: {c}MB",
                textStyle: {
                    color: textColor,
                },
            },
            xAxis: {
                type: "category",
                data: lineData.map((item) => item.name),
                axisLabel: {
                    color: textColor,
                },
            },
            yAxis: {
                type: "value",
                axisLabel: {
                    formatter: "{value} MB",
                    color: textColor,
                },
                splitLine: {
                    lineStyle: {
                        color: theme === "dark" ? "#444" : "#ddd",
                    },
                },
            },
            series: [
                {
                    name: "File Size",
                    type: "line",
                    data: lineData.map((item) => item.value),
                    itemStyle: {
                        color: theme === "dark" ? "#006fee" : "#000000",
                    },
                    lineStyle: {
                        color: theme === "dark" ? "#006fee" : "#006fee",
                    },
                    label: {
                        show: true,
                        position: "top",
                        formatter: "{c}MB",
                        color: textColor,
                    },
                },
            ],
        };
    }

    return {};
};
