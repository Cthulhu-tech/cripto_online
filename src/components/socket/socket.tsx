import { updateBitcoinInfoStore } from '../../redux/store/coinInfo/coinInfo'
import { updateBitcoinStore } from '../../redux/store/bitcoin/bitcoin'
import { updateSocketStore } from '../../redux/store/socket/soket'
import { BitcoinType } from '../../redux/store/bitcoin/type'
import { CoinType } from '../../redux/store/coinInfo/type'
import { DragAndDrop } from '../dragAndDrop/dragAndDrop'
import { useFetch } from '../../hook/usefetch/usefetch'
import { useDispatch, useSelector } from 'react-redux'
import { useWebsocket } from "../../utils/websocket"
import { DropList } from '../dropList/dropList'
import { Loading } from '../loading/loading'
import { useEffect, useMemo } from 'react'
import { Store } from '../../redux/type'

export const Socket = () => {

    const dispatch = useDispatch()
    const socketType = useSelector((store: Store) => store.typeSocket.type)
    const bitcoinTypeArray = useSelector((store: Store) => store.typeBitcoin.data)
    const [load, data, error, fetchData] = useFetch<BitcoinType>('GET')

    const updateData = (message:MessageEvent<string>) => {
        dispatch(updateBitcoinInfoStore(JSON.parse(message.data)))
    }

    useWebsocket('wss://stream.binance.com:9443/ws', JSON.stringify({
        method: "SUBSCRIBE",
        params: [socketType.toLowerCase() + '@ticker'],
        id: 1
    }),
    updateData)

    const arraySymbol = useMemo(() => bitcoinTypeArray?.symbols.filter(symbol => symbol.status === 'TRADING').map(symbol => symbol.symbol), [bitcoinTypeArray])

    const setData = (text: string) => dispatch(updateSocketStore(text))
    
    useEffect(() => {
        if(!data)fetchData('https://api.binance.com/api/v3/exchangeInfo')
        else dispatch(updateBitcoinStore(data))
    }, [data, bitcoinTypeArray, socketType])

    return <DragAndDrop size={{width: '200px', height: '36px'}}>
        {load
        ?
        <Loading/> 
        :
        <DropList callback={setData} start={socketType} array={arraySymbol ?? []}/>}
    </DragAndDrop>
}

