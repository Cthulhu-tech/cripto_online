export interface BitcoinType {
    timezone:        string;
    serverTime:      number;
    rateLimits:      RateLimit[];
    exchangeFilters: any[];
    symbols:         Symbol[];
}

export interface RateLimit {
    rateLimitType: string;
    interval:      string;
    intervalNum:   number;
    limit:         number;
}

export interface Symbol {
    symbol:                          string;
    status:                          Status;
    baseAsset:                       string;
    baseAssetPrecision:              number;
    quoteAsset:                      QuoteAsset;
    quotePrecision:                  number;
    quoteAssetPrecision:             number;
    baseCommissionPrecision:         number;
    quoteCommissionPrecision:        number;
    orderTypes:                      OrderType[];
    icebergAllowed:                  boolean;
    ocoAllowed:                      boolean;
    quoteOrderQtyMarketAllowed:      boolean;
    allowTrailingStop:               boolean;
    cancelReplaceAllowed:            boolean;
    isSpotTradingAllowed:            boolean;
    isMarginTradingAllowed:          boolean;
    filters:                         Filter[];
    permissions:                     Permission[];
    defaultSelfTradePreventionMode:  SelfTradePreventionMode;
    allowedSelfTradePreventionModes: SelfTradePreventionMode[];
}

export enum SelfTradePreventionMode {
    None = "NONE",
}

export interface Filter {
    filterType:             FilterType;
    minPrice?:              string;
    maxPrice?:              string;
    tickSize?:              string;
    minQty?:                string;
    maxQty?:                string;
    stepSize?:              string;
    minNotional?:           string;
    applyToMarket?:         boolean;
    avgPriceMins?:          number;
    limit?:                 number;
    minTrailingAboveDelta?: number;
    maxTrailingAboveDelta?: number;
    minTrailingBelowDelta?: number;
    maxTrailingBelowDelta?: number;
    bidMultiplierUp?:       string;
    bidMultiplierDown?:     string;
    askMultiplierUp?:       string;
    askMultiplierDown?:     string;
    maxNumOrders?:          number;
    maxNumAlgoOrders?:      number;
    maxPosition?:           string;
}

export enum FilterType {
    IcebergParts = "ICEBERG_PARTS",
    LotSize = "LOT_SIZE",
    MarketLotSize = "MARKET_LOT_SIZE",
    MaxNumAlgoOrders = "MAX_NUM_ALGO_ORDERS",
    MaxNumOrders = "MAX_NUM_ORDERS",
    MaxPosition = "MAX_POSITION",
    MinNotional = "MIN_NOTIONAL",
    PercentPriceBySide = "PERCENT_PRICE_BY_SIDE",
    PriceFilter = "PRICE_FILTER",
    TrailingDelta = "TRAILING_DELTA",
}

export enum OrderType {
    Limit = "LIMIT",
    LimitMaker = "LIMIT_MAKER",
    Market = "MARKET",
    StopLossLimit = "STOP_LOSS_LIMIT",
    TakeProfitLimit = "TAKE_PROFIT_LIMIT",
}

export enum Permission {
    Leveraged = "LEVERAGED",
    Margin = "MARGIN",
    Spot = "SPOT",
    TrdGrp003 = "TRD_GRP_003",
    TrdGrp004 = "TRD_GRP_004",
    TrdGrp005 = "TRD_GRP_005",
    TrdGrp006 = "TRD_GRP_006",
}

export enum QuoteAsset {
    Aud = "AUD",
    Bidr = "BIDR",
    Bkrw = "BKRW",
    Bnb = "BNB",
    Brl = "BRL",
    Btc = "BTC",
    Busd = "BUSD",
    Bvnd = "BVND",
    Dai = "DAI",
    Doge = "DOGE",
    Dot = "DOT",
    Eth = "ETH",
    Eur = "EUR",
    Gbp = "GBP",
    Idrt = "IDRT",
    Ngn = "NGN",
    Pax = "PAX",
    Pln = "PLN",
    Ron = "RON",
    Rub = "RUB",
    Trx = "TRX",
    Try = "TRY",
    Tusd = "TUSD",
    Uah = "UAH",
    Usdc = "USDC",
    Usdp = "USDP",
    Usds = "USDS",
    Usdt = "USDT",
    Ust = "UST",
    Vai = "VAI",
    Xrp = "XRP",
    Zar = "ZAR",
}

export enum Status {
    Break = "BREAK",
    Trading = "TRADING",
}