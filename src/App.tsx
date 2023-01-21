import { ChartCoin } from "./components/chartCoin/chartCoin"
import { Socket } from "./components/socket/socket"
import { useSelector } from "react-redux"
import { Store } from "./redux/type"
import './style/global.scss'

export const App = () => {

  const coin = useSelector((store:Store) => store.typeSocket.type)

  return <>
    <Socket/>
    {coin && <ChartCoin/>}
  </>
}