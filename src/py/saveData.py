import queryDataFn as queryData
import saveDataFn as saveData

#查询当前所有正常上市交易的股票列表
data = queryData.stock_basic(exchange='', list_status='L', fields='ts_code,symbol,name,area,industry,market,exchange,list_date')
saveData.stock_basic(data)

