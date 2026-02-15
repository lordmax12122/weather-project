import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Container } from "../Container/container";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
);

export const ForecastPrediction = ({ labels, temperatures }) => {
    const data = {
        labels,
        datasets: [
            {
                data: temperatures,
                borderColor: "#ff8c42",
                tension: 0.4,
                pointRadius: 3,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 0,
    };

    return <div className="chart__wrapper"> 
    <Container>
    <Line height={400} data={data} options={options} /> 
    </Container>
    </div>;
};
