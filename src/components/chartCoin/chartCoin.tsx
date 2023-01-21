import { CategoryScale, Chart as ChartJS, LineElement, LinearScale, PointElement, Title } from 'chart.js'
import { DragAndDrop } from "../dragAndDrop/dragAndDrop"
import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { Store } from "../../redux/type"
import { Line } from 'react-chartjs-2'
import { dateConvert } from '../../utils/dateConvert'
import ChartDataLabels from "chartjs-plugin-datalabels"

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    ChartDataLabels
)

export const ChartCoin = () => {

    const [dataCoin, setDataCoin] = useState<number[]>([])
    const coinName = useSelector((store:Store) => store.typeSocket.type)
    const coinInfo = useSelector((store:Store) => store.typeBitcoinInfo)
    const [labelCoin, setLabelCoin] = useState<string[]>([dateConvert(new Date())])

    useEffect(() => {
        setDataCoin((dataCoinPrev) => {
            if(dataCoinPrev.length >= 10) dataCoinPrev.shift()
            if(coinInfo.data?.c) dataCoinPrev.push(Number(coinInfo.data?.c))
            return dataCoinPrev
        })
        setLabelCoin((labelCoinPrev) => {
            if(labelCoinPrev.length >= 10) labelCoinPrev.shift()
            labelCoinPrev.push(dateConvert(new Date(coinInfo.data?.E ?? new Date())))
            return labelCoinPrev
        })
    }, [coinInfo, coinName, labelCoin])

    const data = {
        labels: labelCoin,
        datasets: [
            {
                labels: labelCoin,
                data: dataCoin,
                backgroundColor: 'white',
                borderColor: 'red',
                pointBorderColor: 'black',
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
           title: {
              display: true,
              text: 'Coin ' + coinName
            },
            datalabels: {
                display: true,
                color: "white"
              }
        },
        scales: {
            y: {
                min: Number(coinInfo.data?.l) ?? 0,
                max: Number(coinInfo.data?.h) * 1.2 ?? 0
            },
            x: {
                min: 1,
                max: 10
            }
        }
    }

    return <DragAndDrop size={{width: '400px', height: '200px'}}>
       <Line data={data} options={options} plugins={[ChartDataLabels]} />
    </DragAndDrop>
}